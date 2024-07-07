export function createSideBarZH() {
  return [
    {
      text: '2024年',
      collapsed: true,
      items: [
        { text: '7 月 6 日', link: '/posts/2024/7-06' },
        { text: '7 月 5 日', link: '/posts/2024/7-05' },
        { text: '7 月 4 日', link: '/posts/2024/7-04' },
        { text: '7 月 3 日', link: '/posts/2024/7-03' },
        { text: '7 月 2 日', link: '/posts/2024/7-02' },
        { text: '7 月 1 日', link: '/posts/2024/7-01' },
        { text: '6 月 30 日', link: '/posts/2024/6-30' },
        { text: '6 月 29 日', link: '/posts/2024/6-29' },
        { text: '6 月 28 日', link: '/posts/2024/6-28' },
        { text: '6 月 27 日', link: '/posts/2024/6-27' },
        { text: '6 月 26 日', link: '/posts/2024/6-26' },
        { text: '6 月 25 日', link: '/posts/2024/6-25' },
      ]
    }
  ]
}

// 英文侧边栏更换格式，否则太占位了
export function createSideBarEN() {
  return [
    {
      text: 'The Year 2024',
      collapsed: true,
      items: [
        { text: '002: The Motivation for indie Development', link: '/en/posts/2024/002' },
        { text: '001: AI Content Pollution in Search', link: '/en/posts/2024/001' },
        { text: '000: A New Beginning', link: '/en/posts/2024/000' },
      ]
    }
  ]
}

分享一个快速、易用且高度可配置的终端 Spotify 播放器 spotify_player。

具有如下功能：

- 极简的用户界面，具有直观的分页和弹出系统。
- 高度可配置，满足个性化需求。
- 功能与官方 Spotify 应用程序相同。
- 支持通过 Spotify Connect 进行远程控制。
- 支持直接在终端中流式传输歌曲。
- 支持大多数歌曲的歌词显示。
- 支持在多个操作系统上进行媒体控制。
- 支持专辑封面等图像的渲染。
- 支持桌面通知。
- 支持将应用程序作为守护进程运行。
- 提供广泛的命令行接口 (CLI) 命令。

这播放器装在电脑上，黑客感瞬间就上来了，被朋友看到满脸牛逼的样子。