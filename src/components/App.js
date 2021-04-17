import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Login from './Login';
import SignUp from './SignUp';
import { fetchSport } from '../actions';
import Home from './Home';

const App = () => {
  const users = useSelector(state => state.user);
  const sports = useSelector(state => state.sport);
  const [showLogin, setShowLogin] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSport(sports));
  }, []);

  return (
    <div className="h-screen w-full">
      <ToastContainer />
      {!users.loggedIn ? (
        <section>
          <div>{showLogin === false ? <Login /> : <SignUp />}</div>
          <div className="fixed bottom-3 text-center text-white font-nimbuslight italic w-full">
            {showLogin === false ? (
              <button type="button" onClick={() => setShowLogin(true)}>
                <p className="mx-auto hover:underline">
                  Don&apos;t have an account? Sign Up
                </p>
              </button>
            ) : (
              <button type="button" onClick={() => setShowLogin(false)}>
                <p className="mx-auto hover:underline">
                  Have an account? Login
                </p>
              </button>
            )}
          </div>
        </section>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
