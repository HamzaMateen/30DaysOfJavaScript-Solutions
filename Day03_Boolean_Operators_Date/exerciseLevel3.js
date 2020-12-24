/** LEVEL 3 Challenges **/
// 1: create a human readable format for date
const d = new Date();

let mins = d.getMinutes();
mins < 10 ? '0' + mins.toString(): mins;
let hrs  = d.getHours();
hrs < 10 ? '0' + hrs.toString(): hrs;

let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();

console.log(`${year}-${month+1}-${date}  ${hrs}:${mins}`);

/** LEVEL 3 completed **/
