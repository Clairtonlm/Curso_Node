import express from "express";
//importando banco de dados db
import db from "./config/dbconnect.js";
//imorte o livros que é um scherma
//import livros from "./models/Livro.js";

import routes from "./routes/index.js";


//criando a conexão com banco
db.on("error", console.log.bind(console, 'Erro de conexão com Banco de dados'))
db.once('open', ()=>{
    console.log('Conexão feita com sucesso!!!');
})

const app = express();
app.use(express.json());//para poder entender arquivos json

routes(app);

// const livros = [
//     {id: 1, "titulo": "Java"},
//     {id: 2, "titulo": "Node"},
//     {id: 3, "titulo": "JavaScript"},

// ]

// //progrando get
// app.get('/', (req, res)=>{
//     res.status(200).send('Curso de  Nodeeeee alterado')
// })
//get por id
// app.get('/livros/:id', (req, res)=>{
//     let index = buscarLivros(req.params.id);
    
//     if (index !== -1) {
//          res.json(livros[index]);
//     } else {
//         res.status(404).send('Livro não encontrado'); // Return a 404 response if the book is not found
//     }
// })

// app.post('/livros',(req, res)=>{
//     livros.push(req.body);
//     res.status(201).send('Livro cadastrado com sucesso!!!')
// })
// atualizar livro - PUT
// app.put('/livros/:id', (req, res)=>{
//     let index = buscarLivros(req.params.id);
//     livros[index].titulo = req.body.titulo
//     res.json(livros);
// })
// app.put('/livros/:id', (req, res)=>{
//     let index = buscarLivros(req.params.id);
    
//     if (index !== -1) {
//         livros[index].titulo = req.body.titulo;
//         res.json(livros);
//     } else {
//         res.status(404).send('Livro não encontrado'); // Return a 404 response if the book is not found
//     }
// })

//detetando livro
// app.delete('/livros/:id', (req, res)=>{
//     let id = req.params.id;
//     let index = buscarLivros(id);
    
//     if (index !== -1) {
//         livros.splice(index, 1)
//         res.send(`Livro ${id} removido com sucesso!!`);
//     } else {
//         res.status(404).send('Livro não encontrado'); // Return a 404 response if the book is not found
//     }
// })

//função para buscar livros
// function buscarLivros(id){
//     return livros.findIndex(livros => livros.id == id)
// }
//temos qu expostar para fazer uso no server.js
export default app;