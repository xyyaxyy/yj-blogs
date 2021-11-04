const head = require('./config/head.js')
const plugins = require('./config/plugins.js')

module.exports = {
  title: "xyyaxyy'blogs",
  description: '一只菜鸟的博客',
  dest: 'dist',
  base: '/dist/',
  port: 8090,


  // 主题配置
  theme: 'reco',
  themeConfig: {
    // 顶部导航栏
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: 'Docs',
        icon: 'reco-message',
        items: [
          {
            text: 'vuepress-reco',
            link: '/docs/theme-reco/'
          },
          {
            text: '收藏的网站',
            link: '/docs/test/'
          },
        ]
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            'text': 'GitHub',
            'link': 'https://github.com/xyyaxyy',
            'icon': 'reco-github'
          }
        ]
      }
    ],
    // sidebar: {
    //   '/docs/theme-reco/': [
    //     '',
    //     'theme',
    //     'plugin',
    //     'api'
    //   ]
    // },
    sidebar: 'auto', // 采用自动生成侧边栏，懒人做法
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebarDepth: 2, // 侧边栏深度
    type: 'blog',

    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类'
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签'
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/xyyaxyy' }
        // { icon: 'reco-npm', link: 'https://www.npmjs.com/xyyaxyy' }
      ]
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'tomorrow', // 代码主题 default 'tomorrow'
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'xyyaxyy',
    authorAvatar: '/avatar.png',
    record: 'xxxx',
    startYear: '2021'
  },

  markdown: {
    lineNumbers: true // 代码行号开启
  },

  head, // head配置
  plugins // 插件配置
}