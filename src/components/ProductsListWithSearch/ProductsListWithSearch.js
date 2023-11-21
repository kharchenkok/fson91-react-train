import React from 'react';

import Product from '../Product';

const ProductsListWithSearch = ({ products }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}
    >
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsListWithSearch;
