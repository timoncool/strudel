/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl, ch as midi2note } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import { $ as $$Box } from '../../chunks/Box_BjdITm45.mjs';
import 'react/jsx-runtime';
import 'react';
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
  "title": "Первые ноты",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "первые-ноты",
    "text": "Первые ноты"
  }, {
    "depth": 2,
    "slug": "числа-и-ноты",
    "text": "числа и ноты"
  }, {
    "depth": 2,
    "slug": "изменение-звука",
    "text": "изменение звука"
  }, {
    "depth": 2,
    "slug": "более-длинные-последовательности",
    "text": "Более длинные последовательности"
  }, {
    "depth": 2,
    "slug": "гаммы",
    "text": "Гаммы"
  }, {
    "depth": 2,
    "slug": "повторение-и-удлинение",
    "text": "Повторение и удлинение"
  }, {
    "depth": 2,
    "slug": "итоги",
    "text": "Итоги"
  }, {
    "depth": 2,
    "slug": "примеры",
    "text": "Примеры"
  }, {
    "depth": 2,
    "slug": "воспроизведение-нескольких-паттернов",
    "text": "Воспроизведение нескольких паттернов"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "первые-ноты",
      children: ["Первые ноты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-notes/#первые-ноты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Давайте посмотрим, как мы можем воспроизводить ноты"
    }), "\n", createVNode(_components.h2, {
      id: "числа-и-ноты",
      children: ["числа и ноты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-notes/#числа-и-ноты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "воспроизведение нот с помощью чисел"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("48 52 55 59").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(Array(49).fill().map((_, i) => [midi2note(i + 36), i + 36])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Попробуйте разные числа!"
      }), createVNode(_components.p, {
        children: "Попробуйте десятичные числа, например 55.5"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "воспроизведение нот с помощью букв"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c e g b").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(['c3', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3'].map(n => [n, n.split('')[0]])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Попробуйте разные буквы (a - g)."
      }), createVNode(_components.p, {
        children: "Можете ли вы найти мелодии, которые образуют настоящие слова? Подсказка: ☕ 😉 ⚪"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "добавьте бемоль или диез, чтобы сыграть черные клавиши"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("db eb gb ab bb").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(['db3', 'eb3', 'gb3', 'ab3', 'bb3'].map(n => [n, n.split('').slice(0, 2).join('')])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c# d# f# g# a#").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(['c#3', 'd#3', 'f#3', 'g#3', 'a#3'].map(n => [n, n.split('').slice(0, 2).join('')])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "воспроизведение нот с буквами в разных октавах"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c2 e3 g4 b5").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(Array(49).fill().map((_, i) => [midi2note(i + 36), midi2note(i + 36)])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Попробуйте разные октавы (1-8)"
      })
    }), "\n", createVNode(_components.p, {
      children: "Если вы не знакомы с буквенной системой обозначения нот, вам будет проще использовать числа.\nБольшинство примеров ниже будет использовать числа по этой причине.\nМы также позже рассмотрим способы упростить игру правильных нот."
    }), "\n", createVNode(_components.h2, {
      id: "изменение-звука",
      children: ["изменение звука", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-notes/#изменение-звука",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Так же, как и с неритмичными звуками, мы можем изменить звук наших нот с помощью ", createVNode(_components.code, {
        children: "sound"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("36 43, 52 59 62 64").sound("piano")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Попробуйте разные звуки:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "gm_electric_guitar_muted"
        }), "\n", createVNode(_components.li, {
          children: "gm_acoustic_bass"
        }), "\n", createVNode(_components.li, {
          children: "gm_voice_oohs"
        }), "\n", createVNode(_components.li, {
          children: "gm_blown_bottle"
        }), "\n", createVNode(_components.li, {
          children: "sawtooth"
        }), "\n", createVNode(_components.li, {
          children: "square"
        }), "\n", createVNode(_components.li, {
          children: "triangle"
        }), "\n", createVNode(_components.li, {
          children: "как насчет bd, sd или hh?"
        }), "\n", createVNode(_components.li, {
          children: ["уберите ", createVNode(_components.code, {
            children: ".sound('...')"
          }), " полностью"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "переключение между звуками"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("48 67 63 [62, 58]")
.sound("piano gm_electric_guitar_muted")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "наложение нескольких звуков"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("48 67 63 [62, 58]")
.sound("piano, gm_electric_guitar_muted")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Паттерны ", createVNode(_components.code, {
          children: "note"
        }), " и ", createVNode(_components.code, {
          children: "sound"
        }), " комбинируются!"]
      }), createVNode(_components.p, {
        children: "Мы увидим больше способов комбинировать паттерны позже.."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "более-длинные-последовательности",
      children: ["Более длинные последовательности", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-notes/#более-длинные-последовательности",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Разделение последовательностей с помощью ", createVNode(_components.code, {
          children: "/"
        }), " для замедления"]
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("[36 34 41 39]/4").sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "/4"
        }), " воспроизводит последовательность в скобках на протяжении 4 циклов (=8с)."]
      }), createVNode(_components.p, {
        children: "Таким образом, каждая из 4 нот длится 2 секунды."
      }), createVNode(_components.p, {
        children: "Попробуйте добавить больше нот внутрь скобок и обратите внимание, как это ускоряется."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Воспроизведение одной на cycle с помощью ", createVNode(_components.code, {
          children: "< ... >"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["В предыдущей главе мы узнали, что ", createVNode(_components.code, {
        children: "< ... >"
      }), " (угловые скобки) можно использовать для воспроизведения только одной вещи за cycle,\nчто полезно и для более длинных мелодий:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<36 34 41 39>").sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Попробуйте добавить больше нот внутрь скобок и обратите внимание, как темп остается тем же."
      }), createVNode(_components.p, {
        children: "Угловые скобки на самом деле — это просто сокращение:"
      }), createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "<a b c>"
        }), " = ", createVNode(_components.code, {
          children: "[a b c]/3"
        })]
      }), createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "<a b c d>"
        }), " = ", createVNode(_components.code, {
          children: "[a b c d]/4"
        })]
      }), createVNode(_components.p, {
        children: "…"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Воспроизведение одной последовательности на cycle"
      })
    }), "\n", createVNode(_components.p, {
      children: "Мы можем комбинировать 2 типа скобок различными способами.\nВот пример повторяющейся басовой линии:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[36 48]*4 [34 46]*4 [41 53]*4 [39 51]*4>")
.sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Чередование между несколькими вещами"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("60 <63 62 65 63>")
.sound("gm_xylophone")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это также полезно для неритмичных звуков:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd*4, [~ <sd cp>]*2, [~ hh]*4")
.bank("RolandTR909")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "гаммы",
      children: ["Гаммы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-notes/#гаммы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Найти правильные ноты может быть сложно.. Гаммы (scales) здесь, чтобы помочь:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(60)
n("0 2 4 <[6,8] [7,9]>")
.scale("C:minor").sound("piano")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Попробуйте разные числа. Любое число должно звучать хорошо!"
      }), createVNode(_components.p, {
        children: "Попробуйте разные гаммы (scales):"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "C:major"
        }), "\n", createVNode(_components.li, {
          children: "A2:minor"
        }), "\n", createVNode(_components.li, {
          children: "D:dorian"
        }), "\n", createVNode(_components.li, {
          children: "G:mixolydian"
        }), "\n", createVNode(_components.li, {
          children: "A2:minor:pentatonic"
        }), "\n", createVNode(_components.li, {
          children: "F:major:pentatonic"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "автоматизация гамм"
      })
    }), "\n", createVNode(_components.p, {
      children: "Как и всё остальное, мы можем автоматизировать гамму с помощью pattern:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(60)
n("<0 -3>, 2 4 <[6,8] [7,9]>")
.scale("<C:major D:mixolydian>/4")
.sound("piano")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Если вы понятия не имеете, что означают эти гаммы, не волнуйтесь.\nЭто просто названия для разных наборов нот, которые хорошо звучат вместе."
      }), createVNode(_components.p, {
        children: "Не торопитесь, и вы найдете гаммы, которые вам понравятся!"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "повторение-и-удлинение",
      children: ["Повторение и удлинение", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-notes/#повторение-и-удлинение",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Удлинение с помощью @"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c@3 eb").sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Неиспользование ", createVNode(_components.code, {
          children: "@"
        }), " равносильно использованию ", createVNode(_components.code, {
          children: "@1"
        }), ". В приведенном выше примере c длится 3 единицы, а eb — 1 единицу."]
      }), createVNode(_components.p, {
        children: "Попробуйте изменить это число!"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Удлинение внутри подпоследовательностей"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(60)
n("<[4@2 4] [5@2 5] [6@2 6] [5@2 5]>*2")
.scale("<C2:mixolydian F2:mixolydian>/4")
.sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Этот грув называется ", createVNode(_components.code, {
          children: "shuffle"
        }), ".\nКаждый бит имеет две ноты, где первая в два раза длиннее второй.\nЭто иногда также называется triplet swing. Вы часто найдете это в блюзе и джазе."]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Репликация"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(60)
note("c!2 [eb,<g a bb a>]").sound("piano")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Попробуйте переключаться между ", createVNode(_components.code, {
          children: "!"
        }), ", ", createVNode(_components.code, {
          children: "*"
        }), " и ", createVNode(_components.code, {
          children: "@"
        })]
      }), createVNode(_components.p, {
        children: "В чем разница?"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "итоги",
      children: ["Итоги", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-notes/#итоги",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Давайте подведем итоги того, что мы узнали в этой главе:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Концепция"
          }), createVNode(_components.th, {
            children: "Синтаксис"
          }), createVNode(_components.th, {
            children: "Пример"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Замедление"
          }), createVNode(_components.td, {
            children: "/"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("[c a f e]/2")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Чередование"
          }), createVNode(_components.td, {
            children: "<>"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c a f <e g>")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Удлинение"
          }), createVNode(_components.td, {
            children: "@"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c@3 e")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Репликация"
          }), createVNode(_components.td, {
            children: "!"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c!3 e")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Новые функции:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Название"
          }), createVNode(_components.th, {
            children: "Описание"
          }), createVNode(_components.th, {
            children: "Пример"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "note"
          }), createVNode(_components.td, {
            children: "установить высоту как число или букву"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("b g e c").sound("piano")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "scale"
          }), createVNode(_components.td, {
            children: ["интерпретировать ", createVNode(_components.code, {
              children: "n"
            }), " как ступень гаммы"]
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("6 4 2 0").scale("C:minor").sound("piano")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "$:"
          }), createVNode(_components.td, {
            children: "воспроизводить паттерны параллельно"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: '$: s("bd sd")\n$: note("c eb g")',
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "примеры",
      children: ["Примеры", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-notes/#примеры",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Классная басовая линия"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("gm_synth_bass_1")
.lpf(800) // <-- мы скоро узнаем об этом`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Классная мелодия"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n(\`<
[~ 0] 2 [0 2] [~ 2]
[~ 0] 1 [0 1] [~ 1]
[~ 0] 3 [0 3] [~ 3]
[~ 0] 2 [0 2] [~ 2]
>*4\`).scale("C4:minor")
.sound("gm_synth_strings_1")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Классные ударные"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd*4, [~ <sd cp>]*2, [~ hh]*4")
.bank("RolandTR909")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Если бы только был способ воспроизводить всё вышеперечисленное одновременно…"
      })
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Вы можете использовать ", createVNode(_components.code, {
          children: "$:"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "воспроизведение-нескольких-паттернов",
      children: ["Воспроизведение нескольких паттернов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-notes/#воспроизведение-нескольких-паттернов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Если вы хотите воспроизводить несколько паттернов одновременно, убедитесь, что написали ", createVNode(_components.code, {
        children: "$:"
      }), " перед каждым:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("gm_synth_bass_1").lpf(800)

$: n(\`<
[~ 0] 2 [0 2] [~ 2]
[~ 0] 1 [0 1] [~ 1]
[~ 0] 3 [0 3] [~ 3]
[~ 0] 2 [0 2] [~ 2]
>*4\`).scale("C4:minor")
.sound("gm_synth_strings_1")

$: sound("bd*4, [~ <sd cp>]*2, [~ hh]*4")
.bank("RolandTR909")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Попробуйте изменить ", createVNode(_components.code, {
          children: "$"
        }), " на ", createVNode(_components.code, {
          children: "_$"
        }), ", чтобы заглушить часть!"]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Это начинает звучать как настоящая музыка! У нас есть звуки, у нас есть ноты, теперь не хватает последнего кусочка головоломки: ", createVNode(_components.a, {
        href: "/workshop/first-effects/",
        children: "эффектов"
      })]
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

const url = "/workshop/first-notes";
const file = "/home/user/Bulka/website/src/pages/workshop/first-notes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/workshop/first-notes.mdx";
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
