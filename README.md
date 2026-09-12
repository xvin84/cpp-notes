# Конспекты курса C++ (МФТИ)

Сайт: https://xvin84.github.io/cpp-notes

Статический сайт на [Quartz 5](https://github.com/jackyzha0/quartz).
Содержимое не редактируется здесь: заметки живут в приватной базе Obsidian,
а сюда попадают скриптом `publish.sh` из неё — и только те, что прочитаны
и проверены автором (`status: read` или `mastered`).

Сборка и публикация — GitHub Actions (`.github/workflows/deploy.yml`),
запускается автоматически при push в `main`, занимает около минуты.

Локальный просмотр:

```sh
npm ci
npx quartz build --serve   # http://localhost:8080
```

Код Quartz распространяется по лицензии MIT, см. `LICENSE.txt`.
