//import express do framework express
var express = require('express'); 
//criar instancia do objeto do express
var app = express(); 
//ponto de acesso :endpoint
//request é uma requisição
//response é uma resposta do servidor
app.get('/', function (req, res) {
  res.send('Minha primeira aplicação em node');
});
   //a porta que node ira exibir
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});