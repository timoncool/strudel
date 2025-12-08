/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import '../../chunks/MiniRepl_Ntj7iAxy.mjs';
export { renderers } from '../../renderers.mjs';

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
  "title": "Hydra",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "использование-hydra-внутри-strudel",
    "text": "Использование Hydra внутри Strudel"
  }, {
    "depth": 2,
    "slug": "h-patterns",
    "text": "H patterns"
  }, {
    "depth": 2,
    "slug": "detectaudio",
    "text": "detectAudio"
  }, {
    "depth": 2,
    "slug": "feedstrudel",
    "text": "feedStrudel"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "использование-hydra-внутри-strudel",
      children: ["Использование Hydra внутри Strudel", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/hydra/#использование-hydra-внутри-strudel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете писать код ", createVNode(_components.a, {
        href: "https://hydra.ojack.xyz/",
        children: "hydra"
      }), " в strudel! Все, что вам нужно сделать, это вызвать ", createVNode(_components.code, {
        children: "await initHydra()"
      }), " в начале:"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `await initHydra()
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by Zach Krall
// http://zachkrall.online/

osc(10, 0.9, 300)
.color(0.9, 0.7, 0.8)
.diff(
osc(45, 0.3, 100)
.color(0.9, 0.9, 0.9)
.rotate(0.18)
.pixelate(12)
.kaleid()
)
.scrollX(10)
.colorama()
.luma()
.repeatX(4)
.repeatY(4)
.modulate(
osc(1, -0.9, 300)
)
.scale(2)
.out()

note("[a,c,e,<a4 ab4 g4 gb4>,b4]/2")
.s("sawtooth").vib(2)
.lpf(600).lpa(2).lpenv(6)
`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "h-patterns",
      children: ["H patterns", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/hydra/#h-patterns",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Существует специальная функция ", createVNode(_components.code, {
        children: "H"
      }), ", которая позволяет использовать pattern как вход для hydra:"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `await initHydra()
let pattern = "3 4 5 [6 7]*2"
shape(H(pattern)).out(o0)
n(pattern).scale("A:minor").piano().room(1)
`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "detectaudio",
      children: ["detectAudio", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/hydra/#detectaudio",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы использовать захват аудио в hydra, вызовите ", createVNode(_components.code, {
        children: "initHydra"
      }), " с параметром конфигурации ", createVNode(_components.code, {
        children: "{detectAudio:true}"
      }), ":"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `await initHydra({detectAudio:true})
let pattern = "<3 4 5 [6 7]*2>"
shape(H(pattern)).repeat()
.scrollY(
  ()=> a.fft[0]*.25
)
.add(src(o0).color(.71 ).scrollX(.005),.95)
.out(o0)
n(pattern).scale("A:minor").piano().room(1)
`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Возможно, вы не сможете правильно увидеть это здесь: ", createVNode(_components.a, {
        href: "/#YXdhaXQgaW5pdEh5ZHJhKCkKbGV0IHBhdHRlcm4gPSAiMyA0IDUgWzYgN10qMiIKc2hhcGUoSChwYXR0ZXJuKSkub3V0KG8wKQpuKHBhdHRlcm4pLnNjYWxlKCJBOm1pbm9yIikucGlhbm8oKS5yb29tKDEpIA%3D%3D",
        children: "открыть в REPL"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Подобно ", createVNode(_components.code, {
        children: "detectAudio"
      }), ", все ", createVNode(_components.a, {
        href: "https://github.com/hydra-synth/hydra-synth#api",
        children: "доступные опции hydra"
      }), " могут быть переданы в ", createVNode(_components.code, {
        children: "initHydra"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "feedstrudel",
      children: ["feedStrudel", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/hydra/#feedstrudel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Используя опцию ", createVNode(_components.code, {
        children: "feedStrudel"
      }), ", вы можете трансформировать визуализации strudel с помощью hydra:"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `await initHydra({feedStrudel:1})
//
src(s0).kaleid(H("<4 5 6>"))
.diff(osc(1,0.5,5))
.modulateScale(osc(2,-0.25,1))
.out()
//

$: s("bd*4,[hh:0:<.5 1>]*8,~ rim").bank("RolandTR909").speed(.9)

$: note("[<g1!3 <bb1 <f1 d1>>>]\*3").s("sawtooth")

.room(.75).sometimes(add(note(12))).clip(.3)
.lpa(.05).lpenv(-4).lpf(2000).lpq(8).ftype('24db')

all(x=>x.fft(4).scope({pos:0,smear:.95}))`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
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

const url = "/learn/hydra";
const file = "/home/user/Bulka/website/src/pages/learn/hydra.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/hydra.mdx";
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
