import gql from 'graphql-tag';

const SAVE_DATA = gql`
  mutation Save($data: String!){
    saveData(data: $data) {
        message
      }
  }
`;

export default SAVE_DATA;