"use strict"
// Задача №1
// Отримати в константу елемент <body>

// const bodyElement = document.body;
// if (bodyElement) {
// 	console.log(bodyElement)
// }


// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// if (document.body) {
// 	const ulList = document.createElement(`ul`)

// 	function addListToBody(item = 3) {
// 		for (let i = 1; i <= item; i++) {
// 			const liItem = document.createElement(`li`)

// 			liItem.textContent = `Пункт №${i}`
// 			ulList.appendChild(liItem)
// 		}
// 	}
// 	addListToBody()

// 	document.body.appendChild(ulList)
// }



// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.


// const bodyElement = document.body
// bodyElement.classList.add(`loaded`)
// if (bodyElement.classList.contains(`loaded`)){
// 	bodyElement.style.backgroundColor = `green`
// }



// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// let listItems = document.querySelectorAll('.item');

// listItems.forEach((listItem, index) => {
// 	listItem.classList.add('active')
// 	listItem.textContent = `Елемент №${index + 1}`
// 	console.log(listItems)
// });



// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// const button = document.querySelector(`.button`)
// if (button) {
// 	function scrollToBlock() {
// 		button.scrollIntoView({
// 			block: "center",
// 			inline: "nearest",
// 			behavior: "smooth"
// 		})
// 	}
// 	scrollToBlock()
// }



// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// const link = document.querySelector(`.link`)

// if(link){
// 	const attr = parseFloat(link.dataset.someAttr = "100");
// 	if (attr < 200){
// 		link.style.color = `red`
// 	}
// }