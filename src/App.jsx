import { Component } from 'react';
// import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal';
import TodoList from './components/TodoList';
// import CreateTodoForm from './components/Forms/CreateTodoForm';
import data from './todo.json';
import { nanoid } from 'nanoid';
import FormikCreateTodo from './components/Forms/FormikCreateTodo';
import CreateTodoForm from './components/Forms/CreateTodoForm';

class App extends Component {
  state = {
    isShowModal: false,
    todo: null,
    isDeleted: false,
    isCreated: false,
  };

  componentDidMount() {
    const localTodo = localStorage.getItem('todo');
    // if (localTodo && JSON.parse(localTodo).length) {
    if (localTodo) {
      this.setState({ todo: JSON.parse(localTodo) });
    } else {
      this.setState({ todo: data });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todo) {
      if (prevState.todo.length > this.state.todo.length) {
        this.setState({ isDeleted: true });
        setTimeout(() => {
          this.setState({ isDeleted: false });
        }, 2000);
      }
      if (prevState.todo.length < this.state.todo.length) {
        this.setState({ isCreated: true });
        setTimeout(() => {
          this.setState({ isCreated: false });
        }, 2000);
      }

      prevState.todo.length !== this.state.todo.length &&
        localStorage.setItem('todo', JSON.stringify(this.state.todo));
    }
  }

  openModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  addTodo = (newTodo) => {
    const todoObj = {
      ...newTodo,
      id: nanoid(),
      completed: false,
    };
    this.setState((prev) => ({
      todo: [...prev.todo, todoObj],
    }));
    if (this.state.isShowModal) {
      this.closeModal();
    }
  };

  deleteTodo = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.filter((el) => el.id !== id),
    }));
  };
  changeStatus = (id) => {
    this.setState(
      (prev) => ({
        todo: prev.todo.map((el) =>
          el.id === id ? { ...el, completed: !el.completed } : el,
        ),
      }),
      () => localStorage.setItem('todo', JSON.stringify(this.state.todo)),
    );
  };

  render() {
    return (
      <>
        {this.state.isDeleted && (
          <div className="alert alert-danger" role="alert">
            Deleted successfully
          </div>
        )}
        {this.state.isCreated && (
          <div className="alert alert-success" role="alert">
            Created successfully
          </div>
        )}
        <button
          className="btn btn-success mx-auto my-5"
          onClick={this.openModal}
        >
          Open Modal
        </button>
        {this.state.isShowModal && (
          <Modal close={this.closeModal}>
            <FormikCreateTodo addTodo={this.addTodo} />
          </Modal>
        )}
        <div className="container mt-5" style={{ width: 800 }}>
          <CreateTodoForm addTodo={this.addTodo} />
          {this.state.todo && (
            <TodoList
              todo={this.state.todo}
              deleteTodo={this.deleteTodo}
              changeStatus={this.changeStatus}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
