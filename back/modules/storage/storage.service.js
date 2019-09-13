const fetch = require('node-fetch');
const { ServerError } = require('../../helpers/errors');

const URL = 'http://127.0.0.1:3000/'

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
