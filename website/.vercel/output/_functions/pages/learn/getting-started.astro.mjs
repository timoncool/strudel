/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import '../../chunks/JsDoc_CifKo6nH.mjs';
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
  "title": "Начало работы",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "добро-пожаловать",
    "text": "Добро пожаловать"
  }, {
    "depth": 1,
    "slug": "что-такое-strudel",
    "text": "Что такое Strudel?"
  }, {
    "depth": 1,
    "slug": "strudel-repl-и-minirepl",
    "text": "Strudel REPL и MiniREPL"
  }, {
    "depth": 1,
    "slug": "покажите-мне-демо",
    "text": "Покажите мне демо!"
  }, {
    "depth": 1,
    "slug": "strudel---это-незавершенная-работа-",
    "text": "Strudel - это незавершенная работа 🚧"
  }, {
    "depth": 1,
    "slug": "что-дальше",
    "text": "Что дальше?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "добро-пожаловать",
      children: ["Добро пожаловать", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/getting-started/#добро-пожаловать",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Добро пожаловать на страницы документации Strudel!"
    }), "\n", createVNode(_components.p, {
      children: ["Эти страницы познакомят вас со ", createVNode(_components.a, {
        href: "https://strudel.cc/",
        children: "Strudel"
      }), " - веб-окружением для ", createVNode(_components.a, {
        href: "https://github.com/toplap/awesome-livecoding/",
        children: "live coding"
      }), ", которое реализует алгоритмический язык pattern ", createVNode(_components.a, {
        href: "https://tidalcycles.org/",
        children: "Tidal Cycles"
      }), "."]
    }), "\n", createVNode(_components.h1, {
      id: "что-такое-strudel",
      children: ["Что такое Strudel?", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/getting-started/#что-такое-strudel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://strudel.cc/",
        children: "Strudel"
      }), " - это версия ", createVNode(_components.a, {
        href: "https://tidalcycles.org/",
        children: "Tidal Cycles"
      }), ", написанная на ", createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        children: "JavaScript"
      }), ", созданная ", createVNode(_components.a, {
        href: "https://slab.org/",
        children: "Alex McLean"
      }), " и ", createVNode(_components.a, {
        href: "https://froos.cc/",
        children: "Felix Roos"
      }), " в 2022 году.\nTidal Cycles, также известный как Tidal, это язык для ", createVNode(_components.a, {
        href: "https://algorithmicpattern.org/",
        children: "алгоритмических pattern"
      }), ", и хотя чаще всего он используется для ", createVNode(_components.a, {
        href: "https://tidalcycles.org/docs/showcase",
        children: "создания музыки"
      }), ", его можно использовать для любого вида деятельности по созданию паттернов, включая ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=TfEmEsusXjU",
        children: "ткачество"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Tidal был впервые реализован как библиотека, написанная на функциональном языке программирования ", createVNode(_components.a, {
        href: "https://www.haskell.org/",
        children: "Haskell"
      }), ", и сам по себе он не производит никакого звука.\nДля воспроизведения звука его необходимо подключить к звуковому движку, и по умолчанию это плагин ", createVNode(_components.a, {
        href: "https://supercollider.github.io/",
        children: "SuperCollider"
      }), " под названием ", createVNode(_components.a, {
        href: "https://github.com/musikinformatik/SuperDirt/",
        children: "SuperDirt"
      }), ".\nПоэтому начинающим пользователям может быть сложно установить как Tidal Cycles, так и SuperDirt, поскольку есть много мелких деталей, которые нужно учесть.\nОднако Strudel работает непосредственно в вашем веб-браузере, не требует установки какого-либо дополнительного программного обеспечения и может воспроизводить звук самостоятельно."]
    }), "\n", createVNode(_components.h1, {
      id: "strudel-repl-и-minirepl",
      children: ["Strudel REPL и MiniREPL", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/getting-started/#strudel-repl-и-minirepl",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Основное место для создания музыки с помощью Strudel - это ", createVNode(_components.a, {
        href: "https://strudel.cc/",
        children: "Strudel REPL"
      }), " (", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",
        children: "что такое REPL?"
      }), "), но на этих страницах вы также встретите интерактивные “MiniREPL”, где вы можете слушать и редактировать Strudel patterns.\nПопробуйте нажать на значок воспроизведения ниже:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd sd")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Затем отредактируйте текст так, чтобы он читался как ", createVNode(_components.code, {
        children: "s(\"bd sd cp hh\")"
      }), " и нажмите значок обновления.\nПоздравляем, вы только что создали свой первый Strudel pattern с помощью live coding!"]
    }), "\n", createVNode(_components.p, {
      children: "С помощью Strudel вы можете выразительно писать динамические музыкальные произведения.\nВам не нужно знать JavaScript или Tidal Cycles, чтобы создавать музыку с помощью Strudel.\nЭто интерактивное руководство проведет вас через основы Strudel."
    }), "\n", createVNode(_components.h1, {
      id: "покажите-мне-демо",
      children: ["Покажите мне демо!", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/getting-started/#покажите-мне-демо",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы увидеть и услышать, что может делать Strudel, посетите ", createVNode(_components.a, {
        href: "https://strudel.cc/",
        children: "Strudel REPL"
      }), " и нажмите на значок Shuffle в верхнем меню.\nВы можете почувствовать Strudel, просматривая и редактируя эти примеры и нажимая на значок обновления для применения изменений."]
    }), "\n", createVNode(_components.p, {
      children: ["Вы также можете просмотреть примеры ", createVNode(_components.a, {
        href: "/examples/",
        children: "здесь"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Кроме того, вы можете попробовать, что может делать Strudel, нажав play на этом треке:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `samples({
bd: ['bd/BT0AADA.wav','bd/BT0AAD0.wav','bd/BT0A0DA.wav','bd/BT0A0D3.wav','bd/BT0A0D0.wav','bd/BT0A0A7.wav'],
sd: ['sd/rytm-01-classic.wav','sd/rytm-00-hard.wav'],
hh: ['hh27/000_hh27closedhh.wav','hh/000_hh3closedhh.wav'],
}, 'github:tidalcycles/dirt-samples');
stack(
s("bd,[~ <sd!3 sd(3,4,2)>],hh*8") // барабаны
.speed(perlin.range(.7,.9)) // случайная вариация скорости sample
,"<a1 b1\*2 a1(3,8) e2>" // басовая линия
.off(1/8,x=>x.add(12).degradeBy(.5)) // случайные октавные скачки
.add(perlin.range(0,.5)) // случайная вариация высоты тона
.superimpose(add(.05)) // добавить второй, слегка расстроенный голос
.note() // обернуть в "note"
.decay(.15).sustain(0) // сделать каждую ноту одинаковой длины
.s('sawtooth') // форма волны
.gain(.4) // уменьшить громкость
.cutoff(sine.slow(7).range(300,5000)) // автоматизация cutoff
,"<Am7!3 <Em7 E7b13 Em7 Ebm7b5>>".voicings('lefthand') // аккорды
.superimpose(x=>x.add(.04)) // добавить второй, слегка расстроенный голос
.add(perlin.range(0,.5)) // случайная вариация высоты тона
.note() // обернуть в "note"
.s('sawtooth') // форма волны
.gain(.16) // уменьшить громкость
.cutoff(500) // фиксированный cutoff
.attack(1) // медленное появление
)
.slow(3/2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "strudel---это-незавершенная-работа-",
      children: ["Strudel - это незавершенная работа 🚧", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/getting-started/#strudel---это-незавершенная-работа-",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что этот проект все еще находится в экспериментальном состоянии.\nВ будущем некоторые его части могут значительно измениться.\nЭто руководство также далеко от завершения.\nВы можете внести свой вклад, нажав “Edit this page” в правом верхнем углу, или посетив ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/",
        children: "Strudel GitHub page"
      }), "."]
    }), "\n", createVNode(_components.h1, {
      id: "что-дальше",
      children: ["Что дальше?", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/getting-started/#что-дальше",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Переходите на страницу ", createVNode(_components.a, {
        href: "/learn/notes/",
        children: "Notes"
      }), "."]
    }), "\n", createVNode("br", {})]
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

const url = "/learn/getting-started";
const file = "/home/user/Bulka/website/src/pages/learn/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/getting-started.mdx";
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
