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
  "title": "JavaScript API",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "функции-pattern",
    "text": "Функции Pattern"
  }, {
    "depth": 2,
    "slug": "ограничения-mini-notation",
    "text": "Ограничения Mini Notation"
  }, {
    "depth": 2,
    "slug": "комбинирование-patterns",
    "text": "Комбинирование Patterns"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "функции-pattern",
      children: ["Функции Pattern", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/intro/#функции-pattern",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Давайте изучим всё о функциях для создания и модификации patterns.\nВ основе Strudel всё состоит из функций."
    }), "\n", createVNode(_components.p, {
      children: "Например, всё, что вы можете сделать с помощью Mini-Notation, также можно сделать с помощью функции.\nЭтот Pattern в Mini Notation:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `note("c3 eb3 g3")`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "эквивалентен этому Pattern без Mini Notation:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `note(seq("c3", "eb3", "g3"))`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Аналогично, есть эквивалентная функция для каждого аспекта mini notation."
    }), "\n", createVNode(_components.p, {
      children: "Какое представление использовать - вопрос контекста. Как правило, функции\nлучше подходят в более широком контексте, в то время как mini notation более практична для отдельных ритмов."
    }), "\n", createVNode(_components.h2, {
      id: "ограничения-mini-notation",
      children: ["Ограничения Mini Notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/intro/#ограничения-mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Хотя Mini Notation - это мощный способ писать ритмы лаконично, у неё также есть ограничения. Возьмём этот пример:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `stack(
note("c2 eb2(3,8)").s('sawtooth').cutoff(800),
s("bd(5,8), hh*8")
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Здесь мы используем mini notation для отдельных ритмов, при этом используя функцию ", createVNode(_components.code, {
        children: "stack"
      }), " для их микширования.\nХотя stack также доступен как ", createVNode(_components.code, {
        children: ","
      }), " в mini notation, мы не можем использовать его здесь, потому что у нас разные типы звуков."]
    }), "\n", createVNode(_components.h2, {
      id: "комбинирование-patterns",
      children: ["Комбинирование Patterns", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/functions/intro/#комбинирование-patterns",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вы можете свободно смешивать JS patterns, mini patterns и значения! Например, этот pattern:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `cat(
stack("g3","b3","e4"),
stack("a3","c3","e4"),
stack("b3","d3","fs4"),
stack("b3","e4","g4")
).note()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "…эквивалентен:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `cat(
"g3,b3,e4",
"a3,c3,e4",
"b3,d3,f#4",
"b3,e4,g4"
).note()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "… а также:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `note("<[g3,b3,e4] [a3,c3,e4] [b3,d3,f#4] [b3,e4,g4]>")`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Хотя mini notation почти всегда короче, у неё есть только несколько модификаторов: * / ! @.\nПри использовании JS patterns можно сделать гораздо больше."
    }), "\n", createVNode(_components.p, {
      children: ["Далее давайте посмотрим, как вы можете ", createVNode(_components.a, {
        href: "/learn/factories/",
        children: "создавать patterns"
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

const url = "/functions/intro";
const file = "/home/user/Bulka/website/src/pages/functions/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/functions/intro.mdx";
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
