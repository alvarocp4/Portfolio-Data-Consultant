import { d as createAstro, c as createComponent, r as renderComponent, e as addAttribute, a as renderHead, b as renderTemplate } from '../../../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_CkURgNzm.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../../chunks/Footer_zhXZ_RHu.mjs';
import { $ as $$PostCard } from '../../../chunks/PostCard_DkRTz6HI.mjs';
import { s as slugifyTag } from '../../../chunks/slug_CBq44NJN.mjs';
export { renderers } from '../../../renderers.mjs';

function toTitleCaseFromSlug(slug) {
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()).trim();
}
const tagMetaBySlug = {
  astro: {
    title: "Astro",
    description: "Posts about building fast, content-focused sites with Astro."
  }
};
function getTagMeta(slug) {
  const baseTitle = toTitleCaseFromSlug(slug);
  const custom = tagMetaBySlug[slug] ?? {};
  return {
    slug,
    title: custom.title ?? `#${baseTitle}`,
    description: custom.description ?? `Articles tagged ${baseTitle}.`
  };
}

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = [...new Set(posts.flatMap((p) => p.data.tags || []))];
  return tags.map((tag) => ({ params: { tag: slugifyTag(tag) } }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const posts = (await getCollection("blog")).filter((p) => (p.data.tags || []).some((t) => slugifyTag(t) === tag));
  const meta = getTagMeta(tag);
  return renderTemplate`<html lang="en" data-theme="dark" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": meta.title, "description": meta.description })}<link rel="alternate" type="application/rss+xml"${addAttribute(`Tag: ${tag} feed`, "title")}${addAttribute(`/rss/tag/${tag}.xml`, "href")}>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="mx-auto max-w-6xl px-4 py-10 space-y-6"> <div class="flex items-center justify-between gap-3"> <h1 class="text-3xl font-bold">${meta.title}</h1> <a class="sw-btn-sm"${addAttribute(`/rss/tag/${tag}.xml`, "href")}>Subscribe</a> </div> <div class="blog-grid"> ${posts.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": p })}`)} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/tag/[tag].astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/tag/[tag].astro";
const $$url = "/blog/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
