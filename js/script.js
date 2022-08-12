// const now = new Date('2020-05-01');
//     new Date.parse('2020-0501'); // будут идентичны
// console.log(now.setHours(18));
// console.log(now)
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //две зведочки это возведение в степень, появился в es6
}
let end = new Date();
alert(`цикл отработал за ${end - start} милисекунд`);
