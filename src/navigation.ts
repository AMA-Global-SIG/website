import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      links: [
        {
          text: 'Mission & Objectives',
          href: getPermalink('/mission'),
        },
        {
          text: 'History',
          href: getPermalink('/history'),
        },
        {
          text: 'Leadership & Governance',
          href: getPermalink('/leadership'),
        },
        {
          text: 'Bylaws',
          href: getPermalink('/bylaws'),
        },
      ],
    },
    {
      text: 'Conferences',
      links: [
        {
          text: 'Nice 2026',
          href: getPermalink('/conferences/nice-2026'),
        },
        {
          text: 'Osaka 2027',
          href: getPermalink('/conferences/osaka-2027'),
        },
        {
          text: 'Conference History',
          href: getPermalink('/conferences/history'),
        },
        {
          text: 'Submission Guidelines',
          href: getPermalink('/conferences/submission-guidelines'),
        },
        {
          text: 'Presentation Guidelines',
          href: getPermalink('/conferences/presentation-guidelines'),
        },
      ],
    },
    {
      text: 'Doctoral Consortia',
      links: [
        {
          text: 'Nice 2026',
          href: getPermalink('/doctoral-consortium/nice-2026'),
        },
        {
          text: 'Osaka 2027',
          href: getPermalink('/doctoral-consortium/osaka-2027'),
        },
        {
          text: 'Application Process',
          href: getPermalink('/doctoral-consortium/application-process'),
        },
      ],
    },
    {
      text: 'Awards',
      links: [
        {
          text: 'SIG Awards',
          href: getPermalink('/awards/sig-awards'),
        },
        {
          text: 'JIM Awards',
          href: getPermalink('/awards/jim-awards'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Nice 2026',
      href: getPermalink('/conferences/nice-2026'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'Mission & Objectives', href: getPermalink('/mission') },
        { text: 'History', href: getPermalink('/history') },
        { text: 'Leadership & Governance', href: getPermalink('/leadership') },
        { text: 'Bylaws', href: getPermalink('/bylaws') },
      ],
    },
    {
      title: 'Conferences',
      links: [
        { text: 'Nice 2026', href: getPermalink('/conferences/nice-2026') },
        { text: 'Osaka 2027', href: getPermalink('/conferences/osaka-2027') },
        { text: 'Conference History', href: getPermalink('/conferences/history') },
        { text: 'Submission Guidelines', href: getPermalink('/conferences/submission-guidelines') },
      ],
    },
    {
      title: 'Awards',
      links: [
        { text: 'SIG Awards', href: getPermalink('/awards/sig-awards') },
        { text: 'JIM Awards', href: getPermalink('/awards/jim-awards') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Join AMA', href: 'https://www.ama.org' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} AMA Global Marketing SIG. All rights reserved.
  `,
};
