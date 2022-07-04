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

// this is a different jack than we store in people
const jack = new Person("Jack", "Samuelson", 41);

// H.A. add second argument from documentation
function myIncludes(array, value, fromIndex = 0) {
    for (fromIndex; fromIndex < array.length; fromIndex += 1) {
        if (array[fromIndex] == value)
            return true;
    }
    return false;
}

function myFindIndex(array, predicate) {
    for (let i = 0; i < array.length; i += 1) {
        if (predicate(array[i])) return i;
    }
    return -1;
}

// H.A. 
function myForEach(array, fun) {


}

// H.A. 
function myEvery(array, predicate) {

}

// H.A. 
function mySome(array, predicate) {

}

// H.A. 
function myFilter(array, predicate) {

}

console.log(numbers.includes(2)); // true
console.log(numbers.includes(5)); // false
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("Banana")); // false
console.log(people.includes(john)); // true
console.log(people.includes(jack)); // false
console.log(people.includes(new Person("Samuel", "Jackson", 17))); // false
console.log(myIncludes(people, john)); // true
console.log(myIncludes(numbers, 3, 3)); // true

console.log(numbers.findIndex(n => n > 2)); // 2
console.log(numbers.findIndex(n => n == 2)); // 1

console.log(fruits.findIndex(f => f.length == 4)); // 3
console.log(people.findIndex(p => p.age < 20)); // 2
console.log(myFindIndex(people, p => p.age < 20)) // 2
console.log(myForEach(people, p => console.log(p))) // list of people

console.log(numbers.every(n => n > 1)); // false
console.log(numbers.every(n => n >= 1)); // true
console.log(fruits.every(f => f.includes("a"))); // false
console.log(people.every(p => p.age >= 18)); // false
console.log(myEvery(people, p => p.age >= 18)); // false

console.log(numbers.some(n => n % 3 == 0)); // true
console.log(numbers.some(n => n % 4 == 0)); // false
console.log(fruits.some(f => f.includes("a"))); // true
console.log(people.some(p => p.firstName.length == 4)); // true;

const fruitsWithA = fruits.filter(f => f.includes("a"));
console.log(fruitsWithA);
console.log(fruits.filter(f => f.includes("i")));
console.log(fruits.filter(f => f.includes("w")));
console.log(people.filter(p => p.age >= 18));
console.log(myFilter(people, p => p.age >= 18));

console.log(fruits
    .filter(f => f.includes("a") && f.includes("b"))
    .findIndex(f => f.includes("b")));
