import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Features2 } from '../chunks/Features2_DjDIccbq.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_D9stIkE1.mjs';
import { $ as $$Note } from '../chunks/Note_DHGj1dwJ.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$MarkdownLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "~/layouts/MarkdownLayout.astro",
  "title": "Conferences",
  "description": "AMA Global Marketing SIG conferences - upcoming events, registration, and conference history.",
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "next-conference",
    "text": "Next Conference"
  }, {
    "depth": 2,
    "slug": "upcoming-conferences",
    "text": "Upcoming Conferences"
  }, {
    "depth": 2,
    "slug": "recent-conferences",
    "text": "Recent Conferences"
  }, {
    "depth": 2,
    "slug": "for-presenters",
    "text": "For Presenters"
  }, {
    "depth": 2,
    "slug": "doctoral-consortium",
    "text": "Doctoral Consortium"
  }, {
    "depth": 2,
    "slug": "questions",
    "text": "Questions?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "AMA Global Marketing SIG"
      }), " hosts annual conferences in diverse international locations, bringing together scholars and practitioners from around the world to advance international marketing research and education."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "next-conference",
      children: "Next Conference"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl my-8",
      children: [createVNode("p", {
        class: "text-sm uppercase tracking-wide opacity-80 mb-2",
        children: "Coming Up"
      }), createVNode("h2", {
        class: "text-3xl font-bold mb-2",
        children: "2026 AMA Global Marketing Conference"
      }), createVNode("p", {
        class: "text-xl mb-2",
        children: "May 27–29, 2026"
      }), createVNode("p", {
        class: "text-lg mb-4",
        children: "Nice, France"
      }), createVNode("p", {
        class: "text-sm opacity-90 mb-6",
        children: "Hosted by IAE Nice Graduate School of Management"
      }), createVNode("div", {
        class: "flex flex-wrap gap-3",
        children: [createVNode("a", {
          href: "/conferences/nice-2026",
          class: "bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-blue-50 transition",
          children: "Conference Details"
        }), createVNode("a", {
          href: "/conferences/nice-2026#registration",
          class: "bg-white/20 text-white px-5 py-2 rounded-lg font-semibold hover:bg-white/30 transition",
          children: "Register"
        })]
      })]
    }), "\n", createVNode($$Note, {
      title: "Early Bird Deadline: March 1, 2026",
      description: "Register early for discounted rates. Join us on the French Riviera for cutting-edge research sessions, doctoral consortium, and cultural experiences."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "upcoming-conferences",
      children: "Upcoming Conferences"
    }), "\n", createVNode($$Features2, {
      columns: 2,
      items: [{
        title: '2026 — Nice, France',
        description: 'May 27–29, 2026\nIAE Nice Graduate School of Management\n\nRegistration now open!',
        icon: 'lucide:landmark',
        callToAction: {
          text: 'View Details',
          href: '/conferences/nice-2026'
        }
      }, {
        title: '2027 — Osaka, Japan',
        description: 'Late May / Early June 2027\nRitsumeikan University\n\nFirst conference in Japan!',
        icon: 'lucide:castle',
        callToAction: {
          text: 'View Details',
          href: '/conferences/osaka-2027'
        }
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "recent-conferences",
      children: "Recent Conferences"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6",
      children: [createVNode("div", {
        class: "bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 text-center",
        children: [createVNode("p", {
          class: "text-2xl font-bold text-blue-600 dark:text-blue-400",
          children: "2025"
        }), createVNode("p", {
          class: "font-semibold text-slate-800 dark:text-slate-100",
          children: "Sydney"
        }), createVNode("p", {
          class: "text-sm text-slate-500 dark:text-slate-400",
          children: "Australia"
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 text-center",
        children: [createVNode("p", {
          class: "text-2xl font-bold text-blue-600 dark:text-blue-400",
          children: "2024"
        }), createVNode("p", {
          class: "font-semibold text-slate-800 dark:text-slate-100",
          children: "Verona"
        }), createVNode("p", {
          class: "text-sm text-slate-500 dark:text-slate-400",
          children: "Italy"
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 text-center",
        children: [createVNode("p", {
          class: "text-2xl font-bold text-blue-600 dark:text-blue-400",
          children: "2023"
        }), createVNode("p", {
          class: "font-semibold text-slate-800 dark:text-slate-100",
          children: "Santiago"
        }), createVNode("p", {
          class: "text-sm text-slate-500 dark:text-slate-400",
          children: "Chile"
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 text-center",
        children: [createVNode("p", {
          class: "text-2xl font-bold text-blue-600 dark:text-blue-400",
          children: "2022"
        }), createVNode("p", {
          class: "font-semibold text-slate-800 dark:text-slate-100",
          children: "Crete"
        }), createVNode("p", {
          class: "text-sm text-slate-500 dark:text-slate-400",
          children: "Greece"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Our conferences have taken place across ", createVNode(_components.strong, {
        children: "five continents"
      }), " in locations including Taormina, Buenos Aires, Santorini, Havana, and many more international destinations."]
    }), "\n", createVNode($$CallToAction, {
      title: "Explore Our Conference History",
      subtitle: "View the complete list of past conferences from 1994 to present",
      actions: [{
        variant: 'primary',
        text: 'View Full History',
        href: '/conferences/history',
        icon: 'lucide:history'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "for-presenters",
      children: "For Presenters"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700",
        children: [createVNode("h3", {
          class: "text-base font-semibold text-slate-800 dark:text-slate-100 mb-2",
          children: "Submission Guidelines"
        }), createVNode("p", {
          class: "text-sm text-slate-600 dark:text-slate-300 mb-4",
          children: "Learn about paper formats, track options, and the review process for competitive and interactive sessions."
        }), createVNode("a", {
          href: "/conferences/submission-guidelines",
          class: "text-blue-600 dark:text-blue-400 font-semibold hover:underline",
          children: "View Submission Guidelines →"
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700",
        children: [createVNode("h3", {
          class: "text-base font-semibold text-slate-800 dark:text-slate-100 mb-2",
          children: "Presentation Guidelines"
        }), createVNode("p", {
          class: "text-sm text-slate-600 dark:text-slate-300 mb-4",
          children: "Tips for delivering effective presentations and creating engaging posters at the conference."
        }), createVNode("a", {
          href: "/conferences/presentation-guidelines",
          class: "text-blue-600 dark:text-blue-400 font-semibold hover:underline",
          children: "View Presentation Guidelines →"
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "doctoral-consortium",
      children: "Doctoral Consortium"
    }), "\n", createVNode(_components.p, {
      children: ["Each conference includes a ", createVNode(_components.strong, {
        children: "Doctoral Consortium"
      }), " the day before the main program, offering PhD students:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Research feedback from senior scholars"
      }), "\n", createVNode(_components.li, {
        children: "Career development guidance"
      }), "\n", createVNode(_components.li, {
        children: "Networking with peers worldwide"
      }), "\n", createVNode(_components.li, {
        children: "Travel stipends available"
      }), "\n"]
    }), "\n", createVNode($$CallToAction, {
      actions: [{
        variant: 'primary',
        text: 'Learn About the Doctoral Consortium',
        href: '/doctoral-consortium/application-process',
        icon: 'lucide:graduation-cap'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "questions",
      children: "Questions?"
    }), "\n", createVNode(_components.p, {
      children: "For conference inquiries, contact the program chairs or local organizers listed on each conference page."
    }), "\n", createVNode($$CallToAction, {
      actions: [{
        text: 'Contact Us',
        href: '/contact',
        icon: 'lucide:mail'
      }]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/conferences";
const file = "/home/user/website/src/pages/conferences/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/conferences/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
