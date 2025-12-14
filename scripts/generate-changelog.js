#!/usr/bin/env node
/**
 * Генератор changelog для Bulka
 *
 * Читает историю git коммитов и создаёт:
 * 1. JSON файл для страницы /whatsnew
 * 2. CHANGELOG.md в формате Keep a Changelog
 *
 * Запуск: node scripts/generate-changelog.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Типы коммитов и их отображение
const COMMIT_TYPES = {
  feat: { label: 'Новые возможности', emoji: '✨', order: 1 },
  fix: { label: 'Исправления', emoji: '🐛', order: 2 },
  perf: { label: 'Производительность', emoji: '⚡', order: 3 },
  docs: { label: 'Документация', emoji: '📚', order: 4 },
  refactor: { label: 'Рефакторинг', emoji: '♻️', order: 5 },
  style: { label: 'Стили', emoji: '🎨', order: 6 },
  test: { label: 'Тесты', emoji: '🧪', order: 7 },
  chore: { label: 'Обслуживание', emoji: '🔧', order: 8 },
  debug: { label: 'Отладка', emoji: '🔍', order: 9 },
  blog: { label: 'Блог', emoji: '📝', order: 10 },
};

// Коммиты, которые нужно пропустить
const SKIP_PATTERNS = [
  /^Merge pull request/,
  /^Merge branch/,
  /^Revert "/,
  /^Reapply "/,
];

function parseCommit(line) {
  const [date, message, author, hash] = line.split('|');

  // Пропускаем merge коммиты и реверты
  if (SKIP_PATTERNS.some(pattern => pattern.test(message))) {
    return null;
  }

  // Парсим conventional commit
  const match = message.match(/^(\w+)(?:\(([^)]+)\))?\s*:\s*(.+)$/);

  if (match) {
    const [, type, scope, description] = match;
    return {
      date,
      type: type.toLowerCase(),
      scope: scope || null,
      description: description.trim(),
      author,
      hash,
      message,
    };
  }

  // Для обычных коммитов без типа
  return {
    date,
    type: 'other',
    scope: null,
    description: message.trim(),
    author,
    hash,
    message,
  };
}

function getGitLog() {
  try {
    const log = execSync(
      'git log --pretty=format:"%ad|%s|%an|%h" --date=short --reverse',
      { encoding: 'utf-8', cwd: ROOT_DIR, maxBuffer: 10 * 1024 * 1024 }
    );

    return log
      .split('\n')
      .filter(Boolean)
      .map(parseCommit)
      .filter(Boolean);
  } catch (error) {
    console.error('Ошибка чтения git log:', error.message);
    return [];
  }
}

function groupByDate(commits) {
  const grouped = {};

  for (const commit of commits) {
    if (!grouped[commit.date]) {
      grouped[commit.date] = [];
    }
    grouped[commit.date].push(commit);
  }

  // Сортируем даты по убыванию (новые сверху)
  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return sortedDates.map(date => ({
    date,
    commits: grouped[date],
  }));
}

function groupByType(commits) {
  const grouped = {};

  for (const commit of commits) {
    const type = COMMIT_TYPES[commit.type] ? commit.type : 'other';
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(commit);
  }

  return grouped;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function generateJSON(groupedByDate) {
  const changelog = groupedByDate.map(day => ({
    date: day.date,
    dateFormatted: formatDate(day.date),
    changes: day.commits.map(c => ({
      type: c.type,
      typeLabel: COMMIT_TYPES[c.type]?.label || 'Прочее',
      emoji: COMMIT_TYPES[c.type]?.emoji || '📦',
      description: c.description,
      scope: c.scope,
      author: c.author,
      hash: c.hash,
    })),
  }));

  return changelog;
}

function generateMarkdown(groupedByDate) {
  let md = `# Changelog Bulka

Все изменения проекта Bulka документируются в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/).

---

`;

  // Группируем по месяцам для markdown
  const byMonth = {};
  for (const day of groupedByDate) {
    const [year, month] = day.date.split('-');
    const monthKey = `${year}-${month}`;
    if (!byMonth[monthKey]) {
      byMonth[monthKey] = [];
    }
    byMonth[monthKey].push(...day.commits);
  }

  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const sortedMonths = Object.keys(byMonth).sort((a, b) => b.localeCompare(a));

  for (const monthKey of sortedMonths) {
    const [year, month] = monthKey.split('-');
    const monthName = months[parseInt(month, 10) - 1];

    md += `## ${monthName} ${year}\n\n`;

    const byType = groupByType(byMonth[monthKey]);
    const sortedTypes = Object.keys(byType).sort((a, b) => {
      const orderA = COMMIT_TYPES[a]?.order || 99;
      const orderB = COMMIT_TYPES[b]?.order || 99;
      return orderA - orderB;
    });

    for (const type of sortedTypes) {
      const typeInfo = COMMIT_TYPES[type] || { label: 'Прочее', emoji: '📦' };
      md += `### ${typeInfo.emoji} ${typeInfo.label}\n\n`;

      for (const commit of byType[type]) {
        const scope = commit.scope ? `**${commit.scope}**: ` : '';
        md += `- ${scope}${commit.description} (\`${commit.hash}\`)\n`;
      }
      md += '\n';
    }
  }

  md += `---

*Сгенерировано автоматически: ${new Date().toISOString().split('T')[0]}*
`;

  return md;
}

function main() {
  console.log('🍞 Генерация changelog для Bulka...\n');

  const commits = getGitLog();
  console.log(`📊 Найдено ${commits.length} коммитов\n`);

  if (commits.length === 0) {
    console.error('Коммиты не найдены!');
    process.exit(1);
  }

  const groupedByDate = groupByDate(commits);

  // Генерируем JSON для страницы whatsnew
  const jsonData = generateJSON(groupedByDate);
  const jsonPath = path.join(ROOT_DIR, 'website/src/data/changelog.json');

  // Создаём директорию если нет
  const dataDir = path.dirname(jsonPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf-8');
  console.log(`✅ JSON: ${jsonPath}`);

  // Генерируем Markdown
  const markdown = generateMarkdown(groupedByDate);
  const mdPath = path.join(ROOT_DIR, 'CHANGELOG.md');
  fs.writeFileSync(mdPath, markdown, 'utf-8');
  console.log(`✅ Markdown: ${mdPath}`);

  // Статистика
  const stats = {};
  for (const commit of commits) {
    stats[commit.type] = (stats[commit.type] || 0) + 1;
  }

  console.log('\n📈 Статистика по типам:');
  for (const [type, count] of Object.entries(stats).sort((a, b) => b[1] - a[1])) {
    const info = COMMIT_TYPES[type] || { emoji: '📦', label: type };
    console.log(`   ${info.emoji} ${info.label}: ${count}`);
  }

  console.log('\n✨ Changelog сгенерирован успешно!');
}

main();
