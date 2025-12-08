/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import { J as JsDoc } from '../../chunks/JsDoc_CifKo6nH.mjs';
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
  "title": "Stepwise patterning",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "stepwise-patterning-экспериментально",
    "text": "Stepwise patterning (экспериментально)"
  }, {
    "depth": 2,
    "slug": "введение",
    "text": "Введение"
  }, {
    "depth": 2,
    "slug": "управление-темпом-шагов",
    "text": "Управление темпом шагов"
  }, {
    "depth": 2,
    "slug": "stepwise-функции",
    "text": "Stepwise функции"
  }, {
    "depth": 3,
    "slug": "pace",
    "text": "pace"
  }, {
    "depth": 3,
    "slug": "stepcat",
    "text": "stepcat"
  }, {
    "depth": 3,
    "slug": "stepalt",
    "text": "stepalt"
  }, {
    "depth": 3,
    "slug": "expand",
    "text": "expand"
  }, {
    "depth": 3,
    "slug": "contract",
    "text": "contract"
  }, {
    "depth": 3,
    "slug": "extend",
    "text": "extend"
  }, {
    "depth": 3,
    "slug": "take",
    "text": "take"
  }, {
    "depth": 3,
    "slug": "drop",
    "text": "drop"
  }, {
    "depth": 3,
    "slug": "polymeter",
    "text": "polymeter"
  }, {
    "depth": 3,
    "slug": "shrink",
    "text": "shrink"
  }, {
    "depth": 3,
    "slug": "grow",
    "text": "grow"
  }, {
    "depth": 3,
    "slug": "tour",
    "text": "tour"
  }, {
    "depth": 3,
    "slug": "zip",
    "text": "zip"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "stepwise-patterning-экспериментально",
      children: ["Stepwise patterning (экспериментально)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#stepwise-patterning-экспериментально",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Это развивающаяся область strudel, и поведение может измениться или быть переименовано в будущих версиях. Отзывы и идеи приветствуются!"
    }), "\n", createVNode(_components.h2, {
      id: "введение",
      children: ["Введение", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#введение",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Обычно в strudel единственной точкой отсчета для большинства преобразований patterns является ", createVNode(_components.em, {
        children: "cycle"
      }), ". Теперь также возможно работать с ", createVNode(_components.em, {
        children: "шагами"
      }), " (steps) через растущий набор функций."]
    }), "\n", createVNode(_components.p, {
      children: ["Например, обычно когда вы используете ", createVNode(_components.code, {
        children: "fastcat"
      }), " для объединения двух patterns, cycles будут сжаты в половину cycle каждый:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `fastcat("bd hh hh", "bd hh hh cp hh").sound()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["С новой stepwise функцией ", createVNode(_components.code, {
        children: "stepcat"
      }), ", шаги двух patterns будут равномерно распределены по cycle:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `stepcat("bd hh hh", "bd hh hh cp hh").sound()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["По умолчанию шаги подсчитываются в соответствии с ‘верхним уровнем’ в mini-notation. Например, ", createVNode(_components.code, {
        children: "\"a [b c] d e\""
      }), " имеет пять событий в cycle, но считается как четыре шага, где ", createVNode(_components.code, {
        children: "[b c]"
      }), " считается как один шаг."]
    }), "\n", createVNode(_components.p, {
      children: ["Однако вы можете отметить другой метрический уровень для подсчета шагов, используя ", createVNode(_components.code, {
        children: "^"
      }), " в начале sub-pattern. Если мы сделаем это с subpattern в нашем примере: ", createVNode(_components.code, {
        children: "\"a [^b c] d e\""
      }), ", то pattern теперь будет считаться имеющим ", createVNode(_components.em, {
        children: "восемь"
      }), " шагов. Это потому, что ‘b’ и ‘c’ каждый считаются как отдельные шаги, а события в pattern в два раза длиннее, и поэтому считаются как два шага каждое."]
    }), "\n", createVNode(_components.h2, {
      id: "управление-темпом-шагов",
      children: ["Управление темпом шагов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#управление-темпом-шагов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Некоторые stepwise функции сами по себе не кажутся делающими много, например, эти два примера функции ", createVNode(_components.code, {
        children: "expand"
      }), " звучат абсолютно одинаково, несмотря на разные значения расширения:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"c a f e".expand(2).note().sound("folkharp")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"c a f e".expand(4).note().sound("folkharp")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Количество шагов на cycle изменяется за кулисами, но само по себе это ничего не делает. Однако вы услышите разницу, когда используете другую stepwise функцию вместе с ней, например ", createVNode(_components.code, {
        children: "stepcat"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `stepcat("c a f e".expand(2), "g d").note()
.sound("folkharp")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `stepcat("c a f e".expand(4), "g d").note()
.sound("folkharp")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Вы должны услышать, что ", createVNode(_components.code, {
        children: "expand"
      }), " увеличивает длительность шагов первого subpattern пропорционально второму."]
    }), "\n", createVNode(_components.p, {
      children: ["Вы также можете изменить скорость pattern в соответствии с заданным количеством шагов на cycle с помощью функции ", createVNode(_components.code, {
        children: "pace"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `stepcat("c a f e".expand(2), "g d").note()
.sound("folkharp")
.pace(8)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `stepcat("c a f e".expand(4), "g d").note()
.sound("folkharp")
.pace(8)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Первый пример имеет десять шагов, а второй пример - 18 шагов, но затем оба воспроизводятся со скоростью 8 шагов на cycle."
    }), "\n", createVNode(_components.p, {
      children: ["Аргумент ", createVNode(_components.code, {
        children: "expand"
      }), " также может быть pattern, и будет обрабатываться в stepwise манере. Это означает, что patterns из изменяющихся значений в аргументе будут объединены с помощью ", createVNode(_components.code, {
        children: "stepcat"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").sound("folkharp").expand("3 2 1 1 2 3")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Это приводит к плотному pattern, потому что разные расширенные версии сжаты в один cycle. ", createVNode(_components.code, {
        children: "pace"
      }), " снова удобен здесь для замедления pattern до определенного количества шагов на cycle:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c a f e").sound("folkharp").expand("3 2 1 1 2 3").pace(8)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Ранние версии многих из этих функций имели префикс ", createVNode(_components.code, {
        children: "s_"
      }), ", а функция ", createVNode(_components.code, {
        children: "pace"
      }), " ранее была известна как ", createVNode(_components.code, {
        children: "steps"
      }), ". Они все еще существуют как псевдонимы, но поведение могло измениться, и скоро они будут удалены. Пожалуйста, обновите ваши patterns!"]
    }), "\n", createVNode(_components.h2, {
      id: "stepwise-функции",
      children: ["Stepwise функции", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#stepwise-функции",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "pace",
      children: ["pace", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#pace",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pace",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "stepcat",
      children: ["stepcat", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#stepcat",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "stepcat",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "stepalt",
      children: ["stepalt", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#stepalt",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "stepalt",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "expand",
      children: ["expand", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#expand",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "expand",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "contract",
      children: ["contract", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#contract",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "contract",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "extend",
      children: ["extend", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#extend",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "extend",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "take",
      children: ["take", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#take",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "take",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "drop",
      children: ["drop", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#drop",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "drop",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "polymeter",
      children: ["polymeter", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#polymeter",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "polymeter",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "shrink",
      children: ["shrink", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#shrink",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "shrink",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "grow",
      children: ["grow", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#grow",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "grow",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "tour",
      children: ["tour", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#tour",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "tour",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "zip",
      children: ["zip", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/stepwise/#zip",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "zip",
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

const url = "/learn/stepwise";
const file = "/home/user/Bulka/website/src/pages/learn/stepwise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/stepwise.mdx";
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
