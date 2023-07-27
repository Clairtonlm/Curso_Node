//importando e iniciando Express
const express = require("express");
const app = express();

//Iniciando Rotas
app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao curso de Node</h1>")
});
//parametro obrigatorio
app.get("/ola/:nome", function(req, res){
    var nome = req.params.nome;
    res.send("<h1>Oi " + nome + "</h1>");
});

//parametro não obrigatorio
app.get("/blog/:artigo?", function(req, res){
    var artigo = req.params.artigo;
    res.send("<h1>nome " + artigo + "</h1>");
    if(artigo){
        res.send("<h2>Artigo" + artigo + "</h2>")
    }else{
        res.send("Usuário  nao passou artigo")
    }
});








//abrindo servidor Express--E sempre a ultima coisa a fazer
app.listen(8080, function(erro){
    if(erro){
        console.log("Aconteceu um erro");
    }else{
        console.log(" Servidor Conectado com sucesso!!!");
    }
})