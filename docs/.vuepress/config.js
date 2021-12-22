module.exports = {
  title: 'Vue学习文档',
  description: 'Vue最新学习文档',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  base: '/learn-vue/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },

      {
        text: 'JavaScript博客',
        items: [
          { text: 'Github', link: 'https://github.com/codehzy' },
          { text: '掘金', link: 'https://juejin.cn/user/1714893872178823' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, //折叠
        children: [{ title: '学前必读', path: '/' }]
      },
      {
        title: '基础学习',
        path: '/handbook/vue-base',
        collapsable: false, //折叠
        children: [
          { title: '条件类型', path: '/handbook/vue-base' },
          { title: '泛型', path: '/handbook/vue-hooks' }
        ]
      }
    ],
    // 开始多级标题展示
    subSideBar: 'auto'
  }
}
