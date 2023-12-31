const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const PORT = 8000;

app.use(morgan("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    // Modifica los headers de la request para que vaya al nuevo microservicio
    changeOrigin: true,
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log("Gateway on port 8000");
});
