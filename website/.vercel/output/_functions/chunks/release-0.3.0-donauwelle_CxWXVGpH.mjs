import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';

const frontmatter = {
  "title": "Release Notes v0.3.0",
  "description": "",
  "date": "2022-11-06",
  "tags": ["meta"],
  "author": "froos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "package-versions",
    "text": "Package Versions"
  }, {
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
      id: "package-versions",
      children: ["Package Versions", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.3.0-donauwelle/#package-versions",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "@strudel.cycles/core@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/eval@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/midi@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/mini@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/react@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/soundfonts@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/tonal@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/tone@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/webaudio@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/webdirt@0.3.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/xen@0.3.1"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "whats-changed",
      children: ["What’s Changed", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.3.0-donauwelle/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Fix numbers in sampler by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/196",
          children: "https://codeberg.org/uzu/strudel/pulls/196"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["document random functions by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/199",
          children: "https://codeberg.org/uzu/strudel/pulls/199"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add rollup-plugin-visualizer to build by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/200",
          children: "https://codeberg.org/uzu/strudel/pulls/200"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add vowel to .out by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/201",
          children: "https://codeberg.org/uzu/strudel/pulls/201"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Coarse crush shape by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/205",
          children: "https://codeberg.org/uzu/strudel/pulls/205"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Webaudio guide by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/207",
          children: "https://codeberg.org/uzu/strudel/pulls/207"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Even more docs by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/212",
          children: "https://codeberg.org/uzu/strudel/pulls/212"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Just another docs PR by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/215",
          children: "https://codeberg.org/uzu/strudel/pulls/215"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["sampler features + fixes by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/217",
          children: "https://codeberg.org/uzu/strudel/pulls/217"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["samples now have envelopes by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/218",
          children: "https://codeberg.org/uzu/strudel/pulls/218"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["encapsulate webaudio output by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/219",
          children: "https://codeberg.org/uzu/strudel/pulls/219"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix squeeze join by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/220",
          children: "https://codeberg.org/uzu/strudel/pulls/220"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Feedback Delay by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/213",
          children: "https://codeberg.org/uzu/strudel/pulls/213"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["support negative speeds by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/222",
          children: "https://codeberg.org/uzu/strudel/pulls/222"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["focus tweak for squeezeJoin - another go at fixing #216 by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/221",
          children: "https://codeberg.org/uzu/strudel/pulls/221"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Reverb by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/224",
          children: "https://codeberg.org/uzu/strudel/pulls/224"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix fastgap for events that go across cycle boundaries by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/225",
          children: "https://codeberg.org/uzu/strudel/pulls/225"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Core util tests by @mystery-house in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/226",
          children: "https://codeberg.org/uzu/strudel/pulls/226"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Refactor tunes away from tone by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/230",
          children: "https://codeberg.org/uzu/strudel/pulls/230"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Just another docs branch by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/228",
          children: "https://codeberg.org/uzu/strudel/pulls/228"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Patternify range by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/231",
          children: "https://codeberg.org/uzu/strudel/pulls/231"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Out by default by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/232",
          children: "https://codeberg.org/uzu/strudel/pulls/232"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix zero length queries WIP by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/234",
          children: "https://codeberg.org/uzu/strudel/pulls/234"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add vcsl sample library by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/235",
          children: "https://codeberg.org/uzu/strudel/pulls/235"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fx on stereo speakers by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/236",
          children: "https://codeberg.org/uzu/strudel/pulls/236"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Tidal drum machines by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/237",
          children: "https://codeberg.org/uzu/strudel/pulls/237"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Object arithmetic by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/238",
          children: "https://codeberg.org/uzu/strudel/pulls/238"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Load samples from url by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/239",
          children: "https://codeberg.org/uzu/strudel/pulls/239"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["feat: support github: links by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/240",
          children: "https://codeberg.org/uzu/strudel/pulls/240"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["in source example tests by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/242",
          children: "https://codeberg.org/uzu/strudel/pulls/242"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Readme + TLC by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/244",
          children: "https://codeberg.org/uzu/strudel/pulls/244"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["patchday by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/246",
          children: "https://codeberg.org/uzu/strudel/pulls/246"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Some tunes by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/247",
          children: "https://codeberg.org/uzu/strudel/pulls/247"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["snapshot tests on shared snippets by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/243",
          children: "https://codeberg.org/uzu/strudel/pulls/243"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["General purpose scheduler by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/248",
          children: "https://codeberg.org/uzu/strudel/pulls/248"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.3.0-donauwelle/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@mystery-house made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/226",
          children: "https://codeberg.org/uzu/strudel/pulls/226"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.0.4...v0.3.0",
        children: "https://codeberg.org/uzu/strudel/compare/v0.0.4…v0.3.0"
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

const url = "src/content/blog/release-0.3.0-donauwelle.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.3.0-donauwelle.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.3.0-donauwelle.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
