// 这里的姓名与简介都是虚构示例，可按需修改。
const profile = {
  name: "林知夏",
  bio: "独立设计师与前端开发者，喜欢把复杂的想法变成简单、好用、带点温度的作品。",
  email: "hello@example.com",
  github: "https://github.com/",
  social: "https://github.com/",
  socialLabel: "GitHub"
};

document.querySelectorAll("[data-name]").forEach((el) => { el.textContent = profile.name; });
document.querySelectorAll("[data-bio]").forEach((el) => { el.textContent = profile.bio; });
document.querySelectorAll("[data-email]").forEach((el) => { el.textContent = profile.email; });
document.querySelector("[data-email-link]").href = `mailto:${profile.email}`;
document.querySelector("[data-github]").href = profile.github;
document.title = `${profile.name} — 个人主页`;
document.querySelector("#year").textContent = new Date().getFullYear();

