import gql from 'graphql-tag';

const TRANSACTIONS = gql`
query Transactions {
  transactions {
    id
    product_id
    user_id
    timestamp
  }
}
`;

const TRANSACTION = gql`
  query Transaction($id: String!) {
    transaction(id: $id) {
        id
        product_id
        user_id
        timestamp
      }
  }
`;

export { TRANSACTIONS, TRANSACTION };