import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "home", // 添加首页图标
    link: "/",
  },
  {
    text: "关于Java",
    icon: "pen-to-square",
    link: "/demo",
  },
  {
    text: "生活随笔",
    icon: "pen-to-square",
    prefix: "/posts/",
    link: "/life"
  },
  {
    text: "技术随笔",
    icon: "book",
    prefix: "/posts/notebook",
    link: "/tech",
  },
]);