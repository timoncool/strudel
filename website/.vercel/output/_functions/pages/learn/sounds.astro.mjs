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
  "title": "Sounds",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "sounds",
    "text": "Sounds"
  }, {
    "depth": 1,
    "slug": "комбинирование-нот-и-звуков",
    "text": "Комбинирование нот и звуков"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "sounds",
      children: ["Sounds", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/sounds/#sounds",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Мы можем воспроизводить звуки с помощью ", createVNode(_components.code, {
        children: "s"
      }), " двумя разными способами:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "s"
        }), " может запускать audio samples, где звуковой файл загружается в фоновом режиме и воспроизводится:\n", createVNode(MiniRepl, {
          "client:idle": true,
          tune: `s("bd hh sd hh")`,
          "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
          "client:component-export": "MiniRepl",
          "client:component-hydration": true
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "s"
        }), " может запускать audio synthesisers, которые синтезируются в реальном времени с помощью кода, также работающего в фоновом режиме:\n", createVNode(MiniRepl, {
          "client:idle": true,
          tune: `s("sawtooth square triangle sine")`,
          "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
          "client:component-export": "MiniRepl",
          "client:component-hydration": true
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете узнать больше об обоих этих подходах на страницах ", createVNode(_components.a, {
        href: "/learn/synths/",
        children: "Synths"
      }), " и ", createVNode(_components.a, {
        href: "/learn/samples/",
        children: "Samples"
      }), "."]
    }), "\n", createVNode(_components.h1, {
      id: "комбинирование-нот-и-звуков",
      children: ["Комбинирование нот и звуков", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/sounds/#комбинирование-нот-и-звуков",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["В обоих вышеприведенных случаях мы больше не контролируем напрямую ", createVNode(_components.code, {
        children: "note"
      }), "/", createVNode(_components.code, {
        children: "freq"
      }), " звука, слышимого через ", createVNode(_components.code, {
        children: "s"
      }), ", как это было на странице ", createVNode(_components.a, {
        href: "/workshop/first-notes/",
        children: "Notes"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Так как же мы можем контролировать и звук, и высоту тона? Мы можем ", createVNode(_components.em, {
        children: "комбинировать"
      }), " ", createVNode(_components.code, {
        children: "note"
      }), "/", createVNode(_components.code, {
        children: "freq"
      }), " с ", createVNode(_components.code, {
        children: "s"
      }), ", чтобы изменить звук наших высот:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("a3 c#4 e4 a4").s("sawtooth")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("57 61 64 69").s("sine")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `freq("220 275 330 440").s("triangle")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Последний пример на самом деле будет звучать одинаково с ", createVNode(_components.code, {
        children: "s"
      }), " или без него, потому что ", createVNode(_components.code, {
        children: "triangle"
      }), " — это значение по умолчанию для ", createVNode(_components.code, {
        children: "s"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Что насчет комбинирования разных нот с разными звуками одновременно?"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `freq("220 275 330 440 550").s("triangle sawtooth sine")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Хм, здесь происходит что-то интересное, связанное с тем, что есть пять нот и три звука."
    }), "\n", createVNode(_components.p, {
      children: ["Теперь давайте сделаем шаг назад и подумаем о ", createVNode(_components.a, {
        href: "/learn/code/",
        children: "Code"
      }), " Strudel, который мы слышали до сих пор."]
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

const url = "/learn/sounds";
const file = "/home/user/Bulka/website/src/pages/learn/sounds.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/sounds.mdx";
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
