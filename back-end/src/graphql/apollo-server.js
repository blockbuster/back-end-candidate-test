const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers/resolvers');
const { formatError } = require('../helpers/errors');

const typeDefs = importSchema(`${__dirname}/schemas/index.graphql`);

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
  schema,
  playground: {
    settings: {
      'editor.theme': 'dark',
    },
  },
  formatError: error => formatError(error),
});

module.exports = { apolloServer };
