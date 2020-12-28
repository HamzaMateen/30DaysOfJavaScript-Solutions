// LEVEL 2 Challenge
// 1 
let fewStudents = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4);

// LEVEL 3 Challenge
// 1 
let jsonedText = JSON.parse(txt);

// 2 
let filteredJSON = JSON.parse(txt, (key, value) => {
  let max = 0;
  max = max < value.length ? value.length: max;
  
  return max > value.length ? undefined: value;
})

console.log(filteredJSON);
// Level 3 complete
