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
  "title": "Ксеногармонические функции",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "ксеногармонические-функции",
    "text": "Ксеногармонические функции"
  }, {
    "depth": 3,
    "slug": "tunescale",
    "text": "tune(scale)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "ксеногармонические-функции",
      children: ["Ксеногармонические функции", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/xen/#ксеногармонические-функции",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эти функции позволяют использовать гаммы, отличные от типичных хроматических 12-тоновых."
    }), "\n", createVNode(_components.h3, {
      id: "tunescale",
      children: ["tune(scale)", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/xen/#tunescale",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "tune",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Вот пример настройки базовой гаммы hexany:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"0 1 2 3 4 5".tune("hexany15").mul("220").freq()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Попробуйте другие гаммы, такие как ", createVNode(_components.code, {
        children: "hexany1"
      }), ", ", createVNode(_components.code, {
        children: "iraq"
      }), ", ", createVNode(_components.code, {
        children: "gumbeng"
      }), ", ", createVNode(_components.code, {
        children: "gunkali"
      }), ", или ", createVNode(_components.code, {
        children: "tranh3"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Полный список доступных гамм из tunejs см. на ", createVNode(_components.a, {
        href: "http://abbernie.github.io/tune/scales.html",
        children: "http://abbernie.github.io/tune/scales.html"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Вы можете установить свою основную ноту на определенную ноту с помощью ", createVNode(_components.code, {
        children: "getFreq"
      })]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"4 8 9 10 - - 5 7 9 11 - -".tune("tranh3")
  .mul(getFreq('c3'))
  .freq().clip(.5).room(1)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Некоторые строи становятся более выраженными с более длительным затуханием reverb:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"<[5 6 8 10] - [5 7 9 12] -> -".tune("gumbeng")
.mul(getFreq('c3'))
.freq().clip(.8).room("3:10").rdim(10000).rfade(5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Кроме того, вы можете комбинировать это с ", createVNode(_components.code, {
        children: "fmap"
      }), ", чтобы базовая нота изменялась:"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"9 11 12 10 - - -".tune("gunkali")
.mul("<c3 c3 a3 d#3>".fmap(getFreq))
.freq().legato("2 .7").room("1:15").rdim(8500).rlp(14000).rfade(8)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Комбинирование этого с различными трюками полиритмии может стать очень выразительным:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"<[0 3 1 -] [-1 4 2 8]> ~ ~,<-4 -5>"
.transpose(4)
.tune("iraq")
.mul("<c3 d3 c#3>".fmap(getFreq))
.freq().clip(.5).room(1).rfade(9)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Еще одна полезная уловка при изучении новых строев - играть их арпеджио.\nМногие имеют гораздо более очаровательное звучание, которое было выбрано в течение многих поколений музыкантов за игру арпеджио."
    }), "\n", createVNode(_components.p, {
      children: ["Возьмем строй ", createVNode(_components.code, {
        children: "sanza"
      }), ":"]
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"4 5 6 7 8 9".tune("sanza")
.mul(getFreq('c3'))
.freq()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Ноты 7 и 9 будут довольно сильно конфликтовать, если вы играете их арпеджио обычным способом. Многие строи будут иметь такое звучание, и это может отвлекать само по себе.\nПосмотрите, как они близко на pitch wheel?"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"[7 9]!3".tune("sanza").mul(getFreq('c3')).freq()._pitchwheel()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Это качество часто связано с тем, как строи формировались с инструментами, на которых играли иначе, чем на фортепиано.\nТаким образом, на некоторых строях гораздо лучше играть арпеджио, где тонкий конфликт расстроенных нот фактически делает звук гораздо более магическим:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `"[0 1 2 3 4 5 6]@0.3 -"
.transpose("<2 5 8 1>")
.tune("sanza")
.mul(getFreq('c3')).freq()
.legato("3").room(1).rfade(5)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "Обратите внимание, что эффекты legato и reverb обеспечивают, чтобы звук арпеджио смешивался вместе. Чередование направления арпеджио может сделать\nтона еще более живыми."
    }), "\n", createVNode(_components.p, {
      children: ["Строй ", createVNode(_components.code, {
        children: "tranh3"
      }), " имеет похожий набор нот с двумя конфликтующими. Вы можете попробовать подставить его выше и посмотреть, найдете ли вы любимый паттерн арпеджио."]
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

const url = "/learn/xen";
const file = "/home/user/Bulka/website/src/pages/learn/xen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/xen.mdx";
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
