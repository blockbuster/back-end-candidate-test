const { GraphQLModule } = require('@graphql-modules/core')
const gql = require('graphql-tag')
const DateModule = require('../date')
const transactionService = require('./transaction.service')

const TransactionModule = new GraphQLModule({
  typeDefs: gql`
      type Query {
        """
        Get all Transactions
        """
        transactions: [Transaction]!
        """
        Get Transaction by ID
        """
        transaction(id: String!): Transaction!
      }
      
      """
      Transaction type
      """
      type Transaction {
        id: String!
        timestamp: Date!
        product_id: String!
        user_id: String!
      }
    `,
  resolvers: {
    Query: {
      transactions: () => transactionService.getTransactions(),
      transaction: (root, input) => transactionService.getTransactionById(input),
    }
  },
  imports: [
    DateModule
  ]
})

module.exports = { TransactionModule }
