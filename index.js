"use strict";
const port = 3000;

// Cargar el módulo con la configuración de la API
const app = require("./app");

const runServer = async () => {
  try {
    app.listen(port, () => {
      console.log(
        `Servidor ejecutándose correctamente en el puerto ${port}`
      );
    })
  } catch (error) {
    console.log("Ha ocurrido un error al intentar ejecutar el servidor:");
    console.log(error);
  }
}

runServer();