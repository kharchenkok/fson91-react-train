import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://practices-api.vercel.app',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const registration = async body => {
  const { data } = await instance.post('/auth/signup', body);
  setToken(data.token);
  return data;
};
