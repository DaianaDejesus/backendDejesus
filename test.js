console.clear()
const Contenedor = require('./contenedor.js');

const productos = new Contenedor('productos.txt');

const test = async () => {
	const data = await productos.save({ titulo: "nombre producto", precio: 1000, categoria: "categoria" });
	console.log(productos.objects);
}

test();
