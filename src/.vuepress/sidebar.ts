import { sidebar } from "vuepress-theme-hope";
import { javaCoffee} from "./sidebar/java-coffee.js";
import { javaProject} from "./sidebar/java.js";

export default sidebar({
    //关于项目的侧边栏
    "/java-coffee/": javaCoffee,
    //java侧边栏
    "/java/": javaProject,
});