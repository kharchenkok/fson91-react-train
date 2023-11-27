import ReactDOM from 'react-dom/client';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthProvider from './contexts/auth/Provider';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
