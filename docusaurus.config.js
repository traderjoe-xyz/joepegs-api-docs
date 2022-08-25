// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// links
const APPLICATION_FORM_URL = "https://forms.gle/6tMwevFCicd9nYoCA";
const VERIFICATION_FORM_URL = "https://forms.gle/ApNx6VvH6zK8kPpDA";
const LAUNCHPAD_FORM_URL = "https://forms.gle/ApNx6VvH6zK8kPpDA";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Joepegs API",
  tagline:
    "Joepegs is the trusted NFT Marketplace on Avalanche. The Joepegs API provides access to NFT collection, item and owner data.",
  url: "https://api.joepegs.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "traderjoe-xyz", // Usually your GitHub org/user name.
  projectName: "barn-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    // Redocusaurus config
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "openapi/openapi.json",
            route: "/api/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Joepegs API",
        logo: {
          alt: "Joepegs Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/api", label: "API", position: "left" },
          { to: "/docs/exchange", label: "Exchange", position: "left" },
          {
            to: "/docs/auction_house",
            label: "Auction House",
            position: "left",
          },
          { to: "/docs/images", label: "Images", position: "left" },
          { to: "/docs/metadata", label: "Metadata", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              { to: "/api", label: "API Docs", position: "left" },
              { to: "/docs/exchange", label: "Exchange", position: "left" },
              {
                to: "/docs/metadata",
                label: "Metadata Specs",
                position: "left",
              },
              { to: "/docs/images", label: "Image Specs", position: "left" },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://chat.joepegs.com",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/joepegs_nft",
              },
            ],
          },
          {
            title: "Apply",
            items: [
              { href: APPLICATION_FORM_URL, label: "Apply API Key" },
              { href: VERIFICATION_FORM_URL, label: "Apply Verification" },
              { href: LAUNCHPAD_FORM_URL, label: "Apply Launchpad" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SOJ Limited. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
