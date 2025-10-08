import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_DaZi--al.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$GlowLineSeparator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GlowLineSeparator;
  const { width = "100%", class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["sw-separator-glow", className].filter(Boolean).join(" "), "class")}${addAttribute(`--sep-width: ${String(width)};`, "style")}> <div class="sw-glow"></div> <span class="sr-only">Separator</span> </div>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/separator/GlowLineSeparator.astro", void 0);

export { $$GlowLineSeparator as $ };
