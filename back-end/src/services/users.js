const { NotFoundError } = require('../helpers/errors');
const { users } = require('../fixtures.json');

async function getUsers() {
  return users;
}

async function getUserById({ id }) {
  const user = users.find(u => id === u.id);

  if (!user) {
    throw new NotFoundError(`Missing user with ID "${id}"`);
  }

  return user;
}

module.exports = {
  getUsers,
  getUserById,
};
