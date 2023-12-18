import { createAction } from '@reduxjs/toolkit';

// export const deleteTodoAction = (id) => ({ type: DELETE_TODO, payload: id });

// export const changeStatusAction = (id) => ({
//   type: CHANGE_STATUS,
//   payload: id,
// });
// export const addTodoAction = (todo) => {
//   const newTodo = {
//     ...todo,
//     id: nanoid(),
//     completed: false,
//   };
//   return { type: ADD_TODO, payload: newTodo };
// };

export const deleteTodoAction = createAction('DELETE_TODO');
export const changeStatusAction = createAction('CHANGE_STATUS');

export const addTodoAction = createAction('ADD_TODO', (todo) => ({
  payload: {
    ...todo,
    id: Math.random().toString(36).substr(2, 9),
    completed: false,
  },
}));

// console.log(
//   addTodoAction({ title: 'test title', description: 'test description' }),
// );
