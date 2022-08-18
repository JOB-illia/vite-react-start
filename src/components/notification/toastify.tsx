import type { FC, ReactNode } from 'react';
import { Flip, ToastContainer, TypeOptions } from 'react-toastify';

import { ErrorIcon, SuccessIcon } from '@/assets/icons';

const icons: Record<TypeOptions, ReactNode> = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  info: null,
  warning: null,
  default: null,
};

export const NotificationContainer: FC = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      limit={5}
      pauseOnFocusLoss
      draggable
      transition={Flip}
      pauseOnHover
      icon={({ type }) => icons[type]}
    />
  );
};
