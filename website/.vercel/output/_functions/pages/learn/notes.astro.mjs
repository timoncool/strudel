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
  "title": "Notes",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "notes",
    "text": "Notes"
  }, {
    "depth": 2,
    "slug": "имена-note",
    "text": "Имена note"
  }, {
    "depth": 2,
    "slug": "числа-note",
    "text": "Числа note"
  }, {
    "depth": 2,
    "slug": "freq",
    "text": "freq"
  }, {
    "depth": 2,
    "slug": "слух-и-частота",
    "text": "Слух и частота"
  }, {
    "depth": 2,
    "slug": "от-нот-к-звукам",
    "text": "От нот к звукам"
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
      id: "notes",
      children: ["Notes", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/notes/#notes",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Высота тона — важный строительный блок во многих музыкальных традициях.\nВ Strudel высота тона может быть выражена в виде имен нот, номеров нот или частот.\nВот один и тот же pattern, записанный тремя разными способами:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "note"
          }), ": буквенная нотация, подходит для тех, кто знаком с западной теорией музыки:"]
        }), "\n", createVNode(MiniRepl, {
          "client:idle": true,
          tune: `note("a3 c#4 e4 a4")`,
          "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
          "client:component-export": "MiniRepl",
          "client:component-hydration": true
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "note"
          }), ": числовая нотация, подходит для тех, кто хочет использовать узнаваемые высоты, но не заботится о теории музыки:"]
        }), "\n", createVNode(MiniRepl, {
          "client:idle": true,
          tune: `note("57 61 64 69")`,
          "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
          "client:component-export": "MiniRepl",
          "client:component-hydration": true
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "freq"
          }), ": нотация частоты, подходит для тех, кто хочет выйти за рамки стандартизированных систем настройки:"]
        }), "\n", createVNode(MiniRepl, {
          "client:idle": true,
          tune: `freq("220 275 330 440")`,
          "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
          "client:component-export": "MiniRepl",
          "client:component-hydration": true
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Давайте рассмотрим их более подробно…"
    }), "\n", createVNode(_components.h2, {
      id: "имена-note",
      children: ["Имена ", createVNode(_components.code, {
        children: "note"
      }), createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/notes/#имена-note",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Имена нот могут быть записаны с буквой ноты, за которой следует номер октавы. Вы можете обозначить бемоли с помощью ", createVNode(_components.code, {
        children: "b"
      }), ", а диезы с помощью ", createVNode(_components.code, {
        children: "#"
      }), "."]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("a3 c#4 e4 a4")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Кстати, вы можете редактировать содержимое плеера и нажимать “update”, чтобы услышать ваше изменение!\nВы также можете нажать “play” на следующем плеере без необходимости останавливать последний."
    }), "\n", createVNode(_components.h2, {
      id: "числа-note",
      children: ["Числа ", createVNode(_components.code, {
        children: "note"
      }), createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/notes/#числа-note",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Если хотите, вы также можете использовать числа с ", createVNode(_components.code, {
        children: "note"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("57 61 64 69")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Эти числа интерпретируются как так называемые ", createVNode(_components.a, {
        href: "https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies",
        children: "MIDI numbers"
      }), ", где соседние целые числа отстоят друг от друга на один ‘semitone’."]
    }), "\n", createVNode(_components.p, {
      children: "Вы также можете писать десятичные числа, чтобы получить ‘microtonal’ высоты (между черными и белыми клавишами piano):"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("74.5 75 75.5 76")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "freq",
      children: [createVNode(_components.code, {
        children: "freq"
      }), createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/notes/#freq",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы получить максимальную свободу, вы также можете использовать ", createVNode(_components.code, {
        children: "freq"
      }), " для прямого управления частотой:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `freq("220 275 330 440")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "слух-и-частота",
      children: ["Слух и частота", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/notes/#слух-и-частота",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "В приведенном выше примере мы воспроизводим A3 (220Hz), C#4 natural (275Hz), E4 (330Hz) и A4 (440Hz), отражая наши предыдущие примеры."
    }), "\n", createVNode(_components.p, {
      children: "Но можете ли вы услышать разницу между этими отдельными частотами?"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `freq("220 221 223 224")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "А эти?"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `freq("2020 2021 2023 2024")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Чем выше мы поднимаемся…"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `freq("5020 5021 5023 5024")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Тем меньше расстояния мы можем услышать между частотами!"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `freq("10020 10021 10023 10024")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Почему это так? ", createVNode(_components.a, {
        href: "https://www.audiocheck.net/soundtests_nonlinear.php",
        children: "Человеческий слух работает логарифмически"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "от-нот-к-звукам",
      children: ["От нот к звукам", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/notes/#от-нот-к-звукам",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "На этой странице, когда мы воспроизводили pattern нот вот так:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("a3 c#4 e4 a4")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Мы слышали простой синтезированный звук, на самом деле мы слышали ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Triangle_wave",
        children: "triangle wave oscillator"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Это синтезатор по умолчанию, используемый Strudel, но как же тогда создавать разные звуки в Strudel?"
    }), "\n", createVNode(_components.p, {
      children: ["Давайте узнаем об этом на следующей странице ", createVNode(_components.a, {
        href: "/learn/sounds/",
        children: "Sounds"
      }), "."]
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

const url = "/learn/notes";
const file = "/home/user/Bulka/website/src/pages/learn/notes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/notes.mdx";
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
