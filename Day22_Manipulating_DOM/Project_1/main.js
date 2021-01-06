let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

h1.className = 'header';
h2.className = 'header';
h3.className = 'header';

// helper function 
let isPrime = num => {
  if (num == 1 || num == 0) return false;
  if (num == 2 || num == 3)
    return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}
// headers styling      
let stdFontWeight = 400;
document.querySelectorAll('.header').forEach(x => {
  x.style.textAlign = 'center';
  x.style.fontWeight = `${stdFontWeight}`;
  x.style.fontFamily = 'san-serif, helvetica';
  x.style.padding = '2px';
  x.style.margin = '0px';

  stdFontWeight -= 30;
});
h2.style.textDecoration = 'underline';

// create a div container and a table within    
let container = document.createElement('div');

let table = document.createElement('table');

let nums = 0;
while (nums <= 101) {
  // create table row     
  let row = document.createElement('tr');

  for (let x = 1; x <= 6; x++) {
    // create table data   
    let data = document.createElement('td');
    data.textContent = nums;

    // style the data element     
    data.style.margin = '2px';
    data.style.padding = '5px';

    // selective styling    
    if (isPrime(nums)) {
      data.style.backgroundColor = '#f76262';
    } else if (nums % 2 !== 0) {
      data.style.backgroundColor = '#fee904';
    } else data.style.backgroundColor = '#42b845';

    // end styling   
    row.appendChild(data);
    nums++;
  }
  // add row to the table    
  table.appendChild(row);
}

// table styling     
table.style.width = '60%';
table.style.marginRight = '20%';
table.style.marginLeft = '20%';
table.style.marginTop = '1pc';
table.style.textAlign = 'center';
table.style.fontFamily = 'ariel';
table.style.fontSize = '15px';
table.style.fontWeight = 'bold';
table.style.color = 'white';

container.appendChild(table);
document.body.appendChild(container);
