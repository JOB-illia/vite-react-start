import { lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CatchErrors, FetchData } from '@/hooks';

import { store } from '@/libs/store';

import { NotificationContainer } from '@/components';

const HomePage = lazy(() => import('./pages/home-page'));

const App = () => {
  return (
    <Provider store={store}>
      <CatchErrors />
      <FetchData />
      <NotificationContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
