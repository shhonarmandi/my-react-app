import {createAxiosRequestConfig} from './endpoints.helpers';
import {Pagination, PostRequestPayload} from './types';

export const endpoints = {
  getPost: (postId: number) =>
    createAxiosRequestConfig({
      method: 'GET',
      url: `/posts/${postId}`,
    }),
  getPosts: (params: Pagination) =>
    createAxiosRequestConfig({
      method: 'GET',
      url: '/posts',
      params,
    }),
  submitPost: (data: PostRequestPayload) =>
    createAxiosRequestConfig({
      method: 'POST',
      url: '/posts',
      data,
    }),

  // Example of without data/params and a different baseUrl
  getPhotos: createAxiosRequestConfig({
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'GET',
    url: '/photos',
  }),
};
