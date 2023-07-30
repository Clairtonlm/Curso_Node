import http from "node:http";
const serve = http.createServer((req, res)=>{

    const {url, method} = req;
    if(url === "/" && method === "GET"){
        return res.end(JSON.stringify({
            status:200,
            body:"Bem vindo(a) a Home" 
        }))
    }
    if(url === "/" && method === "POST"){
        return res.end(JSON.stringify({
            status:200,
            body:"Bem vindo(a) a a minha pagina POst" 
        }))
    }
    if(url === "/contato" && method === "GET"){
        return res.end(JSON.stringify({
           
            body:"Bem vindo(a) a a minha pagina Contato" 
        }))
    }




    res.statusCode = 404;
return res.end(
    JSON.stringify({
        status:404,
        body:"404 (Not Found)"
    })
)
});




//servidor
serve.listen(3000, ()=>{
    console.log("Servidor Ligado");
})