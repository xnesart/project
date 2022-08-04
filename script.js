"use strict";

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.firstChild);
// console.log(document.lastChild);

// console.log(document.querySelector("#current").parentNode); //получаем родительский узел у любого элемента
// console.log(document.querySelector("#current").parentNode.parentNode); //получаем родительский узел у элемента родителя

console.log(document.querySelector('[data-current = "3"]').nextSibling); //получение следующую ноду после дата атрибута

console.log(document.querySelector('[data-current = "3"]').nextElementSibling); // получение следующего элемента после дата атрибута

for(let node of document.body.childNodes) {
//избавляемся от текстовых нод. этот код пропустит выбор текстовых нод
if(node.nodeName == '#text') {
    continue;
}
    console.log(node)
}