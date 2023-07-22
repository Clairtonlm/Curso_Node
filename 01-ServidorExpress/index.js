const express = require("express");
const app = express();
app.listen(8080, function(erro){
    if(erro){
        console.log("Aconteceu um erro");
    }else{
        console.log("Conectado com sucesso!!!");
    }
})