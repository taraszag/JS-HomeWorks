'use strict'
function calculateSum(str) {
    const indexOfOperation = getIndexOfSum(str);

    const firstTerm = getFirstTermSum(str);

    if (indexOfOperation == -1) {
        return firstTerm;
    }

    const secondTerm = calculateSum(str.substr(indexOfOperation + 1));

    return firstTerm + secondTerm;
}

function getIndexOfOperation(str, operation) {
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] == operation) {
            return i;
        }
    }
    return -1;
}


// "2*3" => 1
// "(2+3)*4" => 5
function getIndexOfMul(str) {
    let par = 0
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] == "(") {
            par += 1;
        }
        if (str[i] == ")") {
            par -= 1;
        }
        if (par == 0 && str[i] == "*") {
            return i;
        }
    }
    return -1
}
console.log(getIndexOfMul("(4+(3+(2-7)*5)*2)*4+5"));

// "5" => 5
// "23*5" => 23
// "(17+2*3)*5" => 23 -- calls calculateSum
function getFirstTermMul(str) {
    let indexOfMul = getIndexOfMul(str);

    if (indexOfMul == -1) {
        indexOfMul = str.length;
    }
    if (str[0] == "(") {
        return calculateSum(str.substr(1, indexOfMul - 2))
    }
    else { return Number(str.substr(0, indexOfMul)) }
}
console.log(getFirstTermMul("5"))
console.log(getFirstTermMul("23*5"))
console.log(getFirstTermMul("(17+2*3)*5"))

// "3*5*2" => 30
// "(1+2)*(2+3)*2" => 30
function calculateMul(str) {
    let indexOfMul = getIndexOfMul(str);

    let firstTerm = getFirstTermMul(str);

    if (indexOfMul == -1) {
        return firstTerm;
    }

    return firstTerm * calculateMul(str.substr(indexOfMul + 1))
}
console.log(calculateMul("3*5*2"))
console.log(calculateMul("(1+2)*(2+3)*2"))
// "2*3+4" => 3
// "(2+3)*(4+5)+4" => 11

function getIndexOfSum(str) {
    let par = 0
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] == "(") {
            par += 1;
        }
        if (str[i] == ")") {
            par -= 1
        }
        if (par == 0 && str[i] == "+") {
            return i;
        }
    }
    return -1
}
console.log(getIndexOfSum("2*3+4"));
console.log(getIndexOfSum("(2+3)*(4+5)+4"));
console.log(getIndexOfSum("(4+(3+(2-7)*5)*2)*4+5"));

// "2+3" => 2
// "2*3+4" => 6
// "(2+3)*(4+5)+4" => 45
function getFirstTermSum(str) {
    let indexOfMul = getIndexOfSum(str);

    if (indexOfMul == -1) {
        indexOfMul = str.length;
    }

    return calculateMul(str.substr(0, indexOfMul));
}
console.log(getFirstTermSum("2+3"));
console.log(getFirstTermSum("2*3+4"));
console.log(getFirstTermSum("(2+3)*(4+5)+4"))

let s = "1+2*3+13*2";
console.log(calculateSum(s)); // 33

s = "(1+2)*3+(2+6)*(3+8)"
console.log(calculateSum(s)); // 97

s = "(4+(3+(2+7)*5)*2)*4+5" //-155
console.log(calculateSum(s));