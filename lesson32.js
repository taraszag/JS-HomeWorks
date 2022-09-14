'use strict'
const numbers = [1, 2, 3, 2, 1];
const fruits = ["apple", "banana", "orange", "lime"];

function Person(firstName, secondName, age) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
}

const john = new Person("John", "Peterson", 32);

const people = new Array(
  new Person("Peter", "Johnson", 25),
  john,
  new Person("Samuel", "Jackson", 17),
  new Person("Jack", "Samuelson", 41)
);

const ar = [1, 2, 3, 4];


const initialValue = 0;
const sumWithInitial = ar.reduce(
  (previous, current) => previous + current,
  0 // initialValue
);

// 0: previous: 0, current: 1 => 0 + 1 = 1 => nextPrevious
// 1: previous: 1, current: 2 => 1 + 2 = 3 => nextPrevious
// 2: previous: 3, current: 3 => 3 + 3 = 6 => nextPrevious
// 3: previous: 6, current: 4 => 6 + 4 = 10 => 

console.log(sumWithInitial);
// expected output: 10

console.log(numbers.reduce((prev, cur) => prev + cur, 0)); // sum of all elements
console.log(fruits.reduce((prev, cur) => prev + cur.length, 0)); // total length
console.log(fruits.reduce((prev, cur) => prev + cur, "")); // concatenation
console.log(numbers.reduce((prev, cur) => prev * cur, 1)); // product of all elements
console.log(numbers.reduce((p, c) => {
  if (p < c) {
    return p;
  } else {
    return c;
  }
})); // minimum

console.log(numbers.reduce((p, c) => p < c ? p : c, Number.POSITIVE_INFINITY)); // minimum

// H.A. # 1: Implement MyReduce(arr, func);
function myReduce(arr, func) {
  let result = arr[0]
  for (let i = 1; i < arr.length; i += 1) {
    result = func(result,arr[i])
  }
  return result
}

console.log(myReduce(numbers,(prev, cur) => prev + cur))
console.log(myReduce(fruits,(prev, cur) => prev + cur, "")); 