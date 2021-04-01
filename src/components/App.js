import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';
import { autoLogin, fetchSport } from '../actions';
import Home from './Home';

const App = () => {
  const users = useSelector(state => state.user);
  const sports = useSelector(state => state.sport);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(fetchSport(sports));
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
        <Home />
      )}
    </div>
  );
};

export default App;
