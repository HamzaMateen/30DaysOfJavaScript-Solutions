// LEVEL 2 
// 1 
allParagraphs.forEach(x => {
  x.style.color = 'red';
  x.style.backgroundColor = 'black';
  x.style.fontSize = '15px';
  x.style.fontFamily = 'Helvetica';
});

// 2 
let index = 1;
for (let each of allParagraphs) {
  each.style.color = 'white';
  if (index % 2 === 0)
    each.style.backgroundColor = 'green';
  else each.style.backgroundColor = 'red';

  index++;
}

// 3
let a = 1;
for (let each of allParagraphs) {
  if (a == 1) {
    each.textContent = `${a}st Pargraph!`;
  } else if (a === 2) {
    each.textContent = `${a}nd Paragraph`;
  } else if (a == 3) {
    each.textContent = `${a}rd Pargraphs`;
  } else
    each.textContent = `${a}th Paragraph!`;

  each.setAttribute('id', `${a}-paragraph`);
  each.setAttribute('class', 'Paragraph');
  a++;
}
