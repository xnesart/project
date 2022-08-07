/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: ["Бомж", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
    };

    let removeAd = document.querySelector(".promo__adv"),
        genreOfFilm = document.querySelector(".promo__genre"),
        backgroundImage = document.querySelector(".promo__bg"),
        movieList = document.querySelector(".promo__interactive-list"),
        addNewFilm = document.querySelector("#addfilm"),
        newInputFilm = document.querySelector(".adding__input"),
        addToFavorite = document.querySelector("#favorite"),
        addForm = document.querySelector(".add");

    function someActions() {
        removeAd.remove();
        genreOfFilm.innerHTML = "ДРАМА";
        backgroundImage.style.cssText = "background: url(../img/bg.jpg) center top";
    }
    someActions();
    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);
    function createMovieList(films, parent) {
        sortArr(movieDB.movies);
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
              <li class="promo__interactive-item">${i + 1}. ${film}
                      <div class="delete"></div>
               </li>
              `;
        });
        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            });
        });
    }
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);

    addNewFilm.addEventListener("click", (e) => {
        let inputing = newInputFilm.value;
        e.preventDefault();
        if (inputing.length > 21) {
            inputing = `${inputing.substring(0, 22)}...`;
        }
        if (addNewFilm.click && newInputFilm.value != "") {
            movieDB.movies.push([inputing]);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);

            newInputFilm.value = "";
            console.log(movieDB);
        }
        if (addToFavorite.checked) {
            console.log("Сделать любимым");
            addToFavorite.checked = false;
        }

        console.log("click");
    });
});
