import axios from 'axios';
import { toast } from 'react-toastify';

const setUser = payload => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = userInfo => dispatch => {
  axios
    .post('http://localhost:4000/api/v1/login', userInfo)
    .then(response => {
      localStorage.setItem('token', response.token);

      if (response.data.error) return toast.error('Invalid user');
      return dispatch(setUser(response.user));
    })
    .catch(err => err);
};

export const signUserUp = userInfo => dispatch => {
  fetch('http://localhost:4000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    });
};

export const autoLogin = () => dispatch => {
  fetch('http://localhost:4000/auto_login', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    });
};

export const fetchSport = () => async dispatch => {
  try {
    dispatch({
      type: 'FETCH_SPORT_REQUEST',
    });
    const response = await axios.get('http://localhost:4000/api/v1/sports');

    dispatch({
      type: 'FETCH_SPORT_SUCCESS',
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: 'STOCK_LIST_FAIL',
    });
  }
};
