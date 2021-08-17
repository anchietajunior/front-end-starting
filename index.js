const bola = document.getElementById('bola');


bola.addEventListener('click', function() {
  document.getElementById("myDropdown").classList.toggle("show");



  fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2021/08')
    .then(function(response) {
      return response.json();
    })

     .then(function(data) {
      data.forEach(element => {
        console.log(element.celebrations[0].title);
        // coluna 01
        var tbody = document.createElement('tbody');
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.style = 'width:100px; #CCC; font-weight: bold;';
        let span = document.createElement('span');
            span.innerHTML = element.date;
        td.appendChild(span);
        tr.appendChild(td);
        // coluna 02
        td = document.createElement('td');
        span = document.createElement('span');
          span.innerHTML = element.celebrations[0].title;
        td.appendChild(span);
        tr.appendChild(td);

        // adicionando na tabela
        tbody.appendChild(tr);
        myDropdown.appendChild(tbody);
        document.body.appendChild(myDropdown);
      })

    }) 

})



/*
    .catch(function(data) {
      console.log('Deu erro')
    });
    
 */

