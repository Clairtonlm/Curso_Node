import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:235910@alura.dkjed.mongodb.net/curso-node");

let db = mongoose.connection;

export default db;