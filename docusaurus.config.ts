import type { Config } from "@docusaurus/types";

const config: Config = {
    title: "Wave Terminal Documentation",
    tagline: "Level Up Your Terminal With Graphical Widgets",
    favicon: "img/logo/wave-logo_appicon.svg",

    // Set the production url of your site here
    url: "https://docs.waveterm.dev/",
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
        [
            "@docusaurus/plugin-sitemap",
            {
                lastmod: "date",
                changefreq: "daily",
                priority: 0.5,
                filename: "sitemap.xml",
            },
        ],
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
                href: "https://www.waveterm.dev/",
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
                    href: "https://discord.gg/zUeP2aAjaP",
                    position: "right",
                    className: "header-link-custom custom-icon-discord",
                    "aria-label": "Discord invite",
                },
                {
                    href: "https://github.com/wavetermdev/waveterm",
                    position: "right",
                    className: "header-link-custom custom-icon-github",
                    "aria-label": "GitHub repository",
                },
            ],
        },
        metadata: [
            {
                name: "keywords",
                content:
                    "terminal, developer, development, command, line, wave, linux, macos, windows, connection, ssh, cli, waveterm, documentation, docs, ai, graphical, widgets, remote, open, source, open-source, go, golang, react, typescript, javascript",
            },
        ],
        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} Command Line Inc. Built with Docusaurus.`,
        },
    },
    headTags: [
        {
            tagName: "link",
            attributes: {
                rel: "preload",
                as: "font",
                type: "font/woff2",
                "data-next-font": "size-adjust",
                href: "/fontawesome/webfonts/fa-sharp-regular-400.woff2",
            },
        },
    ],
    stylesheets: ["/fontawesome/css/fontawesome.min.css", "/fontawesome/css/sharp-regular.min.css"],
    staticDirectories: ["static"],
};

export default config;
