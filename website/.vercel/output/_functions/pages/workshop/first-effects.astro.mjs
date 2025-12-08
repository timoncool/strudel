/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import { Q as QA } from '../../chunks/QA_BwfHhPpt.mjs';
import { $ as $$Box } from '../../chunks/Box_BjdITm45.mjs';
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
  "title": "Первые эффекты",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "первые-эффекты",
    "text": "Первые эффекты"
  }, {
    "depth": 2,
    "slug": "некоторые-базовые-эффекты",
    "text": "Некоторые базовые эффекты"
  }, {
    "depth": 2,
    "slug": "модуляция-с-помощью-сигналов",
    "text": "модуляция с помощью сигналов"
  }, {
    "depth": 2,
    "slug": "итоги",
    "text": "Итоги"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    img: "img",
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
      id: "первые-эффекты",
      children: ["Первые эффекты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-effects/#первые-эффекты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", "\n", createVNode(_components.p, {
      children: "У нас есть звуки, у нас есть ноты, теперь давайте посмотрим на эффекты!"
    }), "\n", createVNode(_components.h2, {
      id: "некоторые-базовые-эффекты",
      children: ["Некоторые базовые эффекты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-effects/#некоторые-базовые-эффекты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "фильтр низких частот"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth").lpf(800)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["lpf = ", createVNode(_components.strong, {
          children: "l"
        }), "ow ", createVNode(_components.strong, {
          children: "p"
        }), "ass ", createVNode(_components.strong, {
          children: "f"
        }), "ilter (фильтр низких частот)"]
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Измените lpf на 200. Обратите внимание, как звук становится приглушенным. Представьте себя стоящим перед клубом с закрытой дверью 🚪."
        }), "\n", createVNode(_components.li, {
          children: "Теперь давайте откроем дверь… измените значение на 5000. Обратите внимание, как звук становится ярче ✨🪩"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "паттерн фильтра"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth").lpf("200 1000 200 1000")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Попробуйте добавить больше значений"
        }), "\n", createVNode(_components.li, {
          children: "Обратите внимание, что pattern в lpf не изменяет общий ритм"
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Мы узнаем, как автоматизировать с помощью волн позже…"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "vowel"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c3,g3,e4] [bb2,f3,d4] [a2,f3,c4] [bb2,g3,eb4]>")
.sound("sawtooth").vowel("<a e i o>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "gain"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: sound("hh*16").gain("[.25 1]*4")

$: sound("bd*4,[~ sd:1]*2")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Ритм — это всё о динамике!"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Уберите ", createVNode(_components.code, {
            children: ".gain(...)"
          }), " и обратите внимание, как плоско это звучит."]
        }), "\n", createVNode(_components.li, {
          children: "Верните его, отменив действие (ctrl+z)"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Давайте объединим всё вышеперечисленное в небольшую мелодию:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: sound("hh*8").gain("[.25 1]*4")

$: sound("bd*4,[~ sd:1]*2")

$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth").lpf("200 1000 200 1000")

$: note("<[c3,g3,e4] [bb2,f3,d4] [a2,f3,c4] [bb2,g3,eb4]>")
.sound("sawtooth").vowel("<a e i o>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "формирование звука с помощью adsr огибающей"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c3 bb2 f3 eb3")
.sound("sawtooth").lpf(600)
.attack(.1)
.decay(.1)
.sustain(.25)
.release(.2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Попробуйте выяснить, что делают числа.. Сравните следующее"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["attack: ", createVNode(_components.code, {
            children: ".5"
          }), " vs ", createVNode(_components.code, {
            children: "0"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["decay: ", createVNode(_components.code, {
            children: ".5"
          }), " vs ", createVNode(_components.code, {
            children: "0"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["sustain: ", createVNode(_components.code, {
            children: "1"
          }), " vs ", createVNode(_components.code, {
            children: ".25"
          }), " vs ", createVNode(_components.code, {
            children: "0"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["release: ", createVNode(_components.code, {
            children: "0"
          }), " vs ", createVNode(_components.code, {
            children: ".5"
          }), " vs ", createVNode(_components.code, {
            children: "1"
          })]
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Можете ли вы угадать, что они делают?"
      })]
    }), "\n", createVNode(QA, {
      q: "Нажмите, чтобы увидеть решение",
      "client:visible": true,
      "client:component-path": "@components/QA",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: [createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "attack: время, необходимое для нарастания"
        }), "\n", createVNode(_components.li, {
          children: "decay: время, необходимое для спада до уровня sustain"
        }), "\n", createVNode(_components.li, {
          children: "sustain: уровень после decay"
        }), "\n", createVNode(_components.li, {
          children: "release: время, необходимое для затухания после завершения ноты"
        }), "\n"]
      }), createVNode(_components.p, {
        children: createVNode(_components.img, {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/ADSR_parameter.svg/1920px-ADSR_parameter.svg.png",
          alt: "ADSR"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "короткая нотация adsr"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c3 bb2 f3 eb3")
.sound("sawtooth").lpf(600)
.adsr(".1:.1:.5:.2")
`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "delay"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: note("[~ [<[d3,a3,f4]!2 [d3,bb3,g4]!2> ~]]*2")
.sound("gm_electric_guitar_muted").delay(.5)

$: sound("bd rim").bank("RolandTR707").delay(".5")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Попробуйте несколько значений ", createVNode(_components.code, {
          children: "delay"
        }), " между 0 и 1. Кстати, ", createVNode(_components.code, {
          children: ".5"
        }), " — это сокращение от ", createVNode(_components.code, {
          children: "0.5"
        })]
      }), createVNode(_components.p, {
        children: ["Что произойдет, если вы используете ", createVNode(_components.code, {
          children: ".delay(\".8:.125\")"
        }), "? Можете ли вы угадать, что делает второе число?"]
      }), createVNode(_components.p, {
        children: ["Что произойдет, если вы используете ", createVNode(_components.code, {
          children: ".delay(\".8:.06:.8\")"
        }), "? Можете ли вы угадать, что делает третье число?"]
      })]
    }), "\n", createVNode(QA, {
      q: "Нажмите, чтобы увидеть решение",
      "client:visible": true,
      "client:component-path": "@components/QA",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: [createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "delay(\"a:b:c\")"
        }), ":"]
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "a: громкость delay"
        }), "\n", createVNode(_components.li, {
          children: "b: время delay"
        }), "\n", createVNode(_components.li, {
          children: "c: обратная связь (меньшее число = более быстрое затухание)"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "room aka reverb"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("<4 [3@3 4] [<2 0> ~@16] ~>")
.scale("D4:minor").sound("gm_accordion:2")
.room(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Попробуйте разные значения!"
      }), createVNode(_components.p, {
        children: "Добавьте также delay!"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "небольшая даб-мелодия"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: note("[~ [<[d3,a3,f4]!2 [d3,bb3,g4]!2> ~]]*2")
.sound("gm_electric_guitar_muted").delay(.5)

$: sound("bd rim").bank("RolandTR707").delay(.5)

$: n("<4 [3@3 4] [<2 0> ~@16] ~>")
.scale("D4:minor").sound("gm_accordion:2")
.room(2).gain(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Давайте добавим бас, чтобы завершить это:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: note("[~ [<[d3,a3,f4]!2 [d3,bb3,g4]!2> ~]]*2")
.sound("gm_electric_guitar_muted").delay(.5)

$: sound("bd rim").bank("RolandTR707").delay(.5)

$: n("<4 [3@3 4] [<2 0> ~@16] ~>")
.scale("D4:minor").sound("gm_accordion:2")
.room(2).gain(.4)

$: n("[0 [~ 0] 4 [3 2] [0 ~] [0 ~] <0 2> ~]/2")
.scale("D2:minor")
.sound("sawtooth,triangle").lpf(800)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Попробуйте добавить ", createVNode(_components.code, {
          children: ".hush()"
        }), " в конце одного из паттернов в стеке…"]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "pan"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("numbers:1 numbers:2 numbers:3 numbers:4")
.pan("0 0.3 .6 1")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "speed"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd rim [~ bd] rim").speed("<1 2 -1 -2>").room(.2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "fast и slow"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Мы можем использовать ", createVNode(_components.code, {
        children: "fast"
      }), " и ", createVNode(_components.code, {
        children: "slow"
      }), " для изменения темпа pattern вне Mini-Notation:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd*4,~ rim ~ cp").slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Измените значение ", createVNode(_components.code, {
          children: "slow"
        }), ". Попробуйте заменить его на ", createVNode(_components.code, {
          children: "fast"
        }), "."]
      }), createVNode(_components.p, {
        children: ["Что произойдет, если вы используете pattern вроде ", createVNode(_components.code, {
          children: ".fast(\"<1 [2 4]>\")"
        }), "?"]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Кстати, внутри Mini-Notation ", createVNode(_components.code, {
        children: "fast"
      }), " — это ", createVNode(_components.code, {
        children: "*"
      }), ", а ", createVNode(_components.code, {
        children: "slow"
      }), " — это ", createVNode(_components.code, {
        children: "/"
      }), "."]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("[bd*4,~ rim ~ cp]*<1 [2 4]>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "модуляция-с-помощью-сигналов",
      children: ["модуляция с помощью сигналов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-effects/#модуляция-с-помощью-сигналов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вместо пошагового изменения значений мы также можем управлять ими с помощью сигналов:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh*16").gain(sine)`,
      punchcard: true,
      punchcardLabels: false,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Базовые формы волн для сигналов — это ", createVNode(_components.code, {
          children: "sine"
        }), ", ", createVNode(_components.code, {
          children: "saw"
        }), ", ", createVNode(_components.code, {
          children: "square"
        }), ", ", createVNode(_components.code, {
          children: "tri"
        }), " 🌊"]
      }), createVNode(_components.p, {
        children: ["Попробуйте также случайные сигналы ", createVNode(_components.code, {
          children: "rand"
        }), " и ", createVNode(_components.code, {
          children: "perlin"
        }), "!"]
      }), createVNode(_components.p, {
        children: "Громкость gain визуализируется как прозрачность на пиано-ролле."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "установка диапазона"
      })
    }), "\n", createVNode(_components.p, {
      children: ["По умолчанию волны колеблются от 0 до 1. Мы можем изменить это с помощью ", createVNode(_components.code, {
        children: "range"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh*16").lpf(saw.range(500, 2000))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Что произойдет, если вы поменяете местами значения range?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Мы можем изменить скорость модуляции с помощью slow / fast:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth")
.lpf(sine.range(100, 2000).slow(4))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Теперь вся модуляция займет 8 циклов для повторения."
      })
    }), "\n", createVNode(_components.h2, {
      id: "итоги",
      children: ["Итоги", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/first-effects/#итоги",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "название"
          }), createVNode(_components.th, {
            children: "пример"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "lpf"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c2 c3 c2 c3").s("sawtooth").lpf("<400 2000>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "vowel"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c3 eb3 g3").s("sawtooth").vowel("<a e i o>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "gain"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("hh*16").gain("[.25 1]*2")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "delay"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim bd cp").delay(.5)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "room"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim bd cp").room(.5)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "pan"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim bd cp").pan("0 1")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "speed"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim bd cp").speed("<1 2 -1 -2>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "сигналы"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "sine"
            }), ", ", createVNode(_components.code, {
              children: "saw"
            }), ", ", createVNode(_components.code, {
              children: "square"
            }), ", ", createVNode(_components.code, {
              children: "tri"
            }), ", ", createVNode(_components.code, {
              children: "rand"
            }), ", ", createVNode(_components.code, {
              children: "perlin"
            }), createVNode("br", {}), createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("hh*16").gain  (saw)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "range"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("hh*16").lpf(saw.range(200,4000))`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Теперь давайте взглянем на некоторые типичные для Tidal ", createVNode(_components.a, {
        href: "/workshop/pattern-effects/",
        children: "эффекты pattern"
      }), "."]
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

const url = "/workshop/first-effects";
const file = "/home/user/Bulka/website/src/pages/workshop/first-effects.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/workshop/first-effects.mdx";
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
