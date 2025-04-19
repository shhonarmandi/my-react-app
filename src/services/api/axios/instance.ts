import axios from 'axios';
import {
  onRequest,
  onResponse,
  onRequestError,
  onResponseError,
} from './instance.interceptors';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);
