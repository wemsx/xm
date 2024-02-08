import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小末花",
  description: "五班班级文化建设官方独家指定IP",

  theme,

  head: [
    [
      "link",
      {
        href: "https://cdn.bootcdn.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.min.css",
        rel: "stylesheet",
      },
    ],
    [
      "style",
      {},
      `\
        body, p, h1, h2, h3, h4, h5, h6 {
          font-family: "LXGW WenKai Screen", sans-serif !important;
        }
      `,
    ],
  ],
  // 和 PWA 一起启用
  shouldPrefetch: false,
});
