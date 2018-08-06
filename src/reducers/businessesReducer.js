import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  business: null,
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
    case types.CLOSE_CARD:
      return {
        ...state,
        business: null,
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
    case types.SELECT_BUSINESS_MARKER:
      return {
        ...state,
        business: action.business
      }
    default:
      return state;
  }
}
