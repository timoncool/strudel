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
  "title": "Synths",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "synths",
    "text": "Synths"
  }, {
    "depth": 2,
    "slug": "базовые-waveforms",
    "text": "Базовые Waveforms"
  }, {
    "depth": 2,
    "slug": "noise",
    "text": "Noise"
  }, {
    "depth": 3,
    "slug": "additive-synthesis",
    "text": "Additive Synthesis"
  }, {
    "depth": 4,
    "slug": "partials",
    "text": "Partials"
  }, {
    "depth": 4,
    "slug": "phases",
    "text": "Phases"
  }, {
    "depth": 2,
    "slug": "vibrato",
    "text": "Vibrato"
  }, {
    "depth": 3,
    "slug": "vib",
    "text": "vib"
  }, {
    "depth": 3,
    "slug": "vibmod",
    "text": "vibmod"
  }, {
    "depth": 2,
    "slug": "fm-synthesis",
    "text": "FM Synthesis"
  }, {
    "depth": 3,
    "slug": "fm",
    "text": "fm"
  }, {
    "depth": 3,
    "slug": "fmh",
    "text": "fmh"
  }, {
    "depth": 3,
    "slug": "fmattack",
    "text": "fmattack"
  }, {
    "depth": 3,
    "slug": "fmdecay",
    "text": "fmdecay"
  }, {
    "depth": 3,
    "slug": "fmsustain",
    "text": "fmsustain"
  }, {
    "depth": 3,
    "slug": "fmenv",
    "text": "fmenv"
  }, {
    "depth": 2,
    "slug": "wavetable-synthesis",
    "text": "Wavetable Synthesis"
  }, {
    "depth": 2,
    "slug": "zzfx",
    "text": "ZZFX"
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
    h4: "h4",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "synths",
      children: ["Synths", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#synths",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "В дополнение к движку сэмплирования, strudel поставляется с синтезатором для создания звуков на лету."
    }), "\n", createVNode(_components.h2, {
      id: "базовые-waveforms",
      children: ["Базовые Waveforms", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#базовые-waveforms",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Базовые waveforms — это ", createVNode(_components.code, {
        children: "sine"
      }), ", ", createVNode(_components.code, {
        children: "sawtooth"
      }), ", ", createVNode(_components.code, {
        children: "square"
      }), " и ", createVNode(_components.code, {
        children: "triangle"
      }), ", которые можно выбрать через ", createVNode(_components.code, {
        children: "sound"
      }), " (или ", createVNode(_components.code, {
        children: "s"
      }), "):"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c2 <eb2 <g2 g1>>".fast(2))
.sound("<sawtooth square triangle sine>")
._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Если вы не установите ", createVNode(_components.code, {
        children: "sound"
      }), ", но установите ", createVNode(_components.code, {
        children: "note"
      }), ", значением по умолчанию для ", createVNode(_components.code, {
        children: "sound"
      }), " будет ", createVNode(_components.code, {
        children: "triangle"
      }), "!"]
    }), "\n", createVNode(_components.h2, {
      id: "noise",
      children: ["Noise", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#noise",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы также можете использовать noise в качестве источника, установив waveform на: ", createVNode(_components.code, {
        children: "white"
      }), ", ", createVNode(_components.code, {
        children: "pink"
      }), " или ", createVNode(_components.code, {
        children: "brown"
      }), ". Это разные\nвиды noise, здесь написаны от жесткого к мягкому."]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `sound("<white pink brown>")._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вот более музыкальный пример использования noise для хэтов:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `sound("bd*2,<white pink brown>*8")
.decay(.04).sustain(0)._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Некоторое количество pink noise также может быть добавлено к любому oscillator с помощью параметра ", createVNode(_components.code, {
        children: "noise"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c3").noise("<0.1 0.25 0.5>")._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Вы также можете использовать тип ", createVNode(_components.code, {
        children: "crackle"
      }), " для воспроизведения тонких шумовых треска. Вы можете контролировать количество noise, используя параметр ", createVNode(_components.code, {
        children: "density"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("crackle*4").density("<0.01 0.04 0.2 0.5>".slow(2))._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "additive-synthesis",
      children: ["Additive Synthesis", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#additive-synthesis",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Периодические waveforms состоят из нескольких ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Harmonic",
        children: "harmonics"
      }), " выше основной частоты, расположенных на целых кратных. Эти обертоны объединяются, чтобы придать звуку его уникальное тембральное качество."]
    }), "\n", createVNode(_components.p, {
      children: ["Для базовых waveforms мы предлагаем вам контроль над этими harmonics с помощью функций ", createVNode(_components.code, {
        children: "partials"
      }), " и ", createVNode(_components.code, {
        children: "phases"
      }), "."]
    }), "\n", createVNode(_components.h4, {
      id: "partials",
      children: ["Partials", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#partials",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "partials"
      }), " относится к величине каждого harmonic относительно основной частоты. Таким образом, их можно использовать для спектральной фильтрации этих waveforms и смягчения некоторой их резкости:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c2 <eb2 <g2 g1>>".fast(2))
.sound("sawtooth")
.partials([1, 1, "<1 0>", "<1 0>", "<1 0>", "<1 0>", "<1 0>"])
._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "partials"
      }), " также можно использовать для построения ", createVNode(_components.em, {
        children: "новых"
      }), " waveforms, отсутствующих в нашем базовом наборе, с помощью источника звука ‘user’:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c2 <eb2 <g2 g1>>".fast(2))
.sound("user")
.partials([1, 0, 0.3, 0, 0.1, 0, 0, 0.3])
._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Мы можем алгоритмически создавать списки величин с помощью кода Javascript следующим образом:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `const numHarmonics = 22;
note("c2 <eb2 <g2 g1>>".fast(2))
.sound("saw")
.partials(new Array(numHarmonics).fill(1))
._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "что действует как спектральный filter. Или:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c2 <eb2 <g2 g1>>").fast(2)
.sound("user")
.partials(new Array(50).fill(0)
.map((_, idx) => ((-1) ** (idx + 1)) / (idx + 1))
)
._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "что восстанавливает знакомую waveform."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "partials"
      }), " также совместим с функциями pattern, предназначенными для создания списков, такими как ", createVNode(_components.code, {
        children: "randL"
      }), " или ", createVNode(_components.code, {
        children: "binaryL"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c2 <eb2 <g2 g1>>").fast(2)
.sound("user")
.partials(randL(10))
._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["и со списками ", createVNode(_components.em, {
        children: "из"
      }), " patterns:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c2 <eb2 <g2 g1>>".fast(4))
.sound("user")
.partials([1, 0, "0 1", "0 1 0.3", rand])
._scope()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что первое значение в массиве ", createVNode(_components.code, {
        children: "partials"
      }), " контролирует величину фундаментального harmonic, а не смещение по постоянному току, которое зафиксировано на 0."]
    }), "\n", createVNode(_components.h4, {
      id: "phases",
      children: ["Phases", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#phases",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Ранее мы упоминали, что периодические waveforms можно разложить на набор harmonics выше основной частоты. Каждый harmonic имеет два определяющих свойства: его величину (насколько он громкий) и его фазу, которая определяет, где в своем цикле начинается эта синусоида при построении waveform."
    }), "\n", createVNode(_components.p, {
      children: "Эти phases также могут быть объявлены в Strudel и могут придать вашим звукам интересную глубину."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("saw").seg(16).n(irand(12)).scale("F1:minor")
.penv(48).panchor(0).pdec(0.05)
.delay(0.25).room(0.25)
.compressor(-20).vib(0.3)
.partials(randL(200))
.phases(randL(200))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "vibrato",
      children: ["Vibrato", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#vibrato",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "vib",
      children: ["vib", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#vib",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "vib",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "vibmod",
      children: ["vibmod", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#vibmod",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "vibmod",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "fm-synthesis",
      children: ["FM Synthesis", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#fm-synthesis",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "FM Synthesis — это техника, которая быстро изменяет частоту базовой waveform для изменения тембра."
    }), "\n", createVNode(_components.p, {
      children: "Вы можете использовать fm с любой из вышеперечисленных waveforms, хотя все приведенные ниже примеры используют triangle wave по умолчанию."
    }), "\n", createVNode(_components.h3, {
      id: "fm",
      children: ["fm", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#fm",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "fm",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "fmh",
      children: ["fmh", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#fmh",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "fmh",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "fmattack",
      children: ["fmattack", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#fmattack",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "fmattack",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "fmdecay",
      children: ["fmdecay", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#fmdecay",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "fmdecay",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "fmsustain",
      children: ["fmsustain", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#fmsustain",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "fmsustain",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "fmenv",
      children: ["fmenv", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#fmenv",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "fmenv",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "wavetable-synthesis",
      children: ["Wavetable Synthesis", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#wavetable-synthesis",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Strudel также может использовать sampler для загрузки пользовательских waveforms в качестве замены waveforms по умолчанию, используемых WebAudio для базового synth. Набор по умолчанию из более чем 1000 wavetables доступен по умолчанию (из набора ", createVNode(_components.a, {
        href: "https://www.adventurekid.se/akrt/waveforms/adventure-kid-waveforms/",
        children: "AKWF"
      }), "). Вы также можете импортировать/использовать свои собственные. Wavetable — это waveform одного цикла, которая затем повторяется для создания звука на желаемой частоте. Это классическая, но очень эффективная техника синтеза."]
    }), "\n", createVNode(_components.p, {
      children: ["Любой sample с префиксом ", createVNode(_components.code, {
        children: "wt_"
      }), " будет загружен как wavetable. Это означает, что аргумент ", createVNode(_components.code, {
        children: "loop"
      }), " будет установлен на ", createVNode(_components.code, {
        children: "1"
      }), " по умолчанию. Вы также можете сканировать wavetable, используя ", createVNode(_components.code, {
        children: "loopBegin"
      }), " и ", createVNode(_components.code, {
        children: "loopEnd"
      }), "."]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `samples('bubo:waveforms');
note("<[g3,b3,e4]!2 [a3,c3,e4] [b3,d3,f#4]>")
.n("<1 2 3 4 5 6 7 8 9 10>/2").room(0.5).size(0.9)
.s('wt_flute').velocity(0.25).often(n => n.ply(2))
.release(0.125).decay("<0.1 0.25 0.3 0.4>").sustain(0)
.cutoff(2000).cutoff("<1000 2000 4000>").fast(4)
._scope()
`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "zzfx",
      children: ["ZZFX", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/synths/#zzfx",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["“Zuper Zmall Zound Zynth” ", createVNode(_components.a, {
        href: "https://github.com/KilledByAPixel/ZzFX",
        children: "ZZFX"
      }), " также интегрирован в strudel.\nРазработанный ", createVNode(_components.a, {
        href: "https://frankforce.com/",
        children: "Frank Force"
      }), ", это движок synth и FX, изначально предназначенный для использования в играх с ограниченным размером кода."]
    }), "\n", createVNode(_components.p, {
      children: "У него всего 20 параметров, вот фрагмент, который использует все:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("c2 eb2 f2 g2") // также поддерживает freq
.s("{z_sawtooth z_tan z_noise z_sine z_square}%4")
.zrand(0) // randomization
// zzfx envelope
.attack(0.001)
.decay(0.1)
.sustain(.8)
.release(.1)
// специальные параметры zzfx
.curve(1) // waveshape 1-3
.slide(0) // +/- скольжение высоты тона
.deltaSlide(0) // +/- скольжение высоты тона (?)
.noise(0) // сделать грязнее
.zmod(0) // скорость fm
.zcrush(0) // bit crush 0 - 1
.zdelay(0) // простой delay
.pitchJump(0) // +/- изменение высоты тона после pitchJumpTime
.pitchJumpTime(0) // >0 время после применения pitchJump
.lfo(0) // >0 сбрасывает slide + pitchJump + устанавливает скорость tremolo
.tremolo(0.5) // 0-1 количество модуляции громкости lfo
//.duration(.2) // переопределить длительность event strudel
//.gain(1) // изменить громкость
._scope() // визуализация waveform (не связана с zzfx)
`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Обратите внимание, что вы также можете комбинировать zzfx со всеми другими audio fx (следующая глава)."
    }), "\n", createVNode(_components.p, {
      children: ["Далее: ", createVNode(_components.a, {
        href: "/learn/effects/",
        children: "Audio Effects"
      }), "…"]
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

const url = "/learn/synths";
const file = "/home/user/Bulka/website/src/pages/learn/synths.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/synths.mdx";
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
