import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';

const frontmatter = {
  "title": "Release Notes v0.0.2",
  "description": "",
  "date": "2022-03-28",
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
    code: "code",
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
        href: "//home/user/Bulka/website/src/content/blog/release-0.0.2-schwindlig/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Most work done as ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/commit/2a0d8c3f77ff7b34e82602e2d02400707f367316",
          children: "commits to main"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["repl + reify functions by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/2",
          children: "https://codeberg.org/uzu/strudel/pulls/2"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix path by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/3",
          children: "https://codeberg.org/uzu/strudel/pulls/3"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update readme for local dev by @kindohm in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/4",
          children: "https://codeberg.org/uzu/strudel/pulls/4"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Patternify all the things by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/5",
          children: "https://codeberg.org/uzu/strudel/pulls/5"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["krill parser + improved repl by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/6",
          children: "https://codeberg.org/uzu/strudel/pulls/6"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fixed editor crash by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/7",
          children: "https://codeberg.org/uzu/strudel/pulls/7"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["timeCat by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/8",
          children: "https://codeberg.org/uzu/strudel/pulls/8"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Bugfix every, and create more top level functions by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/9",
          children: "https://codeberg.org/uzu/strudel/pulls/9"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Failing test for ", createVNode(_components.code, {
          children: "when"
        }), " WIP by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/10",
          children: "https://codeberg.org/uzu/strudel/pulls/10"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Added mask() and struct() by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/11",
          children: "https://codeberg.org/uzu/strudel/pulls/11"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add continuous signals (sine, cosine, saw, etc) by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/13",
          children: "https://codeberg.org/uzu/strudel/pulls/13"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add apply and layer, and missing div/mul methods by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/15",
          children: "https://codeberg.org/uzu/strudel/pulls/15"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["higher latencyHint by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/16",
          children: "https://codeberg.org/uzu/strudel/pulls/16"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["test: 📦 Add missing dependency and a CI check, to prevent oversights ;p by @puria in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/17",
          children: "https://codeberg.org/uzu/strudel/pulls/17"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: 💄 Enhance visualisation of the Tutorial on mobile by @puria in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/19",
          children: "https://codeberg.org/uzu/strudel/pulls/19"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Stateful queries and events (WIP) by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/14",
          children: "https://codeberg.org/uzu/strudel/pulls/14"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix resolveState by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/22",
          children: "https://codeberg.org/uzu/strudel/pulls/22"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["added _asNumber + interpret numbers as midi by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/21",
          children: "https://codeberg.org/uzu/strudel/pulls/21"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update package.json by @ChiakiUehira in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/23",
          children: "https://codeberg.org/uzu/strudel/pulls/23"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["packaging by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/24",
          children: "https://codeberg.org/uzu/strudel/pulls/24"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.0.2-schwindlig/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@felixroos made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/2",
          children: "https://codeberg.org/uzu/strudel/pulls/2"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@kindohm made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/4",
          children: "https://codeberg.org/uzu/strudel/pulls/4"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@puria made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/17",
          children: "https://codeberg.org/uzu/strudel/pulls/17"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@ChiakiUehira made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/23",
          children: "https://codeberg.org/uzu/strudel/pulls/23"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/commit/2a0d8c3f77ff7b34e82602e2d02400707f367316",
        children: "https://codeberg.org/uzu/strudel/commit/2a0d8c3f77ff7b34e82602e2d02400707f367316"
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

const url = "src/content/blog/release-0.0.2-schwindlig.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.0.2-schwindlig.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.0.2-schwindlig.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
