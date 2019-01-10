var express = require('express');

var app = express();

app.listen(3000, () => console.log('Servidor Rodando na Porta 3000'));

app.get('/teste', (req, res)=>{
    console.log('Recebida requisição de teste');
    res.send('.OK Nodemon');
});