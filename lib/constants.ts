import type { SiteConfig } from "@/types";

/**
 * Central site config. When the final custom domain is ready, replace only
 * `url` below — buildMetadata() and all OG / canonical links derive from it.
 */
export const siteConfig: SiteConfig = {
  name: "Fangzhou Lin",
  url: "https://fangzhoulin.com",
  description: {
    en: "Academic personal website of Fangzhou Lin, undergraduate student in Electrical Engineering and Automation at Wuhan University, focused on power forecasting, multimodal learning, and AI for energy systems.",
    zh: "武汉大学电气工程及其自动化本科生林方舟的学术个人主页，聚焦电力系统时序预测、多模态数据建模与面向能源的人工智能方法。",
  },
  author: "Fangzhou Lin",
  nav: [
    { label: { en: "Home", zh: "首页" }, href: "/" },
    { label: { en: "Projects", zh: "项目" }, href: "/projects" },
    { label: { en: "CV", zh: "简历" }, href: "/cv" },
    { label: { en: "Contact", zh: "联系" }, href: "/contact" },
  ],
  links: {
    github: "https://github.com/CrimsonFZ",
    email: "2023302071360@whu.edu.cn",
  },
};
