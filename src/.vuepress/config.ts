import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig(
    {
      base: "/",
      lang: "zh-CN",
      title: "Java咖啡馆",
      description: "热爱技术、享受生活",
      theme,
          head: [
                ['link', { rel: 'icon', href: '/TechnologyAndLife/favicon.ico' }], // 设置 favicon
          ],
      // 和 PWA 一起启用
      // shouldPrefetch: false,
});
