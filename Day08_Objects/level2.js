/** LEVEL 2: Objects **/    
const users = {
   Alex : {
   email:'alex@alex.com',
   skills:['HTML','CSS','JavaScript'],
   age:20,
   isLoggedIn:false,
   points:30
   },
   Asab:{
   email:'asab@asab.com',
   skills:['HTML','CSS','JavaScript','Redux','MongoDB','Express','React','Node'],
   age:25,
   isLoggedIn:false,
   points:50
   },
   Brook:{
   email:'daniel@daniel.com',
   skills:['HTML','CSS','JavaScript','React','Redux'],
   age:30,
   isLoggedIn:true,
   points:50
   },
   Daniel:{
   email:'daniel@alex.com',
   skills:['HTML','CSS','JavaScript','Python'],
   age:20,
   isLoggedIn:false,
   points:40
   },
   John:{
   email:'john@john.com',
   skills:['HTML','CSS','JavaScript','React','Redux','Node.js'],
   age:20,
   isLoggedIn:true,
   points:50
   },
   Thomas:{
   email:'thomas@thomas.com',
   skills:['HTML','CSS','JavaScript','React'],
   age:20,
   isLoggedIn:false,
   points:40
   },
   Paul:{
   email:'paul@paul.com',
   skills:['HTML','CSS','JavaScript','MongoDB','Express','React','Node'],
   age:20,
   isLoggedIn:false,
   points:40
   }
}

// 1 
let max = 0;
let skilledPerson;

for(const user of Object.keys(users)) {
   if(users[user].skills.length > max) {
      max = users[user].skills.length;
      skilledPerson = Object.assign({}, users[user]);
   }
}
console.log(skilledPerson.email, max);

// 2 
let loggedInUsers = 0;
let points50UpUsers = 0;

for(const user of Object.keys(users)) {
   if(users[user].isLoggedIn) 
      loggedInUsers++;
    
   if(users[user].points >= 50) 
      points50UpUsers++;
}
console.log(loggedInUsers, points50UpUsers);

// 3 : Find Mern Stack Developers      
let findMernStackDevs = () => {
   let mern = ['MangoDB', 'Express', 'React', 'Node'];
   let count = 0;
   let mernStackDevs = [];
   
   for(const dev of Object.values(users)) {
      for(const skill of dev['skills']) {
         if (mern.indexOf(skill) != -1) 
            count++;
      }
      if(count == 4) 
         mernStackDevs.push(dev);
   }
   return mernStackDevs;
}

findMernStackDevs().forEach((el) => {
   console.log(el); 
})

// 4 
const usersCopy = Object.assign({}, users);
usersCopy['Hamza'] = {};

// 5 
const keys = Object.keys(users);

// 6 
const values = Object.values(users);

// 7: Countries.js files should be availed 
const country = countries[Object.keys(countries)[0]];
   
   console.log("Name: ", country.name)
   console.log("Capital: ", country.capital)
   console.log("Population: ", country.population);
   console.log("Languages: ", country.languages);

/** LEVEL 2 Completed **/
