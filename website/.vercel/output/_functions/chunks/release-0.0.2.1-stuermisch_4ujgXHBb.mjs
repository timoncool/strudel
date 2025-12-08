import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';

const frontmatter = {
  "title": "Release Notes v0.0.3",
  "date": "2022-05-20",
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
        href: "//home/user/Bulka/website/src/content/blog/release-0.0.2.1-stuermisch/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Add chunk, chunkBack and iterBack by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/25",
          children: "https://codeberg.org/uzu/strudel/pulls/25"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update tutorial.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/37",
          children: "https://codeberg.org/uzu/strudel/pulls/37"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update tutorial.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/38",
          children: "https://codeberg.org/uzu/strudel/pulls/38"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Compose by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/40",
          children: "https://codeberg.org/uzu/strudel/pulls/40"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix polymeter by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/44",
          children: "https://codeberg.org/uzu/strudel/pulls/44"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["First run at squeezeBind, ref #32 by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/48",
          children: "https://codeberg.org/uzu/strudel/pulls/48"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Implement ", createVNode(_components.code, {
          children: "chop()"
        }), " by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/50",
          children: "https://codeberg.org/uzu/strudel/pulls/50"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["OSC and SuperDirt support by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/27",
          children: "https://codeberg.org/uzu/strudel/pulls/27"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["More functions by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/56",
          children: "https://codeberg.org/uzu/strudel/pulls/56"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["More functions by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/61",
          children: "https://codeberg.org/uzu/strudel/pulls/61"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Separate out strudel.mjs, make index.mjs aggregate module by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/62",
          children: "https://codeberg.org/uzu/strudel/pulls/62"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Speech output by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/67",
          children: "https://codeberg.org/uzu/strudel/pulls/67"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["use new fixed version of osc-js package by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/68",
          children: "https://codeberg.org/uzu/strudel/pulls/68"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["First effort at rand() by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/69",
          children: "https://codeberg.org/uzu/strudel/pulls/69"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["More randomness, fix ", createVNode(_components.code, {
          children: "rand"
        }), ", and add ", createVNode(_components.code, {
          children: "brand"
        }), ", ", createVNode(_components.code, {
          children: "irand"
        }), " and ", createVNode(_components.code, {
          children: "choose"
        }), " by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/70",
          children: "https://codeberg.org/uzu/strudel/pulls/70"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["webaudio package by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/26",
          children: "https://codeberg.org/uzu/strudel/pulls/26"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Port ", createVNode(_components.code, {
          children: "perlin"
        }), " noise, ", createVNode(_components.code, {
          children: "rangex"
        }), ", and ", createVNode(_components.code, {
          children: "palindrome"
        }), " by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/73",
          children: "https://codeberg.org/uzu/strudel/pulls/73"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["More random functions by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/74",
          children: "https://codeberg.org/uzu/strudel/pulls/74"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Try to fix appLeft / appRight by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/75",
          children: "https://codeberg.org/uzu/strudel/pulls/75"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Basic webserial support by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/80",
          children: "https://codeberg.org/uzu/strudel/pulls/80"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Webaudio in REPL by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/77",
          children: "https://codeberg.org/uzu/strudel/pulls/77"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add ", createVNode(_components.code, {
          children: "striate()"
        }), " by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/76",
          children: "https://codeberg.org/uzu/strudel/pulls/76"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Tidy up a couple of old files by @mindofmatthew in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/84",
          children: "https://codeberg.org/uzu/strudel/pulls/84"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add pattern composers, implements #82 by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/83",
          children: "https://codeberg.org/uzu/strudel/pulls/83"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fiddles with cat/stack by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/90",
          children: "https://codeberg.org/uzu/strudel/pulls/90"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Paper by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/98",
          children: "https://codeberg.org/uzu/strudel/pulls/98"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Change to Affero GPL by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/101",
          children: "https://codeberg.org/uzu/strudel/pulls/101"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Work on Codemirror 6 highlighting by @mindofmatthew in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/102",
          children: "https://codeberg.org/uzu/strudel/pulls/102"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Codemirror 6 by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/97",
          children: "https://codeberg.org/uzu/strudel/pulls/97"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Tune tests by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/104",
          children: "https://codeberg.org/uzu/strudel/pulls/104"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["/embed package: web component for repl by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/106",
          children: "https://codeberg.org/uzu/strudel/pulls/106"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Reset, Restart and other composers by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/88",
          children: "https://codeberg.org/uzu/strudel/pulls/88"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Embed style by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/109",
          children: "https://codeberg.org/uzu/strudel/pulls/109"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["In source doc by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/105",
          children: "https://codeberg.org/uzu/strudel/pulls/105"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".brak()"
        }), ", ", createVNode(_components.code, {
          children: ".inside()"
        }), " and ", createVNode(_components.code, {
          children: ".outside()"
        }), " by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/112",
          children: "https://codeberg.org/uzu/strudel/pulls/112"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["loopAt by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/114",
          children: "https://codeberg.org/uzu/strudel/pulls/114"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Osc timing improvements by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/113",
          children: "https://codeberg.org/uzu/strudel/pulls/113"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.0.2.1-stuermisch/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@bwagner made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/37",
          children: "https://codeberg.org/uzu/strudel/pulls/37"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@mindofmatthew made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/84",
          children: "https://codeberg.org/uzu/strudel/pulls/84"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.0.2...@strudel.cycles/core@0.1.0",
        children: "https://codeberg.org/uzu/strudel/compare/v0.0.2…@strudel.cycles/core@0.1.0"
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

const url = "src/content/blog/release-0.0.2.1-stuermisch.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.0.2.1-stuermisch.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.0.2.1-stuermisch.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
