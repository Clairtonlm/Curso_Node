let http = require("http");
http.createServer(function(requisicao, resposta){
    resposta.end("Bem vindo ao meu site!");
}).listen(8181);
console.log("Servidor rodando");
