'use strict';

const post = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}

const tasks = document.getElementById("task-list");
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");
const clearTasks = document.querySelector('.clear-tasks.button')
const filterInput = document.getElementById("filter")

function showNewTodo({ id, text, isDone }) {

    const li = document.createElement("li");
    li.className = "todo-item";
    li.id = `item_${id}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isDone;

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

async function onNewTodo(event) {
    event.preventDefault();

    const text = taskInput.value;
    if (text == '') return;
    taskInput.value = '';

    let response = await post('/api/task', { text, isDone: false })
    let data = await response.json()
    await showNewTodo(data)
}

async function onStatusChanged(event) {
    const target = event.target;
    if (target.nodeName !== "INPUT") return;

    const checked = target.checked;
    const parent = target.parentElement;
    const [, id] = parent.id.split('_');
    try {
        let response = await post(`/api/task/${id}/update`, { isDone: checked })
        let data = await response
        if (!data.ok) {
            target.checked = !checked;
        }
    } catch (_) {
        target.checked = !checked;
    };
}

async function deleteOneTask(event) {

    const target = event.target;
    if (
        !target.classList.contains("delete")
    ) {
        return;
    }

    const parent = target.parentElement;
    const [, id] = parent.id.split('_');

    try {
        let response = await post(`/api/task/${id}/delete`)
        if (await response.ok) {
            target.parentElement.remove()
        }
    } catch (_) {
        alert("no connection with server!")
    };
}

async function deleteAllTasks() {

    let question = confirm("Do you have delete all tasks?")

    if (question == true) {
        try {
            let response = await post(`/api/task/delete/all`)
            if (response.ok) {
                let allLi = document.querySelector('.no-bullet');
                while (allLi.firstChild) {
                    allLi.removeChild(allLi.firstChild);
                }
            }
        } catch (_) {
            alert("no connection with server!")
        };
    }
}

function filterTasks(item) {
    let elements = document.querySelectorAll("#task-list li")
    elements.forEach(elem => {
        if (elem.textContent.indexOf(item) != -1) {
            elem.style.display = '';
        } else {
            elem.style.display = 'none'
        }
    })
}

async function filterPost() {
    const res = await post('/api/filter', { textFilter: filterInput.value })
    let item = await res.json()
    await filterTasks(item)
}

form.addEventListener("submit", onNewTodo);
tasks.addEventListener("click", onStatusChanged);
tasks.addEventListener("click", deleteOneTask);
clearTasks.addEventListener("click", deleteAllTasks);
filterInput.addEventListener("keyup", filterPost);

let resTask = await fetch('/api/tasks')
let task = await resTask.json()
await task.forEach(t => showNewTodo(t));

let resFilter = await fetch('/api/filters')
let filterItem = await resFilter.json()
filterInput.value = filterItem
await filterTasks(filterItem)
