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
  "title": "Синтаксис кодирования",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "синтаксис-кодирования",
    "text": "Синтаксис кодирования"
  }, {
    "depth": 1,
    "slug": "функции-аргументы-и-цепочки",
    "text": "Функции, аргументы и цепочки"
  }, {
    "depth": 2,
    "slug": "напишите-свою-собственную-цепную-функцию",
    "text": "Напишите свою собственную цепную функцию"
  }, {
    "depth": 1,
    "slug": "комментарии",
    "text": "Комментарии"
  }, {
    "depth": 1,
    "slug": "строки",
    "text": "Строки"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "синтаксис-кодирования",
      children: ["Синтаксис кодирования", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/code/#синтаксис-кодирования",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Давайте сделаем шаг назад и разберемся, как работает синтаксис в Strudel."
    }), "\n", createVNode(_components.p, {
      children: "Взгляните на этот простой пример:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").s("piano")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["У нас есть слово ", createVNode(_components.code, {
          children: "note"
        }), ", за которым следуют скобки ", createVNode(_components.code, {
          children: "()"
        }), " с некоторыми словами/буквами/цифрами внутри, окруженными кавычками ", createVNode(_components.code, {
          children: "\"c a f e\""
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Затем у нас есть точка ", createVNode(_components.code, {
          children: "."
        }), ", за которой следует еще один похожий фрагмент кода ", createVNode(_components.code, {
          children: "s(\"piano\")"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Мы также видим, что эти тексты ", createVNode(_components.em, {
          children: "подсвечены"
        }), " с использованием цветов: слово ", createVNode(_components.code, {
          children: "note"
        }), " фиолетовое, скобки ", createVNode(_components.code, {
          children: "()"
        }), " серые, а содержимое внутри ", createVNode(_components.code, {
          children: "\"\""
        }), " зеленое. (Цвета могут отличаться, если вы изменили тему по умолчанию)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Что произойдет, если мы попытаемся “сломать” этот паттерн разными способами?"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note(c a f e).s(piano)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e")s("piano")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note["c a f e"].s{"piano"}`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Хорошо, кажется, ни один из них не работает…"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("piano").note("c a f e")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Этот работает, но теперь мы слышим только первую ноту…"
    }), "\n", createVNode(_components.p, {
      children: "Так что же здесь происходит?"
    }), "\n", createVNode(_components.h1, {
      id: "функции-аргументы-и-цепочки",
      children: ["Функции, аргументы и цепочки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/code/#функции-аргументы-и-цепочки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "До сих пор мы видели следующий синтаксис:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "xxx(\"foo\").yyy(\"bar\")"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["В общем, ", createVNode(_components.code, {
        children: "xxx"
      }), " и ", createVNode(_components.code, {
        children: "yyy"
      }), " называются ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Function_(computer_programming)",
        children: createVNode(_components.em, {
          children: "функциями"
        })
      }), ", в то время как ", createVNode(_components.code, {
        children: "foo"
      }), " и ", createVNode(_components.code, {
        children: "bar"
      }), " называются ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Parameter_(computer_programming)",
        children: [createVNode(_components.em, {
          children: "аргументами"
        }), " или ", createVNode(_components.em, {
          children: "параметрами"
        })]
      }), " функции.\nДо сих пор мы использовали функции для объявления того, каким аспектом звука мы хотим управлять, а их аргументы - для фактических данных.\nФункция ", createVNode(_components.code, {
        children: "yyy"
      }), " называется ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Method_chaining",
        children: [createVNode(_components.em, {
          children: "цепной"
        }), " функцией"]
      }), ", потому что перед ней стоит точка (", createVNode(_components.code, {
        children: "."
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: ["В общем, идея цепочек заключается в том, что код вроде ", createVNode(_components.code, {
        children: "a(\"this\").b(\"that\").c(\"other\")"
      }), " позволяет функциям ", createVNode(_components.code, {
        children: "a"
      }), ", ", createVNode(_components.code, {
        children: "b"
      }), " и ", createVNode(_components.code, {
        children: "c"
      }), " выполняться в определенном порядке, без необходимости писать их как три отдельные строки кода.\nВы можете думать об этом как о соединении аудиоэффектов вместе с помощью гитарных педалей или цифровых аудиоэффектов."]
    }), "\n", createVNode(_components.p, {
      children: "Strudel активно использует цепные функции. Вот более сложный пример:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("a3 c#4 e4 a4")
.s("sawtooth")
.cutoff(500)
//.delay(0.5)
.room(0.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "напишите-свою-собственную-цепную-функцию",
      children: ["Напишите свою собственную цепную функцию", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/code/#напишите-свою-собственную-цепную-функцию",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете написать свою собственную цепную функцию, используя ", createVNode(_components.code, {
        children: "register"
      }), ". Вот приведенная выше цепочка, зарегистрированная как переиспользуемая цепная функция."]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `const effectChain = register('effectChain', (pat) => pat
  .s("sawtooth")
  .cutoff(500)
  //.delay(0.5)
  .room(0.5)
)
note("a3 c#4 e4 a4").effectChain()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Попробуйте добавить ", createVNode(_components.code, {
        children: ".rev()"
      }), " после ", createVNode(_components.code, {
        children: "effectChain()"
      }), ", чтобы услышать дополнительные эффекты."]
    }), "\n", createVNode(_components.h1, {
      id: "комментарии",
      children: ["Комментарии", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/code/#комментарии",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "//"
      }), " в приведенном выше примере - это строчный комментарий, в результате которого функция ", createVNode(_components.code, {
        children: "delay"
      }), " игнорируется.\nЭто удобный способ быстро включать и выключать код.\nПопробуйте раскомментировать эту строку, удалив ", createVNode(_components.code, {
        children: "//"
      }), " и обновив паттерн.\nВы также можете использовать сочетание клавиш ", createVNode(_components.code, {
        children: "cmd-/"
      }), " для переключения комментариев."]
    }), "\n", createVNode(_components.p, {
      children: ["Вы могли заметить, что некоторые комментарии в примерах REPL содержат слова, начинающиеся с ”@”, например ", createVNode(_components.code, {
        children: "@by"
      }), " или ", createVNode(_components.code, {
        children: "@license"
      }), ".\nЭто всего лишь соглашение для определения некоторой информации о музыке. Мы поговорим об этом в разделе ", createVNode(_components.a, {
        href: "/learn/metadata/",
        children: "Метаданные музыки"
      }), "."]
    }), "\n", createVNode(_components.h1, {
      id: "строки",
      children: ["Строки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/code/#строки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Хорошо, а что насчет содержимого внутри кавычек (например, ", createVNode(_components.code, {
        children: "\"c a f e\""
      }), ")?\nВ JavaScript, как и в большинстве языков программирования, это содержимое называется ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/String_(computer_science)",
        children: createVNode(_components.em, {
          children: "строкой"
        })
      }), ".\nСтрока - это просто последовательность отдельных символов.\nВ TidalCycles строки в двойных кавычках используются для написания ", createVNode(_components.em, {
        children: "patterns"
      }), " с использованием mini-notation, и время от времени вы можете услышать фразу ", createVNode(_components.em, {
        children: "pattern string"
      }), ".\nЕсли вы хотите создать обычную строку, а не паттерн, вы можете использовать одинарные кавычки, например, ", createVNode(_components.code, {
        children: "'C minor'"
      }), " не будет интерпретироваться как Mini Notation."]
    }), "\n", createVNode(_components.p, {
      children: "Хорошая новость в том, что это охватывает большую часть синтаксиса JavaScript, необходимого для Strudel!"
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

const url = "/learn/code";
const file = "/home/user/Bulka/website/src/pages/learn/code.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/code.mdx";
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
