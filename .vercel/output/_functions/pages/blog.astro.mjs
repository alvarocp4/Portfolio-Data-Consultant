import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, e as addAttribute, b as renderTemplate, F as Fragment, a as renderHead } from '../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../chunks/_astro_content_BC1lEn8g.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_CD2_mk5g.mjs';
import { $ as $$BlogHero, a as $$BlogAllArticles, b as $$BlogPagination } from '../chunks/BlogPagination_F2vJyICK.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts__lf-bKLc.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DvagX5PM.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_BCmTASmL.mjs';
import { s as slugifyTag } from '../chunks/slug_CBq44NJN.mjs';
import { c as calculateReadingTimeFromHtml } from '../chunks/reading_m1Sy0aiN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$FeaturedPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedPost;
  const { post, readingTimeMin = 0 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch relative"> ${post.data.heroImage && renderTemplate`<div class="md:col-span-1 relative overflow-hidden rounded-lg"> <div class="aspect-[16/9] w-full min-h-featured"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-full object-cover", "width": 1200, "height": 630, "src": post.data.heroImage, "alt": post.data.title })} </div> </div>`} <div class="md:col-span-2 space-y-2 md:space-y-3"> <div class="flex items-center gap-2 text-xs uppercase tracking-wide text-[color:var(--color-text-muted)]"> <span class="sw-tag border border-[color:var(--color-border-light)]"><span class="text-[color:var(--accent)]">★</span> Featured</span> </div> <h3 class="text-2xl md:text-3xl font-bold text-[color:var(--color-text-primary)]">${post.data.title}</h3> ${post.data.description && renderTemplate`<p class="text-[color:var(--color-text-secondary)]">${post.data.description}</p>`} <div class="flex items-center gap-3 text-sm text-[color:var(--color-text-muted)]"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} <span>•</span> <a${addAttribute(`/blog/author/${slugifyTag(post.data.author || "Site Author")}/`, "href")} class="hover:text-[color:var(--accent)]">${post.data.author || "Site Author"}</a> ${readingTimeMin > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span>•</span> <span class="flex items-center gap-1"> <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <circle cx="12" cy="12" r="9"></circle> <path d="M12 7v5l3 3"></path> </svg> ${readingTimeMin} min read
</span> ` })}`} </div> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="flex gap-2 flex-wrap"> ${post.data.tags.map((t) => renderTemplate`<a${addAttribute(`/blog/tag/${t.replace(/\s+/g, "-").toLowerCase()}/`, "href")} class="sw-tag">${t}</a>`)} </div>`} </div> <a${addAttribute(`/blog/${post.id}/`, "href")} class="stretched-link"${addAttribute(post.data.title, "aria-label")}></a> </div>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/card/FeaturedPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const PAGE_SIZE = 6;
  const posts = (await getCollection("blog")).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const [featured, ...rest] = posts;
  const firstPagePosts = rest.slice(0, PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  let featuredReading = 0;
  if (featured) {
    const { Content } = await renderEntry(featured);
    const html = await Astro2.slots.render("default");
    featuredReading = calculateReadingTimeFromHtml(html ?? "");
  }
  return renderTemplate`<html lang="en" data-theme="dark" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${totalPages > 1 && renderTemplate`<link rel="next"${addAttribute(`/blog/page/2/`, "href")}>`}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "BlogHero", $$BlogHero, { "title": "Blog", "subtitle": "Practical insights on data analysis, visualization, and getting more from your analytics tools." })} <main class="use-utility-layout mx-auto max-w-5xl px-3 py-5 space-y-7"> ${featured && renderTemplate`<section class="card-surface p-4 md:p-5 hover-lift sw-featured-card"> ${renderComponent($$result, "FeaturedPost", $$FeaturedPost, { "post": featured, "readingTimeMin": featuredReading })} </section>`} ${renderComponent($$result, "BlogAllArticles", $$BlogAllArticles, { "posts": firstPagePosts })} ${renderComponent($$result, "BlogPagination", $$BlogPagination, { "currentPage": 1, "totalPages": totalPages })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
