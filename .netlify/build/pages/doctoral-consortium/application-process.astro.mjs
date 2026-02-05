import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Features } from '../../chunks/Features_DWu80yvl.mjs';
import { $ as $$Note } from '../../chunks/Note_DHGj1dwJ.mjs';
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
  "title": "Doctoral Consortium Application Process",
  "description": "How to apply for the AMA Global Marketing SIG Doctoral Consortium",
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "who-should-apply",
    "text": "Who Should Apply"
  }, {
    "depth": 2,
    "slug": "application-requirements",
    "text": "Application Requirements"
  }, {
    "depth": 2,
    "slug": "selection-criteria",
    "text": "Selection Criteria"
  }, {
    "depth": 2,
    "slug": "travel-stipends",
    "text": "Travel Stipends"
  }, {
    "depth": 2,
    "slug": "what-to-expect",
    "text": "What to Expect"
  }, {
    "depth": 2,
    "slug": "upcoming-consortia",
    "text": "Upcoming Consortia"
  }, {
    "depth": 2,
    "slug": "questions",
    "text": "Questions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    div: "div",
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
      children: "The AMA Global Marketing SIG Doctoral Consortium provides a unique opportunity for PhD students with an interest in international and cross-cultural marketing to advance their research and careers."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "who-should-apply",
      children: "Who Should Apply"
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-blue-500 my-6",
      children: [createVNode(_components.p, {
        children: ["The Consortium welcomes ", createVNode(_components.strong, {
          children: "doctoral students in marketing or international business"
        }), " who:"]
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Have a research focus on ", createVNode(_components.strong, {
            children: "international marketing"
          }), ", ", createVNode(_components.strong, {
            children: "cross-cultural marketing"
          }), ", or ", createVNode(_components.strong, {
            children: "global business"
          })]
        }), "\n", createVNode(_components.li, {
          children: "Have begun developing their dissertation research (students at any stage with well-defined research ideas are welcome)"
        }), "\n", createVNode(_components.li, {
          children: "Seek to build connections within the international marketing academic community"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "application-requirements",
      children: "Application Requirements"
    }), "\n", createVNode(_components.p, {
      children: ["Applications should be submitted through the ", createVNode(_components.strong, {
        children: "EasyChair"
      }), " conference system and must include:"]
    }), "\n", createVNode("div", {
      class: "space-y-4 my-6",
      children: [createVNode("div", {
        class: "flex gap-4 p-5 bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("span", {
          class: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold",
          children: "1"
        }), createVNode("div", {
          children: [createVNode("h4", {
            class: "font-bold",
            children: "Cover Letter"
          }), createVNode("p", {
            class: "text-sm text-muted",
            children: "Describing your stage in the doctoral program, research interests, what you hope to gain from participating, and whether you wish to be considered for a travel stipend."
          })]
        })]
      }), createVNode("div", {
        class: "flex gap-4 p-5 bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("span", {
          class: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold",
          children: "2"
        }), createVNode("div", {
          children: [createVNode("h4", {
            class: "font-bold",
            children: "Research Abstract"
          }), createVNode("p", {
            class: "text-sm text-muted mb-2",
            children: "A current research project focused on international marketing (maximum 5 pages, single-spaced). Include:"
          }), createVNode("ul", {
            class: "text-sm text-muted list-disc list-inside space-y-1",
            children: [createVNode("li", {
              children: "Title and keywords"
            }), createVNode("li", {
              children: "Research question and motivation"
            }), createVNode("li", {
              children: "Theoretical background and intended contribution"
            }), createVNode("li", {
              children: "Proposed methodology or research design"
            }), createVNode("li", {
              children: "Expected findings or preliminary results (if available)"
            })]
          })]
        })]
      }), createVNode("div", {
        class: "flex gap-4 p-5 bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("span", {
          class: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold",
          children: "3"
        }), createVNode("div", {
          children: [createVNode("h4", {
            class: "font-bold",
            children: "Curriculum Vitae"
          }), createVNode("p", {
            class: "text-sm text-muted",
            children: "Maximum 2 pages including education, research experience, publications or working papers, and conference presentations."
          })]
        })]
      })]
    }), "\n", createVNode($$Note, {
      title: "Submission Format",
      description: "Please combine all materials into a single PDF file for submission. If you have also submitted a paper to the main conference, indicate the title and track in your cover letter."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "selection-criteria",
      children: "Selection Criteria"
    }), "\n", createVNode(_components.p, {
      children: "Applications are evaluated holistically, with particular attention to:"
    }), "\n", createVNode($$Features, {
      columns: 3,
      items: [{
        title: 'Topic Fit',
        description: 'Research should relate to global marketing, international marketing, or cross-cultural marketing.',
        icon: 'lucide:target'
      }, {
        title: 'Contribution Potential',
        description: 'Strength and clarity of the intended theoretical and/or practical contribution.',
        icon: 'lucide:lightbulb'
      }, {
        title: 'Overall Quality',
        description: 'Coherence, clarity, and overall impression of the submitted abstract.',
        icon: 'lucide:star'
      }]
    }), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6 text-sm",
      children: createVNode(_components.p, {
        children: ["The selection committee strives to assemble a ", createVNode(_components.strong, {
          children: "diverse cohort"
        }), " representing a range of research topics, methodological approaches, and institutional backgrounds."]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "travel-stipends",
      children: "Travel Stipends"
    }), "\n", createVNode("div", {
      class: "bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 rounded-r-lg my-6",
      children: [createVNode(_components.p, {
        children: ["A limited number of ", createVNode(_components.strong, {
          children: "travel stipends"
        }), " are available to help offset participation costs. Stipend amounts and availability vary by year."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "To be considered:"
        }), " Indicate your interest and briefly describe your need for financial support in your cover letter."]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-to-expect",
      children: "What to Expect"
    }), "\n", createVNode(_components.p, {
      children: ["The Consortium takes place on the ", createVNode(_components.strong, {
        children: "day preceding the main conference"
      }), ". The program typically includes:"]
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-4 my-6",
      children: [createVNode("div", {
        class: "p-5 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Panel Discussions"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Senior faculty share insights on research trends, publishing strategies, and career development."
        })]
      }), createVNode("div", {
        class: "p-5 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Small Group Sessions"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Present your research and receive detailed feedback from faculty mentors."
        })]
      }), createVNode("div", {
        class: "p-5 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Meet-the-Editors Sessions"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Connect with representatives from leading international marketing journals."
        })]
      }), createVNode("div", {
        class: "p-5 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Networking Reception"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Build relationships with faculty and fellow doctoral students."
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "upcoming-consortia",
      children: "Upcoming Consortia"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Year"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Location"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Date"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Application Deadline"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2026"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Nice, France"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "May 26, 2026"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "TBD"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2027"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Osaka, Japan"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Late May/Early June 2027"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "TBD"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "questions",
      children: "Questions"
    }), "\n", createVNode(_components.p, {
      children: "For questions about the Doctoral Consortium, please contact the Consortium Chairs listed on the current year’s consortium page."
    }), "\n", createVNode($$CallToAction, {
      title: "Ready to Apply?",
      actions: [{
        variant: 'primary',
        text: 'Nice 2026 Consortium',
        href: '/doctoral-consortium/nice-2026',
        icon: 'lucide:calendar'
      }, {
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

const url = "/doctoral-consortium/application-process";
const file = "/home/user/website/src/pages/doctoral-consortium/application-process.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/doctoral-consortium/application-process.mdx";
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
