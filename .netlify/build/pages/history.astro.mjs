import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Features } from '../chunks/Features_DWu80yvl.mjs';
import { $ as $$Steps } from '../chunks/Steps_D5j76lhX.mjs';
import { $ as $$Stats } from '../chunks/Stats_BVNtIOGE.mjs';
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
  "title": "History",
  "description": "The history of the AMA Global Marketing SIG from its founding in 1994 to today's global community of 500+ scholars.",
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "founding-the-sig-1994",
    "text": "Founding the SIG (1994)"
  }, {
    "depth": 2,
    "slug": "key-milestones",
    "text": "Key Milestones"
  }, {
    "depth": 2,
    "slug": "sig-chairs",
    "text": "SIG Chairs"
  }, {
    "depth": 2,
    "slug": "legacy--impact",
    "text": "Legacy & Impact"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    div: "div",
    h2: "h2",
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
    children: [createVNode($$Stats, {
      stats: [{
        title: 'Founded',
        amount: '1994'
      }, {
        title: 'Years Active',
        amount: '30+'
      }, {
        title: 'Members Worldwide',
        amount: '500+'
      }, {
        title: 'Countries Represented',
        amount: '50+'
      }]
    }), "\n", createVNode(_components.h2, {
      id: "founding-the-sig-1994",
      children: "Founding the SIG (1994)"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "AMA Global Marketing Special Interest Group"
      }), " was founded in 1994 in response to the growing importance of international marketing in both academic research and business practice. The early 1990s marked a period of accelerating globalization—NAFTA took effect, the European Union formed, and multinational corporations expanded rapidly into emerging markets. Marketing scholars and practitioners recognized that traditional domestic marketing frameworks inadequately addressed the complexities of cultural differences, cross-border competition, and global strategy."]
    }), "\n", createVNode(_components.p, {
      children: "Six scholars from leading U.S. business schools came together to establish a dedicated forum within the American Marketing Association for those focused on international marketing."
    }), "\n", createVNode($$Features, {
      title: "Founding Members (1994)",
      subtitle: "The visionaries who established the AMA Global Marketing SIG",
      columns: 3,
      items: [{
        title: 'Philip R. Cateora',
        description: 'University of Colorado',
        icon: 'lucide:graduation-cap'
      }, {
        title: 'Michael R. Czinkota',
        description: 'Georgetown University',
        icon: 'lucide:graduation-cap'
      }, {
        title: 'Warren J. Keegan',
        description: 'Pace University',
        icon: 'lucide:graduation-cap'
      }, {
        title: 'Diana R. Lawson',
        description: 'University of Maine',
        icon: 'lucide:graduation-cap'
      }, {
        title: 'Stephen W. Miller',
        description: 'Saint Louis University',
        icon: 'lucide:graduation-cap'
      }, {
        title: 'Camille P. Schuster',
        description: 'Xavier University',
        icon: 'lucide:graduation-cap'
      }]
    }), "\n", createVNode(_components.p, {
      children: "These founders envisioned a community that would facilitate interaction among academics, practitioners, and policymakers; promote international perspectives in marketing education; foster rigorous research on global marketing challenges; and disseminate insights across the field."
    }), "\n", createVNode(_components.p, {
      children: "The SIG quickly became one of the most active special interest groups within the AMA, attracting scholars who recognized that understanding international markets required specialized knowledge and cross-cultural perspectives."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "key-milestones",
      children: "Key Milestones"
    }), "\n", createVNode($$Steps, {
      title: "Our Journey Through Three Decades",
      items: [{
        title: '1994 — Founding',
        description: 'SIG officially established with founding meeting at AMA Educators\' Conference.',
        icon: 'lucide:flag'
      }, {
        title: '1998 — Global Insights Newsletter',
        description: 'Launched quarterly newsletter featuring research summaries, teaching resources, and practitioner perspectives.',
        icon: 'lucide:newspaper'
      }, {
        title: 'Late 1990s — UK Partnership',
        description: 'Established partnership with Academy of Marketing (UK) for bi-annual joint international conferences, strengthening transatlantic research collaboration.',
        icon: 'lucide:users'
      }, {
        title: 'Early 2000s — Going Global',
        description: 'Began hosting dedicated international conferences outside the United States—in Europe, Latin America, and Asia—reflecting the global nature of membership.',
        icon: 'lucide:globe'
      }, {
        title: 'Mid-2000s — Doctoral Consortium',
        description: 'Established Doctoral Consortium as pre-conference program, pairing doctoral students with senior scholars for mentorship and research development.',
        icon: 'lucide:graduation-cap'
      }, {
        title: '2010s — Awards Programs',
        description: 'Formalized awards: Significant Contributions to Global Marketing Award recognizing career achievements, and Excellence in Research Award celebrating innovative scholarship.',
        icon: 'lucide:award'
      }, {
        title: '2015+ — Journal Collaboration',
        description: 'Expanded collaboration with the Journal of International Marketing on special issues addressing digital globalization, sustainability, and cultural intelligence.',
        icon: 'lucide:book-open'
      }, {
        title: 'Present — Global Community',
        description: 'Conferences regularly attract 150-250 participants from 40+ countries; membership exceeds 500 scholars spanning six continents.',
        icon: 'lucide:earth'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "sig-chairs",
      children: "SIG Chairs"
    }), "\n", createVNode(_components.p, {
      children: "The following scholars have led the SIG as Chair, typically serving two-year terms:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Years"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Chair"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Institution"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1994–1995"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Camille P. Schuster"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Xavier University"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1995–1997"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Diana Lawson"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Maine"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1997–2001"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "William J. Lundstrom"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Cleveland State University"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2001–2005"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "David A. Griffith"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Michigan State University"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2005–2007"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Camille P. Schuster"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Cal State San Marcos"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2007–2009"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Frank J. Franzak"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Virginia Commonwealth University"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2009–2011"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Kate Gillespie"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Texas at Austin"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2011–2013"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Esra Gencturk"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ozyegin University"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2013–2015"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Frank Franzak"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Virginia Commonwealth University"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2015–2017"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Annie Cui"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "West Virginia University"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2017–2021"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Costas Katsikeas"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Leeds University Business School"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2021–present"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Goksel Yalcinkaya"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of New Hampshire"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Note:"
        }), " Camille P. Schuster (founding member) and Frank Franzak each served two non-consecutive terms as Chair, demonstrating sustained commitment to SIG leadership."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "legacy--impact",
      children: "Legacy & Impact"
    }), "\n", createVNode(_components.p, {
      children: "From six founding members in 1994 to a global community of 500+ scholars across 50+ countries, the AMA Global Marketing SIG has become the premier forum for international marketing scholarship within the American Marketing Association."
    }), "\n", createVNode($$Features, {
      title: "Our Impact Across Multiple Dimensions",
      columns: 2,
      items: [{
        title: 'Research Development',
        description: 'Conferences have launched research collaborations spanning continents and disciplines. Work presented at SIG conferences has evolved into highly cited publications shaping how scholars understand cultural differences in consumer behavior, international market entry strategies, global brand management, and cross-border business relationships.',
        icon: 'lucide:microscope'
      }, {
        title: 'Doctoral Education',
        description: 'The doctoral consortium has mentored generations of emerging scholars, many of whom now lead international marketing programs at research universities worldwide. This mentorship model—pairing students with senior scholars for intensive feedback—has become a valued feature of the SIG\'s annual conference.',
        icon: 'lucide:graduation-cap'
      }, {
        title: 'Field Building',
        description: 'The SIG helped establish international marketing as a distinct area of specialization. Early conferences provided forums where scholars could present international work that might not fit traditional domestic marketing tracks, creating space for methodological innovations in cross-cultural research.',
        icon: 'lucide:building'
      }, {
        title: 'Bridging Research & Practice',
        description: 'Through partnerships with the Journal of International Marketing and connections with multinational corporations, the SIG maintains the founding vision of connecting rigorous scholarship with managerial relevance. Awards programs recognize research that advances both theory and practice.',
        icon: 'lucide:arrow-left-right'
      }, {
        title: 'Global Community',
        description: 'The SIG\'s international membership and conference locations reflect the global nature of the field. Scholars from emerging markets, established economies, and transition economies collaborate on research addressing universal questions about marketing across borders while respecting local contexts.',
        icon: 'lucide:globe'
      }]
    }), "\n", createVNode(_components.p, {
      children: "As international marketing continues evolving—shaped by digital transformation, sustainability imperatives, geopolitical shifts, and changing patterns of globalization—the SIG remains committed to its founding mission of advancing scholarship, education, and practice in this dynamic field."
    }), "\n", createVNode($$CallToAction, {
      title: "Learn More About Our Leadership",
      subtitle: "For information about current board members and complete leadership records",
      actions: [{
        variant: 'primary',
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

const url = "/history";
const file = "/home/user/website/src/pages/history.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/history.mdx";
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
