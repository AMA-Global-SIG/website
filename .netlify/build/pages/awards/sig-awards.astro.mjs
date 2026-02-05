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
  "title": "AMA Global Marketing SIG Awards",
  "description": "Details and past recipients of the Significant Contributions to Global Marketing Award and Excellence in Global Marketing Research Award.",
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "significant-contributions-to-global-marketing-award",
    "text": "Significant Contributions to Global Marketing Award"
  }, {
    "depth": 3,
    "slug": "what-it-recognizes",
    "text": "What It Recognizes"
  }, {
    "depth": 3,
    "slug": "eligibility",
    "text": "Eligibility"
  }, {
    "depth": 3,
    "slug": "nomination-process",
    "text": "Nomination Process"
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
    "depth": 2,
    "slug": "excellence-in-global-marketing-research-award",
    "text": "Excellence in Global Marketing Research Award"
  }, {
    "depth": 3,
    "slug": "what-it-recognizes-1",
    "text": "What It Recognizes"
  }, {
    "depth": 2,
    "slug": "nomination-information",
    "text": "Nomination Information"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "The AMA Global Marketing SIG presents two annual awards at the SIG conference, recognizing scholars whose research has transformed how we understand and practice international marketing. These awards celebrate both career-defining contributions and innovative research that advances the field."
    }), "\n", createVNode($$Note, {
      title: "Recognition Ceremony",
      description: "Awards are presented during the conference's recognition ceremony, bringing together past recipients and the international marketing community."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "significant-contributions-to-global-marketing-award",
      children: "Significant Contributions to Global Marketing Award"
    }), "\n", createVNode(_components.h3, {
      id: "what-it-recognizes",
      children: "What It Recognizes"
    }), "\n", createVNode(_components.p, {
      children: ["This award honors scholars whose ", createVNode(_components.strong, {
        children: "career-spanning work"
      }), " has fundamentally shaped international marketing as a discipline. Recipients have produced influential bodies of research that define how scholars and practitioners understand global markets, cross-cultural consumer behavior, international strategy, and the practice of marketing across borders."]
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "The award celebrates scholars whose publications have:"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Defined core theoretical frameworks in international marketing"
        }), "\n", createVNode(_components.li, {
          children: "Generated substantial citation impact across decades"
        }), "\n", createVNode(_components.li, {
          children: "Influenced how researchers approach global marketing phenomena"
        }), "\n", createVNode(_components.li, {
          children: "Shaped both academic inquiry and business practice"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "eligibility",
      children: "Eligibility"
    }), "\n", createVNode($$Features, {
      columns: 2,
      items: [{
        title: 'Discipline-Defining Research',
        description: 'Research programs that have defined international marketing subdisciplines',
        icon: 'lucide:scatter-chart'
      }, {
        title: 'High-Impact Publications',
        description: 'Publications that continue influencing scholarship years after publication',
        icon: 'lucide:book'
      }, {
        title: 'Intellectual Leadership',
        description: 'Leadership in shaping the field\'s intellectual direction',
        icon: 'lucide:lightbulb'
      }, {
        title: 'Sustained Commitment',
        description: 'Sustained commitment to advancing global marketing knowledge',
        icon: 'lucide:clock'
      }]
    }), "\n", createVNode(_components.h3, {
      id: "nomination-process",
      children: "Nomination Process"
    }), "\n", createVNode(_components.p, {
      children: "Nominations are accepted from SIG members and the broader international marketing community."
    }), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Required Materials:"
        })
      }), createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Nomination letter"
          }), " articulating the candidate’s defining contributions"]
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.strong, {
            children: "Curriculum vitae"
          })
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Publication list"
          }), " with citation metrics demonstrating long-term impact"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Supporting letters"
          }), " (optional but encouraged)"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Submission:"
      }), " Nomination deadlines and procedures are announced annually. Contact the ", createVNode(_components.strong, {
        children: "Vice-Chair of Membership"
      }), " (listed on the ", createVNode(_components.a, {
        href: "/leadership",
        children: "Leadership & Governance"
      }), " page) for current guidelines."]
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
              children: "Recipient"
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
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Constantine S. Katsikeas"
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
                children: "2020"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Nicole Coviello"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Wilfrid Laurier University"
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
              children: "Adamantios Diamantopoulos"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Vienna"
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
              children: "Bodo Schlegelmilch"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "WU Vienna University of Economics and Business"
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
              children: "David A. Griffith"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Texas A&M University"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Recipient"
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
                children: "2022"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Constantine S. Katsikeas"
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
                children: "2020"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Nicole Coviello"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Wilfrid Laurier University"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "2010s",
      children: "2010s"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Recipient"
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
                children: "2018"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Adamantios Diamantopoulos"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Vienna"
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
              children: "Bodo Schlegelmilch"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "WU Vienna University of Economics and Business"
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
              children: "David A. Griffith"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Texas A&M University"
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
              children: "Jan-Benedict Steenkamp"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of North Carolina at Chapel Hill"
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
              children: "Saeed Samiee"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Tulsa"
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
              children: "Daniel C. Bello"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Georgia State University"
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
              children: "Jeryl Whitelock"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Bradford"
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
              children: "Subhash C. Jain"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Connecticut"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "2000s",
      children: "2000s"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Recipient"
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
                children: "2009"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "C. Samuel Craig"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "New York University"
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
              children: "Johny Johansson"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Georgetown University"
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
              children: "Peter Walters"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Hong Kong Polytechnic University"
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
              children: "Susan P. Douglas"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "New York University"
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
              children: "Michael R. Czinkota"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Georgetown University"
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
              children: "John K. Ryans, Jr."
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Kent State University"
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
              children: "S. Tamer Cavusgil"
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
                children: "2002"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Philip R. Cateora"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Colorado at Boulder"
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
              children: "Vern Terpstra"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Michigan"
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
              children: "Hans Thorelli"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Indiana University"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "excellence-in-global-marketing-research-award",
      children: "Excellence in Global Marketing Research Award"
    }), "\n", createVNode(_components.h3, {
      id: "what-it-recognizes-1",
      children: "What It Recognizes"
    }), "\n", createVNode(_components.p, {
      children: ["This award celebrates research that advances global marketing knowledge through ", createVNode(_components.strong, {
        children: "innovative approaches"
      }), ", ", createVNode(_components.strong, {
        children: "rigorous methods"
      }), ", and ", createVNode(_components.strong, {
        children: "insights that reshape"
      }), " how we understand international markets."]
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Eligibility & Nomination"
        })
      }), createVNode(_components.p, {
        children: ["Nomination procedures, eligibility criteria, and submission deadlines are announced annually. Contact the ", createVNode(_components.strong, {
          children: "Vice-Chair of Membership"
        }), " (listed on the ", createVNode(_components.a, {
          href: "/leadership",
          children: "Leadership & Governance"
        }), " page) for current information."]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "nomination-information",
      children: "Nomination Information"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-3 gap-6 my-8",
      children: [createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-5 rounded-xl text-center",
        children: [createVNode("div", {
          class: "text-3xl mb-2",
          children: "📅"
        }), createVNode("h4", {
          class: "font-bold mb-2",
          children: "Timeline"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: ["Calls for nominations: ", createVNode("strong", {
            children: "Late fall/early winter"
          })]
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: ["Submission deadlines: ", createVNode("strong", {
            children: "Early spring"
          })]
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-5 rounded-xl text-center",
        children: [createVNode("div", {
          class: "text-3xl mb-2",
          children: "👥"
        }), createVNode("h4", {
          class: "font-bold mb-2",
          children: "Selection"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Committee of SIG board members and past award recipients reviews nominations"
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-5 rounded-xl text-center",
        children: [createVNode("div", {
          class: "text-3xl mb-2",
          children: "🏆"
        }), createVNode("h4", {
          class: "font-bold mb-2",
          children: "Recognition"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Recipients honored at the annual AMA Global Marketing Conference"
        })]
      })]
    }), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Selection Criteria:"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Research impact"
        }), "\n", createVNode(_components.li, {
          children: "Contribution to theory or practice"
        }), "\n", createVNode(_components.li, {
          children: "Scholarly leadership"
        }), "\n", createVNode(_components.li, {
          children: "Innovation"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Questions?"
      }), " Contact the Vice-Chair of Membership listed on our ", createVNode(_components.a, {
        href: "/leadership",
        children: "Leadership & Governance"
      }), " page."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$CallToAction, {
      title: "Journal of International Marketing Awards",
      subtitle: "The JIM Editorial Board also presents prestigious awards at the AMA Summer Educators' Conference",
      actions: [{
        variant: 'primary',
        text: 'View JIM Awards',
        href: '/awards/jim-awards',
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

const url = "/awards/sig-awards";
const file = "/home/user/website/src/pages/awards/sig-awards.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/awards/sig-awards.mdx";
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
