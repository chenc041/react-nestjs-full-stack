import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { ApiReturnType } from '~/interface';
import { BASE_URL } from '~/config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

export const request = async <T = any>(options: AxiosRequestConfig<T>) => {
  return instance(options)
    .then((res: AxiosResponse<ApiReturnType<T>>) => res.data)
    .catch((err: AxiosError<ApiReturnType<T>>) => {
      console.warn(`[Error: ${options.url}]`, `message: ${err.message}`, `statusCode: ${err.status}`);
      return { data: null, statusCode: 0, message: err.message };
    });
};
