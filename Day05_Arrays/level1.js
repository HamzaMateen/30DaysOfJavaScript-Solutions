/** LEVEL 1 Challenges **/
// 1 
let arr = []; 
// 2
let arr2 = [1, 2, 3, 4, 5];
// 3
let len = arr2.length;
// 4
let first = arr[0];
let midle = arr[parseInt(arr.length/2)];
let last  = arr[arr.length - 1];
// 5
const mixedDataTypes = ['bool', false, 1, 3.14, null, undefined, NaN];
// 6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 7
console.log(itCompanies);
// 8
console.log(`There are ${itCompanies.length} IT Companies out there!`);
// 9
console.log(itCompanies[0]);
console.log(itCompanies[parseInt(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length-1]);
// 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
// 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
// 12: print like a sentence
console.log(itCompanies.toString());
// 13
if(itCompanies.includes('IBM')) {
   console.log("IBM exists!");
} else console.log("IBM does not exist");

// 14
// 15
console.log(itCompanies.sort());
// 16
console.log(itCompanies.reverse());
// 17
console.log(itCompanies.slice(0, 3));
// 18 : last 3 companies
len = itCompanies.length
let last3Companies = itCompanies.slice(len - 3, len);
console.log("last", last3Companies);
// 19
let midCompany = itCompanies.slice(parseInt(itCompanies.length/2));
console.log(midCompany);
// 20: remove the first IT company
itCompanies.pop();
// 21: there are two companeis in the middel to be removed
console.log(itCompanies);
itCompanies.splice(parseInt(itCompanies.length/2)-1, 2); // IBM, GOOGLE gone!
console.log(itCompanies);
// 22
itCompanies.splice(itCompanies.length-1, 1);
console.log(itCompanies); 
// 23
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

/** LEVEL 1 Completed **/
