"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const looked1 = prompt("Один из последних просмотренных фильмов?", "");
const value1 = prompt("На сколько оцените фильм?", "");
const looked2 = prompt("Один из последних просмотренных фильмов?", "");
const value2 = prompt("На сколько оцените фильм?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[looked1] = value1;
personalMovieDB.movies[looked2] = value2;
console.log(personalMovieDB);
