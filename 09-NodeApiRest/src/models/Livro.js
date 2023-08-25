//importa o moongoose para entender que é um squema
import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number},
    }
);
const livros = mongoose.model('livros', livroSchema)


//faca a importção em app.js
export default livros;