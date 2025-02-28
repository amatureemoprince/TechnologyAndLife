import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "bookmark",
    link: "/",
  },
  {
    text: "使用指南",
    icon: "/compass/",
    link: "/about-the-project/"
  },
  {
    text: "Java 生态圈",
    icon: "laptop-code",
    link: "/java/",
  },
  {
    text: "计算机基础",
    icon: "book-open",
    link: "/cs-basic/"
  },
  {
    text: "杂谈",
    icon: "feather",
    link: "/read-book-thinking/"
  },
  {
    text: "周周新鲜事",
    icon: "lightbulb",
    link: "/week-update/"
  },
  {
    text: "关于作者",
    icon: "users",
    link: "/about-the-author/",
  },
]);