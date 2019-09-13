const express = require('express');
const config = require('./config');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const log = require('log4js').getLogger();
log.level = 'debug';
const { apolloServer } = require('./apollo');

const PORT = config.SERVER.port;

const app = express();
app.use(cors());

apolloServer.applyMiddleware({ app });

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public/build')));

app.listen(PORT, () => log.info(`Express GraphQL Server Now Running On Port ${PORT}`));

