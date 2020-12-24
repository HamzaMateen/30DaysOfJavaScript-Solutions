// LEVEL 3 RegEx
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

let cleanText = (text) => {
   let pattern = /[~|@|#|!|$|%|\^|&|;|\\?]/g;
   let cleanedText = text.replace(pattern, '')
   return tenMostFrequentWords(cleanedText);
}
console.log(cleanText(sentence));

// level 3 JS 
