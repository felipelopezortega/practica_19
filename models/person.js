const mongoose = require("mongoose");

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String

});

module.exports = mongoose.model("Persons", personSchema);