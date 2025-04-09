import { arraySidebar } from "vuepress-theme-hope";
export const computerBasic = arraySidebar([
    {
        //first-introduction-to-computer-networks.html
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
                    "first-introduction-to-computer-networks.md",
                    "computer-network-details.md"
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
            {
                text: "网络层",
                collapsible: true,
                expanded: true,
                prefix: "network-layer/",
                children: [
                    "overview.md",
                    "the-two-services.md"
                ]
            },
            {
                text: "传输层",
                collapsible: true,
                expanded: true,
                prefix: "transport-layer/",
                children: [
                    "overview.md",
                    "udp-user-datagram-protocol.md",
                    "tcp-transmission-control-protocol.md"
                ]
            }

        ],
        expanded: true
    },
    {
        text: "数据结构",
        collapsible: true,
        prefix: "data-structure/",
        icon: "folder-tree",
        children: [
            "README.md",
            "time-and-space-complexity.md",
            "linear-list.md",
            "stack-queue-array.md",
            "string.md",
            "tree-binary-tree.md",
            "graph.md",
            "search-algorithm.md",
            "sort-algorithm.md"
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