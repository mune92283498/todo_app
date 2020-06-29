import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  render() {
    const tasks = [
      { title: 'Todo１つ目', id: 0 },
      { title: 'Todo２つ目', id: 1 },
    ];

    return (
      <div>
        <h1>Todo App</h1>
        <TodoInput />
        <TodoList tasks={tasks} />
      </div>
    );
  }
}

export default App;
