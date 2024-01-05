import { instance } from './auth';

export const createPost = async (id, body) => {
  const { data } = await instance.post(`/users/${id}/posts`, body);
  return data;
};

export const getAllPosts = async id => {
  const { data } = await instance.get(`/users/${id}/posts`);
  return data;
};
