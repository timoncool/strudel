/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
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
  "title": "Документация",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "документация",
    "text": "Документация"
  }, {
    "depth": 2,
    "slug": "добавление-новой-страницы-документации",
    "text": "Добавление новой страницы документации"
  }, {
    "depth": 2,
    "slug": "использование-mini-repl",
    "text": "Использование Mini REPL"
  }, {
    "depth": 2,
    "slug": "внутренняя-документация",
    "text": "Внутренняя документация"
  }, {
    "depth": 3,
    "slug": "написание-jsdoc",
    "text": "Написание jsdoc"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "документация",
      children: ["Документация", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/docs/#документация",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Страница документации построена на основе ", createVNode(_components.a, {
        href: "https://github.com/withastro/astro/tree/main/examples/docs",
        children: "сайта документации astro"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "добавление-новой-страницы-документации",
      children: ["Добавление новой страницы документации", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/docs/#добавление-новой-страницы-документации",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["добавьте ", createVNode(_components.code, {
          children: ".mdx"
        }), " файл в путь под ", createVNode(_components.code, {
          children: "website/src/pages/"
        }), ", например ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/website/src/pages/learn/code.mdx",
          children: "website/src/pages/learn/code.mdx"
        }), " будет доступен по адресу ", createVNode(_components.a, {
          href: "https://strudel.cc/learn/code/",
          children: "https://strudel.cc/learn/code/"
        }), " (или локально по адресу ", createVNode(_components.code, {
          children: "http://localhost:4321/learn/code/"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: "убедитесь, что скопировали верхнюю часть другой существующей страницы документации. Настройте заголовок соответственно"
      }), "\n", createVNode(_components.li, {
        children: ["Чтобы добавить ссылку на боковую панель, добавьте новую запись в ", createVNode(_components.code, {
          children: "SIDEBAR"
        }), " в ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/website/src/config.ts",
          children: createVNode(_components.code, {
            children: "config.ts"
          })
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "использование-mini-repl",
      children: ["Использование Mini REPL", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/docs/#использование-mini-repl",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Чтобы добавить Mini REPL, убедитесь, что импортировали:"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { MiniRepl } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '../../docs/MiniRepl'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "добавьте mini repl с помощью"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "MiniRepl"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " client"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "idle"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " tune"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`note(\"a3 c#4 e4 a4\")`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "} />"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "client:idle"
        }), " требуется, чтобы сообщить astro, что repl должен быть интерактивным, см. ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/reference/directives-reference/#client-directives",
          children: "Client Directive"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "tune"
        }), ": любой валидный код pattern"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "punchcard"
        }), ": если добавлено, отображается визуализация punchcard / pianoroll"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "drawTime"
        }), ": временное окно для отрисовки, по умолчанию ", createVNode(_components.code, {
          children: "[0, 4]"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "canvasHeight"
        }), ": высота canvas, по умолчанию 100px"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["См. ", createVNode(_components.code, {
        children: "mini-notation.mdx"
      }), " для примеров использования"]
    }), "\n", createVNode(_components.h2, {
      id: "внутренняя-документация",
      children: ["Внутренняя документация", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/docs/#внутренняя-документация",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете добавить внутреннюю документацию для функции, используя компонент ", createVNode(_components.code, {
        children: "JsDoc"
      }), ". Импорт:"]
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { JsDoc } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '../../docs/JsDoc'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Использование:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "JsDoc"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " client"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "idle"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bandf\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " h"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "} />"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "name"
        }), ": имя функции, как названо с помощью ", createVNode(_components.code, {
          children: "@name"
        }), " в jsdoc"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "h"
        }), ": уровень заголовка. ", createVNode(_components.code, {
          children: "0"
        }), " скроет заголовок. Скрытие позволяет использовать ручной заголовок, что приводит к генерации навигационной ссылки в правой боковой панели."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "hideDescription"
        }), ": если установлено, описание будет скрыто"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "написание-jsdoc",
      children: ["Написание jsdoc", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/docs/#написание-jsdoc",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Документация написана с помощью комментариев ", createVNode(_components.a, {
        href: "https://jsdoc.app/",
        children: "jsdoc"
      }), ". Пример:"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * Select a sound / sample by name."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " *"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@name"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " s"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@param"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " {string | Pattern}"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " sound"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " The sound / pattern of sounds to pick"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@example"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " * s(\"bd hh\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " *"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// implementation of s function"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Перед каждой сборкой эти комментарии будут отрендерены в ", createVNode(_components.code, {
          children: "doc.json"
        }), " с использованием ", createVNode(_components.a, {
          href: "https://www.npmjs.com/package/jsdoc-json",
          children: "jsdoc-json"
        }), " в качестве шаблона"]
      }), "\n", createVNode(_components.li, {
        children: ["Чтобы вручную перегенерировать файл ", createVNode(_components.code, {
          children: "doc.json"
        }), ", выполните ", createVNode(_components.code, {
          children: "npm run jsdoc-json"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Файл используется компонентом ", createVNode(_components.code, {
          children: "JsDoc"
        }), " для поиска документации по имени"]
      }), "\n", createVNode(_components.li, {
        children: ["Также он используется для snapshot теста ", createVNode(_components.code, {
          children: "examples.test.mjs"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Как Strudel выполняет ", createVNode(_components.a, {
        href: "/technical-manual/testing/",
        children: "тестирование"
      }), "?"]
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

const url = "/technical-manual/docs";
const file = "/home/user/Bulka/website/src/pages/technical-manual/docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/technical-manual/docs.mdx";
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
