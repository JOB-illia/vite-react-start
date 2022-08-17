import { lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from '@/libs/store';

const HomePage = lazy(() => import('./pages/home-page'));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
