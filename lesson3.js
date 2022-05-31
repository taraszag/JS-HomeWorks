function isInInterval (a,x){
    return (x<a) && (x>-a);

}
function isInSquare(a, x, y) {
  return (x<a) && (x>-a) && (y<a) && (y>-a)
}

function isInRectangle(a, b, x, y) {
  return (x<a) && (x>-a) && (y<b) && (y>-b)
}
function inputNumber(text){
let reNum = Number(prompt(text));

do{
if (isNaN(reNum)){
  alert("Is not a number");
  reNum = Number(prompt(text));
}
} while(isNaN(reNum))

return reNum;
}
let b = inputNumber("Input the width of a rectangle");
let c = inputNumber("Input the width of a rectangle");
let point_x =inputNumber("Input the width of a rpoint");
let point_y = inputNumber("Input the width of a point");

if (isInInterval(b,point_x)){
  console.log("Pont" + point_x + " is in interval (" + (-b) + ", " + b + ")" );
} else {
    console.log("is not interval")
}

if (isInSquare(b,point_x,point_y)){
  console.log("Point X " + point_x + " and Point Y " + point_y + " is in square X and Y (" + (-b) + ", " + b + ")");
} else {
    console.log("is not square")
}

if (isInRectangle(b,c,point_x,point_y)){
  console.log("Point X " + point_x + " and Point Y " + point_y + " is in rectangle X (" + (-b) + ", " + b + ")" + "and Y (" + (-c) + ", " + c + ")");
} else {
    console.log("is not rectangle")
}
