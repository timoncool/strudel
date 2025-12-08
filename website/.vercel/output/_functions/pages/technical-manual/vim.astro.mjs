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
  "title": "Горячие клавиши Vim",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "горячие-клавиши-vim-в-repl",
    "text": "Горячие клавиши Vim в REPL"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "горячие-клавиши-vim-в-repl",
      children: ["Горячие клавиши Vim в REPL", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/vim/#горячие-клавиши-vim-в-repl",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Когда редактор REPL (CodeMirror) настроен на использование горячих клавиш Vim, доступны следующие команды:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ":w — Оценить текущий код"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Запускает ту же оценку, что и Ctrl+Enter / Alt+Enter"
          }), "\n", createVNode(_components.li, {
            children: ["Вы увидите сообщения в панели Console такие как:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "[vim] :w — evaluating code"
              }), "\n", createVNode(_components.li, {
                children: "[repl] evaluate via event"
              }), "\n", createVNode(_components.li, {
                children: "[eval] code updated"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ":q — Остановить/приостановить воспроизведение"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Запускает то же действие остановки, что и Alt+."
          }), "\n", createVNode(_components.li, {
            children: "Полезно для быстрой остановки планирования без выхода из режима Vim"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "gc — Переключить комментарии строк для текущего выделения"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Работает в обычном и визуальном режимах"
          }), "\n", createVNode(_components.li, {
            children: "Если есть выделение, все выбранные строки переключаются"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Примечания"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Поведение учитывает текущий языковой режим в редакторе для синтаксиса комментариев."
      }), "\n", createVNode(_components.li, {
        children: "Если открыто несколько редакторов REPL, команды нацелены на активный редактор. Реализация отправляет пользовательские события, обрабатываемые редактором."
      }), "\n", createVNode(_components.li, {
        children: "Если вы не видите панель Console, откройте правую панель в UI REPL."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Устранение неполадок"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Если :w записывает в лог, но оценка не применяется, убедитесь, что горячие клавиши Vim активны, и попробуйте снова. Вы также можете использовать Ctrl+Enter в качестве запасного варианта."
      }), "\n", createVNode(_components.li, {
        children: "Для :q / gc убедитесь, что фокус находится внутри редактора. Если возникает ошибка, перезагрузите страницу, чтобы сбросить состояние редактора, и попробуйте снова."
      }), "\n"]
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

const url = "/technical-manual/vim";
const file = "/home/user/Bulka/website/src/pages/technical-manual/vim.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/technical-manual/vim.mdx";
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
