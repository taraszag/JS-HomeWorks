"use strict"

const tasks = document.getElementById("task-list");
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");

let currentId = 0;
let itemsArray = []
if (localStorage.getItem('items')) {
    itemsArray = JSON.parse(localStorage.getItem('items'))
} else {
    itemsArray = []
}
localStorage.setItem('items', JSON.stringify(itemsArray))
const containts = JSON.parse(localStorage.getItem('items'))


const onNewTaskSubmit = (text) => {

    const li = document.createElement("li");
    li.className = "todo-item";
    li.id = `item${currentId}`;
    currentId += 1;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskText = document.createTextNode(` ${text} `);
    const deleteButton = document.createElement("a");
    deleteButton.className = "delete";
    deleteButton.href = "#"
    deleteButton.appendChild(document.createTextNode("x"));
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    tasks.appendChild(li);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (taskInput.value === "") return;

    itemsArray.push(taskInput.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    onNewTaskSubmit(taskInput.value);
    taskInput.value = "";
});

containts.forEach(item => {
    onNewTaskSubmit(item);
});


// delete task
function deleteItem(event) {
    if (
        !event.target.classList.contains("delete")
    ) {
        return;
    }

    event.target.parentNode.remove();
    let d = event.target
    localStorage.setItem('items2', JSON.stringify(d));
    console.log(d)

}

tasks.addEventListener("click", deleteItem);

// //delete all tasks
function addButtonEventListener() {
    let allLi = document.querySelector('.no-bullet');
    localStorage.clear()
    while (allLi.firstChild) {
        allLi.removeChild(allLi.firstChild);
    }

}
const clearTasks = document.querySelector('.clear-tasks.button')
clearTasks.addEventListener('click', addButtonEventListener)

// filter task
let filter = function () {
    let input = document.getElementById("filter")
    input.addEventListener("keyup", function () {
        filter = input.value
        let elements = document.querySelectorAll("#task-list li")
        elements.forEach(elem => {
            if (elem.textContent.indexOf(filter) != -1) {
                elem.style.display = '';
            } else {
                elem.style.display = 'none'
            }
        })

    })
}
filter()