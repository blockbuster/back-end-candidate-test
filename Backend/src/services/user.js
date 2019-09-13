const { users } = require('../fixtures.json');

exports.getUsers = () => users;

exports.getUserById = (payload) => users.find(u => u.id === payload.id);