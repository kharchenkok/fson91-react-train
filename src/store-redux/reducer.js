import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { todoReducer } from './todo/todoReducer';

export const reducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});
