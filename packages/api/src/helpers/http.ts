import axios, { AxiosRequestConfig, Method } from 'axios';

import { TRADULAB_SERVICE_HOST } from '../constants';

type QueryParams = Record<string, string | number | boolean>;

export const request = <R>(
  method: Method,
  path: string,
  options: AxiosRequestConfig = {}
) =>
  axios.request<R>({
    ...options,
    url: TRADULAB_SERVICE_HOST + path,
    method,
  });

export const get = <R, Q extends QueryParams = {}>(...args: [string, Q?]) =>
  request<R>('GET', ...args);
export const post = <R>(endpoint: string, body: object) =>
  request<R>('POST', endpoint, { data: body });
