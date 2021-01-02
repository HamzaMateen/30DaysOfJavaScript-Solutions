// LEVEL 1 
// 1  
let firstParagraph = document.querySelector('p');

// 2 
let firstP = document.querySelector("#first");
let secondP = document.querySelector('#second');
let thirdP = document.querySelector('#third');
let fourthP = document.querySelector('#fourth');

// 3 
let allParagraphs = document.querySelectorAll('p');

// 4 
allParagraphs.forEach(x => console.log(x.textContent));

// 5 
fourthP.textContent = 'Fourth Paragraph';
console.log(fourthP.textContent);

// 6 set ID and CLASS 
// method 1 
allParagraphs.forEach(x => x.classList.add('paragraph'));

// method 2 
firstP.setAttribute('class', 'first-paragraph');
secondP.setAttribute('class', 'second-paragraph');

// method 3 
thirdP.className = 'third-paragraph';
fourthP.className = 'fourth-paragraph';
