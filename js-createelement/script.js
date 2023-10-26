// Создание элементов в DOM

// Создание элемента в DOM

// метод createElement()
// const title = document.createElement("h1") // создаем тег h1
// title.innerText = "Это мой заголовок" // добавляем текст в h1
// const header = document.querySelector("header") // ищем header, чтобы добавить туда h1
// header.append(title) // добавляем title в тег header

/*
    Создание элемента
    1. создаем тег - createElement("tagName")
    2. добавляем содержимое - innerText
    3. находим элемент, куда мы положим созданный нами тег - querySelector()
    4. кладем созданный тег в найденный элемент в 3 этапе - append()

    append() принимает созданный с помощью createElement тег
*/

// метод createElement()
// const title = document.createElement("h1")
// title.innerText = "Это мой заголовок"
// const header = document.querySelector("header")
// header.append(title)

// Задача. Создать тег p с текстом "hello world" в div.item

// const text = document.createElement("p")
// text.innerText = "Hello World"
// const item = document.querySelector(".item")
// item.append(text)

/*
    element.insertAdjacentHTML("position", "html содержимое")
    
    position:
    1. beforebegin - до начала элемента (до открывающего тега)
    2. afterbegin - сразу после открывающего тега
    3. beforeend -  перед закрывающим тегом
    4. afterend - после конца элемента (после закрывающего тега)

    element.innerHTML = "<p>Hello World</p>" -- пересоздает уже имеющиеся теги
*/

// Задача. Создать тег p с текстом "hello world" в div.item используя element.insertAdjacentHTML()

// const item = document.querySelector(".item")
// item.insertAdjacentHTML("afterbegin", "<p>Hello World</p>")
// item.innerHTML = "<p>Hello World</p>"

// Создать множество параграфов(p) с числами от 0 до 19 в div.item . используя цикл for

// const item = document.querySelector(".item")
// for (let i = 0; i < 20; i++) {
// 	// console.log(i)
// 	const paragraph = document.createElement("p")
// 	paragraph.innerText = i
// 	item.append(paragraph)
// }

// второй вариант решения задачи

// for (let i = 0; i < 20; i++) {
// 	// console.log(i)
// 	item.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
// }

// Написать цикл, который проходится по массиву строк и создает тег p для каждой строки и добавляет в item. insertAdjacentHTML()

// const names = ["Arsen", "Artem", "Vlad", "Alina", "Iren"]

// const item = document.querySelector(".item")
// for (let i = 0; i < names.length; i++) {
// 	item.insertAdjacentHTML(
// 		"beforeend",
// 		`<div class="item-2"><p>${names[i]}</p></div>`
// 	)
// }

// Задача. Создать тег h1 внутри header с помощью insertAdjacentHTML и добавить текст из переменной text в h1

// const text = "Hello World"
// const header = document.querySelector("header")
// header.insertAdjacentHTML("beforeend", `<h1>${text}</h1>`)

/*
    Алгоритм добавления тега с помощью insertAdjacentHTML
    1. находим элемент, куда нужно положить новый тег. querySelector()
    2. определяем позицию (чаще всего - beforeend)
    3. создаем html содержимое (<h1>Добавленный текст, контент</h1>)
*/

const products = [
	{
		name: "Молоко",
		price: 500,
	},
	{
		name: "Гречка",
		price: 700,
	},
	{
		name: "Масло",
		price: 600,
	},
	{
		name: "Рис",
		price: 700,
	},
	{
		name: "Мука",
		price: 600,
	},
]

// Задача. Отобразить карточки товаров в div.item, в которой в теге <h5> будут названия продуктов, а в теге <p> их цена

const item = document.querySelector(".item")

for (let i = 0; i < products.length; i++) {
	item.insertAdjacentHTML(
		"beforeend",
		`<div class="product">
      <h5>${products[i].name}</h5>
      <p>${products[i].price}</p>
   </div>`
	)
	console.log(
		`В магазине нужно купить ${products[i].name}, его цена ${products[i].price}`
	)
}

// Отобразить в консоли строку `В магазине нужно купить {name}, его цена {price}`</div>`)
