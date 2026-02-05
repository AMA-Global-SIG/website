import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Note } from '../chunks/Note_DHGj1dwJ.mjs';
import { $ as $$Features } from '../chunks/Features_DWu80yvl.mjs';
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
  "title": "Mission & Objectives",
  "description": "The mission and four core objectives of the AMA Global Marketing Special Interest Group.",
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "our-mission",
    "text": "Our Mission"
  }, {
    "depth": 2,
    "slug": "our-objectives",
    "text": "Our Objectives"
  }, {
    "depth": 3,
    "slug": "1-facilitate-interaction-across-stakeholder-groups",
    "text": "1. Facilitate Interaction Across Stakeholder Groups"
  }, {
    "depth": 3,
    "slug": "2-promote-globalization-of-marketing-education",
    "text": "2. Promote Globalization of Marketing Education"
  }, {
    "depth": 3,
    "slug": "3-foster-research-on-global-marketing-issues",
    "text": "3. Foster Research on Global Marketing Issues"
  }, {
    "depth": 3,
    "slug": "4-disseminate-knowledge-to-the-field",
    "text": "4. Disseminate Knowledge to the Field"
  }, {
    "depth": 2,
    "slug": "our-impact",
    "text": "Our Impact"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "our-mission",
      children: "Our Mission"
    }), "\n", createVNode($$Note, {
      title: "Connecting the Global Marketing Community",
      description: "The AMA Global Marketing Special Interest Group connects academics, practitioners, and doctoral students who study international marketing, cross-cultural consumer behavior, and global business strategy. We advance the field through annual conferences, research collaboration, awards recognizing scholarly excellence, and support for emerging scholars."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "our-objectives",
      children: "Our Objectives"
    }), "\n", createVNode($$Features, {
      title: "Four Core Objectives",
      subtitle: "Guiding our activities since 1994",
      columns: 4,
      items: [{
        title: 'Facilitate Interaction',
        description: 'Connect academics, practitioners, and government representatives',
        icon: 'lucide:users'
      }, {
        title: 'Promote Globalization',
        description: 'Integrate international perspectives into marketing education',
        icon: 'lucide:globe'
      }, {
        title: 'Foster Research',
        description: 'Support scholarship on global marketing challenges',
        icon: 'lucide:microscope'
      }, {
        title: 'Disseminate Knowledge',
        description: 'Share findings with academic and practitioner audiences',
        icon: 'lucide:megaphone'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "1-facilitate-interaction-across-stakeholder-groups",
      children: "1. Facilitate Interaction Across Stakeholder Groups"
    }), "\n", createVNode(_components.p, {
      children: "We connect academic researchers, business practitioners, and government representatives to exchange insights on international marketing challenges. This ensures research addresses real-world problems while practitioners access current scholarship."
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 my-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "How We Do This"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Annual conferences"
          }), " attract 200–300 participants from 40+ countries for paper presentations, panel discussions, and networking"]
        }), "\n", createVNode(_components.li, {
          children: ["We ", createVNode(_components.strong, {
            children: "co-sponsor events"
          }), " with the Academy of Marketing (UK) and Centers for International Business Education and Research"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "2-promote-globalization-of-marketing-education",
      children: "2. Promote Globalization of Marketing Education"
    }), "\n", createVNode(_components.p, {
      children: "We help faculty integrate international perspectives into marketing courses, whether teaching dedicated international marketing classes or adding global dimensions to existing courses."
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 my-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "How We Do This"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Share teaching resources"
          }), " including syllabi, case studies, and assignments"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Connect faculty"
          }), " with international colleagues for guest lectures, student exchanges, and collaborative teaching projects"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Provide forums"
          }), " at conferences for discussing pedagogical approaches"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "3-foster-research-on-global-marketing-issues",
      children: "3. Foster Research on Global Marketing Issues"
    }), "\n", createVNode(_components.p, {
      children: "We support research on how cultural differences shape marketing strategy, how firms succeed in foreign markets, and how globalization transforms consumer behavior and business practice."
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 my-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "How We Do This"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["The annual conference features ", createVNode(_components.strong, {
            children: "competitive paper sessions"
          }), ", work-in-progress presentations, and a ", createVNode(_components.strong, {
            children: "doctoral consortium"
          }), " pairing students with senior scholars"]
        }), "\n", createVNode(_components.li, {
          children: ["We collaborate with the ", createVNode(_components.em, {
            children: "Journal of International Marketing"
          }), " on ", createVNode(_components.strong, {
            children: "special issues"
          }), " addressing emerging topics"]
        }), "\n", createVNode(_components.li, {
          children: ["Our ", createVNode(_components.strong, {
            children: "500+ member network"
          }), " connects researchers with shared interests"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "4-disseminate-knowledge-to-the-field",
      children: "4. Disseminate Knowledge to the Field"
    }), "\n", createVNode(_components.p, {
      children: "We ensure research findings and successful practices reach both academic and practitioner audiences through multiple channels."
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-blue-100 dark:border-slate-700 my-6",
      children: [createVNode("h4", {
        class: "text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3",
        children: "How We Do This"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Present awards"
          }), " recognizing influential research at AMA conferences"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Organize special sessions"
          }), " and tracks at AMA Educators’ Conferences"]
        }), "\n", createVNode(_components.li, {
          children: ["Work with ", createVNode(_components.em, {
            children: "JIM"
          }), " and other journals to ", createVNode(_components.strong, {
            children: "publish research"
          }), " that bridges theory and practice"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Maintain networks"
          }), " connecting researchers, educators, and practitioners"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "our-impact",
      children: "Our Impact"
    }), "\n", createVNode($$Stats, {
      title: "A Global Community Since 1994",
      stats: [{
        title: 'Members Worldwide',
        amount: '500+'
      }, {
        title: 'Countries Represented',
        amount: '50+'
      }, {
        title: 'Annual Conference Attendees',
        amount: '200-300'
      }, {
        title: 'Years of Impact',
        amount: '30+'
      }]
    }), "\n", createVNode(_components.p, {
      children: "Since 1994, the SIG has become the leading community for international marketing scholarship within the American Marketing Association. Our conferences have launched research collaborations spanning continents, our doctoral consortium has mentored generations of scholars now leading the field, and our awards recognize research that has fundamentally shaped how we understand global markets."
    }), "\n", createVNode(_components.p, {
      children: "The SIG’s members represent the breadth and depth of international marketing scholarship—from consumer behavior researchers studying cultural differences to strategy scholars examining market entry decisions to practitioners implementing global marketing programs."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$CallToAction, {
      title: "Explore More",
      actions: [{
        variant: 'primary',
        text: 'Our History',
        href: '/history',
        icon: 'lucide:history'
      }, {
        text: 'Bylaws',
        href: '/bylaws',
        icon: 'lucide:file-text'
      }, {
        text: 'Membership Benefits',
        href: '/membership',
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

const url = "/mission";
const file = "/home/user/website/src/pages/mission.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/mission.mdx";
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
