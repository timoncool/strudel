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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "device-motion",
      children: ["Device Motion", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/motion/docs/devicemotion/#device-motion",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Devicemotion module allows you to use your mobile device’s motion sensors (accelerometer, gyroscope, and orientation sensors) to control musical parameters in real-time. This creates opportunities for expressive, movement-based musical interactions."
    }), "\n", createVNode(_components.h2, {
      id: "basic-setup",
      children: ["Basic Setup", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/motion/docs/devicemotion/#basic-setup",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "First, you need to enable device motion sensing:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `enableMotion()`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "This will prompt the user for permission to access device motion sensors."
    }), "\n", createVNode(_components.h2, {
      id: "available-motion-parameters",
      children: ["Available Motion Parameters", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/motion/docs/devicemotion/#available-motion-parameters",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "You can access different types of motion data:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Motion"
          }), createVNode(_components.th, {
            children: "Long Names & Aliases"
          }), createVNode(_components.th, {
            children: "Description"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Acceleration"
          }), createVNode(_components.td, {
            children: "accelerationX (accX), accelerationY (accY), accelerationZ (accZ)"
          }), createVNode(_components.td, {
            children: "Measures linear acceleration of the device, excluding gravity. Raw values are normalized from g-force."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Gravity"
          }), createVNode(_components.td, {
            children: "gravityX (gravX), gravityY (gravY), gravityZ (gravZ)"
          }), createVNode(_components.td, {
            children: "Indicates device’s orientation relative to Earth’s gravity. Raw values are normalized from ±9.81 m/s²."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Rotation"
          }), createVNode(_components.td, {
            children: "rotationAlpha (rotA, rotZ), rotationBeta (rotB, rotX), rotationGamma (rotG, rotY)"
          }), createVNode(_components.td, {
            children: "Measures rotation rate around each axis. Raw values (±180°/s) are normalized."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Orientation"
          }), createVNode(_components.td, {
            children: "orientationAlpha (oriA, oriZ), orientationBeta (oriB, oriX), orientationGamma (oriG, oriY)"
          }), createVNode(_components.td, {
            children: ["Relative orientation from its starting device position. Normalized from:", createVNode("br", {}), "- Alpha: 0° to 360°", createVNode("br", {}), "- Beta: -180° to 180°", createVNode("br", {}), "- Gamma: -90° to 90°"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Absolute Orientation"
          }), createVNode(_components.td, {
            children: "absoluteOrientationAlpha (absOriA, absOriZ), absoluteOrientationBeta (absOriB, absOriX), absoluteOrientationGamma (absOriG, absOriY)"
          }), createVNode(_components.td, {
            children: [createVNode(_components.strong, {
              children: "Not available for iOS"
            }), " ", createVNode("br", {}), " Earth-referenced orientation using magnetometer. Same normalization as Orientation."]
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Note:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "All motion values are normalized to a range of 0 to 1."
      }), "\n", createVNode(_components.li, {
        children: ["Not all devices have the same sensors available\nCheck ", createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent",
          children: "DeviceMotionEvent API"
        }), " for browser compatibility"]
      }), "\n", createVNode(_components.li, {
        children: ["Refer to ", createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained",
          children: "Oritentation and motion data explained"
        }), " for more details"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "orientation-vs-absolute-orientation",
      children: ["Orientation vs Absolute Orientation", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/motion/docs/devicemotion/#orientation-vs-absolute-orientation",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "The key difference between regular orientation and absolute orientation is:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Regular orientation (", createVNode(_components.code, {
          children: "oriX/Y/Z"
        }), ") measures relative changes in device orientation from its starting position"]
      }), "\n", createVNode(_components.li, {
        children: ["Absolute orientation (", createVNode(_components.code, {
          children: "absOriX/Y/Z"
        }), ") measures orientation relative to Earth’s magnetic field and gravity, providing consistent absolute values regardless of starting position"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For example, if you rotate your device 90 degrees clockwise and then back:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Regular orientation will show a change during rotation but return to initial values"
      }), "\n", createVNode(_components.li, {
        children: "Absolute orientation will show the actual compass heading throughout"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This makes absolute orientation particularly useful for creating direction-based musical interactions - for example, performers facing north could play one melody while those facing south play another, creating spatially-aware ensemble performances. Regular orientation, on the other hand, is better suited for detecting relative motion and gestures regardless of which direction the performer is facing."
    }), "\n", createVNode(_components.h2, {
      id: "basic-example",
      children: ["Basic Example", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/motion/docs/devicemotion/#basic-example",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Here’s a simple example that uses device motion to control a synthesizer:"
    }), "\n", createVNode(MiniRepl, {
      "client:idle": true,
      tune: `enableMotion()
// Create a simple melody
$:n("0 1 3 5")
.scale("C:major")
// Use tilt (gravity) to control filter
.lpf(gravityY.range(200, 2000)) // tilt forward/back for filter cutoff
// Use rotation to control effects
.room(rotZ.range(0, 0.8)) // rotate device for reverb amount
.gain(oriX.range(0.2, 0.8)) // tilt left/right for volume
.sound("sawtooth")`,
      "client:component-path": "/home/user/Bulka/website/src/docs/MiniRepl",
      "client:component-export": "MiniRepl",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "tips-for-using-motion-controls",
      children: ["Tips for Using Motion Controls", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/motion/docs/devicemotion/#tips-for-using-motion-controls",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Use ", createVNode(_components.code, {
          children: ".range(min, max)"
        }), " to map sensor values to musically useful ranges"]
      }), "\n", createVNode(_components.li, {
        children: ["Consider using ", createVNode(_components.code, {
          children: ".segment()"
        }), " to smooth out rapid changes in sensor values"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "debugging",
      children: ["Debugging", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/packages/motion/docs/devicemotion/#debugging",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["You can use ", createVNode(_components.code, {
        children: "segment(16).log()"
      }), " to see the raw values from any motion sensor:"]
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
            children: "$_"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": accX."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "segment"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "16"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// logs acceleration values to the console"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This is helpful when calibrating your ranges and understanding how your device responds to different movements."
    }), "\n", createVNode(_components.p, {
      children: "Remember that device motion works best on mobile devices and may not be available on all desktop browsers. Always test your motion-controlled pieces on the target device type!"
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
Content$1.moduleId = "/home/user/Bulka/packages/motion/docs/devicemotion.mdx";
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
  "title": "Движение устройства",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Content$1, {});
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
const url = "/learn/devicemotion";
const file = "/home/user/Bulka/website/src/pages/learn/devicemotion.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/learn/devicemotion.mdx";
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
