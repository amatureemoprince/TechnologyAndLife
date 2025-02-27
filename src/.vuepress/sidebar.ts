import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": false,

    // 生活随笔部分不显示侧边栏
    "/life/": false,
    "/demo/": false,
    // 阅读感悟部分不显示侧边栏
    "/reading/": false,
    "/post/": false,
    // 技术博客部分不显示侧边栏
    "/intro": false,

});
