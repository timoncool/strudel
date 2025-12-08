/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import '../../chunks/JsDoc_CifKo6nH.mjs';
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
  "title": "Strudel vs Tidal",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "сравнение-strudel-и-tidal",
    "text": "Сравнение Strudel и Tidal"
  }, {
    "depth": 2,
    "slug": "язык",
    "text": "Язык"
  }, {
    "depth": 3,
    "slug": "пример",
    "text": "Пример"
  }, {
    "depth": 3,
    "slug": "операторы",
    "text": "Операторы"
  }, {
    "depth": 2,
    "slug": "совместимость-функций",
    "text": "Совместимость функций"
  }, {
    "depth": 2,
    "slug": "параметры-управления",
    "text": "Параметры управления"
  }, {
    "depth": 2,
    "slug": "звук",
    "text": "Звук"
  }, {
    "depth": 3,
    "slug": "аудиоэффекты",
    "text": "Аудиоэффекты"
  }, {
    "depth": 3,
    "slug": "сэмплер",
    "text": "Сэмплер"
  }, {
    "depth": 2,
    "slug": "выполнение",
    "text": "Выполнение"
  }, {
    "depth": 2,
    "slug": "темп",
    "text": "Темп"
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
      id: "сравнение-strudel-и-tidal",
      children: ["Сравнение Strudel и Tidal", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#сравнение-strudel-и-tidal",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эта страница посвящена существующим пользователям tidal, предоставляя обзор всех различий между Strudel и Tidal."
    }), "\n", createVNode(_components.h2, {
      id: "язык",
      children: ["Язык", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#язык",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Strudel написан на JavaScript, в то время как Tidal написан на Haskell."
    }), "\n", createVNode(_components.h3, {
      id: "пример",
      children: ["Пример", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#пример",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Это различие наиболее очевидно при взгляде на синтаксис:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "haskell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "iter "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " $"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " every "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "||+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " n "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"10 20\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (n "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"0 1 3\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "#"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " s "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"triangle\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " #"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " crush "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Можно было бы выразить этот pattern в Strudel так:"
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
            children: "iter(4, every(3, add.squeeze(\"10 20\"), n(\"0 1 3\").s(\"triangle\").crush(4)))"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Оператор ", createVNode(_components.code, {
          children: "$"
        }), " не существует, поэтому функция ", createVNode(_components.code, {
          children: "iter"
        }), " должна обернуть все в скобки."]
      }), "\n", createVNode(_components.li, {
        children: ["Пользовательские операторы типа ", createVNode(_components.code, {
          children: "||+"
        }), " являются явными вызовами функций, в данном случае ", createVNode(_components.code, {
          children: "add.squeeze"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Оператор ", createVNode(_components.code, {
          children: "#"
        }), " заменен цепочкой вызовов функций ", createVNode(_components.code, {
          children: "# crush 4"
        }), " => ", createVNode(_components.code, {
          children: ".crush(4)"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "В отличие от Haskell, JavaScript не имеет возможности определять пользовательские инфиксные операторы или изменять значение существующих."
    }), "\n", createVNode(_components.p, {
      children: "Прежде чем вы отвергнете Strudel как громоздкое чудовище из скобок, посмотрите на этот альтернативный способ написать вышеприведенное:"
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
            children: "n(\"0 1 3\").every(3, add.squeeze(\"10 20\")).iter(4).s(\"triangle\").crush(4)"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Переупорядочив вызовы, скобки гораздо менее вложены.\nВ качестве общего правила можно сказать, что все, что Tidal делает с ", createVNode(_components.code, {
        children: "$"
      }), ", меняется местами в Strudel:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "iter 4 $ every 3 (||+ n \"10 20\") $ (n \"0 1 3\")"
      })
    }), "\n", createVNode(_components.p, {
      children: "становится"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "n(\"0 1 3\").every(3, add.squeeze(\"10 20\")).iter(4)"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Проще говоря, ", createVNode(_components.code, {
        children: "foo x $ bar x"
      }), " становится ", createVNode(_components.code, {
        children: "bar(x).foo(x)"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "операторы",
      children: ["Операторы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#операторы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://tidalcycles.org/docs/reference/pattern_structure/#all-the-operators",
        children: "Пользовательские операторы tidal"
      }), " являются обычными функциями в strudel:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "функция"
          }), createVNode(_components.th, {
            children: "tidal"
          }), createVNode(_components.th, {
            children: "strudel"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "add"
          }), createVNode(_components.td, {
            children: "|+ n"
          }), createVNode(_components.td, {
            children: ".add(n)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "subtract"
          }), createVNode(_components.td, {
            children: "|- n"
          }), createVNode(_components.td, {
            children: ".sub(n)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "multiply"
          }), createVNode(_components.td, {
            children: "|* n"
          }), createVNode(_components.td, {
            children: ".mul(n)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "divide"
          }), createVNode(_components.td, {
            children: "|/ n"
          }), createVNode(_components.td, {
            children: ".div(n)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "modulo"
          }), createVNode(_components.td, {
            children: "|% n"
          }), createVNode(_components.td, {
            children: ".mod(n)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "left values"
          }), createVNode(_components.td, {
            children: "|< n"
          }), createVNode(_components.td, {
            children: ".set(n)"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Приведенный выше список отображает только операторы, где структура берется из ", createVNode(_components.code, {
        children: "left"
      }), ".\nДля каждого из них также существует вариант ", createVNode(_components.code, {
        children: "right"
      }), " и ", createVNode(_components.code, {
        children: "both"
      }), ".\nПоскольку это направленное мышление работает только с кодом, strudel называет их ", createVNode(_components.code, {
        children: "in"
      }), " / ", createVNode(_components.code, {
        children: "out"
      }), " / ", createVNode(_components.code, {
        children: "mix"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "направление"
          }), createVNode(_components.th, {
            children: "tidal"
          }), createVNode(_components.th, {
            children: "strudel"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "left"
          }), createVNode(_components.td, {
            children: "|+ n"
          }), createVNode(_components.td, {
            children: ".add.in(n)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "right"
          }), createVNode(_components.td, {
            children: "+| n"
          }), createVNode(_components.td, {
            children: ".add.out(n)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "both"
          }), createVNode(_components.td, {
            children: "|+| n"
          }), createVNode(_components.td, {
            children: ".add.mix(n)"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вместо ", createVNode(_components.code, {
        children: "+"
      }), " / ", createVNode(_components.code, {
        children: "add"
      }), ", вы можете использовать любой из доступных операторов из первого списка."]
    }), "\n", createVNode(_components.h2, {
      id: "совместимость-функций",
      children: ["Совместимость функций", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#совместимость-функций",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/issues/31",
        children: "Этот issue"
      }), " отслеживает, какие функции Tidal реализованы в Strudel.\nСписок может быть не на 100% актуальным и, вероятно, также упускает некоторые функции полностью..\nНе стесняйтесь искать функцию, которую вы ищете, в исходном коде.\nЕсли вы найдете функцию, которой нет в списке, пожалуйста, сообщите!"]
    }), "\n", createVNode(_components.h2, {
      id: "параметры-управления",
      children: ["Параметры управления", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#параметры-управления",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Как видно из примера, оператор ", createVNode(_components.code, {
        children: "#"
      }), " (сокращение для ", createVNode(_components.code, {
        children: "|>"
      }), ") также является просто вызовом функции в strudel.\nИтак, ", createVNode(_components.code, {
        children: "note \"c5\" # s \"gtr\""
      }), " становится ", createVNode(_components.code, {
        children: "note(\"c5\").s('gtr')"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/core/controls.mjs",
        children: "Этот файл"
      }), " перечисляет все доступные параметры управления.\nОбратите внимание, что не все из них работают в Webaudio Output в Strudel.\nЕсли вы найдете параметр управления tidal, которого нет в списке, пожалуйста, сообщите!"]
    }), "\n", createVNode(_components.h2, {
      id: "звук",
      children: ["Звук", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#звук",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Tidal обычно используется вместе с Superdirt / Supercollider для генерации звука.\nХотя Strudel также имеет способ ", createVNode(_components.a, {
        href: "/learn/input-output/",
        children: "взаимодействия с Superdirt"
      }), ",\nон стремится предоставить автономную среду live coding, которая полностью работает в браузере."]
    }), "\n", createVNode(_components.h3, {
      id: "аудиоэффекты",
      children: ["Аудиоэффекты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#аудиоэффекты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Многие эффекты SuperDirt были переработаны в Strudel с использованием Web Audio API.\nВы можете найти ", createVNode(_components.a, {
        href: "/learn/effects/",
        children: "список доступных эффектов здесь"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "сэмплер",
      children: ["Сэмплер", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#сэмплер",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Сэмплер Strudel поддерживает ", createVNode(_components.a, {
        href: "/learn/samples/",
        children: "подмножество"
      }), " сэмплера Superdirt.\nКроме того, samples всегда загружаются из URL, а не с диска, хотя ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/issues/118",
        children: "это может быть возможно в будущем"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "выполнение",
      children: ["Выполнение", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#выполнение",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["REPL Strudel еще не поддерживает ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/issues/34",
        children: "блочное выполнение"
      }), ".\nВы можете использовать именованные операторы и ", createVNode(_components.code, {
        children: "_"
      }), " для отключения:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: n("[0 .. 8]*8/9").scale("C:minor:pentatonic")

\_$: s("bd\*4").bank('RolandTR909')`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "темп",
      children: ["Темп", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/strudel-vs-tidal/#темп",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Темп Strudel - 1 cycle в секунду, в то время как tidal по умолчанию использует ", createVNode(_components.code, {
        children: "0.5625"
      }), ".\nВы можете получить тот же темп, что и в tidal, с помощью:"]
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
            children: "note(\"c a f e\").fast(.5625);"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Далее: ", createVNode(_components.a, {
        href: "/technical-manual/repl/",
        children: "REPL"
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

const url = "/learn/strudel-vs-tidal";
const file = "/home/user/Bulka/website/src/pages/learn/strudel-vs-tidal.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/strudel-vs-tidal.mdx";
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
