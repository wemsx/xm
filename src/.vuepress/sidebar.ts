import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/xm/": "structure",
  "/": [
    "",
    {
      text: "关于小末花",
      icon: "laptop-code",
      prefix: "xm/",
      link: "xm/",
      children: "structure",
    },
  ],
});
