const { GraphQLModule } = require('@graphql-modules/core')
const ProductModule = require('./product')
const ProgramModule = require('./program')
const TransactionModule = require('./transaction')
const UserModule = require('./user')
const StorageModule = require('./storage')

const AppModule = new GraphQLModule({
  imports: [
    ProductModule,
    ProgramModule,
    TransactionModule,
    UserModule,
    StorageModule,
  ]
})

module.exports = { AppModule }
