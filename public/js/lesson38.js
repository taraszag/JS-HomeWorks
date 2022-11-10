'use strict';

const resultDiv = document.getElementById("result");
const showResultButton = document.getElementById("show-result");
const addNumberButton = document.getElementById("add-number");
const subNumberButton = document.getElementById("sub-number");
const numberInput = document.getElementById("number-input");

const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
}


addNumberButton.addEventListener("click", _ => {
  const num = Number(numberInput.value);
  post(`api/add`, {value: num})
});

subNumberButton.addEventListener("click", _ => {
  const num = Number(numberInput.value);
  post(`api/sub`, {value: num})
});

showResultButton.addEventListener("click", _ => {
  // fetch("api/result", { method: "GET"})
  fetch("api/result")
    .then(response => response.json()) 
    .then(obj => resultDiv.innerText = `count: ${obj.count}`)
    .catch(err => console.log(err));
});

// ----------------

const showTextResultButton = document.getElementById("show-text-result");
const addTextButton = document.getElementById("add-text");
const deleteItemButton = document.getElementById("delete-item");
const itemDeleteNumber = document.getElementById("item-delete");
const textInput = document.getElementById("text-input");
const textResultDiv = document.getElementById("text-result");

addTextButton.addEventListener("click", _ => {
  post(`api/text-add`, {text: textInput.value})
    .then(response => response.json()) 
    // .then(obj => console.log(obj.items))
    .then(obj => textResultDiv.innerText = `${obj.items}`)
    .catch(err => console.log(err));

  textInput.value = "";
});

deleteItemButton.addEventListener("click", _ => {
  const index = Number(itemDeleteNumber.value);
  post(`api/delete-item/${index}`)
    .then(response => response.json()) 
    // .then(obj => console.log(obj.items))
    .then(obj => textResultDiv.innerText = `${obj.items}`)
    .catch(err => console.log(err));
});


showTextResultButton.addEventListener("click", _ => {
  // fetch("api/result", { method: "GET"})
  fetch("api/text-result")
    .then(response => response.json()) 
    // .then(obj => console.log(obj.items))
    .then(obj => textResultDiv.innerText = `${obj.items}`)
    .catch(err => console.log(err));
});

fetch("api/text-result")
  .then(response => response.json()) 
  // .then(obj => console.log(obj.items))
  .then(obj => textResultDiv.innerText = `${obj.items}`)
  .catch(err => console.log(err));

