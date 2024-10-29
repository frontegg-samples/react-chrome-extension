import { useEffect } from 'react';
import {
  FronteggStoreProvider,
} from '@frontegg/react-hooks';
import { FronteggApp } from '@frontegg/js';
import { ContextHolder, ContextOptions, createApiClient } from '@frontegg/rest-api';
import Login from './Login';

const contextOptions: ContextOptions = {
  baseUrl: 'Change to your own BaseURL',
  clientId: 'Change to your own ClientId',
  requestCredentials: 'include',
};

ContextHolder.for('“ApplicationName”').setContext(contextOptions);

const fronteggApp: FronteggApp = new FronteggApp({
  contextOptions,
  hostedLoginBox: false,
}, 'default');


function App() {
  useEffect(() => {
    createApiClient('“ApplicationName”').auth.refreshTokenV3().then((user) => {
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
