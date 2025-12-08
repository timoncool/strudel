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
  "title": "Рецепты",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "рецепты",
    "text": "Рецепты"
  }, {
    "depth": 2,
    "slug": "arpeggios",
    "text": "Arpeggios"
  }, {
    "depth": 2,
    "slug": "нарезка-брейков",
    "text": "Нарезка брейков"
  }, {
    "depth": 2,
    "slug": "огибающие-фильтра",
    "text": "Огибающие фильтра"
  }, {
    "depth": 2,
    "slug": "наложение-звуков",
    "text": "Наложение звуков"
  }, {
    "depth": 2,
    "slug": "расстройка-осциллятора",
    "text": "Расстройка осциллятора"
  }, {
    "depth": 2,
    "slug": "polyrhythms",
    "text": "Polyrhythms"
  }, {
    "depth": 2,
    "slug": "polymeter",
    "text": "Polymeter"
  }, {
    "depth": 2,
    "slug": "phasing",
    "text": "Phasing"
  }, {
    "depth": 2,
    "slug": "пробежка-по-samples",
    "text": "Пробежка по samples"
  }, {
    "depth": 2,
    "slug": "дрожание-ленты",
    "text": "Дрожание ленты"
  }, {
    "depth": 2,
    "slug": "длительность-звука",
    "text": "Длительность звука"
  }, {
    "depth": 2,
    "slug": "волновой-синтез",
    "text": "Волновой синтез"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "рецепты",
      children: ["Рецепты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#рецепты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эта страница показывает возможные способы достижения распространённых (или не очень) музыкальных целей.\nЧасто есть много способов сделать что-то, и нет правильного или неправильного.\nИнтересная часть в том, что каждое представление даёт вам разные импульсы при импровизации."
    }), "\n", createVNode(_components.h2, {
      id: "arpeggios",
      children: ["Arpeggios", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#arpeggios",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Arpeggio - это когда ноты аккорда играются последовательно.\nМы можем либо написать ноты вручную:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("c eb g c4")
.clip(2).s("gm_electric_guitar_clean")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "…или использовать гаммы:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 2 4 7").scale("C:minor")
.clip(2).s("gm_electric_guitar_clean")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "…или символы аккордов:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `n("0 1 2 3").chord("Cm").mode("above:c3").voicing()
.clip(2).s("gm_electric_guitar_clean")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "…используя off:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `"0"
.off(1/3, add(2))
.off(1/2, add(4))
.n()
.scale("C:minor")
.s("gm_electric_guitar_clean")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "нарезка-брейков",
      children: ["Нарезка брейков", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#нарезка-брейков",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Sample можно зациклить и нарезать вот так:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('github:yaxu/clean-breaks')
s("amen/4").fit().chop(32)`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это подгоняет брейк под 8 cycles + нарезает его на 16 кусочков.\nНарезка пока не слышна, потому что мы не делаем никаких манипуляций.\nДавайте добавим рандомизированное удвоение + реверсирование:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('github:yaxu/clean-breaks')
s("amen/4").fit().chop(16).cut(1)
.sometimesBy(.5, ply("2"))
.sometimesBy(.25, mul(speed("-1")))`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Если мы хотим указать порядок samples, можем заменить ", createVNode(_components.code, {
        children: "chop"
      }), " на ", createVNode(_components.code, {
        children: "slice"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('github:yaxu/clean-breaks')
s("amen/4").fit()
.slice(8, "<0 1 2 3 4*2 5 6 [6 7]>*2")
.cut(1).rarely(ply("2"))`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Если использовать ", createVNode(_components.code, {
        children: "splice"
      }), " вместо ", createVNode(_components.code, {
        children: "slice"
      }), ", скорость подстраивается под длительность события:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('github:yaxu/clean-breaks')
s("amen")
.splice(8, "<0 1 2 3 4*2 5 6 [6 7]>*2")
.cut(1).rarely(ply("2"))`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что нам не нужен ", createVNode(_components.code, {
        children: "fit"
      }), ", потому что ", createVNode(_components.code, {
        children: "splice"
      }), " сделает это сам."]
    }), "\n", createVNode(_components.h2, {
      id: "огибающие-фильтра",
      children: ["Огибающие фильтра", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#огибающие-фильтра",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Используя ", createVNode(_components.code, {
        children: "lpenv"
      }), ", мы можем заставить фильтр двигаться:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("g1 bb1 <c2 eb2> d2")
.s("sawtooth")
.lpf(400).lpenv(4)
.scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Тип огибающей зависит от методов, которые вы устанавливаете. Давайте установим ", createVNode(_components.code, {
        children: "lpa"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("g1 bb1 <c2 eb2> d2")
.s("sawtooth").lpq(8)
.lpf(400).lpa(.2).lpenv(4)
.scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Теперь фильтр атакует, а не затухает как раньше (затухание - это по умолчанию). Мы также можем сделать и то, и другое:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("g1 bb1 <c2 eb2> d2")
.s("sawtooth").lpq(8)
.lpf(400).lpa(.1).lpd(.1).lpenv(4)
.scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете поэкспериментировать с ", createVNode(_components.code, {
        children: "lpa"
      }), " | ", createVNode(_components.code, {
        children: "lpd"
      }), " | ", createVNode(_components.code, {
        children: "lps"
      }), " | ", createVNode(_components.code, {
        children: "lpd"
      }), ", чтобы увидеть, что будет делать огибающая фильтра."]
    }), "\n", createVNode(_components.h2, {
      id: "наложение-звуков",
      children: ["Наложение звуков", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#наложение-звуков",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Мы можем накладывать звуки, разделяя их запятой ”,”:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<g1 bb1 d2 f1>")
.s("sawtooth, square") // <------
.scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Мы можем контролировать громкость отдельных звуков вот так:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<g1 bb1 d2 f1>")
.s("sawtooth, square:0:.5") // <--- "name:number:gain"
.scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Для большего контроля над каждым голосом можем использовать ", createVNode(_components.code, {
        children: "layer"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<g1 bb1 d2 f1>").layer(
x=>x.s("sawtooth").vib(4),
x=>x.s("square").add(note(12))
).scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Здесь мы придаём sawtooth вибрато, а square перемещаем на октаву вверх.\nС ", createVNode(_components.code, {
        children: "layer"
      }), " вы можете использовать любой доступный метод pattern на каждом голосе, так что небо - предел.."]
    }), "\n", createVNode(_components.h2, {
      id: "расстройка-осциллятора",
      children: ["Расстройка осциллятора", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#расстройка-осциллятора",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Мы можем сделать звук толще, добавив к нему расстроенную версию:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<g1 bb1 d2 f1>")
.add(note("0,.1")) // <------ chorus
.s("sawtooth").scope()`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Попробуйте разные значения или добавьте ещё один голос!"
    }), "\n", createVNode(_components.h2, {
      id: "polyrhythms",
      children: ["Polyrhythms", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#polyrhythms",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вот простой пример polyrhythm:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("bd*2,hh*3")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Polyrhythm - это когда два разных темпа происходят одновременно."
    }), "\n", createVNode(_components.h2, {
      id: "polymeter",
      children: ["Polymeter", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#polymeter",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Это polymeter:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("<bd rim, hh hh oh>*4")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Polymeter - это когда два разных размера такта играют в одном темпе."
    }), "\n", createVNode(_components.h2, {
      id: "phasing",
      children: ["Phasing", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#phasing",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Это phasing:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<C D G A Bb D C A G D Bb A>*[6,6.1]").piano()`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Phasing происходит, когда одна и та же последовательность играет в слегка разных темпах."
    }), "\n", createVNode(_components.h2, {
      id: "пробежка-по-samples",
      children: ["Пробежка по samples", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#пробежка-по-samples",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Используя ", createVNode(_components.code, {
        children: "run"
      }), " с ", createVNode(_components.code, {
        children: "n"
      }), ", мы можем пробежаться по банку samples:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('bubo:fox')
n(run(8)).s("ftabla")`,
      punchcard: true,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Это отлично работает с банками samples, содержащими похожие звуки, как в этом случае разные записи табла.\nЧасто вы будете слышать начало фразы не там, где начинается pattern.\nВ этом случае я слышу начало на третьем sample, что можно учесть с помощью ", createVNode(_components.code, {
        children: "early"
      }), "."]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('bubo:fox')
n(run(8)).s("ftabla").early(2/8)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Давайте добавим немного случайности:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('bubo:fox')
n(run(8)).s("ftabla").early(2/8)
.sometimes(mul(speed("1.5")))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "дрожание-ленты",
      children: ["Дрожание ленты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#дрожание-ленты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Мы можем эмулировать эффект дрожания высоты звука вот так:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<c4 bb f eb>*8")
.add(note(perlin.range(0,.5))) // <------ warble
.clip(2).s("gm_electric_guitar_clean")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "длительность-звука",
      children: ["Длительность звука", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#длительность-звука",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Есть несколько способов изменить длительность звука. Используя clip:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("f ab bb c")
.clip("<2 1 .5 .25>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Значение clip относительно длительности каждого события.\nМы также можем создать перекрытия, используя release:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("f ab bb c")
.release("<2 1 .5 .25>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это плавно затухнет каждый звук в течение заданного количества секунд.\nМы также можем сделать ноты короче, используя огибающую затухания:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("f ab bb c")
.decay("<2 1 .5 .25>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["При использовании samples у нас также есть ", createVNode(_components.code, {
        children: ".end"
      }), " для обрезки относительно длины sample:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("oh*4").end("<1 .5 .25 .1>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Сравните это с clip:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("oh*4").clip("<1 .5 .25 .1>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "или decay:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("oh*4").decay("<1 .5 .25 .1>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "волновой-синтез",
      children: ["Волновой синтез", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/recipes/recipes/#волновой-синтез",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете зациклить sample с помощью ", createVNode(_components.code, {
        children: "loop"
      }), " / ", createVNode(_components.code, {
        children: "loopEnd"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `note("<c eb g f>").s("bd").loop(1).loopEnd(.05).gain(.2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Это позволяет нам проигрывать первые 5% бочки как синтезатор!\nДля упрощения загрузки волновых таблиц любой sample, начинающийся с ", createVNode(_components.code, {
        children: "wt_"
      }), ", будет зациклен автоматически:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('github:bubobubobubobubo/dough-waveforms')
note("c eb g bb").s("wt_dbass").clip(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Пробежка по разным волновым таблицам также может дать интересные вариации:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('github:bubobubobubobubo/dough-waveforms')
note("c2*8").s("wt_dbass").n(run(8)).fast(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "…добавляя огибающую фильтра + reverb:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `samples('github:bubobubobubobubo/dough-waveforms')
note("c2*8").s("wt_dbass").n(run(8))
.lpf(perlin.range(100,1000).slow(8))
.lpenv(-3).lpa(.1).room(.5).fast(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
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

const url = "/recipes/recipes";
const file = "/home/user/Bulka/website/src/pages/recipes/recipes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/recipes/recipes.mdx";
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
