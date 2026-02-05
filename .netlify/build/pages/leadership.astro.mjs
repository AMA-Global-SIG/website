import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Features } from '../chunks/Features_DWu80yvl.mjs';
import { $ as $$Features2 } from '../chunks/Features2_DjDIccbq.mjs';
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
  "title": "Leadership & Governance",
  "description": "Meet the Board of Directors of the AMA Global Marketing SIG and learn about our governance structure.",
  "readingTime": 5
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "board-structure",
    "text": "Board Structure"
  }, {
    "depth": 2,
    "slug": "current-board-of-directors",
    "text": "Current Board of Directors"
  }, {
    "depth": 2,
    "slug": "complete-board-service-records-1994present",
    "text": "Complete Board Service Records (1994–Present)"
  }, {
    "depth": 3,
    "slug": "founding-members",
    "text": "Founding Members"
  }, {
    "depth": 3,
    "slug": "long-tenured-board-members-10-years-of-service",
    "text": "Long-Tenured Board Members (10+ Years of Service)"
  }, {
    "depth": 3,
    "slug": "other-board-members",
    "text": "Other Board Members"
  }, {
    "depth": 2,
    "slug": "board-member-responsibilities",
    "text": "Board Member Responsibilities"
  }, {
    "depth": 3,
    "slug": "chairperson",
    "text": "Chairperson"
  }, {
    "depth": 3,
    "slug": "chair-elect--immediate-past-chair",
    "text": "Chair-Elect / Immediate Past Chair"
  }, {
    "depth": 3,
    "slug": "treasurer--financial-officer",
    "text": "Treasurer / Financial Officer"
  }, {
    "depth": 3,
    "slug": "vice-chair-of-communications",
    "text": "Vice-Chair of Communications"
  }, {
    "depth": 3,
    "slug": "vice-chair-of-membership--academic-advisor",
    "text": "Vice-Chair of Membership / Academic Advisor"
  }, {
    "depth": 3,
    "slug": "international-liaison",
    "text": "International Liaison"
  }, {
    "depth": 3,
    "slug": "conference-liaison",
    "text": "Conference Liaison"
  }, {
    "depth": 3,
    "slug": "webmaster--social-media-communication",
    "text": "Webmaster / Social Media Communication"
  }, {
    "depth": 3,
    "slug": "doctoral-student-liaison--phd-liaison",
    "text": "Doctoral Student Liaison / PhD Liaison"
  }, {
    "depth": 3,
    "slug": "past-chair",
    "text": "Past-Chair"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    div: "div",
    em: "em",
    h2: "h2",
    h3: "h3",
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
    children: [createVNode(_components.h2, {
      id: "board-structure",
      children: "Board Structure"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "AMA Global Marketing SIG"
      }), " is governed by a ", createVNode(_components.strong, {
        children: "Board of Directors"
      }), " composed of accomplished scholars who provide strategic guidance, organize conferences, develop programs, and support the SIG’s mission. Board members typically serve three-year terms and represent diverse geographic regions, research specializations, and institutional types."]
    }), "\n", createVNode($$Features, {
      columns: 4,
      items: [{
        title: 'Chair',
        description: 'Provides overall leadership and strategic direction',
        icon: 'lucide:crown'
      }, {
        title: 'Immediate Past Chair',
        description: 'Ensures continuity and advises current chair',
        icon: 'lucide:history'
      }, {
        title: 'Officers',
        description: 'Conference Liaison, Doctoral Consortium Coordinator, Membership, Communications',
        icon: 'lucide:briefcase'
      }, {
        title: 'At-Large Members',
        description: 'Bring diverse perspectives and expertise to governance',
        icon: 'lucide:users'
      }]
    }), "\n", createVNode(_components.p, {
      children: "The Board meets at least twice annually during AMA conferences and communicates regularly throughout the year on SIG initiatives, programming, and strategic priorities."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "current-board-of-directors",
      children: "Current Board of Directors"
    }), "\n", createVNode($$Features2, {
      title: "SIG Leadership",
      columns: 3,
      items: [{
        title: 'Goksel Yalcinkaya',
        description: 'University of New Hampshire',
        icon: 'lucide:crown'
      }, {
        title: 'Constantine S. Katsikeas',
        description: 'Leeds University Business School',
        icon: 'lucide:user'
      }, {
        title: 'Kelly Hewett',
        description: 'Colorado State University',
        icon: 'lucide:user'
      }, {
        title: 'Peter Magnusson',
        description: 'UT Rio Grande Valley',
        icon: 'lucide:user'
      }, {
        title: 'Constantinos Leonidou',
        description: 'Open University of Cyprus',
        icon: 'lucide:user'
      }, {
        title: 'Hans Rudiger Kaufmann',
        description: 'University of Nicosia',
        icon: 'lucide:user'
      }, {
        title: 'Daekwan Kim',
        description: 'Florida State University',
        icon: 'lucide:user'
      }, {
        title: 'Magnus Hultman',
        description: 'Brock University',
        icon: 'lucide:user'
      }, {
        title: 'Timo Mandler',
        description: 'NEOMA Business School',
        icon: 'lucide:user'
      }, {
        title: 'Frank Franzak',
        description: 'Virginia Commonwealth University',
        icon: 'lucide:user'
      }, {
        title: 'Annie Cui',
        description: 'West Virginia University',
        icon: 'lucide:user'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "complete-board-service-records-1994present",
      children: "Complete Board Service Records (1994–Present)"
    }), "\n", createVNode(_components.p, {
      children: "The following tables document all scholars who have served on the SIG Board of Directors since founding."
    }), "\n", createVNode(_components.h3, {
      id: "founding-members",
      children: "Founding Members"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Name"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Institution(s)"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Years Served"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Philip R. Cateora"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Colorado"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1994–1997"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Michael R. Czinkota"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Georgetown University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1994–present"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Warren J. Keegan"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Pace University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1994–1996"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Diana R. Lawson"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Maine / St. Cloud State University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1994–1997; 2004–2010"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Stephen W. Miller"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Saint Louis University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1994–1995"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Camille P. Schuster"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Xavier University / Cal State San Marcos"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1994–2015"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["All founding members played instrumental roles in establishing the SIG. ", createVNode(_components.strong, {
          children: "Michael R. Czinkota"
        }), " has served continuously for 30+ years. ", createVNode(_components.strong, {
          children: "Camille P. Schuster"
        }), " served as the first SIG Chair (1994–1995) and again (2005–2007)."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "long-tenured-board-members-10-years-of-service",
      children: "Long-Tenured Board Members (10+ Years of Service)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Name"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Institution(s)"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Years Served"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "William J. Lundstrom"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Cleveland State University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1995–2015"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "David A. Griffith"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Michigan State University / Lehigh University / Texas A&M University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2000–2015"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Frank J. Franzak"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Virginia Commonwealth University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2001–2015; 2015–present"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Constantine S. Katsikeas"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Leeds University Business School"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2009–present"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Kelly Hewett"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Tennessee / Colorado State University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2015–present"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Peter Magnusson"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Alabama / UT Rio Grande Valley"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2015–present"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Constantinos Leonidou"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Leeds University Business School / Open University of Cyprus"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2015–present"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Goksel Yalcinkaya"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of New Hampshire"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2015–present"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Hans Rudiger Kaufmann"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Nicosia"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2013–present"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "William J. Lundstrom"
        }), " served as Chair (1997–2001). ", createVNode(_components.strong, {
          children: "David A. Griffith"
        }), " served as Chair (2001–2005). ", createVNode(_components.strong, {
          children: "Frank J. Franzak"
        }), " served as Chair twice (2007–2009; 2013–2015)."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "other-board-members",
      children: "Other Board Members"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.div, {
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
              children: "Name"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Institution(s)"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Years Served"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Syed Ahktar"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Marquette University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1996–1999"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Annie Peng Cui"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "West Virginia University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2009–present"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Victor Cordell"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Monterey Institute of International Studies"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1999–2002"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Pervez Ghauri"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Groningen"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1995–1999"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Esra Gencturk"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ozyegin University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2005–2011"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Kate Gillespie"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Texas at Austin"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2002–2011"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Phil Harris"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "University of Chester"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2000–2013"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "G. Tomas M. Hult"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Florida State University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1997–2000"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Magnus Hultman"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Brock University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [createVNode(_components.em, {
                children: "TBD"
              }), "–present"]
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Daekwan Kim"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Florida State University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [createVNode(_components.em, {
                children: "TBD"
              }), "–present"]
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Timo Mandler"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "NEOMA Business School"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2025–present"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Michael Minor"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "UT Pan American"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1997–2000"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Liesl Riddle"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "George Washington University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2007–2011"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "John K. Ryans, Jr."
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Kent State University"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1996–2008"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "D. Steven White"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "UMass-Dartmouth"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1998–2004"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Annie Peng Cui"
        }), " previously served as Chair. ", createVNode(_components.strong, {
          children: "Esra Gencturk"
        }), " served as Chair (2011–2013). ", createVNode(_components.strong, {
          children: "Kate Gillespie"
        }), " served as Chair (2009–2011)."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "board-member-responsibilities",
      children: "Board Member Responsibilities"
    }), "\n", createVNode(_components.p, {
      children: "Board members contribute to SIG governance and operations through specific roles. The following outlines key responsibilities for each officer position."
    }), "\n", createVNode(_components.h3, {
      id: "chairperson",
      children: "Chairperson"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Primary Leadership Role"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Coordinate with the AMA on policies and guidelines of SIG operations"
        }), "\n", createVNode(_components.li, {
          children: "Ensure that the SIG operates within the guidelines as set forth by the AMA"
        }), "\n", createVNode(_components.li, {
          children: "Lead strategic initiatives, inclusive of budgeting and planning of activities"
        }), "\n", createVNode(_components.li, {
          children: "Complete required AMA reports (e.g., budget requests, SIG activities)"
        }), "\n", createVNode(_components.li, {
          children: "Advise and coordinate the activities of other SIG officers"
        }), "\n", createVNode(_components.li, {
          children: "Chair Board meetings at Winter and Summer AMA Educators’ Conferences"
        }), "\n", createVNode(_components.li, {
          children: "Write quarterly “message from the Chair” for inclusion in SIG communications"
        }), "\n", createVNode(_components.li, {
          children: "Keep in contact with other officers throughout the year"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "chair-elect--immediate-past-chair",
      children: "Chair-Elect / Immediate Past Chair"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Continuity & Transition"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Assume responsibilities of the Chairperson at request or when Chairperson is absent"
        }), "\n", createVNode(_components.li, {
          children: "Become familiar with current Chairperson activities through review of prior reports"
        }), "\n", createVNode(_components.li, {
          children: "Prepare annual planning documents required by the AMA"
        }), "\n", createVNode(_components.li, {
          children: "Work with the AMA website administrator to facilitate distribution of Global Marketing material"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "treasurer--financial-officer",
      children: "Treasurer / Financial Officer"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Financial Oversight"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Ensure compliance with AMA guidelines regarding SIG expenses"
        }), "\n", createVNode(_components.li, {
          children: "Coordinate with the AMA for reimbursement of SIG expenses"
        }), "\n", createVNode(_components.li, {
          children: "Enter all receipts and expenses in account book and/or computer record"
        }), "\n", createVNode(_components.li, {
          children: "Prepare annual fiscal report for the Chair"
        }), "\n", createVNode(_components.li, {
          children: "Promote relationships with external groups for development purposes"
        }), "\n", createVNode(_components.li, {
          children: "Take minutes of each meeting, including motions and votes"
        }), "\n", createVNode(_components.li, {
          children: "Distribute minutes of each meeting to SIG officers"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "vice-chair-of-communications",
      children: "Vice-Chair of Communications"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Member Communications"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Communicate with the Global Marketing SIG membership"
        }), "\n", createVNode(_components.li, {
          children: "Update and maintain email and mailing lists"
        }), "\n", createVNode(_components.li, {
          children: "Work with the SIG Webmaster to post news on the website"
        }), "\n", createVNode(_components.li, {
          children: "Work with the AMA website administrator to facilitate distribution of materials"
        }), "\n", createVNode(_components.li, {
          children: "Promote the SIG within the AMA"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "vice-chair-of-membership--academic-advisor",
      children: "Vice-Chair of Membership / Academic Advisor"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Membership & Recognition"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Promote the SIG within the AMA and initiate recruitment efforts"
        }), "\n", createVNode(_components.li, {
          children: "Work with membership to ensure the SIG is meeting their needs"
        }), "\n", createVNode(_components.li, {
          children: "Coordinate solicitation of nominations for SIG awards from the membership"
        }), "\n", createVNode(_components.li, {
          children: "Form a committee of SIG officers to serve on the Awards and Recognition committee"
        }), "\n", createVNode(_components.li, {
          children: "Secure appropriate awards for recipients (e.g., plaques)"
        }), "\n", createVNode(_components.li, {
          children: "Work with the Treasurer on sources of funding for additional awards"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "international-liaison",
      children: "International Liaison"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Global Outreach"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Facilitate coordination of activities with non-U.S. marketing and/or international business groups"
        }), "\n", createVNode(_components.li, {
          children: "Represent the interests of non-U.S. based SIG members"
        }), "\n", createVNode(_components.li, {
          children: "Build awareness and interest of non-U.S. academics regarding conference events"
        }), "\n", createVNode(_components.li, {
          children: "Stimulate cooperative relationships between non-U.S. academics and Global Marketing SIG members"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "conference-liaison",
      children: "Conference Liaison"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Event Coordination"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Plan annual membership meeting (summer AMA) and membership reception (winter AMA)"
        }), "\n", createVNode(_components.li, {
          children: "Build awareness and interest of membership regarding conference events"
        }), "\n", createVNode(_components.li, {
          children: "Coordinate activities with the Global Marketing track chair for each conference"
        }), "\n", createVNode(_components.li, {
          children: "Stimulate conference attendees to attend various SIG activities"
        }), "\n", createVNode(_components.li, {
          children: "Update website with current information concerning AMA conference events"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "webmaster--social-media-communication",
      children: "Webmaster / Social Media Communication"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Digital Presence"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Maintain and update SIG website with current information"
        }), "\n", createVNode(_components.li, {
          children: "Work with Vice-Chair of Communications to post news and announcements"
        }), "\n", createVNode(_components.li, {
          children: "Coordinate with Conference Liaison for posting conference-related information"
        }), "\n", createVNode(_components.li, {
          children: "Manage social media channels and digital communications"
        }), "\n", createVNode(_components.li, {
          children: "Ensure website content accuracy and accessibility"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "doctoral-student-liaison--phd-liaison",
      children: "Doctoral Student Liaison / PhD Liaison"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Doctoral Support"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Establish and maintain relationship with the AMA DocSIG"
        }), "\n", createVNode(_components.li, {
          children: "Ensure that AMA DocSIG members receive Global Marketing SIG communications"
        }), "\n", createVNode(_components.li, {
          children: "Work with doctoral students to propose special conference events"
        }), "\n", createVNode(_components.li, {
          children: "Coordinate doctoral consortium activities"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "past-chair",
      children: "Past-Chair"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "Advisory & Support"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Assist the Chair in assuming responsibilities as SIG Chair"
        }), "\n", createVNode(_components.li, {
          children: "Facilitate smooth transition of leadership in the SIG and between the SIG and the AMA"
        }), "\n", createVNode(_components.li, {
          children: "Assist the Vice-Chair of Membership with recruitment efforts"
        }), "\n", createVNode(_components.li, {
          children: "Assist the Treasurer with development efforts"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Board service provides opportunities to shape the SIG’s future, network with leading scholars, and contribute to the international marketing community."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$CallToAction, {
      title: "Learn About Our History",
      subtitle: "For the SIG's historical development and founding story",
      actions: [{
        variant: 'primary',
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

const url = "/leadership";
const file = "/home/user/website/src/pages/leadership.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/leadership.mdx";
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
