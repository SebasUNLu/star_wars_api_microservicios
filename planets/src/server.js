const express = require("express");
const morgan = require("morgan");
const { ClientError } = require("./utils/errors");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/planets", require("./routes"));

server.use("*", (req, res) => {
  throw new ClientError("Ruta no encontrada", 404)
});

// Vamos a sobreescribir el manejador de errores de Express
// El que reciba estos 4 parámetros y ale indica a Express que este maneja errores
// Los errores que ocurran en cualquier lugar deberán llegar acá
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message
  });
});

module.exports = server;
