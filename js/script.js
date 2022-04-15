"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart");

console.dir(box);
box.style.backgroundColor = "blue";
box.style.width = "500px";
btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// Назначение нескольких inline стилей
box.style.cssText = "background-color: aqua; width: 500px";

// Над несколькими элементами
// 1
for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "blue";
}
// 2
hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});
// Создаем элемент, он существует только внутри js, он не появится на странице
const div = document.createElement("div");
//Используется редко
const text = document.createTextNode("Тут был я");

//Создаем элемент и добавляем класс
div.classList.add("black");
//Добавляем наш div в конец body. Тупо выбираем родителя и ему добавляем элемент
document.body.append(div);
// 2
document.querySelector(".wrapper").append(div);
const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart");
  wrapper = querySelector(".wrapper");

  wrapper.append(div);
wrapper.prepend(div);//помещает в начало родителя
wrapper.appendChild(div); //То же самое

wrapper.insertBefore(div, hearts[0]);// Это старое добавление

// Помещаем div перед элементом
hearts[0].before(div);
// Помещаем div после элемента
hearts[0].after(div);

// Удаляем элемент
circles[0].remove();
wrapper.removeChild(hearts[1]);//Раньше удаляли через родителя


// замена элемента
hearts[0].replaceWith(circles[0]);
wrapper.replaceChild(circles[0], hearts[0]);//Первый элемент меняется на второй. Устаревшее

div.innerHTML = '<h1>hello world</h1>';// Тут добавится html структура - теги h1
div.textContent = 'Hello'; // Тут просто текст добавится
div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>')// beforebegin afterbegin beforeend