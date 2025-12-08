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
  "title": "Mini Notation",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "mini-notation",
    "text": "Mini-notation"
  }, {
    "depth": 2,
    "slug": "примечание",
    "text": "Примечание"
  }, {
    "depth": 2,
    "slug": "пример",
    "text": "Пример"
  }, {
    "depth": 2,
    "slug": "формат-mini-notation",
    "text": "Формат Mini Notation"
  }, {
    "depth": 2,
    "slug": "последовательности-events-в-cycle",
    "text": "Последовательности events в cycle"
  }, {
    "depth": 2,
    "slug": "умножение",
    "text": "Умножение"
  }, {
    "depth": 2,
    "slug": "деление",
    "text": "Деление"
  }, {
    "depth": 2,
    "slug": "угловые-скобки",
    "text": "Угловые скобки"
  }, {
    "depth": 2,
    "slug": "подразделение-времени-с-вложенными-скобками",
    "text": "Подразделение времени с вложенными скобками"
  }, {
    "depth": 2,
    "slug": "паузы",
    "text": "Паузы"
  }, {
    "depth": 2,
    "slug": "параллельность--полифония",
    "text": "Параллельность / полифония"
  }, {
    "depth": 2,
    "slug": "удлинение",
    "text": "Удлинение"
  }, {
    "depth": 2,
    "slug": "повторение",
    "text": "Повторение"
  }, {
    "depth": 2,
    "slug": "случайность",
    "text": "Случайность"
  }, {
    "depth": 2,
    "slug": "обзор-mini-notation",
    "text": "Обзор mini-notation"
  }, {
    "depth": 2,
    "slug": "euclidian-rhythms",
    "text": "Euclidian rhythms"
  }, {
    "depth": 3,
    "slug": "beats",
    "text": "Beats"
  }, {
    "depth": 3,
    "slug": "segments",
    "text": "Segments"
  }, {
    "depth": 3,
    "slug": "offsets",
    "text": "Offsets"
  }, {
    "depth": 2,
    "slug": "упражнение-по-mini-notation",
    "text": "Упражнение по mini-notation"
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
      id: "mini-notation",
      children: ["Mini-notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Так же как и ", createVNode(_components.a, {
        href: "https://tidalcycles.org/",
        children: "Tidal Cycles"
      }), ", Strudel использует так называемый “Mini-Notation”, который представляет собой специальный язык, предназначенный для записи ритмических patterns с использованием небольшого количества текста."]
    }), "\n", createVNode(_components.h2, {
      id: "примечание",
      children: ["Примечание", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#примечание",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Эта страница объясняет весь синтаксис Mini-Notation целиком.\nЕсли вы только начинаете работать со Strudel, вы можете изучить основы Mini-Notation более практичным способом в ", createVNode(_components.a, {
        href: "/workshop/first-sounds/",
        children: "workshop"
      }), ".\nПосле этого вы можете вернуться сюда, если хотите понять каждую мелочь."]
    }), "\n", createVNode(_components.h2, {
      id: "пример",
      children: ["Пример", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#пример",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Прежде чем углубляться в детали, вот как выглядит Mini-Notation:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note(\`<
[e5 [b4 c5] d5 [c5 b4]]
[a4 [a4 c5] e5 [d5 c5]]
[b4 [~ c5] d5 e5]
[c5 a4 a4 ~]
[[~ d5] [~ f5] a5 [g5 f5]]
[e5 [~ c5] e5 [d5 c5]]
[b4 [b4 c5] d5 e5]
[c5 a4 a4 ~]
,
[[e2 e3]*4]
[[a2 a3]*4]
[[g#2 g#3]*2 [e2 e3]*2]
[a2 a3 a2 a3 a2 a3 b1 c2]
[[d2 d3]*4]
[[c2 c3]*4]
[[b1 b2]*2 [e2 e3]*2]
[[a1 a2]*4]
>\`)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "формат-mini-notation",
      children: ["Формат Mini Notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#формат-mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Приведенный выше фрагмент заключен в обратные кавычки (`), что позволяет писать многострочные строки."
    }), "\n", createVNode(_components.p, {
      children: ["Вы также можете использовать обычные двойные кавычки (", createVNode(_components.code, {
        children: "\""
      }), ") для однострочного mini-notation, как мы уже делали."]
    }), "\n", createVNode(_components.p, {
      children: ["Если вы хотите получить обычную строку, которая ", createVNode(_components.em, {
        children: "не"
      }), " парсится как mini-notation, используйте одинарные кавычки (", createVNode(_components.code, {
        children: "'"
      }), ")."]
    }), "\n", createVNode(_components.h2, {
      id: "последовательности-events-в-cycle",
      children: ["Последовательности events в cycle", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#последовательности-events-в-cycle",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Мы можем воспроизвести больше нот, разделив их пробелами:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c e g b")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Здесь эти четыре ноты сжаты в один cycle, поэтому каждая нота длится четверть секунды.\nПопробуйте добавить или удалить ноты и обратите внимание, как меняется темп!"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c d e f g a b")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Обратите внимание, что общая продолжительность времени не меняется, вместо этого уменьшается длительность каждой ноты.\nЭто ключевая идея, так как она иллюстрирует ‘Cycle’ в TidalCycles!"
    }), "\n", createVNode(_components.p, {
      children: ["Каждая нота, разделенная пробелом в этой последовательности, является ", createVNode(_components.em, {
        children: "event"
      }), ".\nПродолжительность времени каждого event зависит от скорости или темпа cycle и от того, сколько events присутствует.\nВозьмем два приведенных выше примера: у нас четыре и восемь events соответственно, и поскольку у них одинаковая длительность cycle, каждому нужно вместить свои events в одно и то же количество времени."]
    }), "\n", createVNode(_components.p, {
      children: "Это, возможно, противоречит интуиции, если вы привыкли добавлять ноты в секвенсор или piano roll, и общая длина увеличивается.\nНо это начнет иметь смысл, когда мы рассмотрим больше элементов mini-notation."
    }), "\n", createVNode(_components.h2, {
      id: "умножение",
      children: ["Умножение", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#умножение",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Последовательность можно ускорить, умножив ее на число с помощью символа звездочки (", createVNode(_components.code, {
        children: "*"
      }), "):"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[e5 b4 d5 c5]*2")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Умножение на два здесь означает, что последовательность будет воспроизводиться дважды за cycle."
    }), "\n", createVNode(_components.p, {
      children: ["Умножения также могут быть десятичными (", createVNode(_components.code, {
        children: "*2.75"
      }), "):"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[e5 b4 d5 c5]*2.75")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "деление",
      children: ["Деление", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#деление",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["В противоположность умножению, деление может замедлить последовательность, заключив ее в скобки и разделив на число (", createVNode(_components.code, {
        children: "/2"
      }), "):"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[e5 b4 d5 c5]/2")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Деление на два означает, что последовательность будет воспроизводиться в течение двух cycles.\nВы также можете использовать десятичные числа для любого темпа, который вам нравится (", createVNode(_components.code, {
        children: "/2.75"
      }), ")."]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[e5 b4 d5 c5]/2.75")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "угловые-скобки",
      children: ["Угловые скобки", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#угловые-скобки",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Используя угловые скобки ", createVNode(_components.code, {
        children: "<>"
      }), ", мы можем определить длину последовательности на основе количества events:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<e5 b4 d5 c5>")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Приведенный выше фрагмент аналогичен:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[e5 b4 d5 c5]/4")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Преимущество угловых скобок в том, что мы можем добавлять больше events без необходимости изменять число в конце."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<e5 b4 d5 c5 e5>")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<e5 b4 d5 c5 e5 b4>")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это более похоже на традиционные музыкальные секвенсоры и piano rolls, где добавление ноты увеличивает воспринимаемую общую продолжительность.\nМы также можем воспроизводить определенное количество нот за cycle, используя угловые скобки с умножением:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<e5 b4 d5 c5 a4 c5>*8")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Теперь мы воспроизводим 8 нот за cycle!"
    }), "\n", createVNode(_components.h2, {
      id: "подразделение-времени-с-вложенными-скобками",
      children: ["Подразделение времени с вложенными скобками", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#подразделение-времени-с-вложенными-скобками",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы создать более интересные ритмы, вы можете ", createVNode(_components.em, {
        children: "вложить"
      }), " или ", createVNode(_components.em, {
        children: "заключить"
      }), " последовательности (поместить последовательности внутрь последовательностей) с помощью скобок ", createVNode(_components.code, {
        children: "[]"
      }), ", вот так:"]
    }), "\n", createVNode(_components.p, {
      children: "Сравните разницу между следующими:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("e5 b4 c5 d5 c5 b4")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("e5 [b4 c5] d5 c5 b4")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("e5 [b4 c5] d5 [c5 b4]")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("e5 [b4 c5] d5 [c5 b4 d5 e5]")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("e5 [b4 c5] d5 [c5 b4 [d5 e5]]")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Что здесь происходит? Когда мы вкладываем/заключаем несколько events внутри скобок (", createVNode(_components.code, {
        children: "[]"
      }), "), их длительность становится равной длине одного event во внешней последовательности."]
    }), "\n", createVNode(_components.p, {
      children: "Это очень простое изменение, но оно имеет глубокие последствия.\nПомните, что мы говорили ранее о том, как cycles в tidal остаются одинаковой длины, а длительности отдельных events делятся в этом cycle?\nЧто ж, это означает, что в TidalCycles вы не только можете делить время любым способом, но и можете подразделять время любым способом!"
    }), "\n", createVNode(_components.h2, {
      id: "паузы",
      children: ["Паузы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#паузы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Символ ”~” представляет паузу и создаст тишину между другими events:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[b4 [~ c5] d5 e5]")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "параллельность--полифония",
      children: ["Параллельность / полифония", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#параллельность--полифония",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Используя запятые, мы можем воспроизводить аккорды.\nСледующие примеры одинаковы:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[g3,b3,e4]")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("g3,b3,e4")`,
      punchcard: true,
      canvasHeight: 80,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Но чтобы воспроизвести несколько аккордов в последовательности, нужно обернуть их в скобки:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4] [a3,c3,e4] [b3,d3,f#4] [b3,e4,g4]>*2")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "удлинение",
      children: ["Удлинение", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#удлинение",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "С помощью символа ”@” мы можем указать временной “вес” дочернего элемента последовательности:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4]@2 [a3,c3,e4] [b3,d3,f#4]>*2")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Здесь первый аккорд имеет вес 2, что делает его в два раза длиннее других аккордов. Вес по умолчанию — 1."
    }), "\n", createVNode(_components.h2, {
      id: "повторение",
      children: ["Повторение", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#повторение",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Используя ”!” мы можем повторять без ускорения:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4]!2 [a3,c3,e4] [b3,d3,f#4]>*2")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "случайность",
      children: ["Случайность", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#случайность",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Events с ”?” после них будут иметь 50% шанс быть удаленными из pattern:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[g3,b3,e4]*8?")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Добавление числа между 0 и 1 после ”?” повлияет на вероятность удаления event. Например, events с “?0.1” после них будут иметь 10% шанс быть удаленными:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[g3,b3,e4]*8?0.1")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Events, разделенные ”|”, будут выбраны случайным образом:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[g3,b3,e4] | [a3,c3,e4] | [b3,d3,f#4]")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "обзор-mini-notation",
      children: ["Обзор mini-notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#обзор-mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Чтобы подытожить то, что мы узнали до сих пор, сравните следующие patterns:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<g3 b3 e4 [a3,c3,e4] [b3,d3,f#4]>*2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4] [a3,c3,e4] [b3,d3,f#4]>*2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4]/2 [a3,c3,e4] [b3,d3,f#4]>*2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4]*2 [a3,c3,e4] [b3,d3,f#4]>*2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4] _ [a3,c3,e4] [b3,d3,f#4]>*2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4]@2 [a3,c3,e4] [b3,d3,f#4]>*2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4]!2 [a3,c3,e4] [b3,d3,f#4]>*2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3,b3,e4]? [a3,c3,e4] [b3,d3,f#4]>*2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("<[g3|b3|e4] [a3,c3,e4] [b3,d3,f#4]>*2")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "euclidian-rhythms",
      children: ["Euclidian rhythms", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#euclidian-rhythms",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Используя круглые скобки после event, мы можем создавать ритмические подразделения на основе трех параметров: ", createVNode(_components.code, {
        children: "beats"
      }), ", ", createVNode(_components.code, {
        children: "segments"
      }), " и ", createVNode(_components.code, {
        children: "offset"
      }), ".\nЭтот алгоритм можно найти во многих различных типах музыкального программного обеспечения, и он часто называется секвенсором ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Euclidean_rhythm",
        children: "Euclidean rhythm"
      }), ", в честь компьютерного ученого Годфрида Туссена.\nПочему это интересно? Рассмотрим следующий простой пример:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(3,8,0)")`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Звучит знакомо?\nЭто популярный Euclidian rhythm, известный под различными названиями, такими как “Pop Clave”.\nЭти ритмы можно найти во всех музыкальных культурах, и алгоритм Euclidian rhythm позволяет нам выразить их чрезвычайно легко.\nНаписание этого ритма полностью требует описания:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd ~ ~ bd ~ ~ bd ~")`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Но используя нотацию Euclidian rhythm, нам нужно выразить только “3 удара на 8 сегментов, начиная с позиции 1”."
    }), "\n", createVNode(_components.p, {
      children: "Это упрощает написание patterns с интересными ритмическими структурами и вариациями, которые все еще звучат знакомо:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("e5(2,8) b4(3,8) d5(2,8) c5(3,8)").slow(2)`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что поскольку в приведенном выше примере не используется третий параметр ", createVNode(_components.code, {
        children: "offset"
      }), ", его можно записать просто как ", createVNode(_components.code, {
        children: "\"(3,8)\""
      }), "."]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(3,8)")`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Давайте подробно рассмотрим эти три параметра."
    }), "\n", createVNode(_components.h3, {
      id: "beats",
      children: ["Beats", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#beats",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "beats"
      }), ": первый параметр контролирует, сколько ударов будет воспроизведено.\nСравните эти:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(2,8)")`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(5,8)")`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(7,8)")`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "segments",
      children: ["Segments", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#segments",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "segments"
      }), ": второй параметр контролирует общее количество сегментов, по которым будут распределены удары:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(3,4)")`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(3,8)")`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(3,13)")`,
      punchcard: true,
      canvasHeight: 50,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "offsets",
      children: ["Offsets", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#offsets",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "offset"
      }), ": третий (необязательный) параметр контролирует начальную позицию для распределения ударов.\nНам нужен вторичный ритм, чтобы услышать разницу:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(3,8,0), hh cp")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(3,8,3), hh cp")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd(3,8,5), hh cp")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "упражнение-по-mini-notation",
      children: ["Упражнение по mini-notation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/mini-notation/#упражнение-по-mini-notation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Самое интересное в mini-notation — это то, что все, что вы только что изучили, можно комбинировать различными способами!"
    }), "\n", createVNode(_components.p, {
      children: ["Начиная с этого одного ", createVNode(_components.code, {
        children: "n"
      }), ", можете ли вы создать ", createVNode(_components.em, {
        children: "строку pattern"
      }), ", которая использует каждый отдельный элемент mini-notation, упомянутый выше?"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `n("60")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["Далее: Как ", createVNode(_components.a, {
        href: "/learn/samples/",
        children: "Samples"
      }), " вписываются в это?"]
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

const url = "/learn/mini-notation";
const file = "/home/user/Bulka/website/src/pages/learn/mini-notation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/mini-notation.mdx";
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
