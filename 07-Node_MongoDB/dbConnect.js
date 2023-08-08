//fazer i importe do mongoose para fazer uso da biblioteca
import mongoose from "mongoose";


//
mongoose.connect('mongodb+srv://clairtonlm:235910@cluster0.rgkhapq.mongodb.net/curso-node');
//
let db = mongoose.connection;

export default db;