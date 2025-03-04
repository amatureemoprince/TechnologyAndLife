import { arraySidebar } from "vuepress-theme-hope";
export const computerBasic = arraySidebar([
    {
        text: "计算机网络",
        collapsible: true,
        icon: "network-wired",
        prefix: "computer-network/",
        children: [
            {
                collapsible: true,
                text: "前言",
                prefix: "preface/",
                children: [
                    "first-introduction-to-computer-networks",
                    "computer-network-details"
                ],
                expanded: true
            },
            {
                text: "物理层",
                collapsible: true,
                prefix: "physical-layer/",
                children: [
                    "overview.md",
                ],
                expanded: true
            },

        ],
        expanded: true
    },
    {
        text: "数据结构",
        collapsible: true,
        prefix: "data-structure/",
        icon: "data_usage",
        children: [
            "README.md",
            "time-and-space-complexity.md",
        ],
        expanded: true
    },
    {
        text: "计算机组成原理",
        collapsible: true,
        icon: "computer",
        children: [

        ],
        expanded: false
    },
    {
        text: "操作系统",
        collapsible: true,
        icon: "fa-solid fa-laptop",
        children: [

        ],
        expanded: false
    }
])