'user strict';
function makeCounter(a) {
  a = a-1
    return function() {
      a += 1;
      return a;
    }
  }
  
  let a = makeCounter(5);
  
  console.log(a());
  console.log(a());
  console.log(a());
  
  let b = makeCounter(1);
  console.log(b());
  console.log(a());