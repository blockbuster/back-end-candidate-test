const { NotFoundError } = require('../helpers/errors');
const { products } = require('../fixtures.json');

async function getProducts() {
  return products;
}

async function getProductById({ id }) {
  const product = products.find(p => id === p.id);

  if (!product) {
    throw new NotFoundError(`Missing product with ID "${id}"`);
  }

  return product;
}

module.exports = {
  getProducts,
  getProductById,
};
