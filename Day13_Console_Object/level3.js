// LEVEL 3 Challenges: Console object
// 1 compare the for of, for, while and forEach loop for specific task using console.time

let array = [1,2,3,4,5,6,7,8,9,0];

// i: regualr for loop   
console.time('For Loop');
for(let i = 0; i < array.length; i++) {
   console.log(array[i]);
}
console.timeEnd('For Loop')
// ii: For of loop     
console.time('for-of loop');
for(const value of array) {
   console.log(value);
}
console.timeEnd('for-of loop')

// iii. while loop  
console.time(`While Loop`)
let i = 0;
while(i < array.length) {
   console.log(array[i]);
   i++;
}
console.timeEnd('While Loop')

// iv: For each loop      
console.time('ForEach Loop')
array.forEach(x => console.log(x));
console.timeEnd(`ForEach Loop`);

// The most efficient here is forEach loop and least efficient is for of loop. but stll unpredictable.
