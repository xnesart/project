const btns = document.querySelectorAll("button"),
    wrapper = document.querySelector(".button-block");
// console.log(btns[0].classList.length); //показывает что у элемента есть два класса
// console.log(btns[0].classList.item(0)); //получаем класс элемента под индексом 0
// console.log(btns[0].classList.add("red")); //добавляем класс red элемента под индексом 0
// console.log(btns[0].classList.remove("blue")); //удаляем класс blue элемента под индексом 0
// console.log(btns[0].classList.toggle("pink")); //добавляет или удаляет класс pink элемента под индексом 0

// //Проверяем наличие класса red у элемента №2
// console.log(btns[1].classList.add("red")); //добавляем класс red элемента под индексом 1

// if (btns[1].classList.contains("red")) {
//     console.log("red");
// }

btns[0].addEventListener("click", () => {
    // if (!btns[1].classList.contains("red")) {
    //     btns[1].classList.add("red");
    // } else {
    //     btns[1].classList.remove("red");
    // }
    btns[1].classList.toggle("red");
});

wrapper.addEventListener("click", (event) => {
    // if (event.target && event.target.tagName == "BUTTON" && event.target.classList.contains("blue")) {
    //     console.log("hello");
    // }
    if (event.target && event.target.tagName == "BUTTON" && event.target.matches("button.pink")) {
        console.log("hello");
    }
    // console.dir(event.target)
});

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log("hello");
    });
});
const btn = document.createElement("button");
btn.classList.add("pink");
wrapper.append(btn);
