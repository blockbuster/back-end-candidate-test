const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers/resolvers');

const typeDefs = importSchema(path.join(__dirname, '/typeDef/index.graphql'));

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
  schema,
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
});

module.exports = { apolloServer };
