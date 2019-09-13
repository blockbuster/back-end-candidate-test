const { NotFoundError } = require('../../helpers/errors')
const { users: userService } = require('../../fixtures.json')

async function getUsers () {
  return userService
}

async function getUserById ({ id }) {
  const user = userService.find(u => id === u.id)

  if (!user) {
    throw new NotFoundError(`Missing user with ID "${id}"`)
  }

  return user
}

module.exports = {
  getUsers,
  getUserById,
}
