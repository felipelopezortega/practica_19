const mongoose = require("mongoose");
const express = require("express");
const personsRoutes = require("./routes/persons");

mongoose.Promise = global.Promise;
const app = express ();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(personsRoutes);

mongoose.connect(
    "mongodb+srv://felipe:2336915457@cluster0.xgnn0.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true,
    useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    console.log("Connection successfully");
});



app.listen(3000);