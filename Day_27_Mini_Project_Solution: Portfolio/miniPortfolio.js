const animate1 = document.querySelector(".animate1");
const animate1_text = document.querySelector(".animate1-text");
const animate2_text = document.querySelector(".animate2-text");
const jobs = ['Programmer', "Student", "Footballer", "Instructor", "Anything"];
const subjects = ['Math', 'Science', 'English', 'Nepali', 'english', 'science', 'optionalmath', 'computer', 'basketball'];
const colorfor = ['red','blue','green','white','brown','grey','yellow','pink','purple'];
let i=0, k=0,z=0;

 const interval1 = setInterval(() => {
     if(i>jobs.length){
         i=0;
     }
     if(k>=jobs.length){
        k=0;
     }
     if(z==subjects.length){
        z=0;
     }
     if(i%2==0){
        animate1_text.innerText = jobs[k];
        animate1_text.classList.add("ani1");
        k++;
        animate2_text.innerText = subjects[z];
        animate2_text.style.color = `${colorfor[z]}`;
        z++;
     }else{
        animate1_text.classList.remove("ani1");
        animate2_text.innerText="";
     }
    
     i++;

 }, 1000);

