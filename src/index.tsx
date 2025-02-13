import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/globals.css';
import App from './app/page.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
