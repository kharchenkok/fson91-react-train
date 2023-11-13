import React, { Component } from 'react';
import TodoList from './components/TodoList';
import CreateTodoForm from './components/Forms';
import shortid from 'shortid';

import data from './todo.json';

class App extends Component {
  state = {
    todos: data,
  };
  addTodo = (newTodo) => {
    const todoObj = {
      ...newTodo,
      id: shortid.generate(),
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todoObj, ...prevState.todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <CreateTodoForm addTodo={this.addTodo} />
        <TodoList todo={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
