"use strict";

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper");
const div = document.createElement("div");

div.classList.add("black");
wrapper.insertBefore(div, hearts[1]);

// box.style.backgroundColor = 'blue';
box.style.cssText = "background-color: brown; border-radius: 300px; height: 100px; display: none";
box.style.width = "500px";

btns[1].style.borderRadius = "100%";
// красим элементы с помощью цикла
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "pink";
}

hearts.forEach((item) => {
    item.style.backgroundColor = "red";
});
circles[0].remove();
