module.exports = (app) => {

    app.get('/pagamentos', (req, res)=>{
        console.log('Recebida requisição de teste');
        res.send('.OK Nodemon');
    });

    app.post('/pagamentos/pagamento', (req,res)=>{
        var pagamento = req.body;
        console.log('Processando uma requisição de um Novo Pagamento...');

        pagamento.status = "Criado";
        pagamento.data = new Date;

        res.send(pagamento);
    });
}