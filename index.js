var app = require('./config/custom-express')();

app.listen(3000, () => console.log('Servidor Rodando na Porta 3000'));

var controllers = require('./controllers/pagamentos');
controllers(app);

