import {AxiosRequestConfig} from 'axios';
import {axiosInstance} from './instance';

export async function makeRequest<ResponseData>(
  axiosRequestConfig: AxiosRequestConfig
) {
  const res = await axiosInstance.request<ResponseData>(axiosRequestConfig);

  return res.data;
}
