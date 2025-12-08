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
  "title": "Mondo Notation",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "mondo-notation",
    "text": "Mondo Notation"
  }, {
    "depth": 2,
    "slug": "mondo-в-repl",
    "text": "Mondo в REPL"
  }, {
    "depth": 2,
    "slug": "вызов-функций",
    "text": "Вызов функций"
  }, {
    "depth": 2,
    "slug": "возможности-mini-notation",
    "text": "Возможности Mini Notation"
  }, {
    "depth": 3,
    "slug": "скобки",
    "text": "Скобки"
  }, {
    "depth": 3,
    "slug": "инфиксные-операторы",
    "text": "Инфиксные операторы"
  }, {
    "depth": 3,
    "slug": "пример",
    "text": "Пример"
  }, {
    "depth": 2,
    "slug": "цепочка-функций",
    "text": "Цепочка функций"
  }, {
    "depth": 3,
    "slug": "локальная-цепочка-функций",
    "text": "Локальная цепочка функций"
  }, {
    "depth": 3,
    "slug": "цепочка-инфиксных-операторов",
    "text": "Цепочка инфиксных операторов"
  }, {
    "depth": 3,
    "slug": "lambda-функции",
    "text": "Lambda функции"
  }, {
    "depth": 2,
    "slug": "строки",
    "text": "Строки"
  }, {
    "depth": 2,
    "slug": "несколько-patterns",
    "text": "Несколько Patterns"
  }, {
    "depth": 2,
    "slug": "переменные",
    "text": "переменные"
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
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "mondo-notation",
      children: ["Mondo Notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#mondo-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["“Mondo Notation” - это новый вид нотации, похожий на ", createVNode(_components.a, {
        href: "/learn/mini-notation/",
        children: "Mini Notation"
      }), ", но с достаточными возможностями, чтобы работать как самостоятельный язык patterns.\nВот пример:"]
    }), "\n", createVNode(MiniRepl, {
      mondo: true,
      "client:idle": true,
      tune: `$ note (c2 # euclid <3 6 3> <8 16>) # *2
# s "sine" # add (note [0 <12 24>]*2)
# dec(sine # range .2 2)
# room .5
# lpf (sine/3 # range 120 400)
# lpenv (rand # range .5 4)
# lpq (perlin # range 5 12 # * 2)
# dist 1 # fm 4 # fmh 5.01 # fmdecay <.1 .2>
# postgain .6 # delay .1 # clip 5

$ s [bd bd bd bd] # bank tr909 # clip .5

# ply <1 [1 [2 4]]>

$ s oh\*4 # press # bank tr909 # speed.8

# dec (<.02 .05>\*2 # add (saw/8 # range 0 1))

`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "mondo-в-repl",
      children: ["Mondo в REPL", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#mondo-в-repl",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Пока что вы можете использовать mondo в repl только так:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: 'mondo`s hh*8`',
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Остальная часть этого сайта будет использовать только саму mondo нотацию.\nВ будущем REPL может получить способ использовать mondo нотацию напрямую."
    }), "\n", createVNode(_components.h2, {
      id: "вызов-функций",
      children: ["Вызов функций", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#вызов-функций",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "По сравнению с Mini Notation, наиболее заметной особенностью Mondo Notation является возможность вызывать функции с помощью круглых скобок:"
    }), "\n", createVNode(MiniRepl, {
      mondo: true,
      "client:idle": true,
      tune: `(s hh*8)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Первый элемент внутри скобок - это имя функции. В JS это выглядело бы так:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("hh*8")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Внешние скобки не нужны, поэтому мы можем их опустить:"
    }), "\n", createVNode(MiniRepl, {
      mondo: true,
      "client:idle": true,
      tune: `s hh*8`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "возможности-mini-notation",
      children: ["Возможности Mini Notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#возможности-mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Помимо вызова функций с круглыми скобками, Mondo Notation имеет много общего с Mini Notation:"
    }), "\n", createVNode(_components.h3, {
      id: "скобки",
      children: ["Скобки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#скобки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "[]"
        }), " для 1-cycle последовательностей"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "<>"
        }), " для multi-cycle последовательностей"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "{}"
        }), " для ступенчатых последовательностей (подробнее об этом позже)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "инфиксные-операторы",
      children: ["Инфиксные операторы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#инфиксные-операторы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["* => ", createVNode(_components.a, {
          href: "/learn/time-modifiers/#fast",
          children: "fast"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["/ => ", createVNode(_components.a, {
          href: "/learn/time-modifiers/#slow",
          children: "slow"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["! => ", createVNode(_components.a, {
          href: "/learn/stepwise/#extend",
          children: "extend"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@ => ", createVNode(_components.a, {
          href: "/learn/stepwise/#expand",
          children: "expand"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["% => ", createVNode(_components.a, {
          href: "/learn/stepwise/#pace",
          children: "pace"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["? => ", createVNode(_components.a, {
          href: "/learn/random-modifiers/#degradeby",
          children: "degradeBy"
        }), " (в настоящее время требует правого операнда)"]
      }), "\n", createVNode(_components.li, {
        children: ": => tail (создает список)"
      }), "\n", createVNode(_components.li, {
        children: ".. => range (между числами)"
      }), "\n", createVNode(_components.li, {
        children: [", => ", createVNode(_components.a, {
          href: "/learn/factories/#stack",
          children: "stack"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["| => ", createVNode(_components.a, {
          href: "/learn/random-modifiers/#choose",
          children: "chooseIn"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "пример",
      children: ["Пример", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#пример",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(MiniRepl, {
      mondo: true,
      "client:idle": true,
      tune: `note <
[e5 [b4 c5] d5 [c5 b4]]
[a4 [a4 c5] e5 [d5 c5]]
[b4 [~ c5] d5 e5]
[c5 a4 a4 ~]
[[~ d5] [~ f5] a5 [g5 f5]]
[e5 [~ c5] e5 [d5 c5]]
[b4 [b4 c5] d5 e5]
[c5 a4 a4 ~]
>`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "цепочка-функций",
      children: ["Цепочка функций", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#цепочка-функций",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Подобно тому, как работает ”.” в javascript (JS), мы можем связывать вызовы функций с оператором ”#”:"
    }), "\n", createVNode(MiniRepl, {
      mondo: true,
      "client:idle": true,
      tune: `n <0 2 4 [3 1] -1>*4
# scale C4:minor
# jux rev
# dec .2
# delay .5`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вот то же самое, написанное на JS:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `n("<0 2 4 [3 1] -1>*4")
.scale("C4:minor")
.jux(rev)
.dec(.2)
.delay(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "локальная-цепочка-функций",
      children: ["Локальная цепочка функций", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#локальная-цепочка-функций",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Функцию можно применить к одному элементу, обернув его в круглые скобки:"
    }), "\n", createVNode(MiniRepl, {
      mondo: true,
      "client:idle": true,
      tune: `s [bd hh bd (cp # delay .6)] # bank tr909`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["в этом случае ", createVNode(_components.code, {
        children: "delay .6"
      }), " будет применен только к ", createVNode(_components.code, {
        children: "cp"
      }), ". сравните это с версией JS:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s(seq("bd", "hh", "bd", "cp".delay(.6))).bank('tr909')`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "здесь мы видим, сколько мы можем сэкономить, когда нет границы между mini notation и вызовами функций!"
    }), "\n", createVNode(_components.h3, {
      id: "цепочка-инфиксных-операторов",
      children: ["Цепочка инфиксных операторов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#цепочка-инфиксных-операторов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Инфиксные операторы существуют как обычные функции, поэтому их также можно связывать:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      mondo: true,
      tune: `s [bd hh] # bank tr909 # *2`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "В этом случае *2 будет применен ко всему pattern."
    }), "\n", createVNode(_components.h3, {
      id: "lambda-функции",
      children: ["Lambda функции", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#lambda-функции",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Некоторые функции в strudel ожидают функцию в качестве входных данных, например:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `n("0 .. 7").scale("C:minor").sometimes(x=>x.dec(.1))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["в mondo ", createVNode(_components.code, {
        children: "x=>x."
      }), " можно сократить до:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      mondo: true,
      tune: `n 0..7 # scale C:minor # sometimes (# dec .1)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "цепочка работает как ожидается:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      mondo: true,
      tune: `n 0..7 # scale C:minor # sometimes (# dec .1 # jux rev)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "строки",
      children: ["Строки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#строки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вы можете использовать “двойные кавычки” и ‘одинарные кавычки’, чтобы получить строку:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      mondo: true,
      tune: `n 0..7 # scale 'C minor'`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "несколько-patterns",
      children: ["Несколько Patterns", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#несколько-patterns",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Знак ", createVNode(_components.code, {
        children: "$"
      }), " может использоваться для разделения нескольких patterns:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      mondo: true,
      tune: `$ s [bd rim [~ bd] rim] # bank tr707
$ chord <Dm9!3 Db7> # voicing
# struct[x ~ ~ x ~ x ~ ~] # delay .5`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Знак ", createVNode(_components.code, {
        children: "$"
      }), " является псевдонимом для ", createVNode(_components.code, {
        children: ","
      }), ", поэтому он создаст stack за кулисами."]
    }), "\n", createVNode(_components.h2, {
      id: "переменные",
      children: ["переменные", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mondo-notation/#переменные",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["используя ключевое слово ", createVNode(_components.code, {
        children: "def"
      }), ", вы можете определять переменные:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      mondo: true,
      tune: `
$ def melody [0 1 2 3]
$ n melody # scale C:minor
`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
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

const url = "/learn/mondo-notation";
const file = "/home/user/Bulka/website/src/pages/learn/mondo-notation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/mondo-notation.mdx";
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
