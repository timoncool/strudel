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
  "title": "Сигналы",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "непрерывные-сигналы",
    "text": "Непрерывные сигналы"
  }, {
    "depth": 2,
    "slug": "saw",
    "text": "saw"
  }, {
    "depth": 2,
    "slug": "sine",
    "text": "sine"
  }, {
    "depth": 2,
    "slug": "cosine",
    "text": "cosine"
  }, {
    "depth": 2,
    "slug": "tri",
    "text": "tri"
  }, {
    "depth": 2,
    "slug": "square",
    "text": "square"
  }, {
    "depth": 2,
    "slug": "rand",
    "text": "rand"
  }, {
    "depth": 2,
    "slug": "диапазоны-от--1-до-1",
    "text": "Диапазоны от -1 до 1"
  }, {
    "depth": 2,
    "slug": "perlin",
    "text": "perlin"
  }, {
    "depth": 2,
    "slug": "irand",
    "text": "irand"
  }, {
    "depth": 2,
    "slug": "brand",
    "text": "brand"
  }, {
    "depth": 2,
    "slug": "brandby",
    "text": "brandBy"
  }, {
    "depth": 2,
    "slug": "mousex",
    "text": "mouseX"
  }, {
    "depth": 2,
    "slug": "mousey",
    "text": "mouseY"
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
      id: "непрерывные-сигналы",
      children: ["Непрерывные сигналы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#непрерывные-сигналы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Сигналы - это patterns с непрерывными значениями, что означает, что они имеют теоретически бесконечное количество шагов.\nОни могут предоставлять потоки чисел, которые можно сэмплировать в дискретные моменты времени."
    }), "\n", createVNode(_components.h2, {
      id: "saw",
      children: ["saw", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#saw",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "saw",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "sine",
      children: ["sine", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#sine",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "sine",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "cosine",
      children: ["cosine", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#cosine",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "cosine",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "tri",
      children: ["tri", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#tri",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "tri",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "square",
      children: ["square", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#square",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "square",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "rand",
      children: ["rand", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#rand",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "rand",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "диапазоны-от--1-до-1",
      children: ["Диапазоны от -1 до 1", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#диапазоны-от--1-до-1",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Также существуют ", createVNode(_components.code, {
        children: "saw2"
      }), ", ", createVNode(_components.code, {
        children: "sine2"
      }), ", ", createVNode(_components.code, {
        children: "cosine2"
      }), ", ", createVNode(_components.code, {
        children: "tri2"
      }), ", ", createVNode(_components.code, {
        children: "square2"
      }), " и ", createVNode(_components.code, {
        children: "rand2"
      }), ", которые имеют диапазон от -1 до 1!"]
    }), "\n", createVNode(_components.h2, {
      id: "perlin",
      children: ["perlin", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#perlin",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "perlin",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "irand",
      children: ["irand", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#irand",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "irand",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "brand",
      children: ["brand", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#brand",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "brand",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "brandby",
      children: ["brandBy", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#brandby",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "brandBy",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "mousex",
      children: ["mouseX", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#mousex",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "mousex",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "mousey",
      children: ["mouseY", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/signals/#mousey",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "mousey",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Далее: ", createVNode(_components.a, {
        href: "/learn/random-modifiers/",
        children: "Random Modifiers"
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

const url = "/learn/signals";
const file = "/home/user/Bulka/website/src/pages/learn/signals.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/signals.mdx";
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
