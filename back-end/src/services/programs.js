const { NotFoundError } = require('../helpers/errors');
const { programs } = require('../fixtures.json');

async function getPrograms() {
  return programs;
}

async function getProgramById({ id }) {
  const program = programs.find(p => id === p.id);

  if (!program) {
    throw new NotFoundError(`Missing program with ID "${id}"`);
  }

  return program;
}

module.exports = {
  getPrograms,
  getProgramById,
};
