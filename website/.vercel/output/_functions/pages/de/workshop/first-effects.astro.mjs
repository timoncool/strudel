/* empty css                                        */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../../chunks/MiniRepl_Ntj7iAxy.mjs';
import { Q as QA } from '../../../chunks/QA_BwfHhPpt.mjs';
import { $ as $$Box } from '../../../chunks/Box_BjdITm45.mjs';
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
  "title": "Erste Effekte",
  "layout": "../../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "erste-effekte",
    "text": "Erste Effekte"
  }, {
    "depth": 2,
    "slug": "ein-paar-grundlegende-effekte",
    "text": "Ein paar grundlegende Effekte"
  }, {
    "depth": 2,
    "slug": "automation-mit-signalen",
    "text": "Automation mit Signalen"
  }, {
    "depth": 2,
    "slug": "rückblick",
    "text": "Rückblick"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "erste-effekte",
      children: ["Erste Effekte", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-effects/#erste-effekte",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", "\n", createVNode(_components.h2, {
      id: "ein-paar-grundlegende-effekte",
      children: ["Ein paar grundlegende Effekte", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-effects/#ein-paar-grundlegende-effekte",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "low-pass filter"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>/2")
.sound("sawtooth").lpf(800)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["lpf = ", createVNode(_components.strong, {
          children: "l"
        }), "ow ", createVNode(_components.strong, {
          children: "p"
        }), "ass ", createVNode(_components.strong, {
          children: "f"
        }), "ilter"]
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Ändere ", createVNode(_components.code, {
            children: "lpf"
          }), " in 200. Hörst du, wie der Bass dumpfer klingt? Es klingt so, als würde die Musik hinter einer geschlossenen Tür spielen 🚪"]
        }), "\n", createVNode(_components.li, {
          children: ["Lass uns nun die Tür öffnen: Ändere ", createVNode(_components.code, {
            children: "lpf"
          }), " in 5000. Der Klang wird dadurch viel heller und schärfer ✨🪩"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "filter automatisieren"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>/2")
.sound("sawtooth").lpf("200 1000")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Füg noch mehr ", createVNode(_components.code, {
            children: "lpf"
          }), " Werte hinzu"]
        }), "\n", createVNode(_components.li, {
          children: ["Das Pattern in ", createVNode(_components.code, {
            children: "lpf"
          }), " ändert nicht den Rhythmus der Basslinie"]
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Später sehen wir, wie man mit Wellenformen Dinge automatisieren kann."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "vowel = Vokal"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c3,g3,e4] [bb2,f3,d4] [a2,f3,c4] [bb2,g3,eb4]>/2")
.sound("sawtooth").vowel("<a e i o>/2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "gain = Verstärkung"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
sound("hh*8").gain("[.25 1]*2"),
sound("bd*2,~ sd:1")
) `,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Bei Rhythmen ist die Dynamik (= Veränderungen der Lautstärke) sehr wichtig."
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Entferne ", createVNode(_components.code, {
            children: ".gain(...)"
          }), " und achte darauf, wie es viel flacher klingt."]
        }), "\n", createVNode(_components.li, {
          children: "Mach es rückgängig (strg+z dann strg+enter)"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "stacks in stacks"
      })
    }), "\n", createVNode(_components.p, {
      children: "Lass uns die obigen Beispiele kombinieren:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
stack(
  sound("hh*8").gain("[.25 1]*2"),
  sound("bd*2,~ sd:1")
),
note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>/2")
.sound("sawtooth").lpf("200 1000"),
note("<[c3,g3,e4] [bb2,f3,d4] [a2,f3,c4] [bb2,g3,eb4]>/2")
.sound("sawtooth").vowel("<a e i o>/2")
) `,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Versuche die einzelnen Teile innerhalb von ", createVNode(_components.code, {
          children: "stack"
        }), " zu erkennen. Schau dir an wie die Kommas gesetzt sind."]
      }), createVNode(_components.p, {
        children: ["Die 3 Teile (Drums, Bass, Akkorde) sind genau wie vorher, nur in einem ", createVNode(_components.code, {
          children: "stack"
        }), ", getrennt durch Kommas."]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Den Sound formen mit ADSR-Hüllkurve"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<c3 bb2 f3 eb3>")
.sound("sawtooth").lpf(600)
.attack(.1)
.decay(.1)
.sustain(.25)
.release(.2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Versuche herauszufinden, was die Zahlen machen. Probier folgendes:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["attack: ", createVNode(_components.code, {
            children: ".5"
          }), " vs ", createVNode(_components.code, {
            children: "0"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["decay: ", createVNode(_components.code, {
            children: ".5"
          }), " vs ", createVNode(_components.code, {
            children: "0"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["sustain: ", createVNode(_components.code, {
            children: "1"
          }), " vs ", createVNode(_components.code, {
            children: ".25"
          }), " vs ", createVNode(_components.code, {
            children: "0"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["release: ", createVNode(_components.code, {
            children: "0"
          }), " vs ", createVNode(_components.code, {
            children: ".5"
          }), " vs ", createVNode(_components.code, {
            children: "1"
          })]
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Kannst du erraten, was die einzelnen Werte machen?"
      })]
    }), "\n", createVNode(QA, {
      q: "Lösung anzeigen",
      "client:visible": true,
      "client:component-path": "@components/QA",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: [createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "attack (anschlagen): Zeit des Aufbaus"
        }), "\n", createVNode(_components.li, {
          children: "decay (zerfallen): Zeit des Abfalls"
        }), "\n", createVNode(_components.li, {
          children: "sustain (erhalten): Lautstärke nach Abfall"
        }), "\n", createVNode(_components.li, {
          children: "release (loslassen): Zeit des Abfalls nach dem Ende"
        }), "\n"]
      }), createVNode(_components.p, {
        children: createVNode(_components.img, {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/ADSR_parameter.svg/1920px-ADSR_parameter.svg.png",
          alt: "ADSR"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "adsr-Kurznotation"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<c3 bb2 f3 eb3>")
.sound("sawtooth").lpf(600)
.adsr(".1:.1:.5:.2")
`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "delay = Verzögerung"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
note("~ [<[d3,a3,f4]!2 [d3,bb3,g4]!2> ~]")
.sound("gm_electric_guitar_muted"),
sound("<bd rim>").bank("RolandTR707")
).delay(".5")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Probier verschiedene ", createVNode(_components.code, {
          children: "delay"
        }), " Werte zwischen 0 und 1. Übrigens: ", createVNode(_components.code, {
          children: ".5"
        }), " ist kurz für ", createVNode(_components.code, {
          children: "0.5"
        }), "."]
      }), createVNode(_components.p, {
        children: ["Was passiert, wenn du ", createVNode(_components.code, {
          children: ".delay(\".8:.125\")"
        }), " schreibst? Kannst du erraten, was die zweite Zahl macht?"]
      }), createVNode(_components.p, {
        children: ["Was passiert, wenn du ", createVNode(_components.code, {
          children: ".delay(\".8:.06:.8\")"
        }), " schreibst? Kannst du erraten, was die dritte Zahl macht?"]
      })]
    }), "\n", createVNode(QA, {
      q: "Lösung anzeigen",
      "client:visible": true,
      "client:component-path": "@components/QA",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: [createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "delay(\"a:b:c\")"
        }), ":"]
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "a: Lautstärke des Delays"
        }), "\n", createVNode(_components.li, {
          children: "b: Verzögerungszeit"
        }), "\n", createVNode(_components.li, {
          children: "c: Feedback (je kleiner, desto schneller verschwindet das Delay)"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "room aka reverb = Hall"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("<4 [3@3 4] [<2 0> ~@16] ~>/2")
.scale("D4:minor").sound("gm_accordion:2")
.room(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Spiel mit verschiedenen Werten."
      }), createVNode(_components.p, {
        children: "Füg auch ein Delay hinzu!"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "kleiner Dub-Tune"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
note("~ [<[d3,a3,f4]!2 [d3,bb3,g4]!2> ~]")
.sound("gm_electric_guitar_muted").delay(.5),
sound("<bd rim>").bank("RolandTR707").delay(.5),
n("<4 [3@3 4] [<2 0> ~@16] ~>/2")
.scale("D4:minor").sound("gm_accordion:2")
.room(2).gain(.5)
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Für echten Dub fehlt noch der Bass:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
note("~ [<[d3,a3,f4]!2 [d3,bb3,g4]!2> ~]")
.sound("gm_electric_guitar_muted").delay(.5),
sound("<bd rim>").bank("RolandTR707").delay(.5),
n("<4 [3@3 4] [<2 0> ~@16] ~>/2")
.scale("D4:minor").sound("gm_accordion:2")
.room(2).gain(.4),
n("<0 [~ 0] 4 [3 2] [0 ~] [0 ~] <0 2> ~>*2")
.scale("D2:minor")
.sound("sawtooth,triangle").lpf(800)
)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Füg ", createVNode(_components.code, {
          children: ".hush()"
        }), " ans Ende eines Patterns im stack…"]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "pan = Panorama"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("numbers:1 numbers:2 numbers:3 numbers:4")
.pan("0 0.3 .6 1")
.slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "speed = Geschwindigkeit"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd rim").speed("<1 2 -1 -2>").room(.2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "fast and slow = schnell und langsam"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Mit ", createVNode(_components.code, {
        children: "fast"
      }), " und ", createVNode(_components.code, {
        children: "slow"
      }), " kann man das Tempo eines Patterns außerhalb der Mini-Notation ändern:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd*2,~ rim").slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Ändere den ", createVNode(_components.code, {
          children: "slow"
        }), "-Wert. Ersetze ", createVNode(_components.code, {
          children: "slow"
        }), " durch ", createVNode(_components.code, {
          children: "fast"
        }), "."]
      }), createVNode(_components.p, {
        children: ["Was passiert, wenn du den Wert automatisierst? z.b. ", createVNode(_components.code, {
          children: ".fast(\"<1 [2 4]>\")"
        }), " ?"]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Übrigens, innerhalb der Mini-Notation: ", createVNode(_components.code, {
        children: "fast"
      }), " ist ", createVNode(_components.code, {
        children: "*"
      }), " und ", createVNode(_components.code, {
        children: "slow"
      }), " ist ", createVNode(_components.code, {
        children: "/"
      }), "."]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("[bd*2,~ rim]*<1 [2 4]>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "automation-mit-signalen",
      children: ["Automation mit Signalen", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-effects/#automation-mit-signalen",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Anstatt Werte schrittweise zu automatisieren, können wir auch sogenannte Signale benutzen:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh*16").gain(sine)`,
      punchcard: true,
      punchcardLabels: false,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Die grundlegenden Wellenformen sind ", createVNode(_components.code, {
          children: "sine"
        }), ", ", createVNode(_components.code, {
          children: "saw"
        }), ", ", createVNode(_components.code, {
          children: "square"
        }), ", ", createVNode(_components.code, {
          children: "tri"
        }), " 🌊"]
      }), createVNode(_components.p, {
        children: ["Probiere auch die zufälligen Signale ", createVNode(_components.code, {
          children: "rand"
        }), " und ", createVNode(_components.code, {
          children: "perlin"
        }), "!"]
      }), createVNode(_components.p, {
        children: ["Der ", createVNode(_components.code, {
          children: "gain"
        }), "-Wert (Verstärkung) wird in der Visualisierung als Transparenz dargestellt."]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Bereich ändern mit ", createVNode(_components.code, {
          children: "range"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Signale bewegen sich standardmäßig zwischen 0 und 1. Wir können das mit ", createVNode(_components.code, {
        children: "range"
      }), " ändern:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh*8").lpf(saw.range(500, 2000))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "range"
      }), " ist nützlich wenn wir Funktionen mit einem anderen Wertebereich als 0 und 1 automatisieren wollen (z.b. ", createVNode(_components.code, {
        children: "lpf"
      }), ")"]
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Was passiert wenn du die beiden Werte vertauschst?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Wir können die Geschwindigkeit der Automation mit slow / fast ändern:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>/2")
.sound("sawtooth")
.lpf(sine.range(100, 2000).slow(8))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Die ganze Automation braucht nun 8 cycle bis sie sich wiederholt."
      })
    }), "\n", createVNode(_components.h2, {
      id: "rückblick",
      children: ["Rückblick", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-effects/#rückblick",
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
            children: "Beispiel"
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
    }), "\n", createVNode(_components.p, {
      children: ["Lass uns nun die für Tidal typischen ", createVNode(_components.a, {
        href: "/de/workshop/pattern-effects/",
        children: "Pattern-Effekte anschauen"
      }), "."]
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

const url = "/de/workshop/first-effects";
const file = "/home/user/Bulka/website/src/pages/de/workshop/first-effects.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/de/workshop/first-effects.mdx";
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
