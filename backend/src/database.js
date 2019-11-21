const mongoose = require("mongoose"); //MODULO QUE NOS CONECTA A MONGODB

//NODE ACCEDE A NUESTRO SISTEMA OPERATIVO MEDIANTE process
//process.env ACCEDE AL ENTORNO
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/dbtest";
//CONEXION A MONGODB CON CONFIGURACION INICIAL
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
//ESTABLECER CONEXION
const connection = mongoose.connection;
//CONEXION ABIERTA
connection.once("open", () => console.log("*** Database is connected ***"));
