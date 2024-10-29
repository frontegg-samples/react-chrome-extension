import ReactDOM from 'react-dom/client'
import './index.css'
import { FronteggProvider } from '@frontegg/react';
import App from './App';


const contextOptions = {
  baseUrl: 'Change to your own BaseURL',
  clientId: 'Change to your own ClientId',
  appId: 'Change to your own AppId',
};

const authOptions = {
  keepSessionAlive: true, 
  enableSessionPerTenant: true,
  disableSilentRefresh: true,
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FronteggProvider 
  contextOptions={contextOptions} 
  // if you are using hosted login box change the value of hostedLoginBox to true
  hostedLoginBox={false}
  entitlementsOptions={{ enabled: true }}
  authOptions={authOptions}>
      <App />
  </FronteggProvider>,
);