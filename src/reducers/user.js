const defaultState = {
  loggedIn: false,
  user: '',
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NEW_USER':
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case 'LOGIN_NEW_USER':
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
