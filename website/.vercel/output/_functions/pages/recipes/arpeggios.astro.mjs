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
  "title": "Создание Arpeggios",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "создание-arpeggios",
    "text": "Создание Arpeggios"
  }, {
    "depth": 2,
    "slug": "arpeggios-из-нот",
    "text": "Arpeggios из нот"
  }, {
    "depth": 2,
    "slug": "arpeggios-из-аккордов",
    "text": "Arpeggios из аккордов"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Примечание: Это было (частично) переведено с ", createVNode(_components.a, {
        href: "https://tidalcycles.org/docs/patternlib/howtos/buildarpeggios",
        children: "https://tidalcycles.org/docs/patternlib/howtos/buildarpeggios"
      })]
    }), "\n", createVNode(_components.h1, {
      id: "создание-arpeggios",
      children: ["Создание Arpeggios", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/arpeggios/#создание-arpeggios",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эта страница научит вас, как начать писать arpeggios, используя различные техники. Это хороший способ изучить Strudel более интуитивно."
    }), "\n", createVNode(_components.h2, {
      id: "arpeggios-из-нот",
      children: ["Arpeggios из нот", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/arpeggios/#arpeggios-из-нот",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Начните с простой последовательности нот:"
    }), "\n", createVNode(MiniRepl, {
      tune: `note("c a f e").piano().slow(2)`,
      "client:idle": true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Теперь давайте проигрывать по одной на cycle:"
    }), "\n", createVNode(MiniRepl, {
      tune: `note("<c a f e>").piano().slow(2)`,
      "client:idle": true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Поверх этого поместите копию последовательности, сдвинутую по времени и высоте:"
    }), "\n", createVNode(MiniRepl, {
      tune: `"<c a f e>".off(1/8, add(7))
.note().piano().slow(2)`,
      "client:idle": true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Добавьте структуру в исходную последовательность:"
    }), "\n", createVNode(MiniRepl, {
      tune: `"<c*2 a(3,8) f(3,8,2) e*2>"
.off(1/8, add(7))
.note().piano().slow(2)`,
      "client:idle": true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Реверсируем в одном динамике:"
    }), "\n", createVNode(MiniRepl, {
      tune: `"<c*2 a(3,8) f(3,8,2) e*2>"
.off(1/8, add(7))
.note().piano()
.jux(rev).slow(2)`,
      "client:idle": true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Давайте добавим ещё один слой:"
    }), "\n", createVNode(MiniRepl, {
      tune: `"<c*2 a(3,8) f(3,8,2) e*2>"
.off(1/8, add(7))
.off(1/8, add(12))
.note().piano()
.jux(rev).slow(2)`,
      "client:idle": true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "добавлен slow(2) для приближения к cps tidal"
      }), "\n", createVNode(_components.li, {
        children: "n был заменён на note, потому что использование n не работает как note для samples"
      }), "\n", createVNode(_components.li, {
        children: "legato 2 был удалён, потому что не работает в комбинации с rev (баг)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "arpeggios-из-аккордов",
      children: ["Arpeggios из аккордов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/arpeggios/#arpeggios-из-аккордов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "TODO"
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

const url = "/recipes/arpeggios";
const file = "/home/user/Bulka/website/src/pages/recipes/arpeggios.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/recipes/arpeggios.mdx";
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
