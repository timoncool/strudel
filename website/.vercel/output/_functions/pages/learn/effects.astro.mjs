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
  "title": "Audio effects",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "audio-effects",
    "text": "Audio Effects"
  }, {
    "depth": 1,
    "slug": "signal-chain",
    "text": "Signal chain"
  }, {
    "depth": 2,
    "slug": "orbits",
    "text": "Orbits"
  }, {
    "depth": 2,
    "slug": "непрерывные-изменения",
    "text": "Непрерывные изменения"
  }, {
    "depth": 1,
    "slug": "filters",
    "text": "Filters"
  }, {
    "depth": 2,
    "slug": "lpf",
    "text": "lpf"
  }, {
    "depth": 2,
    "slug": "lpq",
    "text": "lpq"
  }, {
    "depth": 2,
    "slug": "hpf",
    "text": "hpf"
  }, {
    "depth": 2,
    "slug": "hpq",
    "text": "hpq"
  }, {
    "depth": 2,
    "slug": "bpf",
    "text": "bpf"
  }, {
    "depth": 2,
    "slug": "bpq",
    "text": "bpq"
  }, {
    "depth": 2,
    "slug": "ftype",
    "text": "ftype"
  }, {
    "depth": 2,
    "slug": "vowel",
    "text": "vowel"
  }, {
    "depth": 1,
    "slug": "amplitude-modulation",
    "text": "Amplitude Modulation"
  }, {
    "depth": 2,
    "slug": "am",
    "text": "am"
  }, {
    "depth": 2,
    "slug": "tremolosync",
    "text": "tremolosync"
  }, {
    "depth": 2,
    "slug": "tremolodepth",
    "text": "tremolodepth"
  }, {
    "depth": 2,
    "slug": "tremoloskew",
    "text": "tremoloskew"
  }, {
    "depth": 2,
    "slug": "tremolophase",
    "text": "tremolophase"
  }, {
    "depth": 2,
    "slug": "tremoloshape",
    "text": "tremoloshape"
  }, {
    "depth": 1,
    "slug": "amplitude-envelope",
    "text": "Amplitude Envelope"
  }, {
    "depth": 2,
    "slug": "attack",
    "text": "attack"
  }, {
    "depth": 2,
    "slug": "decay",
    "text": "decay"
  }, {
    "depth": 2,
    "slug": "sustain",
    "text": "sustain"
  }, {
    "depth": 2,
    "slug": "release",
    "text": "release"
  }, {
    "depth": 2,
    "slug": "adsr",
    "text": "adsr"
  }, {
    "depth": 1,
    "slug": "filter-envelope",
    "text": "Filter Envelope"
  }, {
    "depth": 2,
    "slug": "lpattack",
    "text": "lpattack"
  }, {
    "depth": 2,
    "slug": "lpdecay",
    "text": "lpdecay"
  }, {
    "depth": 2,
    "slug": "lpsustain",
    "text": "lpsustain"
  }, {
    "depth": 2,
    "slug": "lprelease",
    "text": "lprelease"
  }, {
    "depth": 2,
    "slug": "lpenv",
    "text": "lpenv"
  }, {
    "depth": 1,
    "slug": "pitch-envelope",
    "text": "Pitch Envelope"
  }, {
    "depth": 2,
    "slug": "pattack",
    "text": "pattack"
  }, {
    "depth": 2,
    "slug": "pdecay",
    "text": "pdecay"
  }, {
    "depth": 2,
    "slug": "prelease",
    "text": "prelease"
  }, {
    "depth": 2,
    "slug": "penv",
    "text": "penv"
  }, {
    "depth": 2,
    "slug": "pcurve",
    "text": "pcurve"
  }, {
    "depth": 2,
    "slug": "panchor",
    "text": "panchor"
  }, {
    "depth": 1,
    "slug": "dynamics",
    "text": "Dynamics"
  }, {
    "depth": 2,
    "slug": "gain",
    "text": "gain"
  }, {
    "depth": 2,
    "slug": "velocity",
    "text": "velocity"
  }, {
    "depth": 2,
    "slug": "compressor",
    "text": "compressor"
  }, {
    "depth": 2,
    "slug": "postgain",
    "text": "postgain"
  }, {
    "depth": 2,
    "slug": "xfade",
    "text": "xfade"
  }, {
    "depth": 1,
    "slug": "panning",
    "text": "Panning"
  }, {
    "depth": 2,
    "slug": "jux",
    "text": "jux"
  }, {
    "depth": 2,
    "slug": "juxby",
    "text": "juxBy"
  }, {
    "depth": 2,
    "slug": "pan",
    "text": "pan"
  }, {
    "depth": 1,
    "slug": "waveshaping",
    "text": "Waveshaping"
  }, {
    "depth": 2,
    "slug": "coarse",
    "text": "coarse"
  }, {
    "depth": 2,
    "slug": "crush",
    "text": "crush"
  }, {
    "depth": 2,
    "slug": "distort",
    "text": "distort"
  }, {
    "depth": 1,
    "slug": "global-effects",
    "text": "Global Effects"
  }, {
    "depth": 2,
    "slug": "local-vs-global-effects",
    "text": "Local vs Global Effects"
  }, {
    "depth": 2,
    "slug": "orbit",
    "text": "orbit"
  }, {
    "depth": 2,
    "slug": "delay",
    "text": "Delay"
  }, {
    "depth": 3,
    "slug": "delay-1",
    "text": "delay"
  }, {
    "depth": 3,
    "slug": "delaytime",
    "text": "delaytime"
  }, {
    "depth": 3,
    "slug": "delayfeedback",
    "text": "delayfeedback"
  }, {
    "depth": 2,
    "slug": "reverb",
    "text": "Reverb"
  }, {
    "depth": 3,
    "slug": "room",
    "text": "room"
  }, {
    "depth": 3,
    "slug": "roomsize",
    "text": "roomsize"
  }, {
    "depth": 3,
    "slug": "roomfade",
    "text": "roomfade"
  }, {
    "depth": 3,
    "slug": "roomlp",
    "text": "roomlp"
  }, {
    "depth": 3,
    "slug": "roomdim",
    "text": "roomdim"
  }, {
    "depth": 3,
    "slug": "iresponse",
    "text": "iresponse"
  }, {
    "depth": 2,
    "slug": "phaser",
    "text": "Phaser"
  }, {
    "depth": 3,
    "slug": "phaser-1",
    "text": "phaser"
  }, {
    "depth": 3,
    "slug": "phaserdepth",
    "text": "phaserdepth"
  }, {
    "depth": 3,
    "slug": "phasercenter",
    "text": "phasercenter"
  }, {
    "depth": 3,
    "slug": "phasersweep",
    "text": "phasersweep"
  }, {
    "depth": 2,
    "slug": "duck",
    "text": "Duck"
  }, {
    "depth": 3,
    "slug": "duckorbit",
    "text": "duckorbit"
  }, {
    "depth": 3,
    "slug": "duckattack",
    "text": "duckattack"
  }, {
    "depth": 3,
    "slug": "duckdepth",
    "text": "duckdepth"
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
    img: "img",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "audio-effects",
      children: ["Audio Effects", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#audio-effects",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Независимо от того, используете ли вы synth или sample, вы можете применить любой из следующих встроенных audio effects.\nКак вы могли догадаться, effects могут быть объединены в цепочку, и они принимают строку pattern в качестве аргумента."
    }), "\n", createVNode(_components.h1, {
      id: "signal-chain",
      children: ["Signal chain", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#signal-chain",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode("img", {
      src: "/img/strudel-signal-flow.png"
    }), "\n", createVNode(_components.p, {
      children: "Signal chain в Strudel выглядит следующим образом:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Звукогенерирующий event запускается pattern\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "У него есть время начала и продолжительность, которые обычно\nконтролируются длиной ноты и параметрами ADSR"
          }), "\n", createVNode(_components.li, {
            children: "Если мы превышаем максимальную полифонию, старые звуки начинают исчезать"
          }), "\n", createVNode(_components.li, {
            children: ["Заглушенные звуки (те, чье значение ", createVNode(_components.code, {
              children: "s"
            }), " равно ", createVNode(_components.code, {
              children: "-"
            }), ", ", createVNode(_components.code, {
              children: "~"
            }), " или ", createVNode(_components.code, {
              children: "_"
            }), ") пропускаются"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Производится звук (через, скажем, sample или oscillator)\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Здесь происходят effects на основе detune (такие как ", createVNode(_components.code, {
              children: "detune"
            }), ", ", createVNode(_components.code, {
              children: "penv"
            }), " и т.д.)"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Следующее произойдет ", createVNode(_components.em, {
          children: "по порядку"
        }), " и только если они были вызваны в pattern. Обратите внимание, что все это\neffects одноразового использования, что означает, что множественные вхождения их в pattern просто переопределят значения\n(например, вы не можете сделать ", createVNode(_components.code, {
          children: "s(\"bd\").lpf(100).distort(2).lpf(800)"
        }), " для lowpass, distort, а затем снова lowpass)\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Phase vocoder (", createVNode(_components.code, {
              children: "stretch"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Применяется Gain (", createVNode(_components.code, {
              children: "gain"
            }), ")\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "Здесь происходит основной ADSR (громкости)"
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["Lowpass filter (", createVNode(_components.code, {
              children: "lpf"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Highpass filter (", createVNode(_components.code, {
              children: "hpf"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Bandpass filter (", createVNode(_components.code, {
              children: "bandpass"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Vowel filter (", createVNode(_components.code, {
              children: "vowel"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Уменьшение частоты дискретизации (", createVNode(_components.code, {
              children: "coarse"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Bit crushing (", createVNode(_components.code, {
              children: "crush"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Waveshape distortion (", createVNode(_components.code, {
              children: "shape"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Обычный distortion (", createVNode(_components.code, {
              children: "distort"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Tremolo (", createVNode(_components.code, {
              children: "tremolo"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Compressor (", createVNode(_components.code, {
              children: "compressor"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Panning (", createVNode(_components.code, {
              children: "pan"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Phaser (", createVNode(_components.code, {
              children: "phaser"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["Postgain (", createVNode(_components.code, {
              children: "post"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Затем звук разделяется на несколько назначений\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Dry output (количество контролируется параметром ", createVNode(_components.code, {
              children: "dry"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: ["The sends\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: ["Analyzers\n", createVNode(_components.ul, {
                  children: ["\n", createVNode(_components.li, {
                    children: ["Они используются для инструментов типа ", createVNode(_components.code, {
                      children: "scope"
                    }), " и ", createVNode(_components.code, {
                      children: "spectrum"
                    }), ", и их настройка обычно происходит за кулисами"]
                  }), "\n"]
                }), "\n"]
              }), "\n", createVNode(_components.li, {
                children: ["Delay (количество контролируется параметром ", createVNode(_components.code, {
                  children: "delay"
                }), ")"]
              }), "\n", createVNode(_components.li, {
                children: ["Reverb (количество контролируется параметром ", createVNode(_components.code, {
                  children: "room"
                }), ")"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Dry output, delay и reverb объединяются в так называемый “orbit” pattern (подробнее см. в разделе ниже)\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Effect ", createVNode(_components.code, {
              children: "duck"
            }), " влияет на громкость всех сигналов в orbit"]
          }), "\n", createVNode(_components.li, {
            children: "Затем orbit отправляется в микшер"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "orbits",
      children: ["Orbits", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#orbits",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Orbits — это способ обработки выходов в Strudel. Они также предписывают, какие delay и reverb связать с dry signal.\nПо умолчанию все orbits смешиваются в каналы ", createVNode(_components.code, {
        children: "1"
      }), " и ", createVNode(_components.code, {
        children: "2"
      }), " в стерео, однако с настройкой “Multi Channel Orbits”\n(в разделе Настройки справа) вы можете использовать их как отдельные 2-канальные стерео выходы (orbit ", createVNode(_components.code, {
        children: "i"
      }), " будет отображен на\nканалы ", createVNode(_components.code, {
        children: "2i"
      }), " и ", createVNode(_components.code, {
        children: "2i + 1"
      }), "). Затем вы можете использовать маршрутизаторы типа Blackhole 16 для получения и записи всех каналов в DAW для последующей обработки."]
    }), "\n", createVNode(_components.p, {
      children: ["Orbit по умолчанию — ", createVNode(_components.code, {
        children: "1"
      }), ", и он устанавливается с помощью ", createVNode(_components.code, {
        children: "orbit"
      }), ". Вы можете отправить звук на несколько orbits через mininotation"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `s("white").orbit("2,3,4").gain(0.2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "но будьте осторожны, так как это создаст три копии звука за кулисами, что означает, что если они будут смешаны\nв один выход, они утроят громкость. Мы уменьшили gain здесь, чтобы сберечь ваши уши."
    }), "\n", createVNode(_components.p, {
      children: "⚠️ На каждый orbit приходится только один delay и один reverb, поэтому имейте в виду, что если вы попытаетесь изменить параметры на двух\npatterns, указывающих на один и тот же orbit, это может привести к непредсказуемым результатам. Сравните, например, этот красивый pluck\nс большим reverb:"
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `
$: s("triangle*4").decay(0.5).n(irand(12)).scale('C minor')
.room(1).roomsize(10)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["против того же pluck с заглушенным kick drum, который переопределяет значение ", createVNode(_components.code, {
        children: "roomsize"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `
$: s("triangle*4").decay(0.5).n(irand(12)).scale('C minor')
.room(1).roomsize(10)

$: s("bd\*4").room(0.01).roomsize(0.01).postgain(0)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Это происходит из-за того, что они используют один и тот же orbit: по умолчанию ", createVNode(_components.code, {
        children: "1"
      }), ". Это можно исправить, просто обновив orbits, чтобы они были\nразличными:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `
$: s("triangle*4").decay(0.5).n(irand(12)).scale('C minor')
.room(1).roomsize(10).orbit(2)

$: s("bd\*4").room(0.01).roomsize(0.01).postgain(0)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "непрерывные-изменения",
      children: ["Непрерывные изменения", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#непрерывные-изменения",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Поскольку все вышеперечисленное запускается ", createVNode(_components.em, {
        children: "при возникновении звука"
      }), ", часто бывает так, что параметры могут не\nизменяться непрерывно во времени. Например,"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `
s("supersaw").lpf(tri.range(100, 5000).slow(2))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Не будет производить непрерывно модулированный LFO low-pass filter из-за того, что ", createVNode(_components.code, {
        children: "tri"
      }), " семплируется только каждый раз, когда звучит нота\n(в данном случае по умолчанию один раз за cycle). Вы можете имитировать это, введя больше звукогенерирующих events, например:"]
    }), "\n", createVNode(MiniRepl, {
      "client:visible": true,
      tune: `
s("supersaw").seg(16).lpf(tri.range(100, 5000).slow(2))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Некоторые параметры ", createVNode(_components.em, {
        children: "действительно"
      }), " вызывают непрерывные изменения во времени, хотя:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Кривая ADSR (управляется ", createVNode(_components.code, {
          children: "attack"
        }), ", ", createVNode(_components.code, {
          children: "sustain"
        }), ", ", createVNode(_components.code, {
          children: "decay"
        }), ", ", createVNode(_components.code, {
          children: "release"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["Кривая pitch envelope (управляется ", createVNode(_components.code, {
          children: "penv"
        }), " и связанными ADSR)"]
      }), "\n", createVNode(_components.li, {
        children: ["Кривая FM (", createVNode(_components.code, {
          children: "fmenv"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["Filter envelopes (", createVNode(_components.code, {
          children: "lpenv"
        }), ", ", createVNode(_components.code, {
          children: "hpenv"
        }), ", ", createVNode(_components.code, {
          children: "bpenv"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["Tremolo (", createVNode(_components.code, {
          children: "tremolo"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["Phaser (", createVNode(_components.code, {
          children: "phaser"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["Vibrato (", createVNode(_components.code, {
          children: "vib"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["Ducking (", createVNode(_components.code, {
          children: "duckorbit"
        }), ")"]
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "filters",
      children: ["Filters", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#filters",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Filters являются важным строительным блоком ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Subtractive_synthesis",
        children: "subtractive synthesis"
      }), ".\nStrudel поставляется с 3 типами filters:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["low-pass filter: низкие частоты могут ", createVNode(_components.em, {
          children: "пройти"
        }), ", высокие частоты обрезаются"]
      }), "\n", createVNode(_components.li, {
        children: ["high-pass filter: высокие частоты могут ", createVNode(_components.em, {
          children: "пройти"
        }), ", низкие частоты обрезаются"]
      }), "\n", createVNode(_components.li, {
        children: ["band-pass filters: может ", createVNode(_components.em, {
          children: "пройти"
        }), " только частотная полоса, низкие и высокие частоты вокруг обрезаются"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Каждый filter имеет 2 параметра:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "cutoff: частота, на которой filter начинает работать. например, low-pass filter с cutoff 1000Hz позволяет частотам ниже 1000Hz проходить."
      }), "\n", createVNode(_components.li, {
        children: ["q-value: Контролирует резонанс filter. Более высокие значения звучат более агрессивно. См. также ", createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/Q_factor",
          children: "Q-Factor"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "lpf",
      children: ["lpf", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#lpf",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "lpf",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "lpq",
      children: ["lpq", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#lpq",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "lpq",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "hpf",
      children: ["hpf", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#hpf",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "hpf",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "hpq",
      children: ["hpq", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#hpq",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "hpq",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "bpf",
      children: ["bpf", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#bpf",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "bpf",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "bpq",
      children: ["bpq", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#bpq",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "bpq",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "ftype",
      children: ["ftype", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#ftype",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "ftype",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "vowel",
      children: ["vowel", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#vowel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "vowel",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "amplitude-modulation",
      children: ["Amplitude Modulation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#amplitude-modulation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Amplitude modulation периодически изменяет амплитуду (gain) во времени."
    }), "\n", createVNode(_components.h2, {
      id: "am",
      children: ["am", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#am",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "am",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "tremolosync",
      children: ["tremolosync", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#tremolosync",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "tremolosync",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "tremolodepth",
      children: ["tremolodepth", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#tremolodepth",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "tremolodepth",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "tremoloskew",
      children: ["tremoloskew", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#tremoloskew",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "tremoloskew",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "tremolophase",
      children: ["tremolophase", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#tremolophase",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "tremolophase",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "tremoloshape",
      children: ["tremoloshape", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#tremoloshape",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "tremoloshape",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "amplitude-envelope",
      children: ["Amplitude Envelope", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#amplitude-envelope",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Amplitude ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Envelope_(music)",
        children: "envelope"
      }), " контролирует динамический контур звука.\nStrudel использует ADSR envelopes, которые, вероятно, являются наиболее распространенным способом описания envelope:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/ADSR_parameter.svg/1920px-ADSR_parameter.svg.png",
        alt: "ADSR"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://commons.wikimedia.org/wiki/File:ADSR_parameter.svg",
        children: "ссылка на изображение"
      })
    }), "\n", createVNode(_components.h2, {
      id: "attack",
      children: ["attack", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#attack",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "attack",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "decay",
      children: ["decay", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#decay",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "decay",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "sustain",
      children: ["sustain", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#sustain",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "sustain",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "release",
      children: ["release", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#release",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "release",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "adsr",
      children: ["adsr", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#adsr",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "adsr",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "filter-envelope",
      children: ["Filter Envelope", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#filter-envelope",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Каждый filter может получить дополнительный filter envelope, динамически контролирующий значение cutoff. Он использует ADSR envelope, аналогичный используемому для амплитуды. Есть дополнительный параметр для контроля глубины модуляции filter: ", createVNode(_components.code, {
        children: "lpenv"
      }), "|", createVNode(_components.code, {
        children: "hpenv"
      }), "|", createVNode(_components.code, {
        children: "bpenv"
      }), ". Это позволяет вам воспроизводить тонкие или огромные модуляции filter просто увеличивая или уменьшая глубину."]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `note("[c eb g <f bb>](3,8,<0 1>)".sub(12))
.s("<sawtooth>/64")
.lpf(sine.range(300,2000).slow(16))
.lpa(0.005)
.lpd(perlin.range(.02,.2))
.lps(perlin.range(0,.5).slow(3))
.lpq(sine.range(2,10).slow(32))
.release(.5)
.lpenv(perlin.range(1,8).slow(2))
.ftype('24db')
.room(1)
.juxBy(.5,rev)
.sometimes(add(note(12)))
.stack(s("bd*2").bank('RolandTR909'))
.gain(.5).fast(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Есть один filter envelope для каждого типа filter и, следовательно, один набор параметров envelope filter с префиксом ", createVNode(_components.code, {
        children: "lp"
      }), ", ", createVNode(_components.code, {
        children: "hp"
      }), " или ", createVNode(_components.code, {
        children: "bp"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "lpattack"
        }), ", ", createVNode(_components.code, {
          children: "lpdecay"
        }), ", ", createVNode(_components.code, {
          children: "lpsustain"
        }), ", ", createVNode(_components.code, {
          children: "lprelease"
        }), ", ", createVNode(_components.code, {
          children: "lpenv"
        }), ": filter envelope для lowpass filter.\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["альтернативно: ", createVNode(_components.code, {
              children: "lpa"
            }), ", ", createVNode(_components.code, {
              children: "lpd"
            }), ", ", createVNode(_components.code, {
              children: "lps"
            }), ", ", createVNode(_components.code, {
              children: "lpr"
            }), " и ", createVNode(_components.code, {
              children: "lpe"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "hpattack"
        }), ", ", createVNode(_components.code, {
          children: "hpdecay"
        }), ", ", createVNode(_components.code, {
          children: "hpsustain"
        }), ", ", createVNode(_components.code, {
          children: "hprelease"
        }), ", ", createVNode(_components.code, {
          children: "hpenv"
        }), ": filter envelope для highpass filter.\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["альтернативно: ", createVNode(_components.code, {
              children: "hpa"
            }), ", ", createVNode(_components.code, {
              children: "hpd"
            }), ", ", createVNode(_components.code, {
              children: "hps"
            }), ", ", createVNode(_components.code, {
              children: "hpr"
            }), " и ", createVNode(_components.code, {
              children: "hpe"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "bpattack"
        }), ", ", createVNode(_components.code, {
          children: "bpdecay"
        }), ", ", createVNode(_components.code, {
          children: "bpsustain"
        }), ", ", createVNode(_components.code, {
          children: "bprelease"
        }), ", ", createVNode(_components.code, {
          children: "bpenv"
        }), ": filter envelope для bandpass filter.\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["альтернативно: ", createVNode(_components.code, {
              children: "bpa"
            }), ", ", createVNode(_components.code, {
              children: "bpd"
            }), ", ", createVNode(_components.code, {
              children: "bps"
            }), ", ", createVNode(_components.code, {
              children: "bpr"
            }), " и ", createVNode(_components.code, {
              children: "bpe"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "lpattack",
      children: ["lpattack", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#lpattack",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "lpattack",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "lpdecay",
      children: ["lpdecay", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#lpdecay",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "lpdecay",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "lpsustain",
      children: ["lpsustain", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#lpsustain",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "lpsustain",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "lprelease",
      children: ["lprelease", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#lprelease",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "lprelease",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "lpenv",
      children: ["lpenv", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#lpenv",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "lpenv",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "pitch-envelope",
      children: ["Pitch Envelope", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#pitch-envelope",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вы также можете контролировать высоту тона с помощью envelopes!\nPitch envelopes могут вдохнуть жизнь в статичные звуки:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `n("<-4,0 5 2 1>*<2!3 4>")
.scale("<C F>/8:pentatonic")
.s("gm_electric_guitar_jazz")
.penv("<.5 0 7 -2>*2").vib("4:.1")
.phaser(2).delay(.25).room(.3)
.size(4).fast(1.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вы также можете создать прекрасные звуки в стиле chiptune:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `n(run("<4 8>/16")).jux(rev)
.chord("<C^7 <Db^7 Fm7>>")
.dict('ireal')
.voicing().add(note("<0 1>/8"))
.dec(.1).room(.2)
.segment("<4 [2 8]>")
.penv("<0 <2 -2>>").patt(.02).fast(2)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Давайте разберем все элементы управления pitch envelope:"
    }), "\n", createVNode(_components.h2, {
      id: "pattack",
      children: ["pattack", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#pattack",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pattack",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pdecay",
      children: ["pdecay", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#pdecay",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pdecay",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "prelease",
      children: ["prelease", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#prelease",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "prelease",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "penv",
      children: ["penv", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#penv",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "penv",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pcurve",
      children: ["pcurve", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#pcurve",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pcurve",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "panchor",
      children: ["panchor", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#panchor",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "panchor",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "dynamics",
      children: ["Dynamics", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#dynamics",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "gain",
      children: ["gain", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#gain",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "gain",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "velocity",
      children: ["velocity", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#velocity",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "velocity",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "compressor",
      children: ["compressor", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#compressor",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "compressor",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "postgain",
      children: ["postgain", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#postgain",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "postgain",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "xfade",
      children: ["xfade", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#xfade",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "xfade",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "panning",
      children: ["Panning", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#panning",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "jux",
      children: ["jux", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#jux",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "jux",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "juxby",
      children: ["juxBy", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#juxby",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "juxBy",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pan",
      children: ["pan", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#pan",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pan",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "waveshaping",
      children: ["Waveshaping", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#waveshaping",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "coarse",
      children: ["coarse", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#coarse",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "coarse",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "crush",
      children: ["crush", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#crush",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "crush",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "distort",
      children: ["distort", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#distort",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "distort",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "global-effects",
      children: ["Global Effects", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#global-effects",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "local-vs-global-effects",
      children: ["Local vs Global Effects", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#local-vs-global-effects",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "В то время как вышеперечисленные “локальные” effects всегда будут создавать отдельную цепочку effects для каждого event,\nglobal effects используют одну и ту же цепочку для всех events одного orbit:"
    }), "\n", createVNode(_components.h2, {
      id: "orbit",
      children: ["orbit", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#orbit",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "orbit",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "delay",
      children: ["Delay", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#delay",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "delay-1",
      children: ["delay", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#delay-1",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "delay",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "delaytime",
      children: ["delaytime", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#delaytime",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "delaytime",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "delayfeedback",
      children: ["delayfeedback", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#delayfeedback",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "delayfeedback",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "reverb",
      children: ["Reverb", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#reverb",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "room",
      children: ["room", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#room",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "room",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "roomsize",
      children: ["roomsize", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#roomsize",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "roomsize",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "roomfade",
      children: ["roomfade", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#roomfade",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "roomfade",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "roomlp",
      children: ["roomlp", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#roomlp",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "roomlp",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "roomdim",
      children: ["roomdim", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#roomdim",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "roomdim",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "iresponse",
      children: ["iresponse", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#iresponse",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "iresponse",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "phaser",
      children: ["Phaser", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#phaser",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "phaser-1",
      children: ["phaser", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#phaser-1",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "phaser",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "phaserdepth",
      children: ["phaserdepth", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#phaserdepth",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "phaserdepth",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "phasercenter",
      children: ["phasercenter", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#phasercenter",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "phasercenter",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "phasersweep",
      children: ["phasersweep", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#phasersweep",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "phasersweep",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "duck",
      children: ["Duck", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#duck",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "duckorbit",
      children: ["duckorbit", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#duckorbit",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "duckorbit",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "duckattack",
      children: ["duckattack", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#duckattack",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "duckattack",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "duckdepth",
      children: ["duckdepth", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/effects/#duckdepth",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "duckdepth",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Далее мы рассмотрим ввод/вывод через ", createVNode(_components.a, {
        href: "/learn/input-output/",
        children: "MIDI, OSC и другие методы"
      }), "."]
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

const url = "/learn/effects";
const file = "/home/user/Bulka/website/src/pages/learn/effects.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/effects.mdx";
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
