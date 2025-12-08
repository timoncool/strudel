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
  "title": "Erste Sounds",
  "layout": "../../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "erste-sounds",
    "text": "Erste Sounds"
  }, {
    "depth": 2,
    "slug": "textfelder",
    "text": "Textfelder"
  }, {
    "depth": 2,
    "slug": "sounds",
    "text": "Sounds"
  }, {
    "depth": 2,
    "slug": "drum-sounds",
    "text": "Drum Sounds"
  }, {
    "depth": 2,
    "slug": "sequenzen--sequences",
    "text": "Sequenzen / Sequences"
  }, {
    "depth": 2,
    "slug": "rückblick",
    "text": "Rückblick"
  }, {
    "depth": 2,
    "slug": "beispiele",
    "text": "Beispiele"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
      id: "erste-sounds",
      children: ["Erste Sounds", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-sounds/#erste-sounds",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Dies ist das erste Kapitel im Strudel Workshop, schön dich an Bord zu haben!"
    }), "\n", createVNode(_components.h2, {
      id: "textfelder",
      children: ["Textfelder", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-sounds/#textfelder",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Der Workshop ist voller interaktiver Textfelder. Lass uns lernen wie sie funktionieren. Hier ist eins:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("casio")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: "⬆️ Klicke in das obige Textfeld ⬆️"
        }), "\n", createVNode(_components.li, {
          children: ["Drücke ", createVNode(_components.code, {
            children: "Strg"
          }), "+", createVNode(_components.code, {
            children: "Enter"
          }), " zum Abspielen"]
        }), "\n", createVNode(_components.li, {
          children: ["Ändere ", createVNode(_components.code, {
            children: "casio"
          }), " in ", createVNode(_components.code, {
            children: "metal"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Drücke ", createVNode(_components.code, {
            children: "Strg"
          }), "+", createVNode(_components.code, {
            children: "Enter"
          }), " zum Aktualisieren"]
        }), "\n", createVNode(_components.li, {
          children: ["Drücke ", createVNode(_components.code, {
            children: "Strg"
          }), "+", createVNode(_components.code, {
            children: "Punkt"
          }), " zum Stoppen"]
        }), "\n"]
      }), createVNode(_components.p, {
        children: ["Mac: ", createVNode(_components.code, {
          children: "Strg"
        }), " = ", createVNode(_components.code, {
          children: "control"
        }), " oder auch ", createVNode(_components.code, {
          children: "option"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Glückwunsch, du kannst jetzt live coden!"
    }), "\n", createVNode(_components.h2, {
      id: "sounds",
      children: ["Sounds", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-sounds/#sounds",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Gerade haben wir schon den ersten sound mit ", createVNode(_components.code, {
        children: "sound"
      }), " abgespielt:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("casio")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "casio"
        }), " ist einer von vielen Standard Sounds."]
      }), createVNode(_components.p, {
        children: "Probier ein paar andere Sounds aus:"
      }), createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "plaintext",
        children: createVNode(_components.code, {
          children: createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              children: "insect wind jazz metal east crow casio space numbers"
            })
          })
        })
      }), createVNode(_components.p, {
        children: "Es kann sein, dass du kurz nichts hörst während ein neuer Sound lädt."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Sample Nummer ändern mit :"
      })
    }), "\n", createVNode(_components.p, {
      children: "Ein Sound kann mehrere Samples (Audio Dateien) enthalten."
    }), "\n", createVNode(_components.p, {
      children: ["Du kannst ein anderes Sample wählen, indem du ", createVNode(_components.code, {
        children: ":"
      }), " und eine Zahl an den Sound-Namen anhängst:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("casio:1")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Probiere verschiedene Sound / Zahlen Kombinationen."
      }), createVNode(_components.p, {
        children: ["Ohne Zahl ist gleichbedeutend mit ", createVNode(_components.code, {
          children: ":0"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Jetzt weißt du wie man Sounds abspielt und ihre Sample Nummer einstellt.\nVorerst bleiben wir bei den voreingestellten Sounds, später erfahren wir noch wie man eigene benutzt."
    }), "\n", createVNode(_components.h2, {
      id: "drum-sounds",
      children: ["Drum Sounds", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-sounds/#drum-sounds",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Strudel kommt von Haus aus mit einer breiten Auswahl an Drum Sounds:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh sd oh")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Diese Kombinationen von Buchstaben stehen für verschiedene Teile eines Schlagzeugs:"
      }), createVNode("img", {
        src: "/img/drumset.png"
      }), createVNode("a", {
        class: "text-right text-xs",
        href: "https://de.wikipedia.org/wiki/Schlagzeug#/media/Datei:Drum_set.svg",
        target: "_blank",
        children: createVNode(_components.p, {
          children: "original von Pbroks13"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "bd"
          }), " = ", createVNode(_components.strong, {
            children: "b"
          }), "ass ", createVNode(_components.strong, {
            children: "d"
          }), "rum - Basstrommel"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "sd"
          }), " = ", createVNode(_components.strong, {
            children: "s"
          }), "nare ", createVNode(_components.strong, {
            children: "d"
          }), "rum - Schnarrtrommel"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "rim"
          }), " = ", createVNode(_components.strong, {
            children: "rim"
          }), "shot - Rahmenschlag"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "hh"
          }), " = ", createVNode(_components.strong, {
            children: "h"
          }), "i", createVNode(_components.strong, {
            children: "h"
          }), "at - Hallo Hut"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "oh"
          }), " = ", createVNode(_components.strong, {
            children: "o"
          }), "pen ", createVNode(_components.strong, {
            children: "h"
          }), "ihat - Offener Hallo Hut"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "lt"
          }), " = ", createVNode(_components.strong, {
            children: "l"
          }), "ow tom"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "mt"
          }), " = ", createVNode(_components.strong, {
            children: "m"
          }), "iddle tom"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "ht"
          }), " = ", createVNode(_components.strong, {
            children: "h"
          }), "igh tom"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "rd"
          }), " = ", createVNode(_components.strong, {
            children: "r"
          }), "i", createVNode(_components.strong, {
            children: "d"
          }), "e cymbal"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.code, {
            children: "cr"
          }), " = ", createVNode(_components.strong, {
            children: "cr"
          }), "ash cymbal"]
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Probier verschiedene Sounds aus!"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Wir können den Charakter des Drum Sounds verändern, indem wir mit ", createVNode(_components.code, {
        children: "bank"
      }), " die Drum Machine auswählen:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh sd oh").bank("RolandTR909")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["In diesem Beispiel ist ", createVNode(_components.code, {
        children: "RolandTR909"
      }), " der Name der Drum Machine, die eine prägende Rolle für House und Techno Musik spielte."]
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Ändere ", createVNode(_components.code, {
          children: "RolandTR909"
        }), " in"]
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "AkaiLinn"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "RhythmAce"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "RolandTR808"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "RolandTR707"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.code, {
            children: "ViscoSpaceDrum"
          })
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Es gibt noch viel mehr, aber das sollte fürs Erste reichen.."
      }), createVNode(_components.p, {
        children: ["🦥 Tipp für faule: Mach Doppel-Klick auf einen Namen um ihn zu markieren.\nDann kannst du ihn mit ", createVNode(_components.code, {
          children: "Strg"
        }), "+", createVNode(_components.code, {
          children: "C"
        }), " kopieren und mit ", createVNode(_components.code, {
          children: "Strg"
        }), "+", createVNode(_components.code, {
          children: "V"
        }), " einfügen."]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "sequenzen--sequences",
      children: ["Sequenzen / Sequences", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-sounds/#sequenzen--sequences",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Im letzten Beispiel haben wir schon gesehen dass man mehrere Sounds hintereinander abspielen kann wenn man sie durch Leerzeichen trennt:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh sd hh")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Beachte wie der aktuell gespielte Sound im Code markiert und auch darunter visualisiert wird."
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Versuch noch mehr Sounds hinzuzfügen!"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Je länger die Sequence, desto schneller"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd bd hh bd rim bd hh bd")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Der Inhalt einer Sequence wird in einen sogenannten Cycle (=Zyklus) zusammengequetscht. Ein Cycle ist standardmäßig 2 Sekunden lang."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Eins pro Cycle mit ", createVNode(_components.code, {
          children: "< .. >"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Hier ist die gleiche Sequence, aber dieses mal umgeben von ", createVNode(_components.code, {
        children: "< .. >"
      }), " (angle brackets):"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("<bd bd hh bd rim bd hh bd>")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Jetzt spielt nur ein Sound pro Cycle. Mit diesen Klammern bleibt das Tempo immer gleich, ganz egal wieviele Elemente enhalten sind!"
    }), "\n", createVNode(_components.p, {
      children: ["Das ist jetzt aber etwas langsam, machen wir es schneller mit ", createVNode(_components.code, {
        children: "*"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("<bd bd hh bd rim bd hh bd>*8")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Die ", createVNode(_components.code, {
        children: "*8"
      }), " macht die ganze Sequenz 8 mal so schnell."]
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Warte mal, ist das jetzt nicht das gleiche Ergebnis wie ohne ", createVNode(_components.code, {
          children: "< ... >*8"
        }), "? Wofür ist das dann gut?"]
      }), createVNode(_components.p, {
        children: "Korrekt, der echte Vorteil dieser Schreibweise zeigt sich wenn du Elemente entfernst oder hinzufügst. Versuch es mal!"
      }), createVNode(_components.p, {
        children: "Ändere auch mal die Zahl am Ende um das Tempo zu verändern."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Tempo ändern mit ", createVNode(_components.code, {
          children: "setcpm"
        })]
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(90/4)
sound("<bd hh rim hh>*8")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["cpm = ", createVNode(_components.strong, {
          children: "c"
        }), "ycles per ", createVNode(_components.strong, {
          children: "m"
        }), "inute = Cycles pro Minute"]
      }), createVNode(_components.p, {
        children: "Das Tempo is standardmäßig is 30 Cycles pro Minute = 120/4 = 1 Cycle alle 2 Sekunden"
      }), createVNode(_components.p, {
        children: "In taditioneller Musik-Terminologie könnte man sagen, das Pattern oben besteht aus 8tel Noten auf 90bpm im 4/4 Takt."
      }), createVNode(_components.p, {
        children: "Kein Sorge wenn dir diese Begriffe nichts sagen, das ist nicht notwendig um mit Strudel Musik zu machen."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Wir werden später noch mehr Möglichkeiten kennen lernen das Tempo zu verändern."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Pausen mit ’-’ oder ’~’"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh - rim")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Du siehst wahrscheinlich auch Patterns von anderen Leuten mit ’~’ als Pausensymbol.\nBesonders für deutsche Tastaturen ist ", createVNode(_components.code, {
          children: "-"
        }), " eine Alternative zum schwer tippbaren ", createVNode(_components.code, {
          children: "~"
        }), "."]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Unter-Sequenzen mit [Klammern]"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd [hh hh] rim [hh hh]")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Der Inhalt der Klammer wird ebenfalls zusammengequetscht!"
      }), createVNode(_components.p, {
        children: "Füge noch mehr Sounds in die Klammern ein!"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Genau wie bei der ganzen Sequence wird eine Unter-Sequence schneller je mehr drin ist."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Multiplikation: Dinge schneller machen"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh*2 sd hh*3")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Multiplikation: Vieeeeeeel schneller"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd hh*16 sd hh*8")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Tonhöhe = sehr schneller Rhythmus"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Multiplikation: Ganze Unter-Sequences schneller machen"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd [sd hh]*2")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Bolero:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `
setcpm(10)
sound("sd sd*3 sd sd*3 sd sd sd sd*3 sd sd*3 sd*3 sd*3")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Unter-Unter-Sequenzen mit [[Klammern]]"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd [[rim rim] hh]")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Du kannst so tief verschachteln wie du willst!"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Parallele Sequenzen mit Komma"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh hh hh, bd casio")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Du kannst so viele Kommas benutzen wie du möchtest:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh hh hh, bd bd, - casio")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Kommas können auch in Unter-Sequenzen verwendet werden:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh hh hh, bd [bd,casio]")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Ist dir aufgefallen dass sich die letzten beiden Beispiele gleich anhören?"
      }), createVNode(_components.p, {
        children: "Es kommt öfter vor, dass man die gleiche Idee auf verschiedene Arten ausdrücken kann."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Mehrere Zeilen schreiben mit ` (backtick)"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound(\`bd*2, - cp, 
- - - oh, hh*4,
[- casio]*2\`)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Ob man ” oder ` benutzt ist nur eine Frage der Übersichtlichkeit."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Sample Nummer separat auswählen"
      })
    }), "\n", createVNode(_components.p, {
      children: "Benutzt man nur einen Sound mit unterschiedlichen Sample Nummer sieht das so aus:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("jazz:0 jazz:1 [jazz:4 jazz:2] jazz:3*2")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Das gleiche kann man auch so schreiben:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 1 [4 2] 3*2").sound("jazz")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "rückblick",
      children: ["Rückblick", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-sounds/#rückblick",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Wir haben jetzt die Grundlagen der sogenannten Mini-Notation gelernt, der Rhythmus-Sprache von Tidal."
    }), "\n", createVNode(_components.p, {
      children: "Das haben wir bisher gelernt:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Concept"
          }), createVNode(_components.th, {
            children: "Syntax"
          }), createVNode(_components.th, {
            children: "Example"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Sequenz"
          }), createVNode(_components.td, {
            children: "Leerzeichen"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd bd sd hh")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Sound Nummer"
          }), createVNode(_components.td, {
            children: ":x"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("hh:0 hh:1 hh:2 hh:3")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Pausen"
          }), createVNode(_components.td, {
            children: "-"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("metal - jazz jazz:1")`,
              "client:component-path": "@src/docs/MiniRepl",
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
              "client:component-path": "@src/docs/MiniRepl",
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
              tune: `sound("bd [metal [jazz sd]]")`,
              "client:component-path": "@src/docs/MiniRepl",
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
              tune: `sound("bd sd*2 cp*3")`,
              "client:component-path": "@src/docs/MiniRepl",
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
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Die mit Apostrophen umgebene Mini-Notation benutzt man normalerweise in einer sogenannten Funktion.\nDie folgenden Funktionen haben wir bereits gesehen:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Name"
          }), createVNode(_components.th, {
            children: "Description"
          }), createVNode(_components.th, {
            children: "Example"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "sound"
          }), createVNode(_components.td, {
            children: "Spielt den Sound mit dem Namen"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "bank"
          }), createVNode(_components.td, {
            children: "Wählt die Soundbank / Drum Machine"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd").bank("RolandTR909")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "setcpm"
          }), createVNode(_components.td, {
            children: ["Tempo in ", createVNode(_components.strong, {
              children: "C"
            }), "ycles ", createVNode(_components.strong, {
              children: "p"
            }), "ro ", createVNode(_components.strong, {
              children: "M"
            }), "inute"]
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `setcpm(90); sound("bd sd")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "n"
          }), createVNode(_components.td, {
            children: "Sample Nummer"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 1 4 2").sound("jazz")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "beispiele",
      children: ["Beispiele", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-sounds/#beispiele",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Einfacher Rock Beat"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(100/2)
sound("bd sd, hh*4").bank("RolandTR505")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Klassischer House"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd*2, - cp, [- hh]*2").bank("RolandTR909")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Ist die aufgefallen dass die letzten 2 Patterns extrem ähnlich sind?\nBestimmte Drum Patterns werden oft genreübergreifend wiederverwendet."
      })
    }), "\n", createVNode(_components.p, {
      children: "We Will Rock you"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(81/2)
sound("bd*2 cp").bank("RolandTR707")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Yellow Magic Orchestra - Firecracker"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd sd, - - - hh - hh - -, - perc - perc:1*2")
.bank("RolandCompurhythm1000")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Nachahmung eines 16 step sequencers"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(90/4)
sound(\`
[-  -  oh - ] [-  -  -  - ] [-  -  -  - ] [-  -  -  - ],
[hh hh -  - ] [hh -  hh - ] [hh -  hh - ] [hh -  hh - ],
[-  -  -  - ] [cp -  -  - ] [-  -  -  - ] [cp -  -  - ],
[bd -  -  - ] [-  -  -  bd] [-  -  bd - ] [-  -  -  bd]
\`)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Noch eins"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(88/4)
sound(\`
[-  -  -  - ] [-  -  -  - ] [-  -  -  - ] [-  -  oh:1 - ],
[hh hh hh hh] [hh hh hh hh] [hh hh hh hh] [hh hh -  - ],
[-  -  -  - ] [cp -  -  - ] [-  -  -  - ] [-  cp -  - ],
[bd bd -  - ] [-  -  bd - ] [bd bd - bd ] [-  -  -  - ]
\`).bank("RolandTR808")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Nicht so typische Drums"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(100/2)
s(\`jazz*2, 
insect [crow metal] - -, 
- space:4 - space:1,
- wind\`)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Jetzt haben wir eine grundlegende Ahnung davon wie man mit Strudel Beats baut!\nIm nächsten Kapitel werden wir ein paar ", createVNode(_components.a, {
        href: "/de/workshop/first-notes/",
        children: "Töne spielen"
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

const url = "/de/workshop/first-sounds";
const file = "/home/user/Bulka/website/src/pages/de/workshop/first-sounds.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/de/workshop/first-sounds.mdx";
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
