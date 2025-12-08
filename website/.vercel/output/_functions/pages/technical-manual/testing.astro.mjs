/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
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
  "title": "Тестирование",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "тестирование",
    "text": "Тестирование"
  }, {
    "depth": 2,
    "slug": "модульные-тесты",
    "text": "Модульные тесты"
  }, {
    "depth": 2,
    "slug": "snapshot-тесты",
    "text": "Snapshot тесты"
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
    children: [createVNode(_components.h1, {
      id: "тестирование",
      children: ["Тестирование", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/testing/#тестирование",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Strudel использует ", createVNode(_components.a, {
        href: "https://vitest.dev/",
        children: "vitest"
      }), " для тестирования с 2 типами стратегий тестирования:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "модульные тесты для детального тестирования"
      }), "\n", createVNode(_components.li, {
        children: "автоматизированные snapshot тесты для более широкого тестирования"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "модульные-тесты",
      children: ["Модульные тесты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/testing/#модульные-тесты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Каждый package имеет папку ", createVNode(_components.code, {
        children: "test"
      }), ", где тесты написаны на основе файла за файлом, например ", createVNode(_components.code, {
        children: "util.test.mjs"
      }), " реализует все тесты для ", createVNode(_components.code, {
        children: "util.mjs"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "snapshot-тесты",
      children: ["Snapshot тесты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/testing/#snapshot-тесты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Snapshot тесты позволяют тестировать большие фрагменты данных. Strudel использует snapshot тесты для:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Примеров фрагментов: ", createVNode(_components.code, {
          children: "examples.test.mjs"
        }), ", используя фрагменты под ", createVNode(_components.code, {
          children: "@example"
        }), " внутри jsdoc комментариев"]
      }), "\n", createVNode(_components.li, {
        children: ["Примеров мелодий: ", createVNode(_components.code, {
          children: "tunes.test.mjs"
        }), ", используя все patterns в ", createVNode(_components.code, {
          children: "tunes.mjs"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Файлы snapshot (", createVNode(_components.code, {
        children: ".snap"
      }), ") содержат все haps в пределах определенного количества cycles для каждого тестируемого pattern.\nОни позволяют тестировать критические изменения в более широком масштабе.\nЕсли критические изменения преднамеренны, snapshots можно обновить с помощью ", createVNode(_components.code, {
        children: "npm run snapshot"
      }), ".\nПросто убедитесь, что проверили, что все затронутые patterns ведут себя как ожидалось."]
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

const url = "/technical-manual/testing";
const file = "/home/user/Bulka/website/src/pages/technical-manual/testing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/technical-manual/testing.mdx";
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
