// LEVEL 3 Challenge
let ZeroDivisionError = new Error('Division By Zero is not allowed!');
let safeDivide = (a, b) => {
   try {
       if(b === 0) throw ZeroDivisionError;
       return a/b;
   }
   catch (error) {
       return error.message;
   }
}
let result = safeDivide(a/b);
