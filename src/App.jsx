import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ProductsPage from './pages/ProductsPage';
// import TodoPage from './pages/TodoPage';
import Layout from './Layout';
import { lazy, Suspense } from 'react';

// import ProductsDetailsPage from './pages/ProductsPage/ProductsDetailsPage';

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
    <Suspense fallback={<h2>Loader...</h2>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:idProduct" element={<ProductsDetailsPage />} />
          <Route path="todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
// const App = () => {
// 	return (
// 		<Routes>
// 			<Route path='/' element={<Layout />}>
// 				<Route index element={<HomePage />} />
// 				{/* <Route path='products' element={<ProductsPage />}>
// 					<Route
// 						path='productsDetails/:idProduct'
// 						element={<ProductsDetailsPage />}
// 					/>
// 				</Route> */}
// 				<Route path='products' element={<ProductsPage />} />
// 				{/* <Route
// 					path='productsDetails/:idProduct'
// 					element={<ProductsDetailsPage />}
// 				>
// 					<Route path=':ownerId' element={<ProductsDetailsPage />} />
// 				</Route> */}
// 				<Route path='todo' element={<TodoPage />} />
// 			</Route>
// 		</Routes>
// 	)
// }

export default App;
