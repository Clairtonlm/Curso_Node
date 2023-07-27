//importando e iniciando Express
const express = require("express");
const app = express();









//abrindo servidor Express--E sempre a ultima coisa a fazer
app.listen(8080, function(erro){
    if(erro){
        console.log("Aconteceu um erro");
    }else{
        console.log("Conectado com sucesso!!!");
    }
})