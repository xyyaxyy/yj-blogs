module.exports = [
    // 自动生成左侧侧边栏的插件
    [
        'vuepress-plugin-auto-sidebar',
        {
            collapse: {
                open: true,
            },
        },
    ],

    // 支持中文文件名
    [
        'permalink-pinyin',
        {
            lowercase: true, // Converted into lowercase, default: true
            separator: '-', // Separator of the slug, default: '-'
        },
    ],

    // 看板娘插件
    [
        '@vuepress-reco/vuepress-plugin-kan-ban-niang', {
            theme: [
                'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
            ],
            clean: false,
            messages: {
                welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。'
            },
            messageStyle: { right: '68px', bottom: '290px' },
            width: 250,
            height: 320
        }
    ],

    // 公告
    [
        '@vuepress-reco/vuepress-plugin-bulletin-popover', {
            title: '公告',
            body: [
                {
                    type: 'title',
                    content: '欢迎加我的QQ/vx 🎉🎉🎉',
                    style: 'text-aligin: center;',
                },
                {
                    type: 'text',
                    content: 'QQ/VX：842905485',
                    style: 'text-align: center;'
                },
                {
                    type: 'text',
                    content: '喜欢的主题特效可以去个人信息',
                    style: 'text-align: center;'
                },
                {
                    type: 'text',
                    content: '友链或疑问均可在留言板给我留言',
                    style: 'text-align: center;'
                }
            ],
            footer: [
                {
                    type: 'button',
                    text: '打赏',
                    link: '/blog/donate'
                },
            ]
        }
    ],

    // 音乐播放器
    [
        '@vuepress-reco/vuepress-plugin-bgm-player', {
            audios: [
                // 本地文件示例
                // {
                //   name: '장가갈 수 있을까',
                //   artist: '咖啡少年',
                //   url: '/bgm/1.mp3',
                //   cover: '/bgm/1.jpg'
                // },
                // 网络文件示例
                {
                    name: '강남역 4번 출구',
                    artist: 'Plastic / Fallin` Dild',
                    url: 'https://assets.smallsunnyfox.com/music/2.mp3',
                    cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
                },
                {
                    name: '用胳膊当枕头',
                    artist: '최낙타',
                    url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                    cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
                }
            ]
        }
    ],

    // 鼠标点击特效
    [
        'vuepress-plugin-cursor-effects',
        {
            size: 2,                    // size of the particle, default: 2
            shape: 'circle',  // shape of the particle, default: 'star'
            zIndex: 999999999           // z-index property of the canvas, default: 999999999
        }
    ],

    // 代码复制
    [
        "vuepress-plugin-nuggets-style-copy",
        {
            copyText: "Copy",
            tip: {
                content: "Copied successfully!",
            },
        },
    ],

    // 图片放大
    [
        '@vuepress/medium-zoom', {
            selector: '.theme-reco-content img',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 20
            }
        }
    ],

    // 评论插件
    [
        '@vuepress-reco/comments', {
            solution: 'valine',
            options: {
                appId: 'LINKt7frofNFCMznCWAev9Hf-gzGzoHsz',// your appId
                appKey: '8nmEel013YpJ4S7lP0O4LGk6', // your appKey
            }
        }
    ],

    // 最后更新时间插件
    '@vuepress/last-updated'
]