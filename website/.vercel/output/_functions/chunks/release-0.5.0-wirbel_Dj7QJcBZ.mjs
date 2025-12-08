import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';

const frontmatter = {
  "title": "Release Notes v0.5.0",
  "description": "",
  "date": "2022-12-13",
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
        href: "//home/user/Bulka/website/src/content/blog/release-0.5.0-wirbel/#package-versions",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "@strudel.cycles/core@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/osc@0.4.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/serial@0.3.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/csound@0.5.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/eval@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/midi@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/mini@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/react@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/soundfonts@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/tonal@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/tone@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/transpiler@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/webaudio@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/webdirt@0.5.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/xen@0.5.0"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "whats-changed",
      children: ["What’s Changed", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.5.0-wirbel/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Binaries by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/254",
          children: "https://codeberg.org/uzu/strudel/pulls/254"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix tutorial bugs by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/263",
          children: "https://codeberg.org/uzu/strudel/pulls/263"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix performance bottleneck by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/266",
          children: "https://codeberg.org/uzu/strudel/pulls/266"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Tidying up core by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/256",
          children: "https://codeberg.org/uzu/strudel/pulls/256"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["tonal update with fixed memory leak by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/272",
          children: "https://codeberg.org/uzu/strudel/pulls/272"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add eslint by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/271",
          children: "https://codeberg.org/uzu/strudel/pulls/271"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["release version bumps by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/273",
          children: "https://codeberg.org/uzu/strudel/pulls/273"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Support sending CRC16 bytes with serial messages by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/276",
          children: "https://codeberg.org/uzu/strudel/pulls/276"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add licenses / credits to all tunes + remove some by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/277",
          children: "https://codeberg.org/uzu/strudel/pulls/277"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add basic csound output by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/275",
          children: "https://codeberg.org/uzu/strudel/pulls/275"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["do not recompile orc by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/278",
          children: "https://codeberg.org/uzu/strudel/pulls/278"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["implement collect + arp function by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/281",
          children: "https://codeberg.org/uzu/strudel/pulls/281"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Switch ‘operators’ from .whatHow to .what.how by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/285",
          children: "https://codeberg.org/uzu/strudel/pulls/285"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fancy hap show, include part in snapshots by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/291",
          children: "https://codeberg.org/uzu/strudel/pulls/291"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Reorganise pattern.mjs with a ‘toplevel first’ regime by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/286",
          children: "https://codeberg.org/uzu/strudel/pulls/286"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add prettier task by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/296",
          children: "https://codeberg.org/uzu/strudel/pulls/296"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Move stuff to new register function by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/295",
          children: "https://codeberg.org/uzu/strudel/pulls/295"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["can now add bare numbers to numeral object props by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/287",
          children: "https://codeberg.org/uzu/strudel/pulls/287"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update vitest by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/297",
          children: "https://codeberg.org/uzu/strudel/pulls/297"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["remove whitespace from highlighted region by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/298",
          children: "https://codeberg.org/uzu/strudel/pulls/298"
        })]
      }), "\n", createVNode(_components.li, {
        children: [".defragmentHaps() for merging touching haps that share a whole and value by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/299",
          children: "https://codeberg.org/uzu/strudel/pulls/299"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix whitespace trimming by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/300",
          children: "https://codeberg.org/uzu/strudel/pulls/300"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add freq support to sampler by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/301",
          children: "https://codeberg.org/uzu/strudel/pulls/301"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add lint + prettier check before test by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/305",
          children: "https://codeberg.org/uzu/strudel/pulls/305"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Updated csoundm to use the register facility . by @gogins in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/303",
          children: "https://codeberg.org/uzu/strudel/pulls/303"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.5.0-wirbel/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@gogins made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/303",
          children: "https://codeberg.org/uzu/strudel/pulls/303"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.4.0...v0.5.0",
        children: "https://codeberg.org/uzu/strudel/compare/v0.4.0…v0.5.0"
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

const url = "src/content/blog/release-0.5.0-wirbel.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.5.0-wirbel.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.5.0-wirbel.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
