const fs = require('fs/promises');
const path = './data/products.json';

class Product{
    products = [];
    constructor(products=[]){
        this.products = products
    }
    async saveJSON(){
        try {
            const data = JSON.stringify( this.products, null, 2);
            await  fs.writeFile(path, data);
        } catch (error) {
            console.log('No se pudo guardar los datos')
        }
    }
    async readJSON(){
        try {
            const data = await fs.readFile(path);
            const products = JSON.parse(data);
            return products
        } catch (error) {
            console.error('No se pudo leer los datos');
            return []
        }
    }
    addProduct(product){
        // Validar datos!
        const id = crypto.randomUUID();
        product.id = id;
        this.products.push(product);
        this.saveJSON();
    }
    async getProducts(){
        this.products = await this.readJSON();
        return this.products
    }
    async getProductById(id){
        this.products = await this.readJSON();
        const product = this.products.find( item => item.id == id );
        return product ? product : {};
    }
    async deleteProductyId(id){
       this.products = await this.readJSON();
        const index = this.products.findIndex(item => item.id === id);

        if (index !== -1) {
            this.products.splice(index, 1);
            await this.saveJSON();
        } else {
            console.error("Not found");
        }
    }
    async updateProductId(id, product){
        this.products = await this.readJSON();
        const index = this.products.findIndex(item => item.id === id);

        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...newProductData, id }; // conservamos el id
            await this.saveJSON();
            return this.products[index];
        } else {
            console.error("Not found");
            return {};
        }
    }
}

module.exports = Product;