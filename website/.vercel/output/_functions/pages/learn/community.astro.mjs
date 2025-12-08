/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
export { renderers } from '../../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$MainLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "title": "Сообщество и ресурсы",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "сообщество-и-ресурсы",
    "text": "Сообщество и ресурсы"
  }, {
    "depth": 2,
    "slug": "где-найти-сообщество",
    "text": "Где найти сообщество"
  }, {
    "depth": 2,
    "slug": "советы-и-хитрости",
    "text": "Советы и хитрости"
  }, {
    "depth": 3,
    "slug": "частые-ошибки",
    "text": "Частые ошибки"
  }, {
    "depth": 3,
    "slug": "workflow-советы",
    "text": "Workflow советы"
  }, {
    "depth": 2,
    "slug": "примеры-треков",
    "text": "Примеры треков"
  }, {
    "depth": 3,
    "slug": "минимал-техно",
    "text": "Минимал техно"
  }, {
    "depth": 3,
    "slug": "эмбиент-дрон",
    "text": "Эмбиент дрон"
  }, {
    "depth": 3,
    "slug": "драм-н-бейс-паттерн",
    "text": "Драм-н-бейс паттерн"
  }, {
    "depth": 3,
    "slug": "полиритмический-грув",
    "text": "Полиритмический грув"
  }, {
    "depth": 3,
    "slug": "евклидовы-ритмы",
    "text": "Евклидовы ритмы"
  }, {
    "depth": 3,
    "slug": "acid-bassline",
    "text": "Acid bassline"
  }, {
    "depth": 3,
    "slug": "lo-fi-хип-хоп",
    "text": "Lo-fi хип-хоп"
  }, {
    "depth": 2,
    "slug": "продвинутые-техники",
    "text": "Продвинутые техники"
  }, {
    "depth": 3,
    "slug": "нарезка-брейков-breakbeat-chopping",
    "text": "Нарезка брейков (Breakbeat chopping)"
  }, {
    "depth": 3,
    "slug": "генеративные-паттерны-с-rand",
    "text": "Генеративные паттерны с rand"
  }, {
    "depth": 3,
    "slug": "layer-для-сложных-текстур",
    "text": "Layer для сложных текстур"
  }, {
    "depth": 3,
    "slug": "phasing-фазирование",
    "text": "Phasing (фазирование)"
  }, {
    "depth": 3,
    "slug": "conditional-modifiers",
    "text": "Conditional modifiers"
  }, {
    "depth": 2,
    "slug": "youtube-туториалы",
    "text": "YouTube туториалы"
  }, {
    "depth": 2,
    "slug": "полезные-ресурсы",
    "text": "Полезные ресурсы"
  }, {
    "depth": 3,
    "slug": "документация",
    "text": "Документация"
  }, {
    "depth": 3,
    "slug": "инструменты",
    "text": "Инструменты"
  }, {
    "depth": 3,
    "slug": "семплы",
    "text": "Семплы"
  }, {
    "depth": 2,
    "slug": "оптимизация-производительности",
    "text": "Оптимизация производительности"
  }, {
    "depth": 2,
    "slug": "философия-live-coding",
    "text": "Философия live coding"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "сообщество-и-ресурсы",
      children: ["Сообщество и ресурсы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#сообщество-и-ресурсы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эта страница собирает полезные советы, примеры треков и ресурсы от сообщества Strudel/TidalCycles."
    }), "\n", createVNode(_components.h2, {
      id: "где-найти-сообщество",
      children: ["Где найти сообщество", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#где-найти-сообщество",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Discord"
        }), ": ", createVNode(_components.a, {
          href: "https://discord.com/invite/HGEdXmRkzT",
          children: "Tidal, Strudel and friends"
        }), " — 7000+ участников, активное сообщество"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Форум"
        }), ": ", createVNode(_components.a, {
          href: "https://club.tidalcycles.org/",
          children: "club.tidalcycles.org"
        }), " — обсуждения, вопросы, идеи"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Community Bakery"
        }), ": ", createVNode(_components.a, {
          href: "https://strudel.cc/bakery/",
          children: "strudel.cc/bakery"
        }), " — паттерны от других пользователей"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "GitHub"
        }), ": ", createVNode(_components.a, {
          href: "https://github.com/terryds/awesome-strudel",
          children: "awesome-strudel"
        }), " — курируемая коллекция ресурсов"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "советы-и-хитрости",
      children: ["Советы и хитрости", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#советы-и-хитрости",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "частые-ошибки",
      children: ["Частые ошибки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#частые-ошибки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: [createVNode(_components.code, {
          children: "n"
        }), " vs ", createVNode(_components.code, {
          children: "note"
        }), " — в чём разница?"]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "note"
        }), " изменяет высоту звука (pitch)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "n"
        }), " выбирает номер sample из банка"]
      }), "\n"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// n выбирает sample из банка
s("bd").n("<0 1 2 3>")  // разные бочки`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// note меняет высоту звука
s("piano").note("c4 e4 g4 c5")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["При работе с синтезаторами оба меняют высоту, но с samples ", createVNode(_components.code, {
        children: "n"
      }), " выбирает файл!"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Панель Reference замедляет работу"
      })
    }), "\n", createVNode(_components.p, {
      children: "Если заметили тормоза — закройте панель Reference. Она рендерит много элементов и может влиять на производительность звука."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Звуки не загружаются с первого раза"
      })
    }), "\n", createVNode(_components.p, {
      children: "Samples нужно загрузить — при первом запуске может быть тишина. Просто запустите код ещё раз."
    }), "\n", createVNode(_components.h3, {
      id: "workflow-советы",
      children: ["Workflow советы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#workflow-советы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Используйте Community Bakery для вдохновения"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Открывайте ", createVNode(_components.a, {
        href: "https://strudel.cc/bakery/",
        children: "strudel.cc/bakery"
      }), ", изучайте паттерны других — это лучший способ учиться новым техникам."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Делитесь своим кодом"
      })
    }), "\n", createVNode(_components.p, {
      children: "Нажмите кнопку “Share” в REPL — получите ссылку на ваш паттерн, которой можно поделиться."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Не бойтесь удалять код"
      })
    }), "\n", createVNode(_components.p, {
      children: "Если результат не нравится — удаляйте и начинайте заново. Это нормальная часть процесса live coding."
    }), "\n", createVNode(_components.h2, {
      id: "примеры-треков",
      children: ["Примеры треков", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#примеры-треков",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "минимал-техно",
      children: ["Минимал техно", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#минимал-техно",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Минималистичный техно грув
stack(
s("bd*4").gain(1.2),
s("~ cp").room(0.3),
s("hh*8").gain(0.6).pan(sine.range(0.3, 0.7)),
note("g1*2 [~ g1] g1 [g1 a1]")
  .s("sawtooth")
  .lpf(sine.slow(8).range(200, 1200))
  .lpq(8)
  .gain(0.7)
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "эмбиент-дрон",
      children: ["Эмбиент дрон", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#эмбиент-дрон",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Атмосферный эмбиент
stack(
note("[c3,e3,g3,b3]")
  .s("sawtooth")
  .lpf(400)
  .attack(2)
  .release(4)
  .room(0.8)
  .size(0.9)
  .slow(4),
note("c2").s("sine")
  .gain(0.3)
  .slow(8)
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "драм-н-бейс-паттерн",
      children: ["Драм-н-бейс паттерн", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#драм-н-бейс-паттерн",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// DnB ритм-секция
stack(
s("[bd ~] ~ [~ bd] ~"),
s("~ [~ sd] ~ sd").room(0.2),
s("[hh hh]*4").gain(0.5).speed(1.2)
).fast(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "полиритмический-грув",
      children: ["Полиритмический грув", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#полиритмический-грув",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Полиритмия 3 против 4
stack(
s("bd*4"),
s("cp*3").gain(0.8),
s("hh*5").gain(0.5)
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "евклидовы-ритмы",
      children: ["Евклидовы ритмы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#евклидовы-ритмы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Евклидовы ритмы создают интересные паттерны
stack(
s("bd(3,8)"),
s("sd(5,8)").gain(0.7),
s("hh(7,8)").gain(0.5),
s("cp(2,8)").room(0.3)
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "acid-bassline",
      children: ["Acid bassline", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#acid-bassline",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Acid 303 стиль
note("c2 c2 [c2 c3] c2 c2 [~ c2] eb2 [c2 g1]")
.s("sawtooth")
.lpf(sine.slow(4).range(200, 2000))
.lpq(15)
.lpenv(4)
.lpa(0.01)
.lpd(0.1)
.gain(0.8)
.distort(0.3)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "lo-fi-хип-хоп",
      children: ["Lo-fi хип-хоп", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#lo-fi-хип-хоп",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Lo-fi vibes
stack(
s("bd [~ bd] ~ bd").slow(2),
s("~ sd").slow(2).room(0.4),
s("hh*4").gain(0.3).speed(0.9),
note("<[c4,e4,g4] [a3,c4,e4] [f3,a3,c4] [g3,b3,d4]>")
  .s("piano")
  .slow(2)
  .room(0.5)
  .lpf(2000)
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "продвинутые-техники",
      children: ["Продвинутые техники", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#продвинутые-техники",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "нарезка-брейков-breakbeat-chopping",
      children: ["Нарезка брейков (Breakbeat chopping)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#нарезка-брейков-breakbeat-chopping",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Классическая нарезка amen break
samples('github:yaxu/clean-breaks')
s("amen/4").fit()
.chop(16)
.cut(1)
.sometimesBy(0.3, ply(2))
.sometimesBy(0.2, rev)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "генеративные-паттерны-с-rand",
      children: ["Генеративные паттерны с rand", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#генеративные-паттерны-с-rand",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Случайные вариации
note("c3 e3 g3 b3")
.add(note(rand.range(-2, 2)))
.s("piano")
.sometimesBy(0.3, add(note(12)))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "layer-для-сложных-текстур",
      children: ["Layer для сложных текстур", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#layer-для-сложных-текстур",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Наложение разных обработок
note("c3 e3 g3 b3").layer(
x => x.s("sawtooth").lpf(800),
x => x.s("square").add(note(12)).gain(0.3),
x => x.s("sine").sub(note(12)).gain(0.5)
).room(0.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "phasing-фазирование",
      children: ["Phasing (фазирование)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#phasing-фазирование",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Фазирование в стиле Стива Райха
note("c4 d4 e4 g4 a4 g4 e4 d4")
.s("piano")
.fast("[1, 1.01]")  // чуть разные скорости
.room(0.4)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "conditional-modifiers",
      children: ["Conditional modifiers", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#conditional-modifiers",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Применяем эффект каждые N циклов
s("bd sd cp sd")
.every(4, fast(2))
.every(3, rev)
.sometimesBy(0.2, speed(1.5))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "youtube-туториалы",
      children: ["YouTube туториалы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#youtube-туториалы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Рекомендуемые видео для изучения:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "“Live Coding For Music With Strudel.cc (Beginners)”"
        }), " — Groovin in G, отличный старт для новичков"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "“Creative Code Art - WORKSHOP // Coding Music With Strudel”"
        }), " — Dan Gorelick & Viola He, полноценный воркшоп"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "“Intro To Algorave (Strudel Workshop)”"
        }), " — введение в культуру algorave"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Switch Angel"
        }), " — канал с демонстрациями live coding техно"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "полезные-ресурсы",
      children: ["Полезные ресурсы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#полезные-ресурсы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "документация",
      children: ["Документация", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#документация",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://strudel.cc/",
          children: "strudel.cc"
        }), " — официальный сайт"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://tidalcycles.org/docs/",
          children: "TidalCycles Docs"
        }), " — документация оригинального Tidal (многое применимо)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "инструменты",
      children: ["Инструменты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#инструменты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Flok"
        }), " (", createVNode(_components.a, {
          href: "https://flok.cc/",
          children: "flok.cc"
        }), ") — совместный live coding в браузере"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "strudel.nvim"
        }), " — интеграция с Neovim для продвинутых пользователей"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "семплы",
      children: ["Семплы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#семплы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://github.com/tidalcycles/dirt-samples",
          children: "Dirt Samples"
        }), " — стандартная библиотека"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://github.com/yaxu/clean-breaks",
          children: "Clean Breaks"
        }), " — коллекция брейков"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "оптимизация-производительности",
      children: ["Оптимизация производительности", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#оптимизация-производительности",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Закрывайте панель Reference"
        }), " при активном live coding"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["Используйте ", createVNode(_components.code, {
            children: ".cut(1)"
          })]
        }), " для samples, чтобы избежать наложения"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Desktop приложение"
        }), " — экспериментальная версия через Tauri для лучшей производительности"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ограничивайте reverb"
        }), " — ", createVNode(_components.code, {
          children: ".room()"
        }), " и ", createVNode(_components.code, {
          children: ".size()"
        }), " с высокими значениями нагружают процессор"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "философия-live-coding",
      children: ["Философия live coding", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/community/#философия-live-coding",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "«Не бойтесь ошибок — это часть процесса. Практикуйтесь как на музыкальном инструменте. Со временем станет лучше.»"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Live coding — это:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Эксперимент"
        }), " — пробуйте разное, слушайте что получается"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Процесс"
        }), " — важен не только результат, но и путь к нему"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Сообщество"
        }), " — делитесь, учитесь у других, задавайте вопросы"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Хотите добавить свой пример или совет? Создайте PR в репозитории проекта!"
      })
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/learn/community";
const file = "/home/user/Bulka/website/src/pages/learn/community.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/community.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
