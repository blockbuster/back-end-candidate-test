const{ GraphQLModule } = require('@graphql-modules/core')
const gql = require('graphql-tag')

const DateModule = new GraphQLModule({
    typeDefs: gql`
        scalar Date
    `,
})

module.exports = { DateModule }