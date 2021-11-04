---
title: vuepress-theme-reco 搭建指南
date: 2021-11-04
sticky: 
  description: 文章置顶。
  type: 10
  sort type: 降序，可以按照 1, 2, 3, ... 来降低置顶文章的排列优先级
---
::: tip
前提条件
Vuepress 需要 Node.js > 8.6  
vuepress 1.8.2  
vuepress-theme-reco 1.6.6
:::
## 一、初始化项目
本文章以[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)主题搭建博客，你也可以用其他的主题，比如[vuepress-theme-vdoing](https://xugaoyi.github.io/vuepress-theme-vdoing-doc/)。
### 1、创建一个新的目录
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
