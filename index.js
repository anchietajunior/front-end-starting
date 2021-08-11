const bola = document.getElementById('bola');
let numero = 0;

bola.addEventListener('click', function() {
  fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2021/08')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.forEach(element => {
       // console.log(element);


        var table = document.createElement('table');
        table.style = 'width:500px;border:1px solid #CCC;';
        var tbody = document.createElement('tbody');
            let tr = document.createElement('tr');
        
            // 1
            let td = document.createElement('td');
            td.style = 'width:100px;border:1px solid #CCC;';
            let span = document.createElement('span');
            span.innerHTML = element.date;
            td.appendChild(span);
            tr.appendChild(td);
        
            // 2
            td = document.createElement('td');
            td.style = 'border:1px solid #CCC;';
            span = document.createElement('span');
            span.innerHTML = element.weekday;
            td.appendChild(span);
            tr.appendChild(td);
            tbody.appendChild(tr);
        
        table.appendChild(tbody);
        document.body.appendChild(table);

      });
    })
    
    fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today')
    .then(function(response) {
      return response.json();
    })
    .then(function(data2) {
      data2.forEach(element => {
        console.log(element);

      });
    })
    


    .catch(function(data) {
      console.log('Deu erro')
    });
    

  })

// array = lista

// array = [1, 2, 3, 4]

// array[0]
// array[1]

// http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2021/08
// http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today



      // Data é a lista de dados
      // Então, cada item da lista de dados
      // pode ser uma linha da tabela
      // laço de repetição
      /*
      Aqui ele puxa a lista completa
      data.forEach(element => {
        console.log(element);
      });
      */
      // criar um item na minha tabela
      // alert(data.celebrations[0].title);