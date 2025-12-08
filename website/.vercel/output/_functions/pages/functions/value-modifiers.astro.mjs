/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import '../../chunks/MiniRepl_Ntj7iAxy.mjs';
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
  "title": "Параметры управления",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "параметры-управления",
    "text": "Параметры управления"
  }, {
    "depth": 1,
    "slug": "функции-параметров",
    "text": "Функции параметров"
  }, {
    "depth": 2,
    "slug": "обычные-vs-параметризованные-значения",
    "text": "Обычные vs параметризованные значения"
  }, {
    "depth": 2,
    "slug": "обёртывание-функций-параметров",
    "text": "Обёртывание функций параметров"
  }, {
    "depth": 2,
    "slug": "модификация-обычных-значений",
    "text": "Модификация обычных значений"
  }, {
    "depth": 2,
    "slug": "модификация-значений-параметров",
    "text": "Модификация значений параметров"
  }, {
    "depth": 1,
    "slug": "операторы",
    "text": "Операторы"
  }, {
    "depth": 2,
    "slug": "add",
    "text": "add"
  }, {
    "depth": 2,
    "slug": "sub",
    "text": "sub"
  }, {
    "depth": 2,
    "slug": "mul",
    "text": "mul"
  }, {
    "depth": 2,
    "slug": "div",
    "text": "div"
  }, {
    "depth": 2,
    "slug": "round",
    "text": "round"
  }, {
    "depth": 2,
    "slug": "floor",
    "text": "floor"
  }, {
    "depth": 2,
    "slug": "ceil",
    "text": "ceil"
  }, {
    "depth": 2,
    "slug": "range",
    "text": "range"
  }, {
    "depth": 2,
    "slug": "rangex",
    "text": "rangex"
  }, {
    "depth": 2,
    "slug": "range2",
    "text": "range2"
  }, {
    "depth": 2,
    "slug": "ratio",
    "text": "ratio"
  }, {
    "depth": 2,
    "slug": "as",
    "text": "as"
  }, {
    "depth": 1,
    "slug": "пользовательские-параметры",
    "text": "Пользовательские параметры"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "параметры-управления",
      children: ["Параметры управления", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#параметры-управления",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Помимо функций, которые контролируют время, мы видели ранее, что функции вроде ", createVNode(_components.code, {
        children: "note"
      }), " и ", createVNode(_components.code, {
        children: "cutoff"
      }), " контролируют различные параметры (короткие params) события.\nТеперь давайте более внимательно посмотрим, как работают эти ", createVNode(_components.code, {
        children: "функции param(eter)"
      }), "."]
    }), "\n", createVNode(_components.h1, {
      id: "функции-параметров",
      children: ["Функции параметров", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#функции-параметров",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Очень мощная особенность tidal patterns - это то, что каждый параметр может контролироваться независимо:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `note("c a f e")
.cutoff("<500 1000 2000 [4000 8000]>")
.gain(.8)
.s('sawtooth')
.log()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["В этом примере параметры ", createVNode(_components.code, {
        children: "note"
      }), ", ", createVNode(_components.code, {
        children: "cutoff"
      }), ", ", createVNode(_components.code, {
        children: "gain"
      }), " и ", createVNode(_components.code, {
        children: "s"
      }), " контролируются независимо либо patterns, либо обычными значениями (числами / текстом).\nПосле нажатия play мы можем наблюдать время и значения параметров каждого события (hap) в выводе, созданном ", createVNode(_components.code, {
        children: ".log()"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "обычные-vs-параметризованные-значения",
      children: ["Обычные vs параметризованные значения", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#обычные-vs-параметризованные-значения",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Patterns, которые не обёрнуты в функцию param, будут содержать немаркированные ", createVNode(_components.code, {
        children: "обычные значения"
      }), ":"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `"<c e g>".log()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это не создаст звукового вывода, потому что Strudel мог бы только догадываться, какой param имеется в виду этими буквами."
    }), "\n", createVNode(_components.p, {
      children: ["Теперь сравните это с версией, обёрнутой в ", createVNode(_components.code, {
        children: "note"
      }), ":"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `note("<c e g>").log()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Теперь ясно, что эти буквы предназначены для воспроизведения как ноты.\nПод капотом функция ", createVNode(_components.code, {
        children: "note"
      }), " (как и все другие функции param)\nобернёт каждое обычное значение в объект. Если бы функции note не существовало, нам пришлось бы писать:"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `cat({note:'c'},{note:'e'},{note:'g'}).log()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это будет иметь тот же вывод, хотя это довольно неудобно читать и писать."
    }), "\n", createVNode(_components.h2, {
      id: "обёртывание-функций-параметров",
      children: ["Обёртывание функций параметров", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#обёртывание-функций-параметров",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Чтобы избежать слишком большой вложенности, функции param также можно связывать в цепочку вот так:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `cat('c', 'e', 'g').note().log()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Это эквивалентно ", createVNode(_components.code, {
        children: "note(cat('c','e','g')).log()"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете использовать это с любой функцией, которая объявляет тип (как ", createVNode(_components.code, {
        children: "n"
      }), ", ", createVNode(_components.code, {
        children: "s"
      }), ", ", createVNode(_components.code, {
        children: "note"
      }), ", ", createVNode(_components.code, {
        children: "freq"
      }), " и т.д.), просто убедитесь, что оставляете скобки пустыми!"]
    }), "\n", createVNode(_components.h2, {
      id: "модификация-обычных-значений",
      children: ["Модификация обычных значений", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#модификация-обычных-значений",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Patterns обычных значений могут быть изменены с помощью любого из следующих операторов:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `"50 60 70".add("<0 1 2>").log()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Здесь функция add изменяет числа слева.\nСнова нет вывода, потому что эти числа не имеют смысла без param."
    }), "\n", createVNode(_components.h2, {
      id: "модификация-значений-параметров",
      children: ["Модификация значений параметров", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#модификация-значений-параметров",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Чтобы изменить значение параметра, вы можете либо:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Использовать оператор на pattern обычных значений внутри функции param:"
        }), "\n", createVNode("astro-client-only", {
          "client:only": "react",
          tune: `note("50 60 70".add("<0 1 2>")).room(.1).log()`,
          "client:display-name": "MiniRepl",
          "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
          "client:component-export": "MiniRepl",
          "client:component-hydration": true
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Аналогично, использовать оператор на pattern обычных значений и обернуть его позже:"
        }), "\n", createVNode("astro-client-only", {
          "client:only": "react",
          tune: `"50 60 70".add("<0 1 2>").note().room(.1).log()`,
          "client:display-name": "MiniRepl",
          "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
          "client:component-export": "MiniRepl",
          "client:component-hydration": true
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Указать, какой param должен быть изменён внутри функции оператора:"
        }), "\n", createVNode("astro-client-only", {
          "client:only": "react",
          tune: `note("50 60 70").room(.1).add(note("<0 1 2>")).log()`,
          "client:display-name": "MiniRepl",
          "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
          "client:component-export": "MiniRepl",
          "client:component-hydration": true
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Помните, что выполнение связанных функций идёт слева направо."
    }), "\n", createVNode(_components.h1, {
      id: "операторы",
      children: ["Операторы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#операторы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эта группа функций позволяет изменять значение событий."
    }), "\n", createVNode(_components.h2, {
      id: "add",
      children: ["add", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#add",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.add",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "sub",
      children: ["sub", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#sub",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.sub",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "mul",
      children: ["mul", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#mul",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.mul",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "div",
      children: ["div", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#div",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.div",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "round",
      children: ["round", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#round",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.round",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "floor",
      children: ["floor", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#floor",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.floor",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "ceil",
      children: ["ceil", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#ceil",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.ceil",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "range",
      children: ["range", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#range",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.range",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "rangex",
      children: ["rangex", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#rangex",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.rangex",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "range2",
      children: ["range2", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#range2",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.range2",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "ratio",
      children: ["ratio", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#ratio",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.ratio",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "as",
      children: ["as", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#as",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "as",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "пользовательские-параметры",
      children: ["Пользовательские параметры", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/value-modifiers/#пользовательские-параметры",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вы также можете создавать свои собственные параметры:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `let x = createParam('x')
x(sine.range(0, 200))
`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Несколько params также можно создать более лаконичным способом, используя ", createVNode(_components.code, {
        children: "createParams"
      }), ":"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `let { x, y } = createParams('x', 'y');
x(sine.range(0, 200)).y(cosine.range(0, 200));
`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Обратите внимание, что эти params ничего не будут делать, пока вы не придадите им смысл в вашем пользовательском выводе!"
    }), "\n", createVNode(_components.p, {
      children: ["От модификации параметров мы переходим к концепции ", createVNode(_components.a, {
        href: "/learn/signals/",
        children: "Signals"
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

const url = "/functions/value-modifiers";
const file = "/home/user/Bulka/website/src/pages/functions/value-modifiers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/functions/value-modifiers.mdx";
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
