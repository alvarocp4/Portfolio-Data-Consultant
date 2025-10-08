import { d as createAstro, c as createComponent, r as renderComponent, a as renderHead, e as addAttribute, b as renderTemplate } from '../../../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_E7qiaSVH.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../../chunks/Footer_zhXZ_RHu.mjs';
import { $ as $$BlogHero, a as $$BlogAllArticles, b as $$BlogPagination } from '../../../chunks/BlogPagination_F2vJyICK.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const PAGE_SIZE = 6;
  const posts = (await getCollection("blog")).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ params: { page: String(i + 2) } }));
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const PAGE_SIZE = 6;
  const posts = (await getCollection("blog")).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const { page } = Astro2.params;
  const currentPage = Math.max(1, parseInt(page || "1", 10));
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pagePosts = posts.slice(start, end);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  return renderTemplate`<html lang="en" data-theme="dark" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Blog - Page ${currentPage}`, "description": `Blog page ${currentPage}` })}${currentPage > 1 && renderTemplate`<link rel="prev"${addAttribute(currentPage === 2 ? `/blog/` : `/blog/page/${currentPage - 1}/`, "href")}>`}${currentPage < totalPages && renderTemplate`<link rel="next"${addAttribute(`/blog/page/${currentPage + 1}/`, "href")}>`}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "BlogHero", $$BlogHero, { "title": "Blog", "subtitle": "Stories, notes, and learnings." })} <main class="mx-auto max-w-6xl px-4 py-8 space-y-10"> ${renderComponent($$result, "BlogAllArticles", $$BlogAllArticles, { "posts": pagePosts })} ${renderComponent($$result, "BlogPagination", $$BlogPagination, { "currentPage": currentPage, "totalPages": totalPages })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/page/[page].astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/page/[page].astro";
const $$url = "/blog/page/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
