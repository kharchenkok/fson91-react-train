import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoList.scss';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <TodoItem
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDeleteTodo={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
