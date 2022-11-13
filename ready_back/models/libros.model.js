const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrosSchema = new Schema({
    isbn:{type: String, required: true, max:60},
    titulo:{type: String, required: true, max:40},
    autor:{type: String, required: true, max:40},
    editorial:{type: String, required: true, max:40},
    categoria:{type: String, required: true, max:70},
    descripcion:{type: String, required: false, max:1000},
    formato:{type: String, required: false, max:40},
    portada:{type: String, required: false, max:100}
});

module.exports = mongoose.model("libros", LibrosSchema); 