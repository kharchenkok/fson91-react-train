import Todo from '../Todo';

import { useDispatch, useSelector } from 'react-redux';
import CreateTodoForm from '../Forms/CreateTodoForm';

import { addTodoAction } from '../../store/todo/todoActions';

const TodoList = () => {
  const { todo } = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const addTodo = (todo) => {
    dispatch(addTodoAction(todo));
  };
  return (
    <>
      <CreateTodoForm addTodo={addTodo} />
      <ul className="list-group">
        {todo.map((el) => (
          <Todo key={el.id} todo={el} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
