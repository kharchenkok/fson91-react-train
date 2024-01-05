import { todoReducer } from './todo/todoSlice';
import { userReducer } from './user/userReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { productsReducer } from './products/productsSlice';
import { rootReducer } from './root/rootSlice';
import { authReducer } from './auth/authSlice';
import { postsReducer } from './posts/postsSlice';

const persistConfigTodo = {
  key: 'todo',
  storage,
  blacklist: ['secretKey'],
};

const persistConfigAuth = {
  key: 'token',
  storage,
  blacklist: ['user'],
};

const persistedReducerTodo = persistReducer(persistConfigTodo, todoReducer);
const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);

export const reducer = {
  todo: persistedReducerTodo,
  user: userReducer,
  products: productsReducer,
  root: rootReducer,
  auth: persistedReducerAuth,
  posts: postsReducer,
};
