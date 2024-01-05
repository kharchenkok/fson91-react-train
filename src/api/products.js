import axios from 'axios';
// axios.defaults.baseURL = 'https://dummyjson.com/products';

const instance = axios.create({
  baseURL: 'https://dummyjson.com/products',
});

export const getProducts = async () => {
  const { data } = await instance();
  return data;
};

export const getSingleProduct = async id => {
  const { data } = await instance(`/${id}`);
  return data;
};

export const getProductsWithSearch = async query => {
  const { data } = await instance(`/search?q=${query}`);
  return data;
};
