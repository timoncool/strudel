/* empty css                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, g as renderHead } from '../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$HeadCommon } from '../chunks/HeadCommon_BR8Uvu4A.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="m-0 dark"> <head>${renderComponent($$result, "HeadCommon", $$HeadCommon, {})}<title>Bulka REPL — Лайв-кодинг музыки</title>${renderHead()}</head> <body class="h-app-height bg-background m-0"> ${renderComponent($$result, "Repl", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/user/Bulka/website/src/repl/Repl", "client:component-export": "Repl" })} <a rel="me" href="https://social.toplap.org/@strudel" target="_blank" class="hidden">mastodon</a> </body></html>`;
}, "/home/user/Bulka/website/src/pages/index.astro", undefined);

const $$file = "/home/user/Bulka/website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
