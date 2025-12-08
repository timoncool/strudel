/* empty css                                        */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../../chunks/MiniRepl_Ntj7iAxy.mjs';
import { $ as $$Box } from '../../../chunks/Box_BjdITm45.mjs';
import 'react/jsx-runtime';
import 'react';
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
  "title": "Pattern-Effekte",
  "layout": "../../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "pattern-effekte",
    "text": "Pattern-Effekte"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    span: "span",
    strong: "strong",
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
      id: "pattern-effekte",
      children: ["Pattern-Effekte", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/pattern-effects/#pattern-effekte",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Bis jetzt sind die meisten Funktionen, die wir kennengelernt haben, ähnlich wie Funktionen in anderen Musik Programmen: Sequencing von Sounds, Noten und Effekten."
    }), "\n", createVNode(_components.p, {
      children: "In diesem Kapitel beschäftigen wir uns mit Funktionen die weniger herkömmlich oder auch einzigartig sind."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "rev = rückwärts abspielen"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 1 [4 3] 2").sound("jazz").rev()`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "jux = einen stereo kanal modifizieren"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 1 [4 3] 2").sound("jazz").jux(rev)`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["So würde man das ohne ", createVNode(_components.code, {
        children: "jux"
      }), " schreiben:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
n("0 1 [4 3] 2").sound("jazz").pan(0),
n("0 1 [4 3] 2").sound("jazz").pan(1).rev()
)`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Lass uns visualisieren, was hier passiert:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
n("0 1 [4 3] 2").sound("jazz").pan(0).color("cyan"),
n("0 1 [4 3] 2").sound("jazz").pan(1).color("magenta").rev()
)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Schreibe ", createVNode(_components.code, {
          children: "//"
        }), " vor eine der beiden Zeilen im ", createVNode(_components.code, {
          children: "stack"
        }), "!"]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "mehrere tempos"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c2, eb3 g3 [bb3 c4]").sound("piano").slow("1,2,3")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Das hat den gleichen Effekt, wie:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
note("c2, eb3 g3 [bb3 c4]").s("piano").slow(1).color('cyan'),
note("c2, eb3 g3 [bb3 c4]").s("piano").slow(2).color('magenta'),
note("c2, eb3 g3 [bb3 c4]").s("piano").slow(3).color('yellow')
)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Schreibe wieder ", createVNode(_components.code, {
          children: "//"
        }), " vor eine oder mehrere Zeilen im ", createVNode(_components.code, {
          children: "stack"
        }), "."]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "add = addieren"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c2 [eb3,g3]".add("<0 <1 -1>>"))
.color("<cyan <magenta yellow>>").adsr("[.1 0]:.2:[1 0]")
.sound("gm_acoustic_bass").room(.5)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Addiert man eine Zahl zu einer Note, verhält sich diese wie eine Zahl."
      }), createVNode(_components.p, {
        children: "z.B. c4 = 60, also ist c4 + 2 = 62"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Man kann auch mehrmals addieren:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c2 [eb3,g3]".add("<0 <1 -1>>").add("0,7"))
.color("<cyan <magenta yellow>>").adsr("[.1 0]:.2:[1 0]")
.sound("gm_acoustic_bass").room(.5)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "add + scale"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("<0 [2 4] <3 5> [~ <4 1>]>*2".add("<0 [0,2,4]>/4"))
.scale("C5:minor").release(.5)
.sound("gm_xylophone").room(.5)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Alles zusammen"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
n("<0 [2 4] <3 5> [~ <4 1>]>*2".add("<0 [0,2,4]>/4"))
.scale("C5:minor")
.sound("gm_xylophone")
.room(.4).delay(.125),
note("c2 [eb3,g3]".add("<0 <1 -1>>"))
.adsr("[.1 0]:.2:[1 0]")
.sound("gm_acoustic_bass")
.room(.5),
n("0 1 [2 3] 2").sound("jazz").jux(rev).slow(2)
)`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "ply"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh, bd rim").bank("RolandTR707").ply(2)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "das ist wie:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh*2, bd*2 rim*2").bank("RolandTR707")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Probier ", createVNode(_components.code, {
          children: "ply"
        }), " mit einem pattern zu automatisieren, z.b. ", createVNode(_components.code, {
          children: "\"<1 2 1 3>\""
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "off"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("<0 [4 <3 2>] <2 3> [~ 1]>"
.off(1/8, x=>x.add(4))
//.off(1/4, x=>x.add(7))
).scale("<C5:minor Db5:mixolydian>/4")
.s("triangle").room(.5).dec(.1).delay(.5)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["In der Notation ", createVNode(_components.code, {
          children: "x=>x."
        }), ", ist ", createVNode(_components.code, {
          children: "x"
        }), " das Pattern, das wir bearbeiten."]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "off"
      }), " ist auch nützlich für Sounds:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("bd sd,[~ hh]*2").bank("CasioRZ1")
.off(1/8, x=>x.speed(1.5).gain(.25))`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
            children: "rev"
          }), createVNode(_components.td, {
            children: "rückwärts"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 2 4 6").scale("C:minor").rev()`,
              "client:component-path": "@src/docs/MiniRepl",
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
              "client:component-path": "@src/docs/MiniRepl",
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
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "ply"
          }), createVNode(_components.td, {
            children: "multipliziert jedes Element x mal"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd sd").ply("<1 2 3>")`,
              "client:component-path": "@src/docs/MiniRepl",
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
              "client:component-path": "@src/docs/MiniRepl",
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

const url = "/de/workshop/pattern-effects";
const file = "/home/user/Bulka/website/src/pages/de/workshop/pattern-effects.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/de/workshop/pattern-effects.mdx";
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
