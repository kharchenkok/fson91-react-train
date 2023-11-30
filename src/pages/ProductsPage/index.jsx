import { Link, Outlet } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div>
      <h2>ProductsPage</h2>
      <Link to={'123'}>Details</Link>
      <Outlet />
    </div>
  );
};

export default ProductsPage;
