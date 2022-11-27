import { useAuthUserOrNull } from '@frontegg/react-hooks';
import React, { useCallback } from 'react';

const APP_URL = 'http:/localhost:3000';

const Login = () => {
  const user = useAuthUserOrNull();

  const login = useCallback(() => {
    chrome.tabs.create({ url: APP_URL });
  }, []);

  if (!user) {
    return <button onClick={login}>Click me to login</button>;
  } else {
    return <div>
      <div>
        Welcome {user.name}, you are authenticated
      </div>
      <div>
        <img src={user.profilePictureUrl} style={{ width: '50px', height: '50px', borderRadius: '25px' }}/>
      </div>
    </div>;
  }
};

export default Login
