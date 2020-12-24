/** LEVEL 3 Challenges **/
let month = prompt("Enter a month: ").toLowerCase();
let daysCount;

// check if it is leap year 
let d = new Date();
let year = d.getFullYear();

if (month == "february") {
   if ((year % 4 == 0 && year % 100 != 0) ||    (year % 400 == 0)) { daysCount = 29; }
   else daysCount = 28;
} else { 
switch(month){
   case "january":
   case "march":
   case "may":
   case "july":
   case "august":
   case "october":
   case "december":
      daysCount = 31;
      break;
      
   case "april":
   case "june":
   case "september":
   case "november":
      daysCount = 30;
      break;
}
}
console.log(month, " has ", daysCount, " days");

