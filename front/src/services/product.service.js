import ApolloClient  from'./apollo.service'
import gql from 'graphql-tag'

const getAll = async () => {
  const { data } = await ApolloClient.query({
    query: gql`
    {
      products {
        id
        program_id
        start
        end
        price
      }
    }`,

  })

  const { products } = data
  products.forEach(product => {
    delete product.__typename
  })
  return products
}

const getById = async (id) => {
  const { data } = await ApolloClient.query({
    query: gql`
    {
      product(id: "${id}") {
        id
        program_id
        start
        end
        price
      }
    }`,

  })

  const { product } = data
  delete product.__typename
  console.log(product)
  return product
}

export default {
  getAll,
  getById
}


