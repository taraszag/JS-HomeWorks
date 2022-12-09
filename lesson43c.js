
'use strict';

function *generateSequence() {
  console.log("before first yield");
  yield 1;
  console.log("after first yield");
  yield 2;
  console.log("after second yield");
  yield 4;
  console.log("after third yield");
  for (let i = 12; i < 22; i += 3) {
    yield i;
    console.log(`yield after i=${i}`);
  }
}

const generator = generateSequence();

console.log(generator);
//  console.log(generator.next());
console.log("before while");

while (true) {
  let next = generator.next();
  if (next.done) break;

  console.log(next.value);
}

function *generateTwoWaySequence() {
  console.log("before first yield");
  let result = yield 1;
  console.log("result", result);
  result = yield 2 + result;
  console.log("result", result);
  result = yield 4 + result;
  console.log("result", result);
}

const twoWayGenerator = generateTwoWaySequence();

let prev = 0;
while (true) {
  let next = twoWayGenerator.next(prev);
  if (next.done) break;
  prev = next.value;

  console.log("next.value", next.value);
}

// https://learn.javascript.ru/iterable
// https://learn.javascript.ru/generators