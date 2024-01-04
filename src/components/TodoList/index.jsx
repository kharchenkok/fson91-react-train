import { useSelector, useDispatch } from 'react-redux';
import Todo from '../Todo';
import CreateTodoForm from '../Forms/CreateTodoForm';
import { addTodoAction } from '../../store/todo/todoSlice';

const TodoList = () => {
  const { todo } = useSelector(state => state.todo);

  const dispatch = useDispatch();

  const addTodo = todo => {
    dispatch(addTodoAction(todo));
  };

  return (
    <>
      <CreateTodoForm addTodo={addTodo} />
      <ul className="list-group">
        {todo.map(el => (
          <Todo key={el.id} todo={el} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
