# # 确保脚本抛出遇到的错误
# set -e

# # 生成静态文件
# yarn build

# # 进入生成的文件夹
# cd dist

# # 如果是发布到自定义域名
# # echo '111.173.115.117'

# git init
# git add -A
# git commit -m 'deploy3'

# # 如果发布到 https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# # 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:xyyaxyy/yj-blogs.git master:gh-pages

# cd -

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd dist

# deploy to github pages
# echo 'b.xugaoyi.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:xyyaxyy/yj-blogs.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://xyyaxyy:${GITHUB_TOKEN}@github.com/xyyaxyy/yj-blogs.git
  git config --global user.name "xyyaxyy"
  git config --global user.email "842905485@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

# deploy to coding pages
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:xgy/xgy.git
# else
#   codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

cd -
rm -rf dist