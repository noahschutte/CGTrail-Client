import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  businesses: [],
  isFetching: false,
};

export default function businessesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.GET_BUSINESSES:
      return {
        ...state,
        isFetching: true,
      }
    default:
      return state;
  }
}
