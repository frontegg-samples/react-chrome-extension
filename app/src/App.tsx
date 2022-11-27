import './App.css';
import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect } from '@frontegg/react';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  useEffect(() => {
    if (!isAuthenticated) {
      chrome.runtime.sendMessage({done: true}, () => {
        console.log('message sent')
      });
    }
  }, [isAuthenticated]);

  return <span>
    You are authenticated, you can close this tab and open the extension
  </span>
}

export default App;
