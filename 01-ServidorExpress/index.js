//importando e iniciando Express
const express = require("express");
const app = express();

//Iniciando Rotas
app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao curso de Node</h1>")
});








//abrindo servidor Express--E sempre a ultima coisa a fazer
app.listen(8080, function(erro){
    if(erro){
        console.log("Aconteceu um erro");
    }else{
        console.log(" Servidor Conectado com sucesso!!!");
    }
})