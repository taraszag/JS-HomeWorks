'use strict';

let a = [1, 2, 4, 6, 8, 10];

for (const n of a) {
  console.log(n);
}

let iterator = a[Symbol.iterator]();

console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

iterator = a[Symbol.iterator]();
while (true) {
  const next = iterator.next();
  if (next.done) break;

  console.log(next.value);
}

let range = {
  from: 1,
  to: 50,
  step: 2,
}

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    step: this.step,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        const previous = this.current;
        this.current += this.step;
        return { value: previous, done: false}
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}

for (const e of range) {
  console.log(e);
}
