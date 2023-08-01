//usando modo nativo do HTTP
const http = require("http");
const port = 3000;
//criando objeto de rotas
const rotas = {
    '/':'Curso de Node',
    '/livros':'Entrei na página de livros',
    '/autores':'Entrei na página autores',
    '/vendidos':'Página dos mais vendidos',
    '/editora':'pag de editora',
    '/sobre':'Pag quem somos',
}

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end(rotas[req.url]);
})
server.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})