/*
 * @Author: your name
 * @Date: 2021-11-03 15:38:23
 * @LastEditTime: 2021-11-03 15:42:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-blogs\.vuepress\config\head.js
 */
module.exports = [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    [
        'link',
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ],
      [
        'meta',
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,user-scalable=no'
        }
      ]
]