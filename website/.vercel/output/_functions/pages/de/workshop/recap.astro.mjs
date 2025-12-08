/* empty css                                        */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../../chunks/MiniRepl_Ntj7iAxy.mjs';
export { renderers } from '../../../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$MainLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "title": "Recap",
  "layout": "../../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "workshop-rückblick",
    "text": "Workshop Rückblick"
  }, {
    "depth": 2,
    "slug": "mini-notation",
    "text": "Mini Notation"
  }, {
    "depth": 2,
    "slug": "sounds",
    "text": "Sounds"
  }, {
    "depth": 2,
    "slug": "noten",
    "text": "Noten"
  }, {
    "depth": 2,
    "slug": "audio-effekte",
    "text": "Audio-Effekte"
  }, {
    "depth": 2,
    "slug": "pattern-effekte",
    "text": "Pattern-Effekte"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "workshop-rückblick",
      children: ["Workshop Rückblick", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/recap/#workshop-rückblick",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Diese Seite ist eine Auflistung aller im Workshop vorgestellten Funktionen."
    }), "\n", createVNode(_components.h2, {
      id: "mini-notation",
      children: ["Mini Notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/recap/#mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Konzept"
          }), createVNode(_components.th, {
            children: "Syntax"
          }), createVNode(_components.th, {
            children: "Beispiel"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Sequenz"
          }), createVNode(_components.td, {
            children: "space"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd bd sn hh")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Sample-Nummer"
          }), createVNode(_components.td, {
            children: ":x"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("hh:0 hh:1 hh:2 hh:3")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Pausen"
          }), createVNode(_components.td, {
            children: "~"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("metal ~ jazz jazz:1")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Unter-Sequenzen"
          }), createVNode(_components.td, {
            children: "[]"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd wind [metal jazz] hh")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Unter-Unter-Sequenzen"
          }), createVNode(_components.td, {
            children: "[[]]"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd [metal [jazz sn]]")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Schneller"
          }), createVNode(_components.td, {
            children: "*"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sn*2 cp*3")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Verlangsamen"
          }), createVNode(_components.td, {
            children: "/"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("[c a f e]/2")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Parallel"
          }), createVNode(_components.td, {
            children: ","
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd*2, hh*2 [hh oh]")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Alternieren"
          }), createVNode(_components.td, {
            children: "<>"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c <e g>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Verlängern"
          }), createVNode(_components.td, {
            children: "@"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c@3 e")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Wiederholen"
          }), createVNode(_components.td, {
            children: "!"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c!3 e")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "sounds",
      children: ["Sounds", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/recap/#sounds",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Name"
          }), createVNode(_components.th, {
            children: "Beschreibung"
          }), createVNode(_components.th, {
            children: "Beispiel"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "sound"
          }), createVNode(_components.td, {
            children: "spielt den Sound mit Namen"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "bank"
          }), createVNode(_components.td, {
            children: "wählt die Soundbank"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd").bank("RolandTR909")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "n"
          }), createVNode(_components.td, {
            children: "wählt Sample mit Nummer"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 1 4 2").sound("jazz")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "noten",
      children: ["Noten", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/recap/#noten",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Name"
          }), createVNode(_components.th, {
            children: "Beschreibung"
          }), createVNode(_components.th, {
            children: "Beispiel"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "note"
          }), createVNode(_components.td, {
            children: "wählt Note per Zahl oder Buchstabe"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("b g e c").sound("piano")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "n + scale"
          }), createVNode(_components.td, {
            children: "wählt Note n in Skala"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("6 4 2 0").scale("C:minor").sound("piano")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "stack"
          }), createVNode(_components.td, {
            children: "spielt mehrere Patterns parallel"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `stack(s("bd sd"),note("c eb g"))`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "audio-effekte",
      children: ["Audio-Effekte", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/recap/#audio-effekte",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Name"
          }), createVNode(_components.th, {
            children: "Beispiele"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "lpf"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c2 c3").s("sawtooth").lpf("<400 2000>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "vowel"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c3 eb3 g3").s("sawtooth").vowel("<a e i o>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "gain"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("hh*8").gain("[.25 1]*2")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "delay"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim").delay(.5)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "room"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim").room(.5)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "pan"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim").pan("0 1")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "speed"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim").speed("<1 2 -1 -2>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "range"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("hh*16").lpf(saw.range(200,4000))`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "pattern-effekte",
      children: ["Pattern-Effekte", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/recap/#pattern-effekte",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Name"
          }), createVNode(_components.th, {
            children: "Beschreibung"
          }), createVNode(_components.th, {
            children: "Beispiel"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "setcpm"
          }), createVNode(_components.td, {
            children: "Tempo in Cycles pro Minute"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `setcpm(90); sound("bd sd")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "fast"
          }), createVNode(_components.td, {
            children: "schneller"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd").fast(2)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "slow"
          }), createVNode(_components.td, {
            children: "langsamer"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd").slow(2)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "rev"
          }), createVNode(_components.td, {
            children: "rückwärts"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 2 4 6").scale("C:minor").rev()`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "jux"
          }), createVNode(_components.td, {
            children: "einen Stereo-Kanal modifizieren"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 2 4 6").scale("C:minor").jux(rev)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "add"
          }), createVNode(_components.td, {
            children: "addiert Zahlen oder Noten"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 2 4 6".add("<0 1 2 1>")).scale("C:minor")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "ply"
          }), createVNode(_components.td, {
            children: "jedes Element schneller machen"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd sd").ply("<1 2 3>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "off"
          }), createVNode(_components.td, {
            children: "verzögert eine modifizierte Kopie"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd sd, hh*4").off(1/8, x=>x.speed(2))`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/de/workshop/recap";
const file = "/home/user/Bulka/website/src/pages/de/workshop/recap.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/de/workshop/recap.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
