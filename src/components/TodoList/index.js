import { Component } from 'react';
import Todo from '../Todo';

class TodoList extends Component {
  state = {};
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   // console.log('nextProps.deleteTodo', nextProps.deleteTodo);
  //   // console.log('this.props.deleteTodo', this.props.deleteTodo);
  //   // console.log(nextProps.deleteTodo === this.props.deleteTodo);
  //   return nextProps.todo.length !== this.props.todo.length;
  // }

  render() {
    console.log('TodoList render');
    const { todo, deleteTodo, changeStatus } = this.props;
    return (
      <ul className="list-group">
        {todo.map((el) => (
          <Todo
            key={el.id}
            todo={el}
            deleteTodo={deleteTodo}
            changeStatus={changeStatus}
          />
          // <Todo key={el.id} todo={el} deleteTodo={() => deleteTodo(el.id)} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
