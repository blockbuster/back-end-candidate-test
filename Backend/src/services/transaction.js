const { transactions } = require('../fixtures.json');

exports.getTransactions = () => transactions;

exports.getTransactionById = (payload) => transactions.find(t => t.id === payload.id);