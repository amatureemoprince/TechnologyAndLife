import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "bookmark",
    link: "/",
  },
  {
    text: "使用指南",
    icon: "compass",
    link: "/java-coffee/"
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
    text: "笔隙杂谈",
    icon: "feather",
    link: "/read-book-thinking/"
  },
  {
    text: "周周新鲜事",
    icon: "lightbulb",
    link: "/week-update/"
  },
  {
    text: "网站相关",
    icon: "users",
    children: [
      {
        text: "查看历史",
        link: "/article/",
        icon: "book"
      },
      {
        text: "关于作者",
        link: "/about-the-author/",
        icon: "user"
      }
    ]
  },
]);