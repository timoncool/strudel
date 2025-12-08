/* empty css                                  */
import { e as createAstro, c as createComponent, r as renderTemplate, f as addAttribute, b as renderComponent, g as renderHead } from '../chunks/astro/server_Cr1ImhJZ.mjs';
import { $ as $$HeadCommon } from '../chunks/HeadCommon_BR8Uvu4A.mjs';
import { $ as $$Header, a as $$LeftSidebar, b as $$PageContent, c as $$RightSidebar } from '../chunks/RightSidebar_B6HFg5Aj.mjs';
import { g as getCollection } from '../chunks/_astro_content_CkoawDy1.mjs';
import { compareDesc } from 'date-fns';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://strudel.cc/");
const $$Bakery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Bakery;
  const currentPage = Astro2.url.pathname;
  (await getCollection("blog")).sort((a, b) => compareDesc(a.data.date, b.data.date));
  return renderTemplate`<html${addAttribute("ltr", "dir")}${addAttribute("en", "lang")} class="initial dark"> <head>${renderComponent($$result, "HeadCommon", $$HeadCommon, {})}<title>🌀 Strudel Community Bakery</title>${renderHead()}</head> <body class="h-app-height text-gray-50 bg-background"> <div class="w-full h-full space-y-4 flex flex-col"> <header class="max-w-full fixed top-0 w-full z-[100]"> ${renderComponent($$result, "Header", $$Header, { "currentPage": currentPage })} </header> <main class="relative pt-16"> <div class="h-full top-0 overflow-auto min-w-[300px] flex xl:justify-center pr-4 pl-4 md:pl-[300px] xl:pl-0"> <aside title="Site Navigation" class="w-[300px] px-6 left-0 hidden md:block fixed h-full"> ${renderComponent($$result, "LeftSidebar", $$LeftSidebar, { "currentPage": currentPage })} </aside> ${renderComponent($$result, "PageContent", $$PageContent, {}, { "default": ($$result2) => renderTemplate` <h1>Community Bakery</h1> <p>
This page contains all the strudel patterns baked by the community. Add your own by clicking the "Share"
              button in the REPL. Have fun, and please share some of what you create with the community.
</p> ${renderComponent($$result2, "CommunityOven", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/user/Bulka/website/src/components/Oven/Oven.jsx", "client:component-export": "Oven" })} ` })} <aside class="fixed right-0 h-full overflow-auto pr-4 pl-0 pb-16 hidden xl:block" title="Table of Contents"> ${renderComponent($$result, "RightSidebar", $$RightSidebar, { "headings": [
    {
      depth: 1,
      slug: "featured",
      text: "Featured"
    },
    {
      depth: 1,
      slug: "latest",
      text: "Last Creations"
    }
  ] })} </aside> </div> </main> </div> </body></html>`;
}, "/home/user/Bulka/website/src/pages/bakery.astro", undefined);

const $$file = "/home/user/Bulka/website/src/pages/bakery.astro";
const $$url = "/bakery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bakery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
