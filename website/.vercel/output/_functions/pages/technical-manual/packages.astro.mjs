/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import '../../chunks/MiniRepl_Ntj7iAxy.mjs';
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
  "title": "Packages Strudel",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "packages-strudel",
    "text": "Packages Strudel"
  }, {
    "depth": 2,
    "slug": "обзор",
    "text": "Обзор"
  }, {
    "depth": 3,
    "slug": "зонтичные-packages",
    "text": "Зонтичные Packages"
  }, {
    "depth": 3,
    "slug": "основные-packages",
    "text": "Основные Packages"
  }, {
    "depth": 3,
    "slug": "языковые-расширения",
    "text": "Языковые расширения"
  }, {
    "depth": 3,
    "slug": "выходы",
    "text": "Выходы"
  }, {
    "depth": 3,
    "slug": "другие",
    "text": "Другие"
  }, {
    "depth": 3,
    "slug": "не-поддерживаются",
    "text": "Не поддерживаются"
  }, {
    "depth": 2,
    "slug": "инструменты",
    "text": "Инструменты"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "packages-strudel",
      children: ["Packages Strudel", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/packages/#packages-strudel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel",
        children: "Репозиторий strudel"
      }), " организован как monorepo, содержащий несколько npm packages.\nЦель множественных packages:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "организовать кодовую базу на более модульные, инкапсулированные части"
      }), "\n", createVNode(_components.li, {
        children: "иметь возможность отказаться от определенных функциональностей"
      }), "\n", createVNode(_components.li, {
        children: "поддерживать зависимости core packages небольшими"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "обзор",
      children: ["Обзор", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/packages/#обзор",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.npmjs.com/search?q=%40strudel",
        children: "См. последние опубликованные packages на npm"
      }), ".\nВот обзор всех packages:"]
    }), "\n", createVNode(_components.h3, {
      id: "зонтичные-packages",
      children: ["Зонтичные Packages", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/packages/#зонтичные-packages",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эти packages дают вам полностью укомплектованную отправную точку, и, скорее всего, то, что вы хотите использовать в своем проекте:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/repl",
          children: "repl"
        }), ": Strudel REPL как веб-компонент."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/web",
          children: "web"
        }), ": Библиотека Strudel для браузера, без UI."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Чтобы узнать больше об этих двух, прочитайте ", createVNode(_components.a, {
        href: "/technical-manual/project-start/",
        children: "Использование Strudel в вашем проекте"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "основные-packages",
      children: ["Основные Packages", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/packages/#основные-packages",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эти packages наиболее важные. Вы можете захотеть использовать все из них, если используете strudel в своем проекте:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/core#strudelcore",
          children: "core"
        }), ": движок tidal pattern с базовыми примитивами"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/mini#strudelmini",
          children: "mini"
        }), ": парсер mini notation + привязки к core"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/transpiler#strudeltranspiler",
          children: "transpiler"
        }), ": транспилятор пользовательского кода. синтаксический сахар + подсветка"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "языковые-расширения",
      children: ["Языковые расширения", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/packages/#языковые-расширения",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эти packages расширяют язык pattern специфическими функциями"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/tonal",
          children: "tonal"
        }), ": функции tonal для гамм и аккордов"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/xen",
          children: "xen"
        }), ": микротональные / ксеногармонические функции"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "выходы",
      children: ["Выходы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/packages/#выходы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эти packages предоставляют привязки для различных способов вывода strudel patterns:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/webaudio#strudelwebaudio",
          children: "webaudio"
        }), ": вывод webaudio по умолчанию"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/osc#strudelosc",
          children: "osc"
        }), ": привязки для коммуникации через OSC"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/midi#strudelmidi",
          children: "midi"
        }), ": привязки webmidi"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/csound#strudelcsound",
          children: "csound"
        }), ": привязки csound"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/serial#strudelsoundfonts",
          children: "soundfonts"
        }), ": поддержка Soundfont"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/serial#strudelserial",
          children: "serial"
        }), ": привязки webserial"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "другие",
      children: ["Другие", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/packages/#другие",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/src/branch/main/packages/embed#strudelembed",
          children: "embed"
        }), ": встраиваемый REPL веб-компонент"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "не-поддерживаются",
      children: ["Не поддерживаются", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/packages/#не-поддерживаются",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.npmjs.com/package/@strudel.cycles/react",
          children: "react"
        }), ": react hooks и компоненты для strudel"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.npmjs.com/package/@strudel.cycles/eval",
          children: "eval"
        }), ": старый транспилятор кода"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.npmjs.com/package/@strudel.cycles/tone",
          children: "tone"
        }), ": привязки для инструментов и эффектов Tone.js"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.npmjs.com/package/@strudel.cycles/webdirt",
          children: "webdirt"
        }), ": привязки webdirt, заменены на webaudio package"]
      }), "\n", createVNode(_components.li, {
        children: ["любые ", createVNode(_components.code, {
          children: "@strudel.cycles/*"
        }), " packages были переименованы в ", createVNode(_components.code, {
          children: "@strudel/*"
        }), " начиная с версии 0.10.0."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "инструменты",
      children: ["Инструменты", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/packages/#инструменты",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://pnpm.io/",
          children: "pnpm"
        }), " для управления packages, workspaces и публикации"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://lerna.js.org/",
          children: "lerna"
        }), " для обновления версий"]
      }), "\n", createVNode(_components.li, {
        children: "см. CONTRIBUTING.md для получения дополнительной информации"
      }), "\n"]
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

const url = "/technical-manual/packages";
const file = "/home/user/Bulka/website/src/pages/technical-manual/packages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/technical-manual/packages.mdx";
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
