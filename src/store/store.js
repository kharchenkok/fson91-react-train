import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// ============================================з combineReducers====================================================

// import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
//
// const persistConfig = {
//   key: 'todo',
//   storage,
//   whitelist: ['todo'],
//   blacklist: ['user'],
// };
//
// const persistedReducer = persistReducer(persistConfig, reducer);
//
// export const store = configureStore({ reducer: persistedReducer });
//
// export const persistor = persistStore(store);
