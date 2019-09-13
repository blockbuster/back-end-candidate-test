const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/build`));
app.get('*', function(req, res) {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT, () => console.log(`Front-end served listening port 5000`));
