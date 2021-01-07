/** LEVEL 2 Challenges Functions **/    

// 2: solve quardratic equation      
let solveQuadEquation = function(a, b, c) {
  let disc = Math.pow(b, 2) - 4*a*c;
  
  let posX = (-b+Math.pow(disc, 0.5))/(2*a);
  let negX = (-b-Math.pow(disc, 0.5))/(2*a);
  
  return [posX, negX]; // can be NaN
}
console.log(solveQuadEquation(1, 2, 3));

// 3 
let printArray = function(arr) {
   for(const value of arr) {
      console.log(value);
   } 
} 
printArray(Array(3).fill(3));

// 4 
let showDateTime = () => {
  let d = new Date();
  
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let hour = d.getHours();
  let mins = d.getMinutes();
  
  date = date < 10 ? '0' + date.toString(): date;
  month = month < 10 ? '0' + month.toString
    (): month;
  hour = hour < 10 ? '0' + hour.toString
    (): hour;
  mins = mins < 10 ? '0' + mins.toString(): mins;
   
  let format = `${date}/${month}/${year} ${hour}:${mins}`;
  
  return format;
}
// 5 
function swapValues(a, b) {
   return [b, a];
}
let x = 1; 
let y = 2; 
console.log(swapValues(x, y));

// 6 
let reverseArray = (arr) {
  let reversed = [];
  for(let i = arr.length-1; i >= 0; i--)
    reversed.push(i);
    
  return reversed;
}

// 7 
let capitalizeArray = (arr) => {
  let caps = [];
  for(const item of arr) {
    caps.push(item.toUpperCase());
  }
  
  return caps;
}

// 8  
let addItem = (arr, item) => {
  return arr.push(item);  
}

// 9
let removeItem = (arr, index) => {
  arr.splice(index, 1);
  return arr;
}

// 10   
function addUpto(num) {
  if(num == 0) return 0;
  else return num + addUpto(num-1);
}

// 11 
function addOddsUpto(num) {
  if(num <= 0) return 0;
  num = num%2== 0? num -1: num;
  return num + addOddsUpto(num - 2);
}

// 12 
function addEvensUpto(num) {
  if(num <= 0) return 0;
  num = num%2== 0? num: num-1;
  return num + addOddsUpto(num - 2);
}

// 14 
let sumOfNums = (...args) => {
  let sum = 0;
  for(const x of args) {
    sum += x;
  }
  return sum;
}

// 15 
function generateIP () {
  let a = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let c = parseInt(Math.random() * 255);
  let d = parseInt(Math.random() * 255);
  
  
  return `${a}.${b}.${c}.${d}`;
}

// 16 
function macAddGenerator () {
  let arr = [];
  let alphanums = '0123456789ABCDEF';
  
  for(let i = 1; i <= 6; i++) {
    let id1 = Math.ceil(Math.random() * 15);
    let id2 = Math.ceil(Math.random() * 15);
    
    arr.push(alphanums[id1] + alphanums[id2]);
  }
  
  return arr.join(':');
}
// 17 random hex number gen     
function randomHexaNumberGenerator() {
  let literal = '0123456789ABCDEF';
  
  let hex = [];
  let len = Math.floor(Math.random() * 11);
  for(let i=0; i < len; i++) {
    let index= Math.ceil(Math.random() * literal.length) -1;
    hex.push(literal[index]);
  }
  
  return '#' + hex.join('');
}
// 18
function randomUserIdGenerator() {
  let literal = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
  let id = [];
  for(let x=0; x<7; x++) {
    let index = Math.ceil(Math.random() * literal.length)-1;
     id.push(literal[index])
   }
   return id.join('');
}
  

