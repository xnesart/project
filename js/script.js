// touchstart   срабатывает при касании на этот элемент
//touchmove   срабатывает при каждом смещении пальца
//touchend   срабатывает когда палец оторвался от элемента
//touchenter  срабатывает когда ведем пальцем по экрану и наскакиваем на элемент, на который повешено событие
//touchleave  когда палец ушел за пределы элемента
//touchcancel  возникает когда точка соприкосновения не регистрируется на поверхности - уходит из браузера

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    box.addEventListener("touchstart", (e) => {
        e.preventDefault();
        console.log("start");
    });
    box.addEventListener("touchmove", (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);   //получаем список пальец и координаты
        console.log("move");
    });
    box.addEventListener("touchend", (e) => {
        e.preventDefault();
        console.log("end");
    });
});
//touches - это свойство для работы с сенсорными устройствами. выдает список всех пальцев, взаимодействующих с экраном
//targetTouches - список пальцев, взаимодействующих с этим элементом
//changedTouches - список пальцев, учавствующих в текущем событии
