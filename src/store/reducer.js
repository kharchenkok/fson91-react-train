import { userReducer } from './user/userReducer';
import { todoReducer } from './todo/todoSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'todo',
  storage,
  blacklist: ['secretKey'],
};
const persistedReducer = persistReducer(persistConfig, todoReducer);

export const reducer = {
  user: userReducer,
  todo: persistedReducer,
};

// export const reducer = combineReducers({
//   user: userReducer,
//   todo: todoReducer,
// });
