// Level1 Challenges: Basic destructuring
const constants = [2.72, 3.14, 9.81, 37,100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

const rectangle = {
   width: 20, 
   height: 10, 
   area: 200, 
   perimeter: 60
}
// 1
let [e, pi, gravity, humanBoyTemp, waterBoilingTemp] = constants;

// 2 
let [fin, est, sw, den, nor] = countries;

// 3: destructuring by key
let { width: w, height: h, area: a, perimeter: p }= rectangle;

// LEVEL 1 Complete
