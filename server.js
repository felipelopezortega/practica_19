var express = require("express"); //importamos la dependencia
const res = require("express/lib/response");
var app = express (); //declaramos una App de Express
var port = process.env.PORT || 3000; //setteamos el puerto para que escuche al servidor
app.use("/assets",express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: false}));//se agrega para parsear peticiones con URL para datos dentro del body

app.set("view engine", "ejs"); // Aquí se especifica a nuestra App que su template será EJS

//primera ruta (está al nivel de la raíz/), archivo ejs en views que devuelve un saludo
app.get("/", function(req, res){

    res.render("helloWorld");
});


//segunda ruta, recibe un parámetro ID, Message y Times
app.get("/person/:id", function(req, res){

    res.render("person", {ID: req.params.id, Message: req.query.message, Times: req.query.times });
});

//tercera ruta, envia a la vista index renderizada, aquí se encuentra el cuestionario
app.get("/student", function(req, res){

    res.render("index");
});

//primer ruta de post, esta ruta se activa automáticamente cuando se manden valores desde la ruta raíz para devolver el first y last name
app.post("/student", (req, res)=>{
    res.send(`First Name es: ${req.body.fname}, Last Name es:${req.body.lname}`);
});

const { MongoClient, ServerApiVersion } = require("mongodb"); // Iinyectando dependencias de mongo
const uri = //Incluimos el enlace de conexion
  "mongodb+srv://felipe:2336915457@cluster0.xgnn0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
}); //generamos el clinete
client
  .connect() //Nos conectamos a la base de datos
  .then(() => {
    console.log("Connected to the database "); // si la conexion es valida mandamos el mensaje
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`); // Si no se puede conectar mandamos el error
  });


app.listen(port); //levantar el server y ponerlo a la escucha

