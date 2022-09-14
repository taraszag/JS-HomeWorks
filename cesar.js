let plain = 'abcdefghijklmnopqrstuvwxyz'
let plainUp = plain.toUpperCase()
let punctuations = "!.',"

const rotate = (a, b) => {  let str = ''
  for (let i = 0; i < a.length; i++){
    if (a[i]== ' '){
        str+=" "
    }
    else if (!isNaN(a[i])){
        str+=a[i]
    }
    else if (punctuations.includes(a[i])){
        str+=a[i]
    }

    else if (a[i].toUpperCase() != a[i]) {
        str+= plain[plain.length%b]
    }
    else if (a[i].toUpperCase() == a[i]){
        if (plainUp.length > plainUp.indexOf(a[i]) + b) { str+= plainUp[plainUp.indexOf(a[i]) + b]}
        else { str+= plainUp[plainUp.indexOf(a[i]) + b - plainUp.length]}
    }
  }
return str
};

const expected = 'a';
const actual = rotate('n', 13);
console.log(actual)
console.log(27%27)
 
// for (let i = 0; i<26; i+=1){
//     console.log(i%26)
// }


// let temp = plain.indexOf(a[i]) + b
// if(temp>=plain.length){
//   str+= plain[temp-plain.length]
// } else{str+= plain[temp]}