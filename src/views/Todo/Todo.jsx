import React, { useState } from 'react';
import { Button, InputGroup } from '@blueprintjs/core';

import styles from './Todo.module.css';

function Todo() {
  const [todo, setTodo] = useState('');

  const onInputChange = (e) => setTodo(e.target.value);

  return (
    <div className={styles.todo_container}>
      <div style={{ display: 'flex' }}>
        <InputGroup
          asyncControl={true}
          large
          onChange={onInputChange}
          placeholder="Todo..."
          //rightElement={maybeSpinner}
          value={todo}
        />
        <Button
          style={{ marginLeft: '10px' }}
          large
          intent="primary"
          rightIcon="add"
        >
          Add Todo
        </Button>
      </div>
      <div>
        list of todos
      </div>
    </div>
  );
}

export default Todo;
