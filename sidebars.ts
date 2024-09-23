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
        {
            type: "doc",
            id: "config",
            label: "Configuration",
        },
        {
            type: "doc",
            id: "telemetry",
            label: "Telemetry",
        },
    ],
};

export default sidebars;
