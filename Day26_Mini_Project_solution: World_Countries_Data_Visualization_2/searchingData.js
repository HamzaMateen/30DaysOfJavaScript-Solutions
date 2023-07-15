const countries = [
    'Afghanistan','Albania',  'Algeria',  'Andorra',  'Angola',  'Antigua and Barbuda',  'Argentina',  'Armenia',  'Australia',  'Austria',  'Azerbaijan',  'Bahamas',  'Bahrain',  'Bangladesh',  'Barbados',  'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

  const card = document.querySelector(".card");
  const down = document.querySelector(".bottom");
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const rand = document.querySelector(".rand");
  const btn3 = document.querySelector(".btn4");
  const box = document.querySelector(".text-box");
  const counter = document.querySelector(".counter");
  const counter2 = document.querySelector(".temp");
 
  let i,j=0,temp, word, con;

  function initialcountry(){

    btn3.style.backgroundColor = "grey";
    btn3.style.color = "black";
    for(i=0; i<countries.length; i++){

       const newdiv = document.createElement("div");
        newdiv.classList.add("card");
        newdiv.innerText = `${countries[i]}`;
        down.appendChild(newdiv);
    }

  }

  function startingword(){
    btn1.classList.toggle("clicked");
    if(btn1.classList.contains("clicked")){
      btn2.classList.remove("clicked");
      rand.classList.remove("clicked");
    }

    

    box.addEventListener('input', function(){
    
      word = box.value.toUpperCase();
      let k=0;


      for(i=0; i<countries.length; i++){
      
        if(countries[i].toUpperCase())
      
      
        if((countries[i].toUpperCase().startsWith(word) === true)){
          down.children[i].style.display = "";
          k++;
        }else{
          down.children[i].style.display = "none";
        }
      }
      if(box.value == ""){
        counter.innerText = `Give a letter to search`;
      }else{
      counter.innerText = `there are ${k} countries staring with "${box.value}"`;
      }
    })
  }


  function anywords(){
    btn2.classList.toggle("clicked");
    if(btn2.classList.contains("clicked")){
      btn1.classList.remove("clicked");
      rand.classList.remove("clicked");
    }
      

    
      box.addEventListener('input', function(){
    
        word = box.value.toUpperCase();
        let k=0;
        for(i=0; i<countries.length; i++){
          if((countries[i].toUpperCase().indexOf(word) > -1)){
            down.children[i].style.display = "";
            k++;
          }else{
            down.children[i].style.display = "none";
          }
        }
        if(box.value == ""){
          counter.innerText = `Give a letter to search`;
        }else{
        counter.innerText = `there are ${k} countries staring with "${box.value}"`;
        }
      })


  }



  function randomize(){
    rand.classList.toggle("clicked");
    if(rand.classList.contains("clicked")){
      btn2.classList.remove("clicked");
      btn1.classList.remove("clicked");
    }


    while(down.firstChild){
        down.removeChild(down.firstChild);
    }

    for(i=0; i<countries.length; i++){
        const newdiv = document.createElement("div");
        newdiv.classList.add("card");
        temp = Math.floor((Math.random()) * countries.length)
        newdiv.innerText = `${countries[temp]}`;
        down.appendChild(newdiv);
    }

  }

  // initialcountry();
  btn1.addEventListener("click", startingword);
  btn2.addEventListener('click', anywords);
  rand.addEventListener('click', randomize);
  btn3.addEventListener('click', initialcountry,{once:true});
