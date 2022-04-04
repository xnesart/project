"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const looked1 = prompt("Один из последних просмотренных фильмов?", "");
// const value1 = prompt("На сколько оцените фильм?", "");
// const looked2 = prompt("Один из последних просмотренных фильмов?", "");
// const value2 = prompt("На сколько оцените фильм?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// personalMovieDB.movies[looked1] = value1;
// personalMovieDB.movies[looked2] = value2;
// console.log(personalMovieDB);

// if (4 == 9) {
//   console.log("OK");
// } else {
//   console.log("neok");
// }

// const num = 50;
// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Много");
// } else {
//   console.log("Ок!");
// }

// (num === 50) ? console.log("Ok!") : console.log("Error");
// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Правдивое');
//         break;
//     default:
//         console.log('не в этот раз!');
//         break;
// }

// while (num <= 55) {
//   console.log(num);
//   num++;
// }
// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);
// let num = 50;

// for (let i = 1; i < 10; i++) {
//     if (i === 6){
//         continue;
//     }
//     console.log(i);
// }
//========================================================================================================================================================

// for (let i = 0; i < 2; i++) {
//   let numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");
//   const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//   };
//   let lookedFilm = prompt("Один из последних просмотренных фильмов?", "");
//   let filmRate = prompt("Ваша оценка?", "");
//   if (lookedFilm != null && filmRate != null && lookedFilm.length < 50 && lookedFilm != "" && filmRate != "") {
//     personalMovieDB.movies[lookedFilm] = filmRate;
//   } else {
//     console.log("повторно введите ваш ответ");
//     i--;
//   }

//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено немного фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("вы заядлый киноман мазафака");
//   } else {
//     console.log("Произошла ошибка");
//   }
//   console.log(personalMovieDB);
// }
//========================================================================================================================================================

let numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");
let lookedFilm = prompt("Один из последних просмотренных фильмов?", "");
let filmRate = prompt("Ваша оценка?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

do {
  personalMovieDB.movies[lookedFilm] = filmRate;
  console.log(personalMovieDB);
} while (lookedFilm != null && filmRate != null && lookedFilm.length < 50 && lookedFilm != "" && filmRate != "");

//========================================================================================================================================================

// let numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// let lastFilm = prompt("Последний фильм?", ""),
//   filmRate = prompt("Ваша оценка?", "");
// lastFilm;
// filmRate;
// console.log(personalMovieDB);
// personalMovieDB.movies[lookedFilm] = filmRate;

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  num = 10;
}
showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 3));
console.log(calc(7, 5));
console.log(calc(3, 11));

function ret() {
  let num = 50;
  //
  return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("Hello");
};
logger();

const calc = (a, b) => a + b;
const calc = (a, b) => {
  console.log("1");
  return a + b;
};
