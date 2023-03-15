const usuarioController = (app) => {

app.get('/usuarios', function (req, res){
    res.send ("rastreamento da aplicação sendo feito com nodemon")
}),
app.post('/usuarios', function (req, res){
    res.send ("Rota POST de usuario ativada: usuário adicionado ao banco de dados")
})

}

export default usuarioController