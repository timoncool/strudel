/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import '../../chunks/MiniRepl_Ntj7iAxy.mjs';
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
  "title": "REPL",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "repl",
    "text": "REPL"
  }, {
    "depth": 2,
    "slug": "пользовательский-код",
    "text": "Пользовательский код"
  }, {
    "depth": 3,
    "slug": "транспиляция-и-оценка",
    "text": "Транспиляция и оценка"
  }, {
    "depth": 3,
    "slug": "mini-notation",
    "text": "Mini-notation"
  }, {
    "depth": 3,
    "slug": "подсветка-расположений",
    "text": "Подсветка расположений"
  }, {
    "depth": 3,
    "slug": "mini-notation-1",
    "text": "Mini Notation"
  }, {
    "depth": 2,
    "slug": "vim-горячие-клавиши",
    "text": "Vim горячие клавиши"
  }, {
    "depth": 2,
    "slug": "планирование-событий",
    "text": "Планирование событий"
  }, {
    "depth": 2,
    "slug": "выход",
    "text": "Выход"
  }, {
    "depth": 3,
    "slug": "контрольные-параметры",
    "text": "Контрольные параметры"
  }, {
    "depth": 3,
    "slug": "выходы",
    "text": "Выходы"
  }, {
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
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
    section: "section",
    span: "span",
    sup: "sup",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "repl",
      children: ["REPL", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#repl",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", "\n", createVNode(_components.p, {
      children: ["Хотя Strudel можно использовать как библиотеку в любой кодовой базе JavaScript, его основным справочным пользовательским интерфейсом является Strudel REPL", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "/technical-manual/repl/#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ", который является браузерной средой live coding. Этот редактор live code предназначен для манипулирования Strudel patterns во время их воспроизведения. REPL имеет встроенную визуальную обратную связь, подсвечивая, какие элементы в pattern (mini-notation) последовательностях влияют на событие, которое в данный момент воспроизводится. Эта обратная связь разработана для поддержки как обучения, так и живого использования Strudel."]
    }), "\n", createVNode(_components.p, {
      children: "Помимо UI для управления воспроизведением и мета-информации, основной частью интерфейса REPL является редактор кода на базе CodeMirror. В нем пользователь может редактировать и оценивать код pattern вживую, используя один из доступных выходов синтеза для создания музыки и/или звукового искусства. Поток управления REPL следует 3 основным шагам:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Пользователь пишет и обновляет код. Каждое обновление транспилирует и оценивает его для создания экземпляра ", createVNode(_components.code, {
          children: "Pattern"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Пока REPL работает, ", createVNode(_components.code, {
          children: "Scheduler"
        }), " запрашивает активный ", createVNode(_components.code, {
          children: "Pattern"
        }), " с регулярным интервалом, генерируя ", createVNode(_components.code, {
          children: "Events"
        }), " (также известные как ", createVNode(_components.code, {
          children: "Haps"
        }), " в Strudel) для следующего временного диапазона."]
      }), "\n", createVNode(_components.li, {
        children: ["Для каждого тика планирования все сгенерированные ", createVNode(_components.code, {
          children: "Events"
        }), " запускаются путем вызова их метода ", createVNode(_components.code, {
          children: "onTrigger"
        }), ", который устанавливается выходом."]
      }), "\n"]
    }), "\n", createVNode("img", {
      src: "https://codeberg.org/uzu/strudel/raw/branch/talk/talk/public/strudelflow.png",
      width: "600"
    }), "\n", createVNode(_components.h2, {
      id: "пользовательский-код",
      children: ["Пользовательский код", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#пользовательский-код",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы создать ", createVNode(_components.code, {
        children: "Pattern"
      }), " из пользовательского кода, необходимы два шага:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Транспилировать входной JS код, чтобы сделать его функциональным"
      }), "\n", createVNode(_components.li, {
        children: "Оценить транспилированный код"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "транспиляция-и-оценка",
      children: ["Транспиляция и оценка", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#транспиляция-и-оценка",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["В мире JavaScript использование транспиляции является обычной практикой, чтобы иметь возможность использовать языковые функции, которые не поддерживаются базовым языком. Такие инструменты, как ", createVNode(_components.code, {
        children: "babel"
      }), ", будут транспилировать код, содержащий неподдерживаемые языковые функции, в версию кода без этих функций."]
    }), "\n", createVNode(_components.p, {
      children: "В той же традиции Strudel может добавить шаг транспиляции для упрощения пользовательского кода в контексте live coding. Например, Strudel REPL позволяет пользователю создавать mini-notation patterns, используя только строки в двойных кавычках, в то время как строки в одинарных кавычках остаются тем, чем они являются:"
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
            children: "note(\"c3 [e3 g3]*2\")"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "транспилируется в:"
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
            children: "note(m('c3 [e3 g3]', 5))"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Здесь строка обернута в ", createVNode(_components.code, {
        children: "m"
      }), ", который создаст pattern из строки mini-notation. В качестве второго параметра передается расположение исходного кода строки, что позволяет подсвечивать активные события позже."]
    }), "\n", createVNode(_components.p, {
      children: ["После транспиляции код готов к оценке в ", createVNode(_components.code, {
        children: "Pattern"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["За кулисами строка пользовательского кода парсится с помощью ", createVNode(_components.code, {
        children: "acorn"
      }), ", превращаясь в абстрактное синтаксическое дерево (AST). AST позволяет изменять структуру кода перед генерацией транспилированной версии с помощью ", createVNode(_components.code, {
        children: "escodegen"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "mini-notation",
      children: ["Mini-notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Хотя транспиляция позволяет JavaScript выражать Patterns менее многословным способом, все же предпочтительнее использовать mini-notation как более компактный способ выражения ритма. Strudel стремится предоставить те же функции и синтаксис mini-notation, что и в Tidal."
    }), "\n", createVNode(_components.p, {
      children: ["Парсер mini-notation реализован с помощью ", createVNode(_components.code, {
        children: "peggy"
      }), ", который позволяет генерировать производительные парсеры для доменных языков (DSL) с использованием краткой грамматической нотации. Сгенерированный парсер превращает строку mini-notation в AST, который используется для вызова соответствующих функций Strudel с заданной структурой. Например, ", createVNode(_components.code, {
        children: "\"c3 [e3 g3]*2\""
      }), " приведет к следующим вызовам:"]
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
            children: "seq("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  reify('c3').withLoc(6, 9),"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  seq(reify('e3').withLoc(10, 12), reify('g3',).withLoc(13, 15))"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "подсветка-расположений",
      children: ["Подсветка расположений", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#подсветка-расположений",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Как видно в примерах выше, как транспилятор, так и парсер mini-notation добавляет расположение исходного кода, используя ", createVNode(_components.code, {
        children: "withLoc"
      }), ".\nЭто расположение вычисляется внутри функции ", createVNode(_components.code, {
        children: "m"
      }), " как сумма 2 расположений:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "расположение, где начинается строка mini notation, полученное из JS парсера"
      }), "\n", createVNode(_components.li, {
        children: "расположение подстроки внутри mini notation, полученное из парсера mini notation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Сумма обоих передается в ", createVNode(_components.code, {
        children: "withLoc"
      }), ", чтобы сообщить каждому элементу его расположение, которое может быть позже использовано для подсветки, когда он активен."]
    }), "\n", createVNode(_components.h3, {
      id: "mini-notation-1",
      children: ["Mini Notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#mini-notation-1",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Другая важная часть пользовательского кода - это mini notation, которая позволяет выражать ритмы кратким образом."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["mini notation ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/talk/packages/mini/krill.pegjs",
          children: "реализована как PEG грамматика"
        }), ", находящаяся в ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/mini",
          children: "mini package"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["она основана на ", createVNode(_components.a, {
          href: "https://github.com/Mdashdotdashn/krill",
          children: "krill"
        }), " от Mdashdotdashn"]
      }), "\n", createVNode(_components.li, {
        children: ["peg грамматика используется для генерации парсера с помощью ", createVNode(_components.a, {
          href: "https://peggyjs.org/",
          children: "peggyjs"
        })]
      }), "\n", createVNode(_components.li, {
        children: "сгенерированный парсер берет строку mini notation и выдает AST"
      }), "\n", createVNode(_components.li, {
        children: "AST затем может быть использовано для построения pattern с использованием обычного Strudel API"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Вот пример AST для ", createVNode(_components.code, {
        children: "c3 [e3 g3]"
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"type_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"pattern\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"arguments_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"alignment\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"h\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"source_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"type_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"element\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"source_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"c3\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"location_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"start\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"offset\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"line\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"column\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"end\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"offset\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"line\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"column\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } }"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"type_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"element\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"location_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"start\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"offset\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"line\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"column\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"end\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"offset\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "11"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"line\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"column\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "12"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } }"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "      \"source_\""
          }), createVNode(_components.span, {
            style: {
              color: "#FDAEB7",
              fontStyle: "italic"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"type_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"pattern\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"arguments_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"alignment\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"h\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"source_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "            \"type_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"element\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"source_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"e3\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "            \"location_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"start\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"offset\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"line\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"column\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "6"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"end\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"offset\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "8"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"line\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"column\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "9"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } }"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "            \"type_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"element\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"source_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"g3\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "            \"location_\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"start\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"offset\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "8"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"line\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"column\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "9"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"end\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"offset\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"line\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"column\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "11"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } }"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["который переводится в ", createVNode(_components.code, {
        children: "seq(c3, seq(e3, g3))"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "vim-горячие-клавиши",
      children: ["Vim горячие клавиши", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#vim-горячие-клавиши",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["См. отдельную страницу о горячих клавишах Vim для быстрого справочника: ", createVNode(_components.a, {
        href: "/technical-manual/vim/",
        children: "/technical-manual/vim"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "планирование-событий",
      children: ["Планирование событий", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#планирование-событий",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["После получения экземпляра ", createVNode(_components.code, {
        children: "Pattern"
      }), " из пользовательского кода, он используется планировщиком для запроса событий. После запуска планировщик выполняется с фиксированным интервалом для запроса активного pattern на предмет событий в пределах временного диапазона текущего интервала. Упрощенная реализация выглядит так:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: " pattern "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " seq"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'c3'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'e3'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'g3'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// pattern от пользователя"
          })]
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
            children: " interval "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// интервал запроса в секундах"
          })]
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
            children: " time "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// начало текущего временного диапазона"
          })]
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
            children: " minLatency "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// минимальное время до того, как hap должен сработать"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setInterval"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " haps"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pattern."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "queryArc"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(time, time "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " interval);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  time "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " interval; "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// увеличить время"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  haps."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "forEach"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "hap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " deadline"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " hap.whole.begin "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " time "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " minLatency;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    onTrigger"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(hap, deadline, duration);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}, interval "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// запрос каждые \"interval\" секунд"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что приведенный выше код упрощен в иллюстративных целях. Фактическая реализация должна обходить неточные обратные вызовы ", createVNode(_components.code, {
        children: "setInterval"
      }), ". Подробнее о деталях реализации можно прочитать в ", createVNode(_components.a, {
        href: "https://loophole-letters.vercel.app/web-audio-scheduling",
        children: "этом блог-посте"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Тот факт, что ", createVNode(_components.code, {
        children: "Pattern.queryArc"
      }), " является чистой функцией, которая отображает временной диапазон на набор событий, позволяет нам выбрать любой интервал, который нам нравится, без изменения результирующего вывода. Это также означает, что когда pattern изменяется извне, следующий обратный вызов планирования будет работать с новым pattern, сохраняя его часы запущенными."]
    }), "\n", createVNode(_components.p, {
      children: ["Задержка между временем оценки pattern и временем, когда изменение слышно, составляет от ", createVNode(_components.code, {
        children: "minLatency"
      }), " до ", createVNode(_components.code, {
        children: "interval + minLatency"
      }), ", в нашем примере от 100 мс до 600 мс. В Strudel текущий интервал запроса составляет 50 мс с minLatency 100 мс, что означает, что задержка составляет от 50 мс до 150 мс."]
    }), "\n", createVNode(_components.h2, {
      id: "выход",
      children: ["Выход", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#выход",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Последний шаг - запустить каждое событие в выбранном выходе.\nЗдесь заданное время и значение каждого события используются для генерации аудио или любой другой формы временного вывода. Выходом по умолчанию Strudel REPL является вывод WebAudio. Чтобы понять, что делает выход, мы сначала должны понять, что такое контрольные параметры."
    }), "\n", createVNode(_components.h3, {
      id: "контрольные-параметры",
      children: ["Контрольные параметры", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#контрольные-параметры",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Чтобы иметь возможность манипулировать несколькими аспектами звука параллельно, так называемые контрольные параметры используются для формирования значения каждого события. Пример:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: "'c3 e3'"
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
            children: "cutoff"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1000"
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
            children: "'sawtooth'"
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
            children: "queryArc"
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
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "hap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " hap.value);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/* ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  { note: 'c3', cutoff: 1000, s: 'sawtooth' }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  { note: 'e3', cutoff: 1000, s: 'sawtooth' }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "] */"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Здесь используются функции контрольных параметров ", createVNode(_components.code, {
        children: "note"
      }), ", ", createVNode(_components.code, {
        children: "cutoff"
      }), " и ", createVNode(_components.code, {
        children: "s"
      }), ", где каждая контролирует другое свойство в объекте значения. Каждая функция контрольного параметра принимает примитивное значение, список значений для секвенирования в ", createVNode(_components.code, {
        children: "Pattern"
      }), " или ", createVNode(_components.code, {
        children: "Pattern"
      }), ". В примере ", createVNode(_components.code, {
        children: "note"
      }), " получает ", createVNode(_components.code, {
        children: "Pattern"
      }), " из выражения mini-notation (в двойных кавычках), в то время как ", createVNode(_components.code, {
        children: "cutoff"
      }), " и ", createVNode(_components.code, {
        children: "s"
      }), " получают ", createVNode(_components.code, {
        children: "Number"
      }), " и (в одинарных кавычках) ", createVNode(_components.code, {
        children: "String"
      }), " соответственно."]
    }), "\n", createVNode(_components.p, {
      children: "Strudel поставляется с большим набором функций контрольных параметров по умолчанию, которые основаны на используемых в Tidal и SuperDirt, фокусируясь на музыкальной и аудио терминологии. Однако можно создавать пользовательские контрольные параметры для любых целей:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " createParams"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'x'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'y'"
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
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(sine."
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
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(cosine."
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
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Этот пример создает пользовательские контрольные параметры ", createVNode(_components.code, {
        children: "x"
      }), " и ", createVNode(_components.code, {
        children: "y"
      }), ", которые затем используются для формирования pattern, описывающего координаты круга."]
    }), "\n", createVNode(_components.h3, {
      id: "выходы",
      children: ["Выходы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/repl/#выходы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Теперь, когда мы знаем, как значение события манипулируется с помощью контрольных параметров, мы можем посмотреть, как выходы могут использовать это значение для генерации чего угодно. Планировщик выше вызывал функцию ", createVNode(_components.code, {
        children: "onTrigger"
      }), ", которая используется для реализации вывода. Очень простая версия вывода web audio может выглядеть так:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " onTrigger"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "hap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "deadline"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "duration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "note"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " hap.value;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " time"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getAudioContext"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "().currentTime "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " deadline;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " o"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getAudioContext"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "createOscillator"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  o.frequency.value "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getFreq"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(note);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  o."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "start"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(time);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  o."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "stop"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(time "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " event.duration);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  o."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "connect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getAudioContext"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "().destination);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Приведенный выше пример создаст ", createVNode(_components.code, {
        children: "OscillatorNode"
      }), " для каждого события, где частота контролируется параметром ", createVNode(_components.code, {
        children: "note"
      }), ". По сути, так работает вывод WebAudio API в Strudel, только с гораздо большим количеством параметров для управления синтезаторами, сэмплами и эффектами."]
    }), "\n", createVNode(_components.p, {
      children: ["Я хочу помочь, как мне внести вклад в ", createVNode(_components.a, {
        href: "/technical-manual/docs/",
        children: "документацию"
      }), "?"]
    }), "\n", createVNode(_components.section, {
      "data-footnotes": "",
      class: "footnotes",
      children: [createVNode(_components.h2, {
        class: "sr-only",
        id: "footnote-label",
        children: ["Footnotes", createVNode(_components.a, {
          "aria-hidden": "true",
          tabindex: "-1",
          href: "/technical-manual/repl/#footnote-label",
          children: createVNode(_components.span, {
            class: "icon icon-link"
          })
        })]
      }), "\n", createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", createVNode(_components.p, {
            children: ["REPL расшифровывается как read, evaluate, print/play, loop (читать, оценивать, печатать/воспроизводить, цикл). Это дружественный жаргон для интерактивного программного интерфейса из наследия вычислений, обычно для интерфейса командной строки, но также применяется к редакторам live coding. ", createVNode(_components.a, {
              href: "/technical-manual/repl/#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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

const url = "/technical-manual/repl";
const file = "/home/user/Bulka/website/src/pages/technical-manual/repl.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/technical-manual/repl.mdx";
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
