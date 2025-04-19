import {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

export function onRequest(config: InternalAxiosRequestConfig) {
  return config;
}

export function onRequestError(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error);
}

export function onResponse(response: AxiosResponse) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  return response;
}

export function onResponseError(error: AxiosError): Promise<AxiosError> {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  return Promise.reject(error);
}
