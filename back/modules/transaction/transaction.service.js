const { NotFoundError } = require('../../helpers/errors')
const { transactions: transactionService } = require('../../fixtures.json')

async function getTransactions () {
  return transactionService
}

async function getTransactionById ({ id }) {
  const transaction = transactionService.find(t => id === t.id)

  if (!transaction) {
    throw new NotFoundError(`Missing transaction with ID "${id}"`)
  }

  return transaction
}

module.exports = {
  getTransactions,
  getTransactionById,
}
