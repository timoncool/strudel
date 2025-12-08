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
  "title": "Условные модификаторы",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "условные-модификаторы",
    "text": "Условные модификаторы"
  }, {
    "depth": 2,
    "slug": "lastof",
    "text": "lastOf"
  }, {
    "depth": 2,
    "slug": "firstof",
    "text": "firstOf"
  }, {
    "depth": 2,
    "slug": "when",
    "text": "when"
  }, {
    "depth": 2,
    "slug": "chunk",
    "text": "chunk"
  }, {
    "depth": 3,
    "slug": "chunkback",
    "text": "chunkBack"
  }, {
    "depth": 3,
    "slug": "fastchunk",
    "text": "fastChunk"
  }, {
    "depth": 2,
    "slug": "arp",
    "text": "arp"
  }, {
    "depth": 2,
    "slug": "arpwith-",
    "text": "arpWith 🧪"
  }, {
    "depth": 2,
    "slug": "struct",
    "text": "struct"
  }, {
    "depth": 2,
    "slug": "mask",
    "text": "mask"
  }, {
    "depth": 2,
    "slug": "reset",
    "text": "reset"
  }, {
    "depth": 2,
    "slug": "restart",
    "text": "restart"
  }, {
    "depth": 2,
    "slug": "hush",
    "text": "hush"
  }, {
    "depth": 2,
    "slug": "invert",
    "text": "invert"
  }, {
    "depth": 2,
    "slug": "pick",
    "text": "pick"
  }, {
    "depth": 2,
    "slug": "pickmod",
    "text": "pickmod"
  }, {
    "depth": 2,
    "slug": "pickf",
    "text": "pickF"
  }, {
    "depth": 2,
    "slug": "pickmodf",
    "text": "pickmodF"
  }, {
    "depth": 2,
    "slug": "pickrestart",
    "text": "pickRestart"
  }, {
    "depth": 2,
    "slug": "pickmodrestart",
    "text": "pickmodRestart"
  }, {
    "depth": 2,
    "slug": "pickreset",
    "text": "pickReset"
  }, {
    "depth": 2,
    "slug": "pickmodreset",
    "text": "pickmodReset"
  }, {
    "depth": 2,
    "slug": "inhabit",
    "text": "inhabit"
  }, {
    "depth": 2,
    "slug": "inhabitmod",
    "text": "inhabitmod"
  }, {
    "depth": 2,
    "slug": "squeeze",
    "text": "squeeze"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "условные-модификаторы",
      children: ["Условные модификаторы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#условные-модификаторы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "lastof",
      children: ["lastOf", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#lastof",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.lastOf",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "firstof",
      children: ["firstOf", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#firstof",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.firstOf",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "when",
      children: ["when", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#when",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.when",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "chunk",
      children: ["chunk", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#chunk",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.chunk",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "chunkback",
      children: ["chunkBack", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#chunkback",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.chunkBack",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "fastchunk",
      children: ["fastChunk", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#fastchunk",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.fastChunk",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "arp",
      children: ["arp", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#arp",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "arp",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "arpwith-",
      children: ["arpWith 🧪", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#arpwith-",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "arpWith",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "struct",
      children: ["struct", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#struct",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#struct",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "mask",
      children: ["mask", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#mask",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#mask",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "reset",
      children: ["reset", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#reset",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#reset",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "restart",
      children: ["restart", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#restart",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#restart",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "hush",
      children: ["hush", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#hush",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#hush",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "invert",
      children: ["invert", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#invert",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "invert",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pick",
      children: ["pick", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#pick",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pick",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pickmod",
      children: ["pickmod", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#pickmod",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pickmod",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pickf",
      children: ["pickF", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#pickf",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pickF",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pickmodf",
      children: ["pickmodF", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#pickmodf",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pickmodF",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pickrestart",
      children: ["pickRestart", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#pickrestart",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pickRestart",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pickmodrestart",
      children: ["pickmodRestart", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#pickmodrestart",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pickmodRestart",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pickreset",
      children: ["pickReset", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#pickreset",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pickReset",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pickmodreset",
      children: ["pickmodReset", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#pickmodreset",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pickmodReset",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "inhabit",
      children: ["inhabit", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#inhabit",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "inhabit",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "inhabitmod",
      children: ["inhabitmod", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#inhabitmod",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "inhabitmod",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "squeeze",
      children: ["squeeze", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/conditional-modifiers/#squeeze",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "squeeze",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["После условных модификаторов давайте посмотрим, что могут предложить ", createVNode(_components.a, {
        href: "/learn/accumulation/",
        children: "Модификаторы накопления"
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

const url = "/learn/conditional-modifiers";
const file = "/home/user/Bulka/website/src/pages/learn/conditional-modifiers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/conditional-modifiers.mdx";
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
