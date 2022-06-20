function makeCounter(a) {
    a = a - 1

    return function () {
        a += 1;
        return a;
    }
}

// let a = makeCounter(5);

// console.log(a()); // 5
// console.log(a()); // 6
// console.log(a()); // 7

function makeCountDown(a) {
    a = a + 1

    return function () {
        if (a == 0) { a = 0 }
        else a -= 1;
        return a;
    }
}
// H.A. 1

let c1 = makeCountDown(3);
// console.log(c1()); // 3
// console.log(c1()); // 2
// console.log(c1()); // 1
// console.log(c1()); // 0
// console.log(c1()); // 0
// console.log(c1()); // 0

// H.A. 2
function makeArithmeticProgression(a, b) {
    a = a - b
    return function () {
        a += b;
        return a;

    }
}
let p1 = makeArithmeticProgression(6, 2);
// console.log(p1()); // 6
// console.log(p1()); // 8
// console.log(p1()); // 10

// H.A. 3
function makeSequence(a) {
    let b = a
    let n =1
    let n2 =1
    return function factorial() {
        n+=1
        n2+=1
        let result = 1;
        for (let i = 1; i <=n; i+= 1) {
        result = result * i;
      }
        a = Math.pow(b,n2)/result;
        return a;
    } 

}

let s1 = makeSequence(3); // (3^n)/n!
console.log(s1()); // 3
console.log(s1()); // 3^2/2 = 4.5
console.log(s1()); // 3^3/3! = 4.5
console.log(s1()); // 3^4/4! = 3.375