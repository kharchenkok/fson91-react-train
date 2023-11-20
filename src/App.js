import { Component } from 'react';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

import initialTodos from './components/TodoList/todos.json';
import tabs from './tabs.json';
import Form from './components/Form';
import TodoEditor from './components/TodoEditor';
import shortid from 'shortid';
import Filter from './components/Filter';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
import Clock from './components/Clock';
import Tabs from './components/Tabs';

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
    filter: '',
    showModal: false,
    showClock: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      console.log('Обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    // if (
    //   this.state.todos.length > prevState.todos.length &&
    //   prevState.todos.length !== 0
    // ) {
    //   this.toggleModal();
    // }
  }

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
  };
  toggleCompleted = (todoId) => {
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
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  toggleClock = () => {
    this.setState(({ showClock }) => ({
      showClock: !showClock,
    }));
  };

  render() {
    const { todos, filter, showModal, showClock } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = this.getCompletedTodosCount();
    const visibleTodos = this.getVisibleTodos();
    return (
      <div className="container">
        <Form onSabmitProp={this.formSubmitHandler} />
        <Counter initialValue={0} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <br />
        <br />
        <button type={'button'} onClick={this.toggleClock}>
          Show/Close clock
        </button>
        {showClock && <Clock />}
        <br />
        <br />
        <Tabs items={tabs} />
        <br />
        <br />
        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        <h2>To Do</h2>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type={'button'} onClick={this.toggleModal}>
              Close
            </button>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        <Filter value={filter} onChange={this.changeFilter} />
        <div>
          <p>Загальна кількість завдань: {totalTodoCount}</p>
          <p>Кількість виконаних завдань:{completedTodosCount} </p>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
