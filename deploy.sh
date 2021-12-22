#!/usr/bin/env sh

# 提交源代码到远程分支
git push git@github.com:codehzy/learn-vue.git master
git push git@gitee.com:codehzy/learn-vue.git master

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:codehzy/learn-vue.git master:gh-pages
git push -f git@gitee.com:codehzy/learn-vue.git master:gh-pages

cd -
