import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_0dtn3695.mjs';
import { $ as $$GlowLineSeparator } from '../chunks/GlowLineSeparator_CuSxMVTt.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "About Me";
  const pageDescription = "Learn more about my background and approach to software engineering.";
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": pageTitle, "description": pageDescription, "pubDate": /* @__PURE__ */ new Date(), "showHeader": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Hey! I'm a senior software engineer who loves designing reliable systems and shipping products that feel great to use.
</p> <p>
I work across the stack with TypeScript, Node.js, React/Next.js, and PostgreSQL. I care deeply about readable code,
    strong tests, and observability. My approach: ship small, iterate quickly, measure outcomes.
</p> <p>
Recent highlights include leading a migration from a monolith to well‑scoped services, improving p95 latency,
    and introducing CI/CD with preview environments and quality gates.
</p> <p>
Outside of feature work, I enjoy mentoring, documentation, and building design‑system components that make teams faster.
    Always learning—and always happy to collaborate on meaningful problems.
</p> ${renderComponent($$result2, "GlowLineSeparator", $$GlowLineSeparator, {})} ` })}`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/about.astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
