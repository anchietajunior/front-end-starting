const bola = document.getElementById('bola');
let numero = 0;

bola.addEventListener('click', function() {
  fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2021/08')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Data é a lista de dados
      // Então, cada item da lista de dados
      // pode ser uma linha da tabela
      // laço de repetição
      data.forEach(element => {
        console.log(element);
      });
      // criar um item na minha tabela
      // alert(data.celebrations[0].title);
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