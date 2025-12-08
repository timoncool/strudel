/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import { $ as $$Box } from '../../chunks/Box_BjdITm45.mjs';
import 'react/jsx-runtime';
import 'react';
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
  "title": "Эффекты паттернов",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "эффекты-паттернов",
    "text": "Эффекты паттернов"
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "эффекты-паттернов",
      children: ["Эффекты паттернов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/pattern-effects/#эффекты-паттернов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "До сих пор большинство функций, которые мы видели, — это то, на что обычно способны другие музыкальные программы: секвенсирование звуков, воспроизведение нот, управление эффектами."
    }), "\n", createVNode(_components.p, {
      children: "В этой главе мы рассмотрим функции, которые более уникальны для tidal."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "обратные паттерны с помощью rev"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("jazz").rev()`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "воспроизведение pattern слева и его модификация справа с помощью jux"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("jazz").jux(rev)`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это то же самое, что:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("jazz").pan(0)
$: n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("jazz").pan(1).rev()`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Давайте визуализируем, что здесь происходит:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("jazz").pan(0).color("cyan")
$: n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("jazz").pan(1).color("magenta").rev()`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Попробуйте закомментировать одну из двух строк, добавив ", createVNode(_components.code, {
          children: "//"
        }), " перед строкой"]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "несколько темпов"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c2, eb3 g3 [bb3 c4]").sound("piano").slow("0.5,1,1.5")`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это как если бы мы делали"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: note("c2, eb3 g3 [bb3 c4]").s("piano").slow(0.5).color('cyan')
$: note("c2, eb3 g3 [bb3 c4]").s("piano").slow(1).color('magenta')
$: note("c2, eb3 g3 [bb3 c4]").s("piano").slow(1.5).color('yellow')`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Попробуйте закомментировать одну или несколько строк, добавив ", createVNode(_components.code, {
          children: "//"
        }), " перед строкой"]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "add"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(60)
note("c2 [eb3,g3] ".add("<0 <1 -1>>"))
.color("<cyan <magenta yellow>>").adsr("[.1 0]:.2:[1 0]")
.sound("gm_acoustic_bass").room(.5)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Если вы добавляете число к ноте, нота будет обрабатываться как число"
      })
    }), "\n", createVNode(_components.p, {
      children: "Мы можем добавлять столько раз, сколько захотим:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(60)
note("c2 [eb3,g3]".add("<0 <1 -1>>").add("0,7"))
.color("<cyan <magenta yellow>>").adsr("[.1 0]:.2:[1 0]")
.sound("gm_acoustic_bass").room(.5)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "add с scale"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 [2 4] <3 5> [~ <4 1>]".add("<0 [0,2,4]>"))
.scale("C5:minor").release(.5)
.sound("gm_xylophone").room(.5)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "время складывать"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `$: n("0 [2 4] <3 5> [~ <4 1>]".add("<0 [0,2,4]>"))
.scale("C5:minor")
.sound("gm_xylophone")
.room(.4).delay(.125)
$: note("c2 [eb3,g3]".add("<0 <1 -1>>"))
.adsr("[.1 0]:.2:[1 0]")
.sound("gm_acoustic_bass")
.room(.5)
$: n("0 1 [2 3] 2").sound("jazz").jux(rev)`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "ply"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh hh, bd rim [~ cp] rim").bank("RolandTR707").ply(2)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "это как написать:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `sound("hh*2 hh*2, bd*2 rim*2 [~ cp*2] rim*2").bank("RolandTR707")`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: ["Попробуйте использовать pattern для функции ", createVNode(_components.code, {
          children: "ply"
        }), ", например ", createVNode(_components.code, {
          children: "\"<1 2 1 3>\""
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "off"
      })
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 [4 <3 2>] <2 3> [~ 1]"
.off(1/16, x=>x.add(4))
//.off(1/8, x=>x.add(7))
).scale("<C5:minor Db5:mixolydian>/2")
.s("triangle").room(.5).dec(.1)`,
      punchcard: true,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["В нотации ", createVNode(_components.code, {
          children: ".off(1/16, x=>x.add(4))"
        }), " говорится:"]
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["взять исходный pattern с именем ", createVNode(_components.code, {
            children: "x"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["модифицировать ", createVNode(_components.code, {
            children: "x"
          }), " с помощью ", createVNode(_components.code, {
            children: ".add(4)"
          }), ", и"]
        }), "\n", createVNode(_components.li, {
          children: ["воспроизвести его со сдвигом относительно исходного pattern на ", createVNode(_components.code, {
            children: "1/16"
          }), " cycle."]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: "off также полезен для модификации других звуков и может быть даже вложенным:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("bd sd [rim bd] sd,[~ hh]*4").bank("CasioRZ1")
.off(2/16, x=>x.speed(1.5).gain(.25)
.off(3/16, y=>y.vowel("<a e i o>*8")))`,
      "client:component-path": "@src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "название"
          }), createVNode(_components.th, {
            children: "описание"
          }), createVNode(_components.th, {
            children: "пример"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "rev"
          }), createVNode(_components.td, {
            children: "обратить порядок"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 2 4 6 ~ 7 9 5").scale("C:minor").rev()`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "jux"
          }), createVNode(_components.td, {
            children: "разделить лево/право, модифицировать право"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 2 4 6 ~ 7 9 5").scale("C:minor").jux(rev)`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "add"
          }), createVNode(_components.td, {
            children: "добавить числа / ноты"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 2 4 6 ~ 7 9 5".add("<0 1 2 1>")).scale("C:minor")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "ply"
          }), createVNode(_components.td, {
            children: "ускорить каждое событие n раз"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd sd [~ bd] sd").ply("<1 2 3>")`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "off"
          }), createVNode(_components.td, {
            children: "копировать, сдвигать время и модифицировать"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd sd [~ bd] sd, hh*8").off(1/16, x=>x.speed(2))`,
              "client:component-path": "@src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
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

const url = "/workshop/pattern-effects";
const file = "/home/user/Bulka/website/src/pages/workshop/pattern-effects.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/workshop/pattern-effects.mdx";
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
