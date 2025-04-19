import {AxiosRequestConfig, Method} from 'axios';

type ExtendedAxiosRequestConfig = AxiosRequestConfig & {
  method: Method;
};

export function createAxiosRequestConfig(config: ExtendedAxiosRequestConfig) {
  return config;
}
