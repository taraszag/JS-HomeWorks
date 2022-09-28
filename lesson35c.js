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
