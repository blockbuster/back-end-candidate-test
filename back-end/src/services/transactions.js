const { NotFoundError } = require('../helpers/errors');
const { transactions } = require('../fixtures.json');

async function getTransactions() {
  return transactions;
}

async function getTransactionById({ id }) {
  const transaction = transactions.find(t => id === t.id);

  if (!transaction) {
    throw new NotFoundError(`Missing transaction with ID "${id}"`);
  }

  return transaction;
}

module.exports = {
  getTransactions,
  getTransactionById,
};
