import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_CkoawDy1.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);
  const options = {
    title: 'Strudel Blog',
    description:
      'The Strudel Blog will keep you updated with the latest changes and things happening in the strudelsphere.',
    site: context.site,
    items: posts.map((post) => ({
      link: `/blog/#${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
    })),
  };
  return rss(options);
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
