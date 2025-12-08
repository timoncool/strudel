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
  "title": "Продвинутые интеграции",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "продвинутые-интеграции",
    "text": "Продвинутые интеграции"
  }, {
    "depth": 2,
    "slug": "hydra--продвинутые-техники",
    "text": "Hydra — продвинутые техники"
  }, {
    "depth": 3,
    "slug": "синхронизация-паттернов-с-визуалами",
    "text": "Синхронизация паттернов с визуалами"
  }, {
    "depth": 3,
    "slug": "трансформация-встроенных-визуализаций",
    "text": "Трансформация встроенных визуализаций"
  }, {
    "depth": 3,
    "slug": "реакция-на-аудио",
    "text": "Реакция на аудио"
  }, {
    "depth": 2,
    "slug": "midi--продвинутые-техники",
    "text": "MIDI — продвинутые техники"
  }, {
    "depth": 3,
    "slug": "паттернирование-control-change",
    "text": "Паттернирование Control Change"
  }, {
    "depth": 3,
    "slug": "мультиканальный-midi",
    "text": "Мультиканальный MIDI"
  }, {
    "depth": 3,
    "slug": "pitch-bend-и-модуляция",
    "text": "Pitch Bend и модуляция"
  }, {
    "depth": 3,
    "slug": "midi-input--использование-контроллеров",
    "text": "MIDI Input — использование контроллеров"
  }, {
    "depth": 2,
    "slug": "osc-и-supercollider",
    "text": "OSC и SuperCollider"
  }, {
    "depth": 3,
    "slug": "настройка-подключения",
    "text": "Настройка подключения"
  }, {
    "depth": 3,
    "slug": "отправка-в-superdirt",
    "text": "Отправка в SuperDirt"
  }, {
    "depth": 3,
    "slug": "орбиты-для-раздельной-обработки",
    "text": "Орбиты для раздельной обработки"
  }, {
    "depth": 2,
    "slug": "геймпад",
    "text": "Геймпад"
  }, {
    "depth": 2,
    "slug": "flok--совместный-live-coding",
    "text": "Flok — совместный live coding"
  }, {
    "depth": 2,
    "slug": "hydra-strudel-расширение",
    "text": "Hydra-Strudel расширение"
  }, {
    "depth": 2,
    "slug": "практические-советы",
    "text": "Практические советы"
  }, {
    "depth": 3,
    "slug": "производительность-интеграций",
    "text": "Производительность интеграций"
  }, {
    "depth": 3,
    "slug": "отладка",
    "text": "Отладка"
  }, {
    "depth": 3,
    "slug": "комбинирование-интеграций",
    "text": "Комбинирование интеграций"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "продвинутые-интеграции",
      children: ["Продвинутые интеграции", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#продвинутые-интеграции",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эта страница описывает продвинутые техники интеграции Bulka с внешними инструментами и системами."
    }), "\n", createVNode(_components.h2, {
      id: "hydra--продвинутые-техники",
      children: ["Hydra — продвинутые техники", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#hydra--продвинутые-техники",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "синхронизация-паттернов-с-визуалами",
      children: ["Синхронизация паттернов с визуалами", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#синхронизация-паттернов-с-визуалами",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Функция ", createVNode(_components.code, {
        children: "H()"
      }), " позволяет использовать музыкальные паттерны как входные данные для Hydra:"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `await initHydra()
let pat = "3 4 5 [6 7]*2"
// Количество граней фигуры следует паттерну
shape(H(pat))
.scale(1.5)
.rotate(()=>time*0.1)
.out(o0)
// Звук использует тот же паттерн
n(pat).scale("A:minor").piano().room(0.5)`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "трансформация-встроенных-визуализаций",
      children: ["Трансформация встроенных визуализаций", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#трансформация-встроенных-визуализаций",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["С ", createVNode(_components.code, {
        children: "feedStrudel"
      }), " можно применять эффекты Hydra к pianoroll, scope и другим:"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `await initHydra({feedStrudel:1})
// Визуализации Strudel идут в s0
src(s0)
.kaleid(H("<3 4 5 6>"))
.colorama(0.1)
.out()
//
$: s("bd*4, hh*8, ~ cp")
$: note("[c3,e3,g3]*2").s("sawtooth").lpf(800)
all(x=>x.scope())`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "реакция-на-аудио",
      children: ["Реакция на аудио", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#реакция-на-аудио",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["С ", createVNode(_components.code, {
        children: "detectAudio"
      }), " Hydra реагирует на звук через FFT анализ:"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `await initHydra({detectAudio:true})
osc(10,0.1,1)
.modulate(noise(3))
.scale(()=> 1 + a.fft[0]*0.5)  // реагирует на бас
.colorama(()=> a.fft[2]*0.3)  // цвет от высоких
.out()
$: s("bd*4, hh*8").gain(1.2)`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "midi--продвинутые-техники",
      children: ["MIDI — продвинутые техники", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#midi--продвинутые-техники",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "паттернирование-control-change",
      children: ["Паттернирование Control Change", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#паттернирование-control-change",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Модулируйте параметры внешних синтезаторов с помощью CC:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// CC 74 часто управляет фильтром
// Синус модулирует cutoff
note("c2 e2 g2 a2")
.ccn(74)
.ccv(sine.slow(8).range(0, 1))
.midi()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "мультиканальный-midi",
      children: ["Мультиканальный MIDI", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#мультиканальный-midi",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Отправляйте разные паттерны на разные MIDI каналы:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
// Канал 1 - бас
note("c2 e2 g2").midichan(1),
// Канал 2 - лид
note("c4 e4 g4 b4").midichan(2),
// Канал 10 - ударные (стандарт GM)
note("c1 d1 c1 [c1 d1]").midichan(10)
).midi()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "pitch-bend-и-модуляция",
      children: ["Pitch Bend и модуляция", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#pitch-bend-и-модуляция",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Плавный pitch bend
note("c3 e3 g3 c4")
.midibend(sine.slow(4).range(-0.2, 0.2))
.midi()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "midi-input--использование-контроллеров",
      children: ["MIDI Input — использование контроллеров", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#midi-input--использование-контроллеров",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Подключение к MIDI входу"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " cc "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " midin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Your MIDI Device'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Используем CC контроллеры для управления"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "note"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"c3 e3 g3 b3\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lpf"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "cc"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "74"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "range"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))  "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// CC 74 → фильтр"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lpq"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "cc"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "71"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "range"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))      "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// CC 71 → резонанс"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "gain"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "cc"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "7"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "range"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))       "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// CC 7 → громкость"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "s"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"sawtooth\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "osc-и-supercollider",
      children: ["OSC и SuperCollider", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#osc-и-supercollider",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "настройка-подключения",
      children: ["Настройка подключения", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#настройка-подключения",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Установите и запустите OSC мост"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @strudel/osc"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# С отладкой для проверки сообщений"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @strudel/osc"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --debug"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "отправка-в-superdirt",
      children: ["Отправка в SuperDirt", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#отправка-в-superdirt",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// Все события идут через OSC в SuperCollider
$: s("bd*4, hh*8, ~ sd")
all(osc)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "орбиты-для-раздельной-обработки",
      children: ["Орбиты для раздельной обработки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#орбиты-для-раздельной-обработки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "В SuperDirt разные орбиты имеют независимые эффекты:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
s("bd*4").orbit(0),           // Сухой сигнал
s("hh*8").orbit(1).room(0.5), // С реверберацией
s("~ sd").orbit(2).delay(0.3) // С делеем
).osc()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "геймпад",
      children: ["Геймпад", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#геймпад",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Управляйте паттернами с помощью геймпада:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `// gp = gamepad(0) - первый геймпад
// gp.a, gp.b, gp.x, gp.y - кнопки
// gp.lstick.x/y - левый стик
// gp.rstick.x/y - правый стик

// Пример (требует подключённый геймпад):
// note("c3 e3 g3 b3")
//   .mask(gp.a)  // Играет когда нажата A
//   .lpf(gp.lstick.x.range(200, 5000))
//   .s("sawtooth")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "flok--совместный-live-coding",
      children: ["Flok — совместный live coding", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#flok--совместный-live-coding",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://flok.cc/",
        children: "Flok"
      }), " позволяет нескольким людям кодить вместе:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Откройте flok.cc"
      }), "\n", createVNode(_components.li, {
        children: "Создайте сессию"
      }), "\n", createVNode(_components.li, {
        children: "Поделитесь ссылкой с другими"
      }), "\n", createVNode(_components.li, {
        children: "Один кодит звук (Strudel), другой — визуалы (Hydra)"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Участник 1 — звук"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "s"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bd*4, hh*8\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "note"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"[c3,e3,g3]\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "s"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"sawtooth\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lpf"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "800"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Участник 2 — визуалы"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "osc"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "rotate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "out"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "hydra-strudel-расширение",
      children: ["Hydra-Strudel расширение", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#hydra-strudel-расширение",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Внешнее расширение для ещё более тесной интеграции:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Загрузка расширения"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " loadScript"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://cdn.jsdelivr.net/gh/atfornes/Hydra-strudel-extension@latest/hydra-strudel.js\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " initHydraStrudel"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Один паттерн для звука и визуализации"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "myPattern "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '0 10 [2 5]*4'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "slow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "note"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(myPattern)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "play"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()      "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Аудио"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "osc"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "P"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(myPattern))."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "out"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()     "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Визуализация с функцией P()"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "практические-советы",
      children: ["Практические советы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#практические-советы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "производительность-интеграций",
      children: ["Производительность интеграций", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#производительность-интеграций",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hydra"
        }), ": Сложные шейдеры нагружают GPU. Начинайте с простого."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "MIDI"
        }), ": Web MIDI имеет небольшую задержку. Для критичных применений используйте desktop версию."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "OSC"
        }), ": Требует запущенного SuperCollider. Убедитесь, что SuperDirt загружен."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "отладка",
      children: ["Отладка", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#отладка",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Для OSC — запустите с --debug"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// npx @strudel/osc --debug"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Для MIDI — проверьте доступные устройства"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// В консоли браузера: navigator.requestMIDIAccess()"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "комбинирование-интеграций",
      children: ["Комбинирование интеграций", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/advanced-integrations/#комбинирование-интеграций",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Можно использовать несколько интеграций одновременно:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `await initHydra({detectAudio:true})
// Визуалы реагируют на звук
osc(5).scale(()=>1+a.fft[0]).out()
// Звук идёт через встроенный движок
$: s("bd*4, hh*8, ~ cp").room(0.3)`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Для более детальной информации о каждой интеграции смотрите соответствующие страницы документации."
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

const url = "/learn/advanced-integrations";
const file = "/home/user/Bulka/website/src/pages/learn/advanced-integrations.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/advanced-integrations.mdx";
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
