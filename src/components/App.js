import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';

const App = () => {
  const users = useSelector(state => state.user);

  return (
    <div className="App">
      {!users.loggedIn ? (
        <div>
          <h1>Sign Up or Login!</h1>
          <SignUp />
          <Login />
        </div>
      ) : (
        <h1>
          Welcome,
          {users.user.username}
        </h1>
      )}
    </div>
  );
};

export default App;
