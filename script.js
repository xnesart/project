"use strict";

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         // return this.a + this.b; //это будет undefined
//         return a + b; //используем замыкание функции, оно в итоге подставит a и b
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this); //этот this покажет объект, в котором вызывается метод
//         function shout(){
//             console.log(this); // а это простой вызов функции, будет undefined
//         }
//         shout();
//     },
// };
// obj.sum();
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () { //создаем методы внутри функции
//         console.log(`Hello ${this.name}`);
//     };
// }
// let ivan = new User('Ivan', 28);// Контекст вызова будет ссылаться на этот экземпляр, подставляя вместо this данный объект

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: "John",
// };
// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count(num) {
//     return this * num;
// }
// const double = count.bind(2); //это передастся вместо this
// console.log(double(3));
// console.log(double(13));

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    //когда обработчик события написан в классическом виде - function() то контекстом вызова будет сам элемент,  на котором произошло событие
    console.log(this);
    this.style.backgroundColor = "red";
});
const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this); //изза стрелочной функции this покажет метод, а метод покажет объект. В итоге this покажет нам объект obj
            console.log(this.num); //если бы функция была обычная, то была бы ошибка, тк num в ней нету, а стрелочная функция найдет num в объекте
        };
        say();
    },
};
obj.sayNumber();

// Примеры
const double = (a) => { //аналогично
    return a * 2;
};
const doublle = a => a * 2; // аналогично

const btnn = document.querySelector("button");
btn.addEventListener("click", (e) => {
    //это то же самое что и с this
    console.log(e.target);
    e.target.style.backgroundColor = "red";
});