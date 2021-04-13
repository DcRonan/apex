import React from 'react';
import { useDispatch } from 'react-redux';
import { logUserOut } from '../actions';

const More = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(logUserOut())}>
        LOG OUT
      </button>
    </div>
  );
};

export default More;
