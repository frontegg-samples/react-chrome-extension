import React, { useEffect, useMemo } from 'react';
import {
  FronteggStoreProvider,
} from '@frontegg/react-hooks';
import { FronteggApp } from '@frontegg/js';
import { api, ContextHolder, ContextOptions } from '@frontegg/rest-api';
import Login from './Login';


const contextOptions: ContextOptions = {
  baseUrl: 'https://samples-demo.frontegg.com',
  clientId: '2e53360e-517e-4c38-a040-ba0e8639f2c7',
  requestCredentials: 'include',
};
ContextHolder.setContext(contextOptions);

const fronteggApp: FronteggApp = new FronteggApp({
  contextOptions,
  hostedLoginBox: true,
}, 'default');


function App() {
  useEffect(() => {
    api.auth.silentOAuthRefreshToken().then((user) => {
      fronteggApp?.store.dispatch({
        type: 'auth/setState', payload: {
          isLoading: false,
          user, isAuthenticated: true,
        },
      });
    }).catch(e => {
      console.error('failed to call silent refresh login', e);
      fronteggApp?.store.dispatch({
        type: 'auth/setState', payload: {
          isLoading: false,
          user: null, isAuthenticated: false,
        },
      });
    });
  }, []);


  return (
    <FronteggStoreProvider app={fronteggApp} contextOptions={contextOptions}>
      <Login/>
    </FronteggStoreProvider>
  );
}

export default App;
