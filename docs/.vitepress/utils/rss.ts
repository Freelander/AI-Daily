import path from "node:path";
import { writeFileSync } from "node:fs";
import { Feed } from "feed";
import { createContentLoader, type SiteConfig } from "vitepress";

const hostname = "https://daily.gojun.me";

export async function createRssFileZH(config: SiteConfig) {
  const feed = new Feed({
    title: "高军 AI 日报",
    description: "《高军 AI 日报》：每天花 1 分钟时间，获取精选的前沿 AI 信息。内容涵盖但不限于前沿 AI 资讯、AI 工具、AI 绘画、开源项目和学习教程等。",
    id: hostname,
    link: hostname,
    language: "zh-Hans",
    image: "/favicon.png",
    favicon: "/favicon.ico",
    copyright: "Copyright© 2024-present GoJun",
  });

  const posts = await createContentLoader("posts/**/*.md", {
    excerpt: true,
    render: true,
  }).load();

  posts.sort((a, b) => Number(+new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)));

  for (const { url, excerpt, html, frontmatter } of posts) {
    // 仅保留最近5篇文章
    if (feed.items.length >= 5) {
      break;
    }

    feed.addItem({
      title: frontmatter.title,
      id: `${hostname}${url}`,
      link: `${hostname}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: "GoJun",
          email: "https://daily.gojun.me",
          link: "https://daily.gojun.me",
        },
      ],
      date: frontmatter.date,
    });
  }

  writeFileSync(path.join(config.outDir, "feed.xml"), feed.rss2(), "utf-8");
}

export async function createRssFileEN(config: SiteConfig) {
  const feed = new Feed({
    title: "高军 AI 日报",
    description: "《高军 AI 日报》：每天花 1 分钟时间，获取精选的前沿 AI 信息。内容涵盖但不限于前沿 AI 资讯、AI 工具、AI 绘画、开源项目和学习教程等。",
    id: hostname,
    link: hostname,
    language: "en-US",
    image: "/favicon.png",
    favicon: "/favicon.ico",
    copyright: "Copyright© 2024-present GoJun",
  });

  const posts = await createContentLoader("en/posts/**/*.md", {
    excerpt: true,
    render: true,
  }).load();

  posts.sort((a, b) => Number(+new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)));

  for (const { url, excerpt, html, frontmatter } of posts) {
    // 仅保留最近5篇文章
    if (feed.items.length >= 5) {
      break;
    }

    feed.addItem({
      title: frontmatter.title,
      id: `${hostname}${url}`,
      link: `${hostname}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: "GoJun",
          email: "https://daily.gojun.me",
          link: "https://daily.gojun.me",
        },
      ],
      date: frontmatter.date,
    });
  }

  writeFileSync(path.join(config.outDir, "feed-en.xml"), feed.rss2(), "utf-8");
}
