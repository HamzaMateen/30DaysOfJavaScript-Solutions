

const btn = document.querySelector(".btn1");
const box = document.querySelector(".container");
let i=0, is_prime;

function start(){
    for(i=0; i<26; i++){

        const newdiv = document.createElement("div");
        newdiv.innerText = i;
        newdiv.classList.add("class1");

        for(let j = 2; j<i; j++){
            if(i%j==0){
                is_prime = 0;
                break;
            }else{
                is_prime = 1;
            }
        }

            if(is_prime){  
                newdiv.classList.add("prime"); // if number is prime, background color will be red
            }else if(i % 2 == 0){
                newdiv.classList.add("even"); // if number is even, background color will be grren
            }else{
                newdiv.classList.add("odd"); // if number is odd, background color will be yellow
            }

        box.appendChild(newdiv);

    }

}

btn.addEventListener('click', start); //as clicking this button 25 numbers are appended in the viewport