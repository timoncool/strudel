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
  "title": "Тональные функции",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "тональные-функции",
    "text": "Тональные функции"
  }, {
    "depth": 3,
    "slug": "voicing",
    "text": "voicing()"
  }, {
    "depth": 3,
    "slug": "scalename",
    "text": "scale(name)"
  }, {
    "depth": 3,
    "slug": "transposesemitones",
    "text": "transpose(semitones)"
  }, {
    "depth": 3,
    "slug": "scaletransposesteps",
    "text": "scaleTranspose(steps)"
  }, {
    "depth": 3,
    "slug": "rootnotesoctave--2",
    "text": "rootNotes(octave = 2)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "тональные-функции",
      children: ["Тональные функции", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/tonal/#тональные-функции",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Эти функции используют ", createVNode(_components.a, {
        href: "https://github.com/tonaljs/tonal",
        children: "tonaljs"
      }), " для предоставления помощников для музыкальных операций."]
    }), "\n", createVNode(_components.h3, {
      id: "voicing",
      children: ["voicing()", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/tonal/#voicing",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "voicing",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вот пример того, как можно играть аккорды и басовую линию:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `chord("<C^7 A7b13 Dm7 G7>*2")
.dict('ireal').layer(
x=>x.struct("[~ x]*2").voicing()
,
x=>n("0*4").set(x).mode("root:g2").voicing()
.s('sawtooth').cutoff("800:4:2")
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "scalename",
      children: ["scale(name)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/tonal/#scalename",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "scale",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "transposesemitones",
      children: ["transpose(semitones)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/tonal/#transposesemitones",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Транспонирует все ноты на заданное количество полутонов:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `"[c2 c3]*4".transpose("<0 -2 5 3>").note()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Этот метод становится действительно интересным, когда мы используем его с pattern, как показано выше."
    }), "\n", createVNode(_components.p, {
      children: "Вместо чисел можно использовать научную нотацию интервалов:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `"[c2 c3]*4".transpose("<1P -2M 4P 3m>").note()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "scaletransposesteps",
      children: ["scaleTranspose(steps)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/tonal/#scaletransposesteps",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Транспонирует ноты внутри гаммы на количество шагов:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"[-8 [2,4,6]]*2"
.scale('C4 bebop major')
.scaleTranspose("<0 -1 -2 -3 -4 -5 -6 -4>*2")
.note()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "rootnotesoctave--2",
      children: ["rootNotes(octave = 2)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/tonal/#rootnotesoctave--2",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Превращает символы аккордов в основные ноты аккордов в заданной октаве."
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `"<C^7 A7b13 Dm7 G7>*2".rootNotes(3).note()`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вместе с layer, struct и voicings это может быть использовано для создания базового аккомпанемента:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"<C^7 A7b13 Dm7 G7>*2".layer(
x => x.voicings('lefthand').struct("[~ x]*2").note(),
x => x.rootNotes(2).note().s('sawtooth').cutoff(800)
)`,
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

const url = "/learn/tonal";
const file = "/home/user/Bulka/website/src/pages/learn/tonal.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/tonal.mdx";
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
