import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
    secretKey: '',
  },
  reducers: {
    addTodoAction: {
      prepare: (todo) => {
        return {
          payload: {
            ...todo,
            id: Math.random().toString(36).substr(2, 9),
            completed: false,
          },
        };
      },
      reducer: (state, action) => {
        return {
          ...state,
          todo: [...state.todo, action.payload],
        };
      },
    },
    deleteTodoAction: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
      // return {
      //   ...state,
      //   todo: state.todo.filter((todo) => todo.id !== action.payload),
      // };
    },
    changeStatusAction: (state, action) => {
      return {
        ...state,
        todo: state.todo.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
      // state.todo = state.todo.map((todo) => {
      //   if (todo.id === action.payload) {
      //     return {
      //       ...todo,
      //       completed: !todo.completed,
      //     };
      //   }
      //   return todo;
      // });
    },
  },
});

export const { addTodoAction, deleteTodoAction, changeStatusAction } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
