import { c as createComponent, r as renderComponent, a as renderHead, b as renderTemplate } from '../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_CD2_mk5g.mjs';
import { $ as $$HeroSection, a as $$Projects } from '../chunks/HeroSection_mze4JbCs.mjs';
import { $ as $$GlowLineSeparator } from '../chunks/GlowLineSeparator_CuSxMVTt.mjs';
export { renderers } from '../renderers.mjs';

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-theme="dark" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Portfolio", "description": "Selected projects and playbooks" })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderComponent($$result, "HeroSection", $$HeroSection, { "title": "Selected Projects", "subtitle": "A few apps, templates, and playbooks I built or maintain." })} ${renderComponent($$result, "Projects", $$Projects, {})} ${renderComponent($$result, "GlowLineSeparator", $$GlowLineSeparator, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/portfolio.astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
