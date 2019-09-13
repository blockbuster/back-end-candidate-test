import ApolloClient  from'./apollo.service'
import gql from 'graphql-tag'

const getAll = async () => {
  const { data } = await ApolloClient.query({
    query: gql`
    {
      transactions {
        id
        timestamp
        product_id
      }
    }`,

  })

  const { transactions } = data
  transactions.forEach(transaction => {
    delete transaction.__typename
  })
  return transactions
}

const getById = async (id) => {
  const { data } = await ApolloClient.query({
    query: gql`
    {
      transaction(id: "${id}") {
        id
        timestamp
        product_id
      }
    }`,

  })

  const { transaction } = data
  delete transaction.__typename
  return transaction
}

export default {
  getAll,
  getById
}
