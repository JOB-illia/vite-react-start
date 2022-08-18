import type { AxiosRequestConfig } from 'axios';

import { client } from '@/libs/network/client';

class Api {
  getSingleProduct(id: string, params: AxiosRequestConfig['params'] = {}) {
    return client.get(`/product/${id}`, {
      params,
    });
  }
}

export const apiClient = new Api();
