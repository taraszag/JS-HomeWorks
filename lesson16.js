function calculate(str) {
    let result =getFirstTermFrom(str);
    let indexOfOperation;
    do {
      indexOfOperation = getIndexOfOperation(str);
      if (getOperation(str) == "+"){
        result += getFirstTermFrom(str.substr(indexOfOperation +1))
      }
        if (getOperation(str) == "-"){
          result -= getFirstTermFrom(str.substr(indexOfOperation +1))
        }
   
   
      if (indexOfOperation >= 0) {
        str = str.substr(indexOfOperation +1)
      }
   
    } while (indexOfOperation >= 0);
   
    return result;
  }
   
  let s = "1+2-13-1+5";
   
  console.log(calculate(s))// -6