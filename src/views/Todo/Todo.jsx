import React, { useState } from 'react';
import { 
  Button,
  Callout,
  InputGroup,
  Spinner,
} from '@blueprintjs/core';
import { useMutation, useQuery } from '@apollo/client';

import { GET_TODOS } from '../../graphql/query';
import { CREATE_TODO, DELETE_TODO, EDIT_TODO } from '../../graphql/mutation';
import styles from './Todo.module.css';
import TodoList from '../../components/TodoList/TodoList';

function Todo() {
  const [title, setTitle] = useState('');
  const { data, error, loading: fetchingTodos, refetch: refetchTodos } = useQuery(GET_TODOS);
  const [addTodo, { loading: creatingTodo, error: createTodoError }] = useMutation(CREATE_TODO);
  const [deleteTodo, { loading: deletingTodo, error: deleteTodoError }] = useMutation(DELETE_TODO);
  const [editTodo, { loading: editingTodo, error:editTodoError }] = useMutation(EDIT_TODO);

  const onInputChange = (e) => setTitle(e.target.value);

  const onCreateTodo = () => {
    addTodo({ variables: { title } });
    refetchTodos();
  };

  const onDeleteTodo = (id) => {
    deleteTodo({ variables: { id } });
    refetchTodos();
  };

  const onEditTodo = (id, title) => {
    editTodo({ variables: { id, title } });
    refetchTodos();
  };

  return (
    <div className={styles.todo_container}>
      <div style={{ display: 'flex' }}>
        <InputGroup
          asyncControl={true}
          large
          disabled={creatingTodo}
          onChange={onInputChange}
          placeholder="Todo..."
          value={title}
        />
        <Button
          style={{ marginLeft: '10px' }}
          large
          loading={creatingTodo}
          intent="primary"
          rightIcon="add"
          onClick={onCreateTodo}
        >
          Add Todo
        </Button>
      </div>
      <div style={{ marginTop: '10px' }}>
        {
          fetchingTodos ? (
            <Spinner />
          ) : error ? (
            <Callout 
              title="We could not fetch todos!"
              intent="danger"
            >
              {error.message}
            </Callout>
          ) : (
            <TodoList 
              todos={data.todos} 
              onDelete={onDeleteTodo}
              onEditTodo={onEditTodo}
              isEditing={editingTodo}
            />
          )
        }
      </div>
    </div>
  );
}

export default Todo;
