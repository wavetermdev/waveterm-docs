import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
    mainSidebar: [
        {
            type: "doc",
            id: "index",
            label: "Home",
        },
        {
            type: "doc",
            id: "keybindings",
            label: "Keybindings",
        },
    ],
};

export default sidebars;
