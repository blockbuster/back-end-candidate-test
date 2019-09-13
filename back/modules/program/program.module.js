const { GraphQLModule } = require('@graphql-modules/core')
const gql = require('graphql-tag')
const programService = require('./programs.service')

const ProgramModule = new GraphQLModule({
  typeDefs: gql`
    type Query {
      """
      Get all programs
      """
      programs: [Program]!
      """
      Get program by ID
      """
      program(id: String!): Program!
    }
    
    """
    Program type
    """
    type Program {
      id: String!
      title: String!
    }`,
  resolvers: {
    Query: {
      programs: () => programService.getPrograms(),
      program: (root, input) => programService.getProgramById(input),
    }
  }
})

module.exports = { ProgramModule }
