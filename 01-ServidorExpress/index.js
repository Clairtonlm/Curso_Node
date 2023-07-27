//importando e iniciando Express
const express = require("express");
const app = express();

//Iniciando Rotas
app.get("/", function(req, res){
    res.send("Bem vindo ao curso de Node")
});








//abrindo servidor Express--E sempre a ultima coisa a fazer
app.listen(8080, function(erro){
    if(erro){
        console.log("Aconteceu um erro");
    }else{
        console.log("Conectado com sucesso!!!");
    }
})