// LEVEL 1: Closures       
let first = (num1) => {
  let second = (num2) => {
    return num1 * num2;
  }  
  return second;
}
let partialResult = first(2);
let fullResult = partialResult(3);
console.log(fullResult);

// LEVEL 2 
let everythingTWO = (number) => {
  let addTWO = () => {
    return number += 2;
  }
  
  let subTWO = () => {
    return number -= 2;
  }
  
  let mulTWO = () => {
    return number *= 2;
  }
  
  return {
    add: addTWO(),
    sub: subTWO(),
    mul: mulTWO(),
    
  }
}

let number = 2;
let op = everythingTWO(number);

console.log(op.add); // 4   
console.log(op.sub); // 2 
console.log(op.mul); // 4   

// LEVEL 3 is a challenge from previous section.
