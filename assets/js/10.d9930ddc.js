(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{569:function(s,t,a){s.exports=a.p+"assets/img/blogs1.21451e58.png"},570:function(s,t,a){s.exports=a.p+"assets/img/blogs2.d27012bb.png"},593:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("这里只介绍手动部署和自动部署到 github 服务器")])]),n("h2",{attrs:{id:"一、手动部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、手动部署"}},[s._v("#")]),s._v(" 一、手动部署")]),s._v(" "),n("p",[s._v("打开项目设置的 "),n("code",[s._v("GitHub Pages")]),s._v(" 模块，将 "),n("code",[s._v("Source")]),s._v("设置为 "),n("code",[s._v("gh-pages")]),s._v("，这样我们就可以将博客项目放在 "),n("code",[s._v("master")]),s._v(" 分支，而部署到 "),n("code",[s._v("gh-pages")]),s._v(" 分支。")]),s._v(" "),n("h3",{attrs:{id:"_1、在根目录新建一个-deploy-sh-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、在根目录新建一个-deploy-sh-文件"}},[s._v("#")]),s._v(" 1、在根目录新建一个 "),n("code",[s._v("deploy.sh")]),s._v(" 文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run build")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" dist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.xyyaxyy-blogs.com'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy3 发布信息'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:xyyaxyy/yj-blogs.git master:gh-pages\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"_2、在-package-json-文件中添加-deploy-bash-deploy-sh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、在-package-json-文件中添加-deploy-bash-deploy-sh"}},[s._v("#")]),s._v(" 2、在 "),n("code",[s._v("package.json")]),s._v(" 文件中添加 "),n("strong",[s._v('"deploy": "bash deploy.sh"')])]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev . --temp .temp"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build ."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash deploy.sh"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_3、一键部署命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、一键部署命令"}},[s._v("#")]),s._v(" 3、一键部署命令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" deploy "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run deploy")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("windows系统下使用 bash 命令窗")])]),s._v(" "),n("h3",{attrs:{id:"_4、部署成功-从github服务器访问项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、部署成功-从github服务器访问项目"}},[s._v("#")]),s._v(" 4、部署成功，从Github服务器访问项目")]),s._v(" "),n("p",[s._v("前往"),n("code",[s._v("github")]),s._v("查看分支，如果有"),n("code",[s._v("gh-pages")]),s._v("分支，则说明部署成功。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(569),alt:""}})]),s._v(" "),n("p",[s._v("项目 > Settings > GitHub Pages , "),n("strong",[s._v("蓝色的链接")]),s._v("即为访问地址。")]),s._v(" "),n("p",[s._v("你也可以自定义域名，就是下边的 "),n("strong",[s._v("Custom domain")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(570),alt:"image-20211112160118514"}})]),s._v(" "),n("h2",{attrs:{id:"二、github-actions-实现自动部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、github-actions-实现自动部署"}},[s._v("#")]),s._v(" 二、Github Actions 实现自动部署")])])}),[],!1,null,null,null);t.default=e.exports}}]);