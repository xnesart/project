"use strict";

class Rectangle {
    constructor(height, width) {
        //тут записываем приходящие аргументы
        this.height = height;
        this.width = width;
    }
    //создаем метод
    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    //тут мы пишем через extends что наследуется Rectangle
    constructor(height, width, text, bgColor) {
        super(height, width); // Супер всегда должен идти первым. тут включаем наследование от Rectangle, сюда передаются this.height=height; this.width=width; Так же наследуются и методы.
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text},  цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, "Hello World", "blue");
div.showMyProps();
console.log(div.calcArea()); // тут используем наследуемый метод от первого класса

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);
console.log(square.calcArea());
console.log(long.calcArea());
