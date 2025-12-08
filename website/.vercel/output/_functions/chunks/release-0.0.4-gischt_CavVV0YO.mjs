import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';

const frontmatter = {
  "title": "Release Notes v0.0.4",
  "description": "",
  "date": "2022-08-14",
  "tags": ["meta"],
  "author": "froos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "whats-changed",
    "text": "What’s Changed"
  }, {
    "depth": 2,
    "slug": "new-contributors",
    "text": "New Contributors"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "whats-changed",
      children: ["What’s Changed", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.0.4-gischt/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Webaudio rewrite by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/138",
          children: "https://codeberg.org/uzu/strudel/pulls/138"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix createParam() by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/140",
          children: "https://codeberg.org/uzu/strudel/pulls/140"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Soundfont Support by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/139",
          children: "https://codeberg.org/uzu/strudel/pulls/139"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Serial twiddles by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/141",
          children: "https://codeberg.org/uzu/strudel/pulls/141"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Pianoroll Object Support by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/142",
          children: "https://codeberg.org/uzu/strudel/pulls/142"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["flash effect on ctrl enter by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/144",
          children: "https://codeberg.org/uzu/strudel/pulls/144"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["can now generate short link for sharing by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/146",
          children: "https://codeberg.org/uzu/strudel/pulls/146"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Sampler optimizations and more by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/148",
          children: "https://codeberg.org/uzu/strudel/pulls/148"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Final update to demo.pdf by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/151",
          children: "https://codeberg.org/uzu/strudel/pulls/151"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add webdirt drum samples to prebake for general availability by @larkob in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/150",
          children: "https://codeberg.org/uzu/strudel/pulls/150"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update to tutorial documentation by @larkob in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/162",
          children: "https://codeberg.org/uzu/strudel/pulls/162"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add chooseInWith/chooseCycles by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/166",
          children: "https://codeberg.org/uzu/strudel/pulls/166"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: jsdoc comments by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/169",
          children: "https://codeberg.org/uzu/strudel/pulls/169"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Pianoroll fixes by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/163",
          children: "https://codeberg.org/uzu/strudel/pulls/163"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Talk fixes by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/164",
          children: "https://codeberg.org/uzu/strudel/pulls/164"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Amend shapeshifter to allow use of dynamic import by @debrisapron in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/171",
          children: "https://codeberg.org/uzu/strudel/pulls/171"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add more shapeshifter flags by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/99",
          children: "https://codeberg.org/uzu/strudel/pulls/99"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Replace react-codemirror6 with @uiw/react-codemirror by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/173",
          children: "https://codeberg.org/uzu/strudel/pulls/173"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix some annoying bugs by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/177",
          children: "https://codeberg.org/uzu/strudel/pulls/177"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["incorporate elements of randomness to the mini notation by @bpow in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/165",
          children: "https://codeberg.org/uzu/strudel/pulls/165"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["replace mocha with vitest by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/175",
          children: "https://codeberg.org/uzu/strudel/pulls/175"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["scheduler improvements by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/181",
          children: "https://codeberg.org/uzu/strudel/pulls/181"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix codemirror bug by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/186",
          children: "https://codeberg.org/uzu/strudel/pulls/186"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["wait for prebake to finish before evaluating by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/189",
          children: "https://codeberg.org/uzu/strudel/pulls/189"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix regression: old way of setting frequencies was broken by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/190",
          children: "https://codeberg.org/uzu/strudel/pulls/190"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Soundfont file support by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/183",
          children: "https://codeberg.org/uzu/strudel/pulls/183"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["change “stride”/“offset” of successive degradeBy/chooseIn by @bpow in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/185",
          children: "https://codeberg.org/uzu/strudel/pulls/185"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.0.4-gischt/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@larkob made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/150",
          children: "https://codeberg.org/uzu/strudel/pulls/150"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@debrisapron made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/171",
          children: "https://codeberg.org/uzu/strudel/pulls/171"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@bpow made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/165",
          children: "https://codeberg.org/uzu/strudel/pulls/165"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.0.3...v0.0.4",
        children: "https://codeberg.org/uzu/strudel/compare/v0.0.3…v0.0.4"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/release-0.0.4-gischt.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.0.4-gischt.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.0.4-gischt.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
