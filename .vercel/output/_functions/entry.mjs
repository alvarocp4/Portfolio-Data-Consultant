import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_GXPsc-Z6.mjs';
import { manifest } from './manifest_5ZWyPNUX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog/author/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog/category/_category_.astro.mjs');
const _page5 = () => import('./pages/blog/page/_page_.astro.mjs');
const _page6 = () => import('./pages/blog/tag/_tag_.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page9 = () => import('./pages/portfolio.astro.mjs');
const _page10 = () => import('./pages/rss/category/_category_.xml.astro.mjs');
const _page11 = () => import('./pages/rss/tag/_tag_.xml.astro.mjs');
const _page12 = () => import('./pages/rss.xml.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/author/[slug].astro", _page3],
    ["src/pages/blog/category/[category].astro", _page4],
    ["src/pages/blog/page/[page].astro", _page5],
    ["src/pages/blog/tag/[tag].astro", _page6],
    ["src/pages/blog/index.astro", _page7],
    ["src/pages/blog/[...slug].astro", _page8],
    ["src/pages/portfolio.astro", _page9],
    ["src/pages/rss/category/[category].xml.js", _page10],
    ["src/pages/rss/tag/[tag].xml.js", _page11],
    ["src/pages/rss.xml.js", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "991c03e9-7540-452c-878f-9290937a2712",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
