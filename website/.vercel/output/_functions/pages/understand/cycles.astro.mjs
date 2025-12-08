/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import 'react/jsx-runtime';
import 'react';
import 'claviature';
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
  "title": "Понимание Cycles",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "понимание-cycles",
    "text": "Понимание Cycles"
  }, {
    "depth": 2,
    "slug": "cycles-и-bpm",
    "text": "Cycles и BPM"
  }, {
    "depth": 2,
    "slug": "установка-cpm",
    "text": "Установка CPM"
  }, {
    "depth": 2,
    "slug": "cycles-и-такты",
    "text": "Cycles и такты"
  }, {
    "depth": 2,
    "slug": "размеры-такта",
    "text": "Размеры такта"
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
      id: "понимание-cycles",
      children: ["Понимание Cycles", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/cycles/#понимание-cycles",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Концепция cycles является центральной для понимания того, как работает Strudel.\nМатеринский язык Strudel, TidalCycles, даже имеет это в своем названии."
    }), "\n", createVNode(_components.h2, {
      id: "cycles-и-bpm",
      children: ["Cycles и BPM", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/cycles/#cycles-и-bpm",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "В большинстве музыкальных программ для установки темпа используется единица BPM (ударов в минуту).\nStrudel выражает темп как CPS (cycles в секунду), по умолчанию 0.5 CPS:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("bd")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Здесь мы можем услышать 0.5CPS в действии: Бочка повторяется один раз каждые две секунды.\nДавайте сделаем 4 бочки:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("bd bd bd bd")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Теперь у нас 4 бочки на cycle, но весь pattern все еще воспроизводится на 0.5CPS.\nС точки зрения BPM, большинство музыкантов скажут вам, что это воспроизводится на 120bpm.\nА как насчет этого:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("bd hh bd hh")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Поскольку второй звук теперь хай-хэт, темп снова ощущается медленнее.\nЭто приводит нас к важному осознанию:"
    }), "\n", createVNode($$Box, {
      children: createVNode(_components.p, {
        children: "Темп основан на восприятии.\nВыбор звуков также влияет на ощущение темпа.\nВот почему один и тот же CPS может создавать разные воспринимаемые темпы."
      })
    }), "\n", createVNode(_components.h2, {
      id: "установка-cpm",
      children: ["Установка CPM", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/cycles/#установка-cpm",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Если вы знакомы с BPM, вы можете использовать метод ", createVNode(_components.code, {
        children: "setcpm"
      }), " для установки глобального темпа в cycles в минуту:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(110)
s("bd hh")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Если вы хотите добавить больше ударов на cycle, вы можете разделить cpm:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(110/4)
s("bd sd bd rim, hh*8")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Или используя 2 удара на cycle:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(110/2)
s("bd sd, hh*4")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете использовать метод ", createVNode(_components.code, {
        children: "setcps"
      }), " для установки глобального темпа в cycles в секунду. ", createVNode(_components.code, {
        children: "setcpm(x)"
      }), " это то же самое, что ", createVNode(_components.code, {
        children: "setcps(x / 60)"
      }), "."]
    }), "\n", createVNode($$Box, {
      children: [createVNode(_components.p, {
        children: ["Чтобы установить конкретный bpm, используйте ", createVNode(_components.code, {
          children: "setcpm(bpm/bpc)"
        })]
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "bpm: целевые удары в минуту"
        }), "\n", createVNode(_components.li, {
          children: "bpc: количество воспринимаемых ударов на cycle"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "cycles-и-такты",
      children: ["Cycles и такты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/cycles/#cycles-и-такты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Также в большинстве музыкальных программ несколько ударов образуют такт (или меру).\nТак называемый размер такта определяет, сколько ударов в каждом такте.\nВо многих типах музыки обычно используется 4 удара на такт, также известный как размер 4/4.\nМногие музыкальные программы используют его по умолчанию."
    }), "\n", createVNode(_components.p, {
      children: "Strudel не имеет концепции тактов или мер, есть только cycles.\nКак вы их используете - решать вам. Выше у нас был этот пример:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(110/4)
s("bd sd bd rim, hh*8")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это можно интерпретировать как размер 4/4 с темпом 110bpm.\nМы могли бы написать несколько тактов так:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(110/4)
s(\`<
[bd sd bd rim, hh*8]
[bd sd bd rim*2, hh*8]
>\`)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вместо того чтобы выписывать каждый такт отдельно, мы могли бы выразить это гораздо короче:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(110/2)
s("bd <sd rim*<1 2>>,hh*4")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Здесь мы можем видеть, что мышление в cycles, а не в тактах, значительно упрощает дело!\nЭти типы упрощений работают из-за повторяющейся природы ритма.\nВ вычислительных терминах можно сказать, что прежняя нотация имеет много избыточности."
    }), "\n", createVNode(_components.h2, {
      id: "размеры-такта",
      children: ["Размеры такта", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/understand/cycles/#размеры-такта",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Чтобы получить размер такта, просто измените количество элементов на такт. Вот ритм с 7 ударами:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("bd ~ rim bd bd rim ~")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "или с 5:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("bd hh hh bd hh hh bd rim bd hh")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Мы также могли бы написать несколько тактов с разными размерами:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(110*2)
s(\`<
[bd hh rim]@3
[bd hh rim sd]@4
>\`)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Здесь мы переключаемся между 3/4 и 4/4, сохраняя один и тот же темп."
    }), "\n", createVNode(_components.p, {
      children: "Если мы не указываем длину, мы получаем то, что называется метрической модуляцией:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `setcpm(110/2)
s(\`<
[bd hh rim]
[bd hh rim sd]
>\`)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Теперь 3 элемента получают то же время, что и 4 элемента, поэтому темп меняется."
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

const url = "/understand/cycles";
const file = "/home/user/Bulka/website/src/pages/understand/cycles.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/understand/cycles.mdx";
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
