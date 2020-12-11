/** LEVEL 2 Challenges **/
// 1  
let score = parseInt(prompt("Enter the score "));

if (score > 79 && score < 101)
   console.log("A");
else if (score > 69 && score < 80)
   console.log("B");
else if (score > 59 && score < 70)
   console.log("C");
else if (score > 49 && score < 60)
   console.log("D");
else console.log("F");
  
// 2 
let month = prompt("Enter the month: ");
let season;

switch(month) {
   case "September":
   case "October":
   case "November":
      season = "Autumn";
      break;
   
   case "December":
   case "January":
   case "February":
      season = "Winter";
      break;
   
   case "March":
   case "April":
   case "May":
      season = "Spring";
    
   case "June":
   case "July":
   case "August":
      season = "Summer";
      break;
}
console.log("Season is: ", season);

// 3
let day = prompt("What is the day today? ").toLowerCase();
if (day == "saturday" || day == "sunday")
   console.log(day, " is a weekend!")
else console.log(day, " is a working day");

