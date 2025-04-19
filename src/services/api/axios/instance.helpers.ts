import {axiosInstance} from './instance';

export const setAxiosInstanceHeader = (header: string, value: string) => {
  axiosInstance.defaults.headers.common[header] = value;
};

export const removeAxiosInstanceHeader = (header: string) => {
  delete axiosInstance.defaults.headers.common[header];
};
