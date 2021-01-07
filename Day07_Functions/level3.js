// LEVEL 3 Challenges Functions ** /
let userIdGeneratedByUser = () => {
   let len = parseInt(prompt("Enter length of ID: "));
   let idCount = parseInt(prompt("Enter no of IDs: "));
   let alphanums = '123456789abcdefghijklmnopqrstuvwxyz123456789';
   
   let allID = [];
   for(let x=1; x<=idCount; x++) {
     let rands = [];
     for (let i = 1; i <= len; i++) {
        rands.push(alphanums[Math.floor(Math.random() * alphanums.length) - 1]);
     } 
     allID.push(rands.join(''));
   } 
   return allID;
} 
console.log(userIdGeneratedByUser());

// 2  
let rgbColorGenerator = () => {
   let rgb = [];
   for (const char of '111') {
      var red = (parseInt(Math.random() * 255));
      var grn = (parseInt(Math.random() * 255));
      var blu = (parseInt(Math.random() * 255));
      rgb.push(red, grn, blu);
   }
   return `rgb(${red}, ${grn}, ${blu})`;
}
console.log(rgbColorGenerator());

// 3 
let arrayOfHexaColors = () => {
   let allHexCodes = '123456789abcdef';
   let loopCount = parseInt(Math.random() * 10);
   let hexColorArr = [];
   
   for(let x=1; x<=loopCount; x++) {
      let hexChars = [];
      for (let i = 0; i < 6; i++) {
         hexChars.push(allHexCodes[parseInt(Math.random() * allHexCodes.length) - 1]);
      }
      hexColorArr.push('#' + hexChars.join(''));
   }
   return hexColorArr;
} 
console.log(arrayOfHexaColors());

// 4 
// 8  
let shuffleArray = (arr) => {
   // develop the shuffle algorigthm
   let len = arr.length;
   let uniqueRands = [];
   
   while(uniqueRands.length != len) {
      let randomNum = parseInt(Math.random() * len);
      if(uniqueRands.indexOf(randomNum) === -1) uniqueRands.push(randomNum);
   } // developed;    
   
   let randomizedArr = [];
   for(const index of uniqueRands) {
      randomizedArr.push(arr[index]);
   }
   return randomizedArr;
}
let arr = [1, 23, 34, 32, 2, 1];
console.log(shuffleArray(arr));

// 9
function factorial(num) {
   if (num <= 1) return 1;
   else return num * factorial(num-1);
}
console.log(factorial(5));

// 10
let isEmpty = (arg) => !Boolean(arg.length);
console.log(isEmpty(Array()));

// 11 
let sum = (...args) => {
   let total = 0;
   for(const elem of args) total += elem;
   return total;
}
console.log(sum(2, 34, 23));

// 12 
let sumOfArrayItems = (arr) => {
  let sum = 0;     
  for(const i of arr) 
    sum += i      
  return sum;
}

// 13   
let average = (arr) => {
  return sumOfArrayItems(arr) / arr.length;
}

// 14   
let modifyArray = arr => {
  if(arr.length < 5) return 'Item Not Found!';
  arr[4] = arr[4].toUpperCase();
  return arr;
}

// 15  
let isPrime = num => {
   if(num <= 0 || num == 1) return false; 
   if(num == 2 || num == 3) return true;    
   
   for(let i=1; i<=Math.sqrt(num); i++) {
     if(num % i == 0) return false;      
   }
   return true;     
}

// 16   
function areAllUnique(arr) {
  for(let x = 1; x < arr.length; x++) {
    for(let i = 0; i< x; i++) {
      if(arr[x] == arr[i])
        return false;
    }
  } return true;
}

// 17  of smae type     
let areSameType = arr => {
  let type = typeof arr[0];
  for(const i of arr) {
    if(type != i)
      return false;      
  }
  return true;
}

// 18   
function isValidVariable(varName) {
  let regex = /[_|\$|a-z|A-Z|0-9]+/;
  return regex.test(varName);
}
// 19  
let getUniqueRands = () => {
  let arr = [];
  for(let i = 0; i<7; i++) {
    let random = Math.ceil(Math.random() * 9);
    
    let isUnique = true;
    for(const x of arr) {
      if(random == x) {
        isUnique = false;
        break;
      }
    }
    if(isUnique) arr.push(random);
  }
  return arr; 
}

// 20 
function reverseCountries (arr) {
  let copy = arr.slice(0, arr.length);
  
  let index = 0;
  for(let i=arr.length-1; i>=0; i--) { 
    arr[index] = copy[i];
    index++;
  }
  return arr;
} 
// Challenge 3 Completed     
