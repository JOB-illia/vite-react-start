import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IProductState } from './product.types';

const initialState: IProductState = {
  product: null,
  loading: false,
  error: null,
  count: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductPending: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.product = action.payload;
      state.error = null;
    },
    fetchProductReject: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    handleIncrementCount: (state) => {
      state.count += 1;
    },
  },
});

export const { handleIncrementCount } = productSlice.actions;

export const ProductReducer = productSlice.reducer;
