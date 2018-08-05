import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  businesses: [],
  isFetching: false,
};

export default function businessesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.BEGIN_FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case types.GET_BUSINESSES:
      return {
        ...state,
        isFetching: true,
      }
    case types.GET_BUSINESSES_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case types.GET_BUSINESSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        businesses: action.businesses,
      };
    default:
      return state;
  }
}
