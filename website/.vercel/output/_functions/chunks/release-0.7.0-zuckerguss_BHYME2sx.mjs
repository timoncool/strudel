import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';

const frontmatter = {
  "title": "Release Notes v0.7.0",
  "description": "",
  "date": "2023-03-23",
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
        href: "//home/user/Bulka/website/src/content/blog/release-0.7.0-zuckerguss/#package-versions",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "@strudel.cycles/core@0.7.2"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/transpiler@0.7.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/mini@0.7.2"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/tonal@0.7.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/xen@0.7.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/tone@0.7.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/webaudio@0.7.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/react@0.7.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/osc@0.7.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/serial@0.7.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/midi@0.7.1"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/csound@0.7.1"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "whats-changed",
      children: ["What’s Changed", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.7.0-zuckerguss/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["pin @csound/browser to 6.18.3 + bump by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/403",
          children: "https://codeberg.org/uzu/strudel/pulls/403"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update csound + fix sound output by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/404",
          children: "https://codeberg.org/uzu/strudel/pulls/404"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: share url on subpath by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/405",
          children: "https://codeberg.org/uzu/strudel/pulls/405"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add shabda doc by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/407",
          children: "https://codeberg.org/uzu/strudel/pulls/407"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update effects.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/410",
          children: "https://codeberg.org/uzu/strudel/pulls/410"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["improve effects doc by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/409",
          children: "https://codeberg.org/uzu/strudel/pulls/409"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["google gtfo by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/413",
          children: "https://codeberg.org/uzu/strudel/pulls/413"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["improve samples doc by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/411",
          children: "https://codeberg.org/uzu/strudel/pulls/411"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["PWA with offline support by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/417",
          children: "https://codeberg.org/uzu/strudel/pulls/417"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add caching strategy for missing file types + cache all samples loaded from github by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/419",
          children: "https://codeberg.org/uzu/strudel/pulls/419"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add more offline caching by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/421",
          children: "https://codeberg.org/uzu/strudel/pulls/421"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add cdn.freesound to cache list by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/425",
          children: "https://codeberg.org/uzu/strudel/pulls/425"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["minirepl: add keyboard shortcuts by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/429",
          children: "https://codeberg.org/uzu/strudel/pulls/429"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Themes by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/431",
          children: "https://codeberg.org/uzu/strudel/pulls/431"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["autocomplete preparations by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/427",
          children: "https://codeberg.org/uzu/strudel/pulls/427"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix anchors by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/433",
          children: "https://codeberg.org/uzu/strudel/pulls/433"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update code.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/436",
          children: "https://codeberg.org/uzu/strudel/pulls/436"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update mini-notation.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/437",
          children: "https://codeberg.org/uzu/strudel/pulls/437"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update synths.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/438",
          children: "https://codeberg.org/uzu/strudel/pulls/438"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["FIXES: Warning about jsxBracketSameLine deprecation by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/461",
          children: "https://codeberg.org/uzu/strudel/pulls/461"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Composable functions by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/390",
          children: "https://codeberg.org/uzu/strudel/pulls/390"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["weave and weaveWith by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/465",
          children: "https://codeberg.org/uzu/strudel/pulls/465"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["slice and splice by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/466",
          children: "https://codeberg.org/uzu/strudel/pulls/466"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: osc should not return a promise by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/472",
          children: "https://codeberg.org/uzu/strudel/pulls/472"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["FIXES: freqs instead of pitches by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/464",
          children: "https://codeberg.org/uzu/strudel/pulls/464"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update input-output.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/471",
          children: "https://codeberg.org/uzu/strudel/pulls/471"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["settings tab with vim / emacs modes + additional themes and fonts by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/467",
          children: "https://codeberg.org/uzu/strudel/pulls/467"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: hash links by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/473",
          children: "https://codeberg.org/uzu/strudel/pulls/473"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["midi cc support by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/478",
          children: "https://codeberg.org/uzu/strudel/pulls/478"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix array args by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/480",
          children: "https://codeberg.org/uzu/strudel/pulls/480"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["docs: packages + offline by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/482",
          children: "https://codeberg.org/uzu/strudel/pulls/482"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update mini-notation.mdx by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/365",
          children: "https://codeberg.org/uzu/strudel/pulls/365"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Revert “Another attempt at composable functions - WIP (#390)” by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/484",
          children: "https://codeberg.org/uzu/strudel/pulls/484"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix app height by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/485",
          children: "https://codeberg.org/uzu/strudel/pulls/485"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add algolia creds + optimize sidebar for crawling by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/488",
          children: "https://codeberg.org/uzu/strudel/pulls/488"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["refactor react package by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/490",
          children: "https://codeberg.org/uzu/strudel/pulls/490"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["react style fixes by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/491",
          children: "https://codeberg.org/uzu/strudel/pulls/491"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["implement cps in scheduler by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/493",
          children: "https://codeberg.org/uzu/strudel/pulls/493"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add control aliases by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/497",
          children: "https://codeberg.org/uzu/strudel/pulls/497"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: nano-repl highlighting by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/501",
          children: "https://codeberg.org/uzu/strudel/pulls/501"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Reinstate slice and splice by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/500",
          children: "https://codeberg.org/uzu/strudel/pulls/500"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["can now use : as a replacement for space in scales by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/502",
          children: "https://codeberg.org/uzu/strudel/pulls/502"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Support list syntax in mininotation by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/512",
          children: "https://codeberg.org/uzu/strudel/pulls/512"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update react to 18 by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/514",
          children: "https://codeberg.org/uzu/strudel/pulls/514"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add arrange function by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/508",
          children: "https://codeberg.org/uzu/strudel/pulls/508"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update README.md by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/474",
          children: "https://codeberg.org/uzu/strudel/pulls/474"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add 2 illegible fonts by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/518",
          children: "https://codeberg.org/uzu/strudel/pulls/518"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["registerSound API + improved sounds tab + regroup soundfonts by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/516",
          children: "https://codeberg.org/uzu/strudel/pulls/516"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: envelopes in chrome by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/521",
          children: "https://codeberg.org/uzu/strudel/pulls/521"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update samples.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/524",
          children: "https://codeberg.org/uzu/strudel/pulls/524"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update intro.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/525",
          children: "https://codeberg.org/uzu/strudel/pulls/525"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix(footer): fix link to tidalcycles by @revolunet in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/529",
          children: "https://codeberg.org/uzu/strudel/pulls/529"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["FIXES: alias pm for polymeter by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/527",
          children: "https://codeberg.org/uzu/strudel/pulls/527"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Maintain random seed state in parser, not globally by @ijc8 in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/531",
          children: "https://codeberg.org/uzu/strudel/pulls/531"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["feat: add freq support to gm soundfonts by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/534",
          children: "https://codeberg.org/uzu/strudel/pulls/534"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update lerna by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/535",
          children: "https://codeberg.org/uzu/strudel/pulls/535"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.7.0-zuckerguss/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@revolunet made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/529",
          children: "https://codeberg.org/uzu/strudel/pulls/529"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@ijc8 made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/531",
          children: "https://codeberg.org/uzu/strudel/pulls/531"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.6.0...v0.7.0",
        children: "https://codeberg.org/uzu/strudel/compare/v0.6.0…v0.7.0"
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

const url = "src/content/blog/release-0.7.0-zuckerguss.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.7.0-zuckerguss.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.7.0-zuckerguss.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
