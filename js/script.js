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

// let numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");

// personalMovieDB.movies[lookedFilm] = filmRate;

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
function rememberMyFilms() {
  for (let i = 1; i <= 2; i++) {
    let lookedFilm;
    let filmRate;
    lookedFilm = prompt("Один из последних просмотренных фильмов?", "");
    if (lookedFilm === 0 || lookedFilm > 50) {
      console.log("неподходящая длина ответа");
      break;
    } else if (lookedFilm === null) {
      console.log("отмена");
      break;
    }
    filmRate = prompt("На сколько оцените фильм?", "");
    personalMovieDB.movies[lookedFilm] = filmRate;
  }
}
// rememberMyFilms();
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено немного фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("вы заядлый киноман мазафака");
  } else {
    console.log("Произошла ошибка");
  }
}
// detectPersonalLevel();
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);
function writeYourGenres() {
  let genre; 
  for (let i = 1; i <= 3; i++) {
    genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i-1] = genre;
  }
  console.log(personalMovieDB);
}
writeYourGenres();
