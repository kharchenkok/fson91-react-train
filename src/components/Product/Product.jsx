import React from 'react';

const Product = ({ product }) => {
  const { description, price, thumbnail, title } = product;
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={thumbnail}
        className="card-img-top"
        alt={title}
        style={{
          aspectRatio: '1.3/1',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="-" className="btn btn-primary">
          {price}$
        </a>
      </div>
    </div>
  );
};

export default Product;
