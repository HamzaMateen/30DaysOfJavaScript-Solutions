/** LEVEL 2 Exercises **/
// 2 
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, REACT, PYTHON.'
let arr = text.split(/[,\s]+|[\s]/);
console.log(arr);
// 3
// i
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// ii
shoppingCart.unshift('Meat');
// iii
shoppingCart.push("Sugar");
// iv
shoppingCart.splice(shoppingCart.lastIndexOf('Honey'), 1);
// v
shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea";
console.log(shoppingCart);
// 4 
if (countries.indexOf("Ethiopia")) {
   console.log("ETHIOPIA");
} else countries.push("Ethiopia");
// 5
if (webTechs.indexOf("Sass")) {
   console.log("Sass is a CSS preprocess");
} else webTechs.push("Sass");
console.log(webTechs);
// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MangoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// ** Level 2 completed **/
