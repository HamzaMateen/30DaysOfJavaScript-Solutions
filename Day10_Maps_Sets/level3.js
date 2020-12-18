// Level 3: challenge     
// 1: 
let count = (new Set(countries.reduce((arr, cur) => {
   arr = arr.concat(cur.languages);
   return arr;
}, []))).size;
console.log(count);

// 2: cur is object or country 
let mostSpoken = new Set(Object.entries(countries.reduce((arr, obj) => (arr = arr.concat(obj.languages)), []).reduce((obj, name) => {
   obj[name] = (obj[name] || 0) +1;
   return obj;
}, {}))); 

// Completed Level 3
