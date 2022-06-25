"use strict";

let numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let lastFilm = prompt("Последний фильм?", ""),
    lastFilmValue = prompt("Оценка фильма", ""),
    lastFilm2 = prompt("Последний фильм?", ""),
    lastFilmValue2 = prompt("Ваша оценка", "");
personalMovieDB.movies[lastFilm] = lastFilmValue;
personalMovieDB.movies[lastFilm2] = lastFilmValue2;
console.log(personalMovieDB);
