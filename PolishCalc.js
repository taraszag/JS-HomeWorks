'use strict'
let s = "21,4,7,*,+,9,-"
//let s = "20,10,+,5,-"

function getNextTermIndex(str,i){
 for (i++; i < str.length; i += 1) {
   if (str[i] == ',') {
     return i
   }
     }
     return i
}

console.log(getNextTermIndex(s, 0)); // 2
console.log(getNextTermIndex(s, 2)); // 4
console.log(getNextTermIndex(s, 4)); // 6
console.log(getNextTermIndex(s, 12)); // 14


function calculate2(str){
  let itemSteck = []
  let firstNumber = ''
  let secondNumber = 0
  let thirdNumber = 0
  let firstIndex = 0
  let nextIndex = getNextTermIndex(str,0)

  for(;nextIndex < str.length+1;){
   firstNumber = str.substr(firstIndex, nextIndex-firstIndex)
   firstIndex = nextIndex+1
   nextIndex = getNextTermIndex(str,nextIndex)
   if(!isNaN(firstNumber)){
     itemSteck.push(Number(firstNumber))
   }
   if (isNaN(firstNumber)){
   secondNumber = itemSteck.pop()
   thirdNumber = itemSteck.pop()}
   if(firstNumber == '*'){
     itemSteck.push(secondNumber*thirdNumber)
   }
   if(firstNumber=='+'){
    itemSteck.push(secondNumber+thirdNumber)
   }
   if(firstNumber=='-'){
    itemSteck.push(thirdNumber-secondNumber)
   }
 }
 return itemSteck.pop()
 }
console.log(calculate2(s))