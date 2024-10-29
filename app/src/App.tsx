import './App.css';
import { useAuth } from '@frontegg/react';
import { useNavigate } from 'react-router-dom';

function App() {
  const { isAuthenticated } = useAuth();
  let navigate = useNavigate();
  const handleLogout = () => {
    // if you are using hosted login box change the value to 'oauth/account/logout'
    navigate("/account/logout");
  };

  return (
    <div>
      {isAuthenticated && (
        <>
          <span>
            You are authenticated, you can close this tab and open the extension
          </span>
          <div>
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );



}

export default App;
