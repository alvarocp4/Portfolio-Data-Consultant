import { g as getCollection } from '../../../chunks/_astro_content_E7qiaSVH.mjs';
import rss from '@astrojs/rss';
import { s as slugifyCategory } from '../../../chunks/categories_13z1xv7n.mjs';
export { renderers } from '../../../renderers.mjs';

async function getStaticPaths() {
  const posts = await getCollection('blog');
  const categories = [...new Set(posts.map((p) => p.data.category).filter(Boolean))];
  return categories.map((c) => ({ params: { category: slugifyCategory(c) } }));
}

async function GET(context) {
  const { category } = context.params;
  const posts = (await getCollection('blog')).filter((p) => slugifyCategory(p.data.category || '') === category);
  return rss({
    title: `Category: ${category}`,
    description: `Latest posts in ${category}`,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
