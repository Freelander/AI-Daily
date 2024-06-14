export function createSideBarZH() {
  return [
    {
      text: '2024年',
      collapsed: true,
      items: [
        { text: '6 月 14 日', link: '/posts/2024/6-14' },
        { text: '6 月 13 日', link: '/posts/2024/6-13' },
        { text: '6 月 12 日', link: '/posts/2024/6-12' },
        { text: '6 月 11 日', link: '/posts/2024/6-11' },
        { text: '6 月 10 日', link: '/posts/2024/6-10' },
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
