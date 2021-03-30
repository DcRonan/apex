import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';

const App = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="App">
      {!user.loggedIn ? (
        <div>
          <h1>Sign Up or Login!</h1>
          <SignUp />
          <Login />
        </div>
      ) : (
        <h1>
          Welcome,
          {user.user.username}
        </h1>
      )}
    </div>
  );
};

export default App;
