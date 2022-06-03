function nums(num) {
    if (num % 3 == 0 && num % 5 != 0 ) {
        return "Fizz"
    }
    else if (num % 5 == 0 && num % 3 != 0 ) {
        return "Buzz"
    }
    else if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz"
    }
}