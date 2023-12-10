import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import { lazy, Suspense } from 'react';

import './store/store';
import { Provider } from 'react-redux';
import { store } from './store/store';

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
    </Provider>
  );
};

export default App;
