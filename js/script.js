"use strict";

// 1) Это старый вариант превращения в строку. С помощью String
console.log(typeof(String(null))); // превращаем null в строку
// 2) Это более новый вариант
console.log(typeof (null + "")); //При сложении чего либо со строкой получается строка

const num = 5;

console.log("https://vk.com/catalog/" + num); // Пример использования - чтобы динамически подключить страницу

// To number

// 1) Старое превращение в число
console.log(typeof(Number('4')));
// 2) Превращение в число с помощью унарного плюса
console.log(typeof(+'5'));
// 3) Превращение в число, 15пикселей в 10чной системе.
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// Всё что получаем от пользователя - всегда будет строкой, часто его надо преобразовать в другой тип

// To boolean
// 1)
// False
0, '', null, undefined, NaN;
// True всё остальное

let switcher = null;
if (switcher) {
  console.log('Working...');
};

switcher = 1;
if (switcher) {
  console.log('Working...');
};

// 2)
console.log(typeof(Boolean('4')));

// 3) два знака !! это превращение в boolean
console.log(typeof(!!"4444"));