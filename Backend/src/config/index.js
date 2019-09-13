const development = require('./development');
const production = require('./production');

const DEFAULT = 'development';

const configs = {
    development,
    production
};

module.exports = {
    ...configs[process.env.NODE_ENV || DEFAULT]
};