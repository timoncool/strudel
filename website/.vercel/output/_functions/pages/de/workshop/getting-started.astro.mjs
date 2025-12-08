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
  "title": "Intro",
  "layout": "../../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "willkommen",
    "text": "Willkommen"
  }, {
    "depth": 2,
    "slug": "was-ist-strudel",
    "text": "Was ist Strudel"
  }, {
    "depth": 2,
    "slug": "was-kann-man-mit-strudel-machen",
    "text": "Was kann man mit Strudel machen?"
  }, {
    "depth": 2,
    "slug": "beispiel",
    "text": "Beispiel"
  }, {
    "depth": 2,
    "slug": "workshop",
    "text": "Workshop"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "willkommen",
      children: ["Willkommen", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/getting-started/#willkommen",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode("div", {
      className: "w-32 animate-pulse md:float-right ml-8",
      children: createVNode(_components.img, {
        src: "/icons/strudel_icon.png",
        alt: "Strudel Icon"
      })
    }), "\n", createVNode(_components.p, {
      children: "Willkommen zum Strudel Workshop!\nDu hast den richtigen Ort gefunden wenn du lernen möchtest wie man mit Code Musik macht."
    }), "\n", createVNode(_components.h2, {
      id: "was-ist-strudel",
      children: ["Was ist Strudel", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/getting-started/#was-ist-strudel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Mit Strudel kann man dynamische Musikstücke in Echtzeit schreiben.\nEs ist eine in JavaScript entwickelte Version von ", createVNode(_components.a, {
        href: "https://tidalcycles.org/",
        children: "Tidal Cycles"
      }), " und wurde 2022 von Alex McLean und Felix Roos initiiert.\nTidal Cycles, auch bekannt unter dem Namen Tidal, ist eine Computersprache für algorithmische Muster.\nObwohl sie meistens für die Erzeugung von Musik eingesetzt wird, kann sie für jede Art von Tätigkeit eingesetzt werden,\nin der Muster eine Rolle spielen."]
    }), "\n", createVNode(_components.p, {
      children: ["Du brauchst keine Erfahrung in JavaScript oder Tidal Cycles um mit Strudel Musik zu machen.\nDieser interaktive Workshop leitet dich spielerisch durch die Grundlagen von Strudel.\nDer beste Ort um mit Strudel Musik zu machen ist das ", createVNode(_components.a, {
        href: "https://strudel.cc/",
        children: "Strudel REPL"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "was-kann-man-mit-strudel-machen",
      children: ["Was kann man mit Strudel machen?", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/getting-started/#was-kann-man-mit-strudel-machen",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Musik Live Coding: In Echtzeit mit Code Musik machen"
      }), "\n", createVNode(_components.li, {
        children: "Algorithmische Komposition: Schreibe Musik mithilfe Tidals einzigartiger Sprache für Muster"
      }), "\n", createVNode(_components.li, {
        children: "Lehren: Strudel eignet sich gut für Lehrende, da keine Installation nötig ist und die Sprache kein theoretisches Vorwissen erfordert."
      }), "\n", createVNode(_components.li, {
        children: "Mit anderen Musik-Anwendungen kombinieren: Per MIDI oder OSC kann Strudel als flexibler Sequencer mit jedem Setup kombiniert werden"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "beispiel",
      children: ["Beispiel", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/getting-started/#beispiel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Hier ist ein Beispiel wie Strudel klingen kann:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `stack(
// drums
s("bd,[~ <sd!3 sd(3,4,2)>],hh*8")
.speed(perlin.range(.8,.9)), // random sample speed variation
// bassline
"<a1 b1\*2 a1(3,8) e2>" 
.off(1/8,x=>x.add(12).degradeBy(.5)) // random octave jumps
.add(perlin.range(0,.5)) // random pitch variation
.superimpose(add(.05)) // add second, slightly detuned voice
.note() // wrap in "note"
.decay(.15).sustain(0) // make each note of equal length
.s('sawtooth') // waveform
.gain(.4) // turn down
.cutoff(sine.slow(7).range(300,5000)), // automate cutoff
// chords
"<Am7!3 <Em7 E7b13 Em7 Ebm7b5>>".voicings('lefthand') 
.superimpose(x=>x.add(.04)) // add second, slightly detuned voice
.add(perlin.range(0,.5)) // random pitch variation
.note() // wrap in "note"
.s('sawtooth') // waveform
.gain(.16) // turn down
.cutoff(500) // fixed cutoff
.attack(1) // slowly fade in
)
.slow(3/2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Mehr Beispiele gibt es ", createVNode(_components.a, {
        href: "/examples/",
        children: "hier"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Du kannst auch im ", createVNode(_components.a, {
        href: "https://strudel.cc/",
        children: "Strudel REPL"
      }), " auf ", createVNode(_components.code, {
        children: "shuffle"
      }), " klicken um ein zufälliges Beispiel zu hören."]
    }), "\n", createVNode(_components.h2, {
      id: "workshop",
      children: ["Workshop", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/de/workshop/getting-started/#workshop",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Der beste Weg um Strudel zu lernen ist der nun folgende Workshop.\nWenn du bereit bist, lass uns loslegen mit deinen ", createVNode(_components.a, {
        href: "/de/workshop/first-sounds/",
        children: "ersten Sounds"
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

const url = "/de/workshop/getting-started";
const file = "/home/user/Bulka/website/src/pages/de/workshop/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/de/workshop/getting-started.mdx";
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
