import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useAppSelector } from '@/libs/store';

export const CatchErrors = (): null => {
  const { error: ErrorProduct } = useAppSelector((state) => state.product);

  useEffect(() => {
    const errors = [ErrorProduct];

    errors.forEach((error) => {
      if (error) toast.error(error);
    });
  }, [ErrorProduct]);

  return null;
};
