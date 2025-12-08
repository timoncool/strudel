/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
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
  "title": "Создание ритмов",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "создание-ритмов",
    "text": "Создание ритмов"
  }, {
    "depth": 2,
    "slug": "от-простого-к-сложному-ритму",
    "text": "От простого к сложному ритму"
  }, {
    "depth": 2,
    "slug": "ещё-одна-ритмическая-конструкция",
    "text": "Ещё одна ритмическая конструкция"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Примечание:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["это было (частично) переведено с ", createVNode(_components.a, {
          href: "https://tidalcycles.org/docs/patternlib/howtos/buildrhythms",
          children: "https://tidalcycles.org/docs/patternlib/howtos/buildrhythms"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["это звучит хорошо только с ", createVNode(_components.code, {
          children: "samples('github:tidalcycles/dirt-samples')"
        }), " в prebake"]
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "создание-ритмов",
      children: ["Создание ритмов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/rhythms/#создание-ритмов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эта страница научит вас, как начать писать ритмы, используя различные техники. Это хороший способ изучить Strudel более интуитивно."
    }), "\n", createVNode(_components.h2, {
      id: "от-простого-к-сложному-ритму",
      children: ["От простого к сложному ритму", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/rhythms/#от-простого-к-сложному-ритму",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Простая бочка - малый барабан:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd sd").slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Давайте выберем другой sample малого барабана:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd sd:3").slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Теперь изменим ритм:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd*2 [~ sd:3]").slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "И добавим томы:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd*2 [[~ lt] sd:3] lt:1 [ht mt*2]").slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Начинаем трансформировать, сдвигаем на четверть cycle через один cycle:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd*2 [[~ lt] sd:3] lt:1 [ht mt*2]")
.every(2, early(.25)).slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Паттернизируем величину сдвига:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd*2 [[~ lt] sd:3] lt:1 [ht mt*2]")
.every(2, early("<.25 .125 .5>")).slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Добавляем эффекты с паттернами:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd*2 [[~ lt] sd:3] lt:1 [ht mt*2]")
.every(2, early("<.25 .125 .5>"))
.shape("<0 .5 .3>")
.room(saw.range(0,.2).slow(4))
.slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Больше трансформаций:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd*2 [[~ lt] sd:3] lt:1 [ht mt*2]")
.every(2, early("<.25 .125 .5>"))
.shape("<0 .5 .3>")
.room(saw.range(0,.2).slow(4))
.jux(id, rev, x=>x.speed(2))
.slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "ещё-одна-ритмическая-конструкция",
      children: ["Ещё одна ритмическая конструкция", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/rhythms/#ещё-одна-ритмическая-конструкция",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Давайте начнём с последовательности:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `n("0 0 [2 0] [2 3]").s("feel").speed(1.5).slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Добавляем немного вкуса:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `n("0 <0 4> [2 0] [2 3]").s("feel").speed(1.5).slow(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Меняем samples местами через один cycle:"
    }), "\n", createVNode(_components.p, {
      children: ["TODO: реализовать ", createVNode(_components.code, {
        children: "rot"
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

const url = "/recipes/rhythms";
const file = "/home/user/Bulka/website/src/pages/recipes/rhythms.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/recipes/rhythms.mdx";
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
