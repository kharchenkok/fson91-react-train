import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://practices-api.vercel.app',
});

export const setToken = token => {
  console.log('token', token);
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};

export const registration = async body => {
  const { data } = await instance.post('/auth/signup', body);
  setToken(data.token);
  return data;
};

export const loginApi = async body => {
  const { data } = await instance.post('/auth/login', body);
  setToken(data.token);
  return data;
};

export const refreshApi = async () => {
  const { data } = await instance.get('/auth/refresh');
  setToken(data.token);
  return data;
};

export const updateProfileApi = async (body, id) => {
  const { data } = await instance.put(`/users/${id}`, body);
  return data;
};
