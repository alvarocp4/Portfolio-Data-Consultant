import { d as createAstro, c as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, e as addAttribute } from './astro/server_DaZi--al.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$PostCard } from './PostCard_DkRTz6HI.mjs';

const $$Astro$2 = createAstro("https://example.com");
const $$BlogHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogHero;
  const { title = "Blog", subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-4"> <div class="mx-auto max-w-5xl px-3"> <div class="grid items-center gap-4 md:grid-cols-2"> <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground"> <span class="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] bg-clip-text text-transparent">${title}</span> </h1> ${subtitle && renderTemplate`<p class="text-base md:text-lg text-[color:var(--color-text-secondary)] md:text-right">${subtitle}</p>`} </div> </div> </section>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/sections/BlogHero.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$BlogAllArticles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogAllArticles;
  const { posts = [], title = "All Articles" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="space-y-6"> <h2 class="text-3xl font-bold">${title}</h2> <div class="blog-grid"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}`)} </div> </section>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/sections/BlogAllArticles.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$BlogPagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPagination;
  const { currentPage, totalPages, basePath = "/blog/page" } = Astro2.props;
  const prevHref = currentPage > 1 ? currentPage === 2 ? "/blog/" : `${basePath}/${currentPage - 1}/` : null;
  const nextHref = currentPage < totalPages ? `${basePath}/${currentPage + 1}/` : null;
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="mt-6 flex items-center justify-center gap-3" aria-label="Pagination">${prevHref ? renderTemplate`<a${addAttribute(prevHref, "href")} class="sw-btn">Previous</a>` : renderTemplate`<span class="sw-btn" style="opacity:.5; pointer-events:none;">Previous</span>`}<span class="text-sm text-[color:var(--color-text-muted)]">
Page ${currentPage} of ${totalPages}</span>${nextHref ? renderTemplate`<a${addAttribute(nextHref, "href")} class="sw-btn">Next</a>` : renderTemplate`<span class="sw-btn" style="opacity:.5; pointer-events:none;">Next</span>`}</nav>`}`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/nav/BlogPagination.astro", void 0);

export { $$BlogHero as $, $$BlogAllArticles as a, $$BlogPagination as b };
