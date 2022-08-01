"use strict";

let numberOfFilms, score, lastFilm;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,

    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        let i = 0;
        while (i < 2) {
            lastFilm = prompt("последний фильм?", "");
            score = prompt("оценка фильма", "");
            if (lastFilm != "" && lastFilm != null && score != "" && score != null && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = score;
                console.log("done");
                i++;
            } else {
                i--;
                console.log("error");
            }
        }
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log("база закрыта");
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10) {
            alert("просмотрено слишком мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("вы киноман");
        } else if (personalMovieDB.count > 30) {
            alert("Вы монстр!");
        } else {
            alert("Произошла ошибка");
        }
    },

    writeYourGenres: function () {
        let askGenre;
        for (let i = 1; i < 2; i++) {
            askGenre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            // askGenre = prompt(`Ваш любимый жанр под номером ${i}`, "");

            // if (askGenre != null || askGenre != "") {
            //     personalMovieDB.genres[i - 1] = [askGenre];
            //     console.log("жанр добавлен");
            // } else {
            //     i--;
            //     console.log("введено неверное значение");
            // }

            if (askGenre != null || askGenre != "") {
                personalMovieDB.genres = askGenre.split(", ");
                personalMovieDB.genres.sort();

                // personalMovieDB.genres.askGenre.split(", ");
                console.log("жанр добавлен");
            } else {
                i--;
                console.log("введено неверное значение");
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр #${i + 1} это ${item}`);
        });
    },
    toggleVisibleMyDb: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
            console.log("база открыта");
        } else {
            personalMovieDB.private = true;
            console.log("база закрыта");
        }
        console.log(personalMovieDB.private);
    },
};

// for (let i = 0; i < 2; i++) {
//     lastFilm = prompt("последний фильм?", "");
//     score = prompt("оценка фильма", "");
//     if (lastFilm != "" && lastFilm != null && score != "" && score != null && lastFilm.length < 50) {
//         personalMovieDB.movies[lastFilm] = score;
//         console.log("done");
//     } else {
//         i--;
//         console.log("error");
//     }

// const arr = [1, 15, 4, 30, 5],
//     sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }
// compareNum();
// console.log(sorted)