'use strict';

function makeCounter1() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  }
}

const c = makeCounter1();

function makeCounter2() {
  let count = 0;

  function counter () {
    count += 1;
    return count;
  }

  function reset() {
    count = 0;
  }

  return [counter, reset]
}

let cArray = makeCounter2();

console.log("Counter 2")
console.log(cArray[0]());
console.log(cArray[0]());
console.log(cArray[0]());
console.log("Reset counter")
cArray[1]();
console.log(cArray[0]());
console.log(cArray[0]());
console.log(cArray[0]());

function makeCounter3() {
  let count = 0;

  return {
    get next () {
      count += 1;
      return count;
    },
    reset: function (toValue = 1) {
      count = toValue - 1;
    },
  }
}

let cObject = makeCounter3();

console.log("Counter 3")
console.log(cObject.next);
console.log(cObject.next);
console.log(cObject.next);
console.log("Reset counter");
cObject.reset(2);
console.log(cObject.next);
console.log(cObject.next);
console.log(cObject.next);

let counter = {
  count: 0,
  get next() {
    this.count += 1;
    return this.count;
  },
  reset: function (toValue = 1) {
    this.count = toValue - 1;
  },
}

if (counter.count = 5) {
  console.log("five")
};

console.log("Object counter")
console.log(counter.next);
console.log(counter.next);
console.log("Reset")
counter.reset();
console.log(counter.next);
console.log(counter.next);

function makeArmy() {
  let i = 0;

  const shooters = [];

  do {
    const shooter = function () {
      const randNum = Math.random();
      console.log(`I'm a shooter #${i}, my random number is: ${randNum}`);
    }

    shooters.push(shooter);
    i += 1;
  } while(i < 10);

  return shooters;
}

const shooters = makeArmy();

shooters[0]();
shooters[4]();

// for (let i =0; i < shooters.length; i += 1) {
//   shooters[i]();
// }