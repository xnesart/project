"use strict";

const obj = new Object();

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("test");
  },
};
options.makeTest();
console.log(Object.keys(options));
const {border, bg} = options.colors;
console.log(border)
// console.log(options.name);

// delete options.name;

console.log(options);

let counter = 0;
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}
console.log(counter);

// let counter = 0;
// for (let key in options){
//   counter++;
// }
// console.log(counter);

const someObject = {
  name: "Riddick",
  game: "Chronicles of Riddick",
  like: true,
  score: 70,
  time: "10 hours",
  lovelyWeapon: {
    first: "shotgun",
    second: "pistol",
    third: "rifle",
  },
};
console.log(Object.keys(someObject));
