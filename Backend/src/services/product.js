const { products } = require('../fixtures.json');

exports.getProducts = () => products;

exports.getProductById = (payload) => products.find(p => p.id === payload.id);