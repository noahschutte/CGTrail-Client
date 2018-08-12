import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  error: null,
  isFetching: false,
  jwt: null,
  isLoggedIn: false,
}

export default function usersReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.BEGIN_FETCH:
      return {
        ...state,
        isFetching: true,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jwt: action.jwt,
        isLoggedIn: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        jwt: null,
        isLoggedIn: false,
      };
    case types.LOGOUT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jwt: null,
        error: null,
        isLoggedIn: false,
      }
    case types.SET_JWT:
      return {
        ...state,
        jwt: action.jwt,
        isLoggedIn: true,
      };
    default:
      return {
        ...state,
      }
  }
}
