const{ GraphQLModule } = require('@graphql-modules/core')
const gql = require('graphql-tag')
const storageService = require('./storage.service')

const StorageModule = new GraphQLModule({
  typeDefs: gql`
    type Mutation {
      """
      Save data to the file in the cloud
      """
      saveDataToFile(data: String!): Message
    }
    """
    Message type
    """
    type Message {
      message: String
    }
  `,
  resolvers: {
    Mutation: {
      saveDataToFile: (root, input) => storageService.saveDataToFile(input)
    }
  }
})

module.exports = { StorageModule }
