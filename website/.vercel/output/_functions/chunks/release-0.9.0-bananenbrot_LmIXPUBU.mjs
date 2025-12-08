import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';
import 'react/jsx-runtime';
import 'react-lite-youtube-embed';
/* empty css                                    */

const frontmatter = {
  "title": "Release Notes v0.9.0",
  "description": "",
  "date": "2023-09-17",
  "tags": ["meta"],
  "author": "froos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "improved-synth-engine",
    "text": "Improved Synth Engine"
  }, {
    "depth": 2,
    "slug": "desktop-app-improvements",
    "text": "Desktop App Improvements"
  }, {
    "depth": 2,
    "slug": "visuals",
    "text": "Visuals"
  }, {
    "depth": 2,
    "slug": "voicings",
    "text": "Voicings"
  }, {
    "depth": 2,
    "slug": "adaptive-highlighting",
    "text": "Adaptive Highlighting"
  }, {
    "depth": 2,
    "slug": "ui-changes",
    "text": "UI Changes"
  }, {
    "depth": 2,
    "slug": "other-new-features",
    "text": "Other New Features"
  }, {
    "depth": 2,
    "slug": "articles",
    "text": "Articles"
  }, {
    "depth": 2,
    "slug": "other-fixes--enhancements",
    "text": "Other Fixes & Enhancements"
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
    children: [createVNode(_components.p, {
      children: "These are the release notes for Strudel 0.9.0 aka “Bananenbrot”!"
    }), "\n", createVNode(_components.p, {
      children: "The last release was over 11 weeks ago, so a lot of things have happened!"
    }), "\n", createVNode(_components.p, {
      children: "Let me write up some of the highlights:"
    }), "\n", createVNode(_components.h2, {
      id: "improved-synth-engine",
      children: ["Improved Synth Engine", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#improved-synth-engine",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The synth engine has gotten a lot of love + a name: ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/superdough",
        children: "superdough"
      }), " encapsulates the web audio based synth / sampler / fx engine into a reusable package, which is already used by ", createVNode(_components.a, {
        href: "https://topos.raphaelforment.fr/",
        children: "Topos"
      }), ".\nMain new features include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/learn/effects#filter-envelope",
          children: "filter envelopes"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/learn/synths#fm-synthesis",
          children: "FM Synthesis"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/learn/samples#loop",
          children: "looping samples"
        }), ", allowing ", createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/?I9myTNQoKKaP",
          children: "wavetable synthesis"
        })]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/learn/synths#vibrato",
          children: "vibrato"
        })
      }), "\n", createVNode(_components.li, {
        children: ["an integration of ", createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/learn/synths#zzfx",
          children: "ZZFX"
        })]
      }), "\n"]
    }), "\n", "\n", createVNode("astro-client-only", {
      "client:only": "react",
      id: "5ByKVG7jiO4",
      "client:display-name": "Youtube",
      "client:component-path": "@src/components/Youtube",
      "client:component-export": "Youtube",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Related PRs:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["superdough: encapsulates web audio output by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/664",
          children: "https://codeberg.org/uzu/strudel/pulls/664"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["basic fm by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/669",
          children: "https://codeberg.org/uzu/strudel/pulls/669"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Wave Selection and Global Envelope on the FM Synth Modulator by @Bubobubobubobubo in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/683",
          children: "https://codeberg.org/uzu/strudel/pulls/683"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["control osc partial count with n by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/674",
          children: "https://codeberg.org/uzu/strudel/pulls/674"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["ZZFX Synth support by @Bubobubobubobubo in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/684",
          children: "https://codeberg.org/uzu/strudel/pulls/684"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Adding filter envelopes and filter order selection by @Bubobubobubobubo in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/692",
          children: "https://codeberg.org/uzu/strudel/pulls/692"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Adding loop points and thus wavetable synthesis by @Bubobubobubobubo in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/698",
          children: "https://codeberg.org/uzu/strudel/pulls/698"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Adding vibrato to base oscillators by @Bubobubobubobubo in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/693",
          children: "https://codeberg.org/uzu/strudel/pulls/693"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "desktop-app-improvements",
      children: ["Desktop App Improvements", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#desktop-app-improvements",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Thanks to @daslyfe and @vasilymilovidov , the desktop app now has its own rust based MIDI and OSC integrations,\nwhich do not depend on browser APIs!"
    }), "\n", createVNode(_components.p, {
      children: ["You can see superdough, superdirt via OSC + hardware synths via MIDI all together playing in harmony in this ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=lxQgBeLQBgk",
        children: "awesome video"
      }), ". These are the related PRs:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Create Midi Integration for Tauri Desktop app by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/685",
          children: "https://codeberg.org/uzu/strudel/pulls/685"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add sleep timer + improve message iterating by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/688",
          children: "https://codeberg.org/uzu/strudel/pulls/688"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix MIDI CC messages by @vasilymilovidov in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/690",
          children: "https://codeberg.org/uzu/strudel/pulls/690"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Direct OSC Support in Tauri by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/694",
          children: "https://codeberg.org/uzu/strudel/pulls/694"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add logging from tauri by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/697",
          children: "https://codeberg.org/uzu/strudel/pulls/697"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix osc bundle timestamp glitches caused by drifting clock by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/666",
          children: "https://codeberg.org/uzu/strudel/pulls/666"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Midi time fixes by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/668",
          children: "https://codeberg.org/uzu/strudel/pulls/668"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["[Bug Fix] Account for numeral notation when converting to midi by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/656",
          children: "https://codeberg.org/uzu/strudel/pulls/656"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["[Bug Fix] Midi: Don’t treat note 0 as false by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/657",
          children: "https://codeberg.org/uzu/strudel/pulls/657"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "visuals",
      children: ["Visuals", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#visuals",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["2 new FFT based vizualisations have now landed: ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/677",
          children: "scope and fscope"
        }), " (featured in the video at the top)."]
      }), "\n", createVNode(_components.li, {
        children: ["pianoroll has new options, see ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/679",
          children: "PR"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Related PRs:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Scope by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/677",
          children: "https://codeberg.org/uzu/strudel/pulls/677"
        }), " (", createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/?hXVQF-KxMI8p",
          children: "demo"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["Pianoroll improvements by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/679",
          children: "https://codeberg.org/uzu/strudel/pulls/679"
        }), " (", createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/?aPMKqXGVMgSM",
          children: "demo"
        }), ")"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "voicings",
      children: ["Voicings", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#voicings",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "There is now a new way to play chord voicings + a huge selection of chord voicings available. Find out more in these PRs:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["stateless voicings + tonleiter lib by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/647",
          children: "https://codeberg.org/uzu/strudel/pulls/647"
        }), " (", createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/?FoILM0Hs9y9f",
          children: "demo"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["ireal voicings by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/653",
          children: "https://codeberg.org/uzu/strudel/pulls/653"
        }), " (", createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/?bv_TjY9hOC28",
          children: "demo"
        }), ")"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "adaptive-highlighting",
      children: ["Adaptive Highlighting", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#adaptive-highlighting",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Thanks to @mindofmatthew , the highlighting will adapt to edits instantly! Related PRs:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["More work on highlight IDs by @mindofmatthew in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/636",
          children: "https://codeberg.org/uzu/strudel/pulls/636"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Adaptive Highlighting by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/634",
          children: "https://codeberg.org/uzu/strudel/pulls/634"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "ui-changes",
      children: ["UI Changes", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#ui-changes",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["teletext theme + fonts by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/681",
          children: "https://codeberg.org/uzu/strudel/pulls/681"
        }), " (featured in video at the top)"]
      }), "\n", createVNode(_components.li, {
        children: ["togglable panel position by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/667",
          children: "https://codeberg.org/uzu/strudel/pulls/667"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "other-new-features",
      children: ["Other New Features", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#other-new-features",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["slice: list mode by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/645",
          children: "https://codeberg.org/uzu/strudel/pulls/645"
        }), " (", createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/?bAYIqz5NLjRr",
          children: "demo"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["add emoji support by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/680",
          children: "https://codeberg.org/uzu/strudel/pulls/680"
        }), " (", createVNode(_components.a, {
          href: "https://strudel.tidalcycles.org/?a6FgLz475gN9",
          children: "demo"
        }), ")"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "articles",
      children: ["Articles", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#articles",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Understand pitch by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/652",
          children: "https://codeberg.org/uzu/strudel/pulls/652"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "other-fixes--enhancements",
      children: ["Other Fixes & Enhancements", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#other-fixes--enhancements",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["fix: out of range error by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/630",
          children: "https://codeberg.org/uzu/strudel/pulls/630"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: update canvas size on window resize by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/631",
          children: "https://codeberg.org/uzu/strudel/pulls/631"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["FIXES: TODO in rotateChroma by @bwagner in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/650",
          children: "https://codeberg.org/uzu/strudel/pulls/650"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["snapshot tests: sort haps by part by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/637",
          children: "https://codeberg.org/uzu/strudel/pulls/637"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Delete old packages by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/639",
          children: "https://codeberg.org/uzu/strudel/pulls/639"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update vitest by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/651",
          children: "https://codeberg.org/uzu/strudel/pulls/651"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: welcome message for latestCode by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/659",
          children: "https://codeberg.org/uzu/strudel/pulls/659"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: always run previous trigger by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/660",
          children: "https://codeberg.org/uzu/strudel/pulls/660"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@daslyfe made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/656",
          children: "https://codeberg.org/uzu/strudel/pulls/656"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@Bubobubobubobubo made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/683",
          children: "https://codeberg.org/uzu/strudel/pulls/683"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.8.0...v0.9.0",
        children: "https://codeberg.org/uzu/strudel/compare/v0.8.0…v0.9.0"
      })]
    }), "\n", createVNode(_components.p, {
      children: "A big thanks to all the contributors!"
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

const url = "src/content/blog/release-0.9.0-bananenbrot.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.9.0-bananenbrot.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
