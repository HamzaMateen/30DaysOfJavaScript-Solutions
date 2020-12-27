// LEVEL 3 Challenge
// 1 create a statistics class      
class statistics {
  constructor(arr) {
    this.arr = arr;
  }
  
  // methods      
  count() { return this.arr.length; }
  
  sum() { return this.arr.reduce((sum, value) => sum + value, 0)};
  
  min() { return this.arr.reduce((min, val) => {
    min = min < val ? min: val;
    return min;
  })}
  
  max() { return this.arr.reduce((max, val) => {max = max < val? val: max})};
  
  range() {return Math.abs(this.max() - this.min())};

  mean() {
    return arr.reduce((a, b) => (a+b)/arr.length, 0)
  }
  
  median() {
    let sorted = this.arr.sort((a, b) => a-b);
    let len = sorted.length;     
    if(len%2===0) {
      return (sorted[parseInt(len/2)] +sorted[parseInt(len/2)-1]);
    }
    else return (sorted[parseInt(len/2)]);
  }
  
  mode() {
    return Object.entries(this.arr.reduce((obj, cur) => {
      obj[cur] = (obj[cur] || 0) +1;
      return obj;
    }, {})).sort((a, b) => a[1] - b[1]).pop();
  }
  
  var() {
    return this.arr.reduce((v, cur) => 
      v + Math.pow(cur, 2), 0)
  }
  
  std() {
    return Math.sqrt(this.var());
  }
}
let arr = [1, 2,3 ,4, 432, 2, 3, 3, 3];
let stats = new statistics(arr);
console.log(stats.std())

// 2 create a bank account 
class PersonAccount {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
    
    // inits      
    this.accountBalance = 0;
    this.incomes = [];
    this.expenses = [];
  }
  
  // methods      
  totalIncome() { return this.incomes.reduce((sum, cur) => sum + cur, 0)};
  
  totalExpense() { return this.expenses.reduce((sum, cur) => sum + cur, 0)};
  
  checkAccountBalance() {
    return this.accountBalance;
  }
  withDraw(bal) {
     if (bal > 0 && this.accountBalance > 0) {
       this.accountBalance -= bal;
     }
  } 
  accountInfo() {
    return `
      *****Billing Account Info******
      Name: ${this.fName + ' ' + this.lName}
      Baln: ${this.accountBalance}$
      Incm: ${this.totalIncome()}$
      Expn: ${this.totalExpense()}$
      
      _________END OF INFO__________
    `
  }
  // setters     
  set addIncome(income) {
    if(income > 0) {
    this.incomes.push(income);
    }
  }
  
  set addExpense(expense) {
    if(expense > 0) {
      this.expenses.push(expense);
    }
  }
  
  set deposit(bal) {
    if (bal > 0) this.accountBalance += bal;
  }
}

// create an object     
let bilAccount = new PersonAccount('Hamza', "Mateen");

console.log(bilAccount.accountInfo())

// END OF LEVEL 3 Challenge!
