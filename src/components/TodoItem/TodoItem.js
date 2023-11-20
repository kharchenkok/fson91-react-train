import React from 'react';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import IconButton from '../IconButton';

const TodoItem = ({ text, onToggleCompleted, onDeleteTodo, completed }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      {/*<button type="button" onClick={onDeleteTodo}>*/}
      {/*  Видалити*/}
      {/*</button>*/}
      <IconButton aria-label={'Видалити'} onClick={onDeleteTodo}>
        <DeleteIcon width="40" height="40" fill="#fff" />
      </IconButton>
    </>
  );
};
export default TodoItem;
