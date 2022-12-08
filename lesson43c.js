'use strict';

function *generateSequence() {
  yield 1
  for (let i = 1;; i += 1) {
    yield i;
  }
}

const generator = generateSequence();

console.log(generator);
console.log(generator.next().value);
//  console.log(generator.next());
// console.log("before while");

// while (true) {
//   let next = generator.next();
//   if (next.done) break;

//   console.log(next.value);
// }

  // function *generateTwoWaySequence() {
  //   console.log("before first yield");
  //   let result = yield 1;
  //   console.log("result", result);
  //   result = yield 2 + result;
  //   console.log("result", result);
  //   result = yield 4 + result;
  //   console.log("result", result);
  // }

  // const twoWayGenerator = generateTwoWaySequence();

  // let prev = 0;
  // while (true) {
  //   let next = twoWayGenerator.next(prev);
  //   if (next.done) break;
  //   prev = next.value;

  //   console.log("next.value", next.value);
  // }


  // // https://learn.javascript.ru/iterable Дз

  // // https://learn.javascript.ru/generators дз