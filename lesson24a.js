'use strict'

const person = {
  firstName: "Peter",
  lastName: "Johnson",
  birthYear: 1976,
  get age() {
    return (new Date()).getFullYear() - this.birthYear;
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set age(years) {
    this.birthYear = (new Date()).getFullYear() - years;
  }
}

function Person(firstName, lastName, birthDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthDate;
  this.getFullName1 = function () {
    return `${this.firstName} ${this.lastName}`;
  }

  Object.defineProperties(this, {
    age1: {
      "get": function () { return (new Date()).getFullYear() - this.birthYear; },
      "set": function (years) { this.birthYear = (new Date()).getFullYear() - years; }
    }
  });
}

Person.prototype.getFullName2 = function () { // this is a better approach
  return `${this.firstName} ${this.lastName}`;
}
Object.defineProperties(Person.prototype, {
  age2: {
    "get": function () { return (new Date()).getFullYear() - this.birthYear; },
    "set": function (years) { this.birthYear = (new Date()).getFullYear() - years; }
  }
});

/// --------
let peter = new Person("Peter", "Peterson", 2001);
let john = new Person("John", "Johnson", 2001);
console.log(peter);
console.log(john);
console.log(peter.getFullName1());
console.log(peter.getFullName2());
console.log(peter.age1);
john.age2 = 33;
console.log(john);

let t1 = new Temperature(15);
console.log(t1.fahranheit)
t1.celsius = 25;
t1.fahranheit = 17;