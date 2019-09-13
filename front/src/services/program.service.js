import ApolloClient  from'./apollo.service'
import gql from 'graphql-tag'

const getAll = async () => {
  const { data } = await ApolloClient.query({
    query: gql`
    {
      programs {
        id
        title
      }
    }`,

  })

  const { programs } = data
  programs.forEach(program => {
    delete program.__typename
  })
  return programs
}

const getById = async (id) => {
  const { data } = await ApolloClient.query({
    query: gql`
    {
      program(id: "${id}") {
        id
        title
      }
    }`,

  })

  const { program } = data
  delete program.__typename
  console.log(program)
  return program
}

export default {
  getAll,
  getById
}
