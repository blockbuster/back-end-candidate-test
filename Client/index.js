const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.listen(PORT, () => console.log(`React server is listening on ${PORT}`));