'use strict';

'use strict';

let val;

const addButton = document.querySelector("#todo-form button");
val = addButton;

const addButtonEventListener = event => {
  event.preventDefault();
  console.log("Add button was clicked");
  // addButton.removeEventListener("click", addButtonEventListener);
}

const eventLogger = e => {
  console.log(`Event: "${e.type}" on `, e);
}

const selectors = ['.add-todo', 'ul', '#todo-title'];

selectors.forEach(selector => {
  document.querySelector(selector).addEventListener('click', eventLogger);
});


addButton.addEventListener("click", addButtonEventListener);



console.log(typeof val, val);