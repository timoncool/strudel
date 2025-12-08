/* empty css                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, g as renderHead } from '../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$HeadCommon } from '../chunks/HeadCommon_BR8Uvu4A.mjs';
export { renderers } from '../renderers.mjs';

const $$Embed = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head>${renderComponent($$result, "HeadCommon", $$HeadCommon, {})}<title>Bulka REPL</title>${renderHead()}</head> <body> ${renderComponent($$result, "Repl", null, { "client:only": "react", "embedded": true, "client:component-hydration": "only", "client:component-path": "/home/user/Bulka/website/src/repl/Repl.jsx", "client:component-export": "Repl" })} </body></html>`;
}, "/home/user/Bulka/website/src/pages/embed.astro", undefined);

const $$file = "/home/user/Bulka/website/src/pages/embed.astro";
const $$url = "/embed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Embed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
