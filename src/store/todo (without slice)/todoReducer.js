import { todoInitialState } from './todoInitiallState';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTodoAction,
  changeStatusAction,
  deleteTodoAction,
} from './todoActions';

export const todoReducer = createReducer(todoInitialState, (builder) => {
  builder
    .addCase(addTodoAction, (state, action) => {
      state.todo.push(action.payload);
      // return { ...state, todo: [...state.todo, action.payload] };
    })
    .addCase(deleteTodoAction, (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
      // return {
      //   ...state,
      //   todo: state.todo.filter((todo) => todo.id !== action.payload),
      // };
    })
    .addCase(changeStatusAction, (state, action) => {
      state.todo = state.todo.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      // return {
      //   ...state,
      //   todo: state.todo.map((todo) => {
      //     if (todo.id === action.payload) {
      //       return {
      //         ...todo,
      //         completed: !todo.completed,
      //       };
      //     }
      //     return todo;
      //   }),
      // };
    });
});

// export const todoReducer = createReducer(todoInitialState, {
//   [addTodoAction]: (state, action) => {
//     state.todo.push(action.payload);
//   },
//   [deleteTodoAction]: (state, action) => {
//     state.todo = state.todo.filter((todo) => todo.id !== action.payload);
//   },
//   [changeStatusAction]: (state, action) => {
//     state.todo = state.todo.map((todo) => {
//       if (todo.id === action.payload) {
//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       }
//       return todo;
//     });
//   },
// });
