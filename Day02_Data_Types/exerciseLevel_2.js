/** LEVEL 2 Challenges **/
// 1
console.log("There is no exercise better for\ heart than reaching down and lifting\ people up.")
// 2 ... screen size was small so ;)
console.log(`​Love is not patronizing and charity\ isn't about pity, it is about love\. Charity and love are the same\ -- with charity you give love\, so don't just give money but reach out y\ our hand instead.​`)
// 3
let typeOf10 = typeof '10'; // it's string
typeOf10 = typeof parseInt('10')
console.log(typeOf10);
// 4
let valueOf9_8 = parseFloat('9.8') // value is 9.8 exactly so we will change it to 10
valueOf9_8 = Math.ceil(valueOf9_8);
console.log(valueOf9_8);
// 5
let onInPython = "Python".includes("on");
let onInJargon = "jargon".includes("on");
console.log("\'on\' is present in both Python and Jargon: ", onInPython == onInJargon);
// 6
console.log("I hope this course is not jargon.".includes("jargon"));
// 7
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
// 8
let randIn50to100 = Math.floor(Math.random()*51) +50;
console.log(randIn50to100);
// 9
let randIn0to255 = Math.floor(Math.random()*255);
console.log(randIn0to255);
// 10. Access the 'JavaScript' chars using random numbers
let js = 'JavaScript';
let randomIndex = Math.floor(Math.random() * (js.length - 1));
console.log(js[randomIndex]);
// 11: Print the pattern
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");
// 12
let sentence = "You cannot end a sentence with because because because is a conjunction";
let becauseAll = sentence.substr(sentence.indexOf("because", 1), ("because".length * 3) +2); // add 2 for two spaces 
console.log(becauseAll);

/** Very fun bite-sized challenges! :) **/
