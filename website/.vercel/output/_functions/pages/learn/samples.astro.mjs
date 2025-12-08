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
  "title": "Samples",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "samples",
    "text": "Samples"
  }, {
    "depth": 1,
    "slug": "default-samples",
    "text": "Default Samples"
  }, {
    "depth": 1,
    "slug": "sound-banks",
    "text": "Sound Banks"
  }, {
    "depth": 1,
    "slug": "selecting-sounds",
    "text": "Selecting Sounds"
  }, {
    "depth": 1,
    "slug": "loading-custom-samples",
    "text": "Loading Custom Samples"
  }, {
    "depth": 2,
    "slug": "loading-samples-from-file-urls",
    "text": "Loading samples from file URLs"
  }, {
    "depth": 2,
    "slug": "loading-samples-from-a-strudeljson-file",
    "text": "Loading Samples from a strudel.json file"
  }, {
    "depth": 2,
    "slug": "generating-strudeljson",
    "text": "Generating strudel.json"
  }, {
    "depth": 2,
    "slug": "github-shortcut",
    "text": "Github Shortcut"
  }, {
    "depth": 2,
    "slug": "from-disk-via-import-sounds-folder",
    "text": "From Disk via “Import Sounds Folder”"
  }, {
    "depth": 2,
    "slug": "from-disk-via-strudelsampler",
    "text": "From Disk via @strudel/sampler"
  }, {
    "depth": 2,
    "slug": "specifying-pitch",
    "text": "Specifying Pitch"
  }, {
    "depth": 2,
    "slug": "shabda",
    "text": "Shabda"
  }, {
    "depth": 1,
    "slug": "sampler-effects",
    "text": "Sampler Effects"
  }, {
    "depth": 3,
    "slug": "begin",
    "text": "begin"
  }, {
    "depth": 3,
    "slug": "end",
    "text": "end"
  }, {
    "depth": 3,
    "slug": "loop",
    "text": "loop"
  }, {
    "depth": 3,
    "slug": "loopbegin",
    "text": "loopBegin"
  }, {
    "depth": 3,
    "slug": "loopend",
    "text": "loopEnd"
  }, {
    "depth": 3,
    "slug": "cut",
    "text": "cut"
  }, {
    "depth": 3,
    "slug": "clip",
    "text": "clip"
  }, {
    "depth": 3,
    "slug": "loopat",
    "text": "loopAt"
  }, {
    "depth": 3,
    "slug": "fit",
    "text": "fit"
  }, {
    "depth": 3,
    "slug": "chop",
    "text": "chop"
  }, {
    "depth": 3,
    "slug": "striate",
    "text": "striate"
  }, {
    "depth": 3,
    "slug": "slice",
    "text": "slice"
  }, {
    "depth": 3,
    "slug": "splice",
    "text": "splice"
  }, {
    "depth": 3,
    "slug": "scrub",
    "text": "scrub"
  }, {
    "depth": 3,
    "slug": "speed",
    "text": "speed"
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
    pre: "pre",
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
      id: "samples",
      children: ["Samples", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#samples",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Samples — это наиболее распространенный способ создания звука в tidal и strudel.\nSample — это (обычно короткий) фрагмент аудио, который используется в качестве основы для генерации звука и подвергается различным преобразованиям.\nМузыку, основанную на samples, можно представить как коллаж из звуков. ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Sampling_(music)",
        children: "Подробнее о Sampling"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Strudel позволяет загружать samples в виде аудиофайлов различных форматов (wav, mp3, ogg) из любого общедоступного URL."
    }), "\n", createVNode(_components.h1, {
      id: "default-samples",
      children: ["Default Samples", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#default-samples",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "По умолчанию strudel поставляется со встроенной “sample map”, обеспечивающей надежную основу для экспериментов."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd sd [~ bd] sd,hh*16, misc")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Здесь мы используем функцию ", createVNode(_components.code, {
        children: "s"
      }), " для воспроизведения различных стандартных samples (", createVNode(_components.code, {
        children: "bd"
      }), ", ", createVNode(_components.code, {
        children: "sd"
      }), ", ", createVNode(_components.code, {
        children: "hh"
      }), " и ", createVNode(_components.code, {
        children: "misc"
      }), "), чтобы получить барабанный бит."]
    }), "\n", createVNode(_components.p, {
      children: ["Для барабанных звуков strudel использует обширную библиотеку ", createVNode(_components.a, {
        href: "https://github.com/ritchse/tidal-drum-machines",
        children: "tidal-drum-machines"
      }), " со следующими обозначениями:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Drum"
          }), createVNode(_components.th, {
            children: "Abbreviation"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Bass drum, Kick drum"
          }), createVNode(_components.td, {
            children: "bd"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Snare drum"
          }), createVNode(_components.td, {
            children: "sd"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Rimshot"
          }), createVNode(_components.td, {
            children: "rim"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Clap"
          }), createVNode(_components.td, {
            children: "cp"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Closed hi-hat"
          }), createVNode(_components.td, {
            children: "hh"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Open hi-hat"
          }), createVNode(_components.td, {
            children: "oh"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Crash"
          }), createVNode(_components.td, {
            children: "cr"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Ride"
          }), createVNode(_components.td, {
            children: "rd"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "High tom"
          }), createVNode(_components.td, {
            children: "ht"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Medium tom"
          }), createVNode(_components.td, {
            children: "mt"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Low tom"
          }), createVNode(_components.td, {
            children: "lt"
          })]
        })]
      })]
    }), "\n", createVNode("img", {
      src: "/img/drumset.png"
    }), "\n", createVNode("a", {
      class: "text-right text-xs",
      href: "https://de.wikipedia.org/wiki/Schlagzeug#/media/Datei:Drum_set.svg",
      target: "_blank",
      children: createVNode(_components.p, {
        children: "original von Pbroks13"
      })
    }), "\n", createVNode(_components.p, {
      children: "Дополнительные перкуссионные звуки:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Source"
          }), createVNode(_components.th, {
            children: "Abbreviation"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Shakers (and maracas, cabasas, etc)"
          }), createVNode(_components.td, {
            children: "sh"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Cowbell"
          }), createVNode(_components.td, {
            children: "cb"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Tambourine"
          }), createVNode(_components.td, {
            children: "tb"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Other percussions"
          }), createVNode(_components.td, {
            children: "perc"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Miscellaneous samples"
          }), createVNode(_components.td, {
            children: "misc"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Effects"
          }), createVNode(_components.td, {
            children: "fx"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Кроме того, strudel также загружает samples инструментов из ", createVNode(_components.a, {
        href: "https://github.com/sgossner/VCSL",
        children: "VCSL"
      }), " по умолчанию."]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы увидеть, какие имена samples доступны, откройте вкладку ", createVNode(_components.code, {
        children: "sounds"
      }), " в ", createVNode(_components.a, {
        href: "https://strudel.cc/",
        children: "REPL"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Вы также можете создавать пользовательские псевдонимы для существующих звуков, используя функцию ", createVNode(_components.code, {
        children: "soundAlias"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `soundAlias('RolandTR808_bd', 'kick')
s("kick")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что изначально загружаются только sample maps (отображение имен на URL), а сами аудио samples не загружаются до тех пор, пока они не будут воспроизведены.\nТакое поведение загрузки вещей только тогда, когда они нужны, также называется ", createVNode(_components.code, {
        children: "lazy loading"
      }), ".\nХотя это экономит ресурсы, это также может привести к тому, что звуки не будут слышны при первом воспроизведении, потому что звук все еще загружается.\n", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/issues/187",
        children: "Это может быть исправлено в будущем"
      })]
    }), "\n", createVNode(_components.h1, {
      id: "sound-banks",
      children: ["Sound Banks", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#sound-banks",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Если мы откроем вкладку ", createVNode(_components.code, {
        children: "sounds"
      }), ", а затем ", createVNode(_components.code, {
        children: "drum-machines"
      }), ", мы увидим, что все drum samples имеют префиксы с названиями драм-машин: ", createVNode(_components.code, {
        children: "RolandTR808_bd"
      }), ", ", createVNode(_components.code, {
        children: "RolandTR808_sd"
      }), ", ", createVNode(_components.code, {
        children: "RolandTR808_hh"
      }), " и т.д."]
    }), "\n", createVNode(_components.p, {
      children: ["Мы ", createVNode(_components.em, {
        children: "могли бы"
      }), " использовать их так:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("RolandTR808_bd RolandTR808_sd,RolandTR808_hh*16")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["… но это, очевидно, слишком много для написания. Используя функцию ", createVNode(_components.code, {
        children: "bank"
      }), ", мы можем сократить это до:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd sd,hh*16").bank("RolandTR808")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вы даже можете паттернизировать bank для переключения между различными драм-машинами:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd sd,hh*16").bank("<RolandTR808 RolandTR909>")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["За кулисами ", createVNode(_components.code, {
        children: "bank"
      }), " просто добавляет имя драм-машины к имени sample с ", createVNode(_components.code, {
        children: "_"
      }), " для получения полного имени.\nЭто, конечно, работает только потому, что имя после ", createVNode(_components.code, {
        children: "_"
      }), " (", createVNode(_components.code, {
        children: "bd"
      }), ", ", createVNode(_components.code, {
        children: "sd"
      }), " и т.д.) стандартизировано.\nТакже обратите внимание, что у некоторых banks может не быть samples для всех звуков!"]
    }), "\n", createVNode(_components.h1, {
      id: "selecting-sounds",
      children: ["Selecting Sounds", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#selecting-sounds",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Если мы снова откроем вкладку ", createVNode(_components.code, {
        children: "sounds"
      }), ", затем вкладку ", createVNode(_components.code, {
        children: "drum machines"
      }), ", там также есть число за каждым именем, указывающее, сколько отдельных samples доступно.\nНапример, ", createVNode(_components.code, {
        children: "RolandTR909_hh(4)"
      }), " означает, что доступно 4 samples хэта TR909.\nПо умолчанию ", createVNode(_components.code, {
        children: "s"
      }), " будет воспроизводить первый sample, но мы можем выбрать другие, используя ", createVNode(_components.code, {
        children: "n"
      }), ", начиная с 0:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("hh*8").bank("RolandTR909").n("0 1 2 3")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Слишком большие числа просто обернутся к началу"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("hh*8").bank("RolandTR909").n("0 1 2 3 4 5 6 7")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Здесь 0-3 будут воспроизводить те же звуки, что и 4-7, потому что ", createVNode(_components.code, {
        children: "RolandTR909_hh"
      }), " имеет только 4 звука."]
    }), "\n", createVNode(_components.p, {
      children: ["Выбор звуков также работает внутри mini notation, используя “", createVNode(_components.code, {
        children: ":"
      }), "” вот так:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `s("bd*4,hh:0 hh:1 hh:2 hh:3 hh:4 hh:5 hh:6 hh:7")
.bank("RolandTR909")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "loading-custom-samples",
      children: ["Loading Custom Samples", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#loading-custom-samples",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете загрузить нестандартную sample map, используя функцию ", createVNode(_components.code, {
        children: "samples"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "loading-samples-from-file-urls",
      children: ["Loading samples from file URLs", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#loading-samples-from-file-urls",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["В этом примере мы назначаем имена ", createVNode(_components.code, {
        children: "bassdrum"
      }), ", ", createVNode(_components.code, {
        children: "hihat"
      }), " и ", createVNode(_components.code, {
        children: "snaredrum"
      }), " конкретным аудиофайлам на сервере:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `samples({
bassdrum: 'bd/BT0AADA.wav',
hihat: 'hh27/000_hh27closedhh.wav',
snaredrum: ['sd/rytm-01-classic.wav', 'sd/rytm-00-hard.wav'],
}, 'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/');

s("bassdrum snaredrum:0 bassdrum snaredrum:1, hihat*16")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете свободно выбирать любую комбинацию букв для каждого имени sample. Даже можно переопределить стандартные звуки.\nВыбранные вами имена будут доступны в функции ", createVNode(_components.code, {
        children: "s"
      }), ".\nУбедитесь, что URL и каждый путь к sample образуют правильный URL!"]
    }), "\n", createVNode(_components.p, {
      children: ["В приведенном выше примере ", createVNode(_components.code, {
        children: "bassdrum"
      }), " загрузит:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/bd/BT0AADA.wav"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "|----------------------base path --------------------------------|--sample path-|"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что мы можем загрузить либо один файл, как для ", createVNode(_components.code, {
        children: "bassdrum"
      }), " и ", createVNode(_components.code, {
        children: "hihat"
      }), ", либо список файлов, как для ", createVNode(_components.code, {
        children: "snaredrum"
      }), "!\nКак только вы запустите код, выбранные вами имена samples будут перечислены в ", createVNode(_components.code, {
        children: "sounds"
      }), " -> ", createVNode(_components.code, {
        children: "user"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "loading-samples-from-a-strudeljson-file",
      children: ["Loading Samples from a strudel.json file", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#loading-samples-from-a-strudeljson-file",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Приведенный выше способ загрузки samples может быть утомительным для записи / копирования-вставки каждый раз, когда вы пишете новый pattern.\nЧтобы избежать этого, вы можете просто передать URL к файлу ", createVNode(_components.code, {
        children: "strudel.json"
      }), " где-то в интернете:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
s("bd sd bd sd,hh*16")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Ожидается, что файл определит sample map с использованием JSON в том же формате, что описан выше.\nКроме того, базовый путь может быть определен с помощью ключа ", createVNode(_components.code, {
        children: "_base"
      }), ".\nПоследний раздел можно записать как:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"_base\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"bassdrum\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bd/BT0AADA.wav\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"snaredrum\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"sd/rytm-01-classic.wav\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"hihat\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"hh27/000_hh27closedhh.wav\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что браузеры часто кэшируют ", createVNode(_components.code, {
        children: "strudel.json"
      }), " при первой загрузке и продолжают использовать кэшированную\nверсию, даже если оригинал был обновлен. Если это вас беспокоит (например, при разработке нового\nsample pack), вы можете заставить браузер загрузить новую копию, например, изменив регистр одного\nсимвола в URL или добавив атрибут URL, например:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "samples"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json?version=2'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "который игнорируется GitHub (но изменяет URL, заставляя браузер перезагружать при каждом увеличении\nномера версии)."
    }), "\n", createVNode(_components.p, {
      children: "Также возможно, конечно, просто удалить его из кэша (удаление кэша в настройках конфиденциальности браузера,\nили из консоли разработчика, если вы технически подкованы, или с помощью расширения для удаления кэша)."
    }), "\n", createVNode(_components.h2, {
      id: "generating-strudeljson",
      children: ["Generating strudel.json", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#generating-strudeljson",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете использовать ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/@strudel/sampler",
        children: "@strudel/sampler"
      }), " для генерации файла strudel.json, выполнив:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --yes"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @strudel/sampler"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --json"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " >"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " strudel.json"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Смотрите другие способы использования strudel/sampler ниже, в разделе “From Disk via @strudel/sampler”."
    }), "\n", createVNode(_components.h2, {
      id: "github-shortcut",
      children: ["Github Shortcut", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#github-shortcut",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Поскольку загрузка samples из github является распространенной, есть сокращение:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `samples('github:tidalcycles/dirt-samples')
s("bd sd bd sd,hh*16")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Формат: ", createVNode(_components.code, {
        children: "samples('github:<user>/<repo>/<branch>')"
      }), ". Если вы опустите ", createVNode(_components.code, {
        children: "branch"
      }), " (как выше), будет использована ветка ", createVNode(_components.code, {
        children: "main"
      }), ".\nПредполагается наличие файла ", createVNode(_components.code, {
        children: "strudel.json"
      }), " в корне репозитория:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "https://raw.githubusercontent.com/<user>/<repo>/<branch>/strudel.json"
          })
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "from-disk-via-import-sounds-folder",
      children: ["From Disk via “Import Sounds Folder”", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#from-disk-via-import-sounds-folder",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Если вы не хотите загружать свои samples в интернет, вы также можете загрузить их с локального диска.\nПерейдите на вкладку ", createVNode(_components.code, {
        children: "sounds"
      }), " в REPL и откройте вкладку ", createVNode(_components.code, {
        children: "import-sounds"
      }), " под строкой поиска.\nНажмите кнопку “import sounds folder” и выберите папку, содержащую аудиофайлы.\nВыбранная вами папка также может содержать подпапки с аудиофайлами.\nПример:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└─ samples"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   ├─ swoop"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   │  ├─ swoopshort.wav"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   │  ├─ swooplong.wav"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   │  └─ swooptight.wav"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   └─ smash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      ├─ smashhigh.wav"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      ├─ smashlow.wav"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      └─ smashmiddle.wav"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["В приведенном выше примере папка ", createVNode(_components.code, {
        children: "samples"
      }), " содержит 2 подпапки ", createVNode(_components.code, {
        children: "swoop"
      }), " и ", createVNode(_components.code, {
        children: "smash"
      }), ", которые содержат аудиофайлы.\nЕсли вы выберете эту папку ", createVNode(_components.code, {
        children: "samples"
      }), ", вкладка ", createVNode(_components.code, {
        children: "user"
      }), " (рядом с вкладкой ", createVNode(_components.code, {
        children: "import-sounds"
      }), ") будет содержать 2 новых звука: ", createVNode(_components.code, {
        children: "swoop(3) smash(3)"
      }), "\nОтдельные samples затем могут быть воспроизведены обычным способом, например ", createVNode(_components.code, {
        children: "s(\"swoop:0 swoop:1 smash:2\")"
      }), ".\nSamples внутри каждого звука используют индексацию с нуля в алфавитном порядке."]
    }), "\n", createVNode(_components.h2, {
      id: "from-disk-via-strudelsampler",
      children: ["From Disk via @strudel/sampler", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#from-disk-via-strudelsampler",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вместо загрузки samples в браузер с помощью кнопки “import sounds folder”, вы также можете обслуживать samples с локального файлового сервера.\nСамый простой способ сделать это — использовать ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/@strudel/sampler",
        children: "@strudel/sampler"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " samples"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " @strudel/sampler"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Затем вы можете загрузить его через:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `samples('http://localhost:5432/');

n("<0 1 2>").s("swoop smash")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Удобство ", createVNode(_components.code, {
        children: "@strudel/sampler"
      }), " в том, что он автоматически генерирует файл ", createVNode(_components.code, {
        children: "strudel.json"
      }), " на основе структуры ваших папок.\nВы можете увидеть, что было сгенерировано, перейдя по адресу ", createVNode(_components.code, {
        children: "http://localhost:5432"
      }), " в браузере."]
    }), "\n", createVNode(_components.p, {
      children: ["Примечание: Для работы этого вам нужен установленный ", createVNode(_components.a, {
        href: "https://nodejs.org/",
        children: "NodeJS"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "specifying-pitch",
      children: ["Specifying Pitch", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#specifying-pitch",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы убедиться, что ваши samples настроены правильно при воспроизведении с ", createVNode(_components.code, {
        children: "note"
      }), ", вы можете указать базовую высоту звука следующим образом:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `samples({
'gtr': 'gtr/0001_cleanC.wav',
'moog': { 'g3': 'moog/005_Mighty%20Moog%20G3.wav' },
}, 'github:tidalcycles/dirt-samples');
note("g3 [bb3 c4] <g4 f4 eb4 f3>@2").s("gtr,moog").clip(1)
.gain(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Мы также можем объявить разные samples для разных регионов клавиатуры:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `setcpm(60)
samples({
'moog': {
  'g2': 'moog/004_Mighty%20Moog%20G2.wav',
  'g3': 'moog/005_Mighty%20Moog%20G3.wav',
  'g4': 'moog/006_Mighty%20Moog%20G4.wav',
}}, 'github:tidalcycles/dirt-samples')

note("g2!2 <bb2 c3>!2, <c4@3 [<eb4 bb3> g4 f4]>")
.s('moog').clip(1)
.gain(.5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Sampler всегда выберет ближайший подходящий sample для текущей ноты!"
    }), "\n", createVNode(_components.p, {
      children: ["Обратите внимание, что эта нотация для звуков с высотой тона также работает внутри файла ", createVNode(_components.code, {
        children: "strudel.json"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "shabda",
      children: ["Shabda", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#shabda",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Если вы не хотите выбирать samples вручную, есть также замечательный инструмент под названием ", createVNode(_components.a, {
        href: "https://shabda.ndre.gr/",
        children: "shabda"
      }), ".\nС его помощью вы можете ввести любое имя (имена) sample для запроса из ", createVNode(_components.a, {
        href: "https://freesound.org/",
        children: "freesound.org"
      }), ". Пример:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `samples('shabda:bass:4,hihat:4,rimshot:2')

$: n("0 1 2 3 0 1 2 3").s('bass')
$: n("0 1*2 2 3*2").s('hihat').clip(1)
$: n("~ 0 ~ 1 ~ 0 0 1").s('rimshot')`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Вы также можете генерировать искусственные голосовые samples с любым текстом на нескольких языках.\nОбратите внимание, что код языка и параметры пола являются необязательными и по умолчанию имеют значения ", createVNode(_components.code, {
        children: "en-GB"
      }), " и ", createVNode(_components.code, {
        children: "f"
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `samples('shabda/speech:the_drum,forever')
samples('shabda/speech/fr-FR/m:magnifique')

$: s("the_drum*2").chop(16).speed(rand.range(0.85,1.1))
$: s("forever magnifique").slow(4).late(0.125)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "sampler-effects",
      children: ["Sampler Effects", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#sampler-effects",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Sampler effects — это функции, которые можно использовать для изменения поведения воспроизведения sample."
    }), "\n", createVNode(_components.h3, {
      id: "begin",
      children: ["begin", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#begin",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.begin",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "end",
      children: ["end", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#end",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.end",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "loop",
      children: ["loop", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#loop",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "loop",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "loopbegin",
      children: ["loopBegin", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#loopbegin",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "loopBegin",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "loopend",
      children: ["loopEnd", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#loopend",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "loopEnd",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "cut",
      children: ["cut", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#cut",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "cut",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "clip",
      children: ["clip", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#clip",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "clip",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "loopat",
      children: ["loopAt", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#loopat",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.loopAt",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "fit",
      children: ["fit", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#fit",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "fit",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "chop",
      children: ["chop", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#chop",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.chop",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "striate",
      children: ["striate", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#striate",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.striate",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "slice",
      children: ["slice", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#slice",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.slice",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "splice",
      children: ["splice", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#splice",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "splice",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "scrub",
      children: ["scrub", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#scrub",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern.scrub",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "speed",
      children: ["speed", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/samples/#speed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "speed",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["После samples давайте посмотрим, что нам предоставляют ", createVNode(_components.a, {
        href: "/learn/synths/",
        children: "Synths"
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

const url = "/learn/samples";
const file = "/home/user/Bulka/website/src/pages/learn/samples.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/samples.mdx";
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
