const chalk = require('chalk'); 
const express = require('express');
const Product = require('./Product');
const port = 3000;
const app = express();

const modelProduct = new Product();

const home = (request, response) =>{
    console.log( chalk.red('Ruta Home'));
    response.send(`
        <h1>Hola desde Express! </h1>
        <ul>
        <li><a href="/contactos">Contactos</a></li>
        <li><a href="/productos">Productos</a></li>
        </ul>
        `);
}

app.get('/', home );

app.get('/contactos', (request, response) => {
    response.send('<h1>Contactos</h1>');
})

app.get('/api/productos', async (request, response) => {
    const list = await modelProduct.getProducts();
    console.table(list);
    response.json(list);
})

app.get('/api/productos/:id', async (request, response) => {
    const id = request.params.id;
    console.log(id);
    response.json({id});
})

app.get('/productos/:id', async (request, response) => {
    const id = request.params.id;
    console.log(id);
    response.json({id});
})

app.get('/productos/:id', async (request, response) => {
    const id = request.params.id;
    console.log(id);
    response.json({id});
})

console.log( chalk.green ('Hola!'));

app.listen(port, () => { 
    console.log(`Servidor en el puerto ${port}`);
})
