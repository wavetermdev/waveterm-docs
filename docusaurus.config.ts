import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "Wave Terminal Documentation",
  tagline: "Wavy Wavy Wavy",
  favicon: "img/logo/wave-logo_appicon.svg",

  // Set the production url of your site here
  url: "https://wavetermdev.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/waveterm-docs-new/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "wavetermdev", // Usually your GitHub org/user name.
  projectName: "waveterm-docs-new", // Usually your repo name.
  deploymentBranch: "main",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "content-docs",
      {
        path: "docs",
        routeBasePath: "/",
      } as import("@docusaurus/plugin-content-docs").Options,
    ],
  ],
  themes: ["classic"],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        src: "img/logo/wave-light.png",
        srcDark: "img/logo/wave-dark.png",
        href: "https://waveterm.dev/",
        height: "32px",
      },
      hideOnScroll: true,
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          label: "Github",
          href: "https://github.com/wavetermdev/waveterm",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
  },
  staticDirectories: ["static"],
};

export default config;
