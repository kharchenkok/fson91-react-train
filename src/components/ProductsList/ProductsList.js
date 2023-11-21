import React, { Component } from 'react';
import { getProducts } from '../../api/products';
import Product from '../Product';

export default class ProductsList extends Component {
  state = {
    products: null,
    isLoading: false,
    error: '',
    isShowProducts: false,
  };
  // componentDidMount() {
  //   console.log('ProductsList did mount');
  //   this.handleFetchProducts();
  // }

  componentDidUpdate(prevProps, prevState) {
    prevState.isShowProducts !== this.state.isShowProducts &&
      (this.state.isShowProducts
        ? this.handleFetchProducts()
        : this.setState({ products: null }));
  }

  handleFetchProducts = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getProducts();
      this.setState({ products: data.products });
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleClick = () => {
    this.setState((prevState) => ({
      isShowProducts: !prevState.isShowProducts,
    }));
  };
  render() {
    const { products, error, isLoading, isShowProducts } = this.state;
    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button onClick={this.handleClick} type={'button'}>
          {' '}
          {isShowProducts ? 'Hide' : 'Show'}
        </button>
        {products && (
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
        )}
      </div>
    );
  }
}
