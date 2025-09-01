const chalk = require('chalk'); 
const express = require('express');
const Product = require('../actividad_03/Product');
const port = 3000;
const app = express();

const modelProduct = new Product();

app.get('/', (req, res) => {
    console.log(chalk.red('Ruta Home'));
    res.send(`
        <h1>Hola desde Express!</h1>
        <ul>
            <li><a href="/contactos">Contactos</a></li>
            <li><a href="/api/products">Productos (API)</a></li>
        </ul>
    `);
});

app.get('/contactos', (req, res) => {
    res.send('<h1>Contactos</h1>');
});

app.get('/api/products', async (req, res) => {
    try {
        const list = await modelProduct.getProducts();
        console.table(list);
        res.json(list);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await modelProduct.getProductById(id);

        if (!product || Object.keys(product).length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
});

console.log(chalk.green('Servidor arrancando...'));

app.listen(port, () => { 
    console.log(`Servidor escuchando en http://localhost:${port}`);
});