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
function getIndexOfMul(str) {
  return getIndexOfOperation(str, "*");
}
 console.log(getIndexOfMul("2*3"));

// "23*5" => 23
function getFirstTermMul(str) {
  let indexOfMul = getIndexOfMul(str);

  if (indexOfMul == -1) {
    indexOfMul = str.length;
  }

  return Number(str.substr(0, indexOfMul));
}
console.log(getFirstTermMul("23*5"));

// "3" => 3
// "3*5*2" => 30
function calculateMul(str) {
  let indexOfMul = getIndexOfMul(str);

  let firstTerm = getFirstTermMul(str);

  if (indexOfMul == -1) {
    return firstTerm;
  }

  return firstTerm * calculateMul(str.substr(indexOfMul + 1))
}
console.log(calculateMul("3*5*2"));

// "2*3+4" => 3
function getIndexOfSum(str) {
  return getIndexOfOperation(str, "+");
}
console.log(getIndexOfSum("2*3+4"));

// "2+3" => 2
// "2*3+4" => 6
function getFirstTermSum(str) {
  let indexOfMul = getIndexOfSum(str);

  if (indexOfMul == -1) {
    indexOfMul = str.length;
  }

  return calculateMul(str.substr(0, indexOfMul));
}
console.log(getFirstTermSum("2*3+4"));


let s = "1+2*3+13*2";
console.log(calculateSum(s)); // 33