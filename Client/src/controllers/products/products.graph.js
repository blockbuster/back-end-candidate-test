import gql from 'graphql-tag';

const PRODUCTS = gql`
  query Products{
    products {
        id
        program_id
        start
        end
        price
    }
  }
`;

const PRODUCT = gql`
  query Product($id: String!) {
    product(id: $id) {
        id
        program_id
        start
        end
        price
    }
  }
`;

export { PRODUCTS, PRODUCT };