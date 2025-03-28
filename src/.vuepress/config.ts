import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig(
    {
      lang: "zh-CN",
      title: "Java咖啡馆",
      description: "热爱技术、享受生活",
      theme,
          head: [
                ['link', { rel: 'icon', href: '/favicon.ico' }], // 设置 favicon
                ['meta', { name: 'baidu-site-verification', content: 'codeva-EW7fPgf7Zs' }],
          ],
      // 和 PWA 一起启用
      // shouldPrefetch: false,
});
