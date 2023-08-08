import  Express  from "express";
import db from "./dbConnect.js";
import livros from "./src/models/livro.js";

//prever o erro no banco
db.on("error", console.log.bind(console, "Erro de Conexão com Banco de dados"));
//abrir conexção
db.once("open", ()=>{
    //de uma mensagem da conexão
    console.log("Conexão com o banco feita com sucesso!");
})






//const express = require('express');
const app = Express();
//para fazer que o app reconhceça o quem vem pelo postman
app.use(Express.json());

// const livros = [
//     {id: 1, "titulo":"O senhor dos Aneis"},
//     {id: 2, "titulo":"Curso de Node"},
//     {id: 3, "titulo":"A volta dos que nao foram"},

// ]
//programando o GET- o que quero que aconteça quando fizer uma req para uma determinada rota
app.get('/', (req, res)=>{
    res.status(200).send("<h1>Curso de Node</h1>");
})
app.get('/livros', (req, res)=>{
    livros.find((err, livros)=>{
        res.status(200).json(livros);
    })
    
})
app.get('/livros/:id', (req, res)=>{
    let index = buscarLivros(req.params.id);
    res.json(livros[index]);
})
//criar novo livro
app.post('/livros', (req, res)=>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!")
})
//atualizar livros
app.put('/livros/:id', (req, res)=>{
    let index = buscarLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})
app.delete('/livros/:id', (req, res)=>{
    let {id} = req.params.id
    let index = buscarLivros(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
})

function buscarLivros(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app;