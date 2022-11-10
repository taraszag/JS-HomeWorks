"use strict"

const tasks = document.getElementById("task-list");
const form = document.getElementById("todo-form");
const taskInput = form.querySelector("input");
const delTask = document.getElementById("delete");
let allLi = document.querySelector('.no-bullet');

// переопределение content-Type, для получение json
const post = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}

let currentId = 0;

// new form in html
const onNewTaskSubmit = (text, checkboxValue, colorText) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.id = `${currentId}`;
    li.style = colorText
    currentId += 1;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checkboxValue
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

// add Event listener new form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (taskInput.value === "") return;
    
    while (allLi.firstChild) {
        allLi.removeChild(allLi.firstChild);
    }

    post(`api/text-add`, { text: taskInput.value })
        .then(response => response.json())
        .then(obj => obj.items.forEach(element => onNewTaskSubmit(element)))
        .catch(err => console.log(err));
    taskInput.value = "";
})



// change checkbox value
tasks.addEventListener('input', function (e) {
    e.preventDefault()
    let d = Number(e.target.parentNode.id)
    for (let i = 0; i < itemsArray.length; i += 1) {
        if (d == i) {
            itemsArray[i].checkbox = e.target.checked
            if (e.target.checked) {
                itemsArray[i].color = "color:grey";
                e.path[1].style.cssText = "color:grey";
            } else {
                itemsArray[i].color = "color:black";
                e.path[1].style.cssText = "color:black"
            }

        }
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
})

// delete task
tasks.addEventListener("click", event => {
    if (
        !event.target.classList.contains("delete")
    ) {
        return;
    }
    event.target.parentNode.remove();
    
    while (allLi.firstChild) {
        allLi.removeChild(allLi.firstChild);
    }

    let index = Number(event.target.parentNode.id)
    console.log(index)
    post(`api/delete-task/${index}`)
        .then(response => response.json())
        .then(obj => obj.items.forEach(element => onNewTaskSubmit(element)))
        .catch(err => console.log(err));
});

// //delete all tasks
function addButtonEventListener() {
    while (allLi.firstChild) {
        allLi.removeChild(allLi.firstChild);
    }
    post('api/delete-all')
        .then(response => response.json())
        .then(obj => obj.items.forEach(element => onNewTaskSubmit(element)))
        .catch(err => console.log(err));

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

// view text
fetch("api/text-result")
    .then(response => response.json())
    .then(obj => obj.items.forEach(element => onNewTaskSubmit(element)))
    .catch(err => console.log(err));
