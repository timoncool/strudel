/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
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
  "title": "Первые звуки",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "первые-звуки",
    "text": "Первые звуки"
  }, {
    "depth": 2,
    "slug": "поля-с-кодом",
    "text": "Поля с кодом"
  }, {
    "depth": 2,
    "slug": "звуки",
    "text": "Звуки"
  }, {
    "depth": 2,
    "slug": "звуки-ударных",
    "text": "Звуки ударных"
  }, {
    "depth": 2,
    "slug": "последовательности",
    "text": "Последовательности"
  }, {
    "depth": 2,
    "slug": "итоги",
    "text": "Итоги"
  }, {
    "depth": 2,
    "slug": "примеры",
    "text": "Примеры"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
      id: "первые-звуки",
      children: ["Первые звуки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-sounds/#первые-звуки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Это первая глава воркшопа Strudel, рады видеть вас на борту!"
    }), "\n", createVNode(_components.h2, {
      id: "поля-с-кодом",
      children: ["Поля с кодом", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-sounds/#поля-с-кодом",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Воркшоп полон интерактивных полей с кодом. Давайте научимся ими пользоваться. Вот одно из них:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("casio")`,
      dirt: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: "⬆️ кликните в текстовое поле выше ⬆️"
        }), "\n", createVNode(_components.li, {
          children: ["нажмите ", createVNode(_components.code, {
            children: "ctrl"
          }), "+", createVNode(_components.code, {
            children: "enter"
          }), " для воспроизведения"]
        }), "\n", createVNode(_components.li, {
          children: ["измените ", createVNode(_components.code, {
            children: "casio"
          }), " на ", createVNode(_components.code, {
            children: "metal"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["нажмите ", createVNode(_components.code, {
            children: "ctrl"
          }), "+", createVNode(_components.code, {
            children: "enter"
          }), " для обновления"]
        }), "\n", createVNode(_components.li, {
          children: ["нажмите ", createVNode(_components.code, {
            children: "ctrl"
          }), "+", createVNode(_components.code, {
            children: "."
          }), " для остановки"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: "Поздравляем, теперь вы занимаетесь live coding!"
    }), "\n", createVNode(_components.h2, {
      id: "звуки",
      children: ["Звуки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-sounds/#звуки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Мы только что воспроизвели звук с помощью ", createVNode(_components.code, {
        children: "sound"
      }), " вот так:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("casio")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "casio"
        }), " — один из многих стандартных звуков."]
      }), createVNode(_components.p, {
        children: "Попробуйте несколько других звуков:"
      }), createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "plaintext",
        children: createVNode(_components.code, {
          children: createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              children: "insect wind jazz metal east crow casio space numbers"
            })
          })
        })
      }), createVNode(_components.p, {
        children: "Вы можете услышать небольшую паузу, пока звук загружается"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Изменение номера sample с помощью :"
      })
    }), "\n", createVNode(_components.p, {
      children: "Один звук может содержать несколько samples (аудиофайлов)."
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете выбрать sample, добавив ", createVNode(_components.code, {
        children: ":"
      }), " и число к имени:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("casio:1")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Попробуйте разные комбинации звуков и номеров samples."
      }), createVNode(_components.p, {
        children: ["Если не добавлять число, это равносильно ", createVNode(_components.code, {
          children: ":0"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Теперь вы знаете, как использовать разные звуки.\nПока мы остановимся на этой небольшой подборке звуков, но позже узнаем, как загружать собственные звуки."
    }), "\n", createVNode(_components.h2, {
      id: "звуки-ударных",
      children: ["Звуки ударных", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-sounds/#звуки-ударных",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "По умолчанию Strudel поставляется с широким выбором звуков ударных:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh sd oh")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Эти буквенные комбинации обозначают разные части ударной установки:"
      }), createVNode("img", {
        src: "/img/drumset.png"
      }), createVNode("a", {
        class: "text-right text-xs",
        href: "https://de.wikipedia.org/wiki/Schlagzeug#/media/Datei:Drum_set.svg",
        target: "_blank",
        children: createVNode(_components.p, {
          children: "original image by Pbroks13"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "bd"
          }), " = ", createVNode(_components.strong, {
            children: "b"
          }), "ass ", createVNode(_components.strong, {
            children: "d"
          }), "rum (бас-барабан)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "sd"
          }), " = ", createVNode(_components.strong, {
            children: "s"
          }), "nare ", createVNode(_components.strong, {
            children: "d"
          }), "rum (малый барабан)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "rim"
          }), " = ", createVNode(_components.strong, {
            children: "rim"
          }), "shot (удар по ободу)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "hh"
          }), " = ", createVNode(_components.strong, {
            children: "h"
          }), "i", createVNode(_components.strong, {
            children: "h"
          }), "at (хай-хэт)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "oh"
          }), " = ", createVNode(_components.strong, {
            children: "o"
          }), "pen ", createVNode(_components.strong, {
            children: "h"
          }), "ihat (открытый хай-хэт)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "lt"
          }), " = ", createVNode(_components.strong, {
            children: "l"
          }), "ow tom (низкий том)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "mt"
          }), " = ", createVNode(_components.strong, {
            children: "m"
          }), "iddle tom (средний том)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "ht"
          }), " = ", createVNode(_components.strong, {
            children: "h"
          }), "igh tom (высокий том)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "rd"
          }), " = ", createVNode(_components.strong, {
            children: "r"
          }), "i", createVNode(_components.strong, {
            children: "d"
          }), "e cymbal (райд-тарелка)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "cr"
          }), " = ", createVNode(_components.strong, {
            children: "cr"
          }), "ash cymbal (крэш-тарелка)"]
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Попробуйте разные звуки ударных!"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы изменить звучание ударных, мы можем использовать ", createVNode(_components.code, {
        children: "bank"
      }), " для смены драм-машины:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh sd oh").bank("RolandTR909")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["В этом примере ", createVNode(_components.code, {
        children: "RolandTR909"
      }), " — это название драм-машины, которую мы используем.\nЭто знаменитая драм-машина для house и techno битов."]
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Попробуйте изменить ", createVNode(_components.code, {
          children: "RolandTR909"
        }), " на одну из:"]
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "AkaiLinn"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "RhythmAce"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "RolandTR808"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "RolandTR707"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "ViscoSpaceDrum"
          })
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Их гораздо больше, но пока давайте упростим"
      }), createVNode(_components.p, {
        children: "Профи-совет: Выделите название двойным кликом. Затем просто скопируйте и вставьте!"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "последовательности",
      children: ["Последовательности", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-sounds/#последовательности",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "В последнем примере мы уже видели, что можно воспроизводить несколько звуков в последовательности, разделяя их пробелом:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh sd hh")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Обратите внимание, как текущий воспроизводимый звук подсвечивается в коде и визуализируется ниже."
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Попробуйте добавить больше звуков в последовательность!"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Чем длиннее последовательность, тем быстрее она выполняется"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd bd hh bd rim bd hh bd")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Содержимое последовательности будет сжато в то, что называется cycle. По умолчанию cycle длится 2 секунды."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Один на cycle с помощью ", createVNode(_components.code, {
          children: "< .. >"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Вот та же последовательность, но на этот раз окруженная ", createVNode(_components.code, {
        children: "< .. >"
      }), " (угловыми скобками):"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("<bd bd hh bd rim bd hh bd>")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это будет воспроизводить только один звук за cycle. С этими скобками темп не меняется, когда мы добавляем или удаляем элементы!"
    }), "\n", createVNode(_components.p, {
      children: "Так как сейчас это очень медленно, мы можем снова ускорить это так:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("<bd bd hh bd rim bd hh bd>*8")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Здесь ", createVNode(_components.code, {
        children: "*8"
      }), " означает, что мы делаем всё это в 8 раз быстрее."]
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Подождите минуту, разве это не то же самое, что без ", createVNode(_components.code, {
          children: "< ... >*8"
        }), "? Зачем тогда это нужно?"]
      }), createVNode(_components.p, {
        children: "Это правда, особенность этой нотации в том, что темп не изменится, когда вы добавляете или удаляете элементы, попробуйте!"
      }), createVNode(_components.p, {
        children: "Попробуйте также изменить число в конце, чтобы изменить темп!"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "изменение темпа с помощью setcpm"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(90/4)
sound("<bd hh rim hh>*8")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "cpm = cycles per minute (циклов в минуту)"
      }), createVNode(_components.p, {
        children: "По умолчанию темп составляет 30 циклов в минуту = 120/4 = 1 cycle каждые 2 секунды"
      }), createVNode(_components.p, {
        children: "В терминах западной музыки можно сказать, что вышеприведенное — это восьмые ноты при 90bpm в размере 4/4.\nНо не волнуйтесь, если вы не знаете эти термины, они не требуются для создания музыки с Strudel."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Добавление пауз в последовательность с помощью ’-’ или ’~’"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh - rim - bd hh rim")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Подпоследовательности с [квадратными скобками]"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd [hh hh] sd [hh bd] bd - [hh sd] cp")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Попробуйте добавить больше звуков внутрь скобки!"
      })
    }), "\n", createVNode(_components.p, {
      children: "Подобно всей последовательности, содержимое подпоследовательности будет сжато до собственной длины."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Умножение: Ускорение"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh*2 rim hh*3 bd [- hh*2] rim hh*2")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Умножение: Ускорение подпоследовательностей"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd [hh rim]*2 bd [hh rim]*1.5")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Умножение: Оооочень сильное ускорение"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh*32 rim hh*16")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Высота звука = очень быстрый ритм"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Подподпоследовательности с [[двойными скобками]]"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd [[rim rim] hh] bd cp")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Вы можете углубляться настолько, насколько хотите!"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Воспроизведение последовательностей параллельно с помощью запятой"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh hh hh, bd casio")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вы можете использовать столько запятых, сколько хотите:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh hh hh, bd bd, - casio")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Запятые также могут использоваться внутри подпоследовательностей:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh hh hh, bd [bd,casio]")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Заметили, что два примера выше одинаковые?"
      }), createVNode(_components.p, {
        children: "Довольно часто существует много способов выразить одну и ту же идею."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Несколько строк с обратными кавычками"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound(\`bd*2, - cp,
- - - oh, hh*4,
[- casio]*2\`)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "выбор номеров samples отдельно"
      })
    }), "\n", createVNode(_components.p, {
      children: "Вместо того чтобы выбирать номера samples по одному:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("jazz:0 jazz:1 [jazz:4 jazz:2] jazz:3*2")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Мы также можем использовать функцию ", createVNode(_components.code, {
        children: "n"
      }), ", чтобы сделать это короче и читабельнее:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 1 [4 2] 3*2").sound("jazz")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "итоги",
      children: ["Итоги", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-sounds/#итоги",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Теперь мы изучили основы так называемой Mini-Notation, ритмического языка Tidal.\nВот что мы изучили к настоящему моменту:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
            children: "Последовательность"
          }), createVNode(_components.td, {
            children: "пробел"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd bd sd hh")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Номер sample"
          }), createVNode(_components.td, {
            children: ":x"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("hh:0 hh:1 hh:2 hh:3")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Паузы"
          }), createVNode(_components.td, {
            children: "- или ~"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("metal - jazz jazz:1")`,
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
              tune: `sound("<bd hh rim oh bd rim>")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Подпоследовательности"
          }), createVNode(_components.td, {
            children: "[]"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd wind [metal jazz] hh")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Подподпоследовательности"
          }), createVNode(_components.td, {
            children: "[[]]"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd [metal [jazz [sd cp]]]")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Ускорение"
          }), createVNode(_components.td, {
            children: "*"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd*2 cp*3")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Параллельно"
          }), createVNode(_components.td, {
            children: ","
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd*2, hh*2 [hh oh]")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Mini-Notation обычно используется внутри какой-либо функции. Вот функции, которые мы видели к настоящему моменту:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
            children: "sound"
          }), createVNode(_components.td, {
            children: "воспроизводит звук с указанным именем"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd [- bd] sd")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "bank"
          }), createVNode(_components.td, {
            children: "выбирает sound bank"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd [- bd] sd").bank("RolandTR909")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "setcpm"
          }), createVNode(_components.td, {
            children: "устанавливает темп в циклах в минуту"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `setcpm(45); sound("bd sd [- bd] sd")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "n"
          }), createVNode(_components.td, {
            children: "выбрать номер sample"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 1 4 2 0 6 3 2").sound("jazz")`,
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
        href: "/workshop/first-sounds/#примеры",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Базовый рок-бит"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(100/4)
sound("[bd sd]*2, hh*8").bank("RolandTR505")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Классический house"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd*4, [- cp]*2, [- hh]*4").bank("RolandTR909")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Обратите внимание, что эти два паттерна очень похожи.\nОпределенные барабанные паттерны используются в разных жанрах."
      })
    }), "\n", createVNode(_components.p, {
      children: "We Will Rock you"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(81/2)
sound("bd*2 cp").bank("RolandTR707")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Yellow Magic Orchestra - Firecracker"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(120/2)
sound("bd sd, - - - hh - hh - -, - perc - perc:1*2")
.bank("RolandCompurhythm1000")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Имитация 16-шагового секвенсора"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `
setcpm(90/4)
sound(\`
[-  -  oh - ] [-  -  -  - ] [-  -  -  - ] [-  -  -  - ],
[hh hh -  - ] [hh -  hh - ] [hh -  hh - ] [hh -  hh - ],
[-  -  -  - ] [cp -  -  - ] [-  -  -  - ] [cp -  -  - ],
[bd -  -  - ] [-  -  -  bd] [-  -  bd - ] [-  -  -  bd]
\`)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Еще один"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(88/4)
sound(\`
[-  -  -  - ] [-  -  -  - ] [-  -  -  - ] [-  -  oh:1 - ],
[hh hh hh hh] [hh hh hh hh] [hh hh hh hh] [hh hh -  - ],
[-  -  -  - ] [cp -  -  - ] [-  -  -  - ] [~  cp -  - ],
[bd bd -  - ] [-  -  bd - ] [bd bd - bd ] [-  -  -  - ]
\`).bank("RolandTR808")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Необычные ударные"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(100/2)
s(\`jazz*2,
insect [crow metal] - -,
- space:4 - space:1,
- wind\`)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Теперь, когда мы знаем основы создания битов, давайте посмотрим, как можно воспроизводить ", createVNode(_components.a, {
        href: "/workshop/first-notes/",
        children: "ноты"
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

const url = "/workshop/first-sounds";
const file = "/home/user/Bulka/website/src/pages/workshop/first-sounds.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/workshop/first-sounds.mdx";
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
