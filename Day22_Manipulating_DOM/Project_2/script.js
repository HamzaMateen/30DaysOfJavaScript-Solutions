document.body.style.fontFamily = 'san-serif, helvetica';
      
      let h2 = document.querySelector('h2');
      h2.textContent = h2.textContent.toUpperCase();
      h2.style.letterSpacing = '8px';
      h2.style.textAlign = 'center';
      h2.style.fontWeight = '600';
      h2.style.margin = '0px';
      h2.style.padding =  '2px';
      let totalCountries = document.querySelector('#total-countries');
      totalCountries.textContent = `Total Number of countries: ${countries.length}`;
      totalCountries.style.textAlign = 'center'; 
      totalCountries.style.fontWeight = '550';
      totalCountries.style.margin = '0px';
      totalCountries.style.padding = '2px';
      
      let h3Headers = document.querySelectorAll('h3');
      
      h3Headers.forEach(x => {
        x.style.textAlign = 'center';
        x.style.padding = '2px';
        x.style.margin = '0px';
      });
      
      h3Headers[0].style.fontSize = '13px';
      h3Headers[0].style.textDecoration = 'underline';
      h3Headers[0].style.fontWeight = '380';
      
      h3Headers[1].style.fontSize = '11px';
      h3Headers[1].style.fontWeight = '360';
      
      // table system yet again
      let table = document.createElement('table');
      
      // styling     
      table.style.textAlign = 'center';
      table.style.padding = '2px';
      table.style.width = '50%';
      table.style.marginLeft = '25%'
      table.style.marginRight = '25%'
      table.style.fontSize = '7px';
      table.style.fontWeight = '400';
      table.style.letterSpacing = '1px';
      
      // text addition   
      let countryCount = 0;
      while(countryCount < countries.length){
        let row = document.createElement('tr');
        
        for(let i=0; i<6; i++) {
          if(countryCount == countries.length) break;
          let data = document.createElement('td');
          data.textContent = countries[countryCount].toUpperCase();
          
          data.style.paddingTop = '30px';
          data.style.paddingBottom = '30px';
          data.style.margin = '2px';
          data.style.border = '1px #eeeef3 solid';
          
          row.appendChild(data);
          countryCount++;
        }
        table.appendChild(row);
      }
      
      document.body.appendChild(table);
