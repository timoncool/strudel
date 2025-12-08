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
  "title": "Итоги",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "итоги-воркшопа",
    "text": "Итоги воркшопа"
  }, {
    "depth": 2,
    "slug": "mini-notation",
    "text": "Mini Notation"
  }, {
    "depth": 2,
    "slug": "звуки",
    "text": "Звуки"
  }, {
    "depth": 2,
    "slug": "ноты",
    "text": "Ноты"
  }, {
    "depth": 2,
    "slug": "аудиоэффекты",
    "text": "Аудиоэффекты"
  }, {
    "depth": 2,
    "slug": "эффекты-паттернов",
    "text": "Эффекты паттернов"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "итоги-воркшопа",
      children: ["Итоги воркшопа", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/recap/#итоги-воркшопа",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эта страница — просто список всех функций, охваченных в воркшопе!"
    }), "\n", createVNode(_components.h2, {
      id: "mini-notation",
      children: ["Mini Notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/recap/#mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Концепция"
          }), createVNode(_components.th, {
            children: "Синтаксис"
          }), createVNode(_components.th, {
            children: "Пример"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Последовательность"
          }), createVNode(_components.td, {
            children: "пробел"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd bd sd hh bd cp sd hh")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Номер sample"
          }), createVNode(_components.td, {
            children: ":x"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("hh:0 hh:1 hh:2 hh:3")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Паузы"
          }), createVNode(_components.td, {
            children: "~"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("metal ~ jazz jazz:1")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Подпоследовательности"
          }), createVNode(_components.td, {
            children: "[]"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd wind [metal jazz] hh")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Подподпоследовательности"
          }), createVNode(_components.td, {
            children: "[[]]"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd [metal [jazz sd]]")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Ускорение"
          }), createVNode(_components.td, {
            children: "*"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd*2 cp*3")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Параллельно"
          }), createVNode(_components.td, {
            children: ","
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd*2, hh*2 [hh oh]")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Замедление"
          }), createVNode(_components.td, {
            children: "/"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("[c a f e]/2")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Чередование"
          }), createVNode(_components.td, {
            children: "<>"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c <e g>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Удлинение"
          }), createVNode(_components.td, {
            children: "@"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c@3 e")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Репликация"
          }), createVNode(_components.td, {
            children: "!"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c!3 e")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "звуки",
      children: ["Звуки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/recap/#звуки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Название"
          }), createVNode(_components.th, {
            children: "Описание"
          }), createVNode(_components.th, {
            children: "Пример"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "sound"
          }), createVNode(_components.td, {
            children: "воспроизводит звук с указанным именем"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "bank"
          }), createVNode(_components.td, {
            children: "выбирает sound bank"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd").bank("RolandTR909")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "n"
          }), createVNode(_components.td, {
            children: "выбрать номер sample"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 1 4 2").sound("jazz")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "ноты",
      children: ["Ноты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/recap/#ноты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Название"
          }), createVNode(_components.th, {
            children: "Описание"
          }), createVNode(_components.th, {
            children: "Пример"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "note"
          }), createVNode(_components.td, {
            children: "установить высоту как число или букву"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("b g e c").sound("piano")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "n + scale"
          }), createVNode(_components.td, {
            children: "установить ноту в гамме"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("6 4 2 0").scale("C:minor").sound("piano")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "$:"
          }), createVNode(_components.td, {
            children: "воспроизводить паттерны параллельно"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: '$: s("bd sd")\n$: note("c eb g")',
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "аудиоэффекты",
      children: ["Аудиоэффекты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/recap/#аудиоэффекты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "название"
          }), createVNode(_components.th, {
            children: "пример"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "lpf"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c2 c3 c2 c3").s("sawtooth").lpf("400 2000")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "vowel"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `note("c3 eb3 g3").s("sawtooth").vowel("<a e i o>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "gain"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("hh*16").gain("[.25 1]*4")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "delay"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim bd cp").delay(.5)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "room"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim bd cp").room(.5)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "pan"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim bd cp").pan("0 1")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "speed"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("bd rim bd cp").speed("<1 2 -1 -2>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "range"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `s("hh*32").lpf(saw.range(200,4000))`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "эффекты-паттернов",
      children: ["Эффекты паттернов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/workshop/recap/#эффекты-паттернов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
            children: "setcpm"
          }), createVNode(_components.td, {
            children: "устанавливает темп в циклах в минуту"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `setcpm(45); sound("bd sd [~ bd] sd")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "fast"
          }), createVNode(_components.td, {
            children: "ускорить"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd [~ bd] sd").fast(2)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "slow"
          }), createVNode(_components.td, {
            children: "замедлить"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `sound("bd sd [~ bd] sd").slow(2)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
              "client:component-export": "MiniRepl",
              "client:component-hydration": true
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "rev"
          }), createVNode(_components.td, {
            children: "обратить порядок"
          }), createVNode(_components.td, {
            children: createVNode(MiniRepl, {
              "client:visible": true,
              tune: `n("0 2 4 6").scale("C:minor").rev()`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
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
              tune: `n("0 2 4 6").scale("C:minor").jux(rev)`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
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
              tune: `n("0 2 4 6".add("<0 1 2 1>")).scale("C:minor")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
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
              tune: `s("bd sd").ply("<1 2 3>")`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
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
              tune: `s("bd sd, hh*4").off(1/8, x=>x.speed(2))`,
              "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
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

const url = "/workshop/recap";
const file = "/home/user/Bulka/website/src/pages/workshop/recap.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/workshop/recap.mdx";
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
