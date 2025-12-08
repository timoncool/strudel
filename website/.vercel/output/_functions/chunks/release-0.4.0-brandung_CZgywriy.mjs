import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_Cr1ImhJZ.mjs';

const frontmatter = {
  "title": "Release Notes v0.4.0",
  "description": "",
  "date": "2022-11-13",
  "tags": ["meta"],
  "author": "froos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "whats-changed",
    "text": "What’s Changed"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "whats-changed",
      children: ["What’s Changed", createVNode(_components.a, {
        "aria-hidden": "true",
        tabindex: "-1",
        href: "//home/user/Bulka/website/src/content/blog/release-0.4.0-brandung/#whats-changed",
        children: createVNode(_components.span, {
          class: "icon icon-link"
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["new transpiler based on acorn by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/249",
          children: "https://codeberg.org/uzu/strudel/pulls/249"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Webaudio build by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/250",
          children: "https://codeberg.org/uzu/strudel/pulls/250"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Repl refactoring by @felixroos in ", createVNode(_components.a, {
          href: "https://codeberg.org/uzu/strudel/pulls/255",
          children: "https://codeberg.org/uzu/strudel/pulls/255"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Full Changelog"
      }), ": ", createVNode(_components.a, {
        href: "https://codeberg.org/uzu/strudel/compare/v0.3.0...v0.4.0",
        children: "https://codeberg.org/uzu/strudel/compare/v0.3.0…v0.4.0"
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

const url = "src/content/blog/release-0.4.0-brandung.mdx";
const file = "/home/user/Bulka/website/src/content/blog/release-0.4.0-brandung.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/Bulka/website/src/content/blog/release-0.4.0-brandung.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
