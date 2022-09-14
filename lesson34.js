let val;

const p = document.createElement('p')
const txt = document.createTextNode("This is a test paragraph");
const parent = document.querySelector (".add-todo");
p.appendChild(txt);

parent.appendChild(p)

val = p;

const element = document.createElement("li");
const list = document.getElementById("task-list");
list.appendChild(element);
element.className = "todo-item";
element.id =  'item5';

const inp = document.createElement("input");
inp.type = "checkbox";

element.appendChild(inp);
element.appendChild(document.createTextNode(" created task "));


const a = document.createElement("a");
a.className = 'delete'
a.href = '#'
element.appendChild(a);
element.appendChild(document.createTextNode("x"));



const newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("List of Tasks"));

const oldHeading = document.querySelector(".todo-list h2");
val = oldHeading;

// const parentHeading = oldHeading.parentNode;
// parentHeading.replaceChild(newHeading, oldHeading);

oldHeading.parentNode.replaceChild(newHeading, oldHeading);



console.log(typeof val, val)