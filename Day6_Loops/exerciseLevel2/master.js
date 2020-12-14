/** LEVEL 2 Challenges **/    
let alphanums = '123456789abcdefghijklmnopqrstuvwxyz123456789';
let n = parseInt(Math.random() * alphanums.length) % 16; // max can be 16
let rands = [];
for(let i = 0; i <= n; i++) {
   rands.push(alphanums[Math.floor(Math.random() * alphanums.length) -1]);   
} console.log(rands.join(""));

// 2: generate a hexadec number 
let allHexCodes = '123456789abcdef';
let hexChars = [];
for(let i=0; i<6; i++) {
   hexChars.push(allHexCodes[parseInt(Math.random()*allHexCodes.length)-1]);
} console.log('#' + hexChars.join(''));
// 3 : generate an rgb color      
let rgb = [];
for(const char of '123') {
   var red = (parseInt(Math.random() * 255));
   var grn = (parseInt(Math.random() * 255));
   var blu = (parseInt(Math.random() * 255));
   
   rgb.push(red, grn, blu);
} console.log(`rgb(${red}, ${grn}, ${blu})`);

// 4: Gonna use for of loop here    
let capCountries = [];
for(const country of countries) {
   capCountries.push(country.toUpperCase());
} console.log(capCountries);

// 5 
let countryNameLens = [];
for(const country of countries) {
   countryNameLens.push(country.length);
} console.log(countryNameLens);

// 6: array of arrays  
let countryData = [];
for(const country of countries) {
   let len = country.length;
   let first3Chars = country.slice(0, 3).toUpperCase();
   countryData.push([country, first3Chars, len]);
} 
for (const arr of countryData) {
   console.log(arr);
}
// 7 
let noCountry = true;
let landCountriesList = [];

for(const i of countries) {
   if(i.includes('land')) {
      landCountriesList.push(i);
      noCountry = false;
   }
} 
if(noCountry) {
   console.log("All these countries are without land");
} else {
   for(const country of landCountriesList) 
      console.log(country);
}

// 8  
let endsWith_ia = [];
for (const country of countries) {
   if(country.endsWith('ia'))
      endsWith_ia.push(country);
}
if(endsWith_ia.length > 0) {
   for(const each of endsWith_ia) 
      console.log(each);
}

// 9
let maxLength = 0;
let maxLenCountry;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      maxLenCountry = country;
   }
} console.log(maxLenCountry);

// 10
let lenFiveCountries = [];
for (const country of countries) {
   if (country.length === 5)
      lenFiveCountries.push(country);
}
console.log(lenFiveCountries);

// 11 
let length = webTechs[0].length;
let word;
for(const tech of webTechs) {
   if (tech.length > length) {
      word = tech;    
      length = tech.length;
   }
} console.log(word);

// 12   
let techWithLen = [];
for (const tech of webTechs) {
   let len = tech.length;
   let caps = tech.toUpperCase();
   
   techWithLen.push([caps, len])
};
console.log(techWithLen);

// 13: create the MERN stack 
let mernArray = ['MongoDB', 'Express', 'React', 'Node'];
let mernStack = [];

for (const tech of mernArray) {
   mernStack.push(tech[0]);
}; console.log(mernStack.join(''));

// 14 
for(const tech of webTechs) {
   console.log(tech);
}

// 15 
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruits = [];

for (let i = fruits.length-1; i >= 0; i--) {
   reversedFruits.push(fruits[i]);
} console.log(reversedFruits);

// 16 print the webTechs 
for (const each of webTechs) {
   console.log(each);
}


// ** LEVEL 2 Challenge completed ** //    
// NOTE: the files web_techs.js and countries.js are required to properly interpret this file   
