/* empty css                                        */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl, ch as midi2note } from '../../../chunks/MiniRepl_Ntj7iAxy.mjs';
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
  "title": "Erste Töne",
  "layout": "../../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "erste-töne",
    "text": "Erste Töne"
  }, {
    "depth": 2,
    "slug": "zahlen-und-noten",
    "text": "Zahlen und Noten"
  }, {
    "depth": 2,
    "slug": "den-sound-verändern",
    "text": "Den Sound verändern"
  }, {
    "depth": 2,
    "slug": "längere-sequenzen",
    "text": "Längere Sequenzen"
  }, {
    "depth": 2,
    "slug": "skalen",
    "text": "Skalen"
  }, {
    "depth": 2,
    "slug": "wiederholen-und-verlängern",
    "text": "Wiederholen und Verlängern"
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
      id: "erste-töne",
      children: ["Erste Töne", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-notes/#erste-töne",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Jetzt schauen wir uns an wie man mit Tönen mit der ", createVNode(_components.code, {
        children: "note"
      }), " Funktion spielt."]
    }), "\n", createVNode(_components.h2, {
      id: "zahlen-und-noten",
      children: ["Zahlen und Noten", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-notes/#zahlen-und-noten",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Töne mit Zahlen"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("48 52 55 59").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(Array(49).fill().map((_, i) => [midi2note(i + 36), i + 36])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Probiere verschiedene Zahlen aus!"
      }), createVNode(_components.p, {
        children: "Versuch auch mal Kommazahlen, z.B. 55.5 (beachte die englische Schreibweise von Kommazahlen mit ”.” anstatt ”,”)"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Töne mit Buchstaben"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c e g b").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(['c3', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3'].map(n => [n, n.split('')[0]])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Versuch verschiedene Buchstaben aus (a - g)."
      }), createVNode(_components.p, {
        children: "Findest du Melodien die auch gleichzeitig ein Wort sind? Tipp: ☕ 🙈 🧚"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Vorzeichen"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("db eb gb ab bb").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(['db3', 'eb3', 'gb3', 'ab3', 'bb3'].map(n => [n, n.split('').slice(0, 2).join('')])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c# d# f# g# a#").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(['c#3', 'd#3', 'f#3', 'g#3', 'a#3'].map(n => [n, n.split('').slice(0, 2).join('')])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Andere Oktaven"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c2 e3 g4 b5").sound("piano")`,
      claviature: true,
      claviatureLabels: Object.fromEntries(['c1', 'c2', 'c3', 'c4', 'c5'].map(n => [n, n])),
      claviatureLabels: Object.fromEntries(Array(49).fill().map((_, i) => [midi2note(i + 36), midi2note(i + 36)])),
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Probiere verschiedene Oktaven aus (1-8)"
      })
    }), "\n", createVNode(_components.p, {
      children: "Normalerweise kommen Leute die keine Noten besser mit Zahlen anstatt mit Buchstaben zurecht.\nDaher benutzen die folgenden Beispiele meistens Zahlen.\nSpäter sehen wir auch noch ein paar Tricks die es uns erleichtern Töne zu spielen die zueinander passen."
    }), "\n", createVNode(_components.h2, {
      id: "den-sound-verändern",
      children: ["Den Sound verändern", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-notes/#den-sound-verändern",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Genau wie bei geräuschhaften Sounds können wir den Klang unserer Töne mit ", createVNode(_components.code, {
        children: "sound"
      }), " verändern:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("36 43, 52 59 62 64").sound("piano")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Probier ein paar sounds aus:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "gm_electric_guitar_muted - E-Gitarre"
        }), "\n", createVNode(_components.li, {
          children: "gm_acoustic_bass - Kontrabass"
        }), "\n", createVNode(_components.li, {
          children: "gm_voice_oohs - Chords"
        }), "\n", createVNode(_components.li, {
          children: "gm_blown_bottle - Flasche"
        }), "\n", createVNode(_components.li, {
          children: "sawtooth - Sägezahn-Welle"
        }), "\n", createVNode(_components.li, {
          children: "square - Rechteck-Welle"
        }), "\n", createVNode(_components.li, {
          children: "triangle - Dreieck-Welle"
        }), "\n", createVNode(_components.li, {
          children: "Was ist mit bd, sd oder hh?"
        }), "\n", createVNode(_components.li, {
          children: ["Entferne ", createVNode(_components.code, {
            children: ".sound('...')"
          }), " komplett"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Zwischen Sounds hin und her wechseln"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("48 67 63 [62, 58]")
.sound("piano gm_electric_guitar_muted")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Gleichzeitige Sounds"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("48 67 63 [62, 58]")
.sound("piano, gm_electric_guitar_muted")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Die patterns in ", createVNode(_components.code, {
          children: "note"
        }), " und ", createVNode(_components.code, {
          children: "sound"
        }), " werden kombiniert!"]
      }), createVNode(_components.p, {
        children: "Wir schauen uns später noch mehr Möglichkeiten an wie man patterns kombiniert."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "längere-sequenzen",
      children: ["Längere Sequenzen", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-notes/#längere-sequenzen",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Sequenzen verlangsamen mit ", createVNode(_components.code, {
          children: "/"
        })]
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("[36 34 41 39]/4").sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Das ", createVNode(_components.code, {
          children: "/4"
        }), " spielt die Sequenz 4 mal so langsam, also insgesamt 4 cycles = 8s."]
      }), createVNode(_components.p, {
        children: "Jede Note ist nun also 2s lang."
      }), createVNode(_components.p, {
        children: "Schreib noch mehr Töne in die Klammern und achte darauf dass es schneller wird."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Wenn eine Sequenz unabhängig von ihrem Inhalt immer gleich schnell bleiben soll, gibt es noch eine andere Art Klammern:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Eins pro Cycle per < >"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Im letzten Kapitel haben wir schon gelernt dass ", createVNode(_components.code, {
        children: "< ... >"
      }), " (angle brackets) nur ein Element pro Cycle spielt.\nDas ist für Melodien auch sehr nützlich:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<36 34 41 39>").sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Füg noch mehr Töne hinzu und achte darauf wie das Tempo gleich bleibt!"
      }), createVNode(_components.p, {
        children: "Tatsächlich sind diese Klammern nur eine Abkürzung:"
      }), createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "<a b c>"
        }), " = ", createVNode(_components.code, {
          children: "[a b c]/3"
        })]
      }), createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "<a b c d>"
        }), " = ", createVNode(_components.code, {
          children: "[a b c d]/4"
        })]
      }), createVNode(_components.p, {
        children: "usw.."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Eine Sequenz pro Cycle"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[36 48] [34 46] [41 53] [39 51]>")
.sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "oder auch…"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[36 48]*4 [34 46]*4 [41 53]*4 [39 51]*4>/2")
.sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Alternativen"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Ähnlich wie Unter-Sequenzen, kann auch ", createVNode(_components.code, {
        children: "<...>"
      }), " innerhalb einer Sequenz verwendet werden:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("60 <63 62 65 63>")
.sound("gm_xylophone")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Das ist auch praktisch für atonale Sounds:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd*2, ~ <sd cp>, [~ hh]*2")
.bank("RolandTR909")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "skalen",
      children: ["Skalen", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-notes/#skalen",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Es kann mühsam sein die richtigen Noten zu finden wenn man alle zur Verfügung hat.\nMit Skalen ist das einfacher:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 2 4 <[6,8] [7,9]>")
.scale("C:minor").sound("piano")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Probier verschiedene Zahlen aus. Jede klingt gut!"
      }), createVNode(_components.p, {
        children: "Probier verschiedene Skalen:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "C:major"
        }), "\n", createVNode(_components.li, {
          children: "A2:minor"
        }), "\n", createVNode(_components.li, {
          children: "D:dorian"
        }), "\n", createVNode(_components.li, {
          children: "G:mixolydian"
        }), "\n", createVNode(_components.li, {
          children: "A2:minor:pentatonic"
        }), "\n", createVNode(_components.li, {
          children: "F:major:pentatonic"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Automatisierte Skalen"
      })
    }), "\n", createVNode(_components.p, {
      children: "Wie alle Funktionen können auch Skalen mit einem Pattern automatisiert werden:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("<0 -3>, 2 4 <[6,8] [7,9]>")
.scale("<C:major D:mixolydian>/4")
.sound("piano")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: "Wenn du keine Ahnung hast was die Skalen bedeuten, keine Sorge.\nEs sind einfach nur Namen für verschiedene Gruppen von Tönen die gut zusammenpassen."
      }), createVNode(_components.p, {
        children: "Nimm dir Zeit um herauszufinden welche Skalen du magst."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "wiederholen-und-verlängern",
      children: ["Wiederholen und Verlängern", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-notes/#wiederholen-und-verlängern",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Verlängern mit @"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c@3 eb").sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Ein Element ohne ", createVNode(_components.code, {
          children: "@"
        }), " ist gleichbedeutend mit ", createVNode(_components.code, {
          children: "@1"
        }), ". Im Beispiel ist ", createVNode(_components.code, {
          children: "c"
        }), " drei Einheiten lang, ", createVNode(_components.code, {
          children: "eb"
        }), " nur eine."]
      }), createVNode(_components.p, {
        children: "Spiel mit der Länge!"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Unter-Sequenzen verlängern"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("<[4@2 4] [5@2 5] [6@2 6] [5@2 5]>*2")
.scale("<C2:mixolydian F2:mixolydian>/4")
.sound("gm_acoustic_bass")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Dieser Groove wird auch ", createVNode(_components.code, {
          children: "shuffle"
        }), " genannt.\nJeder Schlag enthält 2 Töne, wobei der erste doppelt so lang wie der zweite ist.\nDas nennt man auch manchmal ", createVNode(_components.code, {
          children: "triolen swing"
        }), ". Es ist ein typischer Rhythmus im Blues und Jazz."]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Wiederholen"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c!2 [eb,<g a bb a>]").sound("piano")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Wechsel zwischen ", createVNode(_components.code, {
          children: "!"
        }), ", ", createVNode(_components.code, {
          children: "*"
        }), " und ", createVNode(_components.code, {
          children: "@"
        }), " hin und her."]
      }), createVNode(_components.p, {
        children: "Was ist der Unterschied?"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "rückblick",
      children: ["Rückblick", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/first-notes/#rückblick",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Das haben wir in diesem Kapitel gelernt:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
            children: "Verlangsamen"
          }), createVNode(_components.td, {
            children: "/"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("[c a f e]/2")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Alternativen"
          }), createVNode(_components.td, {
            children: "<>"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c <e g>")`,
              "client:component-path": "@src/docs/MiniRepl",
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
              "client:component-path": "@src/docs/MiniRepl",
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
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Neue Funktionen:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
            children: "note"
          }), createVNode(_components.td, {
            children: "Tonhöhe als Buchstabe oder Zahl"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("b g e c").sound("piano")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "scale"
          }), createVNode(_components.td, {
            children: ["Interpretiert ", createVNode(_components.code, {
              children: "n"
            }), " als Skalenstufe"]
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("6 4 2 0").scale("C:minor").sound("piano")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "stack"
          }), createVNode(_components.td, {
            children: "Spiele mehrere Patterns parallel (s.u.)"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `stack(s("bd sd"),note("c eb g"))`,
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
        href: "/de/workshop/first-notes/#beispiele",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Bassline"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>/2")
.sound("gm_synth_bass_1")
.lpf(800) // <-- we'll learn about this soon`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Melodie"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n(\`<
[~ 0] 2 [0 2] [~ 2]
[~ 0] 1 [0 1] [~ 1]
[~ 0] 3 [0 3] [~ 3]
[~ 0] 2 [0 2] [~ 2]
>*2\`).scale("C4:minor")
.sound("gm_synth_strings_1")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Drums"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("bd*2, ~ <sd cp>, [~ hh]*2")
.bank("RolandTR909")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Wenn es doch nur einen Weg gäbe das alles gleichzeitig zu spielen…"
      })
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Das geht mit ", createVNode(_components.code, {
          children: "stack"
        }), " 😙"]
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `stack(
note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>/2")
.sound("gm_synth_bass_1").lpf(800),
n(\`<
[~ 0] 2 [0 2] [~ 2]
[~ 0] 1 [0 1] [~ 1]
[~ 0] 3 [0 3] [~ 3]
[~ 0] 2 [0 2] [~ 2]
>*2\`).scale("C4:minor")
.sound("gm_synth_strings_1"),
sound("bd*2, ~ <sd cp>, [~ hh]*2")
.bank("RolandTR909")
)`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Das hört sich doch langsam nach echter Musik an!\nWir haben Sounds, wir haben Töne.. noch ein Puzzleteil fehlt: ", createVNode(_components.a, {
        href: "/de/workshop/first-effects/",
        children: "Effekte"
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

const url = "/de/workshop/first-notes";
const file = "/home/user/Bulka/website/src/pages/de/workshop/first-notes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/de/workshop/first-notes.mdx";
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
