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
  "title": "Microrhythms",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "microrhythms",
    "text": "Microrhythms"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["смотрите ", createVNode(_components.a, {
        href: "https://strudel.cc/?zMEo5kowGrFc",
        children: "https://strudel.cc/?zMEo5kowGrFc"
      })]
    }), "\n", createVNode(_components.h1, {
      id: "microrhythms",
      children: ["Microrhythms", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/microrhythms/#microrhythms",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вдохновлённые этой ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=or7B6vI3jOo",
        children: "Мини-лекцией о нотации Microrhythm"
      }), ", давайте посмотрим, как мы можем выразить microrhythms с помощью Strudel."]
    }), "\n", createVNode(_components.p, {
      children: ["Временные метки первого ритма - ", createVNode(_components.code, {
        children: "0 1/5 1/2 2/3 1"
      }), ". Мы могли бы наивно выразить это с помощью stack:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("hh").struct(
stack(
  "x", // 0
  "~ x ~@3", // 1/5
  "~ x", // 1/2
  "~@2 x" // 2/3
))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Хотя это работает, у этого есть две проблемы:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "это не очень компактно"
      }), "\n", createVNode(_components.li, {
        children: "длительности неправильные, например, первая нота занимает весь cycle"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "В видео длительность временной метки вычисляется путём вычитания её из следующей временной метки:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1/5 - 0 = 1/5 = 6/30"
      }), "\n", createVNode(_components.li, {
        children: "1/2 - 1/5 = 3/10 = 9/30"
      }), "\n", createVNode(_components.li, {
        children: "2/3 - 1/2 = 1/6 = 5/30"
      }), "\n", createVNode(_components.li, {
        children: "1 - 2/3 = 1/3 = 10/30"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Используя их, мы теперь можем выразить ритм гораздо короче:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("hh").struct("x@6 x@9 x@5 x@10")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Проблемы первой нотации теперь исправлены: она гораздо короче, и длительности правильные.\nТем не менее, эта нотация требовала вычисления длительностей вручную, что можно автоматизировать:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `Pattern.prototype.micro = function (...timestamps) {
const durations = timestamps.map((x, i, a) => {
  const next = i < a.length-1 ? a[i+1] : 1;
  return next - a[i]
})
return this.struct(timeCat(...durations.map(d => [d, 1]))).late(timestamps[0])
}
s('hh').micro(0, 1/5, 1/2, 2/3)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Эта нотация ещё короче, и она позволяет напрямую вводить временные метки!"
    }), "\n", createVNode(_components.p, {
      children: "Это второй пример из видео:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `Pattern.prototype.micro = function (...timestamps) {
const durations = timestamps.map((x, i, a) => {
  const next = i < a.length-1 ? a[i+1] : 1;
  return next - a[i]
})
return this.struct(timeCat(...durations.map(d => [d, 1]))).late(timestamps[0])
}
s('hh').micro(0, 1/6, 2/5, 2/3, 3/4)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["с басом: ", createVNode(_components.a, {
        href: "https://strudel.cc/?sTglgJJCPIeY",
        children: "https://strudel.cc/?sTglgJJCPIeY"
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

const url = "/recipes/microrhythms";
const file = "/home/user/Bulka/website/src/pages/recipes/microrhythms.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/recipes/microrhythms.mdx";
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
