'use strict';

const resultDiv = document.getElementById("result");
const showResultButton = document.getElementById("show-result");

showResultButton.addEventListener("click", _ => {
  fetch("api/result")
    .then(response => response.json()) 
    .then(obj => resultDiv.innerText = `name: ${obj.name}, age: ${obj.age}`)
    .catch(err => console.log(err));
});