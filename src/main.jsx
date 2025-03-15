import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/all.scss';
import 'bootstrap';
import router from './routes/routes';
import { RouterProvider } from 'react-router';
import { store } from './redux/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
