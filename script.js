"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () { //создаем методы внутри функции
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name){  //добавляем методы функции конструктору без взаимодействия с ним
 console.log(`Пользователь ${this.name} ушел`)
}

const ivan = new User("Ivan", 28);
const alex = new User("Alex", 20);

ivan.exit();

ivan.hello() //вызываем метод
alex.hello() //вызываем метод

console.log(ivan);
console.log(alex);
