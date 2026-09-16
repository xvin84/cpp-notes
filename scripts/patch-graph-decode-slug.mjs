// Патч плагина @quartz-community/graph: декодировать путь текущей страницы.
//
// Плагин определяет slug открытой заметки как window.location.pathname, не
// пропуская его через decodeURI. У нас все заметки названы по-русски, и
// браузер отдаёт pathname в percent-кодировке (%D0%BB%D0%B5%D0%BA...), тогда
// как ключи contentIndex.json — нормальная кириллица. Slug не находится в
// индексе, и вместо локального графа страница рисует один узел, подписанный
// сырым URL. На главной этого не видно: там slug пустой и кодировать нечего.
//
// Остальной Quartz эту ошибку не повторяет — в @quartz-community/utils
// getFullSlugFromUrl декодирует путь; это баг конкретного плагина.
//
// Запускается на postinstall, поэтому действует и локально, и в GitHub Actions
// после npm ci. Если плагин обновится и строка перестанет совпадать, скрипт
// падает — чинить нужно будет явно, а не гадать, почему граф снова пустой.

import { readFileSync, writeFileSync } from "node:fs"

const TARGETS = [
  "node_modules/@quartz-community/graph/dist/index.js",
  "node_modules/@quartz-community/graph/dist/components/index.js",
]

const FROM = "function we(){let u=window.location.pathname;"
const TO = "function we(){let u=decodeURI(window.location.pathname);"

let patched = 0
let alreadyPatched = 0

for (const file of TARGETS) {
  const source = readFileSync(file, "utf8")

  if (source.includes(TO)) {
    alreadyPatched++
    continue
  }

  if (!source.includes(FROM)) {
    console.error(
      `[patch-graph] В ${file} не найдено ни исходной строки, ни уже применённого патча.\n` +
        `[patch-graph] Похоже, плагин graph обновился. Проверьте, декодирует ли он\n` +
        `[patch-graph] window.location.pathname сам; если да — удалите этот скрипт\n` +
        `[patch-graph] и хук postinstall из package.json.`,
    )
    process.exit(1)
  }

  writeFileSync(file, source.replace(FROM, TO))
  patched++
}

if (patched > 0) {
  console.log(`[patch-graph] Патч slug'а применён к файлам: ${patched}.`)
} else {
  console.log(`[patch-graph] Патч slug'а уже на месте (${alreadyPatched}).`)
}
