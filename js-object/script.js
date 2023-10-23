// Объекты

// const user = [] // пустой объект
// const doctor = {
// 	// ключ: "значение"
// 	name: "Arsen",
// 	prof: "Стоматолог",
// 	exp: 20,
// 	skills: ["Терапевт", "ортодонт", "имплантолог"],
// 	age: 45,
// 	room: {
// 		terapevt: ["рентген-аппарат", "бор-машина"],
// 		orthodont: ["операционный зал"],
// 	},
// 	schedule: {
// 		monday: ["9:00", "17:00"],
// 		tuesday: ["10:00 - 16:00"],
// 	},
// }
// console.log(doctor.name)

// console.log(doctor.schedule.monday[1])

const products = [
	{
		name: "молоко",
		price: 500,
	},
	{
		name: "масло",
		price: 400,
	},
	{
		name: "гречка",
		price: 700,
	},
]

let sum = 0
for (let i = 0; i < products.length; i++) {
	sum += products[i].price
}
console.log(sum)
