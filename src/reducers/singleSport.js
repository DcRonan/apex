const defaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const singleSportReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_SINGLE_SPORT_REQUEST':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'FETCH_SINGLE_SPORT_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to retrieve sport data',
      };
    case 'FETCH_SINGLE_SPORT_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: action.payload,
      };
    default:
      return state;
  }
};

export default singleSportReducer;
