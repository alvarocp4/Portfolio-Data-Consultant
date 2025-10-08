import { d as createAstro, c as createComponent, r as renderComponent, a as renderHead, b as renderTemplate } from '../../../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_E7qiaSVH.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../../chunks/Footer_zhXZ_RHu.mjs';
import { $ as $$PostCard } from '../../../chunks/PostCard_DkRTz6HI.mjs';
import { s as slugifyTag } from '../../../chunks/slug_CBq44NJN.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const authorSlugs = [
    ...new Set(
      posts.map((p) => slugifyTag(p.data.author || "Site Author"))
    )
  ];
  return authorSlugs.map((slug) => ({ params: { slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const posts = (await getCollection("blog")).filter((p) => slugifyTag(p.data.author || "Site Author") === slug);
  const authorName = posts[0]?.data.author || "Site Author";
  return renderTemplate`<html lang="en" data-theme="dark" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Articles by ${authorName}`, "description": `Posts written by ${authorName}` })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="mx-auto max-w-6xl px-4 py-10 space-y-6"> <h1 class="text-3xl font-bold">Articles by ${authorName}</h1> <div class="blog-grid"> ${posts.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": p })}`)} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/author/[slug].astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/author/[slug].astro";
const $$url = "/blog/author/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
