// LEVEL 1: Sets and Maps basics 
let countries = ['Pakistan', 'India', 'Afghanistan', 'Iran', 'Turkey'];

// 1: create empty set     
let empty = new Set();

// 2: 0-10 using loop in set      
let arr = [0,1,2,3,4,5,6,7,8,9,10];
let anotherSet = new Set();
for(const n of arr) {
   anotherSet.add(n);
}

// 3: remove an element     
anotherSet.delete(2);

// 4: clear the set      
anotherSet.clear();

// 5: set of 5 string elements 
let setOfCountries = new Set(countries);
setOfCountries.forEach(o => console.log(o))

// 6: Create Map of countries and length of their names
let mapOfCountries = new Map();
for(const country of countries) {
   mapOfCountries.set(country, country.length);
}

// * Complete
