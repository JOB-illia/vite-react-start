import type { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/libs/store';
import { handleIncrementCount } from '@/libs/store/slices';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.product);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <button type="button" onClick={() => dispatch(handleIncrementCount())}>
        Count: {count}
      </button>
    </div>
  );
};

export default HomePage;
