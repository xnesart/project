const btn = document.querySelector(".btn");
let timerId, // Объявляем переменную таймера, чтобы её можно было использовать везде
    i = 0; // объявляем переменную счетчика
function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

const id = setInterval(frame, 10);

    function frame(){
        if (pos === 300){
            clearInterval(id)
        } else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener("click", () => {
//     // const timerId = setTimeout(logger, 2000);  Устанавливает таймер, после которого запустится событие
//     timerId = setInterval(logger, 2000); // Устанавливает интервал. Событие будет происходить постоянно каждые 2 сек
// });

// Еще один вариант таймера, внутрь передается функция

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId); // Останавливаем таймер
//     }
//     console.log("text");
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log("hello");
//     id = setTimeout(log, 500);// потом выполняет эту функцию
// }, 500); // сначала ждет тут // потом опять ждет тут и заново выполняет верхнюю
