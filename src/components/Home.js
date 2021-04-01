import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logUserOut } from '../actions';
import AddSport from './AddSport';

const Home = () => {
  const users = useSelector(state => state.user);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Welcome,
        {users.data.user.username}
      </h1>
      <button type="button" onClick={() => dispatch(logUserOut())}>
        LOG OUT
      </button>
      <AddSport />
    </div>
  );
};

export default Home;
