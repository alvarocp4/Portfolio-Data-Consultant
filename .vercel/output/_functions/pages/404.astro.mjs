import { c as createComponent, r as renderComponent, a as renderHead, b as renderTemplate } from '../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_CD2_mk5g.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-theme="dark" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "404 \u2013 Page not found", "description": "The page you are looking for doesn\u2019t exist." })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="mx-auto max-w-6xl px-4 py-16"> <section class="card-surface p-8 text-center space-y-4"> <h1 class="text-4xl font-bold text-[color:var(--color-text-primary)]">404</h1> <p class="text-lg text-[color:var(--color-text-secondary)]">The page you are looking for doesn’t exist or has moved.</p> <div class="mt-4 flex items-center justify-center gap-3"> <a href="/" class="sw-btn">Go to Home</a> <a href="/blog/" class="sw-btn">Read the Blog</a> </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/404.astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
