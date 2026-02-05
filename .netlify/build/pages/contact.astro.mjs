import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Features } from '../chunks/Features_DWu80yvl.mjs';
import { $ as $$Features2 } from '../chunks/Features2_DjDIccbq.mjs';
import { $ as $$Note } from '../chunks/Note_DHGj1dwJ.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_D9stIkE1.mjs';
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
  "title": "Contact Us",
  "description": "Find the right contact for your inquiry - conferences, membership, doctoral consortium, awards, and more.",
  "readingTime": 3
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "conference-inquiries",
    "text": "Conference Inquiries"
  }, {
    "depth": 3,
    "slug": "2026-nice-conference-may-2729-2026",
    "text": "2026 Nice Conference (May 27–29, 2026)"
  }, {
    "depth": 2,
    "slug": "doctoral-consortium",
    "text": "Doctoral Consortium"
  }, {
    "depth": 2,
    "slug": "leadership-contacts",
    "text": "Leadership Contacts"
  }, {
    "depth": 3,
    "slug": "sig-chair",
    "text": "SIG Chair"
  }, {
    "depth": 3,
    "slug": "key-board-contacts",
    "text": "Key Board Contacts"
  }, {
    "depth": 2,
    "slug": "awards--nominations",
    "text": "Awards & Nominations"
  }, {
    "depth": 3,
    "slug": "sig-awards",
    "text": "SIG Awards"
  }, {
    "depth": 3,
    "slug": "journal-of-international-marketing-awards",
    "text": "Journal of International Marketing Awards"
  }, {
    "depth": 2,
    "slug": "join-the-sig",
    "text": "Join the SIG"
  }, {
    "depth": 3,
    "slug": "affiliated-membership-application",
    "text": "Affiliated Membership Application"
  }, {
    "depth": 2,
    "slug": "stay-connected",
    "text": "Stay Connected"
  }, {
    "depth": 2,
    "slug": "feedback--suggestions",
    "text": "Feedback & Suggestions"
  }, {
    "depth": 2,
    "slug": "mailing-address",
    "text": "Mailing Address"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    div: "div",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Find the right contact for your inquiry below, organized by topic and role."
      })
    }), "\n", createVNode($$Note, {
      title: "Urgent Conference Matters?",
      description: "For urgent conference-related matters, please contact the SIG Chair directly: goksel.yalcinkaya@unh.edu"
    }), "\n", createVNode($$Features, {
      title: "Quick Contacts",
      columns: 4,
      items: [{
        title: 'General Questions',
        description: 'General inquiries about the SIG',
        icon: 'lucide:circle-question-mark',
        callToAction: {
          text: 'Email SIG Chair',
          href: 'mailto:goksel.yalcinkaya@unh.edu'
        }
      }, {
        title: 'Website Issues',
        description: 'Technical problems or suggestions',
        icon: 'lucide:globe',
        callToAction: {
          text: 'Email Webmaster',
          href: 'mailto:timo.mandler@neoma-bs.fr'
        }
      }, {
        title: 'Doctoral Consortium',
        description: 'PhD program questions',
        icon: 'lucide:graduation-cap',
        callToAction: {
          text: 'Email Coordinators',
          href: 'mailto:annie.cui@mail.wvu.edu'
        }
      }, {
        title: 'Membership',
        description: 'Joining or renewing',
        icon: 'lucide:users',
        callToAction: {
          text: 'Visit AMA',
          href: 'https://www.ama.org'
        }
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conference-inquiries",
      children: "Conference Inquiries"
    }), "\n", createVNode(_components.h3, {
      id: "2026-nice-conference-may-2729-2026",
      children: "2026 Nice Conference (May 27–29, 2026)"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-blue-100 dark:border-slate-700 my-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4",
        children: "Program Chairs"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Peter Magnusson"
          }), ", University of Texas Rio Grande Valley"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Goksel Yalcinkaya"
          }), ", University of New Hampshire"]
        }), "\n"]
      }), createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-5 mb-3",
        children: "Local Chairs"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: createVNode(_components.em, {
            children: "IAE Nice contacts — to be confirmed"
          })
        }), "\n"]
      }), createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-5 mb-3",
        children: "Registration, Venue & Logistics"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Contact: ", createVNode(_components.em, {
            children: "2026 Nice Conference Coordinator — to be announced"
          })]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Submission & Review Questions:"
        }), " Please contact the appropriate ", createVNode(_components.strong, {
          children: "Track Chair"
        }), " for your specific research area. Track chairs are listed on the current conference page and are appointed annually for each conference cycle."]
      }), "\n"]
    }), "\n", createVNode($$CallToAction, {
      actions: [{
        variant: 'primary',
        text: 'View Nice 2026 Conference Details',
        href: '/conferences/nice-2026',
        icon: 'lucide:calendar'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "doctoral-consortium",
      children: "Doctoral Consortium"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700",
        children: [createVNode("h4", {
          class: "text-base font-semibold text-slate-800 dark:text-slate-100 mb-1",
          children: "Annie Peng Cui"
        }), createVNode("p", {
          class: "text-sm text-slate-500 dark:text-slate-400 mb-2",
          children: "West Virginia University"
        }), createVNode("a", {
          href: "mailto:annie.cui@mail.wvu.edu",
          class: "text-blue-600 dark:text-blue-400 hover:underline text-sm",
          children: createVNode(_components.a, {
            href: "mailto:annie.cui@mail.wvu.edu",
            children: "annie.cui@mail.wvu.edu"
          })
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700",
        children: [createVNode("h4", {
          class: "text-base font-semibold text-slate-800 dark:text-slate-100 mb-1",
          children: "Timo Mandler"
        }), createVNode("p", {
          class: "text-sm text-slate-500 dark:text-slate-400 mb-2",
          children: "NEOMA Business School"
        }), createVNode("a", {
          href: "mailto:timo.mandler@neoma-bs.fr",
          class: "text-blue-600 dark:text-blue-400 hover:underline text-sm",
          children: createVNode(_components.a, {
            href: "mailto:timo.mandler@neoma-bs.fr",
            children: "timo.mandler@neoma-bs.fr"
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Application Process:"
      }), " Submit applications through the conference submission system. The doctoral consortium takes place the day before the main conference begins."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Travel Stipends:"
      }), " A limited number of travel stipends are available. Indicate your need for financial support in your application cover letter."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "leadership-contacts",
      children: "Leadership Contacts"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["For complete board member biographies and service records, visit our ", createVNode(_components.a, {
          href: "/leadership",
          children: "Leadership & Governance"
        }), " page."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "sig-chair",
      children: "SIG Chair"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-primary/10 to-blue-50 dark:from-slate-800 dark:to-slate-900 border-l-4 border-primary p-5 rounded-r-xl my-6",
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Goksel Yalcinkaya"
        }), "\n", createVNode(_components.em, {
          children: "Professor of Marketing, University of New Hampshire"
        })]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Email:"
        }), " ", createVNode(_components.a, {
          href: "mailto:goksel.yalcinkaya@unh.edu",
          children: "goksel.yalcinkaya@unh.edu"
        })]
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "The SIG Chair serves as the primary point of contact for matters not covered by specialized board roles."
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "key-board-contacts",
      children: "Key Board Contacts"
    }), "\n", createVNode($$Features2, {
      columns: 3,
      items: [{
        title: 'Academic Programs & Membership',
        description: 'Annie Peng Cui\nWest Virginia University\nannie.cui@mail.wvu.edu',
        icon: 'lucide:users'
      }, {
        title: 'International Liaison',
        description: 'Constantine S. Katsikeas\nLeeds University Business School\nbuscsk@leeds.ac.uk',
        icon: 'lucide:globe'
      }, {
        title: 'Webmaster & Social Media',
        description: 'Timo Mandler\nNEOMA Business School\ntimo.mandler@neoma-bs.fr',
        icon: 'lucide:laptop'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "awards--nominations",
      children: "Awards & Nominations"
    }), "\n", createVNode(_components.h3, {
      id: "sig-awards",
      children: "SIG Awards"
    }), "\n", createVNode(_components.p, {
      children: ["For nominations and questions about the ", createVNode(_components.strong, {
        children: "Significant Contributions to Global Marketing Award"
      }), " and the ", createVNode(_components.strong, {
        children: "Excellence in Global Marketing Research Award"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Contact:"
        }), " SIG Chair (", createVNode(_components.a, {
          href: "mailto:goksel.yalcinkaya@unh.edu",
          children: "goksel.yalcinkaya@unh.edu"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Deadline:"
        }), " Typically announced in early spring annually"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "journal-of-international-marketing-awards",
      children: "Journal of International Marketing Awards"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "Hans B. Thorelli Award"
      }), " and ", createVNode(_components.strong, {
        children: "S. Tamer Cavusgil Award"
      }), " are administered by the ", createVNode(_components.em, {
        children: "Journal of International Marketing"
      }), " Editorial Board."]
    }), "\n", createVNode($$CallToAction, {
      actions: [{
        variant: 'primary',
        text: 'View Complete Awards Information',
        href: '/awards',
        icon: 'lucide:award'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "join-the-sig",
      children: "Join the SIG"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-blue-100 dark:border-slate-700",
        children: [createVNode("h3", {
          class: "text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3",
          children: "AMA Members"
        }), createVNode("p", {
          class: "text-slate-600 dark:text-slate-300 mb-4",
          children: "Membership in the Global Marketing SIG is open to all AMA members. Simply indicate your desire to join when initiating or renewing your annual AMA membership."
        }), createVNode("a", {
          href: "https://www.ama.org",
          target: "_blank",
          class: "btn btn-primary",
          children: "Join or Renew at AMA.org"
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-blue-100 dark:border-slate-700",
        children: [createVNode("h3", {
          class: "text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3",
          children: "Non-AMA Members"
        }), createVNode("p", {
          class: "text-slate-600 dark:text-slate-300 mb-4",
          children: ["International scholars may apply for ", createVNode("strong", {
            children: "affiliated (non-voting) membership"
          }), ", allowing participation in SIG activities while maintaining primary professional associations."]
        }), createVNode("a", {
          href: "#affiliated-membership-application",
          class: "btn btn-secondary",
          children: "Application Details"
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "affiliated-membership-application",
      children: "Affiliated Membership Application"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Required Materials:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Current position and institutional affiliation"
      }), "\n", createVNode(_components.li, {
        children: "Brief statement of research interests in international marketing"
      }), "\n", createVNode(_components.li, {
        children: "CV or brief biographical summary"
      }), "\n", createVNode(_components.li, {
        children: "Name of current SIG member who supports your application (if applicable)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "To Apply:"
      }), " Email completed materials to the Membership Coordinator"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Subject line:"
        }), " “Affiliated Membership Application - [Your Name]”"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Membership Terms:"
      }), " Affiliated membership is granted for one-year renewable periods beginning in August, subject to Board of Directors approval."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "stay-connected",
      children: "Stay Connected"
    }), "\n", createVNode($$Features, {
      columns: 3,
      items: [{
        title: 'Conference Announcements',
        description: 'Upcoming dates, calls for papers, submission deadlines, registration info, and doctoral consortium applications.',
        icon: 'lucide:calendar',
        callToAction: {
          text: 'View Conferences',
          href: '/conferences'
        }
      }, {
        title: 'Research & Resources',
        description: 'Research tools, databases, teaching materials, syllabi, case studies, and professional development.',
        icon: 'lucide:book-open',
        callToAction: {
          text: 'Browse Resources',
          href: '/resources'
        }
      }, {
        title: 'Social Media',
        description: 'The SIG is developing its social media presence. Contact the Webmaster to join our announcement list.',
        icon: 'lucide:share-2',
        callToAction: {
          text: 'Email Webmaster',
          href: 'mailto:timo.mandler@neoma-bs.fr'
        }
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "feedback--suggestions",
      children: "Feedback & Suggestions"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Your Voice Matters"
      }), " — We continuously work to improve the SIG’s services and resources."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
      style: {
        overflow: "auto"
      },
      children: createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Topic"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Contact"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "General feedback"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SIG Chair or any board member"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Website feedback"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Webmaster"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Conference suggestions"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Conference coordinators"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Membership experience"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Membership Coordinator"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Board Meeting Schedule:"
      }), " The Board of Directors meets twice annually at the AMA Summer and Winter Educators’ Conferences. Member input is welcome and can be shared with any board member for consideration."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "mailing-address",
      children: "Mailing Address"
    }), "\n", createVNode(_components.p, {
      children: "The AMA Global Marketing SIG operates through the American Marketing Association."
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 my-6",
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "American Marketing Association"
        }), "\n130 E. Randolph St., 22nd Floor\nChicago, IL 60601"]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Phone:"
        }), " 1-800-AMA-1150 or (312) 542-9000\n", createVNode(_components.strong, {
          children: "Website:"
        }), " ", createVNode(_components.a, {
          href: "https://www.ama.org",
          children: "www.ama.org"
        })]
      })]
    }), "\n", createVNode($$CallToAction, {
      title: "Have More Questions?",
      actions: [{
        variant: 'primary',
        text: 'Visit FAQ',
        href: '/faq',
        icon: 'lucide:circle-question-mark'
      }, {
        text: 'Leadership & Governance',
        href: '/leadership',
        icon: 'lucide:users'
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

const url = "/contact";
const file = "/home/user/website/src/pages/contact.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/contact.mdx";
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
