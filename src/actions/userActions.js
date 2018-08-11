import * as types from './actionTypes';
const env = process.env.REACT_APP_ENV;

let api = '';
if (env === 'development') {
  api = process.env.REACT_APP_LOCAL_API;
} else if (env === 'staging') {
  api = process.env.REACT_APP_STAGING_API;
} else if (env === 'production') {
  api = process.env.REACT_APP_PRODUCTION_API;
}

// Actions related to login, logout, account-specific effects, etc.

export function beginFetch() {
  return {
    type: types.BEGIN_FETCH,
  }
}

export function login(email, password) {
  return function(dispatch) {
    dispatch(beginFetch());
    const body = JSON.stringify({
      email,
      password
    })
    fetch(api + '/users/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body,
      method: 'POST',
    })
    .then(res => res.json())
    .then(response => {
      console.log('response: ', response);
      dispatch(loginSuccess(response));
    })
    .catch(err => {
      dispatch(loginError(err));
    })
  }
}

export function loginSuccess(usrData) {
  return {
    type: types.LOGIN_SUCCESS,
    usrData,
  }
}

export function loginError(error) {
  console.error('error: ', error);
  return {
    type: types.LOGIN_ERROR,
  }
}
