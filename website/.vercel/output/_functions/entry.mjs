import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CAIC8gL9.mjs';
import { manifest } from './manifest_CAxiuyR7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/chat.astro.mjs');
const _page2 = () => import('./pages/bakery.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/de/workshop/first-effects.astro.mjs');
const _page5 = () => import('./pages/de/workshop/first-notes.astro.mjs');
const _page6 = () => import('./pages/de/workshop/first-sounds.astro.mjs');
const _page7 = () => import('./pages/de/workshop/getting-started.astro.mjs');
const _page8 = () => import('./pages/de/workshop/pattern-effects.astro.mjs');
const _page9 = () => import('./pages/de/workshop/recap.astro.mjs');
const _page10 = () => import('./pages/de/workshop.astro.mjs');
const _page11 = () => import('./pages/embed.astro.mjs');
const _page12 = () => import('./pages/examples.astro.mjs');
const _page13 = () => import('./pages/functions/intro.astro.mjs');
const _page14 = () => import('./pages/functions/value-modifiers.astro.mjs');
const _page15 = () => import('./pages/intro/gallery.astro.mjs');
const _page16 = () => import('./pages/intro/showcase.astro.mjs');
const _page17 = () => import('./pages/learn/accumulation.astro.mjs');
const _page18 = () => import('./pages/learn/advanced-integrations.astro.mjs');
const _page19 = () => import('./pages/learn/code.astro.mjs');
const _page20 = () => import('./pages/learn/colors.astro.mjs');
const _page21 = () => import('./pages/learn/community.astro.mjs');
const _page22 = () => import('./pages/learn/conditional-modifiers.astro.mjs');
const _page23 = () => import('./pages/learn/csound.astro.mjs');
const _page24 = () => import('./pages/learn/devicemotion.astro.mjs');
const _page25 = () => import('./pages/learn/effects.astro.mjs');
const _page26 = () => import('./pages/learn/factories.astro.mjs');
const _page27 = () => import('./pages/learn/getting-started.astro.mjs');
const _page28 = () => import('./pages/learn/hydra.astro.mjs');
const _page29 = () => import('./pages/learn/input-devices.astro.mjs');
const _page30 = () => import('./pages/learn/input-output.astro.mjs');
const _page31 = () => import('./pages/learn/metadata.astro.mjs');
const _page32 = () => import('./pages/learn/mini-notation.astro.mjs');
const _page33 = () => import('./pages/learn/mondo-notation.astro.mjs');
const _page34 = () => import('./pages/learn/notes.astro.mjs');
const _page35 = () => import('./pages/learn/pwa.astro.mjs');
const _page36 = () => import('./pages/learn/random-modifiers.astro.mjs');
const _page37 = () => import('./pages/learn/samples.astro.mjs');
const _page38 = () => import('./pages/learn/signals.astro.mjs');
const _page39 = () => import('./pages/learn/sounds.astro.mjs');
const _page40 = () => import('./pages/learn/stepwise.astro.mjs');
const _page41 = () => import('./pages/learn/strudel-vs-tidal.astro.mjs');
const _page42 = () => import('./pages/learn/synths.astro.mjs');
const _page43 = () => import('./pages/learn/time-modifiers.astro.mjs');
const _page44 = () => import('./pages/learn/tonal.astro.mjs');
const _page45 = () => import('./pages/learn/visual-feedback.astro.mjs');
const _page46 = () => import('./pages/learn/xen.astro.mjs');
const _page47 = () => import('./pages/learn.astro.mjs');
const _page48 = () => import('./pages/recipes/arpeggios.astro.mjs');
const _page49 = () => import('./pages/recipes/microrhythms.astro.mjs');
const _page50 = () => import('./pages/recipes/recipes.astro.mjs');
const _page51 = () => import('./pages/recipes/rhythms.astro.mjs');
const _page52 = () => import('./pages/rss.xml.astro.mjs');
const _page53 = () => import('./pages/swatch.astro.mjs');
const _page54 = () => import('./pages/technical-manual/about.astro.mjs');
const _page55 = () => import('./pages/technical-manual/alignment.astro.mjs');
const _page56 = () => import('./pages/technical-manual/docs.astro.mjs');
const _page57 = () => import('./pages/technical-manual/internals.astro.mjs');
const _page58 = () => import('./pages/technical-manual/packages.astro.mjs');
const _page59 = () => import('./pages/technical-manual/patterns.astro.mjs');
const _page60 = () => import('./pages/technical-manual/project-start.astro.mjs');
const _page61 = () => import('./pages/technical-manual/repl.astro.mjs');
const _page62 = () => import('./pages/technical-manual/sounds.astro.mjs');
const _page63 = () => import('./pages/technical-manual/testing.astro.mjs');
const _page64 = () => import('./pages/technical-manual/vim.astro.mjs');
const _page65 = () => import('./pages/tutorial.astro.mjs');
const _page66 = () => import('./pages/udels.astro.mjs');
const _page67 = () => import('./pages/understand/cycles.astro.mjs');
const _page68 = () => import('./pages/understand/pitch.astro.mjs');
const _page69 = () => import('./pages/understand/voicings.astro.mjs');
const _page70 = () => import('./pages/workshop/first-effects.astro.mjs');
const _page71 = () => import('./pages/workshop/first-notes.astro.mjs');
const _page72 = () => import('./pages/workshop/first-sounds.astro.mjs');
const _page73 = () => import('./pages/workshop/getting-started.astro.mjs');
const _page74 = () => import('./pages/workshop/pattern-effects.astro.mjs');
const _page75 = () => import('./pages/workshop/recap.astro.mjs');
const _page76 = () => import('./pages/workshop.astro.mjs');
const _page77 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../node_modules/.pnpm/astro@5.1.9_@types+node@22.10.10_jiti@2.4.2_lightningcss@1.29.1_rollup@2.79.2_terser@5.37.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/chat.ts", _page1],
    ["src/pages/bakery.astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/de/workshop/first-effects.mdx", _page4],
    ["src/pages/de/workshop/first-notes.mdx", _page5],
    ["src/pages/de/workshop/first-sounds.mdx", _page6],
    ["src/pages/de/workshop/getting-started.mdx", _page7],
    ["src/pages/de/workshop/pattern-effects.mdx", _page8],
    ["src/pages/de/workshop/recap.mdx", _page9],
    ["src/pages/de/workshop/index.astro", _page10],
    ["src/pages/embed.astro", _page11],
    ["src/pages/examples/index.astro", _page12],
    ["src/pages/functions/intro.mdx", _page13],
    ["src/pages/functions/value-modifiers.mdx", _page14],
    ["src/pages/intro/gallery.mdx", _page15],
    ["src/pages/intro/showcase.mdx", _page16],
    ["src/pages/learn/accumulation.mdx", _page17],
    ["src/pages/learn/advanced-integrations.mdx", _page18],
    ["src/pages/learn/code.mdx", _page19],
    ["src/pages/learn/colors.mdx", _page20],
    ["src/pages/learn/community.mdx", _page21],
    ["src/pages/learn/conditional-modifiers.mdx", _page22],
    ["src/pages/learn/csound.mdx", _page23],
    ["src/pages/learn/devicemotion.mdx", _page24],
    ["src/pages/learn/effects.mdx", _page25],
    ["src/pages/learn/factories.mdx", _page26],
    ["src/pages/learn/getting-started.mdx", _page27],
    ["src/pages/learn/hydra.mdx", _page28],
    ["src/pages/learn/input-devices.mdx", _page29],
    ["src/pages/learn/input-output.mdx", _page30],
    ["src/pages/learn/metadata.mdx", _page31],
    ["src/pages/learn/mini-notation.mdx", _page32],
    ["src/pages/learn/mondo-notation.mdx", _page33],
    ["src/pages/learn/notes.mdx", _page34],
    ["src/pages/learn/pwa.mdx", _page35],
    ["src/pages/learn/random-modifiers.mdx", _page36],
    ["src/pages/learn/samples.mdx", _page37],
    ["src/pages/learn/signals.mdx", _page38],
    ["src/pages/learn/sounds.mdx", _page39],
    ["src/pages/learn/stepwise.mdx", _page40],
    ["src/pages/learn/strudel-vs-tidal.mdx", _page41],
    ["src/pages/learn/synths.mdx", _page42],
    ["src/pages/learn/time-modifiers.mdx", _page43],
    ["src/pages/learn/tonal.mdx", _page44],
    ["src/pages/learn/visual-feedback.mdx", _page45],
    ["src/pages/learn/xen.mdx", _page46],
    ["src/pages/learn/index.astro", _page47],
    ["src/pages/recipes/arpeggios.mdx", _page48],
    ["src/pages/recipes/microrhythms.mdx", _page49],
    ["src/pages/recipes/recipes.mdx", _page50],
    ["src/pages/recipes/rhythms.mdx", _page51],
    ["src/pages/rss.xml.js", _page52],
    ["src/pages/swatch/index.astro", _page53],
    ["src/pages/technical-manual/about.mdx", _page54],
    ["src/pages/technical-manual/alignment.mdx", _page55],
    ["src/pages/technical-manual/docs.mdx", _page56],
    ["src/pages/technical-manual/internals.mdx", _page57],
    ["src/pages/technical-manual/packages.mdx", _page58],
    ["src/pages/technical-manual/patterns.mdx", _page59],
    ["src/pages/technical-manual/project-start.mdx", _page60],
    ["src/pages/technical-manual/repl.mdx", _page61],
    ["src/pages/technical-manual/sounds.mdx", _page62],
    ["src/pages/technical-manual/testing.mdx", _page63],
    ["src/pages/technical-manual/vim.mdx", _page64],
    ["src/pages/tutorial/index.astro", _page65],
    ["src/pages/udels/index.astro", _page66],
    ["src/pages/understand/cycles.mdx", _page67],
    ["src/pages/understand/pitch.mdx", _page68],
    ["src/pages/understand/voicings.mdx", _page69],
    ["src/pages/workshop/first-effects.mdx", _page70],
    ["src/pages/workshop/first-notes.mdx", _page71],
    ["src/pages/workshop/first-sounds.mdx", _page72],
    ["src/pages/workshop/getting-started.mdx", _page73],
    ["src/pages/workshop/pattern-effects.mdx", _page74],
    ["src/pages/workshop/recap.mdx", _page75],
    ["src/pages/workshop/index.astro", _page76],
    ["src/pages/index.astro", _page77]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8f6d31d2-837b-4d54-a516-b95d40d7f01e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
