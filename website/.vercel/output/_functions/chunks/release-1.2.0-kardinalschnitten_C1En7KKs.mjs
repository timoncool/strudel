import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';

const frontmatter = {
  "title": "Release Notes v1.2.0",
  "description": "",
  "date": "2025-05-01",
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
    "slug": "highlights",
    "text": "highlights"
  }, {
    "depth": 2,
    "slug": "breaking-changes",
    "text": "breaking changes"
  }, {
    "depth": 3,
    "slug": "superdough",
    "text": "superdough"
  }, {
    "depth": 3,
    "slug": "docs",
    "text": "docs"
  }, {
    "depth": 3,
    "slug": "ui-improvements",
    "text": "ui improvements"
  }, {
    "depth": 3,
    "slug": "mqtt",
    "text": "mqtt"
  }, {
    "depth": 3,
    "slug": "new-functions",
    "text": "new functions"
  }, {
    "depth": 3,
    "slug": "more",
    "text": "more"
  }, {
    "depth": 3,
    "slug": "refactor",
    "text": "refactor"
  }, {
    "depth": 3,
    "slug": "fixes",
    "text": "fixes"
  }, {
    "depth": 2,
    "slug": "new-contributors",
    "text": "New Contributors"
  }, {
    "depth": 2,
    "slug": "packages",
    "text": "packages"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "highlights",
      children: ["highlights", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#highlights",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://strudel.cc/learn/stepwise/",
          children: "stepwise functions"
        }), " (", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1262",
          children: "PR"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://strudel.cc/learn/input-output/#midimaps",
          children: "midimaps"
        }), " (", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1274",
          children: "PR"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://strudel.cc/learn/visual-feedback/#spectrum",
          children: "spectrum"
        }), " (", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1213",
          children: "PR"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://strudel.cc/learn/input-output/#mqtt",
          children: "mqtt"
        }), " (", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1224",
          children: "PR"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["pulse oscillator (todo: ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/issues/1336",
          children: "https://github.com/tidalcycles/strudel/issues/1336"
        }), ") (", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1304",
          children: "PR"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: "theme improvements"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "breaking-changes",
      children: ["breaking changes", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#breaking-changes",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["[breaking change] Sample signals from query onset, rather than midpoint by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1278",
          children: "https://github.com/tidalcycles/strudel/pull/1278"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["change behaviour of polymeter, and remove polymeterSteps by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1302",
          children: "https://github.com/tidalcycles/strudel/pull/1302"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Polish, rename, and document stepwise functions by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1262",
          children: "https://github.com/tidalcycles/strudel/pull/1262"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "superdough",
      children: ["superdough", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#superdough",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["feat: Create Pulse Oscillator with variable PWM by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1304",
          children: "https://github.com/tidalcycles/strudel/pull/1304"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add num samples (edited numbers) by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1309",
          children: "https://github.com/tidalcycles/strudel/pull/1309"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add num samples from 0 up to 20 by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1310",
          children: "https://github.com/tidalcycles/strudel/pull/1310"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["feat: add max polyphony feature for superdough by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1317",
          children: "https://github.com/tidalcycles/strudel/pull/1317"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "docs",
      children: ["docs", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#docs",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["doc: visual functions + refactor onPaint by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1125",
          children: "https://github.com/tidalcycles/strudel/pull/1125"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Labeled statements doc by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1126",
          children: "https://github.com/tidalcycles/strudel/pull/1126"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Correct spelling mistakes by @EdwardBetts in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1183",
          children: "https://github.com/tidalcycles/strudel/pull/1183"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["remove redundant example for cat, update snapshot by @kdiab in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1189",
          children: "https://github.com/tidalcycles/strudel/pull/1189"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["chore: Edit run locally instructions in README.md by @ChinoUkaegbu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1206",
          children: "https://github.com/tidalcycles/strudel/pull/1206"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["suggested changes to voicings.mdx by @bwagner in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1231",
          children: "https://github.com/tidalcycles/strudel/pull/1231"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Documentation for all/each, and bugfix for each by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1233",
          children: "https://github.com/tidalcycles/strudel/pull/1233"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Update documentation for param value modification by @gillespi314 in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1238",
          children: "https://github.com/tidalcycles/strudel/pull/1238"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix docs for beat function by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1248",
          children: "https://github.com/tidalcycles/strudel/pull/1248"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["understand voicings page by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1230",
          children: "https://github.com/tidalcycles/strudel/pull/1230"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add reference package by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1252",
          children: "https://github.com/tidalcycles/strudel/pull/1252"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Stepwise documentation tweaks, with mridangam samples by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1275",
          children: "https://github.com/tidalcycles/strudel/pull/1275"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["showcase tweaks by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1291",
          children: "https://github.com/tidalcycles/strudel/pull/1291"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Signpost licenses for source code and samples a bit more, ref #1277 by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1289",
          children: "https://github.com/tidalcycles/strudel/pull/1289"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix misplaced ending sentence by @makmanalp in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1296",
          children: "https://github.com/tidalcycles/strudel/pull/1296"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix typo pattnr by @ReneNyffenegger in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1316",
          children: "https://github.com/tidalcycles/strudel/pull/1316"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update docs to reflect import sounds tab change by @hpunq in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1332",
          children: "https://github.com/tidalcycles/strudel/pull/1332"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "ui-improvements",
      children: ["ui improvements", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#ui-improvements",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Udels (MultiFrame Strudel) Revisited by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1132",
          children: "https://github.com/tidalcycles/strudel/pull/1132"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Create audio target selector for OSC/Superdirt by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1160",
          children: "https://github.com/tidalcycles/strudel/pull/1160"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add a search bar to the REPL Reference tab by @netux in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1165",
          children: "https://github.com/tidalcycles/strudel/pull/1165"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Adding search bar (soundtab.jsx) by @Bubobubobubobubo in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1185",
          children: "https://github.com/tidalcycles/strudel/pull/1185"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add 2 new ui settings by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1200",
          children: "https://github.com/tidalcycles/strudel/pull/1200"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Theme glowup by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1268",
          children: "https://github.com/tidalcycles/strudel/pull/1268"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Create Pattern Page Pagination by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1287",
          children: "https://github.com/tidalcycles/strudel/pull/1287"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["feat: Theme improvements by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1295",
          children: "https://github.com/tidalcycles/strudel/pull/1295"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["feat: new themes + theme improvements by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1326",
          children: "https://github.com/tidalcycles/strudel/pull/1326"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add new “import-sounds” tab with explanation on folder import by @hpunq in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1329",
          children: "https://github.com/tidalcycles/strudel/pull/1329"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add Icon to import sample button by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1331",
          children: "https://github.com/tidalcycles/strudel/pull/1331"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["better spacing in zen mode by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1147",
          children: "https://github.com/tidalcycles/strudel/pull/1147"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Screenreader improvements by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1158",
          children: "https://github.com/tidalcycles/strudel/pull/1158"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["colorize console + tweak header by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1203",
          children: "https://github.com/tidalcycles/strudel/pull/1203"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Menu Panel Improvements! by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1193",
          children: "https://github.com/tidalcycles/strudel/pull/1193"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Make panel hover behavior optional by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1199",
          children: "https://github.com/tidalcycles/strudel/pull/1199"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["REPL: solo and sync configuration by @bthj in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1214",
          children: "https://github.com/tidalcycles/strudel/pull/1214"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["enhancement: make error messages easier to read by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1315",
          children: "https://github.com/tidalcycles/strudel/pull/1315"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "mqtt",
      children: ["mqtt", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#mqtt",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["MQTT support by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1224",
          children: "https://github.com/tidalcycles/strudel/pull/1224"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["MQTT - if password isn’t provided, prompt for one by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1249",
          children: "https://github.com/tidalcycles/strudel/pull/1249"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["MQTT - support adding hap duration and cps metadata to JSON messages by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1279",
          children: "https://github.com/tidalcycles/strudel/pull/1279"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["make mqtt topic patternable by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1280",
          children: "https://github.com/tidalcycles/strudel/pull/1280"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Bugfix: update mqtt connections dictionary by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1281",
          children: "https://github.com/tidalcycles/strudel/pull/1281"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["mqtt bugfix - connection check by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1282",
          children: "https://github.com/tidalcycles/strudel/pull/1282"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "new-functions",
      children: ["new functions", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#new-functions",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Add scramble and shuffle by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1167",
          children: "https://github.com/tidalcycles/strudel/pull/1167"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["polyJoin by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1168",
          children: "https://github.com/tidalcycles/strudel/pull/1168"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add seqPLoop from Tidal by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1182",
          children: "https://github.com/tidalcycles/strudel/pull/1182"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add filter + filterWhen + within by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1039",
          children: "https://github.com/tidalcycles/strudel/pull/1039"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add bite function by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1187",
          children: "https://github.com/tidalcycles/strudel/pull/1187"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["markcss by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1202",
          children: "https://github.com/tidalcycles/strudel/pull/1202"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["“beat” function for “step sequencer” style rhythm notation by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1237",
          children: "https://github.com/tidalcycles/strudel/pull/1237"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add s_zip for ‘cat’-ing patterns together step-by-step, bugfix ", createVNode(_components.code, {
          children: "steps"
        }), " by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1208",
          children: "https://github.com/tidalcycles/strudel/pull/1208"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["“stretch” function (phase vocoder) by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1130",
          children: "https://github.com/tidalcycles/strudel/pull/1130"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add basic spectrum function by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1213",
          children: "https://github.com/tidalcycles/strudel/pull/1213"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add onKey function for custom key commands for patterns by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1235",
          children: "https://github.com/tidalcycles/strudel/pull/1235"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add binary and binaryN by @heerman in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1226",
          children: "https://github.com/tidalcycles/strudel/pull/1226"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["midimaps by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1274",
          children: "https://github.com/tidalcycles/strudel/pull/1274"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["small feat: Add alias for segment and ribbon by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1314",
          children: "https://github.com/tidalcycles/strudel/pull/1314"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["feat: Create scrub function for scrubbing an audio file by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1321",
          children: "https://github.com/tidalcycles/strudel/pull/1321"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["feat: Improve gain curve by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1318",
          children: "https://github.com/tidalcycles/strudel/pull/1318"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Chop chop by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1078",
          children: "https://github.com/tidalcycles/strudel/pull/1078"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "more",
      children: ["more", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#more",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Make ", createVNode(_components.code, {
          children: "all()"
        }), " post-stack again, and add ", createVNode(_components.code, {
          children: "each()"
        }), " for pre-stack by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1229",
          children: "https://github.com/tidalcycles/strudel/pull/1229"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Add stepBind, and some toplevel aliases for binds and withValue by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1241",
          children: "https://github.com/tidalcycles/strudel/pull/1241"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Make cps patternable by @eefano in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1001",
          children: "https://github.com/tidalcycles/strudel/pull/1001"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Allow wchooseCycles probabilities to be patterned by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1292",
          children: "https://github.com/tidalcycles/strudel/pull/1292"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@strudel/sampler improvements by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1288",
          children: "https://github.com/tidalcycles/strudel/pull/1288"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "refactor",
      children: ["refactor", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#refactor",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["expose comment commands by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1136",
          children: "https://github.com/tidalcycles/strudel/pull/1136"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["containerize/seperate out boolean checks for repl types/Repl logic into bespoke components. by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1163",
          children: "https://github.com/tidalcycles/strudel/pull/1163"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Improve + simplify neocyclist timing by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1164",
          children: "https://github.com/tidalcycles/strudel/pull/1164"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Make phaser control consistent with superdirt by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1178",
          children: "https://github.com/tidalcycles/strudel/pull/1178"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Revert “Make phaser control consistent with superdirt” by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1179",
          children: "https://github.com/tidalcycles/strudel/pull/1179"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["make phaser control match superdirt by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1180",
          children: "https://github.com/tidalcycles/strudel/pull/1180"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["refactor sampler by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1101",
          children: "https://github.com/tidalcycles/strudel/pull/1101"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["update lockfile + minor versions by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1198",
          children: "https://github.com/tidalcycles/strudel/pull/1198"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Preserve tactus for ‘degrade’ and friends, and tidy up ‘pick’ and friends by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1205",
          children: "https://github.com/tidalcycles/strudel/pull/1205"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Apply ", createVNode(_components.code, {
          children: "all"
        }), " function to individual patterns rather than final stack by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1209",
          children: "https://github.com/tidalcycles/strudel/pull/1209"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Revert “Fix sometimes” by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1267",
          children: "https://github.com/tidalcycles/strudel/pull/1267"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["patchday by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1264",
          children: "https://github.com/tidalcycles/strudel/pull/1264"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Rename repeat back to extend by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1285",
          children: "https://github.com/tidalcycles/strudel/pull/1285"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Send delta in OSC message in seconds, to match tidal/superdirt by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1323",
          children: "https://github.com/tidalcycles/strudel/pull/1323"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "fixes",
      children: ["fixes", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#fixes",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Fix clock worker dependency path in module builds by @matthewkaney in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1129",
          children: "https://github.com/tidalcycles/strudel/pull/1129"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix bug in Fraction.lcm by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1133",
          children: "https://github.com/tidalcycles/strudel/pull/1133"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix tactus marking in mininotation by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1144",
          children: "https://github.com/tidalcycles/strudel/pull/1144"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix loopAt tactus by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1145",
          children: "https://github.com/tidalcycles/strudel/pull/1145"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix OSC clock jitter by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1157",
          children: "https://github.com/tidalcycles/strudel/pull/1157"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["[CORS HOTFIX] by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1162",
          children: "https://github.com/tidalcycles/strudel/pull/1162"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fixes fit so it works after a chop or slice by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1171",
          children: "https://github.com/tidalcycles/strudel/pull/1171"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix sample speed when using splice and fit with superdirt by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1172",
          children: "https://github.com/tidalcycles/strudel/pull/1172"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["handle midin device not found error by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1146",
          children: "https://github.com/tidalcycles/strudel/pull/1146"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix serial timing by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1188",
          children: "https://github.com/tidalcycles/strudel/pull/1188"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix regression for d1, p1, p(n) by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1227",
          children: "https://github.com/tidalcycles/strudel/pull/1227"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix sometimes by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1243",
          children: "https://github.com/tidalcycles/strudel/pull/1243"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix sf2 timing by @felixroos in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1272",
          children: "https://github.com/tidalcycles/strudel/pull/1272"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix “squeezejoin” and functions using it, including “bite” by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1286",
          children: "https://github.com/tidalcycles/strudel/pull/1286"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fixes inverted triangle wave by renaming it to “itri”, making non-inverted “tri” by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1283",
          children: "https://github.com/tidalcycles/strudel/pull/1283"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Hotfix: prevent undefined pattern code from crashing strudel on load by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1297",
          children: "https://github.com/tidalcycles/strudel/pull/1297"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix test error #1297 by @nkymut in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1298",
          children: "https://github.com/tidalcycles/strudel/pull/1298"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["bugfix zoom stepcount by @yaxu in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1301",
          children: "https://github.com/tidalcycles/strudel/pull/1301"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["bugfix: Allow single param to be used in the as function by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1312",
          children: "https://github.com/tidalcycles/strudel/pull/1312"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: replace empty spaces in registered sound keys by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1319",
          children: "https://github.com/tidalcycles/strudel/pull/1319"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["FIX: Multichannel Audio by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1322",
          children: "https://github.com/tidalcycles/strudel/pull/1322"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: udels header by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1325",
          children: "https://github.com/tidalcycles/strudel/pull/1325"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: disable astro toolbar by default by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1324",
          children: "https://github.com/tidalcycles/strudel/pull/1324"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["FIX: sound import order by @daslyfe in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1333%60",
          children: "https://github.com/tidalcycles/strudel/pull/1333`"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@EdwardBetts made their first contribution in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1183",
          children: "https://github.com/tidalcycles/strudel/pull/1183"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@netux made their first contribution in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1165",
          children: "https://github.com/tidalcycles/strudel/pull/1165"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@kdiab made their first contribution in ", createVNode(_components.a, {
          href: "https://github.com/tidalcycles/strudel/pull/1189",
          children: "https://github.com/tidalcycles/strudel/pull/1189"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://github.com/tidalcycles/strudel/compare/v1.1.0...v1.1.1",
        children: "https://github.com/tidalcycles/strudel/compare/v1.1.0…v1.1.1"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "packages",
      children: ["packages", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten/#packages",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "@strudel/codemirror@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/core@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/csound@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/draw@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/gamepad@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/hydra@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/midi@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/mini@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/motion@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/mqtt@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/osc@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/reference@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/repl@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/sampler@0.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/serial@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/soundfonts@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "superdough@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/tonal@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/transpiler@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/web@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/webaudio@1.2.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/xen@1.2.0"
      }), "\n"]
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

const url = "src/content/blog/release-1.2.0-kardinalschnitten.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-1.2.0-kardinalschnitten.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
