import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_DaZi--al.mjs';
import 'kleur/colors';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_DvagX5PM.mjs';
import { $ as $$FormattedDate } from './FormattedDate_BCmTASmL.mjs';
import { a as calculateReadingTimeFromMarkdown } from './reading_m1Sy0aiN.mjs';
import { s as slugifyTag } from './slug_CBq44NJN.mjs';

const $$Astro = createAstro("https://example.com");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  let readingTimeMin = 0;
  try {
    const md = post.body ?? "";
    readingTimeMin = calculateReadingTimeFromMarkdown(md || post.data.description || "");
  } catch {
  }
  return renderTemplate`${maybeRenderHead()}<article class="card-surface p-4 h-full flex flex-col gap-3 relative"> ${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 640, "height": 360, "src": post.data.heroImage, "alt": post.data.title })}`} <h3 class="text-xl font-semibold text-[color:var(--color-text-primary)]">${post.data.title}</h3> <p class="text-[color:var(--color-text-muted)]">${post.data.description}</p> <div class="flex flex-col text-sm text-[color:var(--color-text-muted)] gap-1"> <div class="flex items-center gap-1"> <a${addAttribute(`/blog/author/${slugifyTag(post.data.author || "Site Author")}/`, "href")} class="hover:text-[color:var(--accent)] interactive-link">${post.data.author || "Site Author"}</a> </div> <div class="flex items-center gap-1"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </div> ${readingTimeMin > 0 && renderTemplate`<div class="flex items-center gap-1"> <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <circle cx="12" cy="12" r="9"></circle> <path d="M12 7v5l3 3"></path> </svg> ${readingTimeMin} min read
</div>`} </div> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="flex gap-2 flex-wrap"> ${post.data.tags.map((t) => renderTemplate`<a${addAttribute(`/blog/tag/${t.replace(/\s+/g, "-").toLowerCase()}/`, "href")} class="sw-tag interactive-link">${t}</a>`)} </div>`} <a${addAttribute(`/blog/${post.id}/`, "href")} class="stretched-link"${addAttribute(post.data.title, "aria-label")}></a> </article>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/card/PostCard.astro", void 0);

export { $$PostCard as $ };
