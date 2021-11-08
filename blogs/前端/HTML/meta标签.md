<!--
 * @Author: your name
 * @Date: 2021-11-03 17:54:15
 * @LastEditTime: 2021-11-08 15:02:20
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-blogs\blogs\前端\HTML\meta标签.md
-->
---
title: meat标签
date: 2021-11-01
tags:
 - tag2
categories:
 - 前端
sticky: 
  description: 文章置顶。
  type: 1
  sort type: 降序，可以按照 1, 2, 3, ... 来降低置顶文章的排列优先级
---
::: tip
meta标签
:::
## 一、基本标签
不区分大小写
```html
<!DOCTYPE html> <!-- 使用 HTML5 doctype，不区分大小写 -->
```
## 二、meta属性
```sh
mkdir my-blogs && cd my-blogs
```
### 2、使用你喜欢的包管理器进行初始化
```sh
yarn init # npm init
```
### 3、引入[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)主题
```sh
yarn add -D vuepress-theme-reco # npm install -D vuepress-theme-reco
```
### 4、使用官方的模板初始化项目
```sh
theme-cli init blogs
```
根据步骤输入内容即可
### 5、安装依赖并运行
```sh
yarn install # npm install
yarn dev # npm run dev
```
现在博客已经可以正常使用了，我们还可以继续优化自己的博客，更加个性化。
### 6、开发环境下解决热重载问题
大多数时候更改了配置文件热启动都会失效。  
可以在package.json 中配置运行指令 "docs:dev": "vuepress dev docs --temp .temp" 加一个临时目录解决热重载问题。  
参考[vuepress issue#2437](https://github.com/vuejs/vuepress/issues/2437)
