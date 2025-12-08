/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
export { renderers } from '../../renderers.mjs';

const examples = [
  `// "coastline" @by eddyflux
// @version 1.0
samples('github:eddyflux/crate')
setcps(.75)
let chords = chord("<Bbm9 Fm9>/4").dict('ireal')
stack(
  stack( // DRUMS
    s("bd").struct("<[x*<1 2> [~@3 x]] x>"),
    s("~ [rim, sd:<2 3>]").room("<0 .2>"),
    n("[0 <1 3>]*<2!3 4>").s("hh"),
    s("rd:<1!3 2>*2").mask("<0 0 1 1>/16").gain(.5)
  ).bank('crate')
  .mask("<[0 1] 1 1 1>/16".early(.5))
  , // CHORDS
  chords.offset(-1).voicing().s("gm_epiano1:1")
  .phaser(4).room(.5)
  , // MELODY
  n("<0!3 1*2>").set(chords).mode("root:g2")
  .voicing().s("gm_acoustic_bass"),
  chords.n("[0 <4 3 <2 5>>*2](<3 5>,8)")
  .anchor("D5").voicing()
  .segment(4).clip(rand.range(.4,.8))
  .room(.75).shape(.3).delay(.25)
  .fm(sine.range(3,8).slow(8))
  .lpf(sine.range(500,1000).slow(8)).lpq(5)
  .rarely(ply("2")).chunk(4, fast(2))
  .gain(perlin.range(.6, .9))
  .mask("<0 1 1 0>/16")
)
.late("[0 .01]*4").late("[0 .01]*2").size(4)`,
  `// "broken cut 1" @by froos
// @version 1.0

samples('github:tidalcycles/dirt-samples')
samples({
  'slap': 'https://cdn.freesound.org/previews/495/495416_10350281-lq.mp3',
  'whirl': 'https://cdn.freesound.org/previews/495/495313_10350281-lq.mp3',
  'attack': 'https://cdn.freesound.org/previews/494/494947_10350281-lq.mp3'
})

setcps(1.25)

note("[c2 ~](3,8)*2,eb,g,bb,d").s("sawtooth")
  .noise(0.3)
  .lpf(perlin.range(800,2000).mul(0.6))
  .lpenv(perlin.range(1,5)).lpa(.25).lpd(.1).lps(0)
  .add.mix(note("<0!3 [1 <4!3 12>]>")).late(.5)
  .vib("4:.2")
  .room(1).roomsize(4).slow(4)
  .stack(
    s("bd").late("<0.01 .251>"),
    s("breaks165:1/2").fit()
    .chop(4).sometimesBy(.4, ply("2"))
    .sometimesBy(.1, ply("4")).release(.01)
    .gain(1.5).sometimes(mul(speed("1.05"))).cut(1)
    ,
    s("<whirl attack>?").delay(".8:.1:.8").room(2).slow(8).cut(2),
  ).reset("<x@30 [x*[8 [8 [16 32]]]]@2>".late(2))`,
  `// "acidic tooth" @by eddyflux
// @version 1.0
  setcps(1)
  stack(
    note("[<g1 f1>/8](<3 5>,8)")
    .clip(perlin.range(.15,1.5))
    .release(.1)
    .s("sawtooth")
    .lpf(sine.range(400,800).slow(16))
    .lpq(cosine.range(6,14).slow(3))
    .lpenv(sine.mul(4).slow(4))
    .lpd(.2).lpa(.02)
    .ftype('24db')
    .rarely(add(note(12)))
    .room(.2).shape(.3).postgain(.5)
    .superimpose(x=>x.add(note(12)).delay(.5).bpf(1000))
    .gain("[.2 1@3]*2") // fake sidechain
    ,
    stack(
      s("bd*2").mask("<0@4 1@16>"),
      s("hh*8").gain(saw.mul(saw.fast(2))).clip(sine)
      .mask("<0@8 1@16>")
    ).bank('RolandTR909')
  )`,
];

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
  "title": "Начало работы",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "добро-пожаловать",
    "text": "Добро пожаловать"
  }, {
    "depth": 2,
    "slug": "что-такое-bulka",
    "text": "Что такое Bulka?"
  }, {
    "depth": 2,
    "slug": "что-можно-делать-с-bulka",
    "text": "Что можно делать с Bulka?"
  }, {
    "depth": 2,
    "slug": "примеры",
    "text": "Примеры"
  }, {
    "depth": 2,
    "slug": "начинаем",
    "text": "Начинаем"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "добро-пожаловать",
      children: ["Добро пожаловать", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/getting-started/#добро-пожаловать",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode("div", {
      className: "w-32 animate-pulse md:float-right ml-8 text-6xl",
      children: "🍞"
    }), "\n", createVNode(_components.p, {
      children: "Добро пожаловать в документацию Bulka!\nВы попали в нужное место, если хотите научиться создавать музыку с помощью кода."
    }), "\n", createVNode(_components.h2, {
      id: "что-такое-bulka",
      children: ["Что такое Bulka?", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/getting-started/#что-такое-bulka",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["С Bulka вы можете выразительно писать динамические музыкальные произведения.", createVNode("br", {}), "\nЭто порт языка паттернов ", createVNode(_components.a, {
        href: "https://tidalcycles.org/",
        children: "Tidal Cycles"
      }), " на JavaScript.", createVNode("br", {}), "\nВам не нужно знать JavaScript или Tidal Cycles, чтобы создавать музыку с Bulka.\nЭтот интерактивный туториал проведёт вас через основы.", createVNode("br", {}), "\nЛучшее место для создания музыки — ", createVNode(_components.a, {
        href: "/",
        children: "Bulka REPL"
      })]
    }), "\n", createVNode("div", {
      className: "clear-both"
    }), "\n", createVNode(_components.h2, {
      id: "что-можно-делать-с-bulka",
      children: ["Что можно делать с Bulka?", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/getting-started/#что-можно-делать-с-bulka",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "лайв-кодинг музыки"
        }), ": создавайте музыку кодом в реальном времени"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "алгоритмическая композиция"
        }), ": сочиняйте музыку, используя уникальный подход Tidal к манипуляции паттернами"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "обучение"
        }), ": низкий порог входа делает Bulka отличным инструментом для обучения музыке и программированию одновременно"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "интеграция"
        }), ": через MIDI или OSC вы можете использовать Bulka как гибкий секвенсор в вашем сетапе"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "примеры",
      children: ["Примеры", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/getting-started/#примеры",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вот несколько примеров того, как может звучать Bulka:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tunes: examples,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Эти примеры не могут полностью охватить всё разнообразие возможностей. Посмотрите ", createVNode(_components.a, {
        href: "/intro/showcase/",
        children: "showcase"
      }), " с видео от пользователей Strudel."]
    }), "\n", createVNode(_components.h2, {
      id: "начинаем",
      children: ["Начинаем", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/getting-started/#начинаем",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Лучший способ начать изучение — пройти воркшоп.\nЕсли вы готовы погрузиться, начните с ваших ", createVNode(_components.a, {
        href: "/workshop/first-sounds/",
        children: "первых звуков"
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

const url = "/workshop/getting-started";
const file = "/home/user/Bulka/website/src/pages/workshop/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/workshop/getting-started.mdx";
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
