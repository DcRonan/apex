import reducer from '../reducers/sport';

describe('Sport reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      data: {},
      errorMsg: '',
    });
  });

  it('should handle FETCH_SPORT_REQUEST', () => {
    expect(
      reducer([], {
        type: 'FETCH_SPORT_REQUEST',
      }),
    ).toEqual({
      loading: true,
      errorMsg: '',
    });
  });

  it('should handle FETCH_SPORT_FAIL', () => {
    expect(
      reducer([], {
        type: 'FETCH_SPORT_FAIL',
      }),
    ).toEqual({
      loading: false,
      errorMsg: 'Unable to retrieve sport data',
    });
  });

  it('should handle FETCH_SPORT_SUCCESS', () => {
    expect(
      reducer([], {
        type: 'FETCH_SPORT_SUCCESS',
      }),
    ).toEqual({
      loading: false,
      errorMsg: '',
      data: undefined,
    });
  });
});
