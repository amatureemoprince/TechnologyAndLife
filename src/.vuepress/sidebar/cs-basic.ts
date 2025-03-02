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
                link: "preface/",
                prefix: "preface/",
                children: [
                    "first-introduction-to-computer-networks",
                    "computer-network-details"
                ]
            },
            {
                text: "物理层",
                prefix: "physical-layer/",
                link: "physical-layer/",
                children: [

                ]
            },

        ],
        expanded: false
    },
    {
        text: "数据结构",
        collapsible: true,
        icon: "data_usage",
        children: [

        ],
        expanded: false
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