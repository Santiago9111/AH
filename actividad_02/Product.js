const crypto = require("crypto");

class Product {
    products = [];

    constructor(products = []) {
        this.products = products;
    }

    addProduct(product) {
       const { name, description, price, stock } = product;
        if (!name || !description || !price || !stock) {
            console.log("⚠️ Todos los campos son obligatorios");
            return;
        }

    const newProduct = {
            id: crypto.randomUUID(),
            name,
            description,
            price,
            stock
        };

    this.products.push(newProduct);
        console.log("Producto agregado:", newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.log("Producto no encontrado");
            return null;
        }
        return product;
    }
}

module.exports = Product;