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
        {
            type: "doc",
            id: "wsh",
            label: "Wsh",
        },
        {
            type: "doc",
            id: "widgets",
            label: "Widgets",
        },
    ],
};

export default sidebars;
