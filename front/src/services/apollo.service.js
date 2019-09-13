import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch
  }),
  cache: new InMemoryCache()
})
