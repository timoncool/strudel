/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import { J as JsDoc } from '../../chunks/JsDoc_CifKo6nH.mjs';
import { $ as $$Box } from '../../chunks/Box_BjdITm45.mjs';
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
  "title": "Визуальная обратная связь",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "визуальная-обратная-связь",
    "text": "Визуальная обратная связь"
  }, {
    "depth": 2,
    "slug": "подсветка-mini-notation",
    "text": "Подсветка Mini Notation"
  }, {
    "depth": 2,
    "slug": "глобальные-против-встроенных-визуализаций",
    "text": "Глобальные против встроенных визуализаций"
  }, {
    "depth": 2,
    "slug": "punchcard--pianoroll",
    "text": "Punchcard / Pianoroll"
  }, {
    "depth": 2,
    "slug": "spiral",
    "text": "Spiral"
  }, {
    "depth": 2,
    "slug": "scope",
    "text": "Scope"
  }, {
    "depth": 2,
    "slug": "pitchwheel",
    "text": "Pitchwheel"
  }, {
    "depth": 2,
    "slug": "spectrum",
    "text": "Spectrum"
  }, {
    "depth": 2,
    "slug": "markcss",
    "text": "markcss"
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
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "визуальная-обратная-связь",
      children: ["Визуальная обратная связь", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/visual-feedback/#визуальная-обратная-связь",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Существует несколько функций, которые добавляют визуальную обратную связь к вашим patterns."
    }), "\n", createVNode(_components.h2, {
      id: "подсветка-mini-notation",
      children: ["Подсветка Mini Notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/visual-feedback/#подсветка-mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Когда вы пишете mini notation с “двойными кавычками” или `обратными кавычками`, активные части mini notation будут подсвечиваться:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `n("<0 2 1 3 2>*8")
.scale("<A1 D2>/4:minor:pentatonic")
.s("supersaw").lpf(300).lpenv("<4 3 2>\*4")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вы также можете изменить цвет, даже создать pattern для него:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `n("<0 2 1 3 2>*8")
.scale("<A1 D2>/4:minor:pentatonic")
.s("supersaw").lpf(300).lpenv("<4 3 2>*4")
.color("cyan magenta")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "глобальные-против-встроенных-визуализаций",
      children: ["Глобальные против встроенных визуализаций", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/visual-feedback/#глобальные-против-встроенных-визуализаций",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Следующие функции имеют 2 варианта."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Без префикса"
      }), ": рендерит визуализацию на фон страницы:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").color("white").punchcard()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: ["С префиксом ", createVNode(_components.code, {
          children: "_"
        })]
      }), ": рендерит визуализацию внутри кода. Позволяет использовать несколько визуализаций"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").color("white")._punchcard()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Здесь мы видим 2 варианта для ", createVNode(_components.code, {
        children: "punchcard"
      }), ". То же самое работает для всех остальных ниже.\nДля улучшения читаемости следующие демонстрации будут использовать встроенный вариант."]
    }), "\n", createVNode(_components.h2, {
      id: "punchcard--pianoroll",
      children: ["Punchcard / Pianoroll", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/visual-feedback/#punchcard--pianoroll",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Эти 2 функции рендерят визуализацию в стиле pianoroll.\nЕдинственная разница между ними в том, что ", createVNode(_components.code, {
        children: "pianoroll"
      }), " будет рендерить pattern напрямую,\nв то время как ", createVNode(_components.code, {
        children: "punchcard"
      }), " также будет учитывать трансформации, которые происходят после:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").color("white")
._punchcard()
.color("cyan")`,
      autodraw: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Здесь ", createVNode(_components.code, {
        children: "color"
      }), " все еще виден в визуализации, даже если он применен после ", createVNode(_components.code, {
        children: "_punchcard"
      }), ".\nНапротив, цвет не виден при использовании ", createVNode(_components.code, {
        children: "_pianoroll"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").color("white")
._pianoroll()
.color("cyan")`,
      autodraw: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", "\n", createVNode("br", {}), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "punchcard"
        }), " менее ресурсоемкий, потому что использует те же данные, что и для подсветки mini notation."]
      })
    }), "\n", createVNode(_components.p, {
      children: "Визуализация может быть настроена путем передачи опций. Эти опции одинаковы для обеих функций."
    }), "\n", createVNode(_components.p, {
      children: "Далее следует API документация всех опций, которые вы можете передать:"
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pianoroll",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "spiral",
      children: ["Spiral", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/visual-feedback/#spiral",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "spiral",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "scope",
      children: ["Scope", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/visual-feedback/#scope",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "scope",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pitchwheel",
      children: ["Pitchwheel", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/visual-feedback/#pitchwheel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pitchwheel",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "spectrum",
      children: ["Spectrum", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/visual-feedback/#spectrum",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "spectrum",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "markcss",
      children: ["markcss", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/visual-feedback/#markcss",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "markcss",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
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

const url = "/learn/visual-feedback";
const file = "/home/user/Bulka/website/src/pages/learn/visual-feedback.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/visual-feedback.mdx";
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
