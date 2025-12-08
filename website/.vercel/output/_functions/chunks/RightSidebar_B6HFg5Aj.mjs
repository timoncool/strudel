import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, f as addAttribute, a as renderSlot } from './astro/server_Cr1ImhJZ.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';
/* empty css                                 */
import { createPortal } from 'react-dom';
import * as docSearchReact from '@docsearch/react';
import CommandLineIcon from '@heroicons/react/20/solid/CommandLineIcon';
import { Disclosure } from '@headlessui/react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import { unescape } from 'html-escaper';

const SITE = {
  title: "Bulka",
  description: "Bulka — платформа для лайв-кодинга музыки в браузере.",
  defaultLanguage: "en"
};
const OPEN_GRAPH = {
  image: {
    src: "https://strudel.cc/icon.png",
    alt: "Bulka Logo"
  }
};
const GITHUB_EDIT_URL = `https://codeberg.org/uzu/strudel/src/branch/main/website`;
const COMMUNITY_INVITE_URL = `https://discord.com/invite/HGEdXmRkzT`;
const ALGOLIA = {
  indexName: "strudel-tidalcycles",
  appId: "SAZ71S8CLS",
  apiKey: "d5044f9d21b80e7721e5b0067a8730b1"
};
const SIDEBAR = {
  de: {
    Workshop: [
      { text: "Intro", link: "de/workshop/getting-started" },
      { text: "Erste Sounds", link: "de/workshop/first-sounds" },
      { text: "Erste Töne", link: "de/workshop/first-notes" },
      { text: "Erste Effekte", link: "de/workshop/first-effects" },
      { text: "Pattern Effekte", link: "de/workshop/pattern-effects" },
      { text: "Rückblick", link: "de/workshop/recap" },
      { text: "Mehr Seiten auf Englisch", link: "workshop/getting-started" }
    ]
  },
  en: {
    "Презентация": [
      { text: "Что такое Bulka?", link: "workshop/getting-started" },
      { text: "Галерея треков", link: "intro/gallery" },
      { text: "Витрина", link: "intro/showcase" },
      { text: "Блог", link: "blog" }
      /* { text: 'Community Bakery', link: 'bakery' }, */
    ],
    "Воркшоп": [
      // { text: 'Начало работы', link: 'workshop/getting-started' },
      { text: "Первые звуки", link: "workshop/first-sounds" },
      { text: "Первые ноты", link: "workshop/first-notes" },
      { text: "Первые эффекты", link: "workshop/first-effects" },
      { text: "Эффекты паттернов", link: "workshop/pattern-effects" },
      { text: "Итоги", link: "workshop/recap" },
      { text: "Воркшоп на немецком", link: "de/workshop/getting-started" }
    ],
    "Создание звука": [
      { text: "Samples", link: "learn/samples" },
      { text: "Синтезаторы", link: "learn/synths" },
      { text: "Аудио эффекты", link: "learn/effects" },
      { text: "MIDI и OSC", link: "learn/input-output" }
    ],
    "Ещё": [
      { text: "Рецепты", link: "recipes/recipes" },
      { text: "Mini-Notation", link: "learn/mini-notation" },
      { text: "Визуальная обратная связь", link: "learn/visual-feedback" },
      { text: "Оффлайн", link: "learn/pwa" },
      { text: "Patterns", link: "technical-manual/patterns" },
      { text: "Mondo Notation", link: "learn/mondo-notation" },
      { text: "Метаданные музыки", link: "learn/metadata" },
      { text: "CSound", link: "learn/csound" },
      { text: "Hydra", link: "learn/hydra" },
      { text: "Устройства ввода", link: "learn/input-devices" },
      { text: "Движение устройства", link: "learn/devicemotion" },
      { text: "Продвинутые интеграции", link: "learn/advanced-integrations" },
      { text: "Сообщество и ресурсы", link: "learn/community" }
    ],
    "Функции паттернов": [
      { text: "Введение", link: "functions/intro" },
      { text: "Создание Patterns", link: "learn/factories" },
      { text: "Модификаторы времени", link: "learn/time-modifiers" },
      { text: "Параметры управления", link: "functions/value-modifiers" },
      { text: "Сигналы", link: "learn/signals" },
      { text: "Случайные модификаторы", link: "learn/random-modifiers" },
      { text: "Условные модификаторы", link: "learn/conditional-modifiers" },
      { text: "Накопление", link: "learn/accumulation" },
      { text: "Тональные функции", link: "learn/tonal" },
      { text: "Пошаговые функции", link: "learn/stepwise" }
    ],
    "Понимание": [
      { text: "Синтаксис кода", link: "learn/code" },
      { text: "Pitch", link: "understand/pitch" },
      { text: "Ксеногармонические функции", link: "learn/xen" },
      { text: "Cycles", link: "understand/cycles" },
      { text: "Voicings", link: "understand/voicings" },
      { text: "Выравнивание паттернов", link: "technical-manual/alignment" },
      { text: "Bulka vs Tidal", link: "learn/strudel-vs-tidal" }
    ],
    "Разработка": [
      { text: "Bulka в вашем проекте", link: "technical-manual/project-start" },
      { text: "Пакеты", link: "technical-manual/packages" },
      { text: "REPL", link: "technical-manual/repl" },
      { text: "Звуки", link: "technical-manual/sounds" },
      { text: "Документация", link: "technical-manual/docs" },
      { text: "Тестирование", link: "technical-manual/testing" }
      // { text: 'Internals', link: 'technical-manual/internals' },
    ]
  }
};

const __vite_import_meta_env__$2 = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://strudel.cc/", "SSR": true};
const { BASE_URL } = Object.assign(__vite_import_meta_env__$2, { _: process.env._ });
const baseNoTrailing = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
const DocSearchModal = docSearchReact.DocSearchModal || docSearchReact.default.DocSearchModal;
const useDocSearchKeyboardEvents = docSearchReact.useDocSearchKeyboardEvents || docSearchReact.default.useDocSearchKeyboardEvents;
function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef(null);
  const [initialQuery, setInitialQuery] = useState("");
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const onInput = useCallback(
    (e) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery]
  );
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        ref: searchButtonRef,
        onClick: onOpen,
        className: "rounded-md bg-slate-900 w-full px-2 search-button",
        children: [
          /* @__PURE__ */ jsx("svg", { width: "24", height: "24", fill: "none", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ) }),
          /* @__PURE__ */ jsxs("span", { className: "search-hint", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Press " }),
            /* @__PURE__ */ jsx("kbd", { children: "/" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: " to search" })
          ] })
        ]
      }
    ),
    isOpen && createPortal(
      /* @__PURE__ */ jsx(
        DocSearchModal,
        {
          initialQuery,
          initialScrollY: window.scrollY,
          onClose,
          indexName: ALGOLIA.indexName,
          appId: ALGOLIA.appId,
          apiKey: ALGOLIA.apiKey,
          getMissingResultsUrl: ({ query }) => {
            return `https://codeberg.org/uzu/strudel/issues/new?title=Missing%20doc%20for${encodeURIComponent(query)}`;
          },
          transformItems: (items) => {
            return items.map((item) => {
              const a = document.createElement("a");
              a.href = item.url;
              const hash = a.hash === "#overview" ? "" : a.hash;
              let pathname = a.pathname;
              pathname = pathname.startsWith("/") ? pathname.slice(1) : pathname;
              pathname = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
              const url = `${baseNoTrailing}/${pathname}/${hash}`;
              return {
                ...item,
                url
              };
            });
          }
        }
      ),
      document.body
    )
  ] });
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MobileNav({ sidebar }) {
  return /* @__PURE__ */ jsx(Disclosure, { as: "nav", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Открыть меню" }),
      open ? /* @__PURE__ */ jsx(XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsx(Disclosure.Panel, { className: "md:hidden absolute top-14 right-0 max-h-screen pb-14 overflow-auto z-[100] w-full", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1 px-4 py-4 bg-[#161616]", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "..",
          className: "py-2 flex cursor-pointer items-center space-x-1 hover:bg-background hover:px-2 rounded-md",
          children: /* @__PURE__ */ jsx("span", { children: "перейти в REPL" })
        }
      ),
      Object.entries(sidebar).map(([group, items], i) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("div", { children: group }),
        items.map((item, j) => /* @__PURE__ */ jsx(
          Disclosure.Button,
          {
            as: "a",
            href: `/${item.link}`,
            className: classNames(
              item.current ? "bg-background text-white" : "text-gray-300 hover:bg-lineHighlight hover:text-white",
              "block px-3 py-2 rounded-md text-base font-medium"
            ),
            "aria-current": item.current ? "page" : undefined,
            children: item.text
          },
          j
        ))
      ] }, i))
    ] }) })
  ] }) });
}

const __vite_import_meta_env__$1 = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://strudel.cc/", "SSR": true};
const $$Astro$4 = createAstro("https://strudel.cc/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.props;
  const langCode = "en";
  const sidebar = SIDEBAR[langCode];
  const { BASE_URL } = Object.assign(__vite_import_meta_env__$1, { _: process.env._ });
  const baseNoTrailing = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-between py-2 px-4 items-center h-14 max-h-14 bg-lineHighlight text-foreground" title="Главная навигация" data-astro-cid-2w66rqv5> <div class="flex overflow-visible items-center grow" style="overflow:visible" data-astro-cid-2w66rqv5> <div class="flex items-center text-2xl space-x-2" data-astro-cid-2w66rqv5> <h1 class="font-bold flex space-x-2 items-baseline text-xl" data-astro-cid-2w66rqv5> <span class="text-2xl" data-astro-cid-2w66rqv5>🍞</span> <div class="flex space-x-2 items-baseline" data-astro-cid-2w66rqv5> <span class="bulka-logo" style="font-family: 'Fredoka', sans-serif; color: #D4A574;" data-astro-cid-2w66rqv5>bulka</span> <span class="text-sm font-medium" data-astro-cid-2w66rqv5>DOCS</span> </div> </h1> </div> </div>  <div class="search-item h-10" data-astro-cid-2w66rqv5> ${renderComponent($$result, "Search", Search, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/user/Bulka/website/src/components/Header/Search", "client:component-export": "default", "data-astro-cid-2w66rqv5": true })} </div> <a${addAttribute(`${baseNoTrailing}/`, "href")} class="hidden md:flex cursor-pointer items-center space-x-1" data-astro-cid-2w66rqv5>${renderComponent($$result, "CommandLineIcon", CommandLineIcon, { "className": "w-5 h-5", "data-astro-cid-2w66rqv5": true })}<span data-astro-cid-2w66rqv5>перейти в REPL</span> </a> <div class="md:hidden" data-astro-cid-2w66rqv5> ${renderComponent($$result, "MobileNav", MobileNav, { "sidebar": sidebar, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/user/Bulka/website/src/docs/MobileNav", "client:component-export": "default", "data-astro-cid-2w66rqv5": true })} </div> </nav>  `;
}, "/home/user/Bulka/website/src/components/Header/Header.astro", undefined);

const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//;
function getLanguageFromURL(pathname) {
  const langCodeMatch = pathname.match(langPathRegex);
  const langCode = langCodeMatch ? langCodeMatch[1] : "en";
  return langCode;
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://strudel.cc/", "SSR": true};
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://strudel.cc/");
const $$LeftSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LeftSidebar;
  const { currentPage } = Astro2.props;
  const { BASE_URL } = Object.assign(__vite_import_meta_env__, { _: process.env._ });
  let currentPageMatch = currentPage.slice(BASE_URL.length, currentPage.endsWith("/") ? -1 : undefined);
  const baseNoTrailing = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  const langCode = getLanguageFromURL(currentPage) || "en";
  const sidebar = SIDEBAR[langCode];
  return renderTemplate(_a || (_a = __template(["", '<nav aria-labelledby="grid-left" class="max-h-full overflow-auto pb-20 text-foreground"> <ul> ', ` </ul> </nav> <script>
window.addEventListener('DOMContentLoaded', () => {
  var target = document.querySelector('[aria-current="page"]');
  const nav = document.querySelector('.nav-groups');
  if (nav && target && target.offsetTop > window.innerHeight - 100) {
    nav.scrollTop = target.offsetTop;
  }
});
</script>`])), maybeRenderHead(), Object.entries(sidebar).map(([header, children]) => renderTemplate`<li> <div class="nav-group pb-4"> <h2>${header}</h2> <ul> ${children.map((child) => {
    const url = `${baseNoTrailing}/${child.link}${child.link.endsWith("/") ? "" : "/"}`;
    return renderTemplate`<li class=""> <a${addAttribute(`pl-4 py-0.5 w-full hover:bg-lineHighlight block${currentPageMatch === child.link ? " bg-lineHighlight" : ""}`, "class")}${addAttribute(url, "href")}${addAttribute(currentPageMatch === child.link ? "page" : false, "aria-current")}> ${child.text} </a> </li>`;
  })} </ul> </div> </li>`));
}, "/home/user/Bulka/website/src/components/LeftSidebar/LeftSidebar.astro", undefined);

const $$Astro$2 = createAstro("https://strudel.cc/");
const $$MoreMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MoreMenu;
  const { editHref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="px-4 py-4"> ${editHref && renderTemplate`<li> <a class="flex items-center space-x-2"${addAttribute(editHref, "href")} target="_blank"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"> <path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path> </svg> <span>Редактировать страницу</span> </a> </li>`} ${renderTemplate`<li${addAttribute(`header-link depth-2`, "class")}> <a${addAttribute(COMMUNITY_INVITE_URL, "href")} target="_blank" class="flex items-center space-x-2"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-alt" class="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"> <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path> </svg> <span>Присоединяйся к сообществу</span> </a> </li>`} <li class="header-link depth-2"> <a rel="me" href="https://social.toplap.org/@strudel" target="_blank" class="flex items-center space-x-2"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 216.4144 232.00976"> <path fill="currentColor" d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"></path> <path fill="black" d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"></path> </svg> <span>@strudel в Mastodon</span></a> </li> </ul>`;
}, "/home/user/Bulka/website/src/components/RightSidebar/MoreMenu.astro", undefined);

const $$Astro$1 = createAstro("https://strudel.cc/");
const $$PageContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageContent;
  const { githubEditUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article id="article" class="content" data-astro-cid-j75b3yus> <section class="main-section" data-astro-cid-j75b3yus> <!-- TODO: add dropdown toc on mobile --> <div class="prose dark:prose-invert max-w-full pb-8" data-astro-cid-j75b3yus> ${renderSlot($$result, $$slots["default"])} </div> </section> <nav class="block sm:hidden" data-astro-cid-j75b3yus> ${renderComponent($$result, "MoreMenu", $$MoreMenu, { "editHref": githubEditUrl, "data-astro-cid-j75b3yus": true })} </nav> </article> `;
}, "/home/user/Bulka/website/src/components/PageContent/PageContent.astro", undefined);

const TableOfContents = ({ headings = [], currentPage }) => {
  const toc = useRef();
  const onThisPageID = "on-this-page-heading";
  const itemOffsets = useRef([]);
  const [currentID, setCurrentID] = useState("overview");
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("article :is(h1, h2, h3, h4)");
      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY
      }));
    };
    getItemOffsets();
    window.addEventListener("resize", getItemOffsets);
    return () => {
      window.removeEventListener("resize", getItemOffsets);
    };
  }, []);
  useEffect(() => {
    if (!toc.current) return;
    const setCurrent = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          if (id === onThisPageID) continue;
          setCurrentID(entry.target.id);
          break;
        }
      }
    };
    const observerOptions = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: "-100px 0% -66%",
      threshold: 1
    };
    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);
    document.querySelectorAll("article :is(h1,h2,h3)").forEach((h) => headingsObserver.observe(h));
    return () => headingsObserver.disconnect();
  }, [toc.current]);
  const onLinkClick = (e) => {
    setCurrentID(e.target.getAttribute("href").replace("#", ""));
  };
  const minDepth = 1;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("ul", { ref: toc, children: headings.filter(({ depth }) => depth >= minDepth && depth < 4).map((heading, i) => /* @__PURE__ */ jsx("li", { className: `w-full`, children: /* @__PURE__ */ jsx(
    "a",
    {
      href: `${currentPage}/#${heading.slug}`,
      onClick: onLinkClick,
      className: `py-0.5 block cursor-pointer w-full border-l-4 border-lineHighlight hover:bg-lineHighlight ${["pl-4", "pl-9", "pl-12"][heading.depth - minDepth]} ${currentID === heading.slug ? "bg-lineHighlight" : ""}`.trim(),
      children: unescape(heading.text)
    }
  ) }, i)) }) });
};

const $$Astro = createAstro("https://strudel.cc/");
const $$RightSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RightSidebar;
  const { headings, githubEditUrl } = Astro2.props;
  let currentPage = Astro2.url.pathname;
  currentPage = currentPage.endsWith("/") ? currentPage.slice(0, -1) : currentPage;
  return renderTemplate`${maybeRenderHead()}<nav aria-labelledby="grid-right" class="w-64 text-foreground"> ${renderComponent($$result, "TableOfContents", TableOfContents, { "client:media": "(min-width: 50em)", "headings": headings, "currentPage": currentPage, "client:component-hydration": "media", "client:component-path": "/home/user/Bulka/website/src/components/RightSidebar/TableOfContents", "client:component-export": "default" })} ${renderComponent($$result, "MoreMenu", $$MoreMenu, { "editHref": githubEditUrl })} </nav>`;
}, "/home/user/Bulka/website/src/components/RightSidebar/RightSidebar.astro", undefined);

export { $$Header as $, GITHUB_EDIT_URL as G, OPEN_GRAPH as O, SITE as S, $$LeftSidebar as a, $$PageContent as b, $$RightSidebar as c };
