#!/usr/bin/env sh

# Остановить выполнение при ошибках
set -e

# Собрать проект
npm run build

# Перейти в папку сборки
cd dist

# Инициализировать репозиторий и закоммитить файлы
git init
git add -A
git commit -m 'Deploy'

# Отправить файлы на GitHub Pages (замени "username" и "repo")
git push -f https://github.com/AlexeyZelenko/test-figma.git master:gh-pages

# Вернуться в корень проекта
cd -
