const fetch = require('node-fetch');
const { ServerError } = require('../helpers/errors');

const URL =
  process.env.NODE_ENV === 'development' ? 'http://host.docker.internal:3000/save' : 'http://localhost:3000/save';

async function saveDataToFile({ data }) {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) {
      throw new Error(JSON.stringify(await response.text()));
    }

    const payload = await response.json();

    return payload;
  } catch (error) {
    throw new ServerError(`Error saving data to the file. Details: ${error.message}`);
  }
}

module.exports = {
  saveDataToFile,
};
