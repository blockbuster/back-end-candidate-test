const { NotFoundError } = require('../../helpers/errors')
const { products: productService } = require('../../fixtures.json')

async function getProducts() {
  return productService
}

async function getProductById({ id }) {
  const product = productService.find(p => id === p.id)
  if (!product) {
    throw new NotFoundError(`Missing product with ID "${id}"`)
  }
  return product
}

module.exports = {
  getProducts,
  getProductById,
}
