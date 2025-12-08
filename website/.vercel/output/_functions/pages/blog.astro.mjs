/* empty css                                  */
import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, b as renderComponent, g as renderHead } from '../chunks/astro/server_Cr1ImhJZ.mjs';
import { format, compareDesc } from 'date-fns';
import { $ as $$HeadCommon } from '../chunks/HeadCommon_BR8Uvu4A.mjs';
import { c as $$RightSidebar, $ as $$Header, a as $$LeftSidebar, b as $$PageContent } from '../chunks/RightSidebar_B6HFg5Aj.mjs';
import { g as getCollection } from '../chunks/_astro_content_CkoawDy1.mjs';
/* empty css                                            */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://strudel.cc/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${maybeRenderHead()}<article class="prose max-w-none prose-headings:font-sans prose-headings:font-black prose-headings:text-slate-900 dark:prose-headings:text-gray-200 dark:text-gray-400 dark:prose-strong:text-gray-400 dark:prose-code:text-slate-400 dark:prose-a:text-gray-300 prose-a:text-slate-900 prose-blockquote:text-slate-800 dark:prose-blockquote:text-slate-400 border-b-4 border-lineHighlight pt-4"> <div class="pb-2"> <div class="md:flex justify-between"> <h1 class="mb-4">${post.data.title}</h1> <span${addAttribute(post.slug, "id")} class="-mt-16"></span> </div> <p class="italic p-0 m-0"> <time${addAttribute(post.data.date.toISOString(), "datetime")}> ${format(post.data.date, "MMMM yyyy")} by ${post.data.author} </time> </p> </div> <div> ${renderComponent($$result, "Content", Content, {})} </div> </article>`;
}, "/home/user/Bulka/website/src/components/BlogPost.astro", undefined);

const $$Astro = createAstro("https://strudel.cc/");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const currentPage = Astro2.url.pathname;
  const posts = (await getCollection("blog")).sort((a, b) => compareDesc(a.data.date, b.data.date));
  return renderTemplate`<html${addAttribute("ltr", "dir")}${addAttribute("ru", "lang")} class="initial dark"> <head>${renderComponent($$result, "HeadCommon", $$HeadCommon, {})}<!-- <HeadSEO frontmatter={frontmatter} canonicalUrl={canonicalURL} /> --><title>🍞 Блог Bulka</title>${renderHead()}</head> <body class="h-app-height text-gray-50 bg-background"> <div class="w-full h-full space-y-4 flex flex-col"> <header class="max-w-full fixed top-0 w-full z-[100]"> ${renderComponent($$result, "Header", $$Header, { "currentPage": currentPage })} </header> <main class="relative pt-16"> <div class="h-full top-0 overflow-auto min-w-[300px] flex xl:justify-center pr-4 pl-4 md:pl-[300px] xl:pl-0"> <aside title="Site Navigation" class="w-[300px] px-6 left-0 hidden md:block fixed h-full"> ${renderComponent($$result, "LeftSidebar", $$LeftSidebar, { "currentPage": currentPage })} </aside> ${renderComponent($$result, "PageContent", $$PageContent, {}, { "default": ($$result2) => renderTemplate` <div class="border-b-4 border-lineHighlight py-4"> <h1>Блог Bulka</h1> <p>
Добро пожаловать в блог Bulka, где мы будем держать вас в курсе последних изменений и событий.
                Подписаться на блог можно по <a target="_blank" href="/rss.xml">этой RSS-ссылке</a> </p> </div> <div class="space-y-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "post": post })}`)} </div> ` })} <aside class="fixed right-0 h-full overflow-auto pr-4 pl-0 pb-16 hidden xl:block" title="Table of Contents"> ${renderComponent($$result, "RightSidebar", $$RightSidebar, { "headings": posts.map((post) => ({
    depth: 1,
    slug: post.slug,
    text: post.data.title
  })) })} </aside> </div> </main> </div> </body></html>`;
}, "/home/user/Bulka/website/src/pages/blog.astro", undefined);

const $$file = "/home/user/Bulka/website/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
