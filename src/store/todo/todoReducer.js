import { todoInitialState } from './todoInitiallState';
import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from './todoTypes';

export const todoReducer = (state = todoInitialState, action) => {
  if (action.type === ADD_TODO) {
    return { ...state, todo: [...state.todo, action.payload] };
  }
  if (action.type === DELETE_TODO) {
    return {
      ...state,
      todo: state.todo.filter((todo) => todo.id !== action.payload),
    };
  }
  if (action.type === CHANGE_STATUS) {
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
  }
  return state;
};
