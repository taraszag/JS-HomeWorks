'use strict'

let m = new Map();

m.set("1", "hello");
m.set(1, "world");
m.set(true, 42);
m.set(false, [1,2,3]);

console.log(m.get("1"));
console.log(m.get(1));
console.log(m.get(true));
console.log(m.get(false));

for (const entry of m) {
  console.log(entry);
  console.log(entry[0]); // key
  console.log(entry[1]); // value
}

for (const k of m.keys) {
  console.log(m.keys[k]);
}


class Person {
  maritalStatus = 'single';

  constructor(firstName, lastName, birthYear = 2000) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  setBirthYear(newYear) {
    this.birthYear = newYear;
  }

  get age() {

  }

  set age(value) {

  }

  
}

let john = new Person("john", 'peterson');
console.log(john.setBirthYear(1998));
console.log(john);
console.log(john.getFullName());

let peter = new Person("Peter", "Jackson", 1991);
peter.maritalStatus = "married"
console.log(peter)
console.log(peter.age)