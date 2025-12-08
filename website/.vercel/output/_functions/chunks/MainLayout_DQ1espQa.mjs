import { e as createAstro, c as createComponent, r as renderTemplate, f as addAttribute, b as renderComponent, g as renderHead, a as renderSlot } from './astro/server_Cr1ImhJZ.mjs';
import { $ as $$HeadCommon } from './HeadCommon_BR8Uvu4A.mjs';
import { S as SITE, O as OPEN_GRAPH, $ as $$Header, a as $$LeftSidebar, b as $$PageContent, c as $$RightSidebar, G as GITHUB_EDIT_URL } from './RightSidebar_B6HFg5Aj.mjs';
/* empty css                                 */

const $$Astro$1 = createAstro("https://strudel.cc/");
const $$HeadSEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeadSEO;
  const { frontmatter, canonicalUrl } = Astro2.props;
  const formattedContentTitle = `${frontmatter.title} \u{1F680} ${SITE.title}`;
  const imageSrc = frontmatter.image?.src ?? OPEN_GRAPH.image.src;
  const canonicalImageSrc = new URL(imageSrc, Astro2.site);
  const imageAlt = frontmatter.image?.alt ?? OPEN_GRAPH.image.alt;
  return renderTemplate`<!-- Page Metadata --><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- OpenGraph Tags --><meta property="og:title"${addAttribute(formattedContentTitle, "content")}><meta property="og:type" content="article"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:locale"${addAttribute(frontmatter.ogLocale ?? SITE.defaultLanguage, "content")}><meta property="og:image"${addAttribute(canonicalImageSrc, "content")}><meta property="og:image:alt"${addAttribute(imageAlt, "content")}><meta name="description" property="og:description"${addAttribute(frontmatter.description ?? SITE.description, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}>`;
}, "/home/user/Bulka/website/src/components/HeadSEO.astro", undefined);

const $$Astro = createAstro("https://strudel.cc/");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { frontmatter, headings } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const currentPage = Astro2.url.pathname;
  const currentFile = `src/pages${currentPage.replace(/\/$/, "")}.mdx`;
  const githubEditUrl = `${GITHUB_EDIT_URL}/${currentFile}`;
  return renderTemplate`<html${addAttribute(frontmatter.dir ?? "ltr", "dir")}${addAttribute(frontmatter.lang ?? "en", "lang")} class="initial dark"> <head>${renderComponent($$result, "HeadCommon", $$HeadCommon, {})}${renderComponent($$result, "HeadSEO", $$HeadSEO, { "frontmatter": frontmatter, "canonicalUrl": canonicalURL })}<title>
      ${frontmatter.title ? `${frontmatter.title} \u{1F300} ${SITE.title}` : SITE.title}
    </title>${renderHead()}</head> <body class="h-app-height m-0 text-gray-50 bg-background"> <div class="w-full h-full space-y-4 flex flex-col"> <header class="max-w-full fixed top-0 w-full z-[100]"> ${renderComponent($$result, "Header", $$Header, { "currentPage": currentPage })} </header> <main class="relative pt-16"> <div class="h-full top-0 overflow-auto min-w-[300px] flex xl:justify-center pr-4 pl-4 md:pl-[300px] xl:pl-0"> <aside title="Site Navigation" class="w-[300px] px-6 left-0 hidden md:block fixed h-full"> ${renderComponent($$result, "LeftSidebar", $$LeftSidebar, { "currentPage": currentPage })} </aside> ${renderComponent($$result, "PageContent", $$PageContent, { "frontmatter": frontmatter, "headings": headings, "githubEditUrl": githubEditUrl }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} <aside class="fixed right-0 h-full overflow-auto pr-4 pl-0 pb-16 hidden xl:block" title="Table of Contents"> ${renderComponent($$result, "RightSidebar", $$RightSidebar, { "headings": headings, "githubEditUrl": githubEditUrl })} </aside> </div> </main> </div> </body></html>`;
}, "/home/user/Bulka/website/src/layouts/MainLayout.astro", undefined);

export { $$MainLayout as $ };
