const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello word curso Node")
});

app.delete("/user", function(req, res){
    res.send({
        nome: "Jose deletado"
        
    })
});

app.listen(8080, function(){
    console.log("Servidor Funcionando")
})