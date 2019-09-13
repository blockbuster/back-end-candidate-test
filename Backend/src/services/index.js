const { getUsers, getUserById } = require('./user');
const { getProducts, getProductById } = require('./product');
const { getPrograms, getProgramById } = require('./program');
const { getTransactions, getTransactionById } = require('./transaction');
const { saveData } = require('./save');

module.exports = {
    getUsers,
    getUserById,
    getProducts,
    getProductById,
    getPrograms,
    getProgramById,
    getTransactions,
    getTransactionById,
    saveData
};