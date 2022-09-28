const selectors = ["form", ".todo-list", ".todo-app", "body"];

selectors.forEach((selector) =>
  document
    .querySelector(selector)
    .addEventListener("click", (e) =>{
      console.log(`${selector} event '${e.type}' on`, e.target)
    }
    )
);


"use strict";

function deleteItem(event) {
  if (
    event.target.nodeName != "A" ||
    !event.target.classList.contains("delete")
  ) {
    return;
  }

  console.log("Delete on", event.target, event.target.nodeName);
}

document.getElementById("task-list").addEventListener("click", deleteItem);

const task3 = document.getElementById("item3");
task3.style.display = "none";