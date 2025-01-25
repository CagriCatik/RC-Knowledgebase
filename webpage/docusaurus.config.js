// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RC Knowledgebase',  // Improved title formatting
  tagline: 'Bring your RC Knowledge to another level',  // More specific tagline
  favicon: 'img/favicon.ico',

  // Updated URL with correct GitHub username
  url: 'https://CagriCatik.github.io',
  baseUrl: '/RC-Knowledgebase/',

  organizationName: 'CagriCatik',
  projectName: 'RC-Knowledgebase',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Added /tree/main/ to edit URL path
          editUrl: 'https://github.com/CagriCatik/RC-Knowledgebase/tree/main/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/CagriCatik/RC-Knowledgebase/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Added custom social card (you should create this image)
      image: 'img/rc-plane-social-card.jpg',
      // Added Katex CSS for math support
      stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
      navbar: {
        title: 'RC Knowledgebase',
        logo: {
          alt: 'RC Knowledgebase Logo',  // Improved alt text
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'RC Plane 🛩️',
          },

          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'RC Car 🏎️',
          },

          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '3D Printing 🖨️',
          },

          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/CagriCatik/My-RC-Plane-Knowledgebase',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'RC Groups Forum',
                href: 'https://www.rcgroups.com/',
              },
              {
                label: 'Discord Server',
                href: 'https://discord.gg/example-rc-community',  // Update with actual link
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/example-rc-channel',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CagriCatik/My-RC-Plane-Knowledgebase',
              },
            ],
          },
        ],
        // Updated copyright notice
        copyright: `Copyright © ${new Date().getFullYear()} RC Plane Knowledgebase. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // Added additional language support (optional)
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
};

export default config;