import React from 'react';

const Todo = ({ todo, deleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="me-4">
        <p>{todo.title}</p>
        <p>{todo.description}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p>{todo.completed.toString()}</p>
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
