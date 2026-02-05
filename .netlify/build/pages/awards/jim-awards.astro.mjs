import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Note } from '../../chunks/Note_DHGj1dwJ.mjs';
import '../../chunks/Features_DWu80yvl.mjs';
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
  "title": "Journal of International Marketing Awards",
  "description": "The Hans B. Thorelli Award and S. Tamer Cavusgil Award recognizing excellence in international marketing scholarship.",
  "readingTime": 8
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "hans-b-thorelli-award",
    "text": "Hans B. Thorelli Award"
  }, {
    "depth": 3,
    "slug": "what-it-recognizes",
    "text": "What It Recognizes"
  }, {
    "depth": 3,
    "slug": "about-hans-b-thorelli",
    "text": "About Hans B. Thorelli"
  }, {
    "depth": 3,
    "slug": "recent-recipients",
    "text": "Recent Recipients"
  }, {
    "depth": 3,
    "slug": "all-recipients",
    "text": "All Recipients"
  }, {
    "depth": 4,
    "slug": "2020s",
    "text": "2020s"
  }, {
    "depth": 4,
    "slug": "2010s",
    "text": "2010s"
  }, {
    "depth": 4,
    "slug": "2000s",
    "text": "2000s"
  }, {
    "depth": 4,
    "slug": "1990s",
    "text": "1990s"
  }, {
    "depth": 2,
    "slug": "s-tamer-cavusgil-award",
    "text": "S. Tamer Cavusgil Award"
  }, {
    "depth": 3,
    "slug": "what-it-recognizes-1",
    "text": "What It Recognizes"
  }, {
    "depth": 3,
    "slug": "about-s-tamer-cavusgil",
    "text": "About S. Tamer Cavusgil"
  }, {
    "depth": 3,
    "slug": "recent-recipients-1",
    "text": "Recent Recipients"
  }, {
    "depth": 3,
    "slug": "all-recipients-1",
    "text": "All Recipients"
  }, {
    "depth": 4,
    "slug": "2020s-1",
    "text": "2020s"
  }, {
    "depth": 4,
    "slug": "2010s-1",
    "text": "2010s"
  }, {
    "depth": 4,
    "slug": "2000s-1",
    "text": "2000s"
  }, {
    "depth": 4,
    "slug": "1990s-1",
    "text": "1990s"
  }];
}
function _createMdxContent(props) {
  const _components = {
    div: "div",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "Journal of International Marketing Editorial Board"
      }), " presents two annual awards at the AMA Summer Educators’ Conference, recognizing published articles that have made transformative contributions to international marketing scholarship."]
    }), "\n", createVNode($$Note, {
      title: "Selection Process",
      description: "These awards are determined through Editorial Board review of published JIM articles; authors do not submit nominations."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "hans-b-thorelli-award",
      children: "Hans B. Thorelli Award"
    }), "\n", createVNode(_components.h3, {
      id: "what-it-recognizes",
      children: "What It Recognizes"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "Hans B. Thorelli Award"
      }), " honors an article published in the ", createVNode(_components.em, {
        children: "Journal of International Marketing"
      }), " that has made the most significant and ", createVNode(_components.strong, {
        children: "long-term contribution"
      }), " to international marketing theory or practice."]
    }), "\n", createVNode(_components.p, {
      children: "Re-established as a “five-year-plus” award in 2005, this distinction celebrates research whose influence has grown and endured over time, demonstrating lasting impact on how scholars and practitioners understand international marketing."
    }), "\n", createVNode(_components.h3, {
      id: "about-hans-b-thorelli",
      children: "About Hans B. Thorelli"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border-l-4 border-blue-500 my-6",
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Professor Hans B. Thorelli (1921–2009)"
        }), " was a pioneer whose work fundamentally shaped international marketing research and education."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Scholarly Contributions:"
        }), " Professor Thorelli directed the first representative study of consumer experience in a developing country (Thailand), providing groundbreaking empirical evidence about consumer behavior in emerging markets. This work established new standards for cross-cultural consumer research."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Educational Innovation:"
        }), " He created the ", createVNode(_components.strong, {
          children: "International Operations Simulation (INTOP)"
        }), " at the University of Chicago in 1964—the first marketing-oriented simulation designed to teach international business decision-making. INTOP became widely adopted in business schools worldwide."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Academic Leadership:"
        }), " Professor Thorelli served as ", createVNode(_components.strong, {
          children: "Distinguished Professor of Business Administration Emeritus at Indiana University"
        }), ", authoring over 100 articles and 11 books spanning marketing, international business, strategic management, and public policy."]
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Professor Thorelli’s career exemplified the integration of rigorous scholarship with practical application, bridging academic research and business education in ways that continue influencing the field today."
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "recent-recipients",
      children: "Recent Recipients"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article Title"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Jan-Benedict E.M. Steenkamp"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Global Versus Local Consumer Culture: Theory, Measurement, and Future Research Directions"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Katharina Petra Zeugner-Roth, Vesna Žabkar, Adamantios Diamantopoulos"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Consumer Ethnocentrism, National Identity, and Consumer Cosmopolitanism as Drivers of Consumer Behavior"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Fabian Bartsch, Petra Riefler, Adamantios Diamantopoulos"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "A Taxonomy and Review of Positive Consumer Dispositions Toward Foreign Countries and Globalization"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2021"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Carlos M.P. Sousa, Frank Bradley"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Cultural Distance and Psychic Distance: Two Peas in a Pod?"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2020"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Leonidas C. Leonidou, Saeed Samiee, Bilge Aykol, Michael A. Talias"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Antecedents and Outcomes of Exporter-Importer Relationship Quality"
              })
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "all-recipients",
      children: "All Recipients"
    }), "\n", createVNode(_components.h4, {
      id: "2020s",
      children: "2020s"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Source"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Jan-Benedict E.M. Steenkamp"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Versus Local Consumer Culture: Theory, Measurement, and Future Research Directions"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 27, No. 1 (2019)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Katharina Petra Zeugner-Roth, Vesna Žabkar, Adamantios Diamantopoulos"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Consumer Ethnocentrism, National Identity, and Consumer Cosmopolitanism as Drivers of Consumer Behavior"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 23, No. 2 (2015)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Fabian Bartsch, Petra Riefler, Adamantios Diamantopoulos"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "A Taxonomy and Review of Positive Consumer Dispositions Toward Foreign Countries and Globalization"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 24, No. 1 (2016)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2021"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Carlos M.P. Sousa, Frank Bradley"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Cultural Distance and Psychic Distance: Two Peas in a Pod?"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 14, No. 1 (2006)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2020"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Leonidas C. Leonidou, Saeed Samiee, Bilge Aykol, Michael A. Talias"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Antecedents and Outcomes of Exporter-Importer Relationship Quality"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 22, No. 2 (2014)"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "2010s",
      children: "2010s"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Source"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2019"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Douglas Dow"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "A Note on Psychological Distance and Export Market Selection"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 8, No. 1 (2000)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2018"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Anna Shaojie Cui, David A. Griffith, S. Tamer Cavusgil"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The Influence of Competitive Intensity and Market Dynamism on Knowledge Management Capabilities"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 13, No. 3 (2005)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2017"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Jean-Claude Usunier, Ghislaine Cestre"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Product Ethnicity: Revisiting the Match Between Products and Countries"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 15, No. 3 (2007)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2016"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Mark Cleveland, Michel Laroche, Nicolas Papadopoulos"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Cosmopolitanism, Consumer Ethnocentrism, and Materialism: An Eight-Country Study"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 17, No. 1 (2009)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2015"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Goksel Yalcinkaya, Roger J. Calantone, David A. Griffith"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "An Examination of Exploration and Exploitation Capabilities"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 15, No. 4 (2007)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2013/2014"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Adamantios Diamantopoulos, Nikolaos Kakkos"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Managerial Assessments of Export Performance"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 15, No. 3 (2007)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2012"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Rajeev Batra"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Marketing Issues and Challenges in Transitional Economies"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 5, No. 4 (1997)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2011"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Øystein Moen, Per Servais"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Born Global or Gradual Global?"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 10, No. 3 (2002)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2010"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Lawrence S. Welch, Reijo K. Luostarinen"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inward-Outward Connections in Internationalization"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 1, No. 1 (1993)"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "2000s",
      children: "2000s"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Source"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2009"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sylvie Chetty, Colin Campbell-Hunt"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "A Strategic Approach to Internationalization"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 12, No. 1 (2004)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2008"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Oliver Burgel, Gordon C. Murray"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The International Market Entry Choices of Start-Up Companies"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 8, No. 2 (2000)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2007"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "C. Samuel Craig, Susan P. Douglas"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Configural Advantage in Global Markets"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 8, No. 1 (2000)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2006"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Leonidas C. Leonidou, Constantine S. Katsikeas, Nigel F. Piercy"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Identifying Managerial Influences on Exporting"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 6, No. 2 (1998)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2005"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Gary Knight"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Entrepreneurship and Marketing Strategy: The SME Under Globalization"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 8, No. 2 (2000)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2004"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Preet S. Aulakh, Masaaki Kotabe"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "An Assessment of Theoretical and Methodological Development in International Marketing"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 1, No. 2 (1993)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2003"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Naresh K. Malhotra, James Agarwal, Francis M. Ulgado"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Internationalization and Entry Modes: A Multitheoretical Framework"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 11, No. 4 (2003)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2002"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Carl Arthur Solberg"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The Perennial Issue of Adaptation or Standardization"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 10, No. 3 (2002)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2001"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Janet Y. Murray"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Strategic Alliance-Based Global Sourcing Strategy"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 9, No. 4 (2001)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2000"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "George S. Yip, Javier Gomez Biscarri, Joseph A. Monti"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The Role of the Internationalization Process in Performance"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 8, No. 3 (2000)"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "1990s",
      children: "1990s"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Source"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1999"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Marian V. Jones"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The Internationalization of Small High-Technology Firms"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 7, No. 4 (1999)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1998"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Shaoming Zou, Charles R. Taylor, Gregory E. Osland"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The EXPERF Scale: A Cross-National Generalized Export Performance Measure"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 6, No. 3 (1998)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1997"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Carl Arthur Solberg"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "A Framework for Analysis of Strategy Development in Globalizing Markets"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 5, No. 1 (1997)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1996"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Terry Clark, Daniel Rajaratnam, Timothy Smith"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Toward a Theory of International Services"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 4, No. 2 (1996)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1995"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Esra Gencturk, Robert W. Reukert, Terry L. Childers"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "International Marketing Involvement: The Construct, Dimensionality, and Measurement"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 3, No. 4 (1995)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1994"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Johann P. Du Preez, Adamantios Diamantopoulos, Bodo B. Schlegelmilch"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Product Standardization and Attribute Saliency"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 2, No. 1 (1994)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1993"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Bernard Simonin, Vern Terpstra"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Strategic Alliances in the Triad: An Exploratory Study"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 1, No. 1 (1993)"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "s-tamer-cavusgil-award",
      children: "S. Tamer Cavusgil Award"
    }), "\n", createVNode(_components.h3, {
      id: "what-it-recognizes-1",
      children: "What It Recognizes"
    }), "\n", createVNode(_components.p, {
      children: ["Established in 1998, the ", createVNode(_components.strong, {
        children: "S. Tamer Cavusgil Award"
      }), " honors the author(s) of one article published in the ", createVNode(_components.em, {
        children: "Journal of International Marketing"
      }), " each calendar year that has made the most significant contribution to ", createVNode(_components.strong, {
        children: "advancing the practice of international marketing management"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "This award celebrates research that bridges rigorous scholarship with managerial relevance, providing actionable insights that shape how practitioners approach international marketing challenges."
    }), "\n", createVNode(_components.h3, {
      id: "about-s-tamer-cavusgil",
      children: "About S. Tamer Cavusgil"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border-l-4 border-amber-500 my-6",
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Professor S. Tamer Cavusgil"
        }), " is the Fuller E. Callaway Professorial Chair and Director of the Institute of International Business at Georgia State University’s Robinson College of Business. His career has fundamentally shaped international marketing as both an academic discipline and field of practice."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Founding Editor of JIM:"
        }), " Professor Cavusgil established the ", createVNode(_components.em, {
          children: "Journal of International Marketing"
        }), " in 1993, creating the premier outlet for international marketing scholarship. Under his founding editorship, JIM became the leading journal bridging academic rigor with managerial relevance."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Pioneering Research:"
        }), " His groundbreaking work on the internationalization process of firms transformed how scholars understand how companies expand globally. This research stream, among the most frequently cited in international marketing, established frameworks still used today."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Educational Leadership:"
        }), " Professor Cavusgil is recognized nationally as a leader in promoting international business education, organizing landmark conferences and developing training programs adopted by business schools worldwide."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Bridging Academic and Practice Communities:"
        }), " Throughout his career, Professor Cavusgil has maintained strong connections with the practitioner community, ensuring research addresses real managerial challenges while maintaining scholarly rigor."]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "recent-recipients-1",
      children: "Recent Recipients"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article Title"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2023"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ayşegül Özsomer, Bernard Simonin, Timo Mandler"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Marketing Agility in Subsidiaries: Market Orientation and Marketing Program Standardization as the ‘Twin Engines’ of Performance"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Stanford A. Westjohn, Peter Magnusson, George R. Franke, Yi Peng"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Trust Propensity Across Cultures: The Role of Collectivism"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2021"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "David A. Griffith, Tereza Dean, Jessica J. Hoppner"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Choices and Consequences: Recommendations for an Improved Understanding of Cultural Distance"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2020"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Jan-Benedict E.M. Steenkamp"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Global Brand Building and Management in the Digital Age"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2019"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Shahin Assadinia, Nathaniel Boso, Magnus Hultman, Matthew Robson"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.em, {
                children: "Do Export Learning Processes Affect Sales Growth in Exporting Activities?"
              })
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "all-recipients-1",
      children: "All Recipients"
    }), "\n", createVNode(_components.h4, {
      id: "2020s-1",
      children: "2020s"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Source"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2023"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ayşegül Özsomer, Bernard Simonin, Timo Mandler"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Marketing Agility in Subsidiaries"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 31, No. 2 (2023)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Stanford A. Westjohn, Peter Magnusson, George R. Franke, Yi Peng"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Trust Propensity Across Cultures"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 30, No. 1 (2022)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2021"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "David A. Griffith, Tereza Dean, Jessica J. Hoppner"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Choices and Consequences: Cultural Distance"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 29, No. 3 (2021)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2020"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Jan-Benedict E.M. Steenkamp"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Brand Building in the Digital Age"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 28, No. 1 (2020)"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "2010s-1",
      children: "2010s"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Source"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2019"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Shahin Assadinia, Nathaniel Boso, Magnus Hultman, Matthew Robson"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Do Export Learning Processes Affect Sales Growth?"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 27, No. 3 (2019)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2018"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Brian Chabowski, Pinar Kekec, Neil A. Morgan, G. Tomas M. Hult, et al."
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "An Assessment of the Exporting Literature"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 26, No. 1 (2018)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2017"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Martin Eisend, Patric Hartmann, Vanessa Apaolaza"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Who Buys Counterfeit Luxury Brands?"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 25, No. 4 (2017)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2016"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "V. Kumar, Anita Pansari"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "National Culture, Economy and Customer Lifetime Value"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 24, No. 1 (2016)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2015"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Yuliya Strizhakova, Robin A. Coulter"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Drivers of Local Relative to Global Brand Purchases"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 23, No. 1 (2015)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2014"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "V. Kumar"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Understanding Cultural Differences in Innovation"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 22, No. 3 (2014)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2013"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Margaret Fletcher, Simon Harris, Robert Glenn Richey Jr."
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Internationalization Knowledge: What, Why, Where, and When?"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 21, No. 3 (2013)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2012"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ayşegül Özsomer"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The Interplay Between Global and Local Brands"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 20, No. 2 (2012)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2011"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Susan P. Douglas, C. Samuel Craig"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Convergence and Divergence: A Semiglobal Marketing Strategy"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 19, No. 1 (2011)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2010"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Michelle D. Steward, Felicia N. Morgan, Lawrence A. Crosby, Ajith Kumar"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Cross-National Differences in Organizational Buyers’ Expectations"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 18, No. 1 (2010)"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "2000s-1",
      children: "2000s"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Source"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2009"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Martin S. Roth, Satish Jayachandran, Mourad Dakhli, Deborah A. Colton"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Subsidiary Use of Foreign Marketing Knowledge"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 17, No. 1 (2009)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2008"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ruby P. Lee, Qimei Chen, Daekwan Kim, Jean L. Johnson"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Knowledge Transfer Between MNC Headquarters and Subsidiaries"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 16, No. 2 (2008)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2007"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "G. Tomas M. Hult, S. Tamer Cavusgil, Seyda Deligonul, et al."
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "What Drives Performance in Globally Focused Marketing Organizations?"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 15, No. 2 (2007)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2006"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Susan P. Douglas, C. Samuel Craig"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "On Improving the Conceptual Foundations of International Marketing Research"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 14, No. 1 (2006)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2005"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Christian Homburg, Sabine Kuester, Nikolas Beutin, Ajay Menon"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Determinants of Customer Benefits in Business-to-Business Markets"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 13, No. 3 (2005)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2004"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Isabelle Schuiling, Jean-Noël Kapferer"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Real Differences Between Local and International Brands"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 12, No. 4 (2004)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2003"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Peter G.P. Walters, Saeed Samiee"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Marketing Strategy in Emerging Markets: The Case of China"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 11, No. 1 (2003)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2002"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Robert T. Green, Tasman Smith"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Countering Brand Counterfeiters"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 10, No. 4 (2002)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2001"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Susan P. Douglas, C. Samuel Craig, Edwin J. Nijssen"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Integrating Branding Strategy Across Markets"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 9, No. 2 (2001)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "2000"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "C. Samuel Craig, Susan P. Douglas"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Configural Advantage in Global Markets"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 8, No. 1 (2000)"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "1990s-1",
      children: "1990s"
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
              children: "Authors"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Article"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Source"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1999"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Pierre Berthon, Leyland Pitt, Constantine Katsikeas, Jean Paul Berthon"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Virtual Services Go International"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 7, No. 3 (1999)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "1998"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Masaaki Kotabe, Janet Y. Murray, Rajshekhar G. Javalgi"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Sourcing of Services and Market Performance"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Vol. 6, No. 4 (1998)"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$CallToAction, {
      title: "AMA Global Marketing SIG Awards",
      subtitle: "The SIG also presents awards recognizing career contributions to international marketing",
      actions: [{
        variant: 'primary',
        text: 'View SIG Awards',
        href: '/awards/sig-awards',
        icon: 'lucide:award'
      }, {
        text: 'Back to All Awards',
        href: '/awards',
        icon: 'lucide:arrow-left'
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

const url = "/awards/jim-awards";
const file = "/home/user/website/src/pages/awards/jim-awards.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/awards/jim-awards.mdx";
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
