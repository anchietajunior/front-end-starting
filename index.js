const bola = document.getElementById('bola');


bola.addEventListener('click', function() {
  document.getElementById("myDropdown").classList.toggle("show");



  fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2021/08')
    .then(function(response) {
      return response.json();
    })

     .then(function(data) {
      data.forEach(element => {
       // console.log(element.celebrations[0].title);
        // coluna 01
        function tableCreate(){
        var tbody = document.createElement('tbody');
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.style = 'width:100px; font-weight: bold; padding: 3px;font-size:18px;';
        let span = document.createElement('span');
            span.innerHTML = element.date;
        td.appendChild(span);
        tr.appendChild(td);
        // coluna 02
        td = document.createElement('td');
        td.style = 'font-size:18px;';
        span = document.createElement('span');
          span.innerHTML = element.celebrations[0].title;
        td.appendChild(span);
        tr.appendChild(td);

        // adicionando na tabela
        tbody.appendChild(tr);
        myDropdown.appendChild(tbody);
        document.body.appendChild(myDropdown);
      }
      tableCreate();
      })
    }) 
    /*
    var table = document.getElementById("tableId");
    var totalRowCount = table.rows.length;
    console.log(totalRowCount);
    */
})



/*
    .catch(function(data) {
      console.log('Deu erro')
    });
    
 */

