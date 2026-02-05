import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../chunks/MarkdownLayout_Cc9YnM10.mjs';
import { $ as $$Features } from '../chunks/Features_DWu80yvl.mjs';
import '../chunks/Features2_DjDIccbq.mjs';
import { $ as $$Note } from '../chunks/Note_DHGj1dwJ.mjs';
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
  "title": "Awards",
  "description": "Awards recognizing excellence in international marketing scholarship from the AMA Global Marketing SIG and Journal of International Marketing.",
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ama-global-marketing-sig-awards",
    "text": "AMA Global Marketing SIG Awards"
  }, {
    "depth": 2,
    "slug": "journal-of-international-marketing-awards",
    "text": "Journal of International Marketing Awards"
  }, {
    "depth": 2,
    "slug": "nominate-a-colleague",
    "text": "Nominate a Colleague"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "AMA Global Marketing SIG"
      }), " and the ", createVNode(_components.strong, {
        children: "Journal of International Marketing"
      }), " recognize excellence in international marketing scholarship through four prestigious awards celebrating both sustained career contributions and groundbreaking research."]
    }), "\n", createVNode($$Features, {
      title: "Four Awards Recognizing Excellence",
      columns: 4,
      items: [{
        title: 'Significant Contributions',
        description: 'Career-spanning impact on international marketing',
        icon: 'lucide:award'
      }, {
        title: 'Excellence in Research',
        description: 'Groundbreaking research contributions',
        icon: 'lucide:microscope'
      }, {
        title: 'Hans B. Thorelli Award',
        description: 'Sustained long-term article impact',
        icon: 'lucide:scroll-text'
      }, {
        title: 'S. Tamer Cavusgil Award',
        description: 'Best article advancing practice',
        icon: 'lucide:trophy'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "ama-global-marketing-sig-awards",
      children: "AMA Global Marketing SIG Awards"
    }), "\n", createVNode(_components.p, {
      children: ["The SIG presents two awards annually at the ", createVNode(_components.strong, {
        children: "AMA Global Marketing Conference"
      }), ", honoring scholars whose work has shaped global marketing theory and practice."]
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-8",
      children: [createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-blue-100 dark:border-slate-700",
        children: [createVNode("h3", {
          class: "text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3",
          children: "Significant Contributions to Global Marketing Award"
        }), createVNode("p", {
          class: "text-slate-600 dark:text-slate-300",
          children: ["Recognizes scholars whose ", createVNode("strong", {
            children: "career-spanning research"
          }), " has fundamentally advanced international marketing as a discipline."]
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-blue-100 dark:border-slate-700",
        children: [createVNode("h3", {
          class: "text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3",
          children: "Excellence in Global Marketing Research Award"
        }), createVNode("p", {
          class: "text-slate-600 dark:text-slate-300",
          children: ["Honors ", createVNode("strong", {
            children: "impactful research contributions"
          }), " that push the boundaries of global marketing knowledge."]
        })]
      })]
    }), "\n", createVNode($$Note, {
      title: "Nominations Welcome",
      description: "Nominations for SIG awards are accepted from the scholarly community. Contact the SIG Chair for nomination procedures and deadlines."
    }), "\n", createVNode($$CallToAction, {
      actions: [{
        variant: 'primary',
        text: 'View SIG Awards Details & Past Recipients',
        href: '/awards/sig-awards',
        icon: 'lucide:award'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "journal-of-international-marketing-awards",
      children: "Journal of International Marketing Awards"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.em, {
        children: "Journal of International Marketing"
      }), " Editorial Board presents two awards at the ", createVNode(_components.strong, {
        children: "AMA Summer Educators’ Conference"
      }), ", celebrating published articles that have transformed international marketing scholarship."]
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 gap-6 my-8",
      children: [createVNode("div", {
        class: "bg-gradient-to-br from-amber-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-amber-200 dark:border-slate-700",
        children: [createVNode("h3", {
          class: "text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3",
          children: "Hans B. Thorelli Award"
        }), createVNode("p", {
          class: "text-slate-600 dark:text-slate-300",
          children: ["Honors articles with ", createVNode("strong", {
            children: "sustained, long-term impact"
          }), " on international marketing theory or practice."]
        }), createVNode("p", {
          class: "text-sm text-slate-500 dark:text-slate-400 mt-3 italic",
          children: "Awarded for articles published 5+ years prior"
        })]
      }), createVNode("div", {
        class: "bg-gradient-to-br from-amber-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-amber-200 dark:border-slate-700",
        children: [createVNode("h3", {
          class: "text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3",
          children: "S. Tamer Cavusgil Award"
        }), createVNode("p", {
          class: "text-slate-600 dark:text-slate-300",
          children: ["Celebrates the article published each calendar year that most effectively ", createVNode("strong", {
            children: "advances international marketing management practice"
          }), "."]
        })]
      })]
    }), "\n", createVNode("div", {
      class: "bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 my-6",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Selection Process:"
        }), " JIM awards are selected by the ", createVNode(_components.em, {
          children: "Journal of International Marketing"
        }), " Editorial Board. No external nominations are required."]
      })
    }), "\n", createVNode($$CallToAction, {
      actions: [{
        variant: 'primary',
        text: 'View JIM Awards Details & Past Recipients',
        href: '/awards/jim-awards',
        icon: 'lucide:scroll-text'
      }]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "nominate-a-colleague",
      children: "Nominate a Colleague"
    }), "\n", createVNode(_components.p, {
      children: "Know a scholar whose work has significantly impacted international marketing? SIG award nominations are welcomed from the scholarly community."
    }), "\n", createVNode($$CallToAction, {
      title: "Recognize Excellence in Our Field",
      subtitle: "Help us honor scholars advancing international marketing scholarship",
      actions: [{
        variant: 'primary',
        text: 'Submit a Nomination',
        href: '/contact',
        icon: 'lucide:send'
      }, {
        text: 'Contact SIG Chair',
        href: 'mailto:goksel.yalcinkaya@unh.edu',
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

const url = "/awards";
const file = "/home/user/website/src/pages/awards/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/awards/index.mdx";
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
