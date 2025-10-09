import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate, u as unescapeHTML, f as renderSlot, a as renderHead } from './astro/server_DaZi--al.mjs';
import 'kleur/colors';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_DvagX5PM.mjs';
import { b as $$Footer, a as $$Header, $ as $$BaseHead } from './Footer_CD2_mk5g.mjs';
import { $ as $$FormattedDate } from './FormattedDate_BCmTASmL.mjs';
import { s as slugifyTag } from './slug_CBq44NJN.mjs';
import 'clsx';
/* empty css                         */

const avatar = new Proxy({"src":"/_astro/sample-avatar.hVNs9-xq.jpg","width":4615,"height":5336,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/assets/images/sample-avatar.jpg";
							}
							
							return target[name];
						}
					});

const author = {
  name: "Site Author",
  avatar};

const $$Astro$3 = createAstro("https://example.com");
const $$PostMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostMeta;
  const { pubDate, readingTimeMin, authorName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sw-post-meta flex items-start justify-between gap-4 py-2"> <div class="flex items-start gap-3"> <div class="w-12 h-12 rounded-full overflow-hidden border border-[color:var(--color-border-light)]"> <img${addAttribute(author.avatar.src, "src")}${addAttribute(author.name, "alt")} width="48" height="48" class="w-full h-full object-cover"> </div> <div class="flex flex-col"> <a${addAttribute(`/blog/author/${slugifyTag(authorName || author.name)}/`, "href")} class="text-sm font-semibold text-[color:var(--color-text-primary)] hover:text-[color:var(--accent)]">${authorName || author.name}</a> <div class="flex items-center gap-3 text-xs text-[color:var(--color-text-muted)]"> <div class="flex items-center gap-1"> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })} </div> <div class="flex items-center gap-1"> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"> <path fill="currentColor" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-18a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm1 9h3v-2h-2V7h-2v6Z"></path> </svg> <span>${readingTimeMin} min read</span> </div> </div> </div> </div> </div>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/meta/PostMeta.astro", void 0);

const xIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 50 50\" width=\"500px\" height=\"500px\"><path d=\"M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z\"/></svg>";

const hnIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\" width=\"480px\" height=\"480px\"><path d=\"M 20 2 L 4 2 C 2.894531 2 2 2.894531 2 4 L 2 20 C 2 21.105469 2.894531 22 4 22 L 20 22 C 21.105469 22 22 21.105469 22 20 L 22 4 C 22 2.894531 21.105469 2 20 2 Z M 13 13 L 13 18 L 11 18 L 11 13 L 7 6 L 9 6 L 12 11 L 15 6 L 16.949219 6 Z\"/></svg>";

const liIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z\"/>\r\n</svg>";

const rdIcon = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n<svg width=\"800px\" height=\"800px\" viewBox=\"0 -1.5 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    \r\n    <title>reddit [#143]</title>\r\n    <desc>Created with Sketch.</desc>\r\n    <defs>\r\n\r\n</defs>\r\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"Dribbble-Light-Preview\" transform=\"translate(-100.000000, -7561.000000)\" fill=\"#000000\">\r\n            <g id=\"icons\" transform=\"translate(56.000000, 160.000000)\">\r\n                <path d=\"M57.029,7412.24746 C56.267,7412.24746 55.628,7411.6217 55.628,7410.8499 C55.628,7410.07708 56.267,7409.43103 57.029,7409.43103 C57.79,7409.43103 58.407,7410.07708 58.407,7410.8499 C58.407,7411.6217 57.791,7412.24746 57.029,7412.24746 M57.223,7414.82961 C56.55,7415.51116 55.495,7415.8428 53.999,7415.8428 C52.502,7415.8428 51.448,7415.51116 50.776,7414.82961 C50.63,7414.68154 50.63,7414.44219 50.776,7414.2931 C50.921,7414.14503 51.158,7414.14503 51.304,7414.2931 C51.829,7414.82556 52.71,7415.08519 53.999,7415.08519 C55.287,7415.08519 56.169,7414.82556 56.695,7414.2931 C56.84,7414.14503 57.077,7414.14503 57.223,7414.2931 C57.369,7414.44219 57.369,7414.68154 57.223,7414.82961 M49.592,7410.8499 C49.592,7410.07809 50.23,7409.43103 50.991,7409.43103 C51.752,7409.43103 52.369,7410.07809 52.369,7410.8499 C52.369,7411.6217 51.752,7412.24746 50.991,7412.24746 C50.23,7412.24746 49.592,7411.6217 49.592,7410.8499 M64,7409.31339 C64,7408.04665 62.984,7407.01623 61.735,7407.01623 C61.159,7407.01623 60.616,7407.23428 60.2,7407.62475 C58.705,7406.63793 56.703,7406 54.486,7405.91278 L55.709,7402.12677 L58.921,7402.89351 C58.922,7403.93611 59.758,7404.78296 60.786,7404.78296 C61.814,7404.78296 62.651,7403.93408 62.651,7402.89148 C62.651,7401.84888 61.814,7401 60.786,7401 C60.016,7401 59.355,7401.47465 59.07,7402.15112 C58.378,7401.9858 55.904,7401.39452 55.212,7401.22921 L53.702,7405.90467 C51.401,7405.94828 49.316,7406.58316 47.765,7407.59331 C47.354,7407.22312 46.822,7407.01623 46.264,7407.01623 C45.016,7407.01623 44,7408.04665 44,7409.31339 C44,7410.11765 44.414,7410.85497 45.076,7411.26876 C44.473,7414.88134 48.67,7418 53.958,7418 C59.224,7418 63.407,7414.90872 62.849,7411.3144 C63.557,7410.91176 64,7410.1572 64,7409.31339\" id=\"reddit-[#143]\">\r\n\r\n</path>\r\n            </g>\r\n        </g>\r\n    </g>\r\n</svg>";

const $$Astro$2 = createAstro("https://example.com");
const $$ShareButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShareButtons;
  const { title, url } = Astro2.props;
  const hnUrl = `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`;
  const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const rdUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  return renderTemplate`${maybeRenderHead()}<div class="sw-share group flex items-center gap-2"> <a${addAttribute(xUrl, "href")} target="_blank" rel="noopener noreferrer" class="sw-share-btn" aria-label="Share on X">${unescapeHTML(xIcon)}</a> <a${addAttribute(hnUrl, "href")} target="_blank" rel="noopener noreferrer" class="sw-share-btn" aria-label="Share on Hacker News">${unescapeHTML(hnIcon)}</a> <a${addAttribute(liUrl, "href")} target="_blank" rel="noopener noreferrer" class="sw-share-btn" aria-label="Share on LinkedIn">${unescapeHTML(liIcon)}</a> <a${addAttribute(rdUrl, "href")} target="_blank" rel="noopener noreferrer" class="sw-share-btn" aria-label="Share on Reddit">${unescapeHTML(rdIcon)}</a> </div>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/share/ShareButtons.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$PostNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostNav;
  const { prev = null, next = null } = Astro2.props;
  return renderTemplate`${(prev || next) && renderTemplate`${maybeRenderHead()}<nav class="sw-post-nav mt-8 pt-4 border-t border-[color:var(--color-border-light)]"><div class="flex flex-col md:flex-row md:justify-between gap-3 md:gap-4">${prev ? renderTemplate`<a${addAttribute(`/blog/${prev.id}/`, "href")} class="sw-nav-btn no-underline flex-1"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg><div class="sw-nav-text"><span class="sw-nav-label">Previous</span><span class="truncate">${prev.title}</span></div></a>` : renderTemplate`<span></span>`}${next ? renderTemplate`<a${addAttribute(`/blog/${next.id}/`, "href")} class="sw-nav-btn no-underline justify-end flex-1"><div class="sw-nav-text text-right"><span class="sw-nav-label">Next</span><span class="truncate">${next.title}</span></div><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="m8.59 16.59 1.41 1.41 6-6-6-6-1.41 1.41L13.17 12z"></path></svg></a>` : renderTemplate`<span></span>`}</div></nav>`}`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/nav/PostNav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, showHeader = true, prevPost = null, nextPost = null, readingTimeMin = 0 } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-theme="dark" class="dark" data-astro-cid-bvzihdzo> <head>', '<meta property="og:type" content="article"><!-- Article specific OG meta -->', "", '<meta property="article:author"', ">", '<!-- JSON-LD: Article --><script type="application/ld+json">', '<\/script><!-- JSON-LD: Breadcrumbs --><script type="application/ld+json">', "<\/script>", "</head> <body data-astro-cid-bvzihdzo> ", " <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> ", ' <div class="prose" data-astro-cid-bvzihdzo> ', " ", " ", " ", " ", " </div> </article> </main> ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": heroImage, "data-astro-cid-bvzihdzo": true }), pubDate && renderTemplate`<meta property="article:published_time"${addAttribute(new Date(pubDate).toISOString(), "content")}>`, updatedDate && renderTemplate`<meta property="article:modified_time"${addAttribute(new Date(updatedDate).toISOString(), "content")}>`, addAttribute(Astro2.props.author || "Site Author", "content"), Array.isArray(Astro2.props.tags) && Astro2.props.tags.map((t) => renderTemplate`<meta property="article:tag"${addAttribute(t, "content")}>`), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: Astro2.props.heroImage ? new URL(Astro2.props.heroImage.src, Astro2.site).toString() : void 0,
    datePublished: pubDate ? new Date(pubDate).toISOString() : void 0,
    dateModified: updatedDate ? new Date(updatedDate).toISOString() : void 0,
    author: [{ "@type": "Person", name: Astro2.props.author || "Site Author" }],
    publisher: { "@type": "Organization", name: "guihubie.com" },
    mainEntityOfPage: new URL(Astro2.url.pathname, Astro2.site).toString(),
    url: new URL(Astro2.url.pathname, Astro2.site).toString()
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", Astro2.site).toString() },
      { "@type": "ListItem", position: 2, name: "Blog", item: new URL("/blog/", Astro2.site).toString() },
      { "@type": "ListItem", position: 3, name: title, item: new URL(Astro2.url.pathname, Astro2.site).toString() }
    ]
  })), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true }), showHeader && renderTemplate`<div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImage, "alt": "", "data-astro-cid-bvzihdzo": true })}`} </div>`, showHeader && renderTemplate`<div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div>`, renderComponent($$result, "ShareButtons", $$ShareButtons, { "title": title, "url": Astro2.url.toString(), "data-astro-cid-bvzihdzo": true }), renderComponent($$result, "PostMeta", $$PostMeta, { "pubDate": pubDate, "readingTimeMin": readingTimeMin, "authorName": Astro2.props.author || "Site Author", "data-astro-cid-bvzihdzo": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "PostNav", $$PostNav, { "prev": prevPost, "next": nextPost, "data-astro-cid-bvzihdzo": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true }));
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
