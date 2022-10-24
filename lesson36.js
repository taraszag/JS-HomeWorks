'use strict';

const json = '{"name":"John", "age": 35, "isActive": true}';

let p = JSON.parse(json);

console.log(p);

const person1 = {
  name: "Jack",
  age: 17
}

const person2 = {
  Jack: 17
}

const peter = {name: "Peter", age: "40", isActive: false};
console.log(JSON.stringify(peter));

let prices = '[1, 2, 4.5, 7]';
console.log(JSON.parse(prices));

let productInfo = '{"prices": [2, 3, 5.2, 2]}';
console.log(JSON.parse(productInfo));

const client = `{
  "address": {"street": "Unter den Linden", "building": "12b", "appartment": 2}
}`;
console.log(JSON.parse(client));

let favoritePerson = JSON.parse(localStorage.getItem("favoritePerson"));
console.log(favoritePerson)
// localStorage.setItem("name", "Alex");
localStorage.setItem("favoritePerson", '{"name":"John", "age": 35, "isActive": true}');

favoritePerson = JSON.parse(localStorage.getItem("favoritePerson"));
console.log(favoritePerson)
const person = '[{"name":"Andrei", "age": 20},{"name":"Boris", "age":40}, {"name":"Anton", "age":50}, {"name":"Anna", "age": 20}, {"name":"Lida", "age": "33"}]';
console.log(JSON.parse(person));