import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';
import { autoLogin, logUserOut } from '../actions';

const App = () => {
  const users = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <div className="App">
      {!users.loggedIn ? (
        <div>
          <h1>Sign Up or Login!</h1>
          <SignUp />
          <Login />
        </div>
      ) : (
        <div>
          <h1>
            Welcome,
            {users.user.username}
          </h1>
          <button type="button" onClick={() => dispatch(logUserOut())}>
            LOG OUT
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
