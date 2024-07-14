import { defineConfig, type SiteConfig } from 'vitepress'
// 自动导入TDesign 
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

import { createRssFileZH } from "../utils/rss";
import { handleHeadMeta } from "../utils/handleHeadMeta";
import { search as zhSearch } from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://daily.gojun.me'
  },
  head: [
    // 添加 Umami 跟踪代码
    ["script", { defer: "", src: "https://cloud.umami.is/script.js", "data-website-id": "622607f4-b160-40d2-83cf-feccf5a822e2" }],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  // https://vitepress.dev/reference/site-config#transformhead
  async transformHead(context) {
    return handleHeadMeta(context)
  },
  buildEnd: (config: SiteConfig) => {
    createRssFileZH(config);
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/favicon-512x512.png', width: 24, height: 24 },
    outline: [2, 4],

    search: {
      provider: "local",
      options: {
        locales: { ...zhSearch },
        miniSearch: {
          options: {}, // TODO
          searchOptions: { 
            fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 3 } 
          }
        }
      }
    },

    externalLinkIcon: true,
  },

  vite: {
    plugins: [
      // ...
      AutoImport({
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
      Components({
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
    ],
  },
})
