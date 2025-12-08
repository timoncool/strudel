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
  "title": "Patterns",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "patterns",
    "text": "Patterns"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "patterns",
      children: ["Patterns", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/patterns/#patterns",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Patterns являются сущностью Tidal. Его patterns - это абстрактные сущности, представляющие потоки времени в виде функций, адаптируя технику, называемую чистым функциональным реактивным программированием. Принимая временной диапазон в качестве входных данных, Pattern может выдавать набор событий, которые происходят в течение этого временного диапазона. От структуры Pattern зависит, как события расположены во времени.\nС этого момента этот процесс генерации событий из временного диапазона будет называться ", createVNode(_components.strong, {
        children: "запросом"
      }), " (querying).\nПример:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `const pattern = sequence("c3", ["e3", "g3"])
const events = pattern.queryArc(0, 1)
console.log(events.map((e) => e.show()))
silence`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["В этом примере мы создаем pattern с помощью функции ", createVNode(_components.code, {
        children: "sequence"
      }), " и ", createVNode(_components.strong, {
        children: "запрашиваем"
      }), " его для временного диапазона от ", createVNode(_components.code, {
        children: "0"
      }), " до ", createVNode(_components.code, {
        children: "1"
      }), ".\nЭти числа представляют единицы времени, называемые ", createVNode(_components.strong, {
        children: "cycles"
      }), ". Длина одного cycle зависит от темпа, который по умолчанию равен одному cycle в секунду.\nПолученные события:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  '[ 0/1 -> 1/2 | c3 ]'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  '[ 1/2 -> 3/4 | e3 ]'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  '[ 3/4 -> 1/1 | g3 ]'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "];"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Каждое событие имеет значение, время начала и время окончания, где время представлено в виде дроби. В приведенном выше случае события размещены в последовательном порядке, где c3 занимает первую половину, а e3 и g3 вместе занимают вторую половину. Это временное размещение является результатом функции ", createVNode(_components.code, {
        children: "sequence"
      }), ", которая делит свои аргументы поровну на один cycle. Если аргумент является массивом, то же правило применяется к этой части cycle. В примере e3 и g3 делятся поровну на вторую половину всего cycle."]
    }), "\n", createVNode(_components.p, {
      children: "Обратите внимание, что функция query - это не просто способ доступа к pattern, а в соответствии с принципами функционального программирования, является самим pattern. Это означает, что теоретически нет способа изменить pattern, он непрозрачен как чистая функция. На практике же Strudel и Tidal - это все о трансформации patterns, так как же это делается? Ответ - заменой pattern новым, который вызывает старый. Этот новый способен только манипулировать запросом перед передачей его старому pattern и манипулировать результатами от него перед их возвратом вызывающей стороне. Но этого достаточно для поддержки всех временных и структурных манипуляций, предоставляемых обширной библиотекой функций Strudel (и Tidal)."
    }), "\n", createVNode(_components.p, {
      children: "Приведенные выше примеры не представляют, как Strudel используется на практике. В редакторе live coding пользователю нужно только ввести сам pattern, запрос будет обработан планировщиком (scheduler). Планировщик будет многократно запрашивать pattern для событий, которые затем планируются как синтез звука или другие триггеры событий."
    }), "\n", createVNode(_components.p, {
      children: ["Можем ли мы ", createVNode(_components.a, {
        href: "/technical-manual/alignment/",
        children: "выравнивать"
      }), " patterns?"]
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

const url = "/technical-manual/patterns";
const file = "/home/user/Bulka/website/src/pages/technical-manual/patterns.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/technical-manual/patterns.mdx";
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
