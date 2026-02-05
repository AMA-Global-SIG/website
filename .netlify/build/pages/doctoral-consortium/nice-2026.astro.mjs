import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../../chunks/astro/server_BLBUtamV.mjs';
import { $ as $$MarkdownLayout } from '../../chunks/MarkdownLayout_Cc9YnM10.mjs';
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
  "title": "2026 Nice Doctoral Consortium",
  "description": "AMA Global Marketing SIG Doctoral Consortium - Nice, France - May 26, 2026",
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "about-the-doctoral-consortium",
    "text": "About the Doctoral Consortium"
  }, {
    "depth": 2,
    "slug": "key-information",
    "text": "Key Information"
  }];
}
function _createMdxContent(props) {
  const _components = {
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
    children: [createVNode("div", {
      class: "bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-8 rounded-xl my-8",
      children: [createVNode("h2", {
        class: "text-3xl font-bold mb-2",
        children: "2026 Doctoral Consortium"
      }), createVNode("p", {
        class: "text-xl mb-2",
        children: "May 26, 2026"
      }), createVNode("p", {
        class: "text-lg",
        children: "Nice, France"
      }), createVNode("p", {
        class: "mt-2 text-sm opacity-80",
        children: "Held the day before the AMA Global Marketing Conference"
      })]
    }), "\n", createVNode($$Note, {
      title: "Details Coming Soon",
      description: "Information about the 2026 Nice Doctoral Consortium will be announced when the call for papers opens. Check back for application details, faculty mentors, and program schedule."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "about-the-doctoral-consortium",
      children: "About the Doctoral Consortium"
    }), "\n", createVNode(_components.p, {
      children: "The Doctoral Consortium provides a unique opportunity for PhD students with an interest in international and cross-cultural marketing to advance their research and careers. Held annually in conjunction with the AMA Global Marketing Conference, the Consortium brings together 15-25 doctoral students from around the world with leading scholars in the field."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "key-information",
      children: "Key Information"
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
              children: "Item"
            }), createVNode(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Details"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Date"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "May 26, 2026 (day before main conference)"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Location"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Nice, France"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: createVNode(_components.strong, {
                children: "Application Deadline"
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
                children: "Notification"
              })
            }), createVNode(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "TBD"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$CallToAction, {
      title: "Learn More",
      actions: [{
        variant: 'primary',
        text: 'Application Process',
        href: '/doctoral-consortium/application-process',
        icon: 'lucide:file-text'
      }, {
        text: 'Nice 2026 Conference',
        href: '/conferences/nice-2026',
        icon: 'lucide:calendar'
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

const url = "/doctoral-consortium/nice-2026";
const file = "/home/user/website/src/pages/doctoral-consortium/nice-2026.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/website/src/pages/doctoral-consortium/nice-2026.mdx";
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
