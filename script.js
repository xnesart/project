"use strict";
const overlay = document.querySelector(".overlay");
const btn = document.querySelector("button");
let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if ((i = 1)) {
    //     btn.removeEventListener("click", deleteElement);
    // }
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

// отменяем стандартные действия браузера
const link = document.querySelector("a");
link.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target);
});
// вешаем обработчик событий на несколько элементов
const btns = document.querySelectorAll("button");
btns.forEach((item) => {
    item.addEventListener("click", deleteElement, {once: true}); // с помощью опции once указываем, что этот обработчик сработает только 1 раз
});
