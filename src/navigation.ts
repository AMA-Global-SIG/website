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
          text: 'Board of Directors',
          href: getPermalink('/board-of-directors'),
        },
        {
          text: 'History',
          href: getPermalink('/history'),
        },
        {
          text: 'Leadership & Governance',
          href: getPermalink('/leadership'),
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
          text: 'Awards Overview',
          href: getPermalink('/awards/overview'),
        },
        {
          text: 'Significant Contributions Award',
          href: getPermalink('/awards/significant-contributions'),
        },
        {
          text: 'Excellence in Research Award',
          href: getPermalink('/awards/excellence-research'),
        },
        {
          text: 'Hans B. Thorelli Award',
          href: getPermalink('/awards/thorelli-award'),
        },
        {
          text: 'S. Tamer Cavusgil Award',
          href: getPermalink('/awards/cavusgil-award'),
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
        { text: 'Board of Directors', href: getPermalink('/board-of-directors') },
        { text: 'History', href: getPermalink('/history') },
        { text: 'Leadership & Governance', href: getPermalink('/leadership') },
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
        { text: 'Awards Overview', href: getPermalink('/awards/overview') },
        { text: 'Significant Contributions Award', href: getPermalink('/awards/significant-contributions') },
        { text: 'Excellence in Research Award', href: getPermalink('/awards/excellence-research') },
        { text: 'Hans B. Thorelli Award', href: getPermalink('/awards/thorelli-award') },
        { text: 'S. Tamer Cavusgil Award', href: getPermalink('/awards/cavusgil-award') },
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
