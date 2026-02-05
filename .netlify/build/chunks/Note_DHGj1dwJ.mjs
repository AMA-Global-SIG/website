import { e as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, u as unescapeHTML, F as Fragment, a as renderTemplate } from './astro/server_BLBUtamV.mjs';
import 'kleur/colors';
import { c as $$Icon } from './PageLayout_BAtAcnvP.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Note = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Note;
  const {
    icon = "tabler:info-square",
    title = await Astro2.slots.render("title"),
    description = await Astro2.slots.render("description")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 inline-block align-text-bottom font-bold" })} <span class="font-bold">${unescapeHTML(title)}</span> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(description)}` })} </div> </section>`;
}, "/home/user/website/src/components/widgets/Note.astro", void 0);

export { $$Note as $ };
