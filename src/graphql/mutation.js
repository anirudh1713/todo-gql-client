import { gql } from '@apollo/client';

const CREATE_TODO = gql`
  mutation createTodo($title: String!) {
    createTodo(title: $title) {
      id,
      title,
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id,
      title,
    }
  }
`;

const EDIT_TODO = gql`
  mutation editTodo($id: Int!, $title: String!) {
    editTodo(id: $id, title: $title) {
      id,
      title,
    }
  }
`;

export {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
};
