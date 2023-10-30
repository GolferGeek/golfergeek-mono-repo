// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { User, useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  const [apiMessage, setApiMessage] = useState('No message yet.');
  const [token, setToken] = useState('');

  const getNewToken = async () => {
    getAccessTokenSilently().then((token) => {
      console.log(token);
      setToken(token);
    });
  };

  const {
    getAccessTokenSilently,
    isAuthenticated,
    isLoading,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    getNewToken().then(() => {
      console.log(user);
      const headers = { Authorization: `Bearer ${token}` };
      fetch('http://localhost:3000/protected', { headers })
        .then((response) => response.json())
        .then((data) => setApiMessage(data.message))
        .catch((error) => setApiMessage(error.message));
    });
    return (
      <div>
        from the API: {apiMessage}
        Hey {(user as User).name}! You are logged in!{' '}
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log out
        </button>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div>
        Hey stranger! You should{' '}
        <button onClick={() => loginWithRedirect()}>Log in</button>
      </div>
    );
  }

  return (
    <div>
      Hey React Developer... Welcome to Hiverarchy!
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
