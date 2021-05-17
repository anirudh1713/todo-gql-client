import React, { useState } from 'react';
import { Alert, Button, H4, InputGroup, Intent } from '@blueprintjs/core';

function TodoList(props) {
  const {
    todos,
    onDelete,
    isEditing,
    onEditTodo,
  } = props;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [title, setTitle] = useState('');

  return (
    <>
      {todos.map((todo) => (
        <div 
          key={todo.id} 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <H4>{todo.title}</H4>
          <div>
            <Button
              style={{ marginLeft: '5px' }}
              icon="edit"
              intent="warning"
              onClick={() => {
                setOpen(true);
                setId(todo.id);
              }}
            >
              Edit
            </Button>
            <Button
              style={{ marginLeft: '5px' }}
              icon="delete"
              intent="danger"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
      <Alert
        cancelButtonText="Cancel"
        confirmButtonText="Update"
        intent={Intent.WARNING}
        isOpen={open}
        loading={isEditing}
        onCancel={() => setOpen(false)}
        onConfirm={() => onEditTodo(id, title)}
      >
        <InputGroup
          asyncControl={true}
          large
          disabled={isEditing}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo..."
          value={title}
        />
      </Alert>
    </>
  );
}

export default TodoList;
