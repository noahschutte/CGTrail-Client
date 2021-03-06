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
  };
}

export function beginLogout() {
  window.localStorage.clear();
  return {
    type: types.LOGOUT,
  };
}

export function login(email, password, callback) {
  return function(dispatch) {
    dispatch(beginFetch());
    const body = JSON.stringify({
      email,
      password,
    });
    /* eslint-disable-next-line */
    fetch(api + '/users/login', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
      },
      body,
      method: 'POST',
    })
      .then(res => {
        if (res.ok) {
          dispatch(loginSuccess(res.headers.get('x-auth')));
          callback();
        } else {
          throw res;
        }
      })
      .catch(err => {
        dispatch(loginError(err));
      });
  };
}

export function setJWT(jwt) {
  return {
    type: types.SET_JWT,
    jwt,
  };
}

export function loginSuccess(jwt) {
  window.localStorage.setItem('jwt', jwt);
  return {
    type: types.LOGIN_SUCCESS,
    jwt,
  };
}

export function loginError(error) {
  console.error('error: ', error);
  return {
    type: types.LOGIN_ERROR,
  };
}

export function logout(token) {
  return function(dispatch) {
    dispatch(beginLogout());
    /* eslint-disable-next-line */
    fetch(api + '/users/logout', {
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json, text/html',
        'x-auth': token,
      },
      method: 'DELETE',
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
      });
  };
}

export function logoutError(error) {
  console.error('error: ', error);
  return {
    type: types.LOGOUT_ERROR,
    error,
  };
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
  };
}
