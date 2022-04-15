/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
};

let ads = document.querySelector(".promo__adv");
let ads2 = document.querySelectorAll(".promo__adv img");
let promoGenre = document.querySelector(".promo__genre");
let promoBg = document.querySelector(".promo__bg");
// let interactiveItems = document.querySelectorAll(".promo__interactive-item");
let moveList = document.querySelector(".promo__interactive-list");

moveList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) =>{
  moveList.innerHTML = moveList.innerHTML + `
  <li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
  </li>
  `;
});
// interactiveItems[0].replaceWith(movieDB.movies[0]);
// ads.remove();

// interactiveItems.forEach((item) => {
//   item.innerHTML = `<li>ПРивет</li>  `;
// });
// interactiveItems.sort();
ads2.forEach((item) => {
  item.remove();
});
promoGenre.textContent = "Драма";
promoBg.style.backgroundImage = 'url("../img/bg.jpg")';
