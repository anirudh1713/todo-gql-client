import React from 'react';
import { H1 } from '@blueprintjs/core';

import Todo from './views/Todo/Todo';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.main_container}>
      <H1>Todo List</H1>
      <Todo />
    </div>
  );
}

export default App;
