/** LEVEL 3 challenges for Day 5: Arrays **/
// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// i 
ages.sort();
console.log(ages);
const min = ages[0];
const max = ages[ages.length-1];
// ii
let len = ages.length;
let median = (ages[parseInt(len/2)-1] + ages[parseInt(len/2)])/2;
// iii
const average = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/len;

console.log(average);
// iv
let range = max - min;
console.log("Range of ages: ", range);
// v 
Math.abs(min-average) < Math.abs(max-average) ? console.log("Data is left skewed"): console.log('Data is right skewed!');
// vi
let first10Countries = countries.slice(0, 10);
console.log(first10Countries);
// 2 : Find the mid countries  
if (countries.length % 2 === 0){
   let firstMid = (countries.length)/2 -1;
   let secondMid = (countries.length)/2;
   console.log(countries[firstMid], countries[secondMid]);
} else console.log(countries[parseInt(countries.length/2)-1]); // Lebanon

// 3: convert in to equal halves 
// remove first country to make the arr even
countries.shift();
// now convert into equal halves
console.log(countries);
let firstHalf = countries.splice(0,countries.length/2);
let anotherHalf = countries.splice(0, countries.length);
console.log(anotherHalf);

//** LEVEL 3 Completed **/
