const btn_pop = document.querySelector(".btn_pop");
const btn_lang = document.querySelector(".btn_lang");
const dash = document.querySelector(".dash");
const data1 = document.querySelector(".data1");
const data2 = document.querySelector(".data2");
const data3 = document.querySelector(".data3");
const childd1 = data1.children; //country
const childd2 = data2.children; //graph
const childd3 = data3.children; //number
let i,rdm,temp;


function showpop(){
    dash.innerText = "10 most populated countries in the world."
    

    // dash.innerText = `${childd2.length}`;

    for(i=0; i<childd1.length; i++){
        childd1[i].innerText = `country number: ${i+1}`;
    }
    
    for(i=0; i<childd3.length; i++){
        rdm = Math.floor((Math.random())*1000000);
        childd3[i].innerText = `${rdm}`;
        temp = Math.floor(rdm/10000);
        childd2[i].style.width = `${temp}%`;
        childd2[i].classList.add("fillin");
    }

}

function showlang(){

    dash.innerText = "10 most spoken languages in the world."


    for(i=0; i<childd1.length; i++){
        childd1[i].innerText = ` ${i+1} language`;
    }
    
    for(i=0; i<childd3.length; i++){
        rdm = Math.floor((Math.random())*100);
        childd3[i].innerText = `${rdm}`;
        // temp = Math.floor(rdm/10000);
        childd2[i].style.width = `${rdm}%`;
        childd2[i].classList.add("fillin");
    }

}


btn_pop.addEventListener('click', showpop);
btn_lang.addEventListener('click', showlang);
