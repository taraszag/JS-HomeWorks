//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}
export class Robot {
      constructor(x, y){
    this.x = x;
    this.y = y;
    this.direction = 'north'
    }
  get bearing() {
    return this.direction}
  
  get coordinates() {
    return [this.x,this.y]
  }
  place({ x, y, direction }) {
     if(!['north', 'east', 'west', 'south']
        .includes(direction)) throw new InvalidInputError()
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
evaluate(instructions) {
    this.instructions = instructions
    let  arr = ["north","east","south","west"]
    for (let i = 0; i < this.instructions.length; i++) {
      switch(this.instructions[i]){
          case "R": if(arr[arr.indexOf(this.direction)]!=arr[3]){
       this.direction =arr[arr.indexOf(this.direction)+1]
    }else {this.direction =arr[0]}
          break;
        case "L":  if (this.direction == 'north'){this.direction = arr[3]}
      else{this.direction = arr[arr.indexOf(this.direction, 1)-1]}
           break;
         case "A":
      switch(this.direction){
        case "north": this.y += 1;
          break;
          case "south": this.y += -1;
          break;
          case "east": this.x += 1;
          break;
          case "west": this.x += -1;
          break;
    }
          break;
    }
}
}
}

// class Robot {
//     constructor(x, y, direction = 'north'){
//     this.x = x;
//     this.y = y;
//     this.direction = direction
//     }
//   get bearing() {
//     if (this.direction=="south" || this.direction=="north"
//         ||this.direction=="east"||this.direction=="west"){
//     return this.direction}
//     else throw new InvalidInputError()
//   }

//   get coordinates() {
//     return [this.x,this.y]
//   }

//   place({ x, y, direction }) {
//     this.x = x;
//     this.y = y;
//     this.direction = direction
//   }

//   evaluate(instructions) {
    
//   }
// }



// const robot = new Robot();
// robot.place({ direction: 'hhh', x: 0, y: 0 });
// console.log(robot)
// // turnRight(robot);
// console.log(robot.bearing)


// export class Robot {
//   constructor(x, y){
// this.x = x;
// this.y = y;
// this.direction = 'north'
// }
// get bearing() {
// return this.direction}


// get coordinates() {
// return [this.x,this.y]
// }

// place({ x, y, direction }) {
//  if(!['north', 'east', 'west', 'south']
//     .includes(direction)) throw new InvalidInputError()
// this.x = x;
// this.y = y;
// this.direction = direction;
// }

// evaluate(instructions) {
// this.instructions = instructions
// if(this.instructions == 'R'){
// switch (this.direction) {
//  case "north": this.direction = "east";
//    break;
//  case "east" : this.direction = "south";
//   break;
//  case "south" : this.direction = "west";
//   break;
//  case "west": this.direction = "north";
//    break;}
// }
//  if(this.instructions == 'L'){
//    switch (this.direction){
//  case "north": this.direction = "west";
//    break;
//  case "west" : this.direction = "south";
//   break;
//  case "south" : this.direction = "east";
//   break;
//  case "east": this.direction = "north";
//    break;
//    }
//  }
// if(this.instructions == 'A'){
//   switch(this.direction){
//     case "north": this.y = 1;
//       break;
//       case "south": this.y = -1;
//       break;
//       case "east": this.x = 1;
//       break;
//       case "west": this.x = -1;
//       break;
// }
// }
// }

// }
// console.log('Debug message');