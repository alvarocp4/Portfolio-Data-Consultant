import { d as createAstro, c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_CkURgNzm.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DiHQ67Bp.mjs';
import { c as calculateReadingTimeFromHtml } from '../../chunks/reading_m1Sy0aiN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const posts = await getCollection("blog");
  const sorted = posts.slice().sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const index = sorted.findIndex((p) => p.id === post.id);
  const prev = index < sorted.length - 1 ? { id: sorted[index + 1].id, title: sorted[index + 1].data.title } : null;
  const next = index > 0 ? { id: sorted[index - 1].id, title: sorted[index - 1].data.title } : null;
  const { Content } = await renderEntry(post);
  const html = await Astro2.slots.render("default");
  const readingTimeMin = calculateReadingTimeFromHtml(html ?? "");
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data, "prevPost": prev, "nextPost": next, "readingTimeMin": readingTimeMin }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
