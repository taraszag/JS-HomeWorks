"use strict";

function logEvent(e) {
  e.preventDefault();
  console.log(`Event: '${e.type}' on`, e.target);
}

function addClickEventLogger(element) {
  element.addEventListener("click", logEvent);
}

const selectors = ["form", ".todo-list", ".todo-app", "body"];

selectors.forEach((selector) =>
  addClickEventLogger(document.querySelector(selector))
);

const deleteButtons = document.querySelectorAll(".todo-item a");
deleteButtons.forEach(item => addClickEventLogger(item));