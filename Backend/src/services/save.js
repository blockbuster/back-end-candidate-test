const axios = require('axios');

const URL = 'http://localhost:3010/save';

exports.saveData = (payload) => {
    console.log(payload);
    return axios.post(
        URL,
        JSON.stringify(payload),
        {headers: { 'Content-Type': 'application/json' }}
    )
    .then(response => {
        console.log(response);
        return response;
    })
    .catch(error => {
        console.log(error);
        return error;
    })
}