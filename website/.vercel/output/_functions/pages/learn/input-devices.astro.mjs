/* empty css                                     */
import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from '../../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DQ1espQa.mjs';
import { bN as MiniRepl } from '../../chunks/MiniRepl_Ntj7iAxy.mjs';
import '../../chunks/JsDoc_CifKo6nH.mjs';
export { renderers } from '../../renderers.mjs';

const frontmatter$1 = {};
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
      id: "gamepad",
      children: ["Gamepad", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#gamepad",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "The Gamepad module allows you to integrate gamepad input functionality into your musical patterns. This can be particularly useful for live performances or interactive installations where you want to manipulate sounds using a game controller."
    }), "\n", createVNode(_components.h2, {
      id: "getting-started",
      children: ["Getting Started", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#getting-started",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Initialize a gamepad by calling the gamepad() function with an optional index parameter."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `// Initialize gamepad (optional index parameter, defaults to 0)
const gp = gamepad(0)
note("c a f e").mask(gp.a)`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "available-controls",
      children: ["Available Controls", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#available-controls",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "The gamepad module provides access to buttons and analog sticks as normalized signals (0-1) that can modulate your patterns."
    }), "\n", createVNode(_components.h3, {
      id: "buttons",
      children: ["Buttons", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#buttons",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Type"
          }), createVNode(_components.th, {
            children: "Controls"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Face Buttons"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "a"
            }), ", ", createVNode(_components.code, {
              children: "b"
            }), ", ", createVNode(_components.code, {
              children: "x"
            }), ", ", createVNode(_components.code, {
              children: "y"
            }), " (or uppercase ", createVNode(_components.code, {
              children: "A"
            }), ", ", createVNode(_components.code, {
              children: "B"
            }), ", ", createVNode(_components.code, {
              children: "X"
            }), ", ", createVNode(_components.code, {
              children: "Y"
            }), ")"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {
            children: ["Toggle versions: ", createVNode(_components.code, {
              children: "tglA"
            }), ", ", createVNode(_components.code, {
              children: "tglB"
            }), ", ", createVNode(_components.code, {
              children: "tglX"
            }), ", ", createVNode(_components.code, {
              children: "tglY"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Shoulder Buttons"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "lb"
            }), ", ", createVNode(_components.code, {
              children: "rb"
            }), ", ", createVNode(_components.code, {
              children: "lt"
            }), ", ", createVNode(_components.code, {
              children: "rt"
            }), " (or uppercase ", createVNode(_components.code, {
              children: "LB"
            }), ", ", createVNode(_components.code, {
              children: "RB"
            }), ", ", createVNode(_components.code, {
              children: "LT"
            }), ", ", createVNode(_components.code, {
              children: "RT"
            }), ")"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {
            children: ["Toggle versions: ", createVNode(_components.code, {
              children: "tglLB"
            }), ", ", createVNode(_components.code, {
              children: "tglRB"
            }), ", ", createVNode(_components.code, {
              children: "tglLT"
            }), ", ", createVNode(_components.code, {
              children: "tglRT"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "D-Pad"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "up"
            }), ", ", createVNode(_components.code, {
              children: "down"
            }), ", ", createVNode(_components.code, {
              children: "left"
            }), ", ", createVNode(_components.code, {
              children: "right"
            }), " (or ", createVNode(_components.code, {
              children: "u"
            }), ", ", createVNode(_components.code, {
              children: "d"
            }), ", ", createVNode(_components.code, {
              children: "l"
            }), ", ", createVNode(_components.code, {
              children: "r"
            }), " or uppercase)"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {
            children: ["Toggle versions: ", createVNode(_components.code, {
              children: "tglUp"
            }), ", ", createVNode(_components.code, {
              children: "tglDown"
            }), ", ", createVNode(_components.code, {
              children: "tglLeft"
            }), ", ", createVNode(_components.code, {
              children: "tglRight"
            }), " (or ", createVNode(_components.code, {
              children: "tglU"
            }), ", ", createVNode(_components.code, {
              children: "tglD"
            }), ", ", createVNode(_components.code, {
              children: "tglL"
            }), ", ", createVNode(_components.code, {
              children: "tglR"
            }), ")"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Stick Buttons"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "l3"
            }), ", ‘r3’ (or ", createVNode(_components.code, {
              children: "ls"
            }), ", ", createVNode(_components.code, {
              children: "rs"
            }), ")"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {
            children: ["Toggle versions: ", createVNode(_components.code, {
              children: "tglL3"
            }), ", ‘tglR3’ (or ", createVNode(_components.code, {
              children: "tglLs"
            }), ", ", createVNode(_components.code, {
              children: "tglRs"
            }), ")"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "System Buttons"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "start"
            }), ", ", createVNode(_components.code, {
              children: "back"
            }), " (or uppercase ", createVNode(_components.code, {
              children: "START"
            }), ", ", createVNode(_components.code, {
              children: "BACK"
            }), ")"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {
            children: ["Toggle versions: ", createVNode(_components.code, {
              children: "tglStart"
            }), ", ", createVNode(_components.code, {
              children: "tglBack"
            }), " (or ", createVNode(_components.code, {
              children: "tglSTART"
            }), ", ", createVNode(_components.code, {
              children: "tglBACK"
            }), ")"]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "analog-sticks",
      children: ["Analog Sticks", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#analog-sticks",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Stick"
          }), createVNode(_components.th, {
            children: "Controls"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Left Stick"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "x1"
            }), ", ", createVNode(_components.code, {
              children: "y1"
            }), " (0 to 1 range)"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "x1_2"
            }), ", ", createVNode(_components.code, {
              children: "y1_2"
            }), " (-1 to 1 range)"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Right Stick"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "x2"
            }), ", ", createVNode(_components.code, {
              children: "y2"
            }), " (0 to 1 range)"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "x2_2"
            }), ", ", createVNode(_components.code, {
              children: "y2_2"
            }), " (-1 to 1 range)"]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "button-sequence",
      children: ["Button Sequence", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#button-sequence",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Stick"
          }), createVNode(_components.th, {
            children: "Controls"
          })]
        })
      }), createVNode(_components.tbody, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Button Sequence"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "btnSequence()"
            }), ", ", createVNode(_components.code, {
              children: "btnSeq()"
            }), ", ", createVNode(_components.code, {
              children: "btnseq()"
            })]
          })]
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "using-gamepad-inputs",
      children: ["Using Gamepad Inputs", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#using-gamepad-inputs",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Once initialized, you can use various gamepad inputs in your patterns. Here are some examples:"
    }), "\n", createVNode(_components.h3, {
      id: "button-inputs",
      children: ["Button Inputs", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#button-inputs",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "You can use button inputs to control different aspects of your music, such as gain or triggering events."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `const gp = gamepad(0)
setcpm(120) 
// Use button values to control amplitude
$: stack(
s("[[hh hh] oh hh oh]/2").mask(gp.tglX).bank("RolandTR909"), // X btn for HH
 s("cr*1").mask(gp.Y).bank("RolandTR909"), // LB btn for CR
s("bd").mask(gp.tglA).bank("RolandTR909"), // A btn for BD
s("[ht - - mt - - lt - ]/2").mask(gp.tglB).bank("RolandTR909"), // B btn for Toms
s("sd*4").mask(gp.RB).bank("RolandTR909"), // RB btn for SD
)
`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "analog-stick-inputs",
      children: ["Analog Stick Inputs", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#analog-stick-inputs",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Analog sticks can be used for continuous control, such as pitch shifting or panning."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `const gp = gamepad(0)
setcpm(120)
// Use analog stick for continuous control
$: note("c4 d3 a3 e3").sound("sawtooth") 
.lpf(gp.x1.range(100,4000)) 
.lpq(gp.y1.range(5,30))
.decay(gp.y2.range(0.1,2))
.lpenv(gp.x2.range(-5,5))`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h3, {
      id: "button-sequences",
      children: ["Button Sequences", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#button-sequences",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "You can define button sequences to trigger specific actions, like playing a sound when a sequence is detected."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `const gp = gamepad(0)
setcpm(120)
// Define button sequences
const HADOUKEN = [
'd',               // Down
'r',               // Right
'a',               // A
]
const KONAMI = 'uuddlrlrba' //Konami Code ↑↑↓↓←→←→BA

// Check butto-n sequence (returns 1 while detected, 0 when not within last 1 second)
$: s("free_hadouken -").slow(2)
.mask(gp.btnSequence(HADOUKEN)).room(1)

// hadouken.wav by Syna-Max
//https://freesound.org/people/Syna-Max/sounds/67674/
samples({free_hadouken: 'https://cdn.freesound.org/previews/67/67674_111920-lq.mp3'})
`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "multiple-gamepads",
      children: ["Multiple Gamepads", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/gamepad/docs/gamepad/#multiple-gamepads",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Strudel supports multiple gamepads. You can specify the gamepad index to connect to different devices."
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `const pad1 = gamepad(0);  // First gamepad
const pad2 = gamepad(1);  // Second gamepad`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    })]
  });
}
function MDXContent$1(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
const Content$1 = (props = {}) => MDXContent$1({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$1[Symbol.for('mdx-component')] = true;
Content$1[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$1.layout);
Content$1.moduleId = "/home/user/Bulka/packages/gamepad/docs/gamepad.mdx";
__astro_tag_component__(Content$1, 'astro:jsx');

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
  "title": "Устройства ввода",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "устройства-ввода",
    "text": "Устройства ввода"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "устройства-ввода",
      children: ["Устройства ввода", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/learn/input-devices/#устройства-ввода",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Strudel поддерживает различные устройства ввода, такие как геймпады и MIDI контроллеры, для манипулирования patterns в реальном времени."
    }), "\n", createVNode(Content$1, {})]
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

const url = "/learn/input-devices";
const file = "/home/user/Bulka/website/src/pages/learn/input-devices.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/input-devices.mdx";
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
