'use strict';

async function greet(name) {
  return `Hello, ${name}`;
}

let promise = greet("Peter");

function greet2(name) {
  return new Promise((resolve, reject) => {
    resolve(`Hello, ${name}`);
  });
}

let promise2 = greet2("World");

promise2.then(res => console.log(res));
promise.then(console.log);

function greet3(name) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Hello, ${name}`), 2000)
  });

  promise.then(greeting => {
    console.log(greeting)
    console.log("inside greet3 inside then");
  });
  console.log("inside greet3 after then");
}

async function greet4(name) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Hello, ${name}`), 2000)
  });

  let greeting = await promise;
  console.log(greeting);
  console.log("inside greet4 after await");
}

console.log("before without await");
greet3("John3");
greet4("John4");
console.log("after without await");


console.log("before with await");
await greet3("John3");
await greet4("John4");
console.log("after with await");

async function alwaysError1() {
  await Promise.reject(new Error("Error1!"));
}

async function alwaysError2() {
  throw new Error("Error2!");
}

alwaysError1().catch(console.log);

try {
  await alwaysError2();
} catch (ex) {
  console.log(ex);
}

console.log("after all");

// await alwaysError2();
// console.log("after after all");

let count = -1;
try {
  let response = await fetch("/api/result");
  count = await response.json();
} catch(ex) {
  console.log("Error:", ex);
}

console.log("Count: ", count);