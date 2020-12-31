// LEVEL 2: Higher Order Functions in JS 
/** REQUIRED DATA **/    
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1   
let totalPrice = products.filter(p => typeof p.price != 'string').reduce((acc, cur) => acc + cur.price, 0);

// 2: use only reduce here 
let totalPrice2 = products.reduce((sum, obj) => { return typeof obj.price != 'string' ? sum += obj.price: sum;
}, 0);

// 3  
let categorizeCountries = (arr) => {
   return arr.filter(c => c.endsWith('en'));
}

// 4 
let frequentLetterList = Countries.map(c => c[0]).reduce((obj, cur) => {
   obj[cur] = (obj[cur] || 0) +1;
   return obj;
}, {})
console.log(frequentLetterList);
/**
function getObject(arr) {
   let object = {};
   for(const i of arr) {
      if(object.hasOwnProperty(i)) {
         object[i] += 1;
      } 
      else {
         object[i] = 1;
      }
   }
   return object;
}
console.log(getObject(frequentLetter));
**/
// 5: get first 10 countries      
let getFirstTenCountries = arr => arr.filter(c => arr.indexOf(c)<10);

// 6: get last 10 countries
let getLastTenCountries = arr => arr.filter(c=> arr.indexOf(c) > arr.length-11);

// 7 : find out whic letter is used the most
let frequentFirstLetter = Object.entries(Countries.map(c => c[0]).reduce((acc,cur) => {
   acc[cur] = (acc[cur] || 0) +1;
   return acc;
}, {})).reduce((obj, cur) => {
   obj.max = (obj.max || cur[1]);
   obj.letter = (obj.letter || '');

   if (obj.max < cur[1]) {
      obj.max = cur[1];
      obj.letter = cur[0];
   }
   return obj;
}, {}).letter;

console.log(frequentFirstLetter);
// { [1, 2]: [2, 4 ]}

// END of LEVEL 2 
