const { GraphQLModule } = require('@graphql-modules/core')
const gql = require('graphql-tag')
const DateModule = require('../date')
const userService = require('./user.service')

const UserModule = new GraphQLModule({
  typeDefs: gql`
    type Query {
      """
      Get all userService
      """
      users: [User]!
      """
      Get user by ID
      """
      user(id: String!): User!
    }
    
    """
    User type
    """
    type User {
        id: String!
        name: String!
        created: Date!
    }`,
  resolvers: {
    Query: {
      users: () => userService.getUsers(),
      user: (root, input) => userService.getUserById(input),
    }
  },
  imports: [
    DateModule
  ]
})

module.exports = { UserModule }
