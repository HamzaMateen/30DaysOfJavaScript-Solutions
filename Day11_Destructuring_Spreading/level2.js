// LEVEL 2 Challenges :Intermediate
// users array    
const users = [
   {
      name: 'Brook', 
      scores: 75, 
      skills: ['HTML', 'CSS', 'JS'],
      age: 16
   }, // 1 
   {
      name: 'Alex',
      scores: 80,
      skills: ['HTML', 'CSS', 'JS'],
      age: 18
   },{
      name: 'David',
      scores: 75,
      skills: ['HTML', 'CSS'],
      age: 22
   },{
      name: 'John',
      scores: 85,
      skills: ['HTML'],
      age: 25
   },{
      name: 'Sara',
      scores: 95,
      skills: ['HTML', 'CSS', 'JS'],
      age: 26
   },{
      name: 'Martha',
      scores: 80,
      skills: ['HTML', 'CSS', 'JS'],
      age: 18
   },{
      name: 'Thomas',
      scores: 90,
      skills: ['HTML', 'CSS', 'JS'],
      age: 20
   }
]

// 1
for(const {name, scores, skills, age} of users) {
   console.log(name, scores, age);
   skills.forEach(x => console.log(x));
}

// 2: Find persons having <2 skills  
for (const { name, scores, skills, age } of users) {
   if(skills.length < 2) {
      console.log(name); // John
   }
}

// LEVEL 2 Complete    
