import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';
import 'react/jsx-runtime';
import 'react-lite-youtube-embed';
/* empty css                                    */

const frontmatter = {
  "title": "Release Notes v0.8.0",
  "description": "",
  "date": "2023-06-30",
  "tags": ["meta"],
  "author": "froos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "desktop-app",
    "text": "Desktop App"
  }, {
    "depth": 2,
    "slug": "spiral-visualization",
    "text": "Spiral Visualization"
  }, {
    "depth": 2,
    "slug": "more-settings",
    "text": "More settings"
  }, {
    "depth": 2,
    "slug": "more",
    "text": "More"
  }, {
    "depth": 2,
    "slug": "package-versions",
    "text": "Package Versions"
  }, {
    "depth": 2,
    "slug": "whats-changed",
    "text": "What’s Changed"
  }, {
    "depth": 2,
    "slug": "new-contributors",
    "text": "New Contributors"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "These are the release notes for Strudel 0.8.0 aka “Himbeermuffin”!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://club.tidalcycles.org/t/strudel-0-8-0-released/4769",
        children: "Go to Tidal Club Forum for this Release"
      })
    }), "\n", createVNode(_components.p, {
      children: "Let me write up some of the highlights:"
    }), "\n", createVNode(_components.h2, {
      id: "desktop-app",
      children: ["Desktop App", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.8.0-himbeermuffin/#desktop-app",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Besides the REPL (", createVNode(_components.a, {
        href: "https://strudel.tidalcycles.org/",
        children: "https://strudel.tidalcycles.org/"
      }), "), Strudel is now also distributed as a Desktop App via ", createVNode(_components.a, {
        href: "https://tauri.app/",
        children: "https://tauri.app/"
      }), "! Thanks to ", createVNode(_components.a, {
        href: "https://github.com/vasilymilovidov",
        children: "vasilymilovidov"
      }), "!"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/releases/download/v0.8.0/strudel_0.1.0_amd64.deb",
          children: "Linux: Debian based"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/releases/download/v0.8.0/strudel_0.1.0_amd64.AppImage",
          children: "Linux: AppImage"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/releases/download/v0.8.0/Strudel_0.1.0_x64.dmg",
          children: "MacOS"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/releases/download/v0.8.0/Strudel_0.1.0_x64-setup.exe",
          children: "Windows .exe"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/releases/download/v0.8.0/Strudel_0.1.0_x64_en-US.msi",
          children: "Windows .msi"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "edit: the desktop app performance on linux is currently not that great.. the web REPL runs much smoother (using firefox or chromium)"
    }), "\n", createVNode(_components.p, {
      children: "The desktop App has the same features as the webapp, with the additional ability to load samples from disk. It is currently not documented yet, but you can do something like"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: "'~/music/xxx'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "s"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'my_sound'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You have to start with ", createVNode(_components.code, {
        children: "~/music/"
      }), ", followed by an arbitrary folder path that is expected to be present in the systems ", createVNode(_components.a, {
        href: "https://tauri.app/v1/api/js/path/#audiodir",
        children: "audio directory"
      }), ".\nWhen you first run it, the app will create a strudel.json file in that directory to map out the available samples."]
    }), "\n", createVNode(_components.p, {
      children: "I would be very happy to collect some feedback on how it works across different platforms & systems!"
    }), "\n", createVNode(_components.h2, {
      id: "spiral-visualization",
      children: ["Spiral Visualization", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.8.0-himbeermuffin/#spiral-visualization",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Also still undocumented, but you can now visualize patterns as a spiral via ", createVNode(_components.code, {
        children: ".spiral()"
      }), ":"]
    }), "\n", createVNode("astro-client-only", {
      "client:only": "react",
      id: "24bSHhEdUeM",
      "client:display-name": "Youtube",
      "client:component-path": "@src/components/Youtube",
      "client:component-export": "Youtube",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "This is especially nice because strudel is not only the name of a dessert but also the german word for vortex! The spiral is very fitting to visualize cycles because you can align cycles vertically, while surfing along an infinite twisted timeline."
    }), "\n", createVNode(_components.h2, {
      id: "more-settings",
      children: ["More settings", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.8.0-himbeermuffin/#more-settings",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "In the settings tab, you can now toggle:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "line numbers"
      }), "\n", createVNode(_components.li, {
        children: "auto-complete"
      }), "\n", createVNode(_components.li, {
        children: "line wrapping"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Thanks to ", createVNode(_components.a, {
        href: "https://github.com/roipoussiere",
        children: "roipoussiere"
      }), "!"]
    }), "\n", createVNode(_components.h2, {
      id: "more",
      children: ["More", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.8.0-himbeermuffin/#more",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Scroll down to see the full list of Changes!"
    }), "\n", createVNode(_components.p, {
      children: "A big thanks to all the contributors!"
    }), "\n", createVNode(_components.h2, {
      id: "package-versions",
      children: ["Package Versions", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.8.0-himbeermuffin/#package-versions",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "@strudel.cycles/core: 0.8.2"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/mini: 0.8.2"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/transpiler: 0.8.2"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/webaudio: 0.8.2"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/soundfonts: 0.8.2"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/react: 0.8.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/midi: 0.8.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/osc: 0.8.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/csound: 0.8.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/serial: 0.8.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/tonal: 0.8.2"
      }), "\n", createVNode(_components.li, {
        children: "@strudel.cycles/xen: 0.8.0"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/codemirror: 0.8.4"
      }), "\n", createVNode(_components.li, {
        children: "@strudel/web: 0.8.3"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "whats-changed",
      children: ["What’s Changed", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.8.0-himbeermuffin/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["fix period key for dvorak + remove duplicated code by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/537",
          children: "https://codeberg.org/uzu/strudel/pulls/537"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["improve initial loading + wait before eval by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/538",
          children: "https://codeberg.org/uzu/strudel/pulls/538"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["do not reset cps before eval #517 by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/539",
          children: "https://codeberg.org/uzu/strudel/pulls/539"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["feat: add loader bar to animate loading state by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/542",
          children: "https://codeberg.org/uzu/strudel/pulls/542"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add firacode font by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/544",
          children: "https://codeberg.org/uzu/strudel/pulls/544"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: allow whitespace at the end of a mini pattern by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/547",
          children: "https://codeberg.org/uzu/strudel/pulls/547"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: reset time on stop by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/548",
          children: "https://codeberg.org/uzu/strudel/pulls/548"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: load soundfonts in prebake by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/550",
          children: "https://codeberg.org/uzu/strudel/pulls/550"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: colorable highlighting by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/553",
          children: "https://codeberg.org/uzu/strudel/pulls/553"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: make soundfonts import dynamic by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/556",
          children: "https://codeberg.org/uzu/strudel/pulls/556"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add basic triads and guidetone voicings by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/557",
          children: "https://codeberg.org/uzu/strudel/pulls/557"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Patchday by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/559",
          children: "https://codeberg.org/uzu/strudel/pulls/559"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Vanilla JS Refactoring by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/563",
          children: "https://codeberg.org/uzu/strudel/pulls/563"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["repl: add option to display line numbers by @roipoussiere in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/582",
          children: "https://codeberg.org/uzu/strudel/pulls/582"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["learn/tonal: fix typo in “scaleTran[s]pose” by @srenatus in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/585",
          children: "https://codeberg.org/uzu/strudel/pulls/585"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Music metadata by @roipoussiere in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/580",
          children: "https://codeberg.org/uzu/strudel/pulls/580"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["New Workshop by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/587",
          children: "https://codeberg.org/uzu/strudel/pulls/587"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix option dot by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/596",
          children: "https://codeberg.org/uzu/strudel/pulls/596"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: allow f for flat notes like tidal by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/593",
          children: "https://codeberg.org/uzu/strudel/pulls/593"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: division by zero by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/591",
          children: "https://codeberg.org/uzu/strudel/pulls/591"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Solmization added by @dariacotocu in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/570",
          children: "https://codeberg.org/uzu/strudel/pulls/570"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["improve cursor by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/597",
          children: "https://codeberg.org/uzu/strudel/pulls/597"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["enable auto-completion by @roipoussiere in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/588",
          children: "https://codeberg.org/uzu/strudel/pulls/588"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add ratio function by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/602",
          children: "https://codeberg.org/uzu/strudel/pulls/602"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["editor: enable line wrapping by @roipoussiere in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/581",
          children: "https://codeberg.org/uzu/strudel/pulls/581"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["tonal fixes by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/607",
          children: "https://codeberg.org/uzu/strudel/pulls/607"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: flatten scale lists by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/605",
          children: "https://codeberg.org/uzu/strudel/pulls/605"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["clip now works like legato in tidal by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/598",
          children: "https://codeberg.org/uzu/strudel/pulls/598"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: doc links by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/612",
          children: "https://codeberg.org/uzu/strudel/pulls/612"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["tauri desktop app by @vasilymilovidov in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/613",
          children: "https://codeberg.org/uzu/strudel/pulls/613"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["add spiral viz by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/614",
          children: "https://codeberg.org/uzu/strudel/pulls/614"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["patterning ui settings by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/606",
          children: "https://codeberg.org/uzu/strudel/pulls/606"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fix typo on packages.mdx by @paikwiki in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/520",
          children: "https://codeberg.org/uzu/strudel/pulls/520"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["cps dependent functions by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/620",
          children: "https://codeberg.org/uzu/strudel/pulls/620"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["desktop: play samples from disk by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/621",
          children: "https://codeberg.org/uzu/strudel/pulls/621"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["fix: midi clock drift by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/627",
          children: "https://codeberg.org/uzu/strudel/pulls/627"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "new-contributors",
      children: ["New Contributors", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.8.0-himbeermuffin/#new-contributors",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["@roipoussiere made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/582",
          children: "https://codeberg.org/uzu/strudel/pulls/582"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@srenatus made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/585",
          children: "https://codeberg.org/uzu/strudel/pulls/585"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@dariacotocu made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/570",
          children: "https://codeberg.org/uzu/strudel/pulls/570"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@vasilymilovidov made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/613",
          children: "https://codeberg.org/uzu/strudel/pulls/613"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["@paikwiki made their first contribution in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/520",
          children: "https://codeberg.org/uzu/strudel/pulls/520"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.7.0...v0.8.0",
        children: "https://codeberg.org/uzu/strudel/compare/v0.7.0…v0.8.0"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/release-0.8.0-himbeermuffin.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.8.0-himbeermuffin.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.8.0-himbeermuffin.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
