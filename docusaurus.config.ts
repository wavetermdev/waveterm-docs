import type { Config } from "@docusaurus/types";

const config: Config = {
    title: "Wave Terminal Documentation",
    tagline: "Level Up Your Terminal With Graphical Widgets",
    favicon: "img/logo/wave-logo_appicon.svg",

    // Set the production url of your site here
    url: "https://beta.docs.waveterm.dev/",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

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
        "ideal-image",
    ],
    themes: [["classic", { customCss: "src/css/custom.css" }]],
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
            },
            hideOnScroll: true,
            items: [
                {
                    type: "doc",
                    position: "left",
                    docId: "index",
                    label: "Docs",
                },
                {
                    html: "<div/>",
                    href: "https://github.com/wavetermdev/waveterm",
                    position: "right",
                    className: "header-github-link",
                    "aria-label": "GitHub repository",
                },
            ],
        },
        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} Command Line Inc. Built with Docusaurus.`,
        },
    },
    staticDirectories: ["static"],
};

export default config;
