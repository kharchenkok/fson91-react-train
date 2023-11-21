import React, { Component } from 'react';

import ProductsList from './components/ProductsList';
import FormicSearchProduct from './components/Forms/FormikSearchProduct';
import ProductsListWithSearch from './components/ProductsListWithSearch';
import { getProducts, getProductsWithSearch } from './api/products';

class App extends Component {
  state = {
    query: '',
    isLoading: false,
    products: null,
    error: null,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.query !== this.state.query) {
      console.log('Обновился query, отправляю запрос');
      this.handleFetchProducts();
    }
  }

  handleFetchProducts = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getProductsWithSearch(this.state.query);
      this.setState({ products: data.products });
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ isLoading: false, error: '' });
    }
  };

  handleSubmit = ({ query }) => {
    this.setState({ query });
  };

  render() {
    const { products, isLoading, error } = this.state;
    return (
      <>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <FormicSearchProduct submit={this.handleSubmit} />
        {products && <ProductsListWithSearch products={products} />}
        {/*<ProductsList />*/}
      </>
    );
  }
}

export default App;
