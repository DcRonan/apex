import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logUserOut } from '../actions';

const More = () => {
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="p-4 bg-lightblue text-white font-nimbuslight w-full text-center">
        <h1 className="text-2xl">Settings</h1>
      </div>
      <div className="bg-white shadow-md borer-b p-5 text-center">
        <h2 className="text-2xl font-nimbuslight text-green-600">{users.data.user.username}</h2>
      </div>
      <button type="button" onClick={() => dispatch(logUserOut())}>
        LOG OUT
      </button>
    </div>
  );
};

export default More;
