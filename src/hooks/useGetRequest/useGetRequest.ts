import {AxiosRequestConfig} from 'axios';
import {makeRequest} from '@services/api';
import {useQuery} from '@tanstack/react-query';
import {UseQueryOptions} from './useGetRequest.types';

export function useGetRequest<ResponseData>(
  key: string,
  axiosRequestConfig: AxiosRequestConfig,
  options?: UseQueryOptions<ResponseData>
) {
  const response = useQuery({
    queryKey: [key],
    queryFn: async () => makeRequest<ResponseData>(axiosRequestConfig),
    ...options,
  });

  return response;
}
