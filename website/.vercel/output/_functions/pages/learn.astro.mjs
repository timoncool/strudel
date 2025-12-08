/* empty css                                  */
import { c as createComponent, r as renderTemplate } from '../chunks/astro/server_Cr1ImhJZ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n  window.location.pathname = `/workshop/getting-started`;\n<\/script>"], ["<script>\n  window.location.pathname = \\`/workshop/getting-started\\`;\n<\/script>"])));
}, "/home/user/Bulka/website/src/pages/learn/index.astro", undefined);

const $$file = "/home/user/Bulka/website/src/pages/learn/index.astro";
const $$url = "/learn";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
