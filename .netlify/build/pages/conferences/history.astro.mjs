import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Steps } from '../../chunks/Steps_D5j76lhX.mjs';
import { $ as $$Stats } from '../../chunks/Stats_BVNtIOGE.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_D9stIkE1.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

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
  "title": "Conference History",
  "description": "Complete history of AMA Global Marketing SIG conferences from 1994 to present.",
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "past-conferences",
    "text": "Past Conferences"
  }, {
    "depth": 2,
    "slug": "historical-records-20112016",
    "text": "Historical Records (2011–2016)"
  }, {
    "depth": 2,
    "slug": "19942010-conferences",
    "text": "1994–2010 Conferences"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    hr: "hr",
    li: "li",
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
      children: ["The ", createVNode(_components.strong, {
        children: "AMA Global Marketing SIG"
      }), " has hosted annual conferences in diverse international locations since its founding in 1994, bringing together scholars and practitioners from around the world to advance international marketing research and education."]
    }), "\n", createVNode($$Stats, {
      stats: [{
        title: 'Years of Conferences',
        amount: '30+'
      }, {
        title: 'Countries Hosted',
        amount: '15+'
      }, {
        title: 'Continents Visited',
        amount: '5'
      }, {
        title: 'Typical Attendance',
        amount: '200-300'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "past-conferences",
      children: "Past Conferences"
    }), "\n", createVNode($$Steps, {
      title: "Recent Conference History (2017–2025)",
      items: [{
        title: '2025 — Sydney, Australia',
        description: 'Our first conference in Australia, bringing global marketing scholars to the Asia-Pacific region.',
        icon: 'lucide:map-pin'
      }, {
        title: '2024 — Verona, Italy',
        description: 'Historic Italian setting for cutting-edge research presentations and networking.',
        icon: 'lucide:map-pin'
      }, {
        title: '2023 — Santiago, Chile',
        description: 'Latin American hub for international marketing discourse.',
        icon: 'lucide:map-pin'
      }, {
        title: '2022 — Crete, Greece',
        description: 'Mediterranean island venue for post-pandemic scholarly reconnection.',
        icon: 'lucide:map-pin'
      }, {
        title: '2021 — Taormina, Italy',
        description: 'Sicilian gathering as in-person conferences resumed.',
        icon: 'lucide:map-pin'
      }, {
        title: '2020 — Cancelled',
        description: 'Conference cancelled due to COVID-19 pandemic.',
        icon: 'lucide:calendar-off'
      }, {
        title: '2019 — Buenos Aires, Argentina',
        description: 'South American conference exploring emerging market dynamics.',
        icon: 'lucide:map-pin'
      }, {
        title: '2018 — Santorini, Greece',
        description: 'Iconic Greek island setting for global marketing scholarship.',
        icon: 'lucide:map-pin'
      }, {
        title: '2017 — Havana, Cuba',
        description: 'Historic conference in Cuba examining unique market conditions.',
        icon: 'lucide:map-pin'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "historical-records-20112016",
      children: "Historical Records (2011–2016)"
    }), "\n", createVNode("div", {
      class: "bg-amber-50 dark:bg-slate-800 border-l-4 border-amber-400 p-5 rounded-r-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Compilation in Progress"
        })
      }), createVNode(_components.p, {
        children: "Conference records from 2011–2016 are currently being compiled. Locations and details will be added as historical documentation is completed."
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Year"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Location"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2016"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Records being compiled"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2015"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Records being compiled"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2014"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Records being compiled"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2013"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Records being compiled"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2012"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Records being compiled"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2011"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Records being compiled"
              })
            })]
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "19942010-conferences",
      children: "1994–2010 Conferences"
    }), "\n", createVNode(_components.p, {
      children: ["From 1994–2010, the SIG organized conferences and special sessions through partnerships with the ", createVNode(_components.strong, {
        children: "Academy of Marketing (UK)"
      }), " and in conjunction with ", createVNode(_components.strong, {
        children: "AMA Educators’ Conferences"
      }), ". Conference locations during this period included venues in Europe, Latin America, and Asia."]
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Founding Era Highlights"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Bi-annual joint conferences with Academy of Marketing (UK) established"
        }), "\n", createVNode(_components.li, {
          children: "Expansion to international venues outside the United States"
        }), "\n", createVNode(_components.li, {
          children: "Partnership model developed for conference organization"
        }), "\n", createVNode(_components.li, {
          children: "Complete records from this founding period are being compiled"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$CallToAction, {
      title: "Explore More",
      actions: [{
        variant: 'primary',
        text: 'Back to Conferences',
        href: '/conferences',
        icon: 'lucide:arrow-left'
      }, {
        text: 'View SIG History',
        href: '/history',
        icon: 'lucide:history'
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

const url = "/conferences/history";
const file = "/home/user/website/src/pages/conferences/history.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/conferences/history.mdx";
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
