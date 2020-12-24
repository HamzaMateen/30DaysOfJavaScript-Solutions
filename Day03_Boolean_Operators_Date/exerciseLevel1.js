/** LEVEL 1 Challenges **/     
// 1 
let firstName = "Hamza";
let lastName = "Mateen";
let country = "Pakistan";
let city = "NYC";
let age = 17;
let isMarried = false;
let year = 2020;

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// 2  
console.log(typeof '10' == 10);
// 3
console.log(parseInt('9.8') == 10);
// 4: 
// i: three truthy comparisons
console.log(1 < 2);
console.log("a".length > "".length);
console.log(typeof true == typeof false);
// ii: three falsy comparisons
console.log(1 > 2);
console.log("a".length < "".length);
console.log(typeof true != typeof false);

// 5
console.log(true, true, false, false, true, true, false, false, false, true, false);
// 6
console.log(true, false, true, true, false, true, true, false, true, true, false);
// 7: use the Date object
const date = new Date;
console.log("Year : ", date.getFullYear());
console.log("Month: ", date.getMonth() +1);
console.log("Date : ", date.getDate());
console.log("Day  : ", date.getDay());
console.log("Hours: ", date.getHours());
console.log("Mins : ", date.getMinutes());
console.log("Secs : ", Date.now());

/** level 1 completed **/















