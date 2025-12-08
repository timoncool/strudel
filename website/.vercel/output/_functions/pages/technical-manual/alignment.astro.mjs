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
  "title": "Выравнивание Pattern",
  "layout": "../../layouts/MainLayout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "выравнивание-и-комбинирование-pattern",
    "text": "Выравнивание и комбинирование Pattern"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "выравнивание-и-комбинирование-pattern",
      children: ["Выравнивание и комбинирование Pattern", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "/technical-manual/alignment/#выравнивание-и-комбинирование-pattern",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Одним из ключевых аспектов Strudel, унаследованным от Tidal, является гибкий способ комбинирования patterns независимо от их структуры. Его декларативный подход означает, что live coder не нужно думать о деталях того, ", createVNode(_components.em, {
        children: "как"
      }), " это делается, только о том, ", createVNode(_components.em, {
        children: "что"
      }), " должно быть сделано."]
    }), "\n", createVNode(_components.p, {
      children: ["В качестве простого примера рассмотрим два числовых pattern ", createVNode(_components.code, {
        children: "\"0 [1 2] 3\""
      }), " и ", createVNode(_components.code, {
        children: "\"10 20\""
      }), ". Первый имеет три непрерывных шага равной длины, где второй шаг разбит на два подшага, давая четыре события в общей сложности. Существует очень большое количество способов, которыми можно комбинировать структуру этих двух patterns, но метод по умолчанию как в Strudel, так и в Tidal заключается в выравнивании cycles двух patterns, а затем взятии событий из первого pattern и их сопоставлении с событиями второго pattern. Поэтому следующие две строки эквивалентны:"]
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
              color: "#9ECBFF"
            },
            children: "'0 [1 2] 3'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10 20'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10 [11 22] 23'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Когда события частично перекрываются, они рассматриваются как фрагменты события из первого pattern. Это немного сложно концептуализировать, но давайте начнем со сравнения двух patterns в следующем примере:"
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
              color: "#9ECBFF"
            },
            children: "'0 1 2'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10 20'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10 [11 21] 22'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Они похожи на предыдущий пример тем, что число ", createVNode(_components.code, {
        children: "1"
      }), " разделено на два, и к его двум половинам добавлены ", createVNode(_components.code, {
        children: "10"
      }), " и ", createVNode(_components.code, {
        children: "20"
      }), " соответственно. Однако ", createVNode(_components.code, {
        children: "11"
      }), " ‘помнит’, что это фрагмент исходного события ", createVNode(_components.code, {
        children: "1"
      }), ", и поэтому рассматривается как имеющий длительность в треть cycle, несмотря на то, что активен только в течение шестой части cycle. Аналогично, ", createVNode(_components.code, {
        children: "21"
      }), " также является фрагментом исходного события ", createVNode(_components.code, {
        children: "1"
      }), ", но фрагментом его второй половины. Поскольку начало его события отсутствует, оно фактически не вызовет звук (если только не подвергнется дальнейшим трансформациям/комбинациям pattern)."]
    }), "\n", createVNode(_components.p, {
      children: ["На практике эффект этого неявного метода по умолчанию для комбинирования двух patterns заключается в том, что второй pattern добавляется ", createVNode(_components.em, {
        children: "в"
      }), " первый, и действительно это можно сделать явным:"]
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'0 1 2'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".add."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'10 20'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Это открывает путь для других способов выравнивания pattern, и несколько уже определены, в частности:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "in"
        }), " - как объяснено выше, выравнивает cycles и применяет значения из pattern справа ", createVNode(_components.em, {
          children: "в"
        }), " pattern слева."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "out"
        }), " - как с ", createVNode(_components.code, {
          children: "in"
        }), ", но значения применяются ", createVNode(_components.em, {
          children: "из"
        }), " pattern слева (т.е. ", createVNode(_components.em, {
          children: "в"
        }), " тот, что справа)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "mix"
        }), " - структуры из обоих patterns комбинируются, так что новые события не являются фрагментами, а создаются на пересечениях событий с обеих сторон."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "squeeze"
        }), " - cycles из pattern справа сжимаются в события слева. Так что, например, ", createVNode(_components.code, {
          children: "\"0 1 2\".add.squeeze(\"10 20\")"
        }), " эквивалентно ", createVNode(_components.code, {
          children: "\"[10 20] [11 21] [12 22]\""
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "squeezeout"
        }), " - как с ", createVNode(_components.code, {
          children: "squeeze"
        }), ", но cycles слева сжимаются в события справа. Так, ", createVNode(_components.code, {
          children: "\"0 1 2\".add.squeezeout(\"10 20\")"
        }), " эквивалентно ", createVNode(_components.code, {
          children: "[10 11 12] [20 21 22]"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "reset"
        }), " похож на ", createVNode(_components.code, {
          children: "squeezeout"
        }), " в том, что cycles справа выравниваются с событиями слева. Однако эти cycles не ‘сжимаются’, а усекаются, чтобы соответствовать событию. Так ", createVNode(_components.code, {
          children: "\"0 1 2 3 4 5 6 7\".add.reset(\"10 [20 30]\")"
        }), " будет эквивалентно ", createVNode(_components.code, {
          children: "10 11 12 13 20 21 30 31"
        }), ". По сути, события справа ‘сбрасывают’ cycles слева."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "restart"
        }), " похож на ", createVNode(_components.code, {
          children: "reset"
        }), ", но pattern ‘перезапускается’ с самого первого cycle, а не с текущего cycle. ", createVNode(_components.code, {
          children: "reset"
        }), " и ", createVNode(_components.code, {
          children: "restart"
        }), " поэтому дают разные результаты только там, где самый левый pattern отличается от одного cycle к другому."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Мы сохраним более глубокое изучение фона, дизайна и практических аспектов этих функций выравнивания для будущих публикаций. Однако в следующем разделе мы рассмотрим их в качестве кейса для изучения различных возможностей дизайна, предлагаемых Haskell для Tidal и JavaScript для Strudel."
    }), "\n", createVNode(_components.p, {
      children: ["Итак, как же Strudel и Tidal ", createVNode(_components.a, {
        href: "/learn/strudel-vs-tidal/",
        children: "соотносятся"
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

const url = "/technical-manual/alignment";
const file = "/home/user/Bulka/website/src/pages/technical-manual/alignment.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/pages/technical-manual/alignment.mdx";
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
