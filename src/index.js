import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'production') {
  const consoleError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('WebSocket connection to')) {
      return;
    }
    consoleError(...args);
  };
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


