import { Component } from 'react';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import TodoList from './TodoList';
import initialTodos from '../components/TodoList/todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    // const completedTodosCount = todos.filter((todo) => todo.completed).length;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
    return (
      <div className="container">
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />

        <div>
          <p>Загальна кількість завдань: {totalTodoCount}</p>
          <p>Кількість виконаних завдань:{completedTodosCount} </p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
