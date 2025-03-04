import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/all.scss';
import 'bootstrap';
import router from './routes/routes';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
