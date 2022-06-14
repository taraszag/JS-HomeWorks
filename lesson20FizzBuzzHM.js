function num(num) {
    if (num % 5 == 0 && num % 3 == 0) {
        return "FizzBuzz";
    }
    if (num % 3 == 0) {
        return "Fizz";
    }
    if (num % 5 == 0) {
        return "Buzz";
    }
    return `${num}`
}

for (let i = 1; i <= 30; i += 1) {
    console.log(`${i} = ${num(i)}`)
}
console.log(num(num))