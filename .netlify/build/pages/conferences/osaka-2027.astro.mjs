import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Features } from '../../chunks/Features_DWu80yvl.mjs';
import { $ as $$Features2 } from '../../chunks/Features2_DjDIccbq.mjs';
import { $ as $$Stats } from '../../chunks/Stats_BVNtIOGE.mjs';
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
  "title": "2027 Osaka Conference",
  "description": "2027 AMA Global Marketing Conference - Osaka, Japan - The first AMA Global Marketing Conference held in Japan",
  "readingTime": 6
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
    "slug": "ritsumeikan-university--osaka-ibaraki-campus-oic",
    "text": "Ritsumeikan University – Osaka Ibaraki Campus (OIC)"
  }, {
    "depth": 2,
    "slug": "about-osaka",
    "text": "About Osaka"
  }, {
    "depth": 2,
    "slug": "conference-highlights",
    "text": "Conference Highlights"
  }, {
    "depth": 3,
    "slug": "journal-of-international-marketing-jim-special-issue",
    "text": "Journal of International Marketing (JIM) Special Issue"
  }, {
    "depth": 3,
    "slug": "doctoral-consortium",
    "text": "Doctoral Consortium"
  }, {
    "depth": 3,
    "slug": "unique-cultural-experience",
    "text": "Unique Cultural Experience"
  }, {
    "depth": 2,
    "slug": "conference-tracks",
    "text": "Conference Tracks"
  }, {
    "depth": 2,
    "slug": "submission-guidelines",
    "text": "Submission Guidelines"
  }, {
    "depth": 3,
    "slug": "types-of-submissions",
    "text": "Types of Submissions"
  }, {
    "depth": 3,
    "slug": "submission-requirements",
    "text": "Submission Requirements"
  }, {
    "depth": 2,
    "slug": "registration",
    "text": "Registration"
  }, {
    "depth": 3,
    "slug": "registration-categories-anticipated",
    "text": "Registration Categories (Anticipated)"
  }, {
    "depth": 3,
    "slug": "registration-typically-includes",
    "text": "Registration Typically Includes"
  }, {
    "depth": 2,
    "slug": "key-dates",
    "text": "Key Dates"
  }, {
    "depth": 2,
    "slug": "accommodation",
    "text": "Accommodation"
  }, {
    "depth": 2,
    "slug": "practical-information",
    "text": "Practical Information"
  }, {
    "depth": 3,
    "slug": "travel--visa",
    "text": "Travel & Visa"
  }, {
    "depth": 3,
    "slug": "about-japan",
    "text": "About Japan"
  }, {
    "depth": 2,
    "slug": "conference-chairs",
    "text": "Conference Chairs"
  }, {
    "depth": 3,
    "slug": "doctoral-consortium-chairs",
    "text": "Doctoral Consortium Chairs"
  }, {
    "depth": 2,
    "slug": "contact",
    "text": "Contact"
  }, {
    "depth": 2,
    "slug": "stay-informed",
    "text": "Stay Informed"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    children: [createVNode("div", {
      class: "bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-xl my-8",
      children: [createVNode("h2", {
        class: "text-3xl font-bold mb-2",
        children: "2027 AMA Global Marketing Conference"
      }), createVNode("p", {
        class: "text-xl mb-2",
        children: ["Late May – Early June 2027 ", createVNode("span", {
          class: "text-sm opacity-80",
          children: "(Exact dates TBD)"
        })]
      }), createVNode("p", {
        class: "text-lg",
        children: "Ibaraki City, Osaka, Japan"
      }), createVNode("p", {
        class: "mt-4 text-sm bg-white/20 inline-block px-3 py-1 rounded",
        children: "🇯🇵 First AMA Global Marketing Conference in Japan"
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conference-overview",
      children: "Conference Overview"
    }), "\n", createVNode(_components.p, {
      children: ["We are delighted to announce that ", createVNode(_components.strong, {
        children: "Osaka, Japan"
      }), " will host the 2027 AMA Global Marketing SIG Conference—", createVNode(_components.strong, {
        children: "the first time this prestigious conference will be held in Japan"
      }), ". The conference will take place at ", createVNode(_components.strong, {
        children: "Ritsumeikan University’s Osaka Ibaraki Campus (OIC)"
      }), " in late May or early June 2027."]
    }), "\n", createVNode(_components.p, {
      children: ["This landmark event is expected to welcome approximately ", createVNode(_components.strong, {
        children: "170 participants"
      }), ", including around 150 international attendees, bringing together leading scholars, practitioners, and doctoral students from across the globe to advance international marketing research and education."]
    }), "\n", createVNode(_components.p, {
      children: "Join us for an exhilarating academic program, immersive cultural experiences, and stimulating conversations in one of Asia’s most dynamic business hubs!"
    }), "\n", createVNode($$Stats, {
      stats: [{
        title: 'Expected Attendees',
        amount: '~170'
      }, {
        title: 'International Guests',
        amount: '~150'
      }, {
        title: 'Conference Tracks',
        amount: '18'
      }, {
        title: 'Historic First',
        amount: 'Japan'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conference-venue",
      children: "Conference Venue"
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-6 rounded-lg my-6",
      children: [createVNode(_components.h3, {
        id: "ritsumeikan-university--osaka-ibaraki-campus-oic",
        children: "Ritsumeikan University – Osaka Ibaraki Campus (OIC)"
      }), createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Future Plaza"
        })
      }), createVNode(_components.p, {
        children: "The conference will be held at Future Plaza on the Osaka Ibaraki Campus of Ritsumeikan University. The campus provides modern conference facilities designed to facilitate world-class academic gatherings."
      }), createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Venue Details:"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Campus address and directions — ", createVNode(_components.em, {
            children: "TBD"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Conference facilities description — ", createVNode(_components.em, {
            children: "TBD"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["Meeting room capabilities — ", createVNode(_components.em, {
            children: "TBD"
          })]
        }), "\n", createVNode(_components.li, {
          children: ["On-campus amenities — ", createVNode(_components.em, {
            children: "TBD"
          })]
        }), "\n"]
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "More details about the venue will be provided as they become available."
        })
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "about-osaka",
      children: "About Osaka"
    }), "\n", createVNode(_components.p, {
      children: ["Osaka, Japan’s third-largest city, is a dynamic blend of modern innovation and traditional culture. Known affectionately as ", createVNode(_components.strong, {
        children: "“the nation’s kitchen”"
      }), " (tenka no daidokoro) for its exceptional culinary scene, Osaka offers world-class dining, historic temples and castles, and a welcoming, entrepreneurial spirit."]
    }), "\n", createVNode(_components.p, {
      children: ["As a major commercial center serving as headquarters for leading multinational corporations and innovative startups, the city’s business ecosystem provides an ideal backdrop for exploring contemporary issues in international marketing, particularly in the ", createVNode(_components.strong, {
        children: "Asia-Pacific context"
      }), "."]
    }), "\n", createVNode($$Features, {
      title: "Why Osaka?",
      columns: 3,
      items: [{
        title: 'Business Hub',
        description: 'Major commercial center with headquarters for multinational corporations and innovative startups',
        icon: 'lucide:building'
      }, {
        title: 'Cultural Heritage',
        description: 'Historic castles, temples, traditional entertainment districts, and centuries of tradition',
        icon: 'lucide:castle'
      }, {
        title: 'Culinary Excellence',
        description: 'World-renowned food scene known as "the nation\'s kitchen" with exceptional dining',
        icon: 'lucide:chef-hat'
      }, {
        title: 'Regional Access',
        description: 'Easy access to Kyoto (30 min), Nara (45 min), Kobe, and other Kansai destinations',
        icon: 'lucide:train-front'
      }, {
        title: 'Global Connectivity',
        description: 'Kansai International Airport (KIX) with direct connections to major cities worldwide',
        icon: 'lucide:plane'
      }, {
        title: 'Warm Hospitality',
        description: 'Known for friendly locals and the welcoming spirit of the Kansai region',
        icon: 'lucide:heart'
      }]
    }), "\n", createVNode(_components.p, {
      children: ["Osaka seamlessly blends centuries-old traditions with cutting-edge technology and contemporary urban life. Historic landmarks include ", createVNode(_components.strong, {
        children: "Osaka Castle"
      }), ", ", createVNode(_components.strong, {
        children: "Shitennō-ji Temple"
      }), " (Japan’s oldest Buddhist temple), and traditional entertainment districts. The city’s central location makes it an ideal base for exploring Japan’s rich cultural heritage."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conference-highlights",
      children: "Conference Highlights"
    }), "\n", createVNode($$Features2, {
      columns: 2,
      items: [{
        title: 'Journal of International Marketing Special Issue',
        description: 'A dedicated special session for JIM special issue. Authors of presented papers are welcome to submit for possible publication.',
        icon: 'lucide:book'
      }, {
        title: 'Doctoral Consortium',
        description: 'Unique opportunity for PhD students to receive feedback from leading scholars and build professional networks.',
        icon: 'lucide:graduation-cap'
      }, {
        title: 'Japanese Cultural Experience',
        description: 'Immerse yourself in Japan\'s rich traditions, world-famous cuisine, and the dynamic spirit of the Kansai region.',
        icon: 'lucide:compass'
      }, {
        title: 'Global Networking',
        description: 'Connect with leading international marketing scholars. Several world leaders in the field have confirmed their intention to participate.',
        icon: 'lucide:globe'
      }]
    }), "\n", createVNode(_components.h3, {
      id: "journal-of-international-marketing-jim-special-issue",
      children: "Journal of International Marketing (JIM) Special Issue"
    }), "\n", createVNode("div", {
      class: "bg-amber-50 dark:bg-slate-800 p-5 rounded-lg border-l-4 border-amber-500 my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Special Issue Details TBD"
        })
      }), createVNode(_components.p, {
        children: ["A dedicated special session for the ", createVNode(_components.em, {
          children: "Journal of International Marketing"
        }), " (JIM) special issue will take place during the conference. Authors of presented papers are welcome to submit their work for possible publication. The special issue theme and guest editors will be announced in advance of the conference."]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "doctoral-consortium",
      children: "Doctoral Consortium"
    }), "\n", createVNode(_components.p, {
      children: "The Doctoral Consortium provides a unique opportunity for PhD students focusing on international and cross-cultural marketing to fine-tune their research ideas and gain insights into building a successful academic career. Each doctoral student will present a working paper and receive constructive feedback from leading scholars."
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6",
      children: [createVNode("div", {
        class: "p-4 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Mentorship"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Senior international marketing scholars provide guidance"
        })]
      }), createVNode("div", {
        class: "p-4 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Research Feedback"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Dissertation research and career development advice"
        })]
      }), createVNode("div", {
        class: "p-4 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Panel Discussions"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Research trends and publishing strategies"
        })]
      }), createVNode("div", {
        class: "p-4 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Peer Networking"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Connect with doctoral students worldwide"
        })]
      }), createVNode("div", {
        class: "p-4 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Career Workshops"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Job search and dissertation management"
        })]
      }), createVNode("div", {
        class: "p-4 bg-blue-50 dark:bg-slate-800 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Editor Sessions"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Meet editors from top journals"
        })]
      })]
    }), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-4 text-sm",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Application Details:"
        }), " Interested PhD students should apply through the conference submission system. Application requirements and deadlines will be announced when the call for papers opens."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "unique-cultural-experience",
      children: "Unique Cultural Experience"
    }), "\n", createVNode(_components.p, {
      children: "Experience Japan’s rich cultural heritage through Osaka’s culinary traditions, historic landmarks, and vibrant urban culture. The conference will offer opportunities to explore:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Osaka’s legendary food scene and street food culture"
      }), "\n", createVNode(_components.li, {
        children: ["Historic sites including ", createVNode(_components.strong, {
          children: "Osaka Castle"
        }), " and traditional temples"]
      }), "\n", createVNode(_components.li, {
        children: "Contemporary architecture and urban innovation"
      }), "\n", createVNode(_components.li, {
        children: ["Optional excursions to nearby ", createVNode(_components.strong, {
          children: "Kyoto"
        }), ", ", createVNode(_components.strong, {
          children: "Nara"
        }), ", and ", createVNode(_components.strong, {
          children: "Kobe"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conference-tracks",
      children: "Conference Tracks"
    }), "\n", createVNode(_components.p, {
      children: "All submissions will be categorized into thematic tracks. Each submission must be submitted to only one track. Track chairs will be announced when the call for papers opens."
    }), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Anticipated tracks include:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "#"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Track"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "1"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Cross-cultural Consumer Behavior"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "2"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Export and Import Management"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "3"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Firm Internationalization, Market Entry, and Market Exit"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "4"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Brand Management"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "5"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Consumer Research"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "6"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Entrepreneurship"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "7"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Ethics, Sustainability, and Corporate Social Responsibility"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "8"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Innovation and New Product Development"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "9"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Marketing Communications"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "10"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Marketing Research, Big Data, and Analytics"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "11"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Marketing Strategy"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "12"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Relationship Marketing, Sales, and Channel Management"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "13"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Retailing, Services, and E-Commerce"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "14"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Supply Chain Research"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "15"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Luxury Marketing"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "16"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Global Marketing Education"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "17"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Marketing in Emerging Markets"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "18"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Special Session Proposals"
            })]
          })]
        })]
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Final track list and track chairs will be announced in Fall 2026."
        })
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "submission-guidelines",
      children: "Submission Guidelines"
    }), "\n", createVNode($$Note, {
      title: "Submission System",
      description: "Papers and extended abstracts will be submitted electronically using the EasyChair conference submission system. The submission system is expected to open in Fall 2026."
    }), "\n", createVNode(_components.h3, {
      id: "types-of-submissions",
      children: "Types of Submissions"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-3 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg border-t-4 border-blue-500",
        children: [createVNode("h4", {
          class: "font-bold mb-3",
          children: "Competitive Sessions"
        }), createVNode("p", {
          class: "text-sm mb-2",
          children: [createVNode("strong", {
            children: "Full Papers:"
          }), " Max 40 double-spaced pages (all materials included)"]
        }), createVNode("p", {
          class: "text-sm",
          children: [createVNode("strong", {
            children: "Extended Abstracts:"
          }), " For advanced projects with good potential"]
        })]
      }), createVNode("div", {
        class: "bg-green-50 dark:bg-slate-800 p-5 rounded-lg border-t-4 border-green-500",
        children: [createVNode("h4", {
          class: "font-bold mb-3",
          children: "Interactive Sessions"
        }), createVNode("p", {
          class: "text-sm",
          children: "Work-in-progress for informal feedback. Poster-style or roundtable format. Max 10 double-spaced pages."
        })]
      }), createVNode("div", {
        class: "bg-amber-50 dark:bg-slate-800 p-5 rounded-lg border-t-4 border-amber-500",
        children: [createVNode("h4", {
          class: "font-bold mb-3",
          children: "Special Sessions"
        }), createVNode("p", {
          class: "text-sm",
          children: "Introduction framing theme + 3-4 extended abstracts (3-4 pages each) + participant list."
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "submission-requirements",
      children: "Submission Requirements"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Each manuscript may only be submitted to ", createVNode(_components.strong, {
          children: "one track"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["All submissions undergo ", createVNode(_components.strong, {
          children: "blind peer review"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Evaluated on: relevance, contribution, rigor, methodology, innovativeness, and clarity"
      }), "\n"]
    }), "\n", createVNode("div", {
      class: "bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-6",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Note:"
        }), " Submitting as a competitive paper does not guarantee placement in a competitive session. Best papers will be placed in competitive sessions; others may be placed in interactive sessions due to space considerations."]
      })
    }), "\n", createVNode($$CallToAction, {
      actions: [{
        variant: 'primary',
        text: 'View Full Submission Guidelines',
        href: '/conferences/submission-guidelines',
        icon: 'lucide:file-text'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "registration",
      children: "Registration"
    }), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Registration information will be announced in late 2026. Registration is expected to open in early 2027."
        })
      }), createVNode(_components.h3, {
        id: "registration-categories-anticipated",
        children: "Registration Categories (Anticipated)"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Early Bird"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Discounted rates for early registration"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Regular"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Standard registration rate"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Late/On-site"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Higher rate for late registrations"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Student"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Discounted rate for students"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Accompanying Person"
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "For non-presenting guests"
            })]
          })]
        })]
      }), createVNode(_components.h3, {
        id: "registration-typically-includes",
        children: "Registration Typically Includes"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Access to all conference sessions"
        }), "\n", createVNode(_components.li, {
          children: "Conference materials"
        }), "\n", createVNode(_components.li, {
          children: "Coffee breaks and lunches"
        }), "\n", createVNode(_components.li, {
          children: "Welcome reception"
        }), "\n", createVNode(_components.li, {
          children: "Conference gala dinner"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "key-dates",
      children: "Key Dates"
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-red-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl my-6",
      children: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
                children: "Call for Papers Opens"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Fall 2026"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Submission System Opens"
              })
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
                children: "Submission Deadline"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "TBD (typically 6-7 months before conference)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Acceptance Notification"
              })
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
                children: "Registration Opens"
              })
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
                children: "Early Bird Registration Deadline"
              })
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
                children: "Doctoral Consortium Application Deadline"
              })
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
                children: "Conference Dates"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Late May – Early June 2027"
            })]
          })]
        })]
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "All dates tentative — please check back regularly for updates"
        })
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "accommodation",
      children: "Accommodation"
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Accommodation information will be provided as we get closer to conference dates."
        })
      }), createVNode(_components.p, {
        children: "We will arrange:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Hotel room blocks at special conference rates"
        }), "\n", createVNode(_components.li, {
          children: "Recommendations for hotels at various price points"
        }), "\n", createVNode(_components.li, {
          children: "Information about proximity to conference venue"
        }), "\n", createVNode(_components.li, {
          children: "Local transportation options"
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Expected options include:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Hotels near Ritsumeikan University’s Osaka Ibaraki Campus"
        }), "\n", createVNode(_components.li, {
          children: "Hotels in central Osaka with convenient access to campus"
        }), "\n", createVNode(_components.li, {
          children: "Budget-friendly options for doctoral students"
        }), "\n", createVNode(_components.li, {
          children: "Information about booking procedures and deadlines"
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "practical-information",
      children: "Practical Information"
    }), "\n", createVNode(_components.h3, {
      id: "travel--visa",
      children: "Travel & Visa"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-3",
          children: "Entry Requirements"
        }), createVNode("ul", {
          class: "text-sm space-y-2",
          children: [createVNode("li", {
            children: "• Visa requirements vary by nationality"
          }), createVNode("li", {
            children: "• Allow 6-8 weeks for visa processing if required"
          }), createVNode("li", {
            children: "• Conference organizers can provide visa support letters upon request"
          })]
        })]
      }), createVNode("div", {
        class: "bg-slate-100 dark:bg-slate-800 p-5 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-3",
          children: "Getting to Osaka"
        }), createVNode("ul", {
          class: "text-sm space-y-2",
          children: [createVNode("li", {
            children: ["• ", createVNode(_components.strong, {
              children: "KIX"
            }), " – Kansai International Airport (main international gateway, ~50-60 min from central Osaka)"]
          }), createVNode("li", {
            children: ["• ", createVNode(_components.strong, {
              children: "ITM"
            }), " – Osaka International Airport (primarily domestic)"]
          }), createVNode("li", {
            children: ["• ", createVNode(_components.strong, {
              children: "Shinkansen"
            }), " – From Tokyo (2.5 hrs), Kyoto (15 min)"]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "about-japan",
      children: "About Japan"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6",
      children: [createVNode("div", {
        class: "p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center",
        children: [createVNode("p", {
          class: "font-bold",
          children: "Currency"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Japanese Yen (JPY)"
        })]
      }), createVNode("div", {
        class: "p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center",
        children: [createVNode("p", {
          class: "font-bold",
          children: "Language"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "Japanese (English at major venues)"
        })]
      }), createVNode("div", {
        class: "p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center",
        children: [createVNode("p", {
          class: "font-bold",
          children: "Climate (May/June)"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "18-26°C / 64-79°F, humid"
        })]
      }), createVNode("div", {
        class: "p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center",
        children: [createVNode("p", {
          class: "font-bold",
          children: "Safety"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "One of the safest countries"
        })]
      })]
    }), "\n", createVNode("div", {
      class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg my-6",
      children: [createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Tips for Visitors:"
        })
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Business cards (meishi)"
          }), " are important – bring plenty"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Punctuality"
          }), " is highly valued"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Respectful greetings"
          }), " (bow) are customary"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Wi-Fi"
          }), " widely available; consider portable Wi-Fi or SIM card"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conference-chairs",
      children: "Conference Chairs"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        children: [createVNode("h3", {
          class: "font-bold text-xl mb-4",
          children: "Program Chairs"
        }), createVNode("div", {
          class: "bg-slate-100 dark:bg-slate-800 p-4 rounded-lg",
          children: createVNode("p", {
            class: "text-muted italic",
            children: "TBD – Program chair appointments will be announced in late 2026"
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h3", {
          class: "font-bold text-xl mb-4",
          children: "Local Host Organizers"
        }), createVNode("div", {
          class: "space-y-4",
          children: [createVNode("div", {
            class: "bg-slate-100 dark:bg-slate-800 p-4 rounded-lg",
            children: [createVNode("p", {
              class: "font-bold",
              children: "Ryuta Ishii, Ph.D."
            }), createVNode("p", {
              class: "text-sm text-muted",
              children: "Associate Professor, College of Business Administration"
            }), createVNode("p", {
              class: "text-sm text-muted",
              children: "Ritsumeikan University"
            }), createVNode("p", {
              class: "text-sm",
              children: createVNode("a", {
                href: "mailto:r-ishii@fc.ritsumei.ac.jp",
                class: "text-primary hover:underline",
                children: createVNode(_components.a, {
                  href: "mailto:r-ishii@fc.ritsumei.ac.jp",
                  children: "r-ishii@fc.ritsumei.ac.jp"
                })
              })
            })]
          }), createVNode("div", {
            class: "bg-slate-100 dark:bg-slate-800 p-4 rounded-lg",
            children: [createVNode("p", {
              class: "font-bold",
              children: "Mai Kikumori, Ph.D."
            }), createVNode("p", {
              class: "text-sm text-muted",
              children: "Associate Professor, College of Business Administration"
            }), createVNode("p", {
              class: "text-sm text-muted",
              children: "Ritsumeikan University"
            }), createVNode("p", {
              class: "text-sm",
              children: createVNode("a", {
                href: "mailto:kikumori@fc.ritsumei.ac.jp",
                class: "text-primary hover:underline",
                children: createVNode(_components.a, {
                  href: "mailto:kikumori@fc.ritsumei.ac.jp",
                  children: "kikumori@fc.ritsumei.ac.jp"
                })
              })
            })]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "doctoral-consortium-chairs",
      children: "Doctoral Consortium Chairs"
    }), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-4",
      children: createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Doctoral consortium chair appointments will be announced when the call for papers opens."
        })
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "contact",
      children: "Contact"
    }), "\n", createVNode(_components.p, {
      children: "For questions about the conference, please contact:"
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-6",
      children: [createVNode("div", {
        class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "Local Host Organizers"
        }), createVNode("p", {
          class: "text-sm",
          children: ["Ryuta Ishii: ", createVNode("a", {
            href: "mailto:r-ishii@fc.ritsumei.ac.jp",
            class: "text-primary hover:underline",
            children: createVNode(_components.a, {
              href: "mailto:r-ishii@fc.ritsumei.ac.jp",
              children: "r-ishii@fc.ritsumei.ac.jp"
            })
          })]
        }), createVNode("p", {
          class: "text-sm",
          children: ["Mai Kikumori: ", createVNode("a", {
            href: "mailto:kikumori@fc.ritsumei.ac.jp",
            class: "text-primary hover:underline",
            children: createVNode(_components.a, {
              href: "mailto:kikumori@fc.ritsumei.ac.jp",
              children: "kikumori@fc.ritsumei.ac.jp"
            })
          })]
        })]
      }), createVNode("div", {
        class: "bg-blue-50 dark:bg-slate-800 p-5 rounded-lg",
        children: [createVNode("h4", {
          class: "font-bold mb-2",
          children: "General Inquiries"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: "General conference email TBD"
        }), createVNode("p", {
          class: "text-sm mt-2",
          children: createVNode("a", {
            href: "https://www.amaglobalsig.org",
            class: "text-primary hover:underline",
            children: createVNode(_components.a, {
              href: "http://www.amaglobalsig.org",
              children: "www.amaglobalsig.org"
            })
          })
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "stay-informed",
      children: "Stay Informed"
    }), "\n", createVNode($$CallToAction, {
      title: "Get Conference Updates",
      subtitle: "Subscribe to receive announcements about call for papers, registration, accommodations, and more",
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
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode("div", {
      class: "bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm text-center",
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Last Updated:"
        }), " January 2026"]
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "This page contains preliminary information based on current planning. All details are subject to confirmation and may be updated as planning progresses. Please check back regularly for the most current information."
        })
      })]
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

const url = "/conferences/osaka-2027";
const file = "/home/user/website/src/pages/conferences/osaka-2027.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/conferences/osaka-2027.mdx";
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
