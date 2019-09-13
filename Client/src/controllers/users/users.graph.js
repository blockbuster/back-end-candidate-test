import gql from 'graphql-tag';

const USERS = gql`
  query Users{
    users {
      id
      name
      created
    }
  }
`;

const USER = gql`
  query User($id: String) {
    user(id: $id) {
      id
      name
      created
    }
  }
`;

export { USERS, USER };
