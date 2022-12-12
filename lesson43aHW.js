'use strict'
class Clock {
  constructor({template}){
    this.template = template
  }
render(){
  let date = new Date();
  
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  let mins = date.getMinutes();
  if (mins < 10) mins = '0' + mins;

  let secs = date.getSeconds();
  if (secs < 10) secs = '0' + secs;

  let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);

  console.log(output);

}
stop(){
  clearInterval(this.timer);
};

start() {
  this.timer = setInterval((_) => this.render(), 1000);
};
}
 
  // let clock = new Clock({template: 'h:m:s'});
  // clock.start();

//extends clock
  class ExtendedClock extends Clock{
    constructor(obj){
     super(obj)
     let {precision = 1000} = obj
     this.precision = precision
    }
    start() {
     this.timer = setInterval((_) => this.render(),this.precision);
   };
 }
 let clockExtend = new ExtendedClock({
  template: 'h:m:s',
  precision:5000
});
 clockExtend.start();




  //Ошибка создания экземпляра класса
// не хватало super()
// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//    super(name)
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик");


//Класс расширяет объект?
//Static method
// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
// }


// let rabbit = new Rabbit("Rab");
// // метод hasOwnProperty от Object.prototype
// alert( rabbit.hasOwnProperty('name') ); // true


class Rabbit extends Object {
  constructor(name) {
    super()
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // Ошибка