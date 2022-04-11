"use strict";

// Получение элемента по id
const box = document.getElementById('box');
console.log(box);
// Получение элемента по названию тегов
const btns = document.getElementsByTagName('button'); // Тут мы получили не один элемент, а псевдомассив
console.log(btns);
// Получаем конкретную кнопку
const btns = document.getElementsByTagName('button')[1];
console.log(btns);
// Меняем стиль конкретной кнопки
console.log(btns[0]);//Обратились к конкретной кнопке

const circles = document.getElementsByClassName('circle');
console.log(circles);

// Современные методы
// В скобки помещаем css селектор
const hearts = document.querySelectorAll('.heart'); // Он поддерживает все методы, которые были выше. У него есть метод forEach, хотя он является псевдомассивом
console.log(hearts);
hearts.forEach(item => {
  console.log(item);
});

// Получаем первый попавшийся элемент
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);