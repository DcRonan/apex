import React from 'react';
import { useDispatch } from 'react-redux';
import { logUserOut } from '../actions';
import AddSport from './AddSport';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(logUserOut())}>
        LOG OUT
      </button>
      <AddSport />
    </div>
  );
};

export default Home;
