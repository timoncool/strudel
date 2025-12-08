import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';

const frontmatter = {
  "title": "Release Notes v0.6.0",
  "description": "",
  "date": "2023-02-01",
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
        href: "//home/user/Bulka/website/src/content/blog/release-0.6.0-zimtschnecke/#package-versions",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "@strudel.cycles/core@0.6.8"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/eval@0.6.2"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/transpiler@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/mini@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/tonal@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/tone@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/xen@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/webaudio@0.6.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/react@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/osc@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/midi@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/webdirt@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/serial@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/soundfonts@0.6.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/csound@0.6.0"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "whats-changed",
      children: ["What’s Changed", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.6.0-zimtschnecke/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["support freq in pianoroll by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/308",
          children: "https://codeberg.org/uzu/strudel/pulls/308"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["ICLC2023 paper WIP by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/306",
          children: "https://codeberg.org/uzu/strudel/pulls/306"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: copy share link to clipboard was broken for some browsers by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/311",
          children: "https://codeberg.org/uzu/strudel/pulls/311"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Jsdoc component by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/312",
          children: "https://codeberg.org/uzu/strudel/pulls/312"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["object support for .scale by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/307",
          children: "https://codeberg.org/uzu/strudel/pulls/307"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Astro build by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/315",
          children: "https://codeberg.org/uzu/strudel/pulls/315"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Reference tab sort by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/318",
          children: "https://codeberg.org/uzu/strudel/pulls/318"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["tutorial updates by @jarmitage in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/320",
          children: "https://codeberg.org/uzu/strudel/pulls/320"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["support notes without octave by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/323",
          children: "https://codeberg.org/uzu/strudel/pulls/323"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["mini repl improvements by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/324",
          children: "https://codeberg.org/uzu/strudel/pulls/324"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: workaround Object.assign globalThis by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/326",
          children: "https://codeberg.org/uzu/strudel/pulls/326"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add examples route by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/327",
          children: "https://codeberg.org/uzu/strudel/pulls/327"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add my-patterns by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/328",
          children: "https://codeberg.org/uzu/strudel/pulls/328"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["my-patterns build + deploy by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/329",
          children: "https://codeberg.org/uzu/strudel/pulls/329"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["my-patterns: fix paths + update readme by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/330",
          children: "https://codeberg.org/uzu/strudel/pulls/330"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["improve displaying ‘s’ in pianoroll by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/331",
          children: "https://codeberg.org/uzu/strudel/pulls/331"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: can now multiply floats in mini notation by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/332",
          children: "https://codeberg.org/uzu/strudel/pulls/332"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Embed mode improvements by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/333",
          children: "https://codeberg.org/uzu/strudel/pulls/333"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["testing + docs docs by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/334",
          children: "https://codeberg.org/uzu/strudel/pulls/334"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["animate mvp by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/335",
          children: "https://codeberg.org/uzu/strudel/pulls/335"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Tidy parser, implement polymeters by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/336",
          children: "https://codeberg.org/uzu/strudel/pulls/336"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["animation options by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/337",
          children: "https://codeberg.org/uzu/strudel/pulls/337"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["move /my-patterns to /swatch by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/338",
          children: "https://codeberg.org/uzu/strudel/pulls/338"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["more animate functions + mini repl fix by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/340",
          children: "https://codeberg.org/uzu/strudel/pulls/340"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Patternify euclid, fast, slow and polymeter step parameters in mininotation by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/341",
          children: "https://codeberg.org/uzu/strudel/pulls/341"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fixes #346 by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/347",
          children: "https://codeberg.org/uzu/strudel/pulls/347"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix prebake base path by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/345",
          children: "https://codeberg.org/uzu/strudel/pulls/345"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix Bjorklund by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/343",
          children: "https://codeberg.org/uzu/strudel/pulls/343"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["docs: tidal comparison + add global fx + add missing sampler fx by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/356",
          children: "https://codeberg.org/uzu/strudel/pulls/356"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix .out(), renaming webaudio’s out() to webaudio() by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/361",
          children: "https://codeberg.org/uzu/strudel/pulls/361"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Support for multiple mininotation operators by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/350",
          children: "https://codeberg.org/uzu/strudel/pulls/350"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["doc structuring by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/360",
          children: "https://codeberg.org/uzu/strudel/pulls/360"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add https to url by @urswilke in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/364",
          children: "https://codeberg.org/uzu/strudel/pulls/364"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["document more functions + change arp join by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/369",
          children: "https://codeberg.org/uzu/strudel/pulls/369"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["improve new draw logic by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/372",
          children: "https://codeberg.org/uzu/strudel/pulls/372"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Draw fixes by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/377",
          children: "https://codeberg.org/uzu/strudel/pulls/377"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update my-patterns instructions by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/384",
          children: "https://codeberg.org/uzu/strudel/pulls/384"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["docs: use note instead of n to mitigate confusion by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/385",
          children: "https://codeberg.org/uzu/strudel/pulls/385"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add run + test + docs by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/386",
          children: "https://codeberg.org/uzu/strudel/pulls/386"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Rename a to angle by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/387",
          children: "https://codeberg.org/uzu/strudel/pulls/387"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["document csound by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/391",
          children: "https://codeberg.org/uzu/strudel/pulls/391"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Notes are not essential :) by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/393",
          children: "https://codeberg.org/uzu/strudel/pulls/393"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add ribbon + test + docs by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/388",
          children: "https://codeberg.org/uzu/strudel/pulls/388"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add tidal-drum-patterns to examples by @urswilke in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/379",
          children: "https://codeberg.org/uzu/strudel/pulls/379"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add pattern methods hurry, press and pressBy by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/397",
          children: "https://codeberg.org/uzu/strudel/pulls/397"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["proper builds + use pnpm workspaces by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/396",
          children: "https://codeberg.org/uzu/strudel/pulls/396"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: minirepl styles by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/398",
          children: "https://codeberg.org/uzu/strudel/pulls/398"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["can now await initAudio + initAudioOnFirstClick by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/399",
          children: "https://codeberg.org/uzu/strudel/pulls/399"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["release webaudio by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/400",
          children: "https://codeberg.org/uzu/strudel/pulls/400"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.6.0-zimtschnecke/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@jarmitage made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/320",
          children: "https://codeberg.org/uzu/strudel/pulls/320"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@urswilke made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/364",
          children: "https://codeberg.org/uzu/strudel/pulls/364"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.5.0...v0.6.0",
        children: "https://codeberg.org/uzu/strudel/compare/v0.5.0…v0.6.0"
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

const url = "src/content/blog/release-0.6.0-zimtschnecke.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.6.0-zimtschnecke.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.6.0-zimtschnecke.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
