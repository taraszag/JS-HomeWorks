const t = {
    celsius: 0,
    get fahrenheit() {
        return this.celsius * 9 / 5 + 32;
    },
    set fahrenheit(farh) {
        this.celsius = 5 / 9 * (farh - 32)
    }
}

function Temperature(temp) {
    this.celsius= temp;
}
Object.defineProperties(Temperature.prototype, {
    fahrenheit: {
        "get": function () { return this.celsius * 9 / 5 + 32; },
        "set": function (fahr) { this.celsius = 5 / 9 * (fahr - 32) }
    }
});
// t.celsius = 0;
// console.log(t.celsius); // 0
// console.log(t.fahrenheit) // 32

// t.fahrenheit = 100;
// console.log(t.fahrenheit) // 100
// console.log(t.celsius) // 37.7778

let t1 = new Temperature(0);
console.log(t1.fahrenheit)
t1.celsius = 25;
t1.fahrenheit = 100;
console.log(t1.celsius)