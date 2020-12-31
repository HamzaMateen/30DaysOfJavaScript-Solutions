/** LEVEL 1 Challenges **/   
// 1. Difference b/w callback, map, filter, reduce
// callback    
/**callback is a higher order first class function in JS which is being passed to a function. It is used by the function it is being passed to perform certain operations on the object.    
**/   

// forEach
/**
   It is the defacto function defined in the iterable objects in JS which takes a callback and applies it to each element of iterable. It is often used in place of for loops if somone is not interested in the index of the loop.
**/
// map   
/** map is higher order function in JS which takes a callback and apply it to each element of the iterable it is called upon. It returns a new iterable that is the modified version of the one it is called upon.
**/

// filter      
/** filter is a also a HO-FC function defined by the iterable objects in JS. It takes a callback and applies it to each element of the iterable, the callback if returns true, it returns the element otherwise drops it. It is used to filter objects based on some condition.
**/

// reduce
/** reduce takes a callback, it takes a callback function which in turn takes two arguments - accumulator, and current_value, and it takes an optional but recommended second argument - intial value.    
 * ...working ....    
 * the reduce function initializes the accumulator with initial_value if provided, zero otherwise and applies the callback on each element of iterable. on each iteration, the current_values is added (depends upon the operation) to accumulator and stored in the accumulator. When all iterations are completed, the reduce returns a single value which is result of all numerical operations done on values of the iterable.
**/
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

// 3   
countries.forEach(c => console.log(c));
// 4    
names.forEach(n => console.log(n));
// 5   
numbers.forEach(n => console.log(n));
// 6 
const capCountries = countries.map(c => c.toUpperCase());
// 7 
const countriesLen = countries.map(c => c.length);
// 8 
const squaredLens = countriesLen.map(n=>n*n);
console.log(squaredLens);

// 9 
const capNames = names.map(n => n.toUpperCase());
// 10 
const prices = products.map(p => p.price);
// 11 
const withLand = countries.filter(c => c.toLowerCase().includes('land'));
// 12
const exactlySixChars = countries.filter(c => c.length === 6);
// 13 
const sixOrMoreChars= countries.filter(c => c.length > 5);
// 14
const startsWithE = countries.filter(c => c.startsWith('E'));

// 15 
const validPrices = products.filter(p => {
   return typeof p.price != 'string'
})
// 16 
let getStringLists = (arr) => {
   return arr.filter(elem => typeof elem == 'string');   
}
let a = [1, 2 , 'sdf', 'sdf', 234];
console.log(getStringLists(a));
// 17 
let arr = [1, 2, 34, 323];
const sumOfArr = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfArr);

// 18 
// 19: some vs. every     
/** some -> returns true if at least one of the element of an iterable satisfies the condition imposed by the callback, false if none do.     
   
   every -> returns treu if all the valeus of iterable satisfy the condition imposed by callback, returns false if none at least no does not satisfy it.
**/
// 20 
const namesWith6orMoreLen = names.some(n => n.length > 7);
console.log(namesWith6orMoreLen);
// 21 
let allContainLand = countries.every(c => c.toLowerCase().includes('land'));

// 22: Difference between 'find' and 'findIndex'
/** 
   find -> applies a callback to each element of an iterable and returns the first element that satisfies the callback condition   
   findIndex -> does the same but returns the index of the object instead of the object itself.   
**/

// 23 
let sixCharsCountry = countries.find(c => c.length === 6);

// 24 
let indexOfSixCharsCountry = countries.findIndex(c => c.length === 6);

// 25 
let indexOfNorway = countries.findIndex(c => c === 'Norway');

// 26
let indexOfRussia = countries.findIndex(c => c === 'Russia');

// END OF CHALLENGE LEVEL 1 
