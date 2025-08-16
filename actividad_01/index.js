const Alumno = require('./Alumno.js');
const Product = require('./Product.js');
const fs = require('fs/promises');
const path = "notas.txt";

const model = new Product();

model.addProduct({
        name: 'Teclado',
        description: 'Teclado Mecánico',
        price: 25000,
        stock: 25
});

model.addProduct({
    name: 'Mouse',
    description: 'Mouse Gamer',
    price: 15000,
    stock: 40
});

console.log("Todos los productos:", model.getProducts());

const primerProducto = model.getProducts()[0];
console.log("Buscar por ID:", model.getProductById(primerProducto.id));
console.log("Buscar un ID inexistente:", model.getProductById("fake-id"));


const alumno1 = new Alumno("Carlos", "Luiz", 19, "DW");
alumno1.modificarEdad(35);
alumno1.agregarMateria("Programación I");
alumno1.agregarMateria("Bases de Datos");
alumno1.agregarMateria("Redes");

console.log("Alumno:", alumno1.obtenerDatos());
console.log("Carrera:", alumno1.obtenerCarrera());
console.log("Edad:", alumno1.retornarEdad());
alumno1.mostrarMaterias();

const leerArchivo = async () => {
    const data = await fs.readFile(path);
    console.log("Archivo leído:", data.toString());
};

const guardar = async (texto) => {
   await fs.writeFile(path, texto);
};

leerArchivo();
guardar("Escribiendo desde node");