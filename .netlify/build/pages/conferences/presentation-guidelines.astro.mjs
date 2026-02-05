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
  "title": "Presentation Guidelines",
  "description": "Guidelines for delivering effective competitive paper presentations and poster sessions at AMA Global Marketing SIG conferences.",
  "readingTime": 5
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "quick-reference",
    "text": "Quick Reference"
  }, {
    "depth": 2,
    "slug": "competitive-paper-presentations",
    "text": "Competitive Paper Presentations"
  }, {
    "depth": 3,
    "slug": "session-format",
    "text": "Session Format"
  }, {
    "depth": 3,
    "slug": "before-your-session",
    "text": "Before Your Session"
  }, {
    "depth": 3,
    "slug": "technical-requirements",
    "text": "Technical Requirements"
  }, {
    "depth": 3,
    "slug": "presentation-best-practices",
    "text": "Presentation Best Practices"
  }, {
    "depth": 4,
    "slug": "structure-your-talk",
    "text": "Structure Your Talk"
  }, {
    "depth": 4,
    "slug": "effective-delivery",
    "text": "Effective Delivery"
  }, {
    "depth": 4,
    "slug": "slide-design",
    "text": "Slide Design"
  }, {
    "depth": 4,
    "slug": "handling-qa",
    "text": "Handling Q&A"
  }, {
    "depth": 2,
    "slug": "interactive-poster-presentations",
    "text": "Interactive (Poster) Presentations"
  }, {
    "depth": 3,
    "slug": "poster-specifications",
    "text": "Poster Specifications"
  }, {
    "depth": 3,
    "slug": "effective-poster-design",
    "text": "Effective Poster Design"
  }, {
    "depth": 3,
    "slug": "during-your-poster-session",
    "text": "During Your Poster Session"
  }, {
    "depth": 2,
    "slug": "maximizing-engagement",
    "text": "Maximizing Engagement"
  }, {
    "depth": 2,
    "slug": "accessibility-considerations",
    "text": "Accessibility Considerations"
  }, {
    "depth": 2,
    "slug": "troubleshooting",
    "text": "Troubleshooting"
  }, {
    "depth": 2,
    "slug": "frequently-asked-questions",
    "text": "Frequently Asked Questions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    div: "div",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [createVNode($$Note, {
      title: "Congratulations on having your work accepted!",
      description: "These guidelines will help you deliver an effective presentation that engages the audience and maximizes your research contribution."
    }), "\n", createVNode(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-8",
      children: [createVNode("div", {
        class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg border-l-4 border-blue-500",
        children: [createVNode("h3", {
          class: "font-bold text-lg mb-3",
          children: "Before the Conference"
        }), createVNode("ul", {
          class: "space-y-2 text-sm",
          children: [createVNode("li", {
            children: ["☐ Prepare a ", createVNode("strong", {
              children: "15-minute presentation"
            }), " (competitive) or ", createVNode("strong", {
              children: "5-minute overview"
            }), " (poster)"]
          }), createVNode("li", {
            children: ["☐ Load presentation on USB drive (", createVNode("strong", {
              children: "PowerPoint or PDF only"
            }), ")"]
          }), createVNode("li", {
            children: ["☐ Use ", createVNode("strong", {
              children: "Arial or Times New Roman"
            }), " fonts, minimum ", createVNode("strong", {
              children: "24pt size"
            })]
          }), createVNode("li", {
            children: ["☐ Practice with timer—plan for ", createVNode("strong", {
              children: "13 minutes"
            }), " to allow buffer"]
          })]
        })]
      }), createVNode("div", {
        class: "bg-green-50 dark:bg-slate-800 p-5 rounded-lg border-l-4 border-green-500",
        children: [createVNode("h3", {
          class: "font-bold text-lg mb-3",
          children: "Day of Your Session"
        }), createVNode("ul", {
          class: "space-y-2 text-sm",
          children: [createVNode("li", {
            children: ["☐ Arrive ", createVNode("strong", {
              children: "10 minutes early"
            }), " to meet chair and test equipment"]
          }), createVNode("li", {
            children: "☐ Stay within time limit—chairs will enforce this"
          }), createVNode("li", {
            children: ["☐ Focus on your ", createVNode("strong", {
              children: "contribution"
            }), ", not comprehensive coverage"]
          }), createVNode("li", {
            children: "☐ Engage with Q&A; acknowledge good questions even if challenging"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "competitive-paper-presentations",
      children: "Competitive Paper Presentations"
    }), "\n", createVNode(_components.h3, {
      id: "session-format",
      children: "Session Format"
    }), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Competitive sessions are 75 minutes"
        }), " with typically 4 papers:"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Time"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Activity"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2 min"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Session chair introduces theme and papers"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "60 min"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Four 15-minute presentations"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "13 min"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Audience Q&A"
            })]
          })]
        })]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Your presentation time is 15 minutes."
        }), " Session chairs will enforce time limits to ensure fair treatment of all presenters and adequate discussion time."]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "before-your-session",
      children: "Before Your Session"
    }), "\n", createVNode(_components.p, {
      children: "Arrive 10 minutes early to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Test equipment and load your presentation"
      }), "\n", createVNode(_components.li, {
        children: "Introduce yourself to the chair and co-presenters"
      }), "\n", createVNode(_components.li, {
        children: "Confirm presentation order"
      }), "\n", createVNode(_components.li, {
        children: "Distribute any handouts"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "If you cannot attend, notify your session chair immediately."
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "technical-requirements",
      children: "Technical Requirements"
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
              children: "Category"
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
                children: "File Format"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "PowerPoint (.pptx) or PDF. Bring on USB drive. Email yourself a backup."
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Fonts"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Arial or Times New Roman only. Minimum 24-point size."
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Colors"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "High contrast for readability. Avoid red-green combinations."
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Equipment"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Projector and computer provided. Confirm special needs in advance."
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "presentation-best-practices",
      children: "Presentation Best Practices"
    }), "\n", createVNode(_components.h4, {
      id: "structure-your-talk",
      children: "Structure Your Talk"
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Start strong:"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Lead with your main finding or contribution"
        }), "\n", createVNode(_components.li, {
          children: "Use a real-world example to illustrate the problem"
        }), "\n", createVNode(_components.li, {
          children: ["State clearly what is ", createVNode(_components.strong, {
            children: "new"
          }), " about your work"]
        }), "\n"]
      }), createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "For each section:"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Theory:"
          }), " What is the problem? Why does it matter? What do you add?"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Methods:"
          }), " Briefly justify your approach and establish face validity"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Results:"
          }), " Report direction of effects and what the data tell you—not statistical tests"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Conclusion:"
          }), " What have we learned? What should be done next?"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "effective-delivery",
      children: "Effective Delivery"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800",
        children: [createVNode("h4", {
          class: "font-bold text-green-700 dark:text-green-400 mb-3",
          children: "✓ DO"
        }), createVNode("ul", {
          class: "space-y-2 text-sm",
          children: [createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Talk to the audience"
            }), ", not at them—make eye contact"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Describe your contribution"
            }), "; urge them to read the paper for details"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Pause after key points"
            }), " to let ideas land"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Acknowledge limitations"
            }), " candidly"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Plan for 13 minutes"
            }), " of content—easier to elaborate than cut"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Identify where you want feedback"
            }), " and ask for it"]
          })]
        })]
      }), createVNode("div", {
        class: "bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800",
        children: [createVNode("h4", {
          class: "font-bold text-red-700 dark:text-red-400 mb-3",
          children: "✗ DON’T"
        }), createVNode("ul", {
          class: "space-y-2 text-sm",
          children: [createVNode("li", {
            children: ["❌ ", createVNode("strong", {
              children: "Read from slides"
            }), " or provide comprehensive literature review"]
          }), createVNode("li", {
            children: ["❌ ", createVNode("strong", {
              children: "Explain every detail"
            }), " of your methodology"]
          }), createVNode("li", {
            children: ["❌ ", createVNode("strong", {
              children: "Describe instrument validation"
            }), " or sample characteristics"]
          }), createVNode("li", {
            children: ["❌ ", createVNode("strong", {
              children: "Save your conclusion"
            }), " as a surprise ending"]
          }), createVNode("li", {
            children: ["❌ ", createVNode("strong", {
              children: "Ignore time warnings"
            }), " from the chair"]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "slide-design",
      children: "Slide Design"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800",
        children: [createVNode("h4", {
          class: "font-bold text-green-700 dark:text-green-400 mb-3",
          children: "✓ DO"
        }), createVNode("ul", {
          class: "space-y-2 text-sm",
          children: [createVNode("li", {
            children: "✅ One key idea per slide"
          }), createVNode("li", {
            children: "✅ Minimal text—slides support your talk, they do not replace it"
          }), createVNode("li", {
            children: "✅ Simple, clear figures and tables"
          }), createVNode("li", {
            children: "✅ Large fonts (28+ point for body text)"
          })]
        })]
      }), createVNode("div", {
        class: "bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800",
        children: [createVNode("h4", {
          class: "font-bold text-red-700 dark:text-red-400 mb-3",
          children: "✗ DON’T"
        }), createVNode("ul", {
          class: "space-y-2 text-sm",
          children: [createVNode("li", {
            children: "❌ Cram multiple messages onto one slide"
          }), createVNode("li", {
            children: "❌ Use slides with tiny fonts or dense tables"
          }), createVNode("li", {
            children: "❌ Include every detail from your paper"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "handling-qa",
      children: "Handling Q&A"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Listen carefully; repeat questions if needed for the room to hear"
      }), "\n", createVNode(_components.li, {
        children: "Acknowledge good points even when they challenge your work"
      }), "\n", createVNode(_components.li, {
        children: "If you don’t know an answer, say so and suggest how you would investigate it"
      }), "\n", createVNode(_components.li, {
        children: "Invite questioners to continue the conversation afterward"
      }), "\n", createVNode(_components.li, {
        children: "Keep responses concise to allow multiple questions"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "interactive-poster-presentations",
      children: "Interactive (Poster) Presentations"
    }), "\n", createVNode(_components.p, {
      children: "Interactive sessions provide in-depth, informal feedback on work-in-progress through poster or roundtable format. Senior scholars attend specifically to provide feedback."
    }), "\n", createVNode(_components.h3, {
      id: "poster-specifications",
      children: "Poster Specifications"
    }), "\n", createVNode("div", {
      class: "bg-amber-50 dark:bg-slate-800 p-5 rounded-lg border-l-4 border-amber-500 my-6",
      children: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Specification"
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
                children: "Maximum size"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "A0 (841×1189 mm / 33×47 inches)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Orientation"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Portrait (not landscape)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Font size"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Readable from 1+ meters (body 24+ pt, headings 36+ pt)"
            })]
          }), createVNode(_components.tr, {
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
              children: "English only"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Required elements"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Title, authors, affiliations, contact email for lead author"
            })]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "effective-poster-design",
      children: "Effective Poster Design"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800",
        children: [createVNode("h4", {
          class: "font-bold text-green-700 dark:text-green-400 mb-3",
          children: "✓ DO"
        }), createVNode("ul", {
          class: "space-y-2 text-sm",
          children: [createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Structure clearly:"
            }), " Problem → Method → Key Finding → Implication"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Lead with visuals:"
            }), " Use figures, charts, and diagrams"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Limit text:"
            }), " Use bullet points; avoid dense paragraphs"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Create visual hierarchy:"
            }), " Most important elements immediately visible"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Include a “takeaway box”:"
            }), " 2-3 sentences summarizing contribution"]
          }), createVNode("li", {
            children: ["✅ ", createVNode("strong", {
              children: "Prepare a 5-minute overview:"
            }), " Most visitors want a brief guided tour"]
          })]
        })]
      }), createVNode("div", {
        class: "bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800",
        children: [createVNode("h4", {
          class: "font-bold text-red-700 dark:text-red-400 mb-3",
          children: "✗ DON’T"
        }), createVNode("ul", {
          class: "space-y-2 text-sm",
          children: [createVNode("li", {
            children: ["❌ ", createVNode("strong", {
              children: "Reproduce your paper on a poster"
            }), "—posters are visual summaries"]
          }), createVNode("li", {
            children: ["❌ ", createVNode("strong", {
              children: "Use tiny fonts"
            }), " or dense text blocks"]
          }), createVNode("li", {
            children: ["❌ ", createVNode("strong", {
              children: "Show every analysis"
            }), "—focus on core findings"]
          }), createVNode("li", {
            children: ["❌ ", createVNode("strong", {
              children: "Forget contact information"
            }), "—visitors should be able to follow up"]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "during-your-poster-session",
      children: "During Your Poster Session"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Prepare to facilitate discussion:"
        }), " Bring business cards, paper, sticky notes, and markers"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Stay at your poster"
        }), " for the entire session"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Engage visitors proactively:"
        }), " ", createVNode(_components.em, {
          children: "“Would you like me to walk you through it?”"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Be ready to discuss"
        }), " limitations, alternative approaches, and next steps"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If few people visit:"
        }), " Use the time to visit other posters, build connections, and observe effective designs"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "maximizing-engagement",
      children: "Maximizing Engagement"
    }), "\n", createVNode($$Features, {
      columns: 3,
      items: [{
        title: 'Before Your Presentation',
        description: 'Arrive early to chat with attendees. Gauge familiarity with your topic. Identify potential discussants.',
        icon: 'lucide:clock'
      }, {
        title: 'During Your Presentation',
        description: 'Watch for reactions; adjust pacing. Connect to other session papers. Use inclusive language.',
        icon: 'lucide:presentation'
      }, {
        title: 'After Your Presentation',
        description: 'Stay available after session. Exchange contact info. Follow up within a week. Consider feedback for revision.',
        icon: 'lucide:mail'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "accessibility-considerations",
      children: "Accessibility Considerations"
    }), "\n", createVNode(_components.p, {
      children: "Create presentations that work for all attendees:"
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Use ", createVNode(_components.strong, {
            children: "high-contrast color schemes"
          }), " (avoid light text on light backgrounds)"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Describe all visual elements"
          }), " verbally (charts, graphs, images)"]
        }), "\n", createVNode(_components.li, {
          children: ["Speak clearly at a ", createVNode(_components.strong, {
            children: "moderate pace"
          })]
        }), "\n", createVNode(_components.li, {
          children: "Avoid discipline-specific jargon when possible; define necessary terms"
        }), "\n", createVNode(_components.li, {
          children: ["Provide ", createVNode(_components.strong, {
            children: "handouts"
          }), " for those who want to follow along"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", createVNode("div", {
      class: "space-y-4 my-6",
      children: [createVNode("details", {
        class: "bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("summary", {
          class: "p-4 cursor-pointer font-semibold",
          children: "”My presentation won’t load”"
        }), createVNode("div", {
          class: "p-4 pt-0 text-sm",
          children: createVNode("ul", {
            class: "space-y-2",
            children: [createVNode("li", {
              children: "• This is why you emailed yourself a backup—download from email"
            }), createVNode("li", {
              children: "• PDF format is more reliable than PowerPoint if compatibility issues arise"
            }), createVNode("li", {
              children: "• Have your 1-page handout ready; you can present from that if necessary"
            })]
          })
        })]
      }), createVNode("details", {
        class: "bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("summary", {
          class: "p-4 cursor-pointer font-semibold",
          children: "”I’m running out of time”"
        }), createVNode("div", {
          class: "p-4 pt-0 text-sm",
          children: createVNode("ul", {
            class: "space-y-2",
            children: [createVNode("li", {
              children: "• Skip to your conclusion; summarize findings briefly"
            }), createVNode("li", {
              children: "• Offer to discuss details during Q&A or afterward"
            }), createVNode("li", {
              children: ["• ", createVNode("strong", {
                children: "Never speak faster"
              }), "—it reduces comprehension"]
            })]
          })
        })]
      }), createVNode("details", {
        class: "bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("summary", {
          class: "p-4 cursor-pointer font-semibold",
          children: "”Someone is challenging my work aggressively”"
        }), createVNode("div", {
          class: "p-4 pt-0 text-sm",
          children: createVNode("ul", {
            class: "space-y-2",
            children: [createVNode("li", {
              children: "• Listen fully, then acknowledge the valid elements of their critique"
            }), createVNode("li", {
              children: "• You do not need to defend every choice in real-time"
            }), createVNode("li", {
              children: ["• ", createVNode("em", {
                children: "“That is an excellent point I will consider as I revise”"
              }), " is always appropriate"]
            }), createVNode("li", {
              children: "• Session chairs should redirect hostile questions; make eye contact if you need support"
            })]
          })
        })]
      }), createVNode("details", {
        class: "bg-slate-100 dark:bg-slate-800 rounded-lg",
        children: [createVNode("summary", {
          class: "p-4 cursor-pointer font-semibold",
          children: "”No one is asking questions”"
        }), createVNode("div", {
          class: "p-4 pt-0 text-sm",
          children: createVNode("ul", {
            class: "space-y-2",
            children: [createVNode("li", {
              children: "• Session chairs typically have prepared questions"
            }), createVNode("li", {
              children: ["• You can prompt: ", createVNode("em", {
                children: "“One question I have gotten before is…”"
              })]
            }), createVNode("li", {
              children: "• Silence does not mean your work is not interesting—audiences may be processing"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Can I distribute handouts?"
      }), "\nYes. Bring 30-40 copies. A 1-page summary with your key contribution, methods, and contact information is most effective."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What if my co-author is presenting instead of me?"
      }), "\nEither author can present. Coordinate in advance and ensure the presenter can answer methodology questions."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Are sessions recorded?"
      }), "\nCheck the current year’s conference policies. If sessions are recorded, presenters will be notified in advance."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Can I include video or multimedia?"
      }), "\nYes, but embed all media files in your presentation and test thoroughly beforehand. Have a static backup slide in case of technical issues."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What’s the dress code?"
      }), "\nSmart casual for all events. Conference rooms can vary in temperature; bring layers."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$CallToAction, {
      title: "Questions About Your Specific Conference?",
      subtitle: "Contact the program chairs or your track chair listed on the current conference page",
      actions: [{
        variant: 'primary',
        text: 'View Current Conference',
        href: '/conferences',
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

const url = "/conferences/presentation-guidelines";
const file = "/home/user/website/src/pages/conferences/presentation-guidelines.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/conferences/presentation-guidelines.mdx";
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
