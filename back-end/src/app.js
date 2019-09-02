const express = require('express');
const { apolloServer } = require('./graphql/apollo-server');

const PORT = process.env.PORT || 8000;

const app = express();

apolloServer.applyMiddleware({ app });

app.listen(PORT, () => console.log(`GraphQL app started on port ${PORT}`));
