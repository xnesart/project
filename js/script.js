"use strict";

// "stroka".toUpperCase;

// let str = "some";
// let strObj = new String(str);
// console.log(typeof str);
// console.log(typeof strObj);

console.dir([1, 2, 3]);

// создаем среднестатистического солдата
const soldier = {
  health: 400,
  armor: 120,
  sayHello: function(){
    console.log("hello");
  }
};
// создаем конкретного солдата
const john = {
  health: 100
};
// Устаревший формат. Тут написано, что мы установили прототипом Джона - солдата
// john.__proto__ = soldier; 

Object.setPrototypeOf(jonh, soldier);

// Здесь покажет, что у Джона есть только health
console.log(john);
// Но если указать ещё и армор, то он появится у джона
console.log(john.armor);
// Выводим sayHello. Джон берет из своего прототипа метод hello и выводит его
john.sayHello()


// Создаем новый объект john, который будет прототипно наследоваться от солдата
const john = Object.create(soldier);