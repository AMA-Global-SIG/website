import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Features } from '../../chunks/Features_DWu80yvl.mjs';
import { $ as $$Features2 } from '../../chunks/Features2_DjDIccbq.mjs';
import { $ as $$Stats } from '../../chunks/Stats_BVNtIOGE.mjs';
import { $ as $$Note } from '../../chunks/Note_DHGj1dwJ.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_D9stIkE1.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

/*TODO: Add more conference overview content*/
/*TODO: Add venue details*/
/*TODO: Add submission deadlines and other key dates*/
/*TODO: Add registration link and fee details*/
/*TODO: Add accommodation details and hotel blocks*/
/*TODO: Add local organizer contacts*/
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
  "title": "2026 Nice Conference",
  "description": "2026 AMA Global Marketing Conference - Nice, France - May 27-29, 2026",
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "conference-overview",
    "text": "Conference Overview"
  }, {
    "depth": 2,
    "slug": "conference-venue",
    "text": "Conference Venue"
  }, {
    "depth": 3,
    "slug": "iae-nice-graduate-school-of-management",
    "text": "IAE Nice Graduate School of Management"
  }, {
    "depth": 2,
    "slug": "about-nice",
    "text": "About Nice"
  }, {
    "depth": 2,
    "slug": "conference-highlights",
    "text": "Conference Highlights"
  }, {
    "depth": 2,
    "slug": "program-chairs",
    "text": "Program Chairs"
  }, {
    "depth": 2,
    "slug": "key-dates",
    "text": "Key Dates"
  }, {
    "depth": 2,
    "slug": "registration",
    "text": "Registration"
  }, {
    "depth": 2,
    "slug": "accommodation",
    "text": "Accommodation"
  }, {
    "depth": 2,
    "slug": "contact",
    "text": "Contact"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("div", {
      class: "bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-8 rounded-xl my-8",
      children: [createVNode("h2", {
        class: "text-3xl font-bold mb-2",
        children: "2026 AMA Global Marketing Conference"
      }), createVNode("p", {
        class: "text-xl mb-2",
        children: "May 27–29, 2026"
      }), createVNode("p", {
        class: "text-lg",
        children: "Nice, France"
      }), createVNode("p", {
        class: "mt-4 text-sm bg-white/20 inline-block px-3 py-1 rounded",
        children: "🇫🇷 French Riviera"
      })]
    }), "\n", createVNode($$Note, {
      title: "Registration Now Open",
      description: "Early bird deadline: March 1, 2026. Register now to secure discounted rates."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conference-overview",
      children: "Conference Overview"
    }), "\n", createVNode(_components.p, {
      children: ["Join us on the ", createVNode(_components.strong, {
        children: "French Riviera"
      }), " for the 2026 AMA Global Marketing Conference! The conference will take place at ", createVNode(_components.strong, {
        children: "IAE Nice Graduate School of Management"
      }), " from May 27–29, 2026."]
    }), "\n", "\n", createVNode($$Stats, {
      stats: [{
        title: 'Conference Days',
        amount: '3'
      }, {
        title: 'Expected Attendees',
        amount: '200+'
      }, {
        title: 'Conference Tracks',
        amount: '18'
      }, {
        title: 'Location',
        amount: 'Nice'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conference-venue",
      children: "Conference Venue"
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-6 rounded-lg my-6",
      children: [createVNode(_components.h3, {
        id: "iae-nice-graduate-school-of-management",
        children: "IAE Nice Graduate School of Management"
      }), createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Nice, France"
        })
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Venue details and directions will be provided as they become available."
        })
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "about-nice",
      children: "About Nice"
    }), "\n", createVNode(_components.p, {
      children: "Nice, located on the stunning French Riviera (Côte d’Azur), offers the perfect blend of Mediterranean charm, cultural richness, and academic excellence."
    }), "\n", createVNode($$Features, {
      title: "Why Nice?",
      columns: 3,
      items: [{
        title: 'Mediterranean Setting',
        description: 'Beautiful coastal city on the French Riviera with stunning beaches and promenades',
        icon: 'lucide:sun'
      }, {
        title: 'Cultural Heritage',
        description: 'Rich history, world-class museums, and vibrant arts scene',
        icon: 'lucide:palette'
      }, {
        title: 'Easy Access',
        description: 'Nice Côte d\'Azur Airport with direct connections to major European and international cities',
        icon: 'lucide:plane'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conference-highlights",
      children: "Conference Highlights"
    }), "\n", createVNode($$Features2, {
      columns: 2,
      items: [{
        title: 'Journal of International Marketing Special Issue',
        description: 'Dedicated special session for JIM special issue. Authors of presented papers welcome to submit for possible publication.',
        icon: 'lucide:book'
      }, {
        title: 'Doctoral Consortium',
        description: 'May 26, 2026 — Unique opportunity for PhD students to receive feedback from leading scholars.',
        icon: 'lucide:graduation-cap'
      }, {
        title: 'Riviera Experience',
        description: 'Experience the French Riviera\'s legendary cuisine, culture, and Mediterranean lifestyle.',
        icon: 'lucide:sun'
      }, {
        title: 'Global Networking',
        description: 'Connect with leading international marketing scholars and practitioners from around the world.',
        icon: 'lucide:globe'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "program-chairs",
      children: "Program Chairs"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg",
        children: [createVNode("p", {
          class: "font-bold",
          children: "Peter Magnusson"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "University of Texas Rio Grande Valley"
        })]
      }), createVNode("div", {
        class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg",
        children: [createVNode("p", {
          class: "font-bold",
          children: "Goksel Yalcinkaya"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "University of New Hampshire"
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "key-dates",
      children: "Key Dates"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl my-6",
      children: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Milestone"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Date"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Early Bird Registration Deadline"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "March 1, 2026"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Doctoral Consortium"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "May 26, 2026"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Conference Dates"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "May 27–29, 2026"
            })]
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "registration",
      children: "Registration"
    }), "\n", createVNode("div", {
      class: "bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 rounded-r-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Registration is now open!"
        })
      }), createVNode(_components.p, {
        children: ["Early bird rates are available through ", createVNode(_components.strong, {
          children: "March 1, 2026"
        }), "."]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "accommodation",
      children: "Accommodation"
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: createVNode(_components.p, {
        children: "Accommodation information and hotel recommendations will be provided soon."
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "contact",
      children: "Contact"
    }), "\n", createVNode(_components.p, {
      children: "For questions about the 2026 Nice Conference, please contact:"
    }), "\n", "\n", createVNode($$CallToAction, {
      actions: [{
        variant: 'primary',
        text: 'Contact Us',
        href: '/contact',
        icon: 'lucide:mail'
      }, {
        text: 'View All Conferences',
        href: '/conferences',
        icon: 'lucide:calendar'
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

const url = "/conferences/nice-2026";
const file = "/home/user/website/src/pages/conferences/nice-2026.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/conferences/nice-2026.mdx";
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
