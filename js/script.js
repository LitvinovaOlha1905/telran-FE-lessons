// alert("Hello")
// console.log(100)
// prompt("Введите число")

// const numbers = []
// const firstNumber = +prompt("Введите первое число:")
// const secondNumber = +prompt("Введите второе число:")
// numbers.push(firstNumber, secondNumber)
// console.log(numbers)

// можно менять значение переменной
// let name = "Arsen"
// name = "Vlad"
// console.log(name)

// нельзя менять значение переменной const
// const userName = "Arsen"
// userName = "Artem"
// console.log(userName)

// let 1name = "Arsen" - нельзя. let name1 = "Arsen" - можно
// let imya = "Arsen"
// let Name = "Arsen"

// Задача1. отобразить введенное число в консоли
// const number = +prompt("Введите число")
// console.log(number)
// console.log(typeof number)

// const username = "Arsen"
// const surname = "Iusupov"
// console.log(username + "Iusupov") // конкатенация строк
// console.log(`Имя: ${username}, Фамилия: ${surname}`) // интерполяция строк

// Задача2. Попросить у пользователя ввести имя. а в консоли отобразить "Привет, {введенное имя}"
// 1. попросить пользователя ввести имя
// 2. сохранить в переменную введеное имя
// 3. с помощью методов склеивания строк, отобразить нужный результат в консоли
// const username = prompt("Введите ваше имя")
// console.log("Привет, " + username)
// console.log(`Привет, ${username}`)

// Задача3. Есть три переменные r, g, b. В консоли отобразить rgb({r}, {g}, {b})
// const r = 100
// const g = 57
// const b = 141
// console.log(`rgb(${r}, ${g}, ${b})`)
// console.log("rgb" + "(" + r + ", " + g + ", " + b + ")")
// rgb(100, 57, 141) --> 100, 57, 141

// Задача4. Попросить у пользователя ввести год рождения и в консоли вывести "Вам {n} лет"
// const year = +prompt("Введите год вашего рождения")
// console.log(`Вам ${2023 - year} лет`)

// 2000 -----> 2023 - 2000 = 23.  "Вам 23 лет"

// _____________________________ УСЛОВНОЕ ВЕТВЛЕНИЕ
// Задача5. Если сегодня больше 20 градусов, то отобразить в консоли "Надевай футболку"
// Если сегодня ровно 20 градусов, то "Надень рубашку, не так жарко"
// const degree = 20 // градусы сегодня
// if(degree > 20) {
//     console.log("Надевай футболку") //действие, если условие истинно
// } else if(degree == 20) {
//     console.log("Надень рубашку, не так жарко")
// } else {
//     console.log("Бррр... Надень куртку") // действие, если условие ложно
// }

// Задача 6. Попросить пользователя ввести число. Если оно положительное,
//  отображаем в консоли "Положительное"
// если отрицательное - "Отрицательное"
// если равно нулю - "Равно нулю"
// const number = +prompt("Введите число")
// if(number > 0) {
//     console.log("Положительное")
// } else if(number === 0) {
//     console.log("Равно нулю")
// } else {
//     console.log("Отрицательное")
// }

// Задача7. Есть переменная sum, которая является суммой товаров, купленных пользователем
// Если сумма больше 1000, в консоли отобразить "Ваша скидка 10%"
// Если сумма больше 1500, в консоли отобразить "Ваша скидка 15%"
// Иначе отобразить "Скидок нет"
// const sum = 500
// if(sum >= 1500) {
//     console.log("Ваша скидка 15%")
// } else if (sum >= 1000) {
//     console.log("Ваша скидка 10%")
// } else {
//     console.log("Скидок нет")
// }

/*
    if(1000 < sum < 1500)
    if(sum > 1000 && sum < 1500)
    && - логическое И. выражение в скобках будет TRUE только если оба выражения верны

    || - логическое ИЛИ. выражение в скобках будет TRUE если хотя бы одно верно

    number % 10    

    Если условие верно, то делаем одно
    иначе делаем другое

    if(condition) {
        do smth
    } else if() {
        do smth
    } else {
        do smth
    }

    if(условие) {
        сделать что-то
    }
*/

/*
    = - оператор присваивания

    Оператор сравнения 
    > - больше
    < - меньше
    <= - меньше или равно
    >= - больше или равно
    == - сравнение
    === - сравнение с учетом типа данных

    20 == "20" - true 
    20 === "20" - false, учитываем тип данных, он разный => false
*/

/*
    const year = "2023"
    "Вам" + year //  "Вам2023"
    "Вам" - year 

    Математические операторы
        const a = 20
        const b = 30
        1. console.log(a + b) // сложение
        2. console.log(a - b) // вычитание
        3. console.log(a * b) // умножение
        4. console.log(a / b) // деление
        5. console.log(a ** b) // возведение в степень 20^30
        6. console.log(a % b) // остаток от деления 20/30 = 20

*/

/*

    `` - косые кавычки, Ё на англ

    const Username = "Arsen"
    const username = "Artem"

    prompt по умолчанию меняет тип введенного значения в строку,
        нужно добавить +prompt, чтобы получить число в prompt

    typeof - функция для определения типа данных переменной, значения

    примитивы:
        1. string - строка - "Hello", "My name is Arsen", "105452.1355", "100"
        2. number - число - 100, 100.5, 

    Объекты - это не примитивные. массив - частный случай объекта

   const names = ["Arsen", "Artem", "Vlad"]
   names[1] = "Yevhenii"

    Правила наименования переменных
    1. осмысленность - даем название переменной по смыслу
    2. латинские маленькие буквы, числа, символы (_, $), - error
    3. числа не могут быть первым символом
    4. без пробелов
        4.1 snake_case - user_name
        4.2 camelCase  - userName - более часто используемый

    

    переменная - именованный контейнер для хранения данных

    JS - не типизированный ЯП
        TS - делает JS типизированным

    var, let, const - три ключевых слова для создания переменных
    var - устаревшее, для старых браузеров, не используется

    let, const
        let создает переменную, которую можно перезаписать

        const создает переменную, которую перезаписать нельзя
*/

// однострочный комментарий
/*
    Многострочный комментарий

    alert - браузерное уведомление, отображается как модальное окно
        и ждет подтверждения пользователем нажатия OK
*/