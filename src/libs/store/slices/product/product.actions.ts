import type { AxiosRequestConfig } from 'axios';

import { apiClient } from '@/libs/network';
import type { AppDispatch } from '@/libs/store';
import { productSlice } from '@/libs/store/slices';

const { fetchProductPending, fetchProductSuccess, fetchProductReject } = productSlice.actions;

export const getProductById =
  (id: string, params: AxiosRequestConfig['params'] = {}) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchProductPending());

      const { data } = await apiClient.getSingleProduct(id, params);

      fetchProductSuccess(data);
    } catch (e: unknown) {
      dispatch(fetchProductReject(e instanceof Error ? e.message : `Error: ${e}`));
    }
  };
