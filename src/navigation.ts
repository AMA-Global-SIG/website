import { getPermalink } from './utils/permalinks';

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
          text: 'Leadership & Governance',
          href: getPermalink('/leadership'),
        },
        {
          text: 'Board of Directors',
          href: getPermalink('/board-of-directors'),
        },
        {
          text: 'History',
          href: getPermalink('/history'),
        },
      ],
    },
    {
      text: 'Conferences',
      links: [
        {
          text: 'Osaka 2027',
          href: getPermalink('/conferences/osaka-2027'),
        },
        {
          text: 'Past Conferences',
          href: getPermalink('/conferences/past-conferences'),
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
          text: 'Osaka 2027',
          href: getPermalink('/doctoral-consortium/osaka-2027'),
        },
        {
          text: 'Past Consortia',
          href: getPermalink('/doctoral-consortium/past-consortia'),
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
      text: 'Osaka 2027',
      href: getPermalink('/conferences/osaka-2027'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'Mission & Objectives', href: getPermalink('/mission') },
        { text: 'Leadership & Governance', href: getPermalink('/leadership') },
        { text: 'Board of Directors', href: getPermalink('/board-of-directors') },
        { text: 'History', href: getPermalink('/history') },
      ],
    },
    {
      title: 'Events',
      links: [
        { text: 'Osaka 2027 Conference', href: getPermalink('/conferences/osaka-2027') },
        { text: 'Osaka 2027 Consortium', href: getPermalink('/doctoral-consortium/osaka-2027') },
        { text: 'Past Conferences', href: getPermalink('/conferences/past-conferences') },
        { text: 'Past Consortia', href: getPermalink('/doctoral-consortium/past-consortia') },
      ],
    },
    {
      title: 'Awards',
      links: [
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
  ],
  footNote: `
    © ${new Date().getFullYear()} AMA Global Marketing SIG. All rights reserved.
  `,
};
