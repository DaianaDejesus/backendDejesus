const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>
console.log(`Servidor escuchado en puerto ${PORT}`)
);
server.on("Error", (err) => console.log(`Error en servidor: ${err}`));

const Contenedor = require("./contenedor.js");
const productos = new Contenedor("productos.txt");

app.get("/", (req, res) => {
  res.send({ mensaje : 'servidor express'});
});

app.get("/productos", async (req, res) => {
  const showAll = await productos.getAll();
  res.send({ "Todos los productos": showAll });
});

app.get("/productosRandom", async (req, res) => {
  const prods = await productos.getAll();
  const productosRandomIndex = Math.floor(Math.random() * prods.length);
  res.send({ "Productos Random": prods[productosRandomIndex] });
});