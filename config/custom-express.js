var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');


module.exports = ()=>{
    var app = express();
    
    app.use(bodyParser.urlencoded({extend: true})); //configura para o node saber como tratar o body da requisição quando vir do navegador por form
    app.use(bodyParser.json()); //configura para o node saber como tratar o body da requisição quando vir de um json

    consign()
        .include( 'controllers' )
        .into(app);

    return app;
}