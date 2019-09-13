const { NotFoundError } = require('../../helpers/errors');
const { programs: programsService } = require('../../fixtures.json');

async function getPrograms() {
  return programsService;
}

async function getProgramById({ id }) {
  const program = programsService.find(p => id === p.id);

  if (!program) {
    throw new NotFoundError(`Missing program with ID "${id}"`);
  }

  return program;
}

module.exports = {
  getPrograms,
  getProgramById,
};
