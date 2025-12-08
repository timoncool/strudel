import { e as createAstro, c as createComponent, r as renderTemplate, h as renderScript, b as renderComponent, f as addAttribute, u as unescapeHTML, F as Fragment } from './astro/server_Cr1ImhJZ.mjs';
/* empty css                                 */

const pwaInfo = {"pwaInDevEnvironment":false,"webManifest":{"href":"/manifest.webmanifest","useCredentials":false,"linkTag":"<link rel=\"manifest\" href=\"/manifest.webmanifest\">"}};

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://strudel.cc/", "SSR": true};
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://strudel.cc/");
const $$HeadCommon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeadCommon;
  const { BASE_URL } = Object.assign(__vite_import_meta_env__, { _: process.env._ });
  const baseNoTrailing = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><link rel="alternate" type="application/rss+xml"', ' href="/rss.xml"><link rel="icon" type="image/svg+xml"', '><!-- Fredoka Font for Bulka branding --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&display=swap" rel="stylesheet"><!-- Iconify for noto:bread icon -->', '<meta name="description" content="Bulka — платформа для лайв-кодинга музыки в браузере."><link rel="icon"', '><link rel="apple-touch-icon"', ' sizes="180x180"><meta name="theme-color" content="#222222"><base', "><!-- Scrollable a11y code helper --><script", "></script>", "<!-- this does not work for some reason: --><!-- <style is:global define:vars={strudelTheme}></style> --><!-- the following variables are just a fallback to make sure everything is readable without JS -->", "", ""])), addAttribute(Astro2.generator, "content"), addAttribute(`RSS Feed for Bulka`, "title"), addAttribute(`${baseNoTrailing}/favicon.svg`, "href"), renderScript($$result, "/home/user/Bulka/website/src/components/HeadCommon.astro?astro&type=script&index=0&lang.ts"), addAttribute(`${baseNoTrailing}/favicon.svg`, "href"), addAttribute(`${baseNoTrailing}/icons/apple-icon-180.png`, "href"), addAttribute(BASE_URL, "href"), addAttribute(`${baseNoTrailing}/make-scrollable-code-focusable.js`, "`${baseNoTrailing}/make-scrollable-code-focusable.js`"), renderScript($$result, "/home/user/Bulka/website/src/components/HeadCommon.astro?astro&type=script&index=1&lang.ts"), renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(pwaInfo.webManifest.linkTag)}` })}`, renderScript($$result, "/home/user/Bulka/website/src/components/HeadCommon.astro?astro&type=script&index=2&lang.ts"));
}, "/home/user/Bulka/website/src/components/HeadCommon.astro", undefined);

export { $$HeadCommon as $ };
