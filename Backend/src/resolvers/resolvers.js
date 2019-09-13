const services = require('../services');

const Query = {
    user: (root, payload) => services.getUserById(payload),
    users: () => services.getUsers(),
    product: (root, payload) => services.getProductById(payload),
    products: () => services.getProducts(),
    program: (root, payload) => services.getProgramById(payload),
    programs: () => services.getPrograms(),
    transaction: (root, payload) => services.getTransactionById(payload),
    transactions: () => services.getTransactions()
};

const Mutation = {
    saveData: (root, payload) => services.saveData(payload)
  };

module.exports = {
    Query,
    Mutation
};
