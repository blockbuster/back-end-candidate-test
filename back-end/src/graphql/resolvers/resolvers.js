const productsService = require('../../services/products');
const programsService = require('../../services/programs');
const transactionsService = require('../../services/transactions');
const usersService = require('../../services/users');
const cloudStorageService = require('../../services/cloud-storage');

const Query = {
  products: () => productsService.getProducts(),
  product: (root, input) => productsService.getProductById(input),
  programs: () => programsService.getPrograms(),
  program: (root, input) => programsService.getProgramById(input),
  transactions: () => transactionsService.getTransactions(),
  transaction: (root, input) => transactionsService.getTransactionById(input),
  users: () => usersService.getUsers(),
  user: (root, input) => usersService.getUserById(input),
};

const Mutation = {
  saveDataToFile: (root, input) => cloudStorageService.saveDataToFile(input),
};

module.exports = { Query, Mutation };

module.exports = { Query, Mutation };
