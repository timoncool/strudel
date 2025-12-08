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
  "title": "Использование Strudel в вашем проекте",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "использование-strudel-в-вашем-проекте",
    "text": "Использование Strudel в вашем проекте"
  }, {
    "depth": 2,
    "slug": "соблюдайте-лицензию",
    "text": "Соблюдайте лицензию"
  }, {
    "depth": 2,
    "slug": "встраивание-strudel-repl",
    "text": "Встраивание Strudel REPL"
  }, {
    "depth": 3,
    "slug": "внутри-iframe",
    "text": "Внутри iframe"
  }, {
    "depth": 3,
    "slug": "strudelembed",
    "text": "@strudel/embed"
  }, {
    "depth": 3,
    "slug": "strudelrepl",
    "text": "@strudel/repl"
  }, {
    "depth": 2,
    "slug": "с-вашим-собственным-ui",
    "text": "С вашим собственным UI"
  }, {
    "depth": 2,
    "slug": "через-npm",
    "text": "Через npm"
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
      id: "использование-strudel-в-вашем-проекте",
      children: ["Использование Strudel в вашем проекте", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/project-start/#использование-strudel-в-вашем-проекте",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Это руководство показывает различные способы начать использовать Strudel в вашем собственном проекте."
    }), "\n", createVNode(_components.h2, {
      id: "соблюдайте-лицензию",
      children: ["Соблюдайте лицензию", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/project-start/#соблюдайте-лицензию",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Во-первых, пожалуйста, уделите время, чтобы понять свободную/открытую лицензию Strudel,\n", createVNode(_components.a, {
        href: "https://www.gnu.org/licenses/agpl-3.0.en.html",
        children: "AGPL-3.0"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Вот краткое изложение, но проверьте лицензию на юридические определения и обязанности."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Вы можете распространять измененные версии, если отслеживаете изменения и дату их внесения."
      }), "\n", createVNode(_components.li, {
        children: "Вы должны лицензировать производную работу под той же лицензией."
      }), "\n", createVNode(_components.li, {
        children: "Исходный код должен распространяться вместе с веб-публикацией."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Среди прочего, это означает, что когда вы делитесь своей работой, все приложение должно быть распространено под той же свободной/открытой лицензией или совместимой с ней. Это потому, что мы хотим, чтобы Strudel оставался свободным/открытым. Другими словами, вам не разрешается распространять интеграции Strudel с библиотеками или другим кодом, который не имеет совместимой свободной/открытой лицензии."
    }), "\n", createVNode(_components.p, {
      children: ["Это также применяется к клонам, созданным на основе чтения исходного кода Strudel, поскольку с юридической точки зрения это считается ‘производной работой’. Опять же, пожалуйста, ", createVNode(_components.a, {
        href: "https://www.gnu.org/licenses/agpl-3.0.en.html",
        children: "прочитайте лицензию"
      }), " для деталей."]
    }), "\n", createVNode(_components.h2, {
      id: "встраивание-strudel-repl",
      children: ["Встраивание Strudel REPL", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/project-start/#встраивание-strudel-repl",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Есть 3 быстрых способа встроить strudel на ваш веб-сайт:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Встроить веб-сайт strudel как iframe напрямую"
      }), "\n", createVNode(_components.li, {
        children: ["Встроить веб-сайт strudel как iframe, используя ", createVNode(_components.code, {
          children: "@strudel/embed"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Встроить REPL напрямую, используя ", createVNode(_components.code, {
          children: "@strudel/repl"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "внутри-iframe",
      children: ["Внутри iframe", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/project-start/#внутри-iframe",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Использование iframe - самый простой способ встроить мелодию strudel.\nВы можете встроить любой pattern на ваш выбор через iframe и URL pattern на ваш выбор:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
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
              color: "#85E89D"
            },
            children: "iframe"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://strudel.cc/?xwWRfuCE8TAR\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " width"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"600\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " height"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"300\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "iframe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["URL можно получить, нажав ", createVNode(_components.code, {
        children: "share"
      }), " в REPL.\nОбратите внимание, что эти ссылки для обмена зависят от базы данных, которая не гарантированно будет существовать вечно.\nЧтобы убедиться, что ваш код не потерян, вы также можете использовать длинный URL:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "iframe"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://strudel.cc/#c2V0Y3BzKDEpCm4oIjwwIDEgMiAzIDQ%2BKjgiKS5zY2FsZSgnRzQgbWlub3InKQoucygiZ21fbGVhZF82X3ZvaWNlIikKLmNsaXAoc2luZS5yYW5nZSguMiwuOCkuc2xvdyg4KSkKLmp1eChyZXYpCi5yb29tKDIpCi5zb21ldGltZXMoYWRkKG5vdGUoIjEyIikpKQoubHBmKHBlcmxpbi5yYW5nZSgyMDAsMjAwMDApLnNsb3coNCkp\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  width"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"600\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  height"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"300\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "iframe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Этот длинный URL можно просто скопировать из адресной строки, когда вы находитесь на веб-сайте strudel. Он всегда отражает последнее выполнение вашего кода."
    }), "\n", createVNode(_components.h3, {
      id: "strudelembed",
      children: ["@strudel/embed", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/project-start/#strudelembed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы упростить процесс встраивания через iframe, вы можете использовать package ", createVNode(_components.code, {
        children: "@strudel/embed"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://unpkg.com/@strudel/embed@latest\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "strudel-repl"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  <!--"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "setcps(1)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "n(\"<0 1 2 3 4>*8\").scale('G4 minor')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".s(\"gm_lead_6_voice\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".clip(sine.range(.2,.8).slow(8))"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".jux(rev)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".room(2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".sometimes(add(note(\"12\")))"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".lpf(perlin.range(200,20000).slow(4))"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "strudel-repl"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Это загрузит веб-сайт strudel в iframe, используя код, предоставленный в HTML-комментариях ", createVNode(_components.code, {
        children: "<!-- -->"
      }), ".\nHTML-комментарии необходимы, чтобы браузер не интерпретировал его как HTML."]
    }), "\n", createVNode(_components.p, {
      children: ["Для альтернативных способов загрузки этого package см. ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/embed#strudel-embed",
        children: "@strudel/embed README"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "strudelrepl",
      children: ["@strudel/repl", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/project-start/#strudelrepl",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Загрузка strudel напрямую на ваш сайт, без iframe, выглядит похоже на вариант с iframe:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://unpkg.com/@strudel/repl@latest\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "strudel-editor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  <!--"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "setcps(1)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "n(\"<0 1 2 3 4>*8\").scale('G4 minor')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".s(\"gm_lead_6_voice\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".clip(sine.range(.2,.8).slow(8))"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".jux(rev)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".room(2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".sometimes(add(note(\"12\")))"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: ".lpf(perlin.range(200,20000).slow(4))"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "strudel-editor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Здесь мы загружаем ", createVNode(_components.code, {
        children: "@strudel/repl"
      }), " вместо ", createVNode(_components.code, {
        children: "@strudel/embed"
      }), ", и компонент называется ", createVNode(_components.code, {
        children: "strudel-editor"
      }), " вместо ", createVNode(_components.code, {
        children: "strudel-repl"
      }), ".\nДа, именование немного запутанное.."]
    }), "\n", createVNode(_components.p, {
      children: "Преимущество использования repl без iframe заключается в том, что вы можете закрепить используемую версию strudel:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://unpkg.com/@strudel/repl@1.0.2\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "strudel-editor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  <!--"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "strudel-editor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Это гарантирует, что ваш pattern не сломается из-за изменений в проекте strudel в будущем."
    }), "\n", createVNode(_components.p, {
      children: ["Для получения дополнительной информации об этом package см. ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/repl#strudel-repl",
        children: "@strudel/repl README"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "с-вашим-собственным-ui",
      children: ["С вашим собственным UI", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/project-start/#с-вашим-собственным-ui",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Приведенный выше подход предполагает, что вы хотите использовать встроенный редактор ", createVNode(_components.a, {
        href: "https://codemirror.net/",
        children: "codemirror"
      }), ".\nЕсли вы предпочитаете использовать свой собственный UI, вы можете использовать package ", createVNode(_components.code, {
        children: "@strudel/web"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<!"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "doctype"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " html"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://unpkg.com/@strudel/web@1.0.3\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"play\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">play</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"stop\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">stop</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  initStrudel"
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
            children: "  document."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getElementById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'play'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'click'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " note"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'<c a f e>(3,8)'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "jux"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(rev)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "play"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  document."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getElementById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'stop'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'click'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " hush"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Для получения дополнительной информации об этом package см. ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/web#strudel-web",
        children: "@strudel/web README"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "через-npm",
      children: ["Через npm", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/project-start/#через-npm",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.npmjs.com/search?q=%40strudel",
        children: "Все packages и многие другие доступны на npm под namespace @strudel"
      }), ".\nНа самом деле есть гораздо больше packages, которые вы можете использовать, чтобы иметь детальный контроль над тем, что вы используете, а что нет.\nЧтобы использовать эти packages, вы должны использовать bundler, который поддерживает es modules, например ", createVNode(_components.a, {
        href: "https://vitejs.dev/",
        children: "vite"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы узнать больше о назначении каждого package, см. ", createVNode(_components.a, {
        href: "/technical-manual/packages/",
        children: "Packages"
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

const url = "/technical-manual/project-start";
const file = "/home/user/Bulka/website/src/pages/technical-manual/project-start.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/technical-manual/project-start.mdx";
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
