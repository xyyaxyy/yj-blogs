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
```sh
yarn init # npm init
```
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
