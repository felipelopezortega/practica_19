const express = require("express"); //se inyecta la dependencia de express
const router = express.Router(); // se crea una constante de una propiedad de express, router
const mongoose = require("../node_modules/mongoose"); // se inyecta la dependencia de mongoose, la base de datos
let Person = require("../models/person"); //se define una variable "Person"

//primer ruta, para mostrarnos el contenido de nuestra base de datos
router.get("/persons", function(req,res, next){
    Person.find(function(err,persons){
        if(err) return next(err);
        res.json(persons);
    });
})

//segunda ruta, se renderiza index, el cual contiene el formulario
router.get("/index", function(req,res){

    res.render("index");
});

//De manera preestablecida, se establecen valores a los atributos que recibe el formulario
router.post("/personssend", async (req, res) => {

    let felipe = new Person ({
    nombre: "Felipe",
    edad: 21,
    tipoSangre: "A+",
    nss: "e0067849fgt"
    });
    await felipe.save();
})




module.exports = router