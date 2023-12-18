import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Layout from './Layout';
import { lazy, Suspense } from 'react';

import './store/store';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const ProductsDetailsPage = lazy(() => {
  return import('./pages/ProductsPage/ProductsDetailsPage');
});

const HomePage = lazy(() => {
  return import('./pages/HomePage');
});
const ProductsPage = lazy(() => {
  return import('./pages/ProductsPage');
});
const TodoPage = lazy(() => {
  return import('./pages/TodoPage');
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<h2>Loader...</h2>} persistor={persistor}>
        <Suspense fallback={<h2>Loader...</h2>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route
                path="products/:idProduct"
                element={<ProductsDetailsPage />}
              />
              <Route path="todo" element={<TodoPage />} />
            </Route>
          </Routes>
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default App;
