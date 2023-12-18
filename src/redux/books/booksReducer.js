import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './booksOperations';
// import * as booksActions from './booksActions';

const entitiesReducer = createReducer([], (builder) => {
  // builder.addCase(fetchBooks.fulfilled, (state, action) => action.payload);
  builder.addCase(fetchBooks.fulfilled, (_, action) => {
    // console.log('action', action);
    return action.payload;
  });

  // [booksActions.fetchBooksSuccess]: (state, action) => action.payload,
});

const isLoadingReducer = createReducer(false, (builder) => {
  builder
    .addCase(fetchBooks.pending, () => true)
    .addCase(fetchBooks.fulfilled, () => false)
    .addCase(fetchBooks.rejected, () => false);

  // [booksActions.fetchBooksRequest]: () => true,
  // [booksActions.fetchBooksSuccess]: () => false,
  // [booksActions.fetchBooksError]: () => false,
});

const errorReducer = createReducer(null, (builder) => {
  builder
    .addCase(fetchBooks.rejected, (_, action) => action.payload)
    .addCase(fetchBooks.pending, () => null);

  // .addCase(booksActions.fetchBooksError, (_, action) => action.payload)
  // .addCase(booksActions.fetchBooksRequest, () => null);

  // [booksActions.fetchBooksError]: (_, action) => action.payload,
  // [booksActions.fetchBooksRequest]: () => null,
});
export default combineReducers({
  entitiesReducer,
  isLoadingReducer,
  errorReducer,
});

// const entities = createReducer([], {
//   [fetchBooks.fulfilled]: (_, action) => action.payload,
// });
//
// const isLoading = createReducer(false, {
//   [fetchBooks.pending]: () => true,
//   [fetchBooks.fulfilled]: () => false,
//   [fetchBooks.rejected]: () => false,
// });
//
// const error = createReducer(null, {
//   [fetchBooks.rejected]: (_, action) => action.payload,
//   [fetchBooks.pending]: () => null,
// });
//
// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });

// 🔥 ИСПОЛЬЗУЕТ IMMER ДЛЯ МУТАЦИИ КОПИИ СОСТОЯНИЯ
// const booksSlice = createSlice({
//   name: 'books',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchBooks.fulfilled]: (state, { payload }) => (state.entities = payload),
//     [fetchBooks.pending]: state => (state.isLoading = true),
//   },
// });

// БЕЗ IMMER
// const booksSlice = createSlice({
//   name: 'books',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchBooks.fulfilled]: (state, { payload }) => {
//     return{
//     ...state,
//     entities: [...state.entities, ...payload] //-якщо потрібно додати до масиву(якщо потрібно просто замінити - entities: payload)
//     }},
//     [fetchBooks.pending]: state => {
//     return{
//     ...state,
//     isLoading: true,
//     }},
// });

// export default booksSlice.reducer;
