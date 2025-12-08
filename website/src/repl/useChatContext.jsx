/**
 * useChatContext - Hook for managing AI chat state
 *
 * Uses server-side RAG for documentation search.
 * API key stored in localStorage and sent with each request.
 */

import { useState, useCallback, useRef } from 'react';
import { useSettings } from '../settings.mjs';

/**
 * Generate unique message ID
 */
function generateId() {
  return `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Parse SSE stream from OpenAI
 */
async function* parseOpenAIStream(reader) {
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        if (data === '[DONE]') return;
        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) yield content;
        } catch (e) {
          // Skip invalid JSON
        }
      }
    }
  }
}

/**
 * Parse SSE stream from Anthropic
 */
async function* parseAnthropicStream(reader) {
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        try {
          const parsed = JSON.parse(data);
          if (parsed.type === 'content_block_delta') {
            const content = parsed.delta?.text;
            if (content) yield content;
          }
        } catch (e) {
          // Skip invalid JSON
        }
      }
    }
  }
}

/**
 * Main chat hook
 */
export function useChatContext(replContext) {
  const settings = useSettings();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  /**
   * Send message to AI
   */
  const sendMessage = useCallback(async (content) => {
    if (!content.trim() || isLoading) return;

    const { aiApiKey, aiProvider, aiModel } = settings;

    if (!aiApiKey) {
      setError('API ключ не установлен. Откройте настройки и добавьте ключ.');
      return;
    }

    setError(null);
    setIsLoading(true);

    // Add user message
    const userMessage = {
      id: generateId(),
      role: 'user',
      content: content.trim(),
    };

    const assistantMessage = {
      id: generateId(),
      role: 'assistant',
      content: '',
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
    setInput('');

    try {
      // Get current code from editor
      const currentCode = replContext?.editorRef?.current?.code || '';

      // Prepare messages for API
      const apiMessages = [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content,
      }));

      abortControllerRef.current = new AbortController();

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          apiKey: aiApiKey,
          provider: aiProvider,
          model: aiModel,
          currentCode,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP ${response.status}`);
      }

      // Parse streaming response
      const reader = response.body.getReader();
      const parser = aiProvider === 'anthropic'
        ? parseAnthropicStream(reader)
        : parseOpenAIStream(reader);

      let fullContent = '';

      for await (const chunk of parser) {
        fullContent += chunk;
        setMessages(prev => {
          const updated = [...prev];
          const lastIdx = updated.length - 1;
          if (updated[lastIdx]?.role === 'assistant') {
            updated[lastIdx] = { ...updated[lastIdx], content: fullContent };
          }
          return updated;
        });
      }

    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('[Chat] Aborted');
      } else {
        console.error('[Chat] Error:', err);
        setError(err.message);
        // Remove empty assistant message
        setMessages(prev => prev.filter(m => m.content));
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, [messages, isLoading, settings, replContext]);

  const stop = useCallback(() => {
    abortControllerRef.current?.abort();
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e?.preventDefault();
    sendMessage(input);
  }, [input, sendMessage]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }, [input, sendMessage]);

  return {
    messages,
    input,
    isLoading,
    error,
    sendMessage,
    stop,
    clearMessages,
    setInput,
    handleInputChange,
    handleSubmit,
    handleKeyDown,
    // Settings for UI
    hasApiKey: !!settings.aiApiKey,
    provider: settings.aiProvider,
    model: settings.aiModel,
  };
}

export default useChatContext;
