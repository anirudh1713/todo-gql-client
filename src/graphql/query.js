import { gql } from '@apollo/client';

const GET_TODOS = gql`
  query getTodos {
    todos {
      id,
      title,
    }
  }
`;

export {
  GET_TODOS,
};
