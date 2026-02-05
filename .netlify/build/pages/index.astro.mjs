import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_BLBUtamV.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BAtAcnvP.mjs';
import { $ as $$Hero } from '../chunks/Hero_IUHOshvP.mjs';
import { $ as $$Note } from '../chunks/Note_DHGj1dwJ.mjs';
import { $ as $$Features } from '../chunks/Features_DWu80yvl.mjs';
import { $ as $$Features2 } from '../chunks/Features2_DjDIccbq.mjs';
import { $ as $$Content } from '../chunks/Content_BoOEuW2T.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_D9stIkE1.mjs';
import { $ as $$Stats } from '../chunks/Stats_BVNtIOGE.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "AMA Global Marketing SIG \u2014 International Marketing Scholars & Practitioners",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "Join the SIG",
      href: "https://www.ama.org",
      target: "_blank",
      icon: "lucide:users"
    },
    { text: "Nice 2026 Conference", href: "/conferences/nice-2026", icon: "lucide:calendar" }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
The AMA Global Marketing Special Interest Group brings together ${maybeRenderHead()}<span class="font-semibold">international marketing scholars, practitioners, and doctoral students</span> through annual conferences, research awards, and collaborative programs.
<span class="block mt-2 text-sm">Founded in 1994 — Members spanning six continents</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Welcome to the <span class="text-accent dark:text-white">AMA Global Marketing SIG</span> ` })}` })}  ${renderComponent($$result2, "Note", $$Note, { "title": "Our Mission:", "description": "Fostering dialogue and expanding knowledge on global marketing issues among academics, business people, and government representatives." })}  ${renderComponent($$result2, "Features", $$Features, { "id": "objectives", "tagline": "Mission & Objectives", "title": "Our Four Core Objectives", "items": [
    {
      title: "Facilitate Interaction",
      description: "Among academics, business people, and government representatives interested in global marketing.",
      icon: "lucide:users"
    },
    {
      title: "Promote Globalization",
      description: "Of marketing courses and curricula across institutions worldwide.",
      icon: "lucide:globe"
    },
    {
      title: "Foster Research",
      description: "On global marketing issues through conferences, publications, and collaborative projects.",
      icon: "lucide:microscope"
    },
    {
      title: "Disseminate Findings",
      description: "Research results, theoretical contributions, and successful business practices among members.",
      icon: "lucide:megaphone"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "tagline": "Our Activities", "title": "How We Accomplish These Objectives", "items": [
    {
      title: "Annual International Conferences",
      description: "Including bi-annual partnerships with the Academy of Marketing, UK."
    },
    {
      title: "Doctoral Consortia",
      description: "With senior scholar mentorship for emerging researchers."
    },
    {
      title: "Awards Programs",
      description: "Recognizing research excellence and contributions to the field."
    },
    {
      title: "Journal Collaboration",
      description: "Partnership with the Journal of International Marketing."
    },
    {
      title: "Academic Partnerships",
      description: "Collaboration with leading organizations and the AMA Academic Council."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Conference networking"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Building Global Connections</h3>
Advancing international marketing scholarship through collaboration and knowledge exchange.
` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "tagline": "Membership Benefits", "title": "Why Join Our Community?", "subtitle": "Connect with the global international marketing community and advance your research and career", "items": [
    {
      title: "Network Globally",
      description: "Connect with international marketing scholars and practitioners from leading universities and organizations worldwide. Build relationships across continents.",
      icon: "lucide:network"
    },
    {
      title: "Present Your Research",
      description: "Share your work at annual conferences in exciting international locations\u2014from Nice to Osaka, Sydney to Buenos Aires.",
      icon: "lucide:presentation"
    },
    {
      title: "Doctoral Development",
      description: "Participate in our consortium for research feedback, career guidance, and professional network development. Travel stipends available.",
      icon: "lucide:graduation-cap"
    },
    {
      title: "Research Recognition",
      description: "Compete for the Hans B. Thorelli Award and S. Tamer Cavusgil Award recognizing exceptional contributions to international marketing.",
      icon: "lucide:award"
    },
    {
      title: "Professional Development",
      description: "Engage through conferences, meet-the-editor sessions, panel discussions, and networking opportunities.",
      icon: "lucide:trending-up"
    },
    {
      title: "Journal Collaboration",
      description: "Collaborate on Journal of International Marketing special issues addressing cutting-edge topics.",
      icon: "lucide:book"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "id": "nice-2026", "title": "2026 AMA Global Marketing Conference", "subtitle": "Nice, France | May 27-29, 2026", "actions": [
    {
      variant: "primary",
      text: "Register Now",
      href: "/conferences/nice-2026",
      icon: "lucide:ticket"
    },
    {
      text: "View All Conferences",
      href: "/conferences"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <p class="text-lg">Join us on the <span class="font-semibold">French Riviera</span> for cutting-edge research sessions, doctoral consortium, and cultural experiences.</p> <p class="mt-2">Hosted by IAE Nice Graduate School of Management</p> <p class="mt-2 text-accent font-semibold">Early bird deadline: March 1, 2026</p> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "tagline": "Coming in 2027", "title": "2027 AMA Global Marketing Conference \u2014 Osaka, Japan", "items": [
    {
      title: "Our First Conference in Japan",
      description: "Mark your calendars for late May/early June 2027."
    },
    {
      title: "Details Coming Soon",
      description: "Venue, call for papers timeline, and registration information will be announced in 2026."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Osaka Japan"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Expanding Our Global Reach</h3>
Our conferences have taken place in Sydney, Verona, Santiago, Crete, Taormina, Buenos Aires, Santorini, Havana, and many other international locations.
` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Our Global Community", "stats": [
    { title: "Years Active", amount: "30+" },
    { title: "Continents", amount: "6" },
    { title: "Annual Conferences", amount: "25+" },
    { title: "Doctoral Alumni", amount: "500+" }
  ] })}  ${renderComponent($$result2, "Features", $$Features, { "id": "news", "tagline": "Latest Updates", "title": "News & Announcements", "columns": 3, "items": [
    {
      title: "2025 Award Winners Announced",
      description: "Congratulations to our 2025 award recipients! See the complete awards history.",
      icon: "lucide:trophy",
      callToAction: {
        text: "View Awards",
        href: "/awards"
      }
    },
    {
      title: "Nice 2026 Registration Open",
      description: "Register now for the May 2026 conference. Early bird rates available through March 1, 2026.",
      icon: "lucide:calendar-check",
      callToAction: {
        text: "Register",
        href: "/conferences/nice-2026"
      }
    },
    {
      title: "JIM Special Issue",
      description: "Journal of International Marketing announces new special issue opportunities.",
      icon: "lucide:newspaper",
      callToAction: {
        text: "Learn More",
        href: "/resources"
      }
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Get Involved", "subtitle": "Membership is open to all AMA members. International scholars may apply for affiliated membership.", "actions": [
    {
      variant: "primary",
      text: "Join AMA",
      href: "https://www.ama.org",
      target: "_blank",
      icon: "lucide:arrow-up-right"
    },
    {
      text: "Contact Us",
      href: "/contact",
      icon: "lucide:mail"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <p class="mb-4">Membership in the Global Marketing SIG is open to all AMA members. Simply indicate your desire to join when initiating or renewing your annual AMA membership.</p> <p><span class="font-semibold">International Scholars:</span> Scholars who are not AMA members may apply for affiliated (non-voting) membership. Contact the Membership Coordinator for details.</p> ` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "tagline": "Explore", "title": "Quick Links", "items": [
    {
      title: "About",
      description: "Learn about our history, mission, leadership, and governance structure.",
      icon: "lucide:info",
      callToAction: {
        text: "Learn More",
        href: "/about"
      }
    },
    {
      title: "Conferences",
      description: "Current and past conferences, submission guidelines, and registration.",
      icon: "lucide:calendar",
      callToAction: {
        text: "View Conferences",
        href: "/conferences"
      }
    },
    {
      title: "Awards",
      description: "Hans B. Thorelli Award, S. Tamer Cavusgil Award, and recognition programs.",
      icon: "lucide:award",
      callToAction: {
        text: "See Awards",
        href: "/awards"
      }
    },
    {
      title: "Resources",
      description: "Research tools, teaching materials, and professional development resources.",
      icon: "lucide:library",
      callToAction: {
        text: "Browse Resources",
        href: "/resources"
      }
    }
  ] })} ` })}`;
}, "/home/user/website/src/pages/index.astro", void 0);

const $$file = "/home/user/website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
