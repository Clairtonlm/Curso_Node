import express from "express";

const app = express()

const livros = [
    {id: 1, "titulo": "Java"},
    {id: 2, "titulo": "Node"},
    {id: 3, "titulo": "JavaScript"},

]

//progrando get
app.get('/', (req, res)=>{
    res.status(200).send('Curso de  Nodeeeee alterado')
})

app.get('/livros', (req, res)=>{
    res.status(200).json(livros)
})
//temos qu expostar para fazer uso no server.js
export default app;