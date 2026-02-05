import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BwA_sIMT.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/awards/jim-awards.astro.mjs');
const _page3 = () => import('./pages/awards/sig-awards.astro.mjs');
const _page4 = () => import('./pages/awards.astro.mjs');
const _page5 = () => import('./pages/conferences/history.astro.mjs');
const _page6 = () => import('./pages/conferences/nice-2026.astro.mjs');
const _page7 = () => import('./pages/conferences/osaka-2027.astro.mjs');
const _page8 = () => import('./pages/conferences/presentation-guidelines.astro.mjs');
const _page9 = () => import('./pages/conferences/submission-guidelines.astro.mjs');
const _page10 = () => import('./pages/conferences.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/doctoral-consortium/application-process.astro.mjs');
const _page13 = () => import('./pages/doctoral-consortium/nice-2026.astro.mjs');
const _page14 = () => import('./pages/doctoral-consortium/osaka-2027.astro.mjs');
const _page15 = () => import('./pages/history.astro.mjs');
const _page16 = () => import('./pages/homes/mobile-app.astro.mjs');
const _page17 = () => import('./pages/homes/personal.astro.mjs');
const _page18 = () => import('./pages/homes/saas.astro.mjs');
const _page19 = () => import('./pages/homes/startup.astro.mjs');
const _page20 = () => import('./pages/landing/click-through.astro.mjs');
const _page21 = () => import('./pages/landing/lead-generation.astro.mjs');
const _page22 = () => import('./pages/landing/pre-launch.astro.mjs');
const _page23 = () => import('./pages/landing/product.astro.mjs');
const _page24 = () => import('./pages/landing/sales.astro.mjs');
const _page25 = () => import('./pages/landing/subscription.astro.mjs');
const _page26 = () => import('./pages/leadership.astro.mjs');
const _page27 = () => import('./pages/mission.astro.mjs');
const _page28 = () => import('./pages/pricing.astro.mjs');
const _page29 = () => import('./pages/privacy.astro.mjs');
const _page30 = () => import('./pages/rss.xml.astro.mjs');
const _page31 = () => import('./pages/services.astro.mjs');
const _page32 = () => import('./pages/terms.astro.mjs');
const _page33 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page34 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page35 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page36 = () => import('./pages/index.astro.mjs');
const _page37 = () => import('./pages/_---blog_.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/awards/jim-awards.mdx", _page2],
    ["src/pages/awards/sig-awards.mdx", _page3],
    ["src/pages/awards/index.mdx", _page4],
    ["src/pages/conferences/history.mdx", _page5],
    ["src/pages/conferences/nice-2026.mdx", _page6],
    ["src/pages/conferences/osaka-2027.mdx", _page7],
    ["src/pages/conferences/presentation-guidelines.mdx", _page8],
    ["src/pages/conferences/submission-guidelines.mdx", _page9],
    ["src/pages/conferences/index.mdx", _page10],
    ["src/pages/contact.mdx", _page11],
    ["src/pages/doctoral-consortium/application-process.mdx", _page12],
    ["src/pages/doctoral-consortium/nice-2026.mdx", _page13],
    ["src/pages/doctoral-consortium/osaka-2027.mdx", _page14],
    ["src/pages/history.mdx", _page15],
    ["src/pages/homes/mobile-app.astro", _page16],
    ["src/pages/homes/personal.astro", _page17],
    ["src/pages/homes/saas.astro", _page18],
    ["src/pages/homes/startup.astro", _page19],
    ["src/pages/landing/click-through.astro", _page20],
    ["src/pages/landing/lead-generation.astro", _page21],
    ["src/pages/landing/pre-launch.astro", _page22],
    ["src/pages/landing/product.astro", _page23],
    ["src/pages/landing/sales.astro", _page24],
    ["src/pages/landing/subscription.astro", _page25],
    ["src/pages/leadership.mdx", _page26],
    ["src/pages/mission.mdx", _page27],
    ["src/pages/pricing.astro", _page28],
    ["src/pages/privacy.md", _page29],
    ["src/pages/rss.xml.ts", _page30],
    ["src/pages/services.astro", _page31],
    ["src/pages/terms.md", _page32],
    ["src/pages/[...blog]/[category]/[...page].astro", _page33],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page34],
    ["src/pages/[...blog]/[...page].astro", _page35],
    ["src/pages/index.astro", _page36],
    ["src/pages/[...blog]/index.astro", _page37]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b262d709-1c07-470a-96d6-c52a92633ba6"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
