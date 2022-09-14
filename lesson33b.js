
'use strict';

let val;

const list = document.querySelector(".todo-list ul");
val = list;

const firstItem = document.querySelector(".todo-list li");
val = firstItem;

val = list.childNodes;
val = list.children;

val = Array.from(list.children);

val.forEach((el, index) => {
    const level = 1;
    console.log(level, el.nodeType, el.nodeName, el.className)
});

val = Array.from(list.children[0].childNodes)
val = Array.from(list.children[1].children[1].childNodes)

val = list.firstChild;
val = list.firstElementChild;

val = firstItem.parentNode.parentNode;
val = firstItem.nextSibling;
val = firstItem.nextElementSibling.nextElementSibling;

val = firstItem.previousSibling;
val = document.querySelector("ul li:nth-child(4)").previousElementSibling;

val = list.lastChild;
val = list.lastElementChild;
val = list.lastElementChild.previousElementSibling;
val = list.lastElementChild.previousElementSibling.childNodes;

console.log(typeof val, val);