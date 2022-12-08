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
const urgency = form.querySelector("select")


class Tasks {
    constructor({ id, text, isDone}) {
        this.id = id;
        this.text = text
        this.isDone = isDone
    }
    showNewTodo() {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.id = `item_${this.id}`;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = this.isDone;

        const taskText = document.createTextNode(` ${this.text} `);

        const deleteButton = document.createElement("a");
        deleteButton.className = "delete";
        deleteButton.href = "#"
        deleteButton.appendChild(document.createTextNode("x"));

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        tasks.appendChild(li);
    }

}

class Urgency extends Tasks {
    constructor({ id, text, isDone, dueDate }) {
        super({ id, text, isDone });
        this.dueDate = dueDate
    }

    showNewTodo() {

        const li = document.createElement("li");
        li.className = "todo-item";
        li.id = `item_${this.id}`;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = this.isDone;

        const taskText = document.createTextNode(` ${this.text} `);
        const taskDate = document.createTextNode(` ${this.dueDate} `);

        const deleteButton = document.createElement("a");
        deleteButton.className = "delete";
        deleteButton.href = "#"
        deleteButton.appendChild(document.createTextNode("x"));

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(taskDate);

        li.appendChild(deleteButton);
        tasks.appendChild(li);
    }
}

async function onNewTodo(event) {
    event.preventDefault();

    const text = taskInput.value;
    const dueDate = urgency.nextSibling.value
    if (text == '') return;
    taskInput.value = '';
    urgency.value = "notUrgent"
    urgency.nextSibling.value = ''
    urgency.nextSibling.style = "display:none"

    if (dueDate == '') {
        let response = await post('/api/task', { text, isDone:false })
        let data = await response.json()
        new Tasks(data).showNewTodo()
    }
    else {
        let response = await post('/api/task', { text, isDone:false, dueDate: dueDate })
        let data = await response.json()
        new Urgency(data).showNewTodo()
    }
}
function onStatusUrgent() {
    if (urgency.value == "urgent") {
        urgency.nextSibling.style = "display:block"
    }
}

async function onStatusChanged(event) {
    const target = event.target;
    if (target.nodeName !== "INPUT") return;
    const checked = target.checked;
    const parent = target.parentElement;
    const [, id] = parent.id.split('_');
    try {
        let response = await post(`/api/task/${id}/update`, { isDone: checked })
        if (!response.ok) {
            target.checked = !checked;
        }
    } catch (_) {
        target.checked = !checked;
    };
}

async function deleteOneTask(event) {
    event.preventDefault();
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
        if (response.ok) {
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
    filterTasks(item)
}

form.addEventListener("submit", onNewTodo);
tasks.addEventListener("click", onStatusChanged);
tasks.addEventListener("click", deleteOneTask);
clearTasks.addEventListener("click", deleteAllTasks);
filterInput.addEventListener("keyup", filterPost);
urgency.addEventListener('click', onStatusUrgent)


let resTask = await fetch('/api/tasks')
let task = await resTask.json()
task.forEach(t => {
    if (t.dueDate) {
        new Urgency(t).showNewTodo()
    } else {new Tasks(t).showNewTodo()}
})


let resFilter = await fetch('/api/filters')
let filterItem = await resFilter.json()
filterInput.value = filterItem
filterTasks(filterItem)
