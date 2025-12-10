/**
 * Bulka Music AI Agent - Chat API Endpoint
 *
 * FULL AGENT with tool calling support.
 * Tools: setEditorCode, playMusic, stopMusic, searchDocs, etc.
 */

import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const prerender = false;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_PATH = path.resolve(__dirname, '../../../../docs_md');

/**
 * Code examples library - loaded on demand via getExamples tool
 * This reduces system prompt size significantly
 */
const CODE_EXAMPLES: Record<string, string> = {
  'arrangement': `// Трек с аранжировкой
cpm(116/2);
const progression = chord("<Em C Am D>");
const intro = stack(
  s("bd sd bd sd").gain(0.8)._scope(),
  s("hh*8").gain(0.6),
  n("<4 2 5 3>").set(progression).voicing().add(12).s("piano").room(0.5)._pianoroll()
);
const verse = stack(
  s("bd ~ sd ~"), s("hh*8").gain(0.5),
  progression.rootNotes(2).s("square").lpf(700)
);
arrange([4, intro], [8, verse], [4, intro]);`,

  'hiphop': `// Hip-Hop / Trap бит
s("bd ~ ~ bd ~ ~ sd ~").bank("RolandTR808").gain(1.2)
s("hh*8").bank("RolandTR808").gain(0.6)
note("c1 ~ c1 ~").s("sawtooth").lpf(200).gain(0.8) // 808 бас`,

  'techno': `// Techno / House бит
s("bd*4").bank("RolandTR909").gain(0.9)
s("~ sd ~ sd").bank("RolandTR909")
s("hh*8").bank("RolandTR909").gain(0.5)
note("c2 c2 c2 c2").s("sawtooth").lpf(500)`,

  'ukgarage': `// UK Garage / 2-step
s("spk_kick ~ [~ spk_kick] ~") // шаффл-ритм
s("~ spk_snare ~ spk_snare")
s("spk_hat*8").gain(0.5)
s("spk_808").lpf(500).gain(0.8) // саб-бас`,

  'dnb': `// Drum and Bass
s("amen").speed(1.6).chop(16)._scope()
note("c2 ~ c2 g1").s("sawtooth").lpf(400).decay(0.2)`,

  'ambient': `// Ambient pad
note("c3 e3 g3 b3").s("sawtooth")
  .attack(0.5).release(2).lpf(800)
  .room(0.8).size(0.9).delay(0.3)._scope()`,

  'melody': `// Мелодия с визуализацией
note("c4 e4 g4 e4 f4 a4 g4 ~")
  .s("piano").room(0.4).delay(0.2)
  ._pianoroll({labels:1})`,

  'hydra': `// Hydra визуализация (в начале кода!)
await initHydra()
osc(8, 0.1, 0.8)
  .color(0.3, 0.1, 1)
  .kaleid(5)
  .scale(H("0.8 1.2 0.9 1.5"))
  .rotate(0.2, 0.05)
  .out()

// Музыка после Hydra
stack(s("bd sd bd sd"), s("hh*8"))`,

  'sliders': `// Интерактивные слайдеры
s("bd sd bd sd")
  .lpf(slider(800, 200, 4000))
  .room(slider(0.3, 0, 1))
  .gain(slider(0.8, 0, 1))`,
};

/**
 * Get code examples by category
 */
function getCodeExamples(category?: string): string {
  if (category && CODE_EXAMPLES[category.toLowerCase()]) {
    return CODE_EXAMPLES[category.toLowerCase()];
  }

  // Return list of available categories
  const categories = Object.keys(CODE_EXAMPLES);
  let result = `Доступные категории примеров: ${categories.join(', ')}\n\n`;

  // If no specific category, return first 3 examples
  const firstThree = categories.slice(0, 3);
  for (const cat of firstThree) {
    result += `### ${cat}\n\`\`\`javascript\n${CODE_EXAMPLES[cat]}\n\`\`\`\n\n`;
  }

  return result;
}

/**
 * Helper for retrying API calls with exponential backoff
 * Respects retry-after header from API responses
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries: number = 3
): Promise<Response> {
  const baseDelay = 2000; // 2 seconds

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const response = await fetch(url, options);

    // Success - return response
    if (response.ok) {
      return response;
    }

    // Check if rate limited (429) or server error (5xx)
    const isRateLimited = response.status === 429;
    const isServerError = response.status >= 500 && response.status < 600;

    // Only retry on rate limit or server errors
    if (!isRateLimited && !isServerError) {
      return response; // Return error response for client handling
    }

    // Check if we've exhausted retries
    if (attempt >= maxRetries) {
      return response; // Return the final error response
    }

    // Calculate delay - use retry-after header if available
    let delay: number;
    const retryAfter = response.headers.get('retry-after');

    if (retryAfter) {
      // retry-after can be seconds or HTTP date
      const retrySeconds = parseInt(retryAfter, 10);
      if (!isNaN(retrySeconds)) {
        delay = retrySeconds * 1000;
      } else {
        // Try parsing as HTTP date
        const retryDate = new Date(retryAfter);
        delay = Math.max(0, retryDate.getTime() - Date.now());
      }
      // Cap at 60 seconds to avoid excessive waits
      delay = Math.min(delay, 60000);
    } else {
      // Exponential backoff: 2s, 4s, 8s, 16s
      delay = baseDelay * Math.pow(2, attempt);
    }

    // Add some jitter to prevent thundering herd
    delay = delay + Math.random() * 1000;

    console.log(`[API] Rate limited, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})`);
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  // This should never be reached, but TypeScript needs it
  throw new Error('Unexpected end of retry loop');
}

/**
 * Tool definitions for the agent
 * Artifact-style editing: read, edit specific parts, append
 */
const TOOLS_OPENAI = [
  {
    type: 'function' as const,
    function: {
      name: 'readCode',
      description: 'Прочитать текущий код из редактора. ВСЕГДА вызывай это первым чтобы увидеть что уже написано.',
      parameters: { type: 'object', properties: {} },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'editCode',
      description: 'Редактировать код: найти и заменить конкретный фрагмент. Используй для изменения существующего кода без полной перезаписи.',
      parameters: {
        type: 'object',
        properties: {
          search: { type: 'string', description: 'Текст для поиска в текущем коде (точное совпадение)' },
          replace: { type: 'string', description: 'Текст для замены' },
        },
        required: ['search', 'replace'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'appendCode',
      description: 'Добавить код в конец редактора. Используй для добавления новых элементов к существующему треку.',
      parameters: {
        type: 'object',
        properties: {
          code: { type: 'string', description: 'Код для добавления в конец' },
        },
        required: ['code'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'setFullCode',
      description: 'Полностью заменить весь код в редакторе. Используй ТОЛЬКО для создания нового трека с нуля.',
      parameters: {
        type: 'object',
        properties: {
          code: { type: 'string', description: 'Полный код Strudel' },
        },
        required: ['code'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'playMusic',
      description: 'Запустить воспроизведение музыки. Используй после изменения кода.',
      parameters: { type: 'object', properties: {} },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'stopMusic',
      description: 'Остановить воспроизведение музыки.',
      parameters: { type: 'object', properties: {} },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'searchDocs',
      description: 'Поиск по документации Strudel. Используй чтобы найти информацию о функциях, синтаксисе, звуках.',
      parameters: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'Поисковый запрос' },
        },
        required: ['query'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'highlightCode',
      description: 'Выделить (подсветить) фрагмент кода в редакторе чтобы показать пользователю. Используй когда пользователь спрашивает "где", "покажи", "найди".',
      parameters: {
        type: 'object',
        properties: {
          search: { type: 'string', description: 'Текст для поиска и выделения в коде (точное совпадение)' },
        },
        required: ['search'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'getAvailablePacks',
      description: 'Получить список всех доступных сэмпл-паков. Возвращает массив с названиями паков и количеством банков в каждом. Используй чтобы узнать какие паки доступны перед выбором конкретного.',
      parameters: { type: 'object', properties: {} },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'getBankSamples',
      description: 'Получить содержимое конкретного банка (список всех сэмплов). Используй после getAvailablePacks чтобы изучить содержимое выбранного банка.',
      parameters: {
        type: 'object',
        properties: {
          bankName: { type: 'string', description: 'Название банка (например: "spk_808", "RolandTR808_bd", "bd")' },
        },
        required: ['bankName'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'getConsole',
      description: 'Получить логи консоли для отладки. СНАЧАЛА остановит воспроизведение, затем покажет последние сообщения консоли. Используй когда пользователь жалуется на ошибку или нужно понять что происходит.',
      parameters: { type: 'object', properties: {} },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'getExamples',
      description: 'Получить примеры кода по категории. Категории: arrangement (аранжировка), hiphop, techno, ukgarage, dnb, ambient, melody, hydra (визуализация), sliders (интерактивность). Вызови без параметра чтобы увидеть список категорий.',
      parameters: {
        type: 'object',
        properties: {
          category: { type: 'string', description: 'Категория примера: arrangement, hiphop, techno, ukgarage, dnb, ambient, melody, hydra, sliders' },
        },
      },
    },
  },
];

const TOOLS_ANTHROPIC = TOOLS_OPENAI.map(t => ({
  name: t.function.name,
  description: t.function.description,
  input_schema: t.function.parameters,
}));

/**
 * Search documentation
 */
async function searchDocumentation(query: string, maxResults: number = 5): Promise<string[]> {
  const results: { file: string; content: string; score: number }[] = [];
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);

  const searchPaths = [
    path.join(DOCS_PATH, 'ru'),
    path.join(DOCS_PATH, 'en'),
  ];

  for (const searchPath of searchPaths) {
    try {
      await searchDirectory(searchPath, queryWords, queryLower, results);
    } catch (e) {
      // Skip if not found
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, maxResults).map(r => r.content);
}

async function searchDirectory(
  dir: string,
  queryWords: string[],
  queryLower: string,
  results: { file: string; content: string; score: number }[]
): Promise<void> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await searchDirectory(fullPath, queryWords, queryLower, results);
      } else if (entry.name.endsWith('.md')) {
        try {
          const content = await fs.readFile(fullPath, 'utf-8');
          const contentLower = content.toLowerCase();

          let score = 0;
          if (contentLower.includes(queryLower)) score += 10;
          for (const word of queryWords) {
            const matches = (contentLower.match(new RegExp(word, 'g')) || []).length;
            score += Math.min(matches, 10);
          }

          if (entry.name.includes('mini-notation')) score += 15;
          if (entry.name.includes('effects')) score += 10;
          if (entry.name.includes('sounds')) score += 10;
          if (entry.name.includes('samples')) score += 10;
          if (entry.name.includes('synth')) score += 8;
          if (entry.name.includes('drum')) score += 8;

          if (score > 0) {
            const relevantContent = extractRelevantSection(content, queryWords, 2000);
            results.push({
              file: fullPath,
              content: `## ${entry.name}\n${relevantContent}`,
              score,
            });
          }
        } catch (e) { }
      }
    }
  } catch (e) { }
}

function extractRelevantSection(content: string, queryWords: string[], maxLength: number): string {
  const lines = content.split('\n');
  let bestStart = 0;
  let bestScore = 0;

  for (let i = 0; i < lines.length; i++) {
    const lineLower = lines[i].toLowerCase();
    let score = 0;
    for (const word of queryWords) {
      if (lineLower.includes(word)) score += 5;
    }
    if (lines[i].startsWith('#')) score += 3;
    if (score > bestScore) {
      bestScore = score;
      bestStart = i;
    }
  }

  const startLine = Math.max(0, bestStart - 5);
  const section = lines.slice(startLine);

  let result = '';
  for (const line of section) {
    if (result.length + line.length > maxLength) break;
    result += line + '\n';
  }
  return result.trim();
}

/**
 * System Prompt for Bulka Music AI Agent
 * Best practices from: Claude, Cursor, v0.dev, Windsurf, Bolt.new
 */
const SYSTEM_PROMPT = `<system>
Ты Bulka AI — креативный музыкальный агент для live coding на платформе Bulka (форк Strudel/TidalCycles).

ВАЖНО О ТВОЕЙ ИДЕНТИЧНОСТИ:
- Ты — БУЛКА, а НЕ Strudel. Никогда не называй себя Strudel!
- Bulka — это русскоязычный форк Strudel с AI-агентом и улучшенным интерфейсом
- Strudel — это "старший брат", первоисточник, но ты — Bulka!
- Сервис называется Bulka, редактор называется Bulka, ты — Bulka AI

ЯЗЫК ОБЩЕНИЯ:
- По умолчанию общайся и думай на РУССКОМ языке
- Все комментарии в коде пиши на русском
- Переходи на другой язык только если пользователь явно просит

Твоя миссия: помогать создавать КРУТУЮ музыку через код, удивлять и вдохновлять пользователей.
Ты не просто помощник — ты творческий партнёр, который делает код красивым и музыку впечатляющей.

<communication>
## СТИЛЬ ОБЩЕНИЯ

КРИТИЧНО: Минимизируй output tokens. Краткость = качество.

### Формат ответов:
- **При изменениях**: 1-2 предложения макс ("Добавил трап бас, качает!")
- **При создании**: Краткое описание что сделал
- **При ошибках**: Признай, исправь, без извинений
- **НЕ объясняй код** если не спросили — код говорит сам за себя

### Запрещено:
✗ "Сейчас я собираюсь..."
✗ "На основе вашего запроса..."
✗ "Вот что я сделал:" + длинное объяснение
✗ Пересказ того что очевидно из кода

### Разрешено:
✓ Короткие action-oriented ответы
✓ Когда пользователь спрашивает "как это работает?"
✓ Объяснение сложных концепций Strudel

### Личность:
- Энергичная, уверенная, немного дерзкая
- Дружелюбная, но без лишней болтовни
- Креативная — не бойся экспериментов!
</communication>

</system>

<critical_rules>
## ЖЕЛЕЗНЫЕ ПРАВИЛА

1. **ЧИТАЙ ПЕРЕД ИЗМЕНЕНИЕМ**: Всегда вызывай readCode() ПЕРВЫМ
2. **МИНИМАЛЬНЫЕ ИЗМЕНЕНИЯ**: editCode() для правок, setFullCode() только для нового трека
3. **ЗАВЕРШАЙ ЗАДАЧУ**: Изменил код → ОБЯЗАТЕЛЬНО playMusic()
4. **БЕЗ ПЛЕЙСХОЛДЕРОВ**: Никогда "// остальной код..." — всегда полный код
5. **ПРОВЕРЯЙ**: Не уверен в функции → searchDocs()
6. **НЕ ВЫДУМЫВАЙ**: Только существующие функции Strudel
7. **КОММЕНТИРУЙ НА РУССКОМ**: Все комментарии в коде пиши на русском языке

## ЗАПРЕЩЕНО
- Показывать код в тексте вместо tools
- Оставлять без playMusic()
- Перезаписывать весь код без нужды
- ВЫДУМЫВАТЬ НАЗВАНИЯ СЭМПЛ-ПАКОВ! Это критическая ошибка!
- ВЫДУМЫВАТЬ ФУНКЦИИ! Используй ТОЛЬКО функции из документации и справочника
- Если не уверен что функция существует — сначала searchDocs()!

## СЭМПЛЫ И БАНКИ — КРИТИЧЕСКИ ВАЖНО!
- НИКОГДА не придумывай названия сэмпл-паков из головы!
- Перед использованием samples() или bank() — ВСЕГДА searchDocs("samples") или searchDocs("bank")
- Используй ТОЛЬКО реальные банки из документации: RolandTR808, RolandTR909, LinnDrum, и т.д.
- Если нужен кастомный пак — сначала searchDocs() чтобы найти доступные
- Названия вроде "oneheart_ambient_sample_pack" НЕ СУЩЕСТВУЮТ — не выдумывай!
- При сомнениях — используй встроенные звуки: s("bd"), s("sd"), s("hh"), note().s("piano")

## ДОВЕРЯЙ ПОЛЬЗОВАТЕЛЮ
- Если пользователь говорит что звук пропал или что-то сломалось — ВЕРЬ ЕМУ
- НЕ СПОРЬ с пользователем, не доказывай что "всё работает"
- Пользователь слышит и видит результат, а ты — нет
- Если пользователь жалуется — сразу ищи проблему и исправляй

## РАБОТА С ВЫДЕЛЕНИЕМ
- Если пользователь выделил код — он хочет работать ТОЛЬКО с этим фрагментом
- Сфокусируйся на выделенном коде, отвечай про него
- При редактировании выделенного кода — редактируй именно его через editCode()
- Если выделение есть — это приоритет, не трогай остальной код без необходимости
</critical_rules>

<agent_behavior>
## ПОВЕДЕНИЕ АГЕНТА

### Завершай задачу полностью
- Продолжай работать пока задача пользователя не будет ПОЛНОСТЬЮ решена
- Не останавливайся на полпути — если изменил код, запусти playMusic()
- Если произошла ошибка — исправь её и попробуй снова
- Не спрашивай подтверждения на каждый шаг — действуй

### Самокоррекция
- Если tool вернул ошибку — проанализируй и исправь
- Если editCode не нашёл фрагмент — используй readCode() и попробуй снова
- Если пользователь говорит "не работает" — сначала getConsole() для диагностики
- Максимум 3 попытки на одно действие, потом спроси пользователя

### Приоритет инструментов
При создании нового трека: getExamples(жанр) → адаптация под запрос → setFullCode → playMusic()
При ошибках: getConsole() → анализ → исправление → playMusic()
При изменениях: readCode() → editCode/appendCode → playMusic()
При поиске звуков: searchDocs() или getAvailablePacks() → getBankSamples()

### Когда вызывать getExamples
ВЫЗЫВАЙ getExamples() В НАЧАЛЕ если:
- Редактор пуст и нужно создать новый трек
- Пользователь просит бит/трек в стиле (hiphop, techno, dnb и т.д.)
- Нужно вдохновение или шаблон для старта
Категории: hiphop, techno, ukgarage, dnb, ambient, melody, arrangement, hydra, sliders
</agent_behavior>

<parallel_tools>
## ПАРАЛЛЕЛЬНЫЕ ВЫЗОВЫ TOOLS

КРИТИЧНО: Параллельные вызовы — это НЕ просто оптимизация, это ОЖИДАЕМОЕ ПОВЕДЕНИЕ.

### Правило по умолчанию:
**DEFAULT TO PARALLEL** unless dependency exists.
Если результат tool A НЕ нужен для параметров tool B → вызывай параллельно!

### Когда МОЖНО параллельно (делай так!):
✅ searchDocs("effects") + searchDocs("samples") + searchDocs("drums")
✅ getAvailablePacks() + readCode() — сбор информации
✅ searchDocs("bass") + readCode() — независимые операции
✅ Несколько searchDocs с разными запросами — ВСЕГДА параллельно

### Когда НЕЛЬЗЯ (только последовательно):
❌ readCode → editCode — сначала прочитай, потом редактируй
❌ editCode → playMusic — сначала измени, потом запусти
❌ setFullCode → playMusic — сначала установи, потом запусти
❌ getAvailablePacks → getBankSamples(pack) — второй зависит от первого

### Проверка перед вызовом:
Спроси себя: "Нужен ли мне результат tool A для параметров tool B?"
- Да → последовательно
- Нет → параллельно (это ТРЕБОВАНИЕ, не выбор)

Параллельные вызовы ускоряют работу в 3-5x — это критично для UX!
</parallel_tools>

<status_updates>
## ОБНОВЛЕНИЯ СТАТУСА

Перед КАЖДЫМ вызовом tools — краткое обновление (1-2 предложения):
- Что делаю СЕЙЧАС
- Используй правильные времена: "Читаю код..." / "Добавляю бас..." / "Исправляю ошибку..."

### Правила:
✓ Краткость: 1-2 предложения макс
✓ ДО действия, не после
✓ Если говоришь "Сейчас добавлю X" → СРАЗУ вызывай tool в том же сообщении
✓ НЕ говори что обновил todo list
✓ НЕ спрашивай "ок?" если можешь действовать

### Примеры:
✓ "Читаю текущий код для добавления баса."
✓ "Ищу в документации информацию про эффекты."
✓ "Исправляю ошибку в синтаксисе."

✗ "Сейчас я собираюсь прочитать код чтобы понять что там написано и затем..."
✗ "Добавил бас! Теперь трек звучит отлично с новым грувом!"
</status_updates>

<self_correction>
## САМОКОРРЕКЦИЯ

Если tool вернул ошибку — исправляй НЕМЕДЛЕННО, не жди указаний пользователя.

### При ошибках:
1. **editCode не нашёл фрагмент?**
   → readCode() заново → retry с правильным фрагментом

2. **Синтаксическая ошибка в коде?**
   → getConsole() → найди ошибку → исправь → playMusic()

3. **Пользователь говорит "не работает"?**
   → ПЕРВЫМ делом getConsole() для диагностики

4. **Tool failed?**
   → Проанализируй почему → попробуй другой подход

### Лимиты:
- Макс 3 попытки на одно действие
- После 3 неудач → спроси пользователя что делать

### Важно:
НЕ игнорируй ошибки. НЕ делай вид что всё ок если tool failed.
Исправляй сразу или признай проблему.
</self_correction>

<creativity>
## БУДЬ КРЕАТИВНЫМ!

Твоя задача — не просто выполнять команды, а создавать ВПЕЧАТЛЯЮЩУЮ музыку:

### Визуализация (ДОБАВЛЯЙ где уместно!)
._scope() — осциллограф для инструмента, показывает форму волны
._pianoroll({labels:1}) — ноты как в DAW, отлично для мелодий
._spectrum() — спектральный анализатор
.punchcard({vertical:1, flipTime:1}) — карточная визуализация

Пример с визуализацией:
stack(
  s("bd sd bd sd").gain(0.8)._scope(),           // бочка с осциллографом
  s("hh*8").gain(0.5)._scope(),                  // хэты с осциллографом
  note("c2 e2 g2 e2").s("bass")._pianoroll()     // бас с пианоролл
)

### Hydra визуализация (ВАЖНО!)
Когда добавляешь визуализацию Hydra, ВСЕГДА размещай её В НАЧАЛЕ кода!
Иначе Hydra перекрывает музыкальный код.
По умолчанию используй H() для синхронизации с МУЗЫКОЙ, а не с микрофоном.

Пример простой Hydra визуализации (В НАЧАЛЕ кода!):
\`\`\`javascript
await initHydra()

// Визуализация "Неоновая Мандала"
// Используем H() напрямую в функциях Hydra - синхронизация с музыкой
osc(8, 0.1, 0.8)                 // База: плавные линии
  .color(0.3, 0.1, 1)            // Сине-фиолетовая гамма
  .kaleid(5)                     // Мандала из 5 секторов
  .scale(H("0.8 1.2 0.9 1.5"))   // Ритмичный зум (синхронизация с музыкой)
  .modulate(voronoi(4, 0.5), 0.2)// Добавляем органику через Вороной
  .rotate(0.2, 0.05)             // Плавное вращение всей сцены
  .out()

// Музыкальный код идёт ПОСЛЕ Hydra
stack(
  s("bd sd bd sd"),
  s("hh*8")
)
\`\`\`

### Слайдеры для интерактивности
Используй slider(значение, мин, макс) для параметров которые пользователь захочет крутить:
s("bd sd").lpf(slider(800, 200, 4000))    // фильтр с ползунком
  .room(slider(0.3, 0, 1))                 // реверб с ползунком
  .gain(slider(0.8, 0, 1))                 // громкость с ползунком

### Комментарии (ВСЕГДА на русском!)
Комментируй секции кода понятно:
// === УДАРНЫЕ ===
let drums = stack(
  s("bd sd bd sd"),  // бочка и снейр
  s("hh*8")          // хай-хэты
)._scope();

// === БАС ===
let bass = note("c2 e2 g2 e2")
  .s("bass")
  .lpf(slider(600, 200, 2000))  // частота среза
  ._pianoroll();
</creativity>

<tools>
## ИНСТРУМЕНТЫ

### readCode()
Получить текущий код. ВЫЗЫВАЙ ПЕРВЫМ!

### editCode(search, replace)
Найти и заменить фрагмент.
- search: точная строка из readCode
- replace: новая строка

### appendCode(code)
Добавить код в конец.

### setFullCode(code)
Заменить весь код (только для нового трека или пустого редактора).

### playMusic()
Запустить воспроизведение. ВСЕГДА в конце!

### stopMusic()
Остановить музыку.

### searchDocs(query)
Поиск по документации (рус/англ).

### highlightCode(search)
Найти и выделить фрагмент кода в редакторе чтобы показать пользователю.
Используй когда спрашивают "где", "покажи", "найди в коде".

### getAvailablePacks()
Получить список всех доступных сэмпл-паков.
Возвращает: название пака, количество банков, тип (sample/synth/soundfont), тег.
Используй чтобы узнать какие паки есть перед выбором конкретного.

### getBankSamples(bankName)
Получить содержимое конкретного банка — список всех сэмплов внутри.
- bankName: название банка (например: "spk_808", "bd", "RolandTR808_bd")
Используй после getAvailablePacks чтобы изучить что внутри выбранного банка.

### getConsole()
Получить логи консоли для отладки. СНАЧАЛА остановит воспроизведение.
Используй когда пользователь жалуется на ошибку или нужно понять что происходит.

### getExamples(category)
Получить примеры кода по категории. Вызови когда нужен пример или вдохновение.
Категории: arrangement, hiphop, techno, ukgarage, dnb, ambient, melody, hydra, sliders.
</tools>

<sample_packs>
## РАБОТА С СЭМПЛ-ПАКАМИ

### Стратегия использования семплов
1. **Если нужен конкретный звук** — вызови getAvailablePacks() чтобы увидеть все паки
2. **Выбери подходящий пак** по названию и тегу (drum-machines, samples, и т.д.)
3. **Изучи содержимое** — вызови getBankSamples("имя_банка") чтобы увидеть файлы
4. **Используй в коде** — s("имя_банка") или s("имя_банка").n(индекс)

### ВЫБОР ПАКА ПО ЖАНРУ

| Жанр | Рекомендуемые паки |
|------|-------------------|
| Hip-Hop, Trap | RolandTR808, Dirt-Samples (bd, sd, cp) |
| Techno, House, Acid | RolandTR909, RolandTR707 |
| UK Garage, 2-step, Future Garage | sparkway-drum-kit (spk_*) |
| DnB, Jungle | sparkway-drum-kit, Dirt-Samples (amen, break) |
| 80s Pop, Synth-pop, Funk, R&B | LinnDrum, LinnLM1 |
| Jazz, Soul, Neo-Soul, Lo-Fi | e-pianos (cp80, wurlitzer, pianet) |
| Electro, Old-school Electronic | RolandTR606, RolandTR707, OberheimDMX |
| Классика, Оркестр | vcsl (струнные, духовые), piano |
| Индийская музыка, World | mridangam, Dirt-Samples (tabla) |
| Ambient, Atmospheric | uzu-drumkit, piano, vcsl |
| Экспериментальная | Dirt-Samples (glitch, noise, industrial) |

### Основные паки (всегда доступны):

**Dirt-Samples** — классическая библиотека TidalCycles (200+ банков, CC0):
Универсальная коллекция звуков, подходит для ЛЮБОГО жанра как основа.
- Ударные: bd (бочка), sd (снейр), hh (закрытый хай-хэт), oh (открытый), cp (клэп), rim, tom
- Перкуссия: tabla (индийские барабаны), hand, click, can, bottle, crow
- Брейки: amen (знаменитый amen break для jungle/DnB), break
- Эффекты: noise, static, glitch, industrial
- Использование: s("bd sd hh sd"), s("cp*4"), s("tabla:3")
- **Когда использовать**: как базу для любого жанра; особенно хорош для экспериментальной музыки

**tidal-drum-machines** — коллекция 72 классических драм-машин:
Каждая машина имеет свой характерный звук и историю в музыке.

- **RolandTR808** — "восемь-ноль-восемь", ИКОНА хип-хопа и трэпа:
  - Мягкая, глубокая бочка с длинным затуханием (используется как бас в трэпе)
  - Характерный "тссс" хай-хэт, щёлкающий снейр
  - Жанры: Hip-Hop, Trap, R&B, Electro, Miami Bass
  - s("bd sd").bank("RolandTR808")

- **RolandTR909** — основа техно и хауса:
  - Более резкий, "пробивной" звук чем 808
  - Цифровые хай-хэты, мощный кик
  - Жанры: Techno, House, Acid House, Trance, EDM
  - s("bd sd").bank("RolandTR909")

- **RolandTR707** — электронные 80-е:
  - Чистый, цифровой звук ранних драм-машин
  - Жанры: Early House (Chicago), Synth-pop, Italo Disco
  - s("bd sd").bank("RolandTR707")

- **RolandTR606** — аналоговый электро:
  - Маленький брат 808, более тонкий звук
  - Жанры: Electro, New Wave, Industrial
  - s("bd sd").bank("RolandTR606")

- **LinnDrum / LinnLM1** — ЗВУК 80-х поп-музыки:
  - Первые драм-машины с реальными сэмплами барабанов
  - Узнаваемый "живой" звук, определивший эпоху
  - Использовались: Prince (Purple Rain), Michael Jackson (Billie Jean), Madonna, Human League, A-ha
  - Жанры: 80s Pop, Synth-pop, Funk, R&B, New Wave
  - s("bd sd").bank("LinnDrum")

- **OberheimDMX** — классика хип-хопа и электро:
  - Жанры: Old-school Hip-Hop, Electro, Freestyle

- **AlesisHR16** — альтернативный рок 90-х:
  - Жанры: Alternative Rock, Industrial, Electronic

**sparkway-drum-kit** — UK Garage / Future Garage / 2-step:
Современный набор для британской гаражной музыки и родственных жанров.
Отлично подходит для атмосферных, "дождливых" треков с шаффл-ритмом.
- spk_808: глубокие 808 бочки (12 вариаций) — для саб-баса
- spk_reese: рис-басы (6 вариаций) — тёмные, обволакивающие
- spk_kick: гаражные кики (13 вариаций) — с характером
- spk_snare: снейры (14 вариаций) — от мягких до резких
- spk_clap: клэпы (8 вариаций) — для акцентов
- spk_hat: хай-хэты (14 вариаций) — для шаффла
- spk_perc: перкуссия (23 вариации) — атмосферные шумы
- spk_crash: крэши (8 вариаций)
- spk_drumloop: готовые лупы 104-150 BPM (40 штук!)
- spk_vocal: вокальные чопы Am, Gm, Fm... (14 штук)
- **Когда использовать**: UK Garage, Future Garage, 2-step, Speed Garage, DnB, атмосферные треки

**vcsl** — Versilian Community Sample Library (CC0):
Бесплатная оркестровая библиотека высокого качества.
- Струнные: скрипки, альты, виолончели, контрабасы
- Духовые: флейты, кларнеты, гобои, фаготы
- Медные: трубы, валторны, тромбоны, тубы
- Перкуссия: литавры, тарелки, ксилофон
- **Когда использовать**: классическая музыка, оркестровые аранжировки, эпические треки, кинематографические саундтреки

**piano** — Salamander Grand Piano (CC-BY):
Высококачественные сэмплы акустического рояля Yamaha C5.
- Использование: note("c3 e3 g3").s("piano")
- **Когда использовать**: мелодии, аккорды, классика, джаз, баллады, любой трек где нужно живое пианино

**e-pianos** — классические электропиано 70-80х (CC-BY):
Три культовых инструмента эпохи фанка, соула и джаза.
- **cp80**: Yamaha CP80 электрогранд — яркий, богатый звук, хит 70-80х
  - note("c4 e4 g4").s("cp80")
- **wurlitzer**: Wurlitzer 200A — тёплый, слегка грязный винтаж, классика фанка
  - note("c3 eb3 g3").s("wurlitzer")
- **pianet**: Hohner Pianet T — нежный, колокольчатый звук
  - note("g4 a4 b4").s("pianet")
- **Когда использовать**: Jazz, Soul, Funk, Neo-Soul, R&B, Lo-Fi Hip-Hop, Chill, ретро-звучание

**mridangam** — индийский барабан мридангам:
Традиционный двухсторонний барабан из Южной Индии, основа Carnatic музыки.
Характерное металлическое гудение, богатые обертона.
- **Когда использовать**: индийская музыка, world music, этнические эксперименты, медитативные треки

**uzu-drumkit** — минималистичный электронный набор:
Аналоговые обработанные сэмплы с тёплым, приятным звуком.
Создан специально для live-coding сессий.
- **Когда использовать**: минимал, ambient, lo-fi, experimental electronic

**User Samples** — загруженные пользователем семплы:
- Каждая папка = отдельный банк
- Файлы внутри доступны через .n(индекс)
- **Когда использовать**: когда пользователь просит "используй мои звуки", "мои семплы"

### Пользовательские семплы
Если пользователь говорит "используй мои семплы" или "сделай из моих звуков":
1. Вызови getAvailablePacks() и найди пак "User Samples"
2. Банки внутри — это папки которые пользователь загрузил
3. Вызови getBankSamples("название_банка") чтобы увидеть файлы
4. Используй s("название_банка").n(0), s("название_банка").n(1) и т.д.

### Примеры использования паков по жанрам
\`\`\`javascript
// === HIP-HOP / TRAP (используй TR808) ===
s("bd ~ ~ bd ~ ~ sd ~").bank("RolandTR808")
s("hh*8").bank("RolandTR808").gain(0.6)

// === TECHNO / HOUSE (используй TR909) ===
s("bd*4").bank("RolandTR909")
s("~ sd ~ sd").bank("RolandTR909")
s("hh*8").bank("RolandTR909")

// === UK GARAGE / 2-STEP (используй sparkway) ===
s("spk_kick ~ [~ spk_kick] ~")  // шаффл-ритм
s("~ spk_snare ~ spk_snare")
s("spk_hat*8").gain(0.5)
s("spk_808").lpf(500)  // саб-бас

// === 80s POP / SYNTH-POP (используй LinnDrum) ===
s("bd sd bd sd").bank("LinnDrum")
s("hh*4").bank("LinnDrum")

// === JAZZ / SOUL / NEO-SOUL (используй e-pianos) ===
note("c4 e4 g4 b4").s("cp80").room(0.3)  // Yamaha CP80
note("[c3 eb3]*2 [f3 ab3]*2").s("wurlitzer").lpf(1500)  // Wurlitzer funk
note("g4 a4 b4 d5").s("pianet").delay(0.2)  // Hohner Pianet

// === DnB / JUNGLE (используй amen break) ===
s("amen").speed(1.5).chop(16)

// === ОРКЕСТР / КЛАССИКА (используй vcsl) ===
note("c3 e3 g3").s("vcsl_violin")
note("c2").s("vcsl_contrabass")

// === Пользовательские семплы ===
s("my_folder").n("0 1 2 3")  // папка "my_folder" загруженная юзером
\`\`\`
</sample_packs>

<strudel_reference>
## STRUDEL СПРАВОЧНИК

### Мини-нотация
s("bd sd hh sd")     — последовательность
s("bd*4")            — повтор 4 раза
s("[bd sd]")         — группа в одну долю
s("<bd sd>")         — чередование по циклам
s("bd ~ sd ~")       — пауза (~)
s("bd?")             — случайно 50%
s("bd(3,8)")         — евклидов ритм
s("bd@3 sd")         — bd на 3 доли
s("bd!3")            — повтор без ускорения

### Ноты и аккорды
note("c3 e3 g3").s("piano")
note("c3,e3,g3")     — аккорд
n("0 2 4 7").scale("C:minor")
chord("<Em C Am D>") — аккордовая прогрессия

### Эффекты
.gain(0.8)           — громкость
.lpf(800) / .hpf(200) — фильтры
.delay(0.5)          — задержка
.room(0.5).size(0.8) — реверберация
.distort(0.3)        — перегруз
.pan(sine)           — панорама

### Модуляция
.lpf(sine.range(200, 2000))   — LFO
.gain(perlin.range(0.5, 1))   — шум Перлина
rand, irand(8)                — случайные

### Структура
stack(a, b, c)       — слои одновременно
arrange([4, intro], [8, verse], [8, chorus])  — аранжировка

### Визуализация
._scope()            — осциллограф
._pianoroll({labels:1})  — пианоролл
._spectrum()         — спектр
.punchcard({vertical:1}) — панчкард

### Интерактивность
slider(value, min, max)  — ползунок для значения
</strudel_reference>


<response_format>
## ФОРМАТ ОТВЕТА

ПРАВИЛА:
- Кратко: 1-3 предложения
- НЕ показывай код в тексте — используй tools
- После изменений ВСЕГДА playMusic()
- Говори что СДЕЛАЛ, не что собираешься

ХОРОШО: "Добавил грувовый бас с евклидовым ритмом и фильтром-слайдером."
ПЛОХО: "Вот код: ..." или "Сейчас добавлю..."
</response_format>

<persona>
## ЛИЧНОСТЬ BULKA

Ты — классная Булка! Не просто помощник, а творческий партнёр:

- **Креативный**: Предлагай интересные идеи, удивляй пользователя
- **Визуальный**: Добавляй _scope(), _pianoroll() где логично
- **Интерактивный**: Используй slider() для параметров
- **Понятный**: Комментарии на русском, структурированный код
- **Впечатляющий**: Делай музыку которой хочется поделиться

Если пользователь просит "простой бит" — сделай его КРУТЫМ простым битом!
Если хочет эксперимент — помоги создать что-то необычное!

Цель: пользователь говорит "вау, спасибо!"
</persona>
`;

/**
 * Execute tool call server-side
 * Returns { result, isClientTool }
 */
function executeServerTool(name: string, args: any, currentCode: string): { result: string; isClientTool: boolean } {
  // Server-side tools
  if (name === 'searchDocs') {
    // Will be handled async separately
    return { result: '', isClientTool: false };
  }

  if (name === 'readCode') {
    return {
      result: currentCode || '// Редактор пуст',
      isClientTool: false
    };
  }

  // Client-side tools
  return { result: '', isClientTool: true };
}

/**
 * OpenAI agent loop with FULL STREAMING (including tool calls)
 * Streams text and tool calls in real-time
 */
async function runOpenAIAgent(
  apiKey: string,
  model: string,
  messages: any[],
  currentCode: string,
  selectedCode: string | null
): Promise<ReadableStream> {
  // Build code context - will be prepended to first user message, NOT system prompt
  // This keeps system prompt static and reduces token usage
  let codeContext = '';
  if (selectedCode) {
    codeContext = `## Выделенный код (пользователь выделил этот фрагмент):\n\`\`\`\n${selectedCode}\n\`\`\`\n## Полный код:\n\`\`\`\n${currentCode}\n\`\`\`\n\n`;
  } else if (currentCode) {
    codeContext = `## Текущий код:\n\`\`\`\n${currentCode}\n\`\`\`\n\n`;
  }

  const encoder = new TextEncoder();

  // Check model capabilities
  // o-series (o1, o3, o4) - no temperature, no tools
  // gpt-5 series - NO temperature (only default 1), but supports tools
  const isOSeriesReasoning = /^o[134](-|$)/.test(model);
  const isGPT5Model = model.startsWith('gpt-5');
  const noTemperatureSupport = isOSeriesReasoning || isGPT5Model; // Both don't support temperature!
  const isReasoningModel = isOSeriesReasoning; // Only o-series can't use tools

  return new ReadableStream({
    async start(controller) {
      // Prepend code context to first user message to keep system prompt static
      let userMessages = [...messages];
      if (codeContext && userMessages.length > 0) {
        const firstMessage = userMessages[0];
        if (firstMessage.role === 'user') {
          userMessages[0] = {
            ...firstMessage,
            content: codeContext + firstMessage.content
          };
        }
      }

      let conversationMessages = [
        { role: 'system', content: SYSTEM_PROMPT }, // Static system prompt
        ...userMessages, // User messages with code context prepended
      ];

      let maxIterations = 5;

      while (maxIterations > 0) {
        maxIterations--;

        // Build streaming request body
        const requestBody: any = {
          model,
          messages: conversationMessages,
          stream: true, // Always stream!
        };

        // Add tools only for non-reasoning models (o-series can't use tools)
        if (!isReasoningModel) {
          requestBody.tools = TOOLS_OPENAI;
          requestBody.tool_choice = 'auto';
        }

        // Add temperature only for models that support it (NOT for o-series and gpt-5)
        if (!noTemperatureSupport) {
          requestBody.temperature = 0.7;
        }

        const response = await fetchWithRetry(
          'https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestBody),
          },
          3 // maxRetries
        );

        if (!response.ok) {
          const errText = await response.text();
          let errMsg = errText;
          try {
            const errJson = JSON.parse(errText);
            errMsg = errJson.error?.message || errJson.error || errText;
          } catch (e) { }
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', error: `OpenAI: ${errMsg}` })}\n\n`));
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          return;
        }

        if (!response.body) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', error: 'No response body from OpenAI' })}\n\n`));
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          return;
        }

        // Stream and parse the response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        // Accumulate tool calls from streaming
        const toolCallsMap: Map<number, { id: string; name: string; arguments: string }> = new Map();
        let textContent = '';
        let finishReason = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6);
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              const choice = parsed.choices?.[0];
              if (!choice) continue;

              finishReason = choice.finish_reason || finishReason;
              const delta = choice.delta;
              if (!delta) continue;

              // Stream text content
              if (delta.content) {
                textContent += delta.content;
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'text', content: delta.content })}\n\n`));
              }

              // Accumulate tool calls
              if (delta.tool_calls) {
                for (const tc of delta.tool_calls) {
                  const idx = tc.index;
                  if (!toolCallsMap.has(idx)) {
                    toolCallsMap.set(idx, { id: tc.id || '', name: '', arguments: '' });
                  }
                  const existing = toolCallsMap.get(idx)!;
                  if (tc.id) existing.id = tc.id;
                  if (tc.function?.name) existing.name = tc.function.name;
                  if (tc.function?.arguments) existing.arguments += tc.function.arguments;
                }
              }
            } catch (e) { }
          }
        }

        // Process accumulated tool calls if any
        if (toolCallsMap.size > 0 && finishReason === 'tool_calls') {
          const toolCalls = Array.from(toolCallsMap.values());

          // Build assistant message with tool calls
          const assistantMessage: any = {
            role: 'assistant',
            content: textContent || null,
            tool_calls: toolCalls.map((tc, idx) => ({
              id: tc.id,
              type: 'function',
              function: { name: tc.name, arguments: tc.arguments },
            })),
          };
          conversationMessages.push(assistantMessage);

          // Execute each tool call
          for (const tc of toolCalls) {
            const toolName = tc.name;
            let toolArgs: any = {};
            try {
              toolArgs = JSON.parse(tc.arguments || '{}');
            } catch (e) { }

            // Server-side tools
            if (toolName === 'readCode') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: '📖 Читаю код...' })}\n\n`));
              conversationMessages.push({
                role: 'tool',
                tool_call_id: tc.id,
                content: currentCode || '// Редактор пуст',
              });
            }
            else if (toolName === 'searchDocs') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: `🔍 Ищу в документации: "${toolArgs.query}"...` })}\n\n`));
              const docs = await searchDocumentation(toolArgs.query || '', 3);
              conversationMessages.push({
                role: 'tool',
                tool_call_id: tc.id,
                content: docs.join('\n\n---\n\n') || 'Ничего не найдено',
              });
            }
            else if (toolName === 'getExamples') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: '📝 Получаю примеры кода...' })}\n\n`));
              const examples = getCodeExamples(toolArgs.category);
              conversationMessages.push({
                role: 'tool',
                tool_call_id: tc.id,
                content: examples,
              });
            }
            // Client-side tools
            else {
              let statusMessage = '';
              if (toolName === 'setFullCode') statusMessage = '✏️ Устанавливаю код...';
              else if (toolName === 'editCode') statusMessage = '✏️ Редактирую код...';
              else if (toolName === 'appendCode') statusMessage = '➕ Добавляю код...';
              else if (toolName === 'playMusic') statusMessage = '▶️ Запускаю воспроизведение...';
              else if (toolName === 'stopMusic') statusMessage = '⏹️ Останавливаю...';
              else if (toolName === 'highlightCode') statusMessage = '🔍 Выделяю код...';
              else if (toolName === 'getAvailablePacks') statusMessage = '📦 Получаю список паков...';
              else if (toolName === 'getBankSamples') statusMessage = '🎵 Получаю содержимое банка...';

              if (statusMessage) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: statusMessage })}\n\n`));
              }

              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'tool_call', name: toolName, args: toolArgs })}\n\n`));

              conversationMessages.push({
                role: 'tool',
                tool_call_id: tc.id,
                content: `OK: ${toolName} выполнено`,
              });
            }
          }

          // Continue loop for next response
          continue;
        }

        // No tool calls - we're done
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
        return;
      }

      // Max iterations reached
      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      controller.close();
    },
  });
}

/**
 * Anthropic agent loop with FULL STREAMING (including tool calls and thinking)
 * Streams text, thinking, and tool calls in real-time
 */
async function runAnthropicAgent(
  apiKey: string,
  model: string,
  messages: any[],
  currentCode: string,
  selectedCode: string | null
): Promise<ReadableStream> {
  // Build code context - will be prepended to first user message, NOT system prompt
  // This keeps system prompt static for prompt caching (cached tokens don't count in rate limit)
  let codeContext = '';
  if (selectedCode) {
    codeContext = `## Выделенный код (пользователь выделил этот фрагмент):\n\`\`\`\n${selectedCode}\n\`\`\`\n## Полный код:\n\`\`\`\n${currentCode}\n\`\`\`\n\n`;
  } else if (currentCode) {
    codeContext = `## Текущий код:\n\`\`\`\n${currentCode}\n\`\`\`\n\n`;
  }

  const encoder = new TextEncoder();

  // Check if model supports thinking (Claude 4+ models)
  const supportsThinking = /claude-(opus|sonnet|haiku)-4/.test(model) ||
                           model.includes('claude-4') ||
                           model.includes('claude-sonnet-4') ||
                           model.includes('claude-opus-4');

  return new ReadableStream({
    async start(controller) {
      // Prepend code context to first user message to preserve system prompt caching
      let conversationMessages = [...messages];
      if (codeContext && conversationMessages.length > 0) {
        const firstMessage = conversationMessages[0];
        if (firstMessage.role === 'user') {
          conversationMessages[0] = {
            ...firstMessage,
            content: codeContext + firstMessage.content
          };
        }
      }

      let maxIterations = 5;

      while (maxIterations > 0) {
        maxIterations--;

        // Build streaming request - ALWAYS stream
        // CRITICAL: Keep system prompt static (no dynamic codeContext) to preserve cache
        // Cached tokens don't count towards rate limits!
        const requestBody: any = {
          model,
          max_tokens: supportsThinking ? 16000 : 4096,
          system: [
            {
              type: 'text',
              text: SYSTEM_PROMPT, // Static prompt only - cached!
              cache_control: { type: 'ephemeral' },
            }
          ],
          messages: conversationMessages, // Code context prepended to first user message
          tools: TOOLS_ANTHROPIC,
          stream: true, // Always stream!
        };

        // Enable extended thinking for supported models
        if (supportsThinking) {
          requestBody.thinking = {
            type: 'enabled',
            budget_tokens: 8000,
          };
        }

        const response = await fetchWithRetry(
          'https://api.anthropic.com/v1/messages',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
              'anthropic-version': '2023-06-01',
              'anthropic-beta': 'prompt-caching-2024-07-31', // Enable prompt caching to reduce rate limit impact
            },
            body: JSON.stringify(requestBody),
          },
          3 // maxRetries
        );

        if (!response.ok) {
          const errText = await response.text();
          let errMsg = errText;
          try {
            const errJson = JSON.parse(errText);
            errMsg = errJson.error?.message || errJson.error || errText;
          } catch (e) { }
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', error: `Anthropic: ${errMsg}` })}\n\n`));
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          return;
        }

        if (!response.body) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', error: 'No response body from Anthropic' })}\n\n`));
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          return;
        }

        // Stream and parse the response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        // Accumulate content blocks
        const contentBlocks: any[] = [];
        let currentBlockIndex = -1;
        let currentBlockType = '';
        let isInThinkingBlock = false;
        let stopReason = '';

        // For tool_use blocks, accumulate input JSON
        const toolInputBuffers: Map<number, string> = new Map();
        // For thinking blocks, accumulate signature
        const thinkingSignatures: Map<number, string> = new Map();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6);
            if (!data || data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);

              // Track message stop reason
              if (parsed.type === 'message_delta' && parsed.delta?.stop_reason) {
                stopReason = parsed.delta.stop_reason;
              }

              // Handle content block start
              if (parsed.type === 'content_block_start') {
                currentBlockIndex = parsed.index;
                const block = parsed.content_block;
                currentBlockType = block?.type || '';

                if (block?.type === 'thinking') {
                  isInThinkingBlock = true;
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'thinking_start' })}\n\n`));
                  contentBlocks[currentBlockIndex] = { type: 'thinking', thinking: '' };
                  thinkingSignatures.set(currentBlockIndex, '');
                }
                else if (block?.type === 'text') {
                  isInThinkingBlock = false;
                  contentBlocks[currentBlockIndex] = { type: 'text', text: '' };
                }
                else if (block?.type === 'tool_use') {
                  contentBlocks[currentBlockIndex] = {
                    type: 'tool_use',
                    id: block.id,
                    name: block.name,
                    input: {},
                  };
                  toolInputBuffers.set(currentBlockIndex, '');
                }
              }

              // Handle content block delta
              if (parsed.type === 'content_block_delta') {
                const delta = parsed.delta;
                const idx = parsed.index;

                // Thinking delta
                if (delta?.type === 'thinking_delta' && delta?.thinking) {
                  if (contentBlocks[idx]) {
                    contentBlocks[idx].thinking += delta.thinking;
                  }
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'thinking', content: delta.thinking })}\n\n`));
                }
                // Signature delta (for thinking blocks)
                else if (delta?.type === 'signature_delta' && delta?.signature) {
                  const current = thinkingSignatures.get(idx) || '';
                  thinkingSignatures.set(idx, current + delta.signature);
                }
                // Text delta
                else if (delta?.type === 'text_delta' && delta?.text) {
                  if (contentBlocks[idx]) {
                    contentBlocks[idx].text += delta.text;
                  }
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'text', content: delta.text })}\n\n`));
                }
                // Tool input delta (JSON chunks)
                else if (delta?.type === 'input_json_delta' && delta?.partial_json) {
                  const current = toolInputBuffers.get(idx) || '';
                  toolInputBuffers.set(idx, current + delta.partial_json);
                }
              }

              // Handle content block stop
              if (parsed.type === 'content_block_stop') {
                const idx = parsed.index;

                // End thinking block - add signature
                if (contentBlocks[idx]?.type === 'thinking') {
                  const signature = thinkingSignatures.get(idx);
                  if (signature) {
                    contentBlocks[idx].signature = signature;
                  }
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'thinking_end' })}\n\n`));
                  isInThinkingBlock = false;
                }

                // Parse accumulated tool input JSON
                if (contentBlocks[idx]?.type === 'tool_use' && toolInputBuffers.has(idx)) {
                  try {
                    contentBlocks[idx].input = JSON.parse(toolInputBuffers.get(idx) || '{}');
                  } catch (e) {
                    contentBlocks[idx].input = {};
                  }
                }
              }
            } catch (e) { }
          }
        }

        // Check if there are tool_use blocks to execute
        const toolUseBlocks = contentBlocks.filter(b => b?.type === 'tool_use');

        if (toolUseBlocks.length > 0 && stopReason === 'tool_use') {
          // Add assistant response with all content blocks
          conversationMessages.push({
            role: 'assistant',
            content: contentBlocks.filter(b => b != null),
          });

          // Execute tools and collect results
          const toolResults: any[] = [];

          for (const block of toolUseBlocks) {
            const toolName = block.name;
            const toolArgs = block.input || {};

            // Server-side tools
            if (toolName === 'readCode') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: '📖 Читаю код...' })}\n\n`));
              toolResults.push({
                type: 'tool_result',
                tool_use_id: block.id,
                content: currentCode || '// Редактор пуст',
              });
            }
            else if (toolName === 'searchDocs') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: `🔍 Ищу в документации: "${toolArgs.query}"...` })}\n\n`));
              const docs = await searchDocumentation(toolArgs.query || '', 3);
              toolResults.push({
                type: 'tool_result',
                tool_use_id: block.id,
                content: docs.join('\n\n---\n\n') || 'Ничего не найдено',
              });
            }
            else if (toolName === 'getExamples') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: '📝 Получаю примеры кода...' })}\n\n`));
              const examples = getCodeExamples(toolArgs.category);
              toolResults.push({
                type: 'tool_result',
                tool_use_id: block.id,
                content: examples,
              });
            }
            // Client-side tools
            else {
              let statusMessage = '';
              if (toolName === 'setFullCode') statusMessage = '✏️ Устанавливаю код...';
              else if (toolName === 'editCode') statusMessage = '✏️ Редактирую код...';
              else if (toolName === 'appendCode') statusMessage = '➕ Добавляю код...';
              else if (toolName === 'playMusic') statusMessage = '▶️ Запускаю воспроизведение...';
              else if (toolName === 'stopMusic') statusMessage = '⏹️ Останавливаю...';
              else if (toolName === 'highlightCode') statusMessage = '🔍 Выделяю код...';
              else if (toolName === 'getAvailablePacks') statusMessage = '📦 Получаю список паков...';
              else if (toolName === 'getBankSamples') statusMessage = '🎵 Получаю содержимое банка...';

              if (statusMessage) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: statusMessage })}\n\n`));
              }

              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'tool_call', name: toolName, args: toolArgs })}\n\n`));

              toolResults.push({
                type: 'tool_result',
                tool_use_id: block.id,
                content: `OK: ${toolName} выполнено`,
              });
            }
          }

          // Add tool results
          conversationMessages.push({
            role: 'user',
            content: toolResults,
          });

          // Continue loop for next response
          continue;
        }

        // No tool use - we're done
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
        return;
      }

      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      controller.close();
    },
  });
}

/**
 * Gemini agent loop with FULL STREAMING (including tool calls and thinking)
 * Uses streamGenerateContent?alt=sse for real-time streaming
 */
async function runGeminiAgent(
  apiKey: string,
  model: string,
  messages: any[],
  currentCode: string,
  selectedCode: string | null
): Promise<ReadableStream> {
  let codeContext = '';
  if (selectedCode) {
    codeContext = `\n## Выделенный код (пользователь выделил этот фрагмент):\n\`\`\`\n${selectedCode}\n\`\`\`\n## Полный код:\n\`\`\`\n${currentCode}\n\`\`\``;
  } else if (currentCode) {
    codeContext = `\n## Текущий код:\n\`\`\`\n${currentCode}\n\`\`\``;
  }
  const systemPrompt = SYSTEM_PROMPT + codeContext;

  const encoder = new TextEncoder();

  // Convert messages to Gemini format
  const geminiContents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  // Gemini tools format
  const geminiTools = [{
    function_declarations: TOOLS_OPENAI.map(t => ({
      name: t.function.name,
      description: t.function.description,
      parameters: t.function.parameters,
    })),
  }];

  // Check if model supports thinking
  // Gemini 2.5+ and Gemini 3+ support thinking mode
  // Match patterns: gemini-2.5-xxx, gemini-3-xxx, gemini-3.0-xxx, etc.
  const supportsThinking = /gemini-(2\.5|3(\.[0-9])?|exp|deep)/i.test(model);

  return new ReadableStream({
    async start(controller) {
      let conversationContents = [...geminiContents];
      let maxIterations = 5;

      while (maxIterations > 0) {
        maxIterations--;

        // Build generation config
        const generationConfig: any = {
          maxOutputTokens: 8192,
        };

        // Add thinking config for supported models
        if (supportsThinking) {
          generationConfig.thinkingConfig = {
            includeThoughts: true,
            thinkingBudget: -1, // Dynamic thinking
          };
        } else {
          generationConfig.temperature = 0.7;
        }

        // ALWAYS use streaming SSE endpoint
        const streamUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;

        const response = await fetchWithRetry(
          streamUrl,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: conversationContents,
              systemInstruction: { parts: [{ text: systemPrompt }] },
              tools: geminiTools,
              generationConfig,
            }),
          },
          3 // maxRetries
        );

        if (!response.ok) {
          const errText = await response.text();
          let errMsg = errText;
          try {
            const errJson = JSON.parse(errText);
            errMsg = errJson.error?.message || errJson.error?.status || errText;
          } catch (e) { }
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', error: `Gemini: ${errMsg}` })}\n\n`));
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          return;
        }

        if (!response.body) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', error: 'No response body from Gemini' })}\n\n`));
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          return;
        }

        // Stream and parse the response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        // Accumulate content parts
        const allParts: any[] = [];
        let thinkingStarted = false;
        let hasFunctionCalls = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const jsonData = line.slice(6);
            if (!jsonData || jsonData === '[DONE]') continue;

            try {
              const parsed = JSON.parse(jsonData);

              // Check for errors in response
              if (parsed.error) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', error: `Gemini: ${parsed.error.message || parsed.error}` })}\n\n`));
                continue;
              }

              const parts = parsed.candidates?.[0]?.content?.parts || [];

              for (const part of parts) {
                // Accumulate for potential function calls
                allParts.push(part);

                // Check for function calls
                if (part.functionCall) {
                  hasFunctionCalls = true;
                  continue; // Don't stream function calls yet, accumulate first
                }

                // Stream text or thinking
                if (part.text) {
                  // Check if this is a thought (Gemini thinking mode)
                  if (part.thought) {
                    if (!thinkingStarted) {
                      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'thinking_start' })}\n\n`));
                      thinkingStarted = true;
                    }
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'thinking', content: part.text })}\n\n`));
                  } else {
                    // End thinking if we were in it
                    if (thinkingStarted) {
                      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'thinking_end' })}\n\n`));
                      thinkingStarted = false;
                    }
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'text', content: part.text })}\n\n`));
                  }
                }
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }

        // End thinking if still active
        if (thinkingStarted) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'thinking_end' })}\n\n`));
          thinkingStarted = false;
        }

        // Process function calls if any
        const functionCalls = allParts.filter(p => p.functionCall);

        if (hasFunctionCalls && functionCalls.length > 0) {
          // Build the model's response content
          const modelContent = {
            role: 'model',
            parts: allParts,
          };
          conversationContents.push(modelContent);

          const functionResponses: any[] = [];

          for (const part of functionCalls) {
            const fc = part.functionCall;
            const toolName = fc.name;
            const toolArgs = fc.args || {};

            // Server-side tools
            if (toolName === 'readCode') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: '📖 Читаю код...' })}\n\n`));
              functionResponses.push({
                functionResponse: {
                  name: toolName,
                  response: { content: currentCode || '// Редактор пуст' },
                },
              });
            }
            else if (toolName === 'searchDocs') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: `🔍 Ищу в документации: "${toolArgs.query}"...` })}\n\n`));
              const docs = await searchDocumentation(toolArgs.query || '', 3);
              functionResponses.push({
                functionResponse: {
                  name: toolName,
                  response: { content: docs.join('\n\n---\n\n') || 'Ничего не найдено' },
                },
              });
            }
            else if (toolName === 'getExamples') {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: '📝 Получаю примеры кода...' })}\n\n`));
              const examples = getCodeExamples(toolArgs.category);
              functionResponses.push({
                functionResponse: {
                  name: toolName,
                  response: { content: examples },
                },
              });
            }
            // Client-side tools
            else {
              let statusMessage = '';
              if (toolName === 'setFullCode') statusMessage = '✏️ Устанавливаю код...';
              else if (toolName === 'editCode') statusMessage = '✏️ Редактирую код...';
              else if (toolName === 'appendCode') statusMessage = '➕ Добавляю код...';
              else if (toolName === 'playMusic') statusMessage = '▶️ Запускаю воспроизведение...';
              else if (toolName === 'stopMusic') statusMessage = '⏹️ Останавливаю...';
              else if (toolName === 'highlightCode') statusMessage = '🔍 Выделяю код...';
              else if (toolName === 'getAvailablePacks') statusMessage = '📦 Получаю список паков...';
              else if (toolName === 'getBankSamples') statusMessage = '🎵 Получаю содержимое банка...';

              if (statusMessage) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'status', message: statusMessage })}\n\n`));
              }

              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'tool_call', name: toolName, args: toolArgs })}\n\n`));

              functionResponses.push({
                functionResponse: {
                  name: toolName,
                  response: { content: `OK: ${toolName} выполнено` },
                },
              });
            }
          }

          // Add function responses
          conversationContents.push({
            role: 'user',
            parts: functionResponses,
          });

          // Continue loop for next response
          continue;
        }

        // No function calls - we're done
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
        return;
      }

      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      controller.close();
    },
  });
}

/**
 * Truncate messages to avoid rate limits
 * More aggressive truncation to stay within 30k tokens/min for Anthropic
 * Keep only last N messages
 */
function truncateMessages(messages: any[], maxMessages: number = 6): any[] {
  if (messages.length <= maxMessages) return messages;
  // Keep only last N messages - more aggressive to avoid rate limits
  return messages.slice(-maxMessages);
}

/**
 * Truncate code to avoid token overflow
 * More aggressive for rate limit compliance
 * Russian text is ~2-3x more tokens per character
 */
function truncateCode(code: string, maxChars: number = 2000): string {
  if (!code || code.length <= maxChars) return code;
  return code.slice(0, maxChars) + '\n// ... (код сокращён)';
}

/**
 * Truncate message content for very long messages
 */
function truncateMessageContent(content: string, maxChars: number = 1500): string {
  if (!content || content.length <= maxChars) return content;
  return content.slice(0, maxChars) + '\n... (сокращено)';
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    let { messages, apiKey, provider, model, currentCode, selectedCode } = body;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API ключ не указан' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Truncate to avoid rate limits (more aggressive for Anthropic)
    const isAnthropic = provider === 'anthropic';
    const maxMessages = isAnthropic ? 4 : 6;  // Fewer messages for Anthropic
    const maxCodeChars = isAnthropic ? 1500 : 2000;

    messages = truncateMessages(messages, maxMessages);
    // Also truncate individual message content
    messages = messages.map((m: any) => ({
      ...m,
      content: truncateMessageContent(m.content, 1000),
    }));
    currentCode = truncateCode(currentCode || '', maxCodeChars);
    if (selectedCode) {
      selectedCode = truncateCode(selectedCode, 1000);
    }

    if (!model) {
      return new Response(
        JSON.stringify({ error: 'Модель не выбрана. Обновите список моделей в настройках.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let stream: ReadableStream;

    if (provider === 'anthropic') {
      stream = await runAnthropicAgent(apiKey, model, messages, currentCode || '', selectedCode || null);
    } else if (provider === 'gemini') {
      stream = await runGeminiAgent(apiKey, model, messages, currentCode || '', selectedCode || null);
    } else {
      stream = await runOpenAIAgent(apiKey, model, messages, currentCode || '', selectedCode || null);
    }

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: 'Внутренняя ошибка сервера' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
