/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import { J as JsDoc } from '../../chunks/JsDoc_CifKo6nH.mjs';
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
  "title": "MIDI, OSC и MQTT",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "midi-osc-и-mqtt",
    "text": "MIDI, OSC и MQTT"
  }, {
    "depth": 1,
    "slug": "midi",
    "text": "MIDI"
  }, {
    "depth": 2,
    "slug": "midiininputname",
    "text": "midiin(inputName?)"
  }, {
    "depth": 2,
    "slug": "midioutputnameoptions",
    "text": "midi(outputName?,options?)"
  }, {
    "depth": 3,
    "slug": "midiportoutputname",
    "text": "midiport(outputName)"
  }, {
    "depth": 2,
    "slug": "midichannumber",
    "text": "midichan(number)"
  }, {
    "depth": 2,
    "slug": "midicmdcommand",
    "text": "midicmd(command)"
  }, {
    "depth": 2,
    "slug": "control-ccn--ccv",
    "text": "control, ccn && ccv"
  }, {
    "depth": 2,
    "slug": "midimaps",
    "text": "midimaps"
  }, {
    "depth": 2,
    "slug": "defaultmidimap",
    "text": "defaultmidimap"
  }, {
    "depth": 2,
    "slug": "prognum-program-change",
    "text": "progNum (Program Change)"
  }, {
    "depth": 2,
    "slug": "sysex-sysexid--sysexdata-system-exclusive-message",
    "text": "sysex, sysexid && sysexdata (System Exclusive Message)"
  }, {
    "depth": 2,
    "slug": "midibend--miditouch",
    "text": "midibend && miditouch"
  }, {
    "depth": 1,
    "slug": "oscsuperdirtstrudeldirt",
    "text": "OSC/SuperDirt/StrudelDirt"
  }, {
    "depth": 2,
    "slug": "предварительные-требования",
    "text": "Предварительные требования"
  }, {
    "depth": 2,
    "slug": "использование",
    "text": "Использование"
  }, {
    "depth": 3,
    "slug": "patternosc",
    "text": "Pattern.osc"
  }, {
    "depth": 2,
    "slug": "superdirt-параметры",
    "text": "SuperDirt параметры"
  }, {
    "depth": 1,
    "slug": "mqtt",
    "text": "MQTT"
  }, {
    "depth": 2,
    "slug": "использование-1",
    "text": "Использование"
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
      id: "midi-osc-и-mqtt",
      children: ["MIDI, OSC и MQTT", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#midi-osc-и-mqtt",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Обычно Strudel используется для создания patterns звука, используя свой собственный синтезатор на основе ‘", createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",
        children: "web audio"
      }), "’, называемый ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/superdough",
        children: "SuperDough"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Также возможно создавать patterns других вещей с помощью Strudel, таких как программные и аппаратные синтезаторы с MIDI, другое программное обеспечение с использованием Open Sound Control/OSC (включая синтезатор ", createVNode(_components.a, {
        href: "https://github.com/musikinformatik/SuperDirt/",
        children: "SuperDirt"
      }), ", обычно используемый с родственным Strudel проектом ", createVNode(_components.a, {
        href: "https://tidalcycles.org/",
        children: "TidalCycles"
      }), "), или протокол MQTT для ‘интернета вещей’."]
    }), "\n", createVNode(_components.h1, {
      id: "midi",
      children: ["MIDI", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#midi",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Strudel поддерживает MIDI без какого-либо дополнительного программного обеспечения (благодаря ", createVNode(_components.a, {
        href: "https://npmjs.com/package/webmidi",
        children: "webmidi"
      }), "), просто добавляя методы к вашему pattern:"]
    }), "\n", createVNode(_components.h2, {
      id: "midiininputname",
      children: ["midiin(inputName?)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#midiininputname",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "midin",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "midioutputnameoptions",
      children: ["midi(outputName?,options?)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#midioutputnameoptions",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Либо подключите midi устройство, либо используйте IAC Driver (Mac) или Midi Through Port (Linux) для внутренних midi сообщений.\nЕсли outputName не указан, используется первый найденный midi выход."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `
$: chord("<C^7 A7 Dm7 G7>").voicing().midi('IAC Driver')
`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "В консоли вы увидите лог доступных MIDI устройств, как только запустите код,\nнапример"
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " `Midi connected! Using \"Midi Through Port-0\".`"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Функция ", createVNode(_components.code, {
        children: ".midi()"
      }), " принимает объект опций со следующими свойствами:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `$: note("d e c a f").midi('IAC Driver', { isController: true, midimap: 'default'})
`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Доступные опции"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Опция"
            }), createVNode(_components.th, {
              children: "Тип"
            }), createVNode(_components.th, {
              children: "По умолчанию"
            }), createVNode(_components.th, {
              children: "Описание"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "isController"
            }), createVNode(_components.td, {
              children: "boolean"
            }), createVNode(_components.td, {
              children: "false"
            }), createVNode(_components.td, {
              children: "Когда true, отключает отправку note сообщений. Полезно для MIDI контроллеров"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "latencyMs"
            }), createVNode(_components.td, {
              children: "number"
            }), createVNode(_components.td, {
              children: "34"
            }), createVNode(_components.td, {
              children: "Задержка в миллисекундах для выравнивания MIDI с аудио движком"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "noteOffsetMs"
            }), createVNode(_components.td, {
              children: "number"
            }), createVNode(_components.td, {
              children: "10"
            }), createVNode(_components.td, {
              children: "Смещение в миллисекундах для note-off сообщений для предотвращения глитчей"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "midichannel"
            }), createVNode(_components.td, {
              children: "number"
            }), createVNode(_components.td, {
              children: "1"
            }), createVNode(_components.td, {
              children: "MIDI канал по умолчанию (1-16)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "velocity"
            }), createVNode(_components.td, {
              children: "number"
            }), createVNode(_components.td, {
              children: "0.9"
            }), createVNode(_components.td, {
              children: "Velocity ноты по умолчанию (0-1)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "gain"
            }), createVNode(_components.td, {
              children: "number"
            }), createVNode(_components.td, {
              children: "1"
            }), createVNode(_components.td, {
              children: "Множитель gain по умолчанию для velocity (0-1)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "midimap"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "’default’"
            }), createVNode(_components.td, {
              children: "Имя MIDI mapping для использования control changes"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "midiport"
            }), createVNode(_components.td, {
              children: "string/number"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Имя MIDI устройства или индекс"
            })]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "midiportoutputname",
      children: ["midiport(outputName)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#midiportoutputname",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Выбирает MIDI устройство вывода для использования, pattern может использоваться для переключения между устройствами."
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
            children: "midiport"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'IAC Driver'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
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
            children: "'c a f e'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "midiport"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'<0 1 2 3>'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "midi"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        })]
      })
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "midiport",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "midichannumber",
      children: ["midichan(number)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#midichannumber",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Выбирает MIDI канал для использования. Если не используется, ", createVNode(_components.code, {
        children: ".midi"
      }), " будет использовать канал 1 по умолчанию."]
    }), "\n", createVNode(_components.h2, {
      id: "midicmdcommand",
      children: ["midicmd(command)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#midicmdcommand",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "midicmd"
      }), " отправляет MIDI system real-time сообщения для управления таймингом и транспортом на MIDI устройствах."]
    }), "\n", createVNode(_components.p, {
      children: "Поддерживает следующие команды:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "clock"
        }), "/", createVNode(_components.code, {
          children: "midiClock"
        }), " - Отправляет MIDI тактовые сообщения"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "start"
        }), " - Отправляет MIDI start сообщение"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "stop"
        }), " - Отправляет MIDI stop сообщение"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "continue"
        }), " - Отправляет MIDI continue сообщение"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "// Вы можете управлять тактами с помощью pattern и убедиться, что он запускается синхронно при запуске repl.\n// Примечание: Это может вести себя неожиданно, если MIDI изначально не настроен."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `$:stack(
midicmd("clock*48,<start stop>/2").midi('IAC Driver')
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "control-ccn--ccv",
      children: ["control, ccn && ccv", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#control-ccn--ccv",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "control"
        }), " отправляет MIDI control change сообщения на ваше MIDI устройство."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "ccn"
        }), " устанавливает cc номер. Зависит от midi mapping вашего синтезатора"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "ccv"
        }), " устанавливает cc значение. нормализовано от 0 до 1."]
      }), "\n"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").control([74, sine.slow(4)]).midi()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").ccn(74).ccv(sine.slow(4)).midi()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["В приведенном выше фрагменте ", createVNode(_components.code, {
        children: "ccn"
      }), " установлен в 74, что является фильтром cutoff для многих синтезаторов. ", createVNode(_components.code, {
        children: "ccv"
      }), " управляется saw pattern.\nИмея все в одном pattern, pattern ", createVNode(_components.code, {
        children: "ccv"
      }), " будет выровнен с note pattern, потому что структура идет слева по умолчанию.\nНо вы также можете управлять cc сообщениями отдельно следующим образом:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `$: note("c a f e").midi()
$: ccv(sine.segment(16).slow(4)).ccn(74).midi()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Вместо прямой установки ", createVNode(_components.code, {
        children: "ccn"
      }), " и ", createVNode(_components.code, {
        children: "ccv"
      }), ", вы также можете создавать mappings с помощью ", createVNode(_components.code, {
        children: "midimaps"
      }), ":"]
    }), "\n", createVNode(_components.h2, {
      id: "midimaps",
      children: ["midimaps", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#midimaps",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "midimaps",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "defaultmidimap",
      children: ["defaultmidimap", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#defaultmidimap",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "defaultmidimap",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "prognum-program-change",
      children: ["progNum (Program Change)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#prognum-program-change",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "progNum"
      }), " отправляет MIDI program change сообщения для переключения между различными пресетами/патчами на вашем MIDI устройстве.\nЗначения program change должны быть числами от 0 до 127."]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `// Переключение между программами 0 и 1 каждый cycle
progNum("<0 1>").midi()

// Воспроизведение нот при изменении программ
note("c3 e3 g3").progNum("<0 1 2>").midi()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Сообщения program change полезны для переключения между различными звуками инструментов или пресетами во время выступления.\nТочный звук, на который отображается каждый номер программы, зависит от конфигурации вашего MIDI устройства."
    }), "\n", createVNode(_components.h2, {
      id: "sysex-sysexid--sysexdata-system-exclusive-message",
      children: ["sysex, sysexid && sysexdata (System Exclusive Message)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#sysex-sysexid--sysexdata-system-exclusive-message",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "sysex"
      }), " отправляет MIDI System Exclusive (SysEx) сообщения на ваше MIDI устройство.\nSysEx сообщения - это специфичные для устройства команды, которые позволяют более глубокое управление параметрами синтезатора.\nЗначение должно быть массивом чисел от 0-255, представляющих SysEx байты данных."]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `// Отправка простого SysEx сообщения
let id = 0x43; //Yamaha
//let id = "0x00:0x20:0x32"; //Behringer ID может быть массивом чисел
let data = "0x79:0x09:0x11:0x0A:0x00:0x00"; // Установить голос NSX-39 на "Aa"
$: note("c a f e").sysex(id, data).midi();
$: note("c a f e").sysexid(id).sysexdata(data).midi();`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Точный формат SysEx сообщений зависит от спецификации вашего MIDI устройства.\nОбратитесь к руководству по реализации MIDI вашего устройства для получения подробной информации о поддерживаемых SysEx сообщениях."
    }), "\n", createVNode(_components.h2, {
      id: "midibend--miditouch",
      children: ["midibend && miditouch", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#midibend--miditouch",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "midibend"
      }), " устанавливает MIDI pitch bend (-1 - 1)\n", createVNode(_components.code, {
        children: "miditouch"
      }), " устанавливает MIDI key after touch (0-1)"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").midibend(sine.slow(4).range(-0.4,0.4)).midi()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").miditouch(sine.slow(4).range(0,1)).midi()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "oscsuperdirtstrudeldirt",
      children: ["OSC/SuperDirt/StrudelDirt", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#oscsuperdirtstrudeldirt",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["В TidalCycles звук обычно генерируется с использованием ", createVNode(_components.a, {
        href: "https://github.com/musikinformatik/SuperDirt/",
        children: "SuperDirt"
      }), ", который работает внутри SuperCollider. Strudel также поддерживает использование SuperDirt, хотя это требует установки дополнительного программного обеспечения."]
    }), "\n", createVNode(_components.p, {
      children: ["Также существует ", createVNode(_components.a, {
        href: "https://github.com/daslyfe/StrudelDirt",
        children: "StrudelDirt"
      }), ", который является SuperDirt с некоторыми оптимизациями для работы со Strudel. (Долгосрочная цель - объединить эти оптимизации обратно в основной SuperDirt)"]
    }), "\n", createVNode(_components.h2, {
      id: "предварительные-требования",
      children: ["Предварительные требования", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#предварительные-требования",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Чтобы заставить SuperDirt работать со Strudel, вам нужно"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["установить SuperCollider + sc3 плагины, см. ", createVNode(_components.a, {
          href: "https://tidalcycles.org/docs/",
          children: "Tidal Docs"
        }), " (Install Tidal) для получения дополнительной информации."]
      }), "\n", createVNode(_components.li, {
        children: ["установить SuperDirt, или форк ", createVNode(_components.a, {
          href: "https://github.com/daslyfe/StrudelDirt",
          children: "StrudelDirt"
        }), ", который оптимизирован для использования со Strudel"]
      }), "\n", createVNode(_components.li, {
        children: ["установить ", createVNode(_components.a, {
          href: "https://nodejs.org/en/",
          children: "node.js"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["скачать ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/",
          children: "Strudel Repo"
        }), " (или git clone, если у вас установлен git)"]
      }), "\n", createVNode(_components.li, {
        children: ["запустить ", createVNode(_components.code, {
          children: "pnpm i"
        }), " в директории strudel"]
      }), "\n", createVNode(_components.li, {
        children: ["запустить ", createVNode(_components.code, {
          children: "pnpm run osc"
        }), " для запуска osc сервера, который пересылает OSC сообщения из Strudel REPL в SuperCollider"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Теперь вы готовы!"
    }), "\n", createVNode(_components.h2, {
      id: "использование",
      children: ["Использование", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#использование",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Запустите SuperCollider, используя SuperCollider IDE или запустив ", createVNode(_components.code, {
          children: "sclang"
        }), " в терминале"]
      }), "\n", createVNode(_components.li, {
        children: ["Откройте ", createVNode(_components.a, {
          href: "https://strudel.cc/#cygiYmQgc2QiKS5vc2MoKQ%3D%3D",
          children: "Strudel REPL"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "…или протестируйте это здесь:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `s("bd sd").osc()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Если вы теперь слышите звук, поздравляем! Если нет, вы можете получить помощь в ", createVNode(_components.a, {
        href: "https://discord.com/invite/HGEdXmRkzT",
        children: "#strudel канале в TidalCycles discord"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Примечание: если у вас в настройках ‘Audio Engine Target’ установлен в ‘OSC’, вам не нужно добавлять .osc() в конец вашего pattern."
    }), "\n", createVNode(_components.h3, {
      id: "patternosc",
      children: ["Pattern.osc", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#patternosc",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.osc",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "superdirt-параметры",
      children: ["SuperDirt параметры", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#superdirt-параметры",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Пожалуйста, обратитесь к ", createVNode(_components.a, {
        href: "https://tidalcycles.org/",
        children: "Tidal Docs"
      }), " для получения дополнительной информации."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["Но можем ли мы использовать Strudel ", createVNode(_components.a, {
        href: "/learn/pwa/",
        children: "в оффлайн"
      }), "?"]
    }), "\n", createVNode(_components.h1, {
      id: "mqtt",
      children: ["MQTT", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#mqtt",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["MQTT - это легковесный сетевой протокол, разработанный для устройств ‘интернета вещей’. Для использования со strudel вам понадобится доступ к MQTT серверу, известному как ‘broker’, настроенному для приема безопасных ‘websocket’ соединений. Вы можете запустить его самостоятельно (например, запустив ", createVNode(_components.a, {
        href: "https://mosquitto.org/",
        children: "mosquitto"
      }), "), хотя получение SSL сертификата, которому будет доверять ваш веб-браузер, может быть немного сложным для тех, кто не имеет опыта системного администрирования.\nВ качестве альтернативы вы можете использовать ", createVNode(_components.a, {
        href: "https://www.hivemq.com/mqtt/public-mqtt-broker/",
        children: "публичный broker"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Strudel пока не поддерживает получение сообщений через MQTT, только отправку."
    }), "\n", createVNode(_components.h2, {
      id: "использование-1",
      children: ["Использование", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-output/#использование-1",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Следующий пример показывает, как отправить pattern на MQTT broker:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `"hello world"
  .mqtt(undefined, // имя пользователя (undefined для открытых/публичных серверов)
        undefined, // пароль
        '/strudel-pattern', // mqtt 'topic'
        'wss://mqtt.eclipseprojects.io:443/mqtt', // адрес MQTT сервера
        'mystrudel', // MQTT client id - генерируется случайно, если не указан
        0 // задержка перед отправкой сообщений (0 = без задержки)
       )`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Другое программное обеспечение может затем получать сообщения. Например, используя командную строку клиента ", createVNode(_components.a, {
        href: "https://mosquitto.org/",
        children: "mosquitto"
      }), ":"]
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
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "> mosquitto_sub -h mqtt.eclipseprojects.io -p 1883 -t \"/strudel-pattern\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "> hello"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "> world"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "> hello"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "> world"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "> ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Control patterns будут закодированы как JSON, например:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `sound("sax(3,8)").speed("2 3")
.mqtt(undefined, // имя пользователя (undefined для открытых/публичных серверов)
      undefined, // пароль
      '/strudel-pattern', // mqtt 'topic'
      'wss://mqtt.eclipseprojects.io:443/mqtt', // адрес MQTT сервера
      'mystrudel', // MQTT client id - генерируется случайно, если не указан
      0 // задержка перед отправкой сообщений (0 = без задержки)
     )`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Будут отправлены сообщения вроде следующего:"
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
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "{\"s\":\"sax\",\"speed\":2}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "{\"s\":\"sax\",\"speed\":2}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "{\"s\":\"sax\",\"speed\":3}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "{\"s\":\"sax\",\"speed\":2}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Библиотеки для получения MQTT доступны для многих языков программирования."
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })
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

const url = "/learn/input-output";
const file = "/home/user/Bulka/website/src/pages/learn/input-output.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/input-output.mdx";
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
