/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import '../../chunks/JsDoc_CifKo6nH.mjs';
import 'react/jsx-runtime';
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
  "title": "Csound",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "использование-csound-с-strudel",
    "text": "Использование CSound с Strudel"
  }, {
    "depth": 2,
    "slug": "импорт-orc-файлов",
    "text": "Импорт .orc файлов"
  }, {
    "depth": 2,
    "slug": "написание-собственных-инструментов",
    "text": "Написание собственных инструментов"
  }, {
    "depth": 2,
    "slug": "параметры",
    "text": "Параметры"
  }, {
    "depth": 2,
    "slug": "ограничения--планы-на-будущее",
    "text": "Ограничения / Планы на будущее"
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
      id: "использование-csound-с-strudel",
      children: ["Использование CSound с Strudel", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/csound/#использование-csound-с-strudel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["🧪 Strudel имеет экспериментальную поддержку csound, используя ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/@csound/browser",
        children: "@csound/browser"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "импорт-orc-файлов",
      children: ["Импорт .orc файлов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/csound/#импорт-orc-файлов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Чтобы использовать существующие инструменты csound, вы можете загрузить и использовать orc файл из URL следующим образом:"
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `// livecode.orc by Steven Yi
await loadOrc('github:kunstmusik/csound-live-code/master/livecode.orc')
note("c a f e").csound('FM1')
`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что вышеуказанный URL использует сокращение ", createVNode(_components.code, {
        children: "github:"
      }), ", которое разрешается в raw файл на github, но вы можете использовать любой URL по вашему желанию."]
    }), "\n", createVNode(_components.p, {
      children: ["Замечательный ", createVNode(_components.a, {
        href: "https://github.com/kunstmusik/csound-live-code",
        children: createVNode(_components.code, {
          children: "livecode.orc by Steven Yi"
        })
      }), " поставляется с множеством готовых к использованию звуков:"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `// livecode.orc by Steven Yi
await loadOrc('github:kunstmusik/csound-live-code/master/livecode.orc')
note("c a f e").csound(cat(
"Sub1", // 	Substractive Synth, 3osc
"Sub2", // 	Subtractive Synth, two saws, fifth freq apart
"Sub3", // 	Subtractive Synth, three detuned saws, swells in
"Sub4", // 	Subtractive Synth, detuned square/saw, stabby. Nice as a lead in octave 2, nicely grungy in octave -2, -1
"Sub5", // 	Subtractive Synth, detuned square/triangle
"Sub6", // 	Subtractive Synth, saw, K35 filters
"Sub7", // 	Subtractive Synth, saw + tri, K35 filters
"Sub8", // 	Subtractive Synth, square + saw + tri, diode ladder filter
"SynBrass", // 	SynthBrass subtractive synth
"SynHarp", // 	Synth Harp subtracitve Synth
"SSaw", // 	SuperSaw sound using 9 bandlimited saws (3 sets of detuned saws at octaves)
"Mode1", // 	Modal Synthesis Instrument: Percussive/organ-y sound
"Plk", // 	Pluck sound using impulses, noise, and waveguides
"Organ1", // 	Wavetable Organ sound using additive synthesis
"Organ2", // 	Organ sound based on M1 Organ 2 patch
"Organ3", // 	Wavetable Organ using Flute 8' and Flute 4', wavetable based on Claribel Flute http://www.pykett.org.uk/the\_tonal\_structure\_of\_organ\_flutes.htm
"Bass", // 	Subtractive Bass sound
"ms20_bass", // 	MS20-style Bass Sound
"VoxHumana", // 	VoxHumana Patch
"FM1", // 	FM 3:1 C:M ratio, 2->0.025 index, nice for bass
"Noi", // 	Filtered noise, exponential envelope
"Wobble", // 	Wobble patched based on Jacob Joaquin's "Tempo-Synced Wobble Bass"
"Sine", // 	Simple Sine-wave instrument with exponential envelope
"Square", // 	Simple Square-wave instrument with exponential envelope
"Saw", // 	Simple Sawtooth-wave instrument with exponential envelope
"Squine1", // 	Squinewave Synth, 2 osc
"Form1", // 	Formant Synth, buzz source, soprano ah formants
"Mono", // 	Monophone synth using sawtooth wave and 4pole lpf. Use "start("Mono") to run the monosynth, then use MonoNote instrument to play the instrument.
"MonoNote", // 	Note playing instrument for Mono synth. Be careful to use this and not try to create multiple Mono instruments!
"Click", // 	Bandpass-filtered impulse glitchy click sound. p4 = center frequency (e.g., 3000, 6000)
"NoiSaw", // 	Highpass-filtered noise+saw sound. Use NoiSaw.cut channel to adjust cutoff.
"Clap", // 	Modified clap instrument by Istvan Varga (clap1.orc)
"BD", // 	Bass Drum - From Iain McCurdy's TR-808.csd
"SD", // 	Snare Drum - From Iain McCurdy's TR-808.csd
"OHH", // 	Open High Hat - From Iain McCurdy's TR-808.csd
"CHH", // 	Closed High Hat - From Iain McCurdy's TR-808.csd
"HiTom", // 	High Tom - From Iain McCurdy's TR-808.csd
"MidTom", // 	Mid Tom - From Iain McCurdy's TR-808.csd
"LowTom", // 	Low Tom - From Iain McCurdy's TR-808.csd
"Cymbal", // 	Cymbal - From Iain McCurdy's TR-808.csd
"Rimshot", // 	Rimshot - From Iain McCurdy's TR-808.csd
"Claves", // 	Claves - From Iain McCurdy's TR-808.csd
"Cowbell", // 	Cowbell - From Iain McCurdy's TR-808.csd
"Maraca", // 	Maraca - from Iain McCurdy's TR-808.csd
"HiConga", // 	High Conga - From Iain McCurdy's TR-808.csd
"MidConga", // 	Mid Conga - From Iain McCurdy's TR-808.csd
"LowConga", // 	Low Conga - From Iain McCurdy's TR-808.csd
))`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "написание-собственных-инструментов",
      children: ["Написание собственных инструментов", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/csound/#написание-собственных-инструментов",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете определить свой собственный инструмент(ы) с помощью ", createVNode(_components.code, {
        children: "loadCsound"
      }), " следующим образом:"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      tune: `await loadCsound\`
instr CoolSynth
  iduration = p3
  ifreq = p4
  igain = p5
  ioct = octcps(ifreq)

  kpwm = oscili(.05, 8)
  asig = vco2(igain, ifreq, 4, .5 + kpwm)
  asig += vco2(igain, ifreq * 2)

  idepth = 2
  acut = transegr:a(0, .005, 0, idepth, .06, -4.2, 0.001, .01, -4.2, 0) ; filter envelope
  asig = zdf_2pole(asig, cpsoct(ioct + acut + 2), 0.5)

  iattack = .01
  isustain = .5
  idecay = .1
  irelease = .1
  asig *= linsegr:a(0, iattack, 1, idecay, isustain, iduration, isustain, irelease, 0)

  out(asig, asig)

endin\`

"<0 2 [4 6](3,4,2) 3\*2>"
.off(1/4, add(2))
.off(1/2, add(6))
.scale('D minor')
.note()
.csound('CoolSynth')`,
      "client:display-name": "MiniRepl",
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "параметры",
      children: ["Параметры", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/csound/#параметры",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Функция ", createVNode(_components.code, {
        children: ".csound"
      }), " отправляет следующие p значения:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {}), createVNode(_components.th, {})]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "p1"
          }), createVNode(_components.td, {
            children: ["имя инструмента, например ", createVNode(_components.code, {
              children: "CoolSynth"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "p2"
          }), createVNode(_components.td, {
            children: "смещение времени, когда он должен играть"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "p3"
          }), createVNode(_components.td, {
            children: "длительность события / hap"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "p4"
          }), createVNode(_components.td, {
            children: "частота в герцах"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "p5"
          }), createVNode(_components.td, {
            children: ["нормализованный ", createVNode(_components.code, {
              children: "gain"
            }), ", 0-1"]
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Существует альтернативная функция ", createVNode(_components.code, {
        children: ".csoundm"
      }), " с другим подходом:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {}), createVNode(_components.th, {})]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "p4"
          }), createVNode(_components.td, {
            children: "номер midi клавиши, неокругленный, 0-127"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "p5"
          }), createVNode(_components.td, {
            children: "midi velocity, 0-127"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["В обоих случаях p4 получается из значения ", createVNode(_components.code, {
        children: "freq"
      }), " или ", createVNode(_components.code, {
        children: "note"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "ограничения--планы-на-будущее",
      children: ["Ограничения / Планы на будущее", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/csound/#ограничения--планы-на-будущее",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Помимо перечисленных выше p значений, никакие другие параметры пока не могут быть использованы в pattern.\nЭто также означает, что ", createVNode(_components.a, {
        href: "/learn/effects/",
        children: "аудио эффекты"
      }), " работать не будут.\nВ будущем интеграция может быть улучшена путем передачи всех параметров управления pattern в инструмент csound.\nЭто может работать через уникальный ", createVNode(_components.a, {
        href: "https://kunstmusik.github.io/icsc2022-csound-web/tutorial2-interacting-with-csound/#step-4---writing-continuous-data-channels",
        children: "channel"
      }), "\nдля каждого значения. Каналы могут быть прочитаны ", createVNode(_components.a, {
        href: "https://github.com/csound/csound/blob/master/Android/CsoundForAndroid/CsoundAndroidExamples/src/main/res/raw/multitouch_xy.csd",
        children: "вот так"
      }), ".\nТакже может иметь смысл иметь стандартную библиотеку csound инструментов для эффектов strudel."]
    }), "\n", createVNode(_components.p, {
      children: ["Теперь давайте погрузимся в ", createVNode(_components.a, {
        href: "/functions/intro/",
        children: "Functional JavaScript API"
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

const url = "/learn/csound";
const file = "/home/user/Bulka/website/src/pages/learn/csound.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/csound.mdx";
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
