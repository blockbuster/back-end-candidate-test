const { GraphQLModule } = require('@graphql-modules/core')
const gql = require('graphql-tag')
const productService = require('./product.service')
const DateModule = require('../date')

const ProductModule = new GraphQLModule({
  typeDefs: gql`
     """
     Product type
     """
     type Product {
      id: String!
      program_id: String!
      start: Date!
      end: Date!
      price: Int!
    }
    
    type Query {
      """
      Get all products
      """
      products: [Product]!
      """
      Get product by ID
      """
      product(id: String!): Product!
      }
    `,
  resolvers: {
    Query: {
      products: () => productService.getProducts(),
      product: (root, input) => productService.getProductById(input)
    }
  },
  imports: [
    DateModule
  ]
})

module.exports = { ProductModule }
