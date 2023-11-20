import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';

const theme = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
