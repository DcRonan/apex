import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logUserOut } from '../actions';
import AddSport from './AddSport';

const Home = () => {
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Welcome,
        {users.user.username}
      </h1>
      <button type="button" onClick={() => dispatch(logUserOut())}>
        LOG OUT
      </button>
      <AddSport />
    </div>
  );
};

export default Home;
