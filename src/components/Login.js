import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUser } from '../actions';

const Login = () => {
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
    return dispatch(fetchUser(userInfo));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-lightblue">
      <div className="mb-10">
        <h1 className="font-nimbusbold text-4xl italic text-gray-700">APEX</h1>
      </div>
      <div className="px-16 w-full">
        <form onSubmit={onSubmit} className="flex flex-col space-y-3 font-nimbuslight">
          <input
            className="px-3 py-2 focus:border-green-500 focus:outline-none"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            className="px-3 py-2 focus:border-4 focus:border-green-500 focus:outline-none"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input className="px-3 py-2 bg-green-500 text-white border-0 focus:outline-none" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
