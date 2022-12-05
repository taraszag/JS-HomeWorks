'use strict';

class Point {
  static origin = {x: 0, y: 0};
  static count = 0;

  constructor(x, y) {
    this._x = x;
    this._y = y;
    Point.count += 1;
    console.log(`Created point #${Point.count}`);
  }


  describe() {
    return `{x: ${this._x}, y: ${this._y}}`;
  }

  static createAtOrigin() {
    console.log(this);

    return new Point(Point.origin.x, Point.origin.y);
  }
}

function createPointAtCenter() {
  return new Point(0,0);
}

const p = [new Point(2, 4), new Point(3, 1), new Point(0, 2), Point.createAtOrigin()];

const p1 = new Point(10, -4);
// console.log(Point.describe());
console.log(p1.describe());

console.log(p1.origin); // undefined

p.forEach(point => console.log(point.describe()));

console.log(p);

p1._x = -15;

console.log(p1);

class PrivatePoint {
  #x = 0;
  #y = 0;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get x() { 
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  set x(val) {
    if (val < 0) throw new Error(`x must be non-negative, but it's ${val}`);
    this.#x = val;
  }
  set y(val) {
    if (val < 0) throw new Error(`y must be non-negative, but it's ${val}`);
    this.#y = val;
  }
}

const pp = new PrivatePoint(2, 3);
console.log(pp);
// pp.#x = -15;
pp.x = 15;
console.log(pp);
pp.y = -10;
console.log(pp);

// https://learn.javascript.ru/classes

// виконати дз за посиланням в кінці