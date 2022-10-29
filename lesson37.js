'use strict';

function multiply(x, y) {
  return x * y;
}

const add = (x, y) => x + y;

// function add(x, y) {
//   return x + y;
// }

function performOperation(operation) {
  return operation(2, 5);
}

const logAdd = () => console.log(performOperation(add));
setTimeout(() =>  console.log(performOperation(multiply)), 1000);
setTimeout(logAdd, 500);

let promise = new Promise((resolve, reject) => {
    // calculations
    resolve({state: "done", success: true});
});
promise = new Promise((resolve, reject) => {
    // calculations
    // reject([1, 2, 3]);
});

const a = 10;
const b = 3;

promise = new Promise((resolve, reject) => {
  if (b != 0) {
    resolve(a/b);
  } else {
    reject("Division by zero");
  }
});

promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Ok"), 800);
  setTimeout(() => reject("Error"), 500);
});

console.log("without timeout", promise);

// setTimeout(() => console.log("with timeout", promise), 700);

const onSuccess = (arg) => console.log("success: ", arg);
const onReject = (err) => console.log("rejected: ", err);

// promise
//   .then(onSuccess, onReject);

promise
  .then(onSuccess)
  .catch(onReject);

