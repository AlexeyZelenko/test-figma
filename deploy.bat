@echo off
npm run build
cd dist
git init
git add -A
git commit -m "Deploy"
git push -f https://github.com/AlexeyZelenko/test-figma.git master:gh-pages
cd ..
