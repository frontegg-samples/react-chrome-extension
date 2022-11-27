import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://samples-demo.frontegg.com',
  clientId: '2e53360e-517e-4c38-a040-ba0e8639f2c7',
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>,
);
