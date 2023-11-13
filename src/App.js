import React, { Component } from 'react';
import TodoList from './components/TodoList';
import CreateTodoForm from './components/Forms';

import data from './todo.json';

class App extends Component {
  state = {
    todos: data,
  };
  addTodo = (newTodo) => {
    const todoObj = {
      ...newTodo,
      id: '',
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [newTodo, ...prevState.todos],
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <CreateTodoForm />
        <TodoList todo={todos} />
      </div>
    );
  }
}

export default App;
