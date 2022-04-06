"use strict";

// let a = 5,
//   b = a;

// b = b + a;
// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// };

// // передача ссылки на уже существующий объект
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

// соединение объектов
const add = {
  d: 17,
  e: 20,
};
console.log(Object.assign(numbers, add));
// создаем пустой объект
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

// создаем копию массива
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "asdadssa";
console.log(newArray);
console.log(oldArray);

// оператор Spread
const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);

// Пример, функция для логирования данных
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
// Этот массив приходит с сервера(предположим). Нам надо передать это в функцию log, но она принимает только 3 отдельных элемента, а не массив. Мы используем spread оператор, чтобы обойти это.
const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
  one: 1,
  two: 2,
};

const newObj = {...q};
