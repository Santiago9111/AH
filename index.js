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


async function leer (){
    const data = await fs.readFile(path);
    console.log(data.toString() );
}



const leerArchivo = async () => {
    const data = await fs.readFile(path);
    console.log(data.toString() );
}

const guardar = async (texto) => {
   await fs.writeFile(path, texto);
}

/*const fn = async () {
    await leerArchivo();
    await guardar("Escribiendo desde node");
}
*/

leerArchivo();
guardar("Escribiendo desde node");

let nombre = "Jonathan";

const alumno1 = new Alumno ("Carlos", "Luiz", 19, "DW");
alumno1.modificarEdad(35);

console.log( alumno1.edad);