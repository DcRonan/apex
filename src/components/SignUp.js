import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { signUserUp } from '../actions';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const userInfo = {
      username,
      password,
    };

    if (username === '' || password === '') return toast.error('username or password blank');
    return dispatch(signUserUp(userInfo));
  };

  return (
    <div>
      <h1>SignUp Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />

        <br />
        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default SignUp;
