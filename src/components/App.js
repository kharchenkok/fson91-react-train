import { Component } from 'react';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import TodoList from './TodoList';
import Counter2 from './Counter2';
import Modal from './Modal';
import initialTodos from '../components/TodoList/todos.json';
import Form from './Form';
import TodoEditor from './TodoEditor';
import shortid from 'shortid';
import Filter from './Filter';

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
    isShowModal: false,
    // inputValue: '',
    filter: '',
  };

  handleOpenModal = () => {
    this.setState({ isShowModal: true });
  };

  handleCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };
  toggleCompleted = (todoId) => {
    console.log(todoId);
    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };
  // handleInputChange = (e) => {
  //   console.log(e.currentTarget.value);
  //   this.setState({ inputValue: e.currentTarget.value });
  // };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  formSubmitHandler = (data) => {
    console.log(data);
  };
  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };
  getCompletedTodosCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos, isShowModal } = this.state;
    const totalTodoCount = todos.length;
    // const completedTodosCount = todos.filter((todo) => todo.completed).length; or reduce
    // const completedTodosCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );
    // const normalizedFilter = this.state.filter.toLowerCase();
    // const visibleTodos = todos.filter((todo) =>
    //   todo.text.toLowerCase().includes(normalizedFilter),
    // );
    const completedTodosCount = this.getCompletedTodosCount();
    const visibleTodos = this.getVisibleTodos();
    return (
      <div className="container">
        {/*<input*/}
        {/*  type="text"*/}
        {/*  value={inputValue}*/}
        {/*  onChange={this.handleInputChange}*/}
        {/*/>*/}
        <Form onSabmitProp={this.formSubmitHandler} />
        <Counter initialValue={0} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <h2>To Do</h2>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <div>
          <p>Загальна кількість завдань: {totalTodoCount}</p>
          <p>Кількість виконаних завдань:{completedTodosCount} </p>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        <h2>Train 2</h2>
        <Counter2 />
        <button
          className="btn btn-success mx-auto "
          onClick={this.handleOpenModal}
        >
          Modal Open
        </button>
        {isShowModal && <Modal close={this.handleCloseModal}>Modal text</Modal>}
      </div>
    );
  }
}

export default App;
