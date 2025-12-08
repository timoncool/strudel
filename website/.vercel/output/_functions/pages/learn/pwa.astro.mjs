/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
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
  "title": "Оффлайн",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "использование-strudel-в-оффлайн-режиме",
    "text": "Использование Strudel в оффлайн режиме"
  }, {
    "depth": 2,
    "slug": "samples",
    "text": "Samples"
  }, {
    "depth": 2,
    "slug": "проверка--очистка-кеша",
    "text": "Проверка / Очистка кеша"
  }, {
    "depth": 3,
    "slug": "firefox",
    "text": "Firefox"
  }, {
    "depth": 3,
    "slug": "браузеры-на-основе-chromium",
    "text": "Браузеры на основе Chromium"
  }, {
    "depth": 2,
    "slug": "автономное-приложение-strudel",
    "text": "Автономное приложение Strudel"
  }, {
    "depth": 3,
    "slug": "рабочий-стол",
    "text": "Рабочий стол"
  }, {
    "depth": 3,
    "slug": "ios",
    "text": "iOS"
  }, {
    "depth": 3,
    "slug": "android",
    "text": "Android"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "использование-strudel-в-оффлайн-режиме",
      children: ["Использование Strudel в оффлайн режиме", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/pwa/#использование-strudel-в-оффлайн-режиме",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете использовать Strudel даже без сетевого подключения! Когда вы впервые посещаете ", createVNode(_components.a, {
        href: "https://strudel.cc/",
        children: "Strudel REPL"
      }), ",\nваш браузер загрузит все веб-приложение, включая документацию.\nКогда загрузка завершена (<1MB), вы можете посещать веб-сайт даже в оффлайн режиме,\nполучая загруженный веб-сайт вместо онлайн версии."]
    }), "\n", createVNode(_components.p, {
      children: "Когда сайт обновляется, ваш браузер загрузит это обновление при следующем онлайн посещении.\nКогда обновление доступно, сайт обновится после завершения загрузки."
    }), "\n", createVNode(_components.p, {
      children: ["Это работает, потому что Strudel реализован как progessive web app (используя ", createVNode(_components.a, {
        href: "https://vite-pwa-org.netlify.app/",
        children: "Vite PWA"
      }), ")."]
    }), "\n", createVNode(_components.h2, {
      id: "samples",
      children: ["Samples", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/pwa/#samples",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Хотя браузер загрузит само приложение, samples загружаются только когда вы их активно используете.\nПоэтому, чтобы убедиться, что конкретный набор samples доступен в оффлайн режиме, просто используйте их.\nТакже, только samples с этих доменов будут кешироваться для оффлайн использования:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "https://raw.githubusercontent.com/*"
        }), " для samples, загруженных на github"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "https://freesound.org/*"
        }), " / ", createVNode(_components.code, {
          children: "https://cdn.freesound.org/*"
        }), " для freesound"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "https://shabda.ndre.gr/.*"
        }), " для shabda"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "проверка--очистка-кеша",
      children: ["Проверка / Очистка кеша", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/pwa/#проверка--очистка-кеша",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вы можете просмотреть все кешированные файлы в вашем браузере."
    }), "\n", createVNode(_components.h3, {
      id: "firefox",
      children: ["Firefox", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/pwa/#firefox",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Откройте Developer Tools (", createVNode(_components.code, {
          children: "Tools > Web Developer > Web Developer Tools"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["перейдите на вкладку ", createVNode(_components.code, {
          children: "Storage"
        }), " и разверните ", createVNode(_components.code, {
          children: "Cache Storage > https://strudel.cc"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["или перейдите на вкладку ", createVNode(_components.code, {
          children: "Application"
        }), " и просмотрите последние обновления в ", createVNode(_components.code, {
          children: "Service Workers"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "браузеры-на-основе-chromium",
      children: ["Браузеры на основе Chromium", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/pwa/#браузеры-на-основе-chromium",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Откройте Developer Tools (", createVNode(_components.code, {
          children: "Правый клик > Inspect"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["перейдите на вкладку ", createVNode(_components.code, {
          children: "Application"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["просмотрите загруженные файлы в ", createVNode(_components.code, {
          children: "Cache > Cache Storage"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["просмотрите последние обновления в ", createVNode(_components.code, {
          children: "Service Workers"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "автономное-приложение-strudel",
      children: ["Автономное приложение Strudel", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/pwa/#автономное-приложение-strudel",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Вы также можете установить Strudel как автономное приложение на большинстве устройств.\nАвтономное приложение имеет свою собственную иконку на рабочем столе / главном экране и запускается в отдельном окне,\nбез интерфейса браузера."
    }), "\n", createVNode("figure", {
      children: createVNode(_components.p, {
        children: [createVNode(_components.img, {
          src: "/pwa/strudel-macos.png",
          alt: "Strudel on MacOS"
        }), "\n", createVNode("figcaption", {
          children: "Strudel на MacOS"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "рабочий-стол",
      children: ["Рабочий стол", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/pwa/#рабочий-стол",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "С браузером на основе chromium:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["перейдите в ", createVNode(_components.a, {
          href: "https://strudel.cc/",
          children: "Strudel REPL"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["справа от адресной строки нажмите ", createVNode(_components.code, {
          children: "install Strudel REPL"
        })]
      }), "\n", createVNode(_components.li, {
        children: "REPL теперь должен запускаться как автономное chromium приложение"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Без браузера на основе chromium вы можете использовать ", createVNode(_components.a, {
        href: "https://github.com/nativefier/nativefier",
        children: "nativefier"
      }), " для генерации приложения для рабочего стола:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "убедитесь, что у вас установлен NodeJS"
      }), "\n", createVNode(_components.li, {
        children: ["запустите ", createVNode(_components.code, {
          children: "npx nativefier strudel.cc"
        })]
      }), "\n"]
    }), "\n", createVNode("figure", {
      children: createVNode(_components.p, {
        children: [createVNode(_components.img, {
          src: "/pwa/strudel-linux.png",
          alt: "Strudel on Linux"
        }), "\n", createVNode("figcaption", {
          children: "Strudel на Linux"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "ios",
      children: ["iOS", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/pwa/#ios",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["откройте ", createVNode(_components.a, {
          href: "https://strudel.cc/",
          children: "Strudel REPL"
        }), " в safari"]
      }), "\n", createVNode(_components.li, {
        children: ["нажмите иконку поделиться и выберите ", createVNode(_components.code, {
          children: "Add to homescreen"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Теперь у вас должна быть иконка приложения strudel, которая открывает repl в полноэкранном режиме"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "android",
      children: ["Android", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/pwa/#android",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["откройте ", createVNode(_components.a, {
          href: "https://strudel.cc/",
          children: "Strudel REPL"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Нажмите кнопку установки внизу"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Итак, что такое ", createVNode(_components.a, {
        href: "/technical-manual/patterns/",
        children: "Patterns"
      }), "?"]
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

const url = "/learn/pwa";
const file = "/home/user/Bulka/website/src/pages/learn/pwa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/pwa.mdx";
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
