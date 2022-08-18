import { useEffect } from 'react';

import { useAppDispatch } from '@/libs/store';
import { getProductById } from '@/libs/store/slices/product/product.actions';

export const FetchData = (): null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductById('000000000100243575'));
  }, []);

  return null;
};
