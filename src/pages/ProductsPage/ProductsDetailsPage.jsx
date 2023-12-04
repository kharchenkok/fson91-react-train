import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import { getProductById } from '../../api/products';
import Product from '../../components/Product';

const ProductsDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [product, setProduct] = useState(null);

  const { idProduct } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location.state);
  };

  const handleProduct = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getProductById(idProduct);
      setProduct(data);
      setError('');
    } catch (error) {
      setError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  }, [idProduct]);

  useEffect(() => {
    idProduct && handleProduct();
  }, [handleProduct, idProduct]);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <Navigate to={'/'} />}
      <Link to={location.state}>Back</Link>
      <button type={'button'} onClick={handleClick}>
        Back
      </button>
      {product && <Product product={product} key={product.id} />}
    </>
  );
};

export default ProductsDetailsPage;
