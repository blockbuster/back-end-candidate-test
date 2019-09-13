import gql from 'graphql-tag';

const PROGRAMS = gql`
  query Programs{
    programs {
        id
        title
    }
  }
`;

const PROGRAM = gql`
  query Program($id: String!) {
    program(id: $id) {
        id
        title
    }
  }
`;

export { PROGRAMS, PROGRAM };