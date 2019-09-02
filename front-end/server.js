const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/build`));
app.get('*', function(req, res) {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(PORT, () => console.log(`Front-end served on port ${PORT}`));
