'use strict';

let val;

const form = document.getElementById("todo-form");
let taskInput = form.getElementsByTagName("input")[0];
taskInput = form.firstElementChild;
taskInput = form.querySelector("input");
taskInput = document.getElementById("new-item-text");

val = taskInput;

function onSubmit(e) {
  e.preventDefault();
  console.log(`Input: ${taskInput.value}`);
  taskInput.value = "";
}

form.addEventListener("submit", onSubmit);

function onKey(e) {
  console.log(`Event type: ${e.type}`);
  console.log(typeof e.key, e.key);
  if (e.key == "Enter") {
    console.log(`Value: ${taskInput.value}`);
    taskInput.value = "";
  }
}

taskInput.addEventListener("keydown", onKey);
taskInput.addEventListener("keyup", onKey);
taskInput.addEventListener("keypress", onKey);

taskInput.addEventListener("focus", onKey);
taskInput.addEventListener("blur", onKey);

taskInput.addEventListener("cut", onKey);
taskInput.addEventListener("copy", onKey);
taskInput.addEventListener("paste", onKey);



console.log(val);