---
title: "Курс C++ МФТИ"
type: map
status: read
tags: [cpp, map]
created: 2026-09-12
aliases: ["00-карты/курс-c++-мфти"]
---

Конспекты по курсу C++ на Физтехе, осенний семестр 2026/27. Общее вступление
и как читать сайт — на главной, [[index|Конспекты МФТИ]].

## С чего начать

Начинать с [[10-lectures/cpp/l01-vvedenie-v-cpp|L01 - Введение в C++]]: оттуда есть ссылки на все остальные
страницы курса.

## Лекции

| № | Лекция | Дата |
|---|--------|------|
| 01 | [[10-lectures/cpp/l01-vvedenie-v-cpp\|L01 - Введение в C++]] | 12.09.2026 |
| 02 | [[10-lectures/cpp/l02-oblasti-vidimosti-i-cikly\|L02 - Области видимости и циклы]] | 19.09.2026 |

## Термины

**Типы данных**
- [[20-terms/celochislennye-tipy|Целочисленные типы]] — размеры, диапазоны, суффиксы литералов
- [[20-terms/bezznakovye-tipy|Беззнаковые типы]] — обёртывание и ловушки сравнения
- [[20-terms/tipy-s-plavayuschey-tochkoy|Типы с плавающей точкой]] — точность и почему нельзя сравнивать через `==`
- [[20-terms/simvolnyy-tip-char|Символьный тип char]] — символ как число, ASCII, знаковость
- [[20-terms/literaly|Литералы]] — системы счисления, типы и суффиксы

**Операции и преобразования**
- [[20-terms/vyrazheniya-i-operatory|Выражения и операторы]] — арность, приоритет, ассоциативность
- [[20-terms/arifmeticheskie-preobrazovaniya-tipov|Арифметические преобразования типов]] — продвижение и общий тип операции
- [[20-terms/celochislennoe-delenie-i-ostatok|Целочисленное деление и остаток]] — усечение, отрицательные, округление вверх
- [[20-terms/static_cast|static_cast]] — явное приведение типов
- [[20-terms/const-i-constexpr|const и constexpr]] — именованные константы
- [[20-terms/inicializaciya-peremennyh|Инициализация переменных]] — почему `int x = 0;`

**Логика и ветвление**
- [[20-terms/logicheskie-operacii-i-korotkoe-zamykanie|Логические операции и короткое замыкание]] — `&&`, `||`, гарантии порядка
- [[20-terms/pobitovye-operacii|Побитовые операции]] — `& | ^ ~`, сдвиги и их ловушки
- [[20-terms/uslovnyy-operator-if|Условный оператор if]] — ветвление, цепочки, потерявшийся `else`
- [[20-terms/cikly|Циклы]] — `while`, `do-while`, `for`, `break` и `continue`

**Имена и время жизни**
- [[20-terms/oblast-deystviya|Область действия]] — где объект существует: блоки, автоматические и глобальные переменные
- [[20-terms/oblast-vidimosti|Область видимости]] — где объект доступен по имени, сокрытие и `::`
- [[20-terms/obyavlenie-i-opredelenie|Объявление и определение]] — имя против объекта, `extern`

**Ввод-вывод**
- [[20-terms/potoki-vvoda-i-vyvoda|Потоки ввода и вывода]] — `std::cin`, `std::cout`, `'\n'` против `std::endl`
- [[20-terms/formatirovanie-vyvoda|Форматирование вывода]] — `<iomanip>`, липкие и одноразовые манипуляторы

**Язык и инструменты**
- [[20-terms/kompilyaciya-i-sborka|Компиляция и сборка]] — компиляторы, стадии сборки, флаги
- [[20-terms/podklyuchenie-zagolovkov|Подключение заголовков]] — как работает `#include`
- [[20-terms/neopredelyonnoe-povedenie|Неопределённое поведение]] — UB и как его ловить
- [[20-terms/kodstayl-kursa|Кодстайл курса]] — правила оформления кода

## Разборы кода

- [[30-code/cpp/l01-razbor-main-cpp|L01 - Разбор - main.cpp]] — код, который писали на первом занятии
