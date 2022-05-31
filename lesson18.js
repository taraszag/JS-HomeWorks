'use strict';
   let  s = "1+2*3+13*2";
 
   // console.log(calculate(s))// 16
 
    function calculateSum(str) {
      const indexOfOperation = getIndexOfSum(str);
 
      const firstTerm = getFirstTermSum(str);
 
      if (indexOfOperation == -1) {
        return firstTerm;
      }
 
      const secondTerm = calculateSum(str.substr(indexOfOperation + 1));
 
      return getFirstTermSum(str) + secondTerm;
    }
 
 
    // "2*3" => 1
    function getIndexOfMul(str) {
      for (let i = 0; i < str.length; i += 1) {
        if (str[i] =='*') {
          return i;
        }
      }
      return -1;
    }
 
    // "23*5" => 23
    function getFirstTermMul(str) {
      let strResult = "";
        for (let i = 0; i < str.length; i += 1) {
          if (str[i]!="*") {
            strResult += str[i]
          } else {
            return Number(strResult);
          }
        }
 
        return Number(strResult);
    }
 
    // "3*5*2" => 30
    function calculateMul(str) {
      const indexOfOperation = getIndexOfMul(str);
        if (indexOfOperation != -1) {
            return Number(getFirstTermMul(str) * calculateMul(str.substr(indexOfOperation + 1)))
          }
    return getFirstTermMul(str)
    }
 
    // "2*3+4" => 3
    function getIndexOfSum(str) {
      for (let i = 0; i < str.length; i += 1) {
        if (str[i] =='+') {
          return i;
        }
      }
      return -1;
    }
 
    // "2+3" => 2
    // "2*3+4" => 6
    function getFirstTermSum(str) {
      let strResult = "";
        for (let i = 0; i < str.length; i += 1) {
          if (str[i]!="+") {
            strResult += str[i]
          } else {
            return calculateMul(strResult);
          }
        }
 
        return calculateMul(strResult);}
    
    console.log(calculateSum(s)); // 33
    console.log(getIndexOfMul("2*3"))
    console.log(getIndexOfSum("2*3+4"))
    console.log (getFirstTermMul("23*5"))
    console.log (calculateMul("3*5*2"))
    console.log (getFirstTermSum("25*2+1"))