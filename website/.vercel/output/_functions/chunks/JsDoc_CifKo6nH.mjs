import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { bM as jsdoc, bN as MiniRepl } from './MiniRepl_Ntj7iAxy.mjs';

const docs = jsdoc.docs.reduce((acc, obj) => Object.assign(acc, { [obj.longname]: obj }), {});
function JsDoc({ name, h = 3, hideDescription, punchcard, canvasHeight }) {
  const item = docs[name];
  if (!item) {
    console.warn("Not found: " + name);
    return /* @__PURE__ */ jsx("div", {});
  }
  const CustomHeading = `h${h}`;
  const description = item.description?.replaceAll(/\{@link ([a-zA-Z\.]+)?#?([a-zA-Z]*)\}/g, (_, a, b) => {
    return `<a href="#${a.replaceAll(".", "").toLowerCase()}${b ? `-${b}` : ""}">${a}${b ? `#${b}` : ""}</a>`;
  }) || "";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !!h && /* @__PURE__ */ jsx(CustomHeading, { children: item.longname }),
    !hideDescription && /* @__PURE__ */ jsxs(Fragment, { children: [
      !!item.synonyms_text && /* @__PURE__ */ jsxs("span", { children: [
        "Synonyms: ",
        /* @__PURE__ */ jsx("code", { children: item.synonyms_text })
      ] }),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: description } })
    ] }),
    /* @__PURE__ */ jsx("ul", { children: item.params?.map((param, i) => /* @__PURE__ */ jsxs("li", { children: [
      param.name,
      " (",
      param.type?.names?.join("|"),
      "): ",
      param.description?.replace(/(<([^>]+)>)/gi, "")
    ] }, i)) }),
    item.examples?.length ? /* @__PURE__ */ jsx("div", { className: "space-y-2", children: item.examples?.map((example, k) => /* @__PURE__ */ jsx(MiniRepl, { tune: example, ...{ punchcard, canvasHeight } }, k)) }) : /* @__PURE__ */ jsx("div", {})
  ] });
}

export { JsDoc as J };
