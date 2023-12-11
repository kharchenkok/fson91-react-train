import { useDispatch } from 'react-redux';
import {
  changeStatusAction,
  deleteTodoAction,
} from '../../store/todo/todoSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const changeStatus = (id) => {
    dispatch(changeStatusAction(id));
  };
  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-warning ms-4"
          onClick={() => changeStatus(todo.id)}
        >
          {todo.completed.toString()}
        </button>
        <button
          className="btn btn-danger ms-4"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
