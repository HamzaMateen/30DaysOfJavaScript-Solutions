/** LEVEL 1 Challenges **/
// 1 
let age = parseInt(prompt("Enter your age: "));
if(age > 17) 
   console.log("You are old enough to drive.");
else console.log(`you are left with ${18-age} years to drive.`)

// 2 
let myAge = 17;
let yourAge = parseInt(prompt("Enter your age: "));

if(myAge < yourAge){
   console.log(`You are ${yourAge - myAge} years older than me.`);
} else console.log(`I am ${myAge - yourAge} years older than you.`);

// 3
let a = 4; let b = 3;
// way 1 
a > b ? console.log(a, " is greater than ", b): console.log(a, " is lesser than ", b);
// way 2
if (a > b) console.log(a, " is greater than ", b); 
else console.log(a, " is lesser than ", b);

// 4
let number = parseInt(prompt("Enter a number: "));
number % 2 == 0 ? console.log(`${number} is an even number`): console.log(`${number} is an odd number`);
// Level 1 complete
