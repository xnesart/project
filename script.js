"use strict";

let numberOfFilms, score, lastFilm;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true,
};
function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log("база закрыта");
    }
}
showMyDb(personalMovieDB.private);
function writeYourGenres() {
    let askGenre;
    for (let i = 1; i <= 3; i++) {
        askGenre = prompt(`Ваш любимый жанр под номером ${i}`, "");
        if (askGenre != null && askGenre != "") {
            personalMovieDB.genres[i-1] = [askGenre];
            console.log("жанр добавлен");
        } else {
            i--;
            console.log("введено неверное значение");
        }
    }
}
writeYourGenres();

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
function rememberMyFilms() {
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
}
function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert("просмотрено слишком мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("вы киноман");
    } else if (personalMovieDB.count > 30) {
        alert("Вы монстр!");
    } else {
        alert("Произошла ошибка");
    }
}

console.log(personalMovieDB);
