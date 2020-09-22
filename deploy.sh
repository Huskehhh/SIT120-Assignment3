#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build -g

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Huskehhh/SIT120-Assignment3.git master:gh-pages

cd -
