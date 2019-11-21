require("dotenv").config(); //IMPORTA VARIABLE DE ENTORNO .ENV

const app = require("./app"); //IMPORTA APP.JS MODULO EXPRESS
require("./database");//NO SE REQUIERE IMPORTAR MODULO XQ NO ES EXPORTADO DE DATABASE

//INICIAR SERVIDOR
const main = async () => {
  await app.listen(app.get("port"));
  console.log("*** Server running on p  " + app.get("port") + " ***");
};
main();
