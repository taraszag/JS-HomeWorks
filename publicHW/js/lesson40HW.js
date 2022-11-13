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

function onNewTodo(event) {
    event.preventDefault();

    const text = taskInput.value;
    if (text == '') return;
    taskInput.value = '';

    post('/api/task', { text, isDone: false })
        .then(res => res.json())
        .then(todo => showNewTodo(todo));
}

function onStatusChanged(event) {
    const target = event.target;
    if (target.nodeName !== "INPUT") return;

    const checked = target.checked;
    const parent = target.parentElement;
    const [, id] = parent.id.split('_');

    post(`/api/task/${id}/update`, { isDone: checked })
        .then(res => {
            if (!res.ok) {
                target.checked = !checked;
            }
        })
        .catch(_ => {
            target.checked = !checked;
        });
}

function deleteOneTask(event) {

    const target = event.target;
    if (
        !target.classList.contains("delete")
    ) {
        return;
    }

    const parent = target.parentElement;
    const [, id] = parent.id.split('_');

    post(`/api/task/${id}/delete`)
        .then(res => {
            if (res.ok) {
                target.parentElement.remove()
            }
        })
        .catch(_ => {
            alert("no connection with server!")
        });
}

function deleteAllTasks() {

    let question = confirm("Do you have delete all tasks?")

    if (question == true) {
        post(`/api/task/delete/all`)
            .then(res => {
                if (res.ok) {
                    let allLi = document.querySelector('.no-bullet');
                    while (allLi.firstChild) {
                        allLi.removeChild(allLi.firstChild);
                    }
                }
            })
            .catch(_ => {
                alert("no connection with server!")
            });
    }
}



function filter() {
    let elements = document.querySelectorAll("#task-list li")
    post('/api/filter', { textFilter: filterInput.value })
        .then(res => res.json())
        .then(item => {
            elements.forEach(elem => {
                if (elem.textContent.indexOf(item) != -1) {
                    elem.style.display = '';
                } else {
                    elem.style.display = 'none'
                }
            })
        })
}

form.addEventListener("submit", onNewTodo);
tasks.addEventListener("click", onStatusChanged);
tasks.addEventListener("click", deleteOneTask);
clearTasks.addEventListener("click", deleteAllTasks);
filterInput.addEventListener("keyup", filter);


fetch('/api/tasks')
  .then(res => res.json())
  .then(tasks => tasks.forEach(t => showNewTodo(t))); 
