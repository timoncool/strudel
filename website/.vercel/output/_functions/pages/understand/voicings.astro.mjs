/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import 'react/jsx-runtime';
import 'react';
import 'claviature';
import '../../chunks/Box_BjdITm45.mjs';
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
  "title": "Понимание аккордовых Voicings",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "понимание-аккордов-и-voicings",
    "text": "Понимание аккордов и Voicings"
  }, {
    "depth": 2,
    "slug": "что-такое-аккорд",
    "text": "Что такое аккорд"
  }, {
    "depth": 2,
    "slug": "обозначение-аккордов",
    "text": "Обозначение аккордов"
  }, {
    "depth": 3,
    "slug": "трезвучия",
    "text": "Трезвучия"
  }, {
    "depth": 2,
    "slug": "voicings",
    "text": "Voicings"
  }, {
    "depth": 2,
    "slug": "voice-leading",
    "text": "Voice Leading"
  }, {
    "depth": 2,
    "slug": "символы-аккордов",
    "text": "Символы аккордов"
  }, {
    "depth": 2,
    "slug": "функция-voicing",
    "text": "Функция voicing"
  }, {
    "depth": 2,
    "slug": "словари-voicing",
    "text": "Словари Voicing"
  }, {
    "depth": 2,
    "slug": "словарь-по-умолчанию",
    "text": "Словарь по умолчанию"
  }, {
    "depth": 2,
    "slug": "anchor",
    "text": "anchor"
  }, {
    "depth": 2,
    "slug": "mode",
    "text": "mode"
  }, {
    "depth": 2,
    "slug": "n",
    "text": "n"
  }, {
    "depth": 2,
    "slug": "пример",
    "text": "Пример"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
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
      id: "понимание-аккордов-и-voicings",
      children: ["Понимание аккордов и Voicings", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#понимание-аккордов-и-voicings",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Давайте глубже погрузимся в то, как работают аккорды и voicings в strudel.\nЯ постараюсь свести теоретический жаргон к минимуму, так что, надеюсь, это будет доступно для всех заинтересованных."
    }), "\n", createVNode(_components.h2, {
      id: "что-такое-аккорд",
      children: ["Что такое аккорд", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#что-такое-аккорд",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Игра более чем одной ноты одновременно обычно называется ", createVNode(_components.code, {
        children: "аккордом"
      }), ". Вот пример:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c3,eb3,g3] [f3,a3,c4]>").room(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вот то же самое с midi-номерами:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[48,51,55] [53,57,60]>").room(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Здесь у нас два 3-нотных аккорда, воспроизводимых в цикле.\nВы могли бы уже остановиться здесь и писать аккорды в этом стиле, что вполне нормально и дает вам контроль над отдельными нотами.\nОдин недостаток заключается в том, что может быть сложно найти хорошо звучащие аккорды, и, возможно, вы жаждете какого-то другого способа организации аккордов."
    }), "\n", createVNode(_components.h2, {
      id: "обозначение-аккордов",
      children: ["Обозначение аккордов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#обозначение-аккордов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Аккорды обычно получают разные метки в зависимости от соотношения нот внутри.\nВ числовом примере выше у нас есть ", createVNode(_components.code, {
        children: "48,51,55"
      }), " и ", createVNode(_components.code, {
        children: "53,57,60"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы проанализировать соотношение этих нот, их обычно сравнивают с каким-то ", createVNode(_components.code, {
        children: "основным тоном"
      }), ", который часто является самой низкой нотой.\nВ нашем случае ", createVNode(_components.code, {
        children: "основными тонами"
      }), " будут ", createVNode(_components.code, {
        children: "48"
      }), " (= ", createVNode(_components.code, {
        children: "c3"
      }), ") и ", createVNode(_components.code, {
        children: "53"
      }), " (= ", createVNode(_components.code, {
        children: "f3"
      }), ").\nМы можем выразить те же аккорды относительно этих ", createVNode(_components.code, {
        children: "основных тонов"
      }), " так:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[0,3,7] [0,4,7]>".add("<48 53>")).room(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Теперь внутри каждого аккорда каждое число представляет расстояние от основного тона.\nРасстояние между питчами обычно называется ", createVNode(_components.code, {
        children: "интервалом"
      }), ", но пока давайте будем придерживаться понятия расстояние."]
    }), "\n", createVNode(_components.p, {
      children: ["Теперь мы видим, что наши 2 аккорда на самом деле довольно похожи, так как единственное различие - средняя нота (и основной тон, конечно).\nОни являются частью группы аккордов, называемых ", createVNode(_components.code, {
        children: "трезвучиями"
      }), ", которые являются аккордами с 3 нотами."]
    }), "\n", createVNode(_components.h3, {
      id: "трезвучия",
      children: ["Трезвучия", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#трезвучия",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Эти 4 формы являются наиболее распространенными типами ", createVNode(_components.code, {
        children: "трезвучий"
      }), ", с которыми вы столкнетесь:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "форма"
          }), createVNode(_components.th, {
            children: "обозначение"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "0,4,7"
          }), createVNode(_components.td, {
            children: "мажорное"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "0,3,7"
          }), createVNode(_components.td, {
            children: "минорное"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "0,3,6"
          }), createVNode(_components.td, {
            children: "уменьшенное"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "0,4,8"
          }), createVNode(_components.td, {
            children: "увеличенное"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вот они по порядку:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[0,4,7] [0,3,7] [0,3,6] [0,4,8]>".add("60"))
.room(.5)._pitchwheel()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Многие типы музыки часто используют только минорные и мажорные аккорды, так что у нас уже есть знания для аккомпанемента песен. Вот одна из них:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `
note(\`<
[0,3,7] [0,4,7] [0,4,7] [0,4,7]
[0,3,7] [0,4,7] [0,3,7] [0,4,7]
>\`.add(\`<
a c d f
a e a e
>\`)).room(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это аккорды для “The House of the Rising Sun” группы The Animals.\nПока это звучит не слишком захватывающе, но, по крайней мере, узнаваемо."
    }), "\n", createVNode(_components.h2, {
      id: "voicings",
      children: ["Voicings", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#voicings",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "Voicing"
      }), " - это один из многих способов расположения определенной формы аккорда.\nТермин происходит из хоровой музыки, где аккорды могут быть спеты по-разному путем назначения разных нот каждому голосу.\nНапример, мы могли бы добавить 12 полутонов к одной или нескольким нотам в аккорде:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[0,3,7] [12,3,7] [12,15,7] [12,15,19]>".add("48"))
.room(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Ноты, находящиеся на расстоянии 12 полутоновых шагов (= 1 ", createVNode(_components.code, {
        children: "октава"
      }), "), считаются равными в гармоническом смысле, поэтому они получают одну и ту же нотную букву.\nВот тот же пример с нотными буквами:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c3,eb3,g3] [c4,eb3,g3] [c4,eb4,g3] [c4,eb4,g4]>")
.room(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Эти типы voicings также называются ", createVNode(_components.code, {
        children: "обращениями"
      }), ". Существует много других способов, которыми мы могли бы ", createVNode(_components.code, {
        children: "озвучить"
      }), " этот минорный аккорд:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[0,3,7,12] [0,15,24] [0,3,12]>".add("48"))
.room(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Здесь мы немного меняем вкус аккорда путем"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "удвоения нот на 12 шагов выше,"
      }), "\n", createVNode(_components.li, {
        children: "использования очень широких расстояний"
      }), "\n", createVNode(_components.li, {
        children: "пропуска нот"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "voice-leading",
      children: ["Voice Leading", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#voice-leading",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Когда мы хотим осмысленно соединить аккорды в последовательности, выбранные voicings влияют на то, как каждый аккорд переходит к следующему.\nДавайте вернемся к “The House of the Rising Sun”, на этот раз используя наши недавно приобретенные техники voicing:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note(\`<
[0,3,7] [7,12,16] [0,7,16] [4,7,12]
[0,3,7] [4,7,12] [0,3,7] [4,7,12]
>\`.add(\`<
a c d f
a e a e
>\`)).room(.5)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Эти voicings делают аккорды более связными и менее скачкообразными по сравнению с предыдущей версией, которая не фокусировалась на voicing.\nСпособ взаимодействия аккордов также называется ", createVNode(_components.code, {
        children: "голосоведением"
      }), ", напоминающим о том, как\nиндивидуальный хоровой голос двигался бы через последовательность аккордов."]
    }), "\n", createVNode(_components.p, {
      children: "Например, попробуйте спеть верхний голос в примере выше. Затем попробуйте то же самое\nв примере, не фокусирующемся на голосоведении. Какой легче?"
    }), "\n", createVNode(_components.p, {
      children: "Естественно, есть много способов, которыми прогрессия аккордов может быть озвучена, и нет определенного правильного или неправильного."
    }), "\n", createVNode(_components.h2, {
      id: "символы-аккордов",
      children: ["Символы аккордов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#символы-аккордов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Музыканты, играющие музыку на основе аккордов, часто используют ", createVNode(_components.code, {
        children: "лид-шит"
      }), ", который является упрощенной нотацией для музыкального произведения.\nЭти листы сжимают основные элементы, такие как аккорды, в символы, которые делают музыку легкой для чтения и следования.\nНапример, лид-шит для “The House of the Rising Sun” может включать аккорды, написанные так:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Am | C | D  | F"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Am | E | Am | E"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Здесь каждый символ состоит из ", createVNode(_components.code, {
        children: "основного тона"
      }), " аккорда и опционально ", createVNode(_components.code, {
        children: "m"
      }), " для обозначения минорного аккорда (только основной тон означает мажорный).\nМы могли бы зеркально отразить эту нотацию в strudel, используя функцию ", createVNode(_components.code, {
        children: "pick"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `"<Am C D F Am E Am E>"
.pick({
  Am: "57,60,64",
  C: "55,60,64",
  D: "50,57,66",
  F: "57,60,65",
  E: "56,59,64",
})
.note().room(.5)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "функция-voicing",
      children: ["Функция voicing", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#функция-voicing",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Придумывание хорошо звучащих voicings, которые хорошо соединяются, может быть трудным и трудоемким процессом.\nФункции ", createVNode(_components.code, {
        children: "chord"
      }), " и ", createVNode(_components.code, {
        children: "voicing"
      }), " могут использоваться для автоматизации этого:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `chord("<Am C D F Am E Am E>").voicing().room(.5)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Здесь мы также используем символы аккордов, но voicings будут автоматически сгенерированы с плавным ", createVNode(_components.code, {
        children: "голосоведением"
      }), ", минимизирующим скачки.\nЭто вдохновлено тем, как пианист или гитарист выбирал бы аккорды для аккомпанемента песни."]
    }), "\n", createVNode(_components.h2, {
      id: "словари-voicing",
      children: ["Словари Voicing", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#словари-voicing",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Функция voicing внутренне использует так называемые ", createVNode(_components.code, {
        children: "словари voicing"
      }), ", которые также могут быть настроены:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `addVoicings('house', {
'': ['7 12 16', '0 7 16', '4 7 12'],
'm': ['0 3 7']
})
chord("<Am C D F Am E Am E>")
.dict('house').anchor(66)
.voicing().room(.5)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["В ", createVNode(_components.code, {
        children: "словаре voicing"
      }), " каждому символу аккорда назначается один или несколько voicings.\nФункция ", createVNode(_components.code, {
        children: "voicing"
      }), " затем выбирает voicing, который ближе всего к ", createVNode(_components.code, {
        children: "anchor"
      }), " (по умолчанию ", createVNode(_components.code, {
        children: "c5"
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: ["Удобная вещь в этом подходе заключается в том, что ", createVNode(_components.code, {
        children: "словарь voicing"
      }), " может использоваться для воспроизведения любой прогрессии аккордов с автоматизированным голосоведением!"]
    }), "\n", createVNode(_components.h2, {
      id: "словарь-по-умолчанию",
      children: ["Словарь по умолчанию", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#словарь-по-умолчанию",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "При использовании словаря по умолчанию вы можете использовать эти символы аккордов:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2 5 6 7 9 11 13 69 add9"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "o h sus ^ - ^7 -7 7sus"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "h7 o7 ^9 ^13 ^7#11 ^9#11"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "^7#5 -6 -69 -^7 -^9 -9"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "-add9 -11 -7b5 h9 -b6 -#5"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "7b9 7#9 7#11 7b5 7#5 9#11"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "9b5 9#5 7b13 7#9#5 7#9b5"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "7#9#11 7b9#11 7b9b5 7b9#5"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "7b9#9 7b9b13 7alt 13#11"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "13b9 13#9 7b9sus 7susadd3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "9sus 13sus 7b13sus"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "aug M m M7 m7 M9 M13"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "M7#11 M9#11 M7#5 m6 m69"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "m^7 -M7 m^9 -M9 m9 madd9"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "m11 m7b5 mb6 m#5 mM7 mM9"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Доступные аккорды и формат очень вдохновлены ", createVNode(_components.a, {
        href: "https://technimo.helpshift.com/hc/en/3-ireal-pro/faq/88-chord-symbols-used-in-ireal-pro/",
        children: "аккордами ireal pro"
      }), ".\nНекоторые символы являются синонимами:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "”-” то же самое, что “m”, например C-7 = Cm7"
      }), "\n", createVNode(_components.li, {
        children: "”^” то же самое, что “M”, например C^7 = CM7"
      }), "\n", createVNode(_components.li, {
        children: "”+” то же самое, что “aug”"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Вы можете решить, какие вам больше нравятся. Не существует международного стандарта для этих символов.\nЧтобы получить полный аккорд, символы должны иметь префикс с основным питчем, например D7#11 - это аккорд 7#11 относительно питча D."
    }), "\n", createVNode(_components.p, {
      children: "Вот все возможные аккорды с основным тоном C:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `chord(\`<
C2 C5 C6 C7 C9 C11 C13 C69
Cadd9 Co Ch Csus C^ C- C^7
C-7 C7sus Ch7 Co7 C^9 C^13
C^7#11 C^9#11 C^7#5 C-6 C-69
C-^7 C-^9 C-9 C-add9 C-11
C-7b5 Ch9 C-b6 C-#5 C7b9
C7#9 C7#11 C7b5 C7#5 C9#11
C9b5 C9#5 C7b13 C7#9#5 C7#9b5
C7#9#11 C7b9#11 C7b9b5 C7b9#5
C7b9#9 C7b9b13 C7alt C13#11
C13b9 C13#9 C7b9sus C7susadd3
C9sus C13sus C7b13sus C Caug
CM Cm CM7 Cm7 CM9 CM13 CM7#11
CM9#11 CM7#5 Cm6 Cm69 Cm^7
C-M7 Cm^9 C-M9 Cm9 Cmadd9
Cm11 Cm7b5 Cmb6 Cm#5
>\`).voicing().room(.5)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что словарь по умолчанию содержит несколько способов (= ", createVNode(_components.code, {
        children: "voicings"
      }), ") для воспроизведения каждого символа аккорда.\nПо умолчанию функция ", createVNode(_components.code, {
        children: "voicing"
      }), " пытается минимизировать скачки.\nВы можете изменить выбранные voicings различными способами, которые теперь объясняются более подробно:"]
    }), "\n", createVNode(_components.h2, {
      id: "anchor",
      children: ["anchor", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#anchor",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "Anchor"
      }), " - это нота, которая используется для выравнивания voicings:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `anchor("<c4 g4 c5 g5>").chord("C").voicing().room(.5)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "По умолчанию anchor - это самая высокая возможная нота, которую может содержать voicing.\nПри принятии решения, какой voicing из словаря выбрать для определенного аккорда, побеждает voicing с верхней нотой, ближайшей к anchor."
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что anchors в примере выше совпадают с верхними нотами на пиано-ролле.\nКак и ", createVNode(_components.code, {
        children: "note"
      }), ", anchor принимает либо midi-номера, либо названия нот."]
    }), "\n", createVNode(_components.h2, {
      id: "mode",
      children: ["mode", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#mode",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["С помощью ", createVNode(_components.code, {
        children: "mode"
      }), " вы можете изменить способ, которым voicing относится к ", createVNode(_components.code, {
        children: "anchor"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `mode("<below above duck root>").chord("C").anchor("c5").voicing().room(.5)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Режимы:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "below"
        }), ": верхняя нота voicing ниже или равна anchor (по умолчанию)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "above"
        }), ": нижняя нота voicing выше или равна anchor"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "duck"
        }), ": верхняя нота voicing ниже anchor"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "root"
        }), ": нижняя нота voicing всегда является основным тоном, ближайшим к anchor"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "Anchor"
      }), " также может быть установлен изнутри функции ", createVNode(_components.code, {
        children: "mode"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `mode("<below above duck root>:c5").chord("C").voicing().room(.5)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "n",
      children: ["n", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#n",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Контрол ", createVNode(_components.code, {
        children: "n"
      }), " может использоваться с ", createVNode(_components.code, {
        children: "voicing"
      }), " для выбора отдельных нот:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 3 1 2").chord("<C <Fm Db>>").voicing()
.clip("4 3 2 1").room(.5)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "пример",
      children: ["Пример", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/voicings/#пример",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вот пример джазового блюза в F:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `let chords = chord(\`<
F7 Bb7 F7 [Cm7 F7]
Bb7 Bo F7 [Am7 D7]
Gm7 C7 [F7 D7] [Gm7 C7]
>\`)
$: n("7 8 [10 9] 8").set(chords).voicing().dec(.2)
$: chords.struct("- x - x").voicing().room(.5)
$: n("0 - 1 -").set(chords).mode("root:g2").voicing()
`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Аккорды повторно используются для мелодии, аккордов и басовой линии композиции."
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

const url = "/understand/voicings";
const file = "/home/user/Bulka/website/src/pages/understand/voicings.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/understand/voicings.mdx";
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
