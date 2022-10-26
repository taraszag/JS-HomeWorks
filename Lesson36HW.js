"use strict"

const tasks = document.getElementById("task-list");
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");
let inputCheckbox
console.log(tasks)


let itemsArray = []
if (localStorage.getItem('items')) {
    itemsArray = JSON.parse(localStorage.getItem('items'))
} else {
    itemsArray = []
}
localStorage.setItem('items', JSON.stringify(itemsArray))
const containts = JSON.parse(localStorage.getItem('items'))
console.log(containts)

let currentId = 0;
const onNewTaskSubmit = (text) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.id = `${currentId}`;
    currentId += 1;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    console.log(checkbox.checked)
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


    itemsArray.push({ id: currentId, text: taskInput.value, checkbox:false });
    localStorage.setItem('items', JSON.stringify(itemsArray));
    onNewTaskSubmit(itemsArray[currentId].text);
    taskInput.value = "";
});


function checked(event) {
    let d = Number(event.target.parentNode.id)
    for (let i = 0; i < itemsArray.length; i += 1) {
        if (d == i) {
            itemsArray[i].checkbox = true
        }
    }
    console.log(itemsArray)
}
tasks.addEventListener("input", checked);

// delete task
function deleteItem(event) {
    if (
        !event.target.classList.contains("delete")
    ) {
        return;
    }

    event.target.parentNode.remove();
    let d = Number(event.target.parentNode.id)
    for (let i = 0; i < itemsArray.length; i += 1) {
        if (d == i) {
            itemsArray.splice(d, 1)
        }
    }
    localStorage.setItem('items', JSON.stringify(itemsArray));
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

containts.forEach(() => {
    onNewTaskSubmit(itemsArray[currentId].text);
});

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