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

export function beginLogout() {
  localStorage.clear();
  return {
    type: types.LOGOUT,
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
        'Access-Control-Allow-Origin': '*',
        'Acess-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'application/json, text/html'
        'Content-Type': 'application/json',
      },
      body,
      method: 'POST',
    })
    .then(res => {
      if (res.ok) {
        dispatch(loginSuccess(res.headers.get('x-auth')));
      } else {
        throw res;
      }
    })
    .catch(err => {
      dispatch(loginError(err));
    })
  }
}

export function setJWT(jwt) {
  return {
    type: types.SET_JWT,
    jwt,
  }
}

export function loginSuccess(jwt) {
  localStorage.setItem('jwt', jwt);
  return {
    type: types.LOGIN_SUCCESS,
    jwt,
  }
}

export function loginError(error) {
  console.error('error: ', error);
  return {
    type: types.LOGIN_ERROR,
  }
}

export function logout(token) {
  console.log('hit here too: ', token);
  return function(dispatch) {
    dispatch(beginLogout());
    fetch(api + '/users/logout', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Acess-Control-Allow-Methods': 'DELETE',
        'Access-Control-Allow-Headers': 'application/json, text/html'
        'Content-Type': 'application/json',
        'x-auth': token
      },
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        dispatch(logoutSuccess());
      } else {
        dispatch(logoutError(res));
      }
    })
    .catch(error => {
      dispatch(logoutError(error));
    })
  }
}

export function logoutError(error) {
  console.error('error: ', error);
  return {
    type: types.LOGOUT_ERROR,
    error,
  }
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
  }
}
