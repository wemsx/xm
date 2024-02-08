import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://xm.wemsx.cn",

  author: {
    name: "Luo Hou",
    url: "https://wemsx.cn",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg",

  repo: "wemsx/xm",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "MIT Licensed | Copyright © since 2022 xiaomo",
  displayFooter: true,

  // 加密配置
  //encrypt: {
  //  config: {
      //"/demo/encrypt.html": ["1234"],
  //  },
  //},

  // 多语言配置
  metaLocales: {
    editLink: "想尝试编辑此页？",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    // 你应该自行生成自己的评论服务
    /*comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },*/

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: false,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 vuepress-plugin-pwa2 并取消下方注释
    pwa: {
       favicon: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg",
       cacheHTML: false,
       cachePic: true,
       appendBase: true,
       update: 'hint',
       apple: {
         icon: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg",
         statusBarColor: "black",
       },
       msTile: {
         image: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg",
         color: "#ffffff",
       },
       manifest: {
         icons: [
           {
             src: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg",
             sizes: "512x512",
             purpose: "any",
             type: "image/svg+xml",
           },
           {
             src: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg",
             sizes: "any",
             type: "image/svg+xml",
           },
         ],
         shortcuts: [
           {
             name: "小末花",
             short_name: "小末",
             url: "/xm/",
             icons: [
               {
                 src: "/assets/icon/guide-maskable.png",
                 sizes: "192x192",
                 purpose: "maskable",
                 type: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg",
               },
             ],
           },
         ],
       },
     },
  },
});
