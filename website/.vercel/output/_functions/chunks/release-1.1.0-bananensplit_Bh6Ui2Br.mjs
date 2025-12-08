import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';
import 'react/jsx-runtime';
import 'react-lite-youtube-embed';
/* empty css                                    */

const frontmatter = {
  "title": "Release Notes v1.1.0",
  "description": "",
  "date": "2024-06-02",
  "tags": ["meta"],
  "author": "froos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "new-dsp-features",
    "text": "New DSP Features"
  }, {
    "depth": 3,
    "slug": "stereo-supersaw",
    "text": "Stereo Supersaw"
  }, {
    "depth": 3,
    "slug": "analog-ladder-filter-type",
    "text": "Analog “ladder” filter type"
  }, {
    "depth": 3,
    "slug": "stereo-distortion-effect",
    "text": "stereo distortion effect"
  }, {
    "depth": 2,
    "slug": "editor-features",
    "text": "Editor Features"
  }, {
    "depth": 3,
    "slug": "inline-viz",
    "text": "inline viz"
  }, {
    "depth": 3,
    "slug": "label-notation",
    "text": "label notation"
  }, {
    "depth": 3,
    "slug": "clock-sync-between-multiple-instances",
    "text": "Clock sync between multiple instances"
  }, {
    "depth": 3,
    "slug": "better-sample-upload-support",
    "text": "Better sample upload support"
  }, {
    "depth": 3,
    "slug": "experimental-tidal-syntax",
    "text": "experimental tidal syntax"
  }, {
    "depth": 2,
    "slug": "breaking-changes",
    "text": "breaking changes"
  }, {
    "depth": 2,
    "slug": "superdough-features",
    "text": "superdough features"
  }, {
    "depth": 2,
    "slug": "editor--ui-features",
    "text": "editor / ui features"
  }, {
    "depth": 2,
    "slug": "language-features",
    "text": "language features"
  }, {
    "depth": 2,
    "slug": "sampler",
    "text": "sampler"
  }, {
    "depth": 2,
    "slug": "docs",
    "text": "docs"
  }, {
    "depth": 2,
    "slug": "internals",
    "text": "internals"
  }, {
    "depth": 2,
    "slug": "fixes",
    "text": "fixes"
  }, {
    "depth": 2,
    "slug": "new-contributors",
    "text": "New Contributors"
  }, {
    "depth": 2,
    "slug": "packages",
    "text": "Packages"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "These are the release notes for Strudel 1.1.0 aka “Bananensplit”."
    }), "\n", createVNode(_components.p, {
      children: "The last release was over 19 weeks ago, so a lot of things have happened!"
    }), "\n", createVNode(_components.p, {
      children: "First, here’s a little demo, teasing some of the new features:"
    }), "\n", "\n", createVNode("astro-client-only", {
      "client:only": "react",
      id: "2Qu5lMHruio",
      "client:display-name": "Youtube",
      "client:component-path": "@src/components/Youtube",
      "client:component-export": "Youtube",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Let’s write up some of the highlights:"
    }), "\n", createVNode(_components.h2, {
      id: "new-dsp-features",
      children: ["New DSP Features", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#new-dsp-features",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "stereo-supersaw",
      children: ["Stereo Supersaw", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#stereo-supersaw",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "with spread, unison, and detune parameters"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "note(\"d f a a# a d3\").fast(2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: ".s(\"supersaw\").spread(\".8\").detune(.3).unison(\"2 7\")"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "analog-ladder-filter-type",
      children: ["Analog “ladder” filter type", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#analog-ladder-filter-type",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "works great for acid basslines and vibey tones"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "note(\"{d d d a a# d3 f4}%16\".sub(12)).gain(1).s(\"sawtooth\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: ".lpf(200).lpenv(slider(1.36,0,8)).lpq(7).distort(\"1.5:.7\")`"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: ".ftype('ladder')"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "stereo-distortion-effect",
      children: ["stereo distortion effect", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#stereo-distortion-effect",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "note(\"{g g a# g g4}%8\".add(\"{0 7 12 0}%8\")).lpf(500)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: ".s(\"supersaw\").dist(\"4:.2\")"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "editor-features",
      children: ["Editor Features", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#editor-features",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "inline-viz",
      children: ["inline viz", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#inline-viz",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The editor now supports multiple visuals within the code, using the ", createVNode(_components.code, {
        children: "_"
      }), " prefix for viz functions:"]
    }), "\n", createVNode("img", {
      width: "595",
      alt: "Screenshot 2024-06-01 at 01 23 51",
      src: "https://codeberg.org/uzu/strudel/assets/12023032/978fee85-e533-4da6-a245-d20d0083f57e"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "._pianoroll()"
        }), ": inline pianoroll"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "._punchcard()"
        }), ": inline punchcard"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "._scope()"
        }), ": inline scope"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "._pitchwheel()"
        }), ": inline pitchwheel"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For more info, check out the new ", createVNode(_components.a, {
        href: "https://strudel.cc/learn/visual-feedback/",
        children: "Visual Feedback Page"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "label-notation",
      children: ["label notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#label-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "This new notation simplifies writing patterns at the top level:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "d1: s(\"bd*4\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "d2: s(\"[- hh]*4\")"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This is equivalent to:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "stack("
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  s(\"bd*4\"),"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  s(\"[- hh]*4\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The labels you choose are arbitrary, the above ", createVNode(_components.code, {
        children: "d1"
      }), " and ", createVNode(_components.code, {
        children: "d2"
      }), " are a typical thing you’d write in tidal, for example ", createVNode(_components.code, {
        children: "d1 $ s \"bd*4\""
      }), ".\nIf the same label is used multiple times, the last one wins:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "d1: s(\"bd*4\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "d1: s(\"[- hh]*4\") // <-- only this plays"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["There is a special label anonymous label ", createVNode(_components.code, {
        children: "$"
      }), ", which can appear multiple times without overriding itself:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// both of these will play:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$: s(\"bd*4\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$: s(\"[- hh]*4\")"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can mute a pattern by prefixing ", createVNode(_components.code, {
        children: "_"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "_$: s(\"bd*4\") // <-- this one is muted"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$: s(\"[- hh]*4\")"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["To run a transformation on all patterns, you can use ", createVNode(_components.code, {
        children: "all"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$: s(\"bd*4\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$: s(\"[- hh]*4\")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "all(x=>x.room(.5))"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This notation is now the recommended way to ", createVNode(_components.a, {
        href: "https://strudel.cc/workshop/first-notes/#playing-multiple-patterns",
        children: "play patterns in parallel"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "clock-sync-between-multiple-instances",
      children: ["Clock sync between multiple instances", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#clock-sync-between-multiple-instances",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["timing has received a major overhaul, and is now much more accurate on all browsers. Additionally, you can now sync timing across multiple windows.\n", createVNode(_components.img, {
        src: "https://codeberg.org/uzu/strudel/assets/47068718/840be744-a13e-4d7b-ab09-50d3a70b1f85",
        alt: "Screenshot 2024-06-02 at 11 24 40 PM"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "better-sample-upload-support",
      children: ["Better sample upload support", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#better-sample-upload-support",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "you can now upload large amounts of samples much faster across all browsers including on IOS devices. supported filetypes now include: ogg flac mp3 wav aac m4a"
    }), "\n", createVNode(_components.h3, {
      id: "experimental-tidal-syntax",
      children: ["experimental tidal syntax", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#experimental-tidal-syntax",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The new ", createVNode(_components.code, {
        children: "tidal"
      }), " function allows you to write strudel patterns in tidal syntax:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "await initTidal()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "tidal`"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "d1 $ s \"bd*4\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "d2 $ s \"[- hh]*4\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "`"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "As we’re looking to improve compatibility with tidal, we’re happy to hear feedback."
    }), "\n", createVNode(_components.h2, {
      id: "breaking-changes",
      children: ["breaking changes", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#breaking-changes",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["This release comes with a bunch of breaking changes. If you find your patterns to sound different, check out the PRs below for guidance on how to update them. Most of these changes shouldn’t affect a lot of patterns.\nIn case of doubt, add the line ", createVNode(_components.code, {
        children: "// @version 1.0"
      }), " to your old pattern.\nIf you’re having problems, please let us know!"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["remove legacy legato + duration implementations by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/965",
          children: "https://codeberg.org/uzu/strudel/pull/965"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Velocity in value by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/974",
          children: "https://codeberg.org/uzu/strudel/pull/974"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["use ireal as default voicing dict by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/967",
          children: "https://codeberg.org/uzu/strudel/pull/967"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Color in hap value by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1007",
          children: "https://codeberg.org/uzu/strudel/pull/1007"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["rename trig -> reset, trigzero -> restart by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1010",
          children: "https://codeberg.org/uzu/strudel/pull/1010"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["remove dangerous arithmetic feature by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1030",
          children: "https://codeberg.org/uzu/strudel/pull/1030"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["change fanchor to 0 by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1107",
          children: "https://codeberg.org/uzu/strudel/pull/1107"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "superdough-features",
      children: ["superdough features", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#superdough-features",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["replace shape with distort in learn doc by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/982",
          children: "https://codeberg.org/uzu/strudel/pull/982"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Worklet Improvents / fixes by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/963",
          children: "https://codeberg.org/uzu/strudel/pull/963"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["supersaw oscillator by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/978",
          children: "https://codeberg.org/uzu/strudel/pull/978"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add analog-style ladder filter by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1103",
          children: "https://codeberg.org/uzu/strudel/pull/1103"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Calculate phaser modulation phase based on time by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1110",
          children: "https://codeberg.org/uzu/strudel/pull/1110"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["rollback phaser by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1113",
          children: "https://codeberg.org/uzu/strudel/pull/1113"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "editor--ui-features",
      children: ["editor / ui features", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#editor--ui-features",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["‘Enable Bracket Matching’ option in Codemirror by @eefano ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/956",
          children: "https://codeberg.org/uzu/strudel/pull/956"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["REPL sync between windows by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/900",
          children: "https://codeberg.org/uzu/strudel/pull/900"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["inline viz / widgets package by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/989",
          children: "https://codeberg.org/uzu/strudel/pull/989"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Inline punchcard + spiral by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1008",
          children: "https://codeberg.org/uzu/strudel/pull/1008"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["More fonts by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1023",
          children: "https://codeberg.org/uzu/strudel/pull/1023"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["better theme integration for visuals + various fixes by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1024",
          children: "https://codeberg.org/uzu/strudel/pull/1024"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add setting for sync flag by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1025",
          children: "https://codeberg.org/uzu/strudel/pull/1025"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add closeBrackets setting by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1031",
          children: "https://codeberg.org/uzu/strudel/pull/1031"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add font file types to offline cache by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1032",
          children: "https://codeberg.org/uzu/strudel/pull/1032"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["pitchwheel visual by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1041",
          children: "https://codeberg.org/uzu/strudel/pull/1041"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["repl: set document.title from @title by @kasparsj ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1090",
          children: "https://codeberg.org/uzu/strudel/pull/1090"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Samples tab improvements by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1102",
          children: "https://codeberg.org/uzu/strudel/pull/1102"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "language-features",
      children: ["language features", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#language-features",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["pickOut(), pickRestart(), pickReset() by @eefano ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/950",
          children: "https://codeberg.org/uzu/strudel/pull/950"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Auto await samples by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/955",
          children: "https://codeberg.org/uzu/strudel/pull/955"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["feat: can now invert euclid pulses with negative numbers by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/959",
          children: "https://codeberg.org/uzu/strudel/pull/959"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Nested controls by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/973",
          children: "https://codeberg.org/uzu/strudel/pull/973"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["alias - for ~ by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/981",
          children: "https://codeberg.org/uzu/strudel/pull/981"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Beat-oriented functionality by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/976",
          children: "https://codeberg.org/uzu/strudel/pull/976"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Labeled statements by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/991",
          children: "https://codeberg.org/uzu/strudel/pull/991"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["accidentals in scale degrees by @eefano ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1000",
          children: "https://codeberg.org/uzu/strudel/pull/1000"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Feature: tactus marking by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1021",
          children: "https://codeberg.org/uzu/strudel/pull/1021"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Tactus tidy by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1027",
          children: "https://codeberg.org/uzu/strudel/pull/1027"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Wax, wane, taper and taperlist by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1042",
          children: "https://codeberg.org/uzu/strudel/pull/1042"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["transpose: support all combinations of numbers and strings for notes and intervals by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1048",
          children: "https://codeberg.org/uzu/strudel/pull/1048"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["anonymous patterns + muting by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1059",
          children: "https://codeberg.org/uzu/strudel/pull/1059"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add swing + swingBy by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1038",
          children: "https://codeberg.org/uzu/strudel/pull/1038"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Stepwise functions from Tidal by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1060",
          children: "https://codeberg.org/uzu/strudel/pull/1060"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Tactus tweaks - fixes for maintaining tactus and highlight locations by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1065",
          children: "https://codeberg.org/uzu/strudel/pull/1065"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix stepjoin by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1067",
          children: "https://codeberg.org/uzu/strudel/pull/1067"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["More tactus tidying by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1071",
          children: "https://codeberg.org/uzu/strudel/pull/1071"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Tactus calculation toggle and breaking change to tactus calculation in fast/slow/hurry by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1081",
          children: "https://codeberg.org/uzu/strudel/pull/1081"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["hs2js package / tidal parser by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/870",
          children: "https://codeberg.org/uzu/strudel/pull/870"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add the mousex and mousey signal by @Enelg52 ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1112",
          children: "https://codeberg.org/uzu/strudel/pull/1112"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["can now access strudelMirror from repl by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1117",
          children: "https://codeberg.org/uzu/strudel/pull/1117"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sampler",
      children: ["sampler", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#sampler",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["If you have nodejs installed on your system, you can now use ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/@strudel/sampler",
        children: "@strudel/sampler"
      }), " to serve samples from disk to the REPL or flok."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["local sample server cli by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1033",
          children: "https://codeberg.org/uzu/strudel/pull/1033"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix sampler paths by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1034",
          children: "https://codeberg.org/uzu/strudel/pull/1034"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix sampler windows by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1108",
          children: "https://codeberg.org/uzu/strudel/pull/1108"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix sampler on windows by @geikha ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1109",
          children: "https://codeberg.org/uzu/strudel/pull/1109"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "docs",
      children: ["docs", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#docs",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["V1 release notes by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/935",
          children: "https://codeberg.org/uzu/strudel/pull/935"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Minor documentation error: Update first-sounds.mdx by @mhetrick ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/941",
          children: "https://codeberg.org/uzu/strudel/pull/941"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update synths.mdx by @andresgottlieb ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/984",
          children: "https://codeberg.org/uzu/strudel/pull/984"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["using strudel in your project guide + cleanup examples by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1006",
          children: "https://codeberg.org/uzu/strudel/pull/1006"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Document signals by @ilesinge ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1015",
          children: "https://codeberg.org/uzu/strudel/pull/1015"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["improve tutorial + custom samples doc by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1053",
          children: "https://codeberg.org/uzu/strudel/pull/1053"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix cr typo on first-sounds.mdx by @cleary ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1068",
          children: "https://codeberg.org/uzu/strudel/pull/1068"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix first sounds typo by @cleary ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1069",
          children: "https://codeberg.org/uzu/strudel/pull/1069"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add ", createVNode(_components.code, {
          children: "<...>"
        }), " to first-sounds.mdx recap by @cleary ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1070",
          children: "https://codeberg.org/uzu/strudel/pull/1070"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add nesting to ", createVNode(_components.code, {
          children: "off"
        }), " example variation in pattern-effects.mdx by @cleary ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1075",
          children: "https://codeberg.org/uzu/strudel/pull/1075"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix translation issue in first-effects.mdx by @cleary ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1072",
          children: "https://codeberg.org/uzu/strudel/pull/1072"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add signals to recap in first-effects.mdx by @cleary ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1073",
          children: "https://codeberg.org/uzu/strudel/pull/1073"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix docs on alignment.mdx by @diegodorado ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1076",
          children: "https://codeberg.org/uzu/strudel/pull/1076"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix little dub tune example by @lukad ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1104",
          children: "https://codeberg.org/uzu/strudel/pull/1104"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["clarify ", createVNode(_components.code, {
          children: "off"
        }), " in pattern-effects.mdx by @cleary ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1074",
          children: "https://codeberg.org/uzu/strudel/pull/1074"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fixes drawPianoroll import in codemirror example by @giohappy ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1116",
          children: "https://codeberg.org/uzu/strudel/pull/1116"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Migrate tutorial fanchor by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1122",
          children: "https://codeberg.org/uzu/strudel/pull/1122"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "internals",
      children: ["internals", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#internals",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["remove cjs builds by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/945",
          children: "https://codeberg.org/uzu/strudel/pull/945"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["controls refactoring: simplify exports by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/962",
          children: "https://codeberg.org/uzu/strudel/pull/962"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["move canvas related helpers from core to new draw package by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/971",
          children: "https://codeberg.org/uzu/strudel/pull/971"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["remove canvas, externalize samples, delete junk by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1003",
          children: "https://codeberg.org/uzu/strudel/pull/1003"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Improve performance of ! (replicate) by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1084",
          children: "https://codeberg.org/uzu/strudel/pull/1084"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Benchmarks by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1079",
          children: "https://codeberg.org/uzu/strudel/pull/1079"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "fixes",
      children: ["fixes", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#fixes",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["fix midi issue on firefox and added quote error by @Enelg52 ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/936",
          children: "https://codeberg.org/uzu/strudel/pull/936"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: pianoroll sorting by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/938",
          children: "https://codeberg.org/uzu/strudel/pull/938"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["account for cps in midi time duration by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/954",
          children: "https://codeberg.org/uzu/strudel/pull/954"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix script importable packages (web + repl) by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/957",
          children: "https://codeberg.org/uzu/strudel/pull/957"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: reset global fx on pattern change by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/960",
          children: "https://codeberg.org/uzu/strudel/pull/960"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add debounce to logger by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/968",
          children: "https://codeberg.org/uzu/strudel/pull/968"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix for transpose(): preserve hap value object structure by @eefano ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/966",
          children: "https://codeberg.org/uzu/strudel/pull/966"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: clear hydra on reset by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/983",
          children: "https://codeberg.org/uzu/strudel/pull/983"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["little fix for withVal by @eefano ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/980",
          children: "https://codeberg.org/uzu/strudel/pull/980"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: share now shares what’s visible instead of active by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/985",
          children: "https://codeberg.org/uzu/strudel/pull/985"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix pure mini highlight by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/994",
          children: "https://codeberg.org/uzu/strudel/pull/994"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: await injectPatternMethods by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1012",
          children: "https://codeberg.org/uzu/strudel/pull/1012"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update undocumented script by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1013",
          children: "https://codeberg.org/uzu/strudel/pull/1013"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["eliminate chromium clock jitter by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1004",
          children: "https://codeberg.org/uzu/strudel/pull/1004"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Repl sync fixes by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1014",
          children: "https://codeberg.org/uzu/strudel/pull/1014"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["hotfix for 1017 by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1020",
          children: "https://codeberg.org/uzu/strudel/pull/1020"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix cyclist fizzling out by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1046",
          children: "https://codeberg.org/uzu/strudel/pull/1046"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Midi Time hotfix for scheduler updates by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1047",
          children: "https://codeberg.org/uzu/strudel/pull/1047"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: do not reset cc input values on each eval by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1054",
          children: "https://codeberg.org/uzu/strudel/pull/1054"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix wchooseCycles not picking the whole pattern by @ilesinge ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1061",
          children: "https://codeberg.org/uzu/strudel/pull/1061"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix OSC timing for recent scheduler updates by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1062",
          children: "https://codeberg.org/uzu/strudel/pull/1062"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["clarify license by @yaxu ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1064",
          children: "https://codeberg.org/uzu/strudel/pull/1064"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix failing format test by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1077",
          children: "https://codeberg.org/uzu/strudel/pull/1077"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: url parsing with extra params by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1083",
          children: "https://codeberg.org/uzu/strudel/pull/1083"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: csound + dough timing by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1086",
          children: "https://codeberg.org/uzu/strudel/pull/1086"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: missing events due to premature worklet cleanup by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1089",
          children: "https://codeberg.org/uzu/strudel/pull/1089"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Use sessionStorage for viewingPatternData and activePattern by @kasparsj ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1091",
          children: "https://codeberg.org/uzu/strudel/pull/1091"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["osc: couple of fixes by @kasparsj ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1093",
          children: "https://codeberg.org/uzu/strudel/pull/1093"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["web package fixes by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1044",
          children: "https://codeberg.org/uzu/strudel/pull/1044"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix audio worklets by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1114",
          children: "https://codeberg.org/uzu/strudel/pull/1114"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: use full repl in web package by @felixroos ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1119",
          children: "https://codeberg.org/uzu/strudel/pull/1119"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["[BUG FIX] Audio worklets sometimes dont load by @daslyfe ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1121",
          children: "https://codeberg.org/uzu/strudel/pull/1121"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@mhetrick made their first contribution ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/941",
          children: "https://codeberg.org/uzu/strudel/pull/941"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@eefano made their first contribution ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/956",
          children: "https://codeberg.org/uzu/strudel/pull/956"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@Enelg52 made their first contribution ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/936",
          children: "https://codeberg.org/uzu/strudel/pull/936"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@andresgottlieb made their first contribution ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/984",
          children: "https://codeberg.org/uzu/strudel/pull/984"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@cleary made their first contribution ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1068",
          children: "https://codeberg.org/uzu/strudel/pull/1068"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@diegodorado made their first contribution ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1076",
          children: "https://codeberg.org/uzu/strudel/pull/1076"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@lukad made their first contribution ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1104",
          children: "https://codeberg.org/uzu/strudel/pull/1104"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@giohappy made their first contribution ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pull/1116",
          children: "https://codeberg.org/uzu/strudel/pull/1116"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "A huge thanks to all contributors!!!"
    }), "\n", createVNode(_components.h2, {
      id: "packages",
      children: ["Packages", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit/#packages",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "@strudel/codemirror@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/core@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/csound@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/draw@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/embed@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "hs2js@0.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/hydra@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/midi@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/mini@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/osc@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/repl@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/sampler@0.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/serial@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/soundfonts@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "superdough@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/tidal@0.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/tonal@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/transpiler@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/web@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/webaudio@1.1.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/xen@1.1.0"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v1.0.0...v1.1.0",
        children: "https://codeberg.org/uzu/strudel/compare/v1.0.0…v1.1.0"
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

const url = "src/content/blog/release-1.1.0-bananensplit.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-1.1.0-bananensplit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
