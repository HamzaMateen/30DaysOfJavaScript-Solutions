// LEVEL 2 Challenge 
let divideWholeArray = (arr, divisor) => {
    let resultant = arr.map(x => {
        let result;
	try {
          result = x / divisor;
        }
        catch(error){
          result = undefined;
        }
        finally {
	  return result;
	}
    })
}

let arr = [1, 2, 3, ,4 ,5];
let undefinedArray = divideWholeArray(arr, 0);
