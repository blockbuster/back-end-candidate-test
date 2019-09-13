import ApolloClient  from'./apollo.service'
import gql from 'graphql-tag'

const getAll = async () => {
  const { data } = await ApolloClient.query({
    query: gql`
    {
      users {
        id
        name
        created
      }
    }`,

  })

  const { users } = data
  users.forEach(user => {
    delete user.__typename
  })
  return users
}

const getById = async (id) => {
  const { data } = await ApolloClient.query({
    query: gql`
    {
      users(id: "${id}") {
        id
        name
        created
      }
    }`,
  })

  const { user } = data
  delete user.__typename
  console.log(user)
  return user
}

export default{
  getAll,
  getById
}
