-

'use strict'

class User {
  _name = "John";

  constructor(name, age = 25) {
    this._name = name || this._name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, ${this.name}`;
  }

  getInfo() {
    return `name: ${this.name}, age: ${this.age}`
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw new RangeError("age must be non-negative"); 
    }

    this._age = value;
  }
}

class Client extends User {

  constructor(name, age, role = "client") {
    super(name, age);
    this._role = role;
  }

  get role() {
    return this._role;
  }

  getInfo() {
    return `${super.getInfo()}, role: ${this.role}`;
  }
}

const john = new User("John", 23);
console.log(john.name, john.age);
john.age = 5;
console.log(john.name, john.age);
console.log(john.getGreeting());
console.log(john.getInfo());
console.log(john);

const client = new Client();
console.log(client);
console.log(client.name, client.age, client.role);
console.log(client.getGreeting());
console.log(client.getInfo());
