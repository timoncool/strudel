import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const DOCS_PATH = path.join(process.cwd(), "..", "docs_md");
async function searchDocumentation(query, maxResults = 5) {
  const results = [];
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 2);
  const searchPaths = [
    path.join(DOCS_PATH, "ru"),
    path.join(DOCS_PATH, "en")
  ];
  for (const searchPath of searchPaths) {
    try {
      await searchDirectory(searchPath, queryWords, queryLower, results);
    } catch (e) {
      console.error(`Error searching ${searchPath}:`, e);
    }
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, maxResults).map((r) => r.content);
}
async function searchDirectory(dir, queryWords, queryLower, results) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await searchDirectory(fullPath, queryWords, queryLower, results);
      } else if (entry.name.endsWith(".md")) {
        try {
          const content = await fs.readFile(fullPath, "utf-8");
          const contentLower = content.toLowerCase();
          let score = 0;
          if (contentLower.includes(queryLower)) {
            score += 10;
          }
          for (const word of queryWords) {
            const matches = (contentLower.match(new RegExp(word, "g")) || []).length;
            score += Math.min(matches, 10);
          }
          if (entry.name.includes("mini-notation")) score += 15;
          if (entry.name.includes("effects")) score += 10;
          if (entry.name.includes("sounds") || entry.name.includes("zvuki")) score += 10;
          if (entry.name.includes("samples")) score += 10;
          if (entry.name.includes("synth")) score += 8;
          if (entry.name.includes("drum")) score += 8;
          if (score > 0) {
            const relevantContent = extractRelevantSection(content, queryWords, 2e3);
            results.push({
              file: fullPath,
              content: `## ${entry.name}
${relevantContent}`,
              score
            });
          }
        } catch (e) {
        }
      }
    }
  } catch (e) {
  }
}
function extractRelevantSection(content, queryWords, maxLength) {
  const lines = content.split("\n");
  content.toLowerCase();
  let bestStart = 0;
  let bestScore = 0;
  for (let i = 0; i < lines.length; i++) {
    const lineLower = lines[i].toLowerCase();
    let score = 0;
    for (const word of queryWords) {
      if (lineLower.includes(word)) {
        score += 5;
      }
    }
    if (lines[i].startsWith("#")) {
      score += 3;
    }
    if (score > bestScore) {
      bestScore = score;
      bestStart = i;
    }
  }
  const startLine = Math.max(0, bestStart - 5);
  const section = lines.slice(startLine);
  let result = "";
  for (const line of section) {
    if (result.length + line.length > maxLength) break;
    result += line + "\n";
  }
  return result.trim();
}
const SYSTEM_PROMPT = `Ты - Bulka AI, музыкальный ассистент для live coding музыки на платформе Bulka/Strudel.

## Возможности:
- Помогать писать код на Strudel (мини-нотация + JavaScript)
- Объяснять синтаксис и функции
- Рекомендовать звуки и эффекты
- Исправлять ошибки в коде

## Правила:
1. Отвечай на русском
2. Давай конкретные примеры кода
3. Используй только документированные функции
4. Объясняй что делает код

## Контекст из документации:
`;
async function callOpenAI(apiKey, model, messages, systemPrompt) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      stream: true,
      temperature: 0.7
    })
  });
  return response;
}
async function callAnthropic(apiKey, model, messages, systemPrompt) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model,
      max_tokens: 4096,
      system: systemPrompt,
      messages,
      stream: true
    })
  });
  return response;
}
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { messages, apiKey, provider, model, currentCode } = body;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "API ключ не указан. Добавьте его в настройках чата." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const lastUserMessage = messages.filter((m) => m.role === "user").pop();
    const query = lastUserMessage?.content || "";
    const docs = await searchDocumentation(query, 5);
    const docsContext = docs.join("\n\n---\n\n");
    let fullSystemPrompt = SYSTEM_PROMPT + docsContext;
    if (currentCode) {
      fullSystemPrompt += `

## Текущий код в редакторе:
\`\`\`
${currentCode}
\`\`\``;
    }
    let response;
    if (provider === "anthropic") {
      response = await callAnthropic(apiKey, model || "claude-3-5-sonnet-20241022", messages, fullSystemPrompt);
    } else {
      response = await callOpenAI(apiKey, model || "gpt-4o-mini", messages, fullSystemPrompt);
    }
    if (!response.ok) {
      const error = await response.text();
      console.error("API error:", error);
      return new Response(
        JSON.stringify({ error: `Ошибка API: ${response.status}` }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      }
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Внутренняя ошибка сервера" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
