import fetch, { RequestInit, Response } from 'node-fetch';

import { TRADULAB_SERVICE_HOST } from '../constants';

type QueryParams = Record<string, string | number | boolean>;

export function querystringify<T extends QueryParams>(query: T): string {
  const querystring = Object.entries(query || {})
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  if (querystring) return '?' + querystring;

  return '';
}

export const request = (
  method: string,
  path: string,
  options: RequestInit = {}
): Promise<Response> =>
  fetch(TRADULAB_SERVICE_HOST + path, { ...options, method });

export const get = <R, Q extends QueryParams = {}>(
  endpoint: string,
  queryParams?: Q
) =>
  request('GET', endpoint + querystringify(queryParams)).then(
    (res) => res.json() as Promise<R>
  );
export const post = <R>(endpoint: string, body: object) =>
  request('POST', endpoint, { body: JSON.stringify(body) }).then(
    (res) => res.json() as Promise<R>
  );
