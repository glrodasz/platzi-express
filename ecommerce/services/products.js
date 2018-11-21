const productsMocks = require('../utils/mocks/products');

class ProductsService {
    constructor() {

    }

    getProducts({ tags }) {
        return Promise.resolve(productsMocks);
    }

    getProduct({ productId }) {
        return Promise.resolve(productsMocks[0]);
    }

    createProduct({ product }) {
        return Promise.resolve(productsMocks[0]);
    }

    updateProduct({ productId, product }) {
        return Promise.resolve(productsMocks[0]);
    }

    deleteProduct({ productId }) {
        return Promise.resolve(productsMocks[0]);
    }
}

module.exports = ProductsService;