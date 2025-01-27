// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RC Knowledgebase", // Improved title formatting
  tagline: "Bring your RC Knowledge to another level", // More specific tagline
  favicon: "img/favicon.ico",

  // Updated URL with correct GitHub username
  url: "https://CagriCatik.github.io",
  baseUrl: "/RC-Knowledgebase/",

  organizationName: "CagriCatik",
  projectName: "RC-Knowledgebase",
  deploymentBranch: "gh-pages",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Added /tree/main/ to edit URL path
          editUrl: "https://github.com/CagriCatik/RC-Knowledgebase/tree/main/",
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/CagriCatik/RC-Knowledgebase/tree/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Added custom social card (you should create this image)
      image: "img/rc-plane-social-card.jpg",
      // Added Katex CSS for math support
      stylesheets: [
        {
          href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
          type: "text/css",
          integrity:
            "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
          crossorigin: "anonymous",
        },
      ],
      navbar: {
        title: "",
        logo: {
          alt: "RC Knowledgebase Logo", // Improved alt text
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "planeSidebar",
            position: "left",
            label: "RC Plane 🛩️",
          },

          {
            type: "docSidebar",
            sidebarId: "carSidebar",
            position: "left",
            label: "RC Car 🏎️",
          },

          {
            type: "docSidebar",
            sidebarId: "controllerSidebar",
            position: "left",
            label: "Controller 🎮",
          },

          {
            type: "docSidebar",
            sidebarId: "threeDimSidebar",
            position: "left",
            label: "3D Printing 🖨️",
          },

          {
            type: "docSidebar",
            sidebarId: "faqSidebar",
            position: "left",
            label: "FAQ ❓",
          },

          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/CagriCatik/My-RC-Plane-Knowledgebase",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // Updated copyright notice
        copyright: `RC Knowledgebase`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // Added additional language support (optional)
        additionalLanguages: ["bash", "diff", "json"],
      },
    }),
};

export default config;
