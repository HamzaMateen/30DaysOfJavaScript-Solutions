// LEVEL 2 Challenges: RegEx  
// 1 
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
let tenMostFrequentWords = (text, range=10) => {
   let pattern = /[a-z|A-Z]*/g;
   return Object.entries(text.match(pattern).reduce((dict, word) => {
      dict[word] = (dict[word] || 0) +1;
      return dict;
   }, {})).sort((a, b) => b[1]-a[1]).slice(0, range);
}
tenMostFrequentWords(paragraph).forEach(x => console.log(x));

//another method
words=[]
total=[]

function tenMostFrequentWords(paragraph){
    var replaced=paragraph.replace(/\./g,'');
    var arrOfPara = replaced.toString().split(' ');

    for(let i=0;i<arrOfPara.length;i++){
        if(!words.includes(arrOfPara[i])){
            words.push(arrOfPara[i]);
            let regExp = new RegExp(arrOfPara[i],'g')
            let match = paragraph.match(regExp);
            total.push({word:arrOfPara[i],count:match.length})
        }
    }
    return total;
}

console.log(tenMostFrequentWords(paragraph));

