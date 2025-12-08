/* empty css                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, g as renderHead } from '../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$HeadCommon } from '../chunks/HeadCommon_BR8Uvu4A.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="m-0"> <head>${renderComponent($$result, "HeadCommon", $$HeadCommon, {})}<title>Strudel UDELS</title>${renderHead()}</head> <body class="m-0"> ${renderComponent($$result, "Udels", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/user/Bulka/website/src/components/Udels/Udels.jsx", "client:component-export": "Udels" })} </body></html>`;
}, "/home/user/Bulka/website/src/pages/udels/index.astro", undefined);

const $$file = "/home/user/Bulka/website/src/pages/udels/index.astro";
const $$url = "/udels";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
