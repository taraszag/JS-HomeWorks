function makeCountDown(a) {
    a = a + 1

    return {
        get next() {

            if (a == 0) { a = 0 }
            else a -= 1;
            return a;
        },
        reset: function (toValue = 1) {
            a = toValue + 1;
        }
    }
}
// H.A. 1

let c1 = makeCountDown(3);
console.log(c1.next); // 3
console.log(c1.next); // 2
console.log("reset")
c1.reset(3)
console.log(c1.next); // 3
console.log(c1.next); // 2
console.log(c1.next); // 1
console.log(c1.next); // 0


function makeArmy() {
    let i = 0;

    const shooters = [];

    do {
        let sNumber = i
        const shooter = function () {
            const randNum = Math.random();

            console.log(`I'm a shooter #${sNumber}, my random number is: ${randNum}`);
        }




        shooters.push(shooter);
        i += 1;
    } while (i < 10);

    return shooters;
}

const shooters = makeArmy();

shooters[0]();
shooters[4]();
shooters[9]();

  for (let i =0; i < shooters.length; i += 1) {
    shooters[i]();
  }