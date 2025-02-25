import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/TechnologyAndLife/",

  lang: "zh-CN",
  title: "TechnologyAndLife",
  description: "热爱技术、享受生活",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
