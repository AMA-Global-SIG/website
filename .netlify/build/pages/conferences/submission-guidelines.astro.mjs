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
  "title": "Submission Guidelines",
  "description": "Guidelines for submitting papers to the AMA Global Marketing SIG Annual Conference via EasyChair.",
  "readingTime": 3
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "submission-types",
    "text": "Submission Types"
  }, {
    "depth": 3,
    "slug": "competitive-sessions",
    "text": "Competitive Sessions"
  }, {
    "depth": 3,
    "slug": "interactive-sessions",
    "text": "Interactive Sessions"
  }, {
    "depth": 3,
    "slug": "special-session-proposals",
    "text": "Special Session Proposals"
  }, {
    "depth": 2,
    "slug": "formatting-requirements",
    "text": "Formatting Requirements"
  }, {
    "depth": 2,
    "slug": "anonymization-requirements",
    "text": "Anonymization Requirements"
  }, {
    "depth": 2,
    "slug": "submission-rules",
    "text": "Submission Rules"
  }, {
    "depth": 2,
    "slug": "review-process",
    "text": "Review Process"
  }, {
    "depth": 2,
    "slug": "after-acceptance",
    "text": "After Acceptance"
  }, {
    "depth": 2,
    "slug": "submission-tips",
    "text": "Submission Tips"
  }, {
    "depth": 2,
    "slug": "questions",
    "text": "Questions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
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
      children: ["These guidelines apply to all paper submissions to the AMA Global Marketing SIG Annual Conference. Please read carefully before submitting your work through the ", createVNode(_components.strong, {
        children: "EasyChair"
      }), " conference management system."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "submission-types",
      children: "Submission Types"
    }), "\n", createVNode($$Features, {
      columns: 3,
      items: [{
        title: 'Competitive Sessions',
        description: 'Full papers (max 40 pages) or extended abstracts (max 10 pages) for formal presentation and discussion.',
        icon: 'lucide:trophy'
      }, {
        title: 'Interactive Sessions',
        description: 'Work-in-progress (max 10 pages) for poster-style or roundtable feedback from peers.',
        icon: 'lucide:message-circle'
      }, {
        title: 'Special Sessions',
        description: 'Thematic proposals with 3-4 abstracts, framing introduction, and participant list.',
        icon: 'lucide:users'
      }]
    }), "\n", createVNode(_components.h3, {
      id: "competitive-sessions",
      children: "Competitive Sessions"
    }), "\n", createVNode(_components.p, {
      children: "Two types of submissions are accepted for competitive sessions:"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg border-l-4 border-blue-500",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Full Paper Submissions"
        }), createVNode("p", {
          class: "text-sm",
          children: ["Complete manuscripts of no more than ", createVNode("strong", {
            children: "40 double-spaced pages"
          }), ", inclusive of all materials (abstract, text, footnotes, references, tables, figures, and appendices)."]
        })]
      }), createVNode("div", {
        class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg border-l-4 border-blue-500",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Extended Abstracts"
        }), createVNode("p", {
          class: "text-sm",
          children: ["Shorter submissions (", createVNode("strong", {
            children: "maximum 10 double-spaced pages"
          }), ") focusing on projects that are sufficiently advanced. Should clearly articulate research question, theoretical contribution, methodology, and expected findings."]
        })]
      })]
    }), "\n", createVNode("div", {
      class: "bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-6",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Note:"
        }), " Submitting a manuscript as a competitive paper does not guarantee placement in a competitive session. The best papers in each track will be placed in competitive sessions, while other accepted papers may be placed in interactive sessions due to space considerations."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "interactive-sessions",
      children: "Interactive Sessions"
    }), "\n", createVNode(_components.p, {
      children: "Shorter manuscripts or work-in-progress pieces that could benefit from informal feedback are appropriate for interactive sessions. These sessions are held in poster-style or roundtable discussion format."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Interactive submissions should be extended abstracts of no more than ", createVNode(_components.strong, {
          children: "10 double-spaced pages"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "special-session-proposals",
      children: "Special Session Proposals"
    }), "\n", createVNode(_components.p, {
      children: "Special session proposals should include:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "A short introduction framing the session theme and its relevance to international marketing"
      }), "\n", createVNode(_components.li, {
        children: "Three to four extended abstracts (approximately 3-4 pages each)"
      }), "\n", createVNode(_components.li, {
        children: "A list of participants with their expertise and institutional affiliations"
      }), "\n", createVNode(_components.li, {
        children: "Contact information for the session organizer(s)"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Proposals are assessed based on scholarly contribution, thematic coherence, and potential to generate interest and discussion."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "formatting-requirements",
      children: "Formatting Requirements"
    }), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Element"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Requirement"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Language"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "English"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "File Format"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Microsoft Word (.doc, .docx) or PDF"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Font"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "12-point Times New Roman"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Spacing"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Double-spaced (tables and references may be single-spaced)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Margins"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1 inch (2.54 cm) on all sides"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Page Layout"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "No page numbers, line numbers, or headers/footers"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Citation Style"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "APA style (or consistent with AMA journal conventions)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Full Paper Length"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Maximum 40 pages (all materials included)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Extended Abstract Length"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Maximum 10 pages (all materials included)"
            })]
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "anonymization-requirements",
      children: "Anonymization Requirements"
    }), "\n", createVNode(_components.p, {
      children: ["All submissions undergo ", createVNode(_components.strong, {
        children: "blind review"
      }), ". To ensure anonymity:"]
    }), "\n", createVNode("div", {
      class: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Anonymization Checklist:"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "☐ Remove all author names, affiliations, and contact information from the manuscript"
        }), "\n", createVNode(_components.li, {
          children: ["☐ Anonymize self-citations (e.g., replace ", createVNode(_components.em, {
            children: "“As we showed in Author (2023)…”"
          }), " with ", createVNode(_components.em, {
            children: "“As shown in [Author] (2023)…“"
          }), ")"]
        }), "\n", createVNode(_components.li, {
          children: "☐ Remove or anonymize acknowledgments, funding sources, and institutional references"
        }), "\n", createVNode(_components.li, {
          children: ["☐ Remove author-identifying metadata from file properties\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: ["In Word: ", createVNode(_components.code, {
                children: "File > Info > Check for Issues > Inspect Document"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "submission-rules",
      children: "Submission Rules"
    }), "\n", createVNode("div", {
      class: "space-y-4 my-6",
      children: [createVNode("div", {
        class: "flex gap-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("span", {
          class: "text-xl",
          children: "📝"
        }), createVNode("div", {
          children: [createVNode("strong", {
            children: "Single Track Submission"
          }), createVNode("p", {
            class: "text-sm text-muted",
            children: "Each paper may only be submitted to one track. Select the track that best fits your research topic."
          })]
        })]
      }), createVNode("div", {
        class: "flex gap-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("span", {
          class: "text-xl",
          children: "✨"
        }), createVNode("div", {
          children: [createVNode("strong", {
            children: "Original Work"
          }), createVNode("p", {
            class: "text-sm text-muted",
            children: "Submitted papers must not have been published or accepted for publication elsewhere."
          })]
        })]
      }), createVNode("div", {
        class: "flex gap-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("span", {
          class: "text-xl",
          children: "📰"
        }), createVNode("div", {
          children: [createVNode("strong", {
            children: "Concurrent Submissions"
          }), createVNode("p", {
            class: "text-sm text-muted",
            children: "Papers under review at journals may be submitted, provided they do not appear in print or online before the conference."
          })]
        })]
      }), createVNode("div", {
        class: "flex gap-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("span", {
          class: "text-xl",
          children: "🔒"
        }), createVNode("div", {
          children: [createVNode("strong", {
            children: "Post-Submission Changes"
          }), createVNode("p", {
            class: "text-sm text-muted",
            children: "Substantive changes to title, abstract, authorship, or content are not permitted after deadline. Minor corrections allowed during camera-ready phase."
          })]
        })]
      }), createVNode("div", {
        class: "flex gap-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("span", {
          class: "text-xl",
          children: "🎤"
        }), createVNode("div", {
          children: [createVNode("strong", {
            children: "Presentation Requirement"
          }), createVNode("p", {
            class: "text-sm text-muted",
            children: "At least one author of each accepted paper must register and attend to present. Papers without a registered presenting author may be withdrawn."
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "review-process",
      children: "Review Process"
    }), "\n", createVNode(_components.p, {
      children: "All competitive manuscript submissions undergo blind review. Submissions are evaluated based on:"
    }), "\n", createVNode($$Features, {
      columns: 3,
      items: [{
        title: 'Relevance',
        description: 'Relevance to the international marketing community',
        icon: 'lucide:target'
      }, {
        title: 'Contribution',
        description: 'Contribution to research, teaching, and/or practice',
        icon: 'lucide:lightbulb'
      }, {
        title: 'Rigor',
        description: 'Conceptual and analytical rigor',
        icon: 'lucide:shield-check'
      }, {
        title: 'Methodology',
        description: 'Appropriateness of methodology',
        icon: 'lucide:list-check'
      }, {
        title: 'Innovation',
        description: 'Innovativeness of approach or findings',
        icon: 'lucide:sparkles'
      }, {
        title: 'Clarity',
        description: 'Significance and clarity of conclusions',
        icon: 'lucide:pen-line'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "after-acceptance",
      children: "After Acceptance"
    }), "\n", createVNode(_components.p, {
      children: "Authors of accepted papers will receive:"
    }), "\n", createVNode("div", {
      class: "bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 rounded-r-lg my-6",
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Session Assignment"
          }), " — Notification of competitive or interactive placement"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Camera-Ready Instructions"
          }), " — Guidelines for preparing the final version"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Registration Deadline"
          }), " — Conference logistics and registration information"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Presentation Details"
          }), " — Guidelines and schedule (closer to conference date)"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "submission-tips",
      children: "Submission Tips"
    }), "\n", createVNode($$Note, {
      title: "Tips for a Successful Submission",
      description: "Submit well before the deadline to avoid last-minute technical issues. After uploading, download and review your submission to verify formatting. Retain your EasyChair submission ID for future correspondence. If you encounter technical difficulties, contact the track chairs or program chairs promptly."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "questions",
      children: "Questions"
    }), "\n", createVNode(_components.p, {
      children: "For questions about submissions, please contact the appropriate track chair(s) or the conference Program Chairs."
    }), "\n", createVNode($$CallToAction, {
      title: "Ready to Submit?",
      subtitle: "Contact information is available on the conference Call for Papers page",
      actions: [{
        variant: 'primary',
        text: 'View Current Conference',
        href: '/conferences',
        icon: 'lucide:calendar'
      }, {
        text: 'Contact Program Chairs',
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

const url = "/conferences/submission-guidelines";
const file = "/home/user/website/src/pages/conferences/submission-guidelines.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/conferences/submission-guidelines.mdx";
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
