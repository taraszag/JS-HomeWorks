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
  

// const delLi = document.querySelectorAll('.delete');

// delLi.forEach((list) => {
//     list.addEventListener('click', ()=> { list.parentElement.remove() });
// });

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

button.addEventListener('click', () =>{
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

// удалить новые task

// a.addEventListener('click', () => {
//     list.removeChild(elementItem);
//   });

// input.focus();

});



