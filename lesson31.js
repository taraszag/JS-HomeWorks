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

console.log(numbers.map(x => x * x));
console.log(numbers);
console.log(fruits.map(f => f.length))
console.log(fruits.map(f => ({ name: f, letters: f.length })))
console.log(fruits.map(f => {
  return { name: f, letters: f.length };
}))

let f = "apple"
let o = { name: f, letters: f.length };

function myMap(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(func(arr[i]));
  }

  return result;
}


console.log(myMap(fruits, f => ({ name: f, letters: f.length })))
console.log(
  fruits
    .map(f => ({ name: f, letters: f.length }))
    .filter(o => o.letters > 4) // better
);
console.log(
  fruits
    .map(f => ({ name: f, letters: f.length }))
    .filter(o => o.name.length > 4) // worst
);
console.log(
  fruits
    .filter(f => f.length > 4)
    .map(f => ({ name: f, letters: f.length }))
);


let a = fruits.map(f => f.length).filter(n => n > 5);

console.log(a)

// H.A.

const clients = [
  {
    name: "alex",
    goods: ["milk", "milk", "sour cream"],
  }, {
    name: "bob",
    goods: ["white bread", "eggs", "sour cream", "beer", "cheese"],
  }, {
    name: "clara",
    goods: ["white bread", "sour cream"]
  }, {
    name: "diana",
    goods: ["milk"]
  }, {
    name: "eve",
    goods: ["beer", "beer", "cheese", "beer", "eggs", "sour cream"],
  }, {
    name: "frank",
    goods: ["eggs", "cheese", "white bread", "milk"],
  },
]

console.log(clients)
// сonsole.log(clients.filter(g => g.goods.length>=2));


// Не используя циклов создать отдельные массивы и вывести их в консоль:
// Сортированный список клиентов по количеству товаров, в убывающем порядке
// Сортированный список клиентов по количеству товаров, в убывающем порядке только для тех, кто купил 2 или больше товаров
// Сортированный список клиентов c указанным количеством товаров по количеству товаров, в убывающем порядке только для тех, кто купил 2 или больше товаров


{ console.log(clients.sort((a, b) => b.goods.length - a.goods.length )) }

{console.log(clients.sort((a, b) => b.goods.length - a.goods.length ).filter(g => g.goods.length>=2)) }

{console.log(clients.sort((a, b) => b.goods.length - a.goods.length )
  .filter(g => g.goods.length>=2)
  .map(obj=> ({name:obj.name, goods:obj.goods, lenGoods:obj.goods.length})))}


// console.log(clients.sort((a, b) => { 
//     if (a.goods.length<b.goods.length)return 1; 
//     else if (a.goods.length>b.goods.length)return -1; 
//     else return 0}));

// console.log(clients.filter(g => g.goods.length>=2))

// console.log( clients
//   .map(f => ({ clients: f, letters: f.goods.length }))
//   .filter(g => g.clients.goods.length>=2))