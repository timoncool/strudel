import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';
import 'react/jsx-runtime';
import 'react-lite-youtube-embed';
/* empty css                                    */

const frontmatter = {
  "title": "Release Notes v1.0.0",
  "description": "",
  "date": "2024-01-22",
  "tags": ["meta"],
  "author": "froos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "breaking-change",
    "text": "Breaking Change"
  }, {
    "depth": 2,
    "slug": "new-domain",
    "text": "New Domain"
  }, {
    "depth": 2,
    "slug": "strudel-on-mastodon",
    "text": "Strudel on Mastodon"
  }, {
    "depth": 2,
    "slug": "new-audio-engine-features",
    "text": "New Audio Engine Features"
  }, {
    "depth": 2,
    "slug": "slider-controls",
    "text": "Slider Controls"
  }, {
    "depth": 2,
    "slug": "improved-midi-integration",
    "text": "Improved MIDI integration"
  }, {
    "depth": 2,
    "slug": "hydra",
    "text": "hydra"
  }, {
    "depth": 2,
    "slug": "vanilla-repl",
    "text": "Vanilla REPL"
  }, {
    "depth": 2,
    "slug": "doc-changes",
    "text": "Doc Changes"
  }, {
    "depth": 2,
    "slug": "other-features",
    "text": "Other Features"
  }, {
    "depth": 2,
    "slug": "other-fixes",
    "text": "Other Fixes"
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
    children: [createVNode(_components.p, {
      children: "These are the release notes for Strudel 1.0.0 aka “Geburtstagskuchen”"
    }), "\n", createVNode(_components.p, {
      children: "This release marks the 2 year anniversary of the project, the first commit was on the 22nd January 2022 by Alex McLean."
    }), "\n", createVNode(_components.p, {
      children: ["If you generally need a heads up on what happened to Strudel in the last year, read the ", createVNode(_components.a, {
        href: "/blog/#year-2",
        children: "2023 recap"
      })]
    }), "\n", "\n", createVNode("astro-client-only", {
      "client:only": "react",
      id: "ByPFmSBqQk0",
      "client:display-name": "Youtube",
      "client:component-path": "@src/components/Youtube",
      "client:component-export": "Youtube",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "A lot has happened since then, and also since the last release 16 weeks ago."
    }), "\n", createVNode(_components.p, {
      children: "Let me write up some of the highlights:"
    }), "\n", createVNode(_components.h2, {
      id: "breaking-change",
      children: ["Breaking Change", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#breaking-change",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["This version changes the default cps value from 1 to 0.5 to give patterns a little bit more time by default.\nIf you find your existing patterns to be suddenly half the speed, just add a ", createVNode(_components.code, {
        children: "setcps(1)"
      }), " to the top and it should sound as it did before!"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["make 0.5hz cps the default by @yaxu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/931",
          children: "https://codeberg.org/uzu/strudel/pulls/931"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-domain",
      children: ["New Domain", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#new-domain",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Strudel is now available under ", createVNode(_components.a, {
        href: "https://strudel.cc/",
        children: "strudel.cc"
      }), ". The old domain still works but you might not get the most recent version."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["replace strudel.tidalcycles.org with strudel.cc by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/768",
          children: "https://codeberg.org/uzu/strudel/pulls/768"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "strudel-on-mastodon",
      children: ["Strudel on Mastodon", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#strudel-on-mastodon",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Strudel now has a mastodon presence: ", createVNode(_components.a, {
        href: "https://social.toplap.org/@strudel",
        children: "https://social.toplap.org/@strudel"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "new-audio-engine-features",
      children: ["New Audio Engine Features", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#new-audio-engine-features",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "superdough, the audio engine of strudel has gotten some new features:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Create phaser effect by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/798",
          children: "https://codeberg.org/uzu/strudel/pulls/798"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Multichannel audio by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/820",
          children: "https://codeberg.org/uzu/strudel/pulls/820"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Audio device selection by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/854",
          children: "https://codeberg.org/uzu/strudel/pulls/854"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Better convolution reverb by generating impulse responses by @Bubobubobubobubo and @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/718",
          children: "https://codeberg.org/uzu/strudel/pulls/718"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add ‘white’, ‘pink’ and ‘brown’ oscillators + refactor synth by @Bubobubobubobubo and @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/713",
          children: "https://codeberg.org/uzu/strudel/pulls/713"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["New noise type: “crackle” by @Bubobubobubobubo in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/806",
          children: "https://codeberg.org/uzu/strudel/pulls/806"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add support for using samples as impulse response buffers for the reverb by @vasilymilovidov in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/717",
          children: "https://codeberg.org/uzu/strudel/pulls/717"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Compressor by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/729",
          children: "https://codeberg.org/uzu/strudel/pulls/729"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Adding vibrato to Superdough sampler by @Bubobubobubobubo and @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/706",
          children: "https://codeberg.org/uzu/strudel/pulls/706"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Further Envelope improvements by @daslyfe in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/868",
          children: "https://codeberg.org/uzu/strudel/pulls/868"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add more vowel qualities for the vowels function by @fnordomat in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/907",
          children: "https://codeberg.org/uzu/strudel/pulls/907"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["pitch envelope by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/913",
          children: "https://codeberg.org/uzu/strudel/pulls/913"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "slider-controls",
      children: ["Slider Controls", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#slider-controls",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The new ", createVNode(_components.code, {
        children: "slider"
      }), " function inlines a draggable slider element into the code, bridging the gap between code and GUI."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["widgets by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/714",
          children: "https://codeberg.org/uzu/strudel/pulls/714"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Slider afterthoughts by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/723",
          children: "https://codeberg.org/uzu/strudel/pulls/723"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add xfade by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/780",
          children: "https://codeberg.org/uzu/strudel/pulls/780"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "improved-midi-integration",
      children: ["Improved MIDI integration", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#improved-midi-integration",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Pattern params ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=e2-Sv_jjDQk",
        children: "can now be controlled with cc messages"
      }), " + you can now send a MIDI clock to sync your DAW with strudel."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Midi in by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/699",
          children: "https://codeberg.org/uzu/strudel/pulls/699"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add midi clock support by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/710",
          children: "https://codeberg.org/uzu/strudel/pulls/710"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "hydra",
      children: ["hydra", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#hydra",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://hydra.ojack.xyz/",
        children: "hydra"
      }), ", the live coding video synth ", createVNode(_components.a, {
        href: "https://strudel.cc/learn/hydra/",
        children: "can now be used directly inside the strudel REPL"
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Hydra integration by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/759",
          children: "https://codeberg.org/uzu/strudel/pulls/759"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add options param to initHydra by @kasparsj in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/808",
          children: "https://codeberg.org/uzu/strudel/pulls/808"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Hydra fixes and improvements by @atfornes in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/818",
          children: "https://codeberg.org/uzu/strudel/pulls/818"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "vanilla-repl",
      children: ["Vanilla REPL", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#vanilla-repl",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "The codemirror editor and the repl abstraction have been refactored from react to vanilla JS!\nThis should give some performance improvements and less dependency / maintenance burden:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Vanilla repl 2 by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/863",
          children: "https://codeberg.org/uzu/strudel/pulls/863"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Vanilla repl 3 by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/865",
          children: "https://codeberg.org/uzu/strudel/pulls/865"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["more work on vanilla repl: repl web component + package + MicroRepl by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/866",
          children: "https://codeberg.org/uzu/strudel/pulls/866"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["main repl vanillification by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/873",
          children: "https://codeberg.org/uzu/strudel/pulls/873"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["final vanillification by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/876",
          children: "https://codeberg.org/uzu/strudel/pulls/876"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "doc-changes",
      children: ["Doc Changes", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#doc-changes",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Plenty of things have been added to the docs, including a ", createVNode(_components.a, {
        href: "https://strudel.cc/intro/showcase/",
        children: "showcase of what people have been done with strudel"
      }), " and the new ", createVNode(_components.a, {
        href: "/bakery/",
        children: "Community Bakery"
      }), "!"]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "show PRs"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Showcase by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/885",
            children: "https://codeberg.org/uzu/strudel/pulls/885"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Recipes by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/742",
            children: "https://codeberg.org/uzu/strudel/pulls/742"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Document striate function by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/766",
            children: "https://codeberg.org/uzu/strudel/pulls/766"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Document adsr function by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/767",
            children: "https://codeberg.org/uzu/strudel/pulls/767"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Add function params in reference tab by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/785",
            children: "https://codeberg.org/uzu/strudel/pulls/785"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Update first-sounds.mdx by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/794",
            children: "https://codeberg.org/uzu/strudel/pulls/794"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Update recap.mdx by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/797",
            children: "https://codeberg.org/uzu/strudel/pulls/797"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Update pattern-effects.mdx by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/796",
            children: "https://codeberg.org/uzu/strudel/pulls/796"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Update first-effects.mdx by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/795",
            children: "https://codeberg.org/uzu/strudel/pulls/795"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Document pianoroll by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/784",
            children: "https://codeberg.org/uzu/strudel/pulls/784"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Add doc for euclidLegatoRot, wordfall and slider by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/801",
            children: "https://codeberg.org/uzu/strudel/pulls/801"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Improve documentation for synonym functions by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/800",
            children: "https://codeberg.org/uzu/strudel/pulls/800"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Add and style algolia search by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/827",
            children: "https://codeberg.org/uzu/strudel/pulls/827"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix a typo by @drewgbarnes in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/830",
            children: "https://codeberg.org/uzu/strudel/pulls/830"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["add mastodon link by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/884",
            children: "https://codeberg.org/uzu/strudel/pulls/884"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["adds a blog by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/911",
            children: "https://codeberg.org/uzu/strudel/pulls/911"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["community bakery by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/923",
            children: "https://codeberg.org/uzu/strudel/pulls/923"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Blog improvements by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/919",
            children: "https://codeberg.org/uzu/strudel/pulls/919"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["2 years blog post by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/929",
            children: "https://codeberg.org/uzu/strudel/pulls/929"
          })]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "other-features",
      children: ["Other Features", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#other-features",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "There is a lot more"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["mini notation: international alphabets support by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/751",
            children: "https://codeberg.org/uzu/strudel/pulls/751"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Add shabda shortcut by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/740",
            children: "https://codeberg.org/uzu/strudel/pulls/740"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["add play function by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/758",
            children: "https://codeberg.org/uzu/strudel/pulls/758"
          }), " (superseded by next)"]
        }), "\n", createVNode(_components.li, {
          children: ["tidal style d1 … d9 functions + more by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/805",
            children: "https://codeberg.org/uzu/strudel/pulls/805"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["add vscode bindings by @Dsm0 in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/773",
            children: "https://codeberg.org/uzu/strudel/pulls/773"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Implement optional hover tooltip with function documentation by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/783",
            children: "https://codeberg.org/uzu/strudel/pulls/783"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["samples loading shortcuts: by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/788",
            children: "https://codeberg.org/uzu/strudel/pulls/788"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["add option to disable active line highlighting in Code Settings by @kasparsj in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/804",
            children: "https://codeberg.org/uzu/strudel/pulls/804"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Color hsl by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/815",
            children: "https://codeberg.org/uzu/strudel/pulls/815"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Patterns tab + Refactor Panel by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/769",
            children: "https://codeberg.org/uzu/strudel/pulls/769"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["patterns tab: import patterns + style by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/852",
            children: "https://codeberg.org/uzu/strudel/pulls/852"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Export patterns + ui tweaks by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/855",
            children: "https://codeberg.org/uzu/strudel/pulls/855"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Pattern organization by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/858",
            children: "https://codeberg.org/uzu/strudel/pulls/858"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Sound Import from local file system by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/839",
            children: "https://codeberg.org/uzu/strudel/pulls/839"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["bugfix: suspend and close existing audio context when changing interface by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/882",
            children: "https://codeberg.org/uzu/strudel/pulls/882"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["add root mode for voicings by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/887",
            children: "https://codeberg.org/uzu/strudel/pulls/887"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["scales can now be anchored by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/888",
            children: "https://codeberg.org/uzu/strudel/pulls/888"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["add dough function for raw dsp by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/707",
            children: "https://codeberg.org/uzu/strudel/pulls/707"
          }), " (experimental)"]
        }), "\n", createVNode(_components.li, {
          children: ["support mininotation ’..’ range operator, fixes #715 by @yaxu in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/716",
            children: "https://codeberg.org/uzu/strudel/pulls/716"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Add pick and squeeze functions by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/771",
            children: "https://codeberg.org/uzu/strudel/pulls/771"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["support , in < > by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/886",
            children: "https://codeberg.org/uzu/strudel/pulls/886"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["public sharing by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/910",
            children: "https://codeberg.org/uzu/strudel/pulls/910"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["pick, pickmod, inhabit, inhabitmod by @yaxu in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/921",
            children: "https://codeberg.org/uzu/strudel/pulls/921"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Mini-notation additions towards tidal compatibility by @yaxu in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/926",
            children: "https://codeberg.org/uzu/strudel/pulls/926"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["add pickF and pickmodF by @geikha in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/924",
            children: "https://codeberg.org/uzu/strudel/pulls/924"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Make splice cps-aware by @yaxu in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/932",
            children: "https://codeberg.org/uzu/strudel/pulls/932"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Refactor cps functions by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/933",
            children: "https://codeberg.org/uzu/strudel/pulls/933"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Add useful pattern selection behavior for performing. by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/897",
            children: "https://codeberg.org/uzu/strudel/pulls/897"
          })]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "other-fixes",
      children: ["Other Fixes", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#other-fixes",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "show"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["fix: finally repair envelopes by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/861",
            children: "https://codeberg.org/uzu/strudel/pulls/861"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: reverb regenerate loophole by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/726",
            children: "https://codeberg.org/uzu/strudel/pulls/726"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: reverb roomsize not required by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/731",
            children: "https://codeberg.org/uzu/strudel/pulls/731"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: reverb sampleRate by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/732",
            children: "https://codeberg.org/uzu/strudel/pulls/732"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["consume n with scale by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/727",
            children: "https://codeberg.org/uzu/strudel/pulls/727"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: hashes in urls by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/728",
            children: "https://codeberg.org/uzu/strudel/pulls/728"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["[Bug Fix] chooseWith: prevent pattern from stopping audio when selection is >= 1 or < 0 by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/741",
            children: "https://codeberg.org/uzu/strudel/pulls/741"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix addivite synthesis phases by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/762",
            children: "https://codeberg.org/uzu/strudel/pulls/762"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: scale offset by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/764",
            children: "https://codeberg.org/uzu/strudel/pulls/764"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix zen mode logo overlap by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/760",
            children: "https://codeberg.org/uzu/strudel/pulls/760"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: share copy to clipboard + alert by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/774",
            children: "https://codeberg.org/uzu/strudel/pulls/774"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: style issues by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/781",
            children: "https://codeberg.org/uzu/strudel/pulls/781"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix scope pos + document by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/786",
            children: "https://codeberg.org/uzu/strudel/pulls/786"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["don’t use anchor links for reference by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/791",
            children: "https://codeberg.org/uzu/strudel/pulls/791"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["remove unwanted cm6 outline for strudelTheme by @kasparsj in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/802",
            children: "https://codeberg.org/uzu/strudel/pulls/802"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["FIXES: palindrome abc -> abccba by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/831",
            children: "https://codeberg.org/uzu/strudel/pulls/831"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Bug Fix #119: Clock drift by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/874",
            children: "https://codeberg.org/uzu/strudel/pulls/874"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["bugfix: sound select indexes out of bounds by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/871",
            children: "https://codeberg.org/uzu/strudel/pulls/871"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Error tolerance by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/880",
            children: "https://codeberg.org/uzu/strudel/pulls/880"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: make sure n is never undefined before nanFallback by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/881",
            children: "https://codeberg.org/uzu/strudel/pulls/881"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: invisible selection on vim + emacs mode by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/889",
            children: "https://codeberg.org/uzu/strudel/pulls/889"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: autocomplete / tooltip code example bug by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/898",
            children: "https://codeberg.org/uzu/strudel/pulls/898"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix examples page, piano() and a few workshop imgs by @shiyouganai in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/848",
            children: "https://codeberg.org/uzu/strudel/pulls/848"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: trailing slash confusion by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/743",
            children: "https://codeberg.org/uzu/strudel/pulls/743"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: try different trailing slash behavior by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/744",
            children: "https://codeberg.org/uzu/strudel/pulls/744"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix krill build command in README by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/748",
            children: "https://codeberg.org/uzu/strudel/pulls/748"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix for #1. Enables named instruments for csoundm. by @gogins in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/662",
            children: "https://codeberg.org/uzu/strudel/pulls/662"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: missing hash for links starting with / by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/845",
            children: "https://codeberg.org/uzu/strudel/pulls/845"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: swatch png src by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/846",
            children: "https://codeberg.org/uzu/strudel/pulls/846"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix edge case with rehype-urls and trailing slashes in image file paths by @shiyouganai in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/849",
            children: "https://codeberg.org/uzu/strudel/pulls/849"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix: multiple repls by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/813",
            children: "https://codeberg.org/uzu/strudel/pulls/813"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix chunk, add fastChunk and repeatCycles by @yaxu in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/712",
            children: "https://codeberg.org/uzu/strudel/pulls/712"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Update tauri.yml workflow file by @vasilymilovidov in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/705",
            children: "https://codeberg.org/uzu/strudel/pulls/705"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["vite-vanilla-repl readme fix by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/737",
            children: "https://codeberg.org/uzu/strudel/pulls/737"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["completely revert config mess by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/745",
            children: "https://codeberg.org/uzu/strudel/pulls/745"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["hopefully fix trailing slashes bug by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/753",
            children: "https://codeberg.org/uzu/strudel/pulls/753"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Update vite pwa by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/772",
            children: "https://codeberg.org/uzu/strudel/pulls/772"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Update to Astro 3 by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/775",
            children: "https://codeberg.org/uzu/strudel/pulls/775"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["support multiple named serial connections, change default baudrate by @yaxu in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/551",
            children: "https://codeberg.org/uzu/strudel/pulls/551"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["CHANGES: github action checkout v2 -> v4 by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/837",
            children: "https://codeberg.org/uzu/strudel/pulls/837"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["CHANGES: pin pnpm to version 8.3.1 by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/834",
            children: "https://codeberg.org/uzu/strudel/pulls/834"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["CHANGES: github action pnpm version from 7 to 8.3.1 by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/835",
            children: "https://codeberg.org/uzu/strudel/pulls/835"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["ADDS: JetBrains IDE files and directories to .gitignore by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/840",
            children: "https://codeberg.org/uzu/strudel/pulls/840"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Prevent 404 on Algolia crawls by @ilesinge in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/838",
            children: "https://codeberg.org/uzu/strudel/pulls/838"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Add in fixes from my fork to slashocalypse branch by @shiyouganai in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/843",
            children: "https://codeberg.org/uzu/strudel/pulls/843"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["improve slashing + base href behavior by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/842",
            children: "https://codeberg.org/uzu/strudel/pulls/842"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["CHANGES: pnpm 8.1.3 to 8.11.0 by @bwagner in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/850",
            children: "https://codeberg.org/uzu/strudel/pulls/850"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["add missing trailing slashes by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/860",
            children: "https://codeberg.org/uzu/strudel/pulls/860"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["move all examples to separate examples folder by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/878",
            children: "https://codeberg.org/uzu/strudel/pulls/878"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Dependency update by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/879",
            children: "https://codeberg.org/uzu/strudel/pulls/879"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Update Vite version so hot reload works properly with newest pnpm version by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/892",
            children: "https://codeberg.org/uzu/strudel/pulls/892"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["prevent vite from complaining about additional exports in jsx files by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/891",
            children: "https://codeberg.org/uzu/strudel/pulls/891"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["fix some build warnings by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/902",
            children: "https://codeberg.org/uzu/strudel/pulls/902"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Remove hideHeader for better mobile UI and consistency by @rjulian in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/894",
            children: "https://codeberg.org/uzu/strudel/pulls/894"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix: swatch/[name].png.js static path by @oscarbyrne in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/916",
            children: "https://codeberg.org/uzu/strudel/pulls/916"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["rename @strudel.cycles/_ packages to @strudel/_ by @felixroos in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/917",
            children: "https://codeberg.org/uzu/strudel/pulls/917"
          })]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "pick"
          }), " now accepts lookup tables, with alternate cycle squeezing behaviour as new ", createVNode(_components.code, {
            children: "inhabit"
          }), " function by @yaxu in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/918",
            children: "https://codeberg.org/uzu/strudel/pulls/918"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Revert “", createVNode(_components.code, {
            children: "pick"
          }), " now accepts lookup tables, with alternate cycle squeezing behaviour as new ", createVNode(_components.code, {
            children: "inhabit"
          }), " function” by @yaxu in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/920",
            children: "https://codeberg.org/uzu/strudel/pulls/920"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Fix pattern tab not showing patterns without created date by @daslyfe in ", createVNode(_components.a, {
            href: "https://codeberg.org/uzu/strudel/pulls/934",
            children: "https://codeberg.org/uzu/strudel/pulls/934"
          })]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@ilesinge made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/748",
          children: "https://codeberg.org/uzu/strudel/pulls/748"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@Dsm0 made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/773",
          children: "https://codeberg.org/uzu/strudel/pulls/773"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@kasparsj made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/802",
          children: "https://codeberg.org/uzu/strudel/pulls/802"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@atfornes made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/818",
          children: "https://codeberg.org/uzu/strudel/pulls/818"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@drewgbarnes made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/830",
          children: "https://codeberg.org/uzu/strudel/pulls/830"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@shiyouganai made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/843",
          children: "https://codeberg.org/uzu/strudel/pulls/843"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@rjulian made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/894",
          children: "https://codeberg.org/uzu/strudel/pulls/894"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@fnordomat made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/907",
          children: "https://codeberg.org/uzu/strudel/pulls/907"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@oscarbyrne made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/916",
          children: "https://codeberg.org/uzu/strudel/pulls/916"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@geikha made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/924",
          children: "https://codeberg.org/uzu/strudel/pulls/924"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.9.0...v1.0.0",
        children: "https://codeberg.org/uzu/strudel/compare/v0.9.0…v1.0.0"
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

const url = "src/content/blog/release-1.0.0-geburtstagskuchen.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-1.0.0-geburtstagskuchen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
