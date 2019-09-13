import ApolloClient  from'./apollo.service'
import gql from 'graphql-tag'

const sendStingForSavingToFile = async (data) => {
  try{
    const { response } = await ApolloClient.mutate({
      mutation: gql`
       mutation {
        saveDataToFile(data: "${data}"){
          message
        }
       }
      `
    })
    return response.message
  } catch (e) {
    return 'Something happened on server side'
  }
}

export default {
  sendStingForSavingToFile
}
