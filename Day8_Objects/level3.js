/** LEVEL 3 Challenges: Objects **/    
// 1 
const personAccount = {
   firstName: 'John',
   lastName: 'Nash',
   balance: 0,
   
   incomes: {
      courses: 2000,
      salary: 2300,
      tutoring: 1800
   },
   expenses: {
      rent: 1200,
      bill: 400,
      saloon: 150
   },
   
   // methods down below    
   totalIncome: function(){
      let total = 0;
      for(const each of Object.keys(personAccount.incomes))
         total += personAccount.incomes[each];
      return total;
   },
   
   totalExpense: function() {
      let total = 0;
      for(const each of Object.values(personAccount.expenses)) {
         total += each;
      }   
      return total;
   },
   
   
   // account balance     
   accountBalance : function() { 
      return this.balance; 
   },
   
   accountInfo : function() {
      console.log("Name: ", this.firstName + ' ' + this.lastName);
      console.log("Account Balance: ", this.balance);
   },
   
   addIncome : function(type, amount) {
      this.incomes[type] = amount;
   },
   
   addExpense : function(type, amount) {
      this.expenses[type] = amount;
   }
}


console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
personAccount.accountInfo();
personAccount.addIncome('art', 200);
personAccount.addExpense('pen', 330);
personAccount.accountInfo();

// 2 : user_pdt.js is required here 
// i  
let signUP = (name, mail, pswd) => {
   // check if user exists    
   for(const usr of users)
      if(usr.mail == mail)
         return 'User Exists!';
         
   // generate ID first      
   let alps = '123456abhsgesvj2672sa';
   let rand = [];
   
   for(const chr of '______') {
      let random = parseInt(Math.random()*alps.length);
      rand.push(alps[random]);
   }
   let id = rand.join('');
   
   // create the date   
   const d = new Date();
   
   let mins = d.getMinutes();
   mins < 10 ? '0' + mins.toString() : mins;
   let hrs = d.getHours();
   hrs < 10 ? '0' + hrs.toString() : hrs;
   
   let year = d.getFullYear();
   let month = d.getMonth();
   let date = d.getDate();
  
   let DATE = `${year}/${month+1}/${date}  ${hrs>12? (hrs-12).toString() + ':' + mins.toString() + ' PM': hrs.toString()+':' + mins.toString() + ' AM'}`;
     
   // add to the object of users     
   let userData = {
         _id: id,
         username: name,
         email: mail,
         password: pswd,
         createdAt: DATE,
         isLoggedIn: false
      };
   users.push(userData);
}
signUP('alecy', 'aex@alex.com', 'pstg34');

users.forEach((x) => console.log(x));
// ii: SignIN 
let signIN = (mail, pswd) => {
   for(const user of users) {
      if(user.email == mail && user.password == pswd) {
         user.isLoggedIn = true;
         return 'You have been signed in!!';
      }  
   }
   return 'Incorrect Email or password';
}
console.log(signIN('alex@alex.com', '123123'))
// 3 
// i     
let rateProduct = (productNum, userId, rate) => {
   let theRating = {'userId': userId, 'rate': rate};
   products[productNum-1].ratings.push(theRating); 
   console.log(products[productNum-1].ratings);
} 
rateProduct(2, '23sdf2', 4);

// ii
let averageRating = (productID) => {
   let total = 0;
   let pdt;
   
   for(const prod of products) {
      if(prod._id == productID)
         pdt = prod;
   } 
   
   for(const usr of pdt.ratings) {
        total += usr.rate;
   }
   return total/pdt.ratings.length; 
}
console.log(averageRating('eedfcf'));

// 4 
let likeProduct = (userId, productNo) => {
   let pdt = products[productNo-1];
   let index = pdt.likes.indexOf(userId);
  
   if(index == -1) {
      pdt.likes.push(userId);
   }  
   else {
      pdt.likes.splice(index, 1);   
   }
}

likeProduct('venom23', 1);

// LEVEL 3 Challenges Completed 
