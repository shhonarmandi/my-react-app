import {UseQueryOptions as Options} from '@tanstack/react-query';

export type UseQueryOptions<ResponseData> = Omit<
  Options<ResponseData>,
  'queryKey'
>;
