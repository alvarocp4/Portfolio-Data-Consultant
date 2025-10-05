# Personal Portfolio - Alvaro Carmona

My personal portfolio developed with Astro, showcasing my professional experience, certifications and personal projects.

## 🎯 Portfolio Sections

- **Skills & Tools**: Profesional skills and tools
- **Experience**: Profesional Experience
- **Certifications**: Technical certifications obtained
- **Projects**: Personal prtojects

## 🔧 Requirements

- Node.js 18+ (or 20+ recommended)
- npm (or pnpm/yarn)

## 🚀 Quick Start

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev
# open http://localhost:4321
```

Build and preview:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```text
free-astro-template/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── icons/               # Inline icons for UI (e.g., timeline)
│   │   ├── images/              # JPG/PNG hero/blog images
│   │   └── logos/               # Brand logos used by Carousel & projects
│   ├── components/
│   │   ├── sections/            # Page sections
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── HeroSection.astro
│   │   │   ├── SkillsSection.astro
│   │   │   ├── WorkExperience.astro
│   │   │   └── Studies.astro
│   │   └── ui/                  # Reusable UI components
│   │       ├── badge/Badge.astro
│   │       ├── button/Button.astro
│   │       ├── card/            # Card variants (e.g., PostCard)
│   │       ├── carousel/Carousel.astro
│   │       ├── separator/
│   │       │   ├── ArrowSeparator.astro
│   │       │   └── GlowLineSeparator.astro
│   │       └── timeline/Timeline.astro
│   ├── content/
│   │   └── blog/                # Markdown & MDX posts
│   ├── data/                    # All structured data for sections/UI
│   │   ├── skills.ts
│   │   ├── work.ts
│   │   ├── studies.ts
│   │   ├── projects.ts
│   │   └── logos.ts             # Globs SVG logos and normalizes names
│   ├── layouts/
│   │   └── BlogPost.astro
│   ├── lib/
│   │   └── svg.ts               # sanitizeToOutline(svg, size)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── portfolio.astro
│   │   ├── demo.astro  # Component showcase
│   │   └── blog/[...slug].astro
│   └── styles/
│       ├── global.css           # Imports base styles in correct order
│       ├── starwind.css         # Tailwind + Starwind base & layer order
│       ├── tokens.css           # Light tokens & Starwind variable mapping
│       ├── themes/dark.css      # Dark theme overrides
│       └── utilities.css        # Project utilities, effects, animations
├── astro.config.mjs
├── starwind.config.json
├── tsconfig.json
└── package.json
```

## 🎨 Theming & Styles

This template uses Starwind UI’s theming patterns with Tailwind v4:

- `src/styles/starwind.css`: imports Tailwind and Starwind base layers.
- `src/styles/tokens.css`: base light tokens and maps to Starwind variables.
- `src/styles/themes/dark.css`: dark mode overrides (backgrounds, text, shadows, semantic colors).
- `src/styles/utilities.css`: project‑specific utilities and effects, including:
  - `.card-surface` surface style (translucent background, radius, shadow, backdrop-filter)
  - Carousel animation (`@keyframes carousel-scroll`, `.animate-carousel`)
  - Separator effects (arrow and glow line)

Dark mode is enabled by applying `.dark` or `[data-theme="dark"]` on a root element. The home page defaults to dark. To customize:

1) Edit tokens in `styles/tokens.css` (light theme base).
2) Refine dark theme overrides in `styles/themes/dark.css` (e.g., `--background`, `--card`, shadows, semantic colors).
3) Prefer adjusting `.card-surface` and utilities in `styles/utilities.css` instead of component‑scoped styles.

Accessibility: If Lighthouse flags contrast, slightly increase background luminance and/or raise text contrast by tweaking tokens in `dark.css` (e.g., `--background`, `--card`, and text color variables).

## 🗂️ Editing Content

- Blog posts: add Markdown or MDX files under `src/content/blog/`.
- Skills: edit `src/data/skills.ts` (icon, title, description). Inline SVGs are supported.
- Work experience: edit `src/data/work.ts` (title, company, region, description, technologies).
- Studies: edit `src/data/studies.ts`.
- Projects: edit `src/data/projects.ts` (icon, title, stack, description, link).
- Logos for carousel: drop SVGs into `src/assets/logos/`. They’re collected and normalized by `src/data/logos.ts` using `import.meta.glob` (configured for Vite v5 with `{ query: '?url', import: 'default', eager: true }`). Names like "Something-logo.svg" are normalized by removing the "logo" suffix and title-casing automatically.

## 🧠 SVG Handling

- Use `lib/svg.ts` → `sanitizeToOutline(svg: string, size: number)` to normalize inline SVGs (removes XML/comments, forces `fill="none"`, `stroke="currentColor"`, and applies width/height). This keeps timeline icons crisp and themable.

## 🖱️ Carousel Usage

- Component: `src/components/ui/carousel/Carousel.astro`
- Data: `src/data/logos.ts`
- Props:
  - `tools`: array of normalized logos from `logos.ts`
  - `speedMs` (optional): lower value → faster scroll. Increase to slow down.
- Behavior: logos render as white by default; on hover, they reveal their original colors.

## 📌 Adding logos to the carousel

- Drop SVGs in `src/assets/logos/` and they’ll be auto‑globbed by `src/data/logos.ts`. Names are normalized (removes `-logo`, title‑cases, etc.).

## 🧰 Cards & Surfaces

- Use the `.card-surface` utility for consistent cards:
  - dark, translucent background via `--card`
  - no border; rely on shadows for depth
  - heavier base shadow in dark mode; lighter on hover with accent glow
- Tweak in `styles/utilities.css` and `styles/themes/dark.css`.

## 🔗 Header & Footer

- Header nav is left‑aligned; social icons use group hover to change icon color on hover.
- Footer includes a CTA with a primary button.

## 🧞 Commands (Astro)

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start dev server at `http://localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview your build locally                       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✅ Best Practices

- Keep `.astro` files free of component‑scoped CSS unless absolutely necessary.
- Centralize design decisions in `tokens.css`, `themes/dark.css`, and `utilities.css`.
- Prefer data‑driven components: move content into `src/data/` and import into sections.
- Use inline SVGs for icons when you need themable stroke/fill control; otherwise reference static assets from `src/assets/`.

## 🛰️ Demo Page

Visit `/demo` to see the themed Starwind UI components (Badge, Button, Timeline, Carousel) with this template’s styling.

---

Docs: [Astro Docs](https://docs.astro.build) • [Starwind UI](https://starwind.dev)

## 🧭 What’s Included (quick reference)

- Blog content collections (Markdown + MDX) with author, tags, and category taxonomy
- Author pages (slugified), Tag pages, Category pages
- Reading time estimation for cards and posts
- Share buttons (X, HN, LinkedIn, Reddit)
- Previous/Next post navigation
- RSS feeds: global, per‑tag, per‑category (+ autodiscovery `<link>` on pages)
- SEO: canonical URLs, Open Graph + Twitter cards, JSON‑LD (Article, Breadcrumbs, Organization), sitemap
- Robots: `public/robots.txt`
- Dark‑mode friendly Markdown defaults (tables, lists, code, blockquotes)

## 🧱 Content Model (frontmatter)

Each blog post (`src/content/blog/*.md|mdx`) supports the following frontmatter keys:

```yaml
---
title: "Your post title"
description: "Short summary for cards and meta"
pubDate: 2025-06-19
updatedDate: 2024-07-02 # optional
heroImage: ../../assets/images/your-image.jpg # optional
tags: [astro, ui] # optional, many-to-many labels
category: Growth # optional, 1 broad bucket per post recommended
author: Site Author # optional; defaults to site author
---
```

Notes:
- Author pages use a slugified version of the author name (e.g., `site-author`).
- Tag pages use slugified tag names (e.g., `astro`).
- Category pages use slugified category names (e.g., `growth`).

## 🔖 Routes & URLs

- Posts: `/blog/<slug>/`
- Author: `/blog/author/<author-slug>/`
- Tag: `/blog/tag/<tag-slug>/`
- Category: `/blog/category/<category-slug>/`

## 📡 Feeds (RSS)

- Global: `/rss.xml`
- By tag: `/rss/tag/<tag-slug>.xml`
- By category: `/rss/category/<category-slug>.xml`

Tip: Feed readers can auto‑discover tag/category feeds via the `<link rel="alternate" type="application/rss+xml">` tags we include on those pages. The footer also provides quick links for Feedly/Inoreader and a “Copy RSS link” action.

## 🔎 SEO details

- `src/components/BaseHead.astro`: common head tags (canonical, OG/Twitter, robots, theme‑color, RSS link). Images and URLs are absolute to `Astro.site`.
- `src/layouts/BlogPost.astro`: Article OG metas, JSON‑LD (Article + BreadcrumbList).
- Blog index and pagination pages include `<link rel="prev/next">`.
- Sitemap via `@astrojs/sitemap` is emitted at build; `public/robots.txt` points to it.

## ✍️ Markdown UX

- Enhanced defaults for tables and lists live in `src/styles/utilities.css` under the `.prose` scope.
- Tables: rounded borders, zebra stripes, responsive overflow; Lists: restored bullets/numbering with proper indentation.

## ⏱️ Reading Time

- Cards estimate from Markdown using `calculateReadingTimeFromMarkdown()` (`src/lib/reading.ts`).
- Post pages estimate from rendered HTML using `calculateReadingTimeFromHtml()`.
- Default speed is 200 WPM; tweak by changing the optional parameter in these helpers if you prefer another baseline.

## 🧩 Customizing Taxonomy

- Tag SEO titles/descriptions: edit `src/data/tags.ts` (`getTagMeta`).
- Category SEO titles/descriptions: edit `src/data/categories.ts` (`getCategoryMeta`).

## 🚀 Deploy

- Static output in `dist/`. Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
- Ensure `site` is set in `astro.config.mjs` for correct absolute URLs in feeds and metadata.

## 🧪 Optional: Analytics

This template ships without analytics by default. To add GA4 later, place the GA snippet in `src/components/BaseHead.astro` and (optionally) guard it with `import.meta.env.PROD`.

## 🔧 Toggling features

- Categories: frontmatter supports a single `category`. To disable category pages entirely, remove `src/pages/blog/category/[category].astro` and the category RSS route; posts will continue to work with tags.
- Per-tag/category RSS: remove the routes under `src/pages/rss/tag/` and `src/pages/rss/category/` if you only want a global feed.

## ✅ Launch checklist

- [ ] `astro.config.mjs` site URL set
- [ ] `SITE_TITLE` / `SITE_DESCRIPTION` updated
- [ ] Author data and avatar set
- [ ] Favicons/app icons replaced in `public/`
- [ ] Social share image (fallback) looks good
- [ ] Lighthouse pass (SEO + Accessibility)
- [ ] Deploy (Netlify/Vercel/etc.) and verify `/rss.xml` and `/sitemap-index.xml`

