import { d as createAstro, c as createComponent, e as addAttribute, b as renderTemplate, f as renderSlot, s as spreadAttributes, m as maybeRenderHead, r as renderComponent, u as unescapeHTML } from './astro/server_DaZi--al.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { a as SITE_TITLE } from './consts__lf-bKLc.mjs';

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/assets/images/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const absoluteUrl = new URL(Astro2.url.pathname, Astro2.site).toString();
  const siteOrigin = Astro2.site ?? new URL(Astro2.url).origin;
  const { title, description, image = FallbackImage } = Astro2.props;
  const imageUrl = new URL(image.src, siteOrigin).toString();
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1"><link rel="icon" type="image/png" href="/favicon.png?v=1"><link rel="shortcut icon" href="/favicon.ico?v=1"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Robots --><meta name="robots" content="index,follow,max-image-preview:large"><!-- Theme color (supports dark/light) --><meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0b0b0b"><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:site_name"${addAttribute(SITE_TITLE, "content")}><meta property="og:locale" content="en_US"><meta property="og:url"${addAttribute(absoluteUrl, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(imageUrl, "content")}><meta property="og:image:alt"${addAttribute(title, "content")}><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@guihubie"><meta property="twitter:url"${addAttribute(absoluteUrl, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(imageUrl, "content")}>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/BaseHead.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$2 = createAstro("https://example.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^#]+/g);
  const url = new URL(Astro2.url.href);
  const hash = url.hash;
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "") || href === hash;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "<a", "", "", " data-astro-cid-2dpnh6aj> ", " </a> <script>\n  function initScrollSpy() {\n    const sections = Array.from(document.querySelectorAll('section[id]'));\n    const navLinks = Array.from(document.querySelectorAll('a[href^=\"#\"]'));\n\n    function updateActiveLink() {\n      const scrollPos = window.scrollY + window.innerHeight / 3; // ajustar punto de activación\n\n      let currentId = '';\n      sections.forEach(section => {\n        const top = section.offsetTop;\n        const height = section.offsetHeight;\n        if (scrollPos >= top && scrollPos < top + height) {\n          currentId = section.id;\n        }\n      });\n\n      navLinks.forEach(link => {\n        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);\n      });\n    }\n\n    window.addEventListener('scroll', updateActiveLink);\n    window.addEventListener('resize', updateActiveLink);\n    window.addEventListener('load', updateActiveLink);\n  }\n\n  window.addEventListener('load', initScrollSpy);\n</script> "], ["", "<a", "", "", " data-astro-cid-2dpnh6aj> ", " </a> <script>\n  function initScrollSpy() {\n    const sections = Array.from(document.querySelectorAll('section[id]'));\n    const navLinks = Array.from(document.querySelectorAll('a[href^=\"#\"]'));\n\n    function updateActiveLink() {\n      const scrollPos = window.scrollY + window.innerHeight / 3; // ajustar punto de activación\n\n      let currentId = '';\n      sections.forEach(section => {\n        const top = section.offsetTop;\n        const height = section.offsetHeight;\n        if (scrollPos >= top && scrollPos < top + height) {\n          currentId = section.id;\n        }\n      });\n\n      navLinks.forEach(link => {\n        link.classList.toggle('active', link.getAttribute('href') === \\`#\\${currentId}\\`);\n      });\n    }\n\n    window.addEventListener('scroll', updateActiveLink);\n    window.addEventListener('resize', updateActiveLink);\n    window.addEventListener('load', updateActiveLink);\n  }\n\n  window.addEventListener('load', initScrollSpy);\n</script> "])), maybeRenderHead(), addAttribute(href, "href"), addAttribute([className, { active: isActive }], "class:list"), spreadAttributes(props), renderSlot($$result, $$slots["default"]));
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/sections/HeaderLink.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<button type="button" class="sw-btn-sm no-underline flex items-center gap-1" aria-label="Toggle theme" aria-pressed="false" data-theme-toggle> <span class="sr-only">Toggle theme</span> <span class="theme-icon" aria-hidden="true"> <svg class="icon-sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg> <svg class="icon-moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> </span> <span class="label">Theme</span> </button> <script>
  (function () {
    const storageKey = 'theme';
    const root = document.documentElement;
    const btn = document.querySelector('[data-theme-toggle]');

    function applyTheme(theme) {
      const isDark = theme === 'dark';
      root.dataset.theme = isDark ? 'dark' : 'light';
      root.classList.toggle('dark', isDark);
      if (btn) btn.setAttribute('aria-pressed', String(isDark));
    }

    function getInitialTheme() {
      const saved = localStorage.getItem(storageKey);
      if (saved === 'dark' || saved === 'light') return saved;
      // Infer from current DOM as fallback
      return root.classList.contains('dark') || root.dataset.theme === 'dark' ? 'dark' : 'light';
    }

    let current = getInitialTheme();
    applyTheme(current);

    btn?.addEventListener('click', () => {
      current = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(storageKey, current);
      applyTheme(current);
    });
  })();
<\/script> <style>
  [data-theme-toggle] .icon-moon { display: none; }
  html[data-theme="dark"] [data-theme-toggle] .icon-sun { display: none; }
  html[data-theme="dark"] [data-theme-toggle] .icon-moon { display: inline; }
</style>`])), maybeRenderHead());
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/button/ThemeToggle.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="bg-background text-foreground border-b sw-header fixed top-0 left-0 w-full z-50"> <nav class="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between"> <div class="flex items-center gap-3"> <a class="no-underline hover:opacity-90 flex items-center gap-2" href="#home" aria-label="Home"> <img src="/favicon.png?v=2" alt="" aria-hidden="true" width="45" height="45"> </a> <div class="internal-links hidden md:flex items-center gap-2 ml-1"> ', " ", " ", " ", " ", ' </div> </div> <div class="flex items-center gap-3"> <div class="social-links hidden md:flex items-center gap-2"> <a href="https://www.linkedin.com/in/alvarocarmonapedrajas-bd-da-bi/" target="_blank" class="group text-[color:var(--color-text-secondary)]"> <span class="sr-only">Follow on Linkedin</span> <svg viewBox="0 0 16 16" width="35" height="35" aria-hidden="true" class="transition-colors group-hover:text-[color:var(--accent)]"><path fill="currentColor" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path> </svg> </a> <a href="https://github.com/alvarocp4/portfolio-data-consultant" target="_blank" class="group text-[color:var(--color-text-secondary)]"> <span class="sr-only">Go to GitHub</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="28" height="28" class="transition-colors group-hover:text-[color:var(--accent)]"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> </a> </div> ', ' <button type="button" aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false" data-menu-btn class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[color:var(--color-text-secondary)] hover:text-white"> <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"></path></svg> </button> </div> </nav> <div id="mobile-menu" class="md:hidden hidden border-t"> <div class="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2"> <div class="flex flex-col"> ', " ", " ", " ", ` <a href="#contact" class="px-2 py-3">Contact</a> </div> <div class="flex items-center gap-4 pt-2"> <a href="https://x.com/guihubie" target="_blank" class="group inline-flex items-center text-[color:var(--color-text-secondary)]"> <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" class="transition-colors group-hover:text-white"><path fill="currentColor" d="M18.146 3H21l-7.5 8.574L22.5 21h-6.297l-4.93-5.597L5.5 21H3l8.106-9.266L3 3h6.453l4.466 5.07L18.146 3Zm-1.103 16.2h1.705L7.05 4.64H5.272l11.771 14.56Z"></path></svg> </a> <a href="https://github.com/guihubie/free-astro-template" target="_blank" class="group inline-flex items-center text-[color:var(--color-text-secondary)]"> <svg viewBox="0 0 16 16" aria-hidden="true" width="22" height="22" class="transition-colors group-hover:text-white"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> </a> </div> </div> </div> </header> <script>
  const btn = document.querySelector('[data-menu-btn]');
  const panel = document.getElementById('mobile-menu');
  function toggleMenu() {
    if (!panel || !btn) return;
    const isOpen = !panel.classList.contains('hidden');
    if (isOpen) {
      panel.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      panel.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    }
  }
  btn?.addEventListener('click', toggleMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') {
    if (!panel?.classList.contains('hidden')) toggleMenu();
  }});
  document.addEventListener('click', (e) => {
    if (!panel || !btn) return;
    const target = e.target;
    const clickedInside = panel.contains(target) || btn.contains(target);
    if (!clickedInside && !panel.classList.contains('hidden')) toggleMenu();
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "#home", "class": "px-2 py-3 text-[color:var(--color-text-secondary)] no-underline" }, { "default": ($$result2) => renderTemplate`Home` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "#skills", "class": "px-2 py-3 text-[color:var(--color-text-secondary)] no-underline" }, { "default": ($$result2) => renderTemplate`Skills & Tools` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "#experience", "class": "px-2 py-3 text-[color:var(--color-text-secondary)] no-underline" }, { "default": ($$result2) => renderTemplate`Experience` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "#certifications", "class": "px-2 py-3 text-[color:var(--color-text-secondary)] no-underline" }, { "default": ($$result2) => renderTemplate`Certifications` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "#projects", "class": "px-2 py-3 text-[color:var(--color-text-secondary)] no-underline" }, { "default": ($$result2) => renderTemplate`Projects` }), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "px-2 py-3" }, { "default": ($$result2) => renderTemplate`Resume` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/SkillsSection", "class": "px-2 py-3" }, { "default": ($$result2) => renderTemplate`Skills & Tools` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/WorkExperience", "class": "px-2 py-3" }, { "default": ($$result2) => renderTemplate`Experience` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/Projects", "class": "px-2 py-3" }, { "default": ($$result2) => renderTemplate`Projects` }));
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/sections/Header.astro", void 0);

const contactIconRaw = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n<svg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z\" fill=\"#080341\"/>\r\n</svg>";

const $$Astro$1 = createAstro("https://example.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    href,
    type = "button",
    disabled = false,
    class: className,
    ...rest
  } = Astro2.props;
  const Tag = href ? "a" : "button";
  const base = "inline-flex items-center justify-center rounded-lg font-semibold starwind-transition-colors no-underline";
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-5 py-3 text-lg"
  };
  const variants = {
    primary: "text-white !text-white hover:!text-white focus:!text-white active:!text-white bg-[var(--primary)] hover:opacity-90 shadow-sm",
    secondary: "text-[var(--accent)] border border-[var(--accent)] bg-transparent hover:bg-[color:var(--color-accent-bg)]",
    ghost: "text-[color:var(--color-text-secondary)] bg-transparent hover:bg-[var(--accent)]/10",
    outline: "text-foreground border border-[var(--border)] bg-transparent hover:bg-[color:var(--color-bg-secondary)]"
  };
  const classes = [base, sizes[size], variants[variant], className].filter(Boolean).join(" ");
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": classes, "href": href, "type": !href ? type : void 0, "aria-disabled": disabled ? "true" : void 0, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/button/Button.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  function sanitizeToWhite(svg, size = 18) {
    let s = svg.replace(/<\?xml[\s\S]*?\?>/g, "").replace(/<!--([\s\S]*?)-->/g, "").replace(/width=\"[^\"]*\"/g, "").replace(/height=\"[^\"]*\"/g, "").replace(/fill=\"[^\"]*\"/gi, 'fill="currentColor"').replace(/stroke=\"[^\"]*\"/gi, 'stroke="none"');
    s = s.replace(/<svg([^>]*)>/, (m, attrs) => `<svg${attrs} width="${size}" height="${size}">`);
    return s;
  }
  const contactIcon = sanitizeToWhite(contactIconRaw);
  const feedUrl = new URL("rss.xml", Astro2.site).toString();
  const feedlyUrl = `https://feedly.com/i/subscription/feed/${feedUrl}`;
  const inoreaderUrl = `https://www.inoreader.com/?add_feed=${feedUrl}`;
  return renderTemplate(_a || (_a = __template(["", `<footer id="contact" class="py-12 px-4 text-center"> <h2 class="text-2xl md:text-3xl font-semibold text-foreground">Want to work with me?</h2> <p class="mt-2 text-[color:var(--color-text-muted)]">Let's build something together!</p> <div class="mt-6 flex justify-center"> `, ' </div> <div class="mt-6 text-sm text-[color:var(--color-text-muted)]">Made by: <a href="https://github.com/alvarocp4" class="hover:text-[color:var(--accent)]">Alvaro Carmona</a>.\n<br>Based on: <a href="https://guihubie.com/" class="hover:text-[color:var(--accent)]">guihubie</a>.<br></div> <div class="mt-6 flex items-center justify-center gap-4 text-sm"> <a class="sw-btn-sm"', ' target="_blank" rel="noopener noreferrer" aria-label="Subscribe in Feedly">Feedly</a> <a class="sw-btn-sm"', ` target="_blank" rel="noopener noreferrer" aria-label="Subscribe in Inoreader">Inoreader</a> <a class="sw-btn-sm" href="/blog/" aria-label="Browse all posts">All posts</a> </div> <script type="module">
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches('button[data-copy]')) {
        const url = target.getAttribute('data-copy');
        if (!url) return;
        navigator.clipboard?.writeText(url);
        const original = target.textContent || 'Copy RSS link';
        target.textContent = 'Copied!';
        setTimeout(() => { target.textContent = original; }, 1500);
      }
    });
  <\/script> </footer>`])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "href": "https://www.linkedin.com/in/alvarocarmonapedrajas-bd-da-bi/", "variant": "secondary", "size": "md" }, { "default": ($$result2) => renderTemplate` <span class="inline-flex" aria-hidden="true">${unescapeHTML(contactIcon)}</span>
Get in touch
` }), addAttribute(feedlyUrl, "href"), addAttribute(inoreaderUrl, "href"));
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/sections/Footer.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b, $$Button as c };
