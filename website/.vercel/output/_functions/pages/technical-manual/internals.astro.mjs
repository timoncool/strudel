/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import '../../chunks/MiniRepl_Ntj7iAxy.mjs';
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
  "title": "Внутренние компоненты",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "внутренние-функции",
    "text": "Внутренние функции"
  }, {
    "depth": 1,
    "slug": "haskell-подобные-операции-functor-applicative-и-monadic",
    "text": "Haskell-подобные операции functor, applicative и monadic"
  }, {
    "depth": 2,
    "slug": "withvalue",
    "text": "withValue"
  }, {
    "depth": 2,
    "slug": "appwhole",
    "text": "appWhole"
  }, {
    "depth": 2,
    "slug": "appboth",
    "text": "appBoth"
  }, {
    "depth": 2,
    "slug": "appleft",
    "text": "appLeft"
  }, {
    "depth": 2,
    "slug": "appright",
    "text": "appRight"
  }, {
    "depth": 2,
    "slug": "bindwhole",
    "text": "bindWhole"
  }, {
    "depth": 2,
    "slug": "bind",
    "text": "bind"
  }, {
    "depth": 2,
    "slug": "join",
    "text": "join"
  }, {
    "depth": 2,
    "slug": "outerbind",
    "text": "outerBind"
  }, {
    "depth": 2,
    "slug": "outerjoin",
    "text": "outerJoin"
  }, {
    "depth": 2,
    "slug": "innerbind",
    "text": "innerBind"
  }, {
    "depth": 2,
    "slug": "innerjoin",
    "text": "innerJoin"
  }, {
    "depth": 2,
    "slug": "resetjoin",
    "text": "resetJoin"
  }, {
    "depth": 2,
    "slug": "restartjoin",
    "text": "restartJoin"
  }, {
    "depth": 2,
    "slug": "squeezejoin",
    "text": "squeezeJoin"
  }, {
    "depth": 2,
    "slug": "squeezebind",
    "text": "squeezeBind"
  }, {
    "depth": 1,
    "slug": "утилитарные-методы-в-основном-для-внутреннего-использования",
    "text": "Утилитарные методы в основном для внутреннего использования"
  }, {
    "depth": 2,
    "slug": "queryarc",
    "text": "queryArc"
  }, {
    "depth": 2,
    "slug": "splitqueries",
    "text": "splitQueries"
  }, {
    "depth": 2,
    "slug": "withqueryspan",
    "text": "withQuerySpan"
  }, {
    "depth": 2,
    "slug": "withqueryspanmaybe",
    "text": "withQuerySpanMaybe"
  }, {
    "depth": 2,
    "slug": "withquerytime",
    "text": "withQueryTime"
  }, {
    "depth": 2,
    "slug": "withhapspan",
    "text": "withHapSpan"
  }, {
    "depth": 2,
    "slug": "withhaptime",
    "text": "withHapTime"
  }, {
    "depth": 2,
    "slug": "withhaps",
    "text": "withHaps"
  }, {
    "depth": 2,
    "slug": "withhap",
    "text": "withHap"
  }, {
    "depth": 2,
    "slug": "setcontext",
    "text": "setContext"
  }, {
    "depth": 2,
    "slug": "withcontext",
    "text": "withContext"
  }, {
    "depth": 2,
    "slug": "stripcontext",
    "text": "stripContext"
  }, {
    "depth": 2,
    "slug": "withloc",
    "text": "withLoc"
  }, {
    "depth": 2,
    "slug": "filterhaps",
    "text": "filterHaps"
  }, {
    "depth": 2,
    "slug": "filtervalues",
    "text": "filterValues"
  }, {
    "depth": 2,
    "slug": "removeundefineds",
    "text": "removeUndefineds"
  }, {
    "depth": 2,
    "slug": "onsetsonly",
    "text": "onsetsOnly"
  }, {
    "depth": 2,
    "slug": "discreteonly",
    "text": "discreteOnly"
  }, {
    "depth": 2,
    "slug": "defragmenthaps",
    "text": "defragmentHaps"
  }, {
    "depth": 2,
    "slug": "firstcycle",
    "text": "firstCycle"
  }, {
    "depth": 2,
    "slug": "firstcyclevalues",
    "text": "firstCycleValues"
  }, {
    "depth": 2,
    "slug": "showfirstcycle",
    "text": "showFirstCycle"
  }, {
    "depth": 2,
    "slug": "sorthapsbypart",
    "text": "sortHapsByPart"
  }, {
    "depth": 2,
    "slug": "asnumber",
    "text": "asNumber"
  }, {
    "depth": 1,
    "slug": "операторы",
    "text": "Операторы"
  }, {
    "depth": 1,
    "slug": "прочее",
    "text": "Прочее"
  }, {
    "depth": 2,
    "slug": "ontrigger",
    "text": "onTrigger"
  }, {
    "depth": 2,
    "slug": "log",
    "text": "log"
  }, {
    "depth": 2,
    "slug": "logvalues",
    "text": "logValues"
  }, {
    "depth": 2,
    "slug": "drawline",
    "text": "drawLine"
  }, {
    "depth": 2,
    "slug": "collect",
    "text": "collect"
  }, {
    "depth": 1,
    "slug": "функции",
    "text": "Функции"
  }, {
    "depth": 2,
    "slug": "grouphapsby",
    "text": "groupHapsBy"
  }, {
    "depth": 2,
    "slug": "pure",
    "text": "pure"
  }, {
    "depth": 2,
    "slug": "reify",
    "text": "reify"
  }, {
    "depth": 2,
    "slug": "slowcatprime",
    "text": "slowcatPrime"
  }, {
    "depth": 2,
    "slug": "ispattern",
    "text": "isPattern"
  }, {
    "depth": 2,
    "slug": "register",
    "text": "register"
  }, {
    "depth": 2,
    "slug": "tobipolar",
    "text": "toBipolar"
  }, {
    "depth": 2,
    "slug": "frombipolar",
    "text": "fromBipolar"
  }, {
    "depth": 2,
    "slug": "compressspan",
    "text": "compressSpan"
  }, {
    "depth": 2,
    "slug": "focus",
    "text": "focus"
  }, {
    "depth": 2,
    "slug": "focusspan",
    "text": "focusSpan"
  }, {
    "depth": 2,
    "slug": "_composeop",
    "text": "_composeOp"
  }, {
    "depth": 1,
    "slug": "composers",
    "text": "Composers"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "внутренние-функции",
      children: ["Внутренние функции", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#внутренние-функции",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Эти функции более низкого уровня, вероятно, не нужны live coder."
    }), "\n", createVNode(_components.h1, {
      id: "haskell-подобные-операции-functor-applicative-и-monadic",
      children: ["Haskell-подобные операции functor, applicative и monadic", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#haskell-подобные-операции-functor-applicative-и-monadic",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "withvalue",
      children: ["withValue", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withvalue",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#withValue",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "appwhole",
      children: ["appWhole", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#appwhole",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#appWhole",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "appboth",
      children: ["appBoth", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#appboth",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#appBoth",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "appleft",
      children: ["appLeft", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#appleft",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#appLeft",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "appright",
      children: ["appRight", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#appright",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#appRight",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "bindwhole",
      children: ["bindWhole", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#bindwhole",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#bindWhole",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "bind",
      children: ["bind", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#bind",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#bind",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "join",
      children: ["join", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#join",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#join",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "outerbind",
      children: ["outerBind", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#outerbind",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#outerBind",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "outerjoin",
      children: ["outerJoin", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#outerjoin",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#outerJoin",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "innerbind",
      children: ["innerBind", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#innerbind",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#innerBind",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "innerjoin",
      children: ["innerJoin", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#innerjoin",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#innerJoin",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "resetjoin",
      children: ["resetJoin", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#resetjoin",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#resetJoin",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "restartjoin",
      children: ["restartJoin", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#restartjoin",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#restartJoin",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "squeezejoin",
      children: ["squeezeJoin", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#squeezejoin",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#squeezeJoin",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "squeezebind",
      children: ["squeezeBind", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#squeezebind",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#squeezeBind",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "утилитарные-методы-в-основном-для-внутреннего-использования",
      children: ["Утилитарные методы в основном для внутреннего использования", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#утилитарные-методы-в-основном-для-внутреннего-использования",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "queryarc",
      children: ["queryArc", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#queryarc",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#queryArc",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "splitqueries",
      children: ["splitQueries", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#splitqueries",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#splitQueries",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "withqueryspan",
      children: ["withQuerySpan", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withqueryspan",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#withQuerySpan",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "withqueryspanmaybe",
      children: ["withQuerySpanMaybe", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withqueryspanmaybe",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#withQuerySpanMaybe",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "withquerytime",
      children: ["withQueryTime", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withquerytime",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#withQueryTime",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "withhapspan",
      children: ["withHapSpan", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withhapspan",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#withHapSpan",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "withhaptime",
      children: ["withHapTime", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withhaptime",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#withHapTime",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "withhaps",
      children: ["withHaps", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withhaps",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#withHaps",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "withhap",
      children: ["withHap", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withhap",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#withHap",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "setcontext",
      children: ["setContext", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#setcontext",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#setContext",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "withcontext",
      children: ["withContext", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withcontext",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#setContext",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "stripcontext",
      children: ["stripContext", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#stripcontext",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#stripContext",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "withloc",
      children: ["withLoc", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#withloc",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#withLoc",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "filterhaps",
      children: ["filterHaps", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#filterhaps",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#filterHaps",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "filtervalues",
      children: ["filterValues", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#filtervalues",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#filterValues",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "removeundefineds",
      children: ["removeUndefineds", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#removeundefineds",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#filterValues",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "onsetsonly",
      children: ["onsetsOnly", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#onsetsonly",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#onsetsOnly",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "discreteonly",
      children: ["discreteOnly", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#discreteonly",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#discreteOnly",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "defragmenthaps",
      children: ["defragmentHaps", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#defragmenthaps",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#defragmentHaps",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "firstcycle",
      children: ["firstCycle", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#firstcycle",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#firstCycle",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "firstcyclevalues",
      children: ["firstCycleValues", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#firstcyclevalues",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#firstCycleValues",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "showfirstcycle",
      children: ["showFirstCycle", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#showfirstcycle",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#showFirstCycle",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "sorthapsbypart",
      children: ["sortHapsByPart", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#sorthapsbypart",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#sortHapsByPart",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "asnumber",
      children: ["asNumber", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#asnumber",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#sortHapsByPart",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h1, {
      id: "операторы",
      children: ["Операторы", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#операторы",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "_opIn"
      }), "\n", createVNode(_components.li, {
        children: "_opOut"
      }), "\n", createVNode(_components.li, {
        children: "_opMix"
      }), "\n", createVNode(_components.li, {
        children: "_opSqueeze"
      }), "\n", createVNode(_components.li, {
        children: "_opSqueezeOut"
      }), "\n", createVNode(_components.li, {
        children: "_opTrig"
      }), "\n", createVNode(_components.li, {
        children: "_opTrigzero"
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "прочее",
      children: ["Прочее", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#прочее",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "ontrigger",
      children: ["onTrigger", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#ontrigger",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#onTrigger",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "log",
      children: ["log", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#log",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#log",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "logvalues",
      children: ["logValues", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#logvalues",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#logValues",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "drawline",
      children: ["drawLine", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#drawline",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "Pattern#drawLine",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "collect",
      children: ["collect", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#collect",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h1, {
      id: "функции",
      children: ["Функции", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#функции",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "grouphapsby",
      children: ["groupHapsBy", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#grouphapsby",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "groupHapsBy",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "pure",
      children: ["pure", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#pure",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "pure",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "reify",
      children: ["reify", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#reify",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "reify",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "slowcatprime",
      children: ["slowcatPrime", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#slowcatprime",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "slowcatPrime",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "ispattern",
      children: ["isPattern", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#ispattern",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "isPattern",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "register",
      children: ["register", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#register",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "register",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "tobipolar",
      children: ["toBipolar", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#tobipolar",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "toBipolar",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "frombipolar",
      children: ["fromBipolar", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#frombipolar",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "fromBipolar",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "compressspan",
      children: ["compressSpan", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#compressspan",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "compressSpan",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "focus",
      children: ["focus", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#focus",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(JsDoc, {
      "client:idle": true,
      name: "focus",
      h: 0,
      "client:component-path": "/home/user/Bulka/website/src/docs/JsDoc",
      "client:component-export": "JsDoc",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "focusspan",
      children: ["focusSpan", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#focusspan",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "_composeop",
      children: ["_composeOp", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#_composeop",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.h1, {
      id: "composers",
      children: ["Composers", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/internals/#composers",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
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
            children: "set keep keepif add sub mul div mod pow band bor bxor blshift brshift lt gt lte gte eq eqt ne net and or func"
          })
        })
      })
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
            children: "In Out Mix Squeeze SqueezeOut Trig Trigzero"
          })
        })
      })
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

const url = "/technical-manual/internals";
const file = "/home/user/Bulka/website/src/pages/technical-manual/internals.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/technical-manual/internals.mdx";
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
