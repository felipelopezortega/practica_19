const express = require("express");
const router = express.Router();
const mongoose = require("../node_modules/mongoose");
let Person = require("../models/person");

router.get("/persons", function(req,res, next){
    Person.find(function(err,persons){
        if(err) return next(err);
        res.json(persons);
    });
})

router.get("/index", function(req,res){

    res.render("index");
});

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