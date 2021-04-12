import axios from 'axios';
import { toast } from 'react-toastify';

const setUser = payload => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = userInfo => dispatch => {
  axios
    .post('http://localhost:4000/api/v1/login', userInfo)
    .then(response => response)
    .then(data => {
      if (data.error) return toast.error('Invalid user');
      localStorage.setItem('token', data.token);
      return dispatch(setUser(data.data)) && toast.success(`Welcome ${data.data.user.username}!`);
    })
    .catch(err => err);
};

export const signUserUp = userInfo => dispatch => {
  axios
    .post('http://localhost:4000/api/v1/users', userInfo)
    .then(response => response)
    .then(data => {
      localStorage.setItem('token', data.token);

      if (data.error) return toast.error('Error, try again');
      return dispatch(setUser(data.data)) && toast.success('You have successfully registered');
    })
    .catch(err => err);
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

export const fetchSingleSport = sport => async dispatch => {
  try {
    dispatch({
      type: 'FETCH_SINGLE_SPORT_REQUEST',
    });

    dispatch({
      type: 'FETCH_SINGLE_SPORT_SUCCESS',
      payload: [sport],
    });
  } catch (e) {
    dispatch({
      type: 'STOCK_SINGLE_LIST_FAIL',
    });
  }
};
