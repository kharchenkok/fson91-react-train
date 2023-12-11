import { nanoid } from 'nanoid';
import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from './todoTypes';

export const deleteTodoAction = (id) => ({ type: DELETE_TODO, payload: id });
export const changeStatusAction = (id) => ({
  type: CHANGE_STATUS,
  payload: id,
});
export const addTodoAction = (todo) => {
  const newTodo = {
    ...todo,
    id: nanoid(),
    completed: false,
  };
  return { type: ADD_TODO, payload: newTodo };
};
