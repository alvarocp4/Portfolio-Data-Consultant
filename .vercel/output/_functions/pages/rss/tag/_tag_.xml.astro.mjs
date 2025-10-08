import { g as getCollection } from '../../../chunks/_astro_content_BL-AHx7z.mjs';
import rss from '@astrojs/rss';
import { s as slugifyTag } from '../../../chunks/slug_CBq44NJN.mjs';
export { renderers } from '../../../renderers.mjs';

async function getStaticPaths() {
  const posts = await getCollection('blog');
  const tags = [...new Set(posts.flatMap((p) => p.data.tags || []))];
  return tags.map((t) => ({ params: { tag: slugifyTag(t) } }));
}

async function GET(context) {
  const { tag } = context.params;
  const posts = (await getCollection('blog')).filter((p) =>
    (p.data.tags || []).some((t) => slugifyTag(t) === tag)
  );
  return rss({
    title: `Tag: ${tag}`,
    description: `Latest posts tagged ${tag}`,
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
