//importe o mongoose
import mongoose from "mongoose";

const livroShema = new mongoose.Schema(
    //definir quais paramentros/atributos padrão que vai ser seguido no banco
    {
        id:{type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: { type: String, required: true},
        numeroPaginas: {type: Number}
    }
);

const livros = mongoose.model('livros', livroShema);
export default livros;