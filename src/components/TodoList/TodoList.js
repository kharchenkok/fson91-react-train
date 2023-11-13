import React from 'react';
import Todo from '../Todo';
const TodoList = ({ todo }) => {
  return (
    <ul className="list-group">
      {todo.map((el) => (
        <Todo key={el.id} todo={el} />
      ))}
    </ul>
  );
};
export default TodoList;
