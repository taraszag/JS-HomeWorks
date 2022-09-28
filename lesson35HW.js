'use strict';

// удаляет task по одному

function deleteItem(event) {
    if (
        event.target.nodeName != "A" ||
        !event.target.classList.contains("delete")
    ) {
        return
    }

    event.target.parentElement.remove();
}

document.getElementById("task-list").addEventListener("click", deleteItem);

//удaлить все tasks
function addButtonEventListener() {
    let allLi = document.querySelector('.no-bullet');
    while (allLi.firstChild) {
        allLi.removeChild(allLi.firstChild);
    }

}
const clearTasks = document.querySelector('.clear-tasks.button')
clearTasks.addEventListener('click', addButtonEventListener)

// добавить новые task
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const item = input.value;
    input.value = '';

    const elementItem = document.createElement("li");
    elementItem.className = "todo-item";
    const inp = document.createElement("input");
    inp.type = "checkbox";
    const a = document.createElement("a");
    a.textContent = ' x'
    a.className = 'delete'
    a.href = '#'

    elementItem.appendChild(inp);
    elementItem.appendChild(document.createTextNode(item));
    elementItem.appendChild(a);
    list.appendChild(elementItem);
});

// filter

let filter = function () {
    let input = document.getElementById("filter")
    input.addEventListener("keyup", function () {
        filter = input.value
        let elements = document.querySelectorAll("#task-list li")
        elements.forEach(elem => {
            console.log(elem.textContent.indexOf(filter))
            if (elem.textContent.indexOf(filter) != -1) {
                elem.style.display = '';
            } else {
                elem.style.display = 'none'
            }
        })

    })
}
filter()
