import { d as createAstro, c as createComponent, r as renderComponent, e as addAttribute, a as renderHead, b as renderTemplate } from '../../../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_E7qiaSVH.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../../chunks/Footer_zhXZ_RHu.mjs';
import { $ as $$PostCard } from '../../../chunks/PostCard_DkRTz6HI.mjs';
import { s as slugifyCategory, g as getCategoryMeta } from '../../../chunks/categories_13z1xv7n.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const categories = [
    ...new Set(
      posts.map((p) => p.data.category || null).filter((v) => Boolean(v)).map((name) => slugifyCategory(name))
    )
  ];
  return categories.map((category) => ({ params: { category } }));
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const posts = (await getCollection("blog")).filter((p) => slugifyCategory(p.data.category || "") === category);
  const meta = getCategoryMeta(category);
  return renderTemplate`<html lang="en" data-theme="dark" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${meta.title} - Category`, "description": meta.description })}<link rel="alternate" type="application/rss+xml"${addAttribute(`Category: ${category} feed`, "title")}${addAttribute(`/rss/category/${category}.xml`, "href")}>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="mx-auto max-w-6xl px-4 py-10 space-y-6"> <div class="flex items-center justify-between gap-3"> <h1 class="text-3xl font-bold">${meta.title}</h1> <a class="sw-btn-sm"${addAttribute(`/rss/category/${category}.xml`, "href")}>Subscribe</a> </div> <p class="text-[color:var(--color-text-muted)]">${meta.description}</p> <div class="blog-grid"> ${posts.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": p })}`)} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/category/[category].astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/category/[category].astro";
const $$url = "/blog/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
