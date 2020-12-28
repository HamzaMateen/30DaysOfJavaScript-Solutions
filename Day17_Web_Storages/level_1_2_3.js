// LEVEL 1 Challenges
localStorage.setItem('firstName', 'Hamza');
localStorage.setItem('lastName', 'Mateen');
localStorage.setItem('age', '123');
localStorage.setItem('country', 'Pakistan');
localStorage.setItem('city', 'dikhan');

console.log(localStorage.getItem('firstName'))

// clear the storage      
localStorage.clear();

// LEVEL 2 Challenge  
let student = {
  firstName: 'John',
  lastName : 'Nash', 
  age      : 23,
  country  : 'US', 
  enrolled : false,
}
// store in the storage    
let stdText = JSON.stringify(student);
localStorage.setItem('student', stdText);

// LEVEL 3 Challenge  
console.log(JSON.parse(localStorage.getItem('student')));

// LEVELs Complete
