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

export function beginFetch() {
  return {
    type: types.BEGIN_FETCH,
  };
}

export function closeCard() {
  return {
    type: types.CLOSE_CARD,
  };
}

export function getBusinesses() {
  return function(dispatch) {
    dispatch(beginFetch());
    /* eslint-disable-next-line */
    fetch(api + '/businesses', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json, text/html',
      },
    })
      .then(res => res.json())
      .then(response => {
        dispatch(getBusinessesSuccess(response));
      })
      .catch(err => {
        dispatch(getBusinessesError(err));
      });
  };
}

export function getBusinessesError(error) {
  console.error('error: ', error);
  return {
    type: types.GET_BUSINESSES_ERROR,
  };
}

export function getBusinessesSuccess(businesses) {
  return {
    type: types.GET_BUSINESSES_SUCCESS,
    businesses,
  };
}

export function saveBusiness(businessData, token) {
  return function(dispatch) {
    dispatch(beginFetch());
    /* eslint-disable */
    fetch(api + '/businesses', {
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'x-auth': token,
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, x-auth',
        'Content-Type': 'application/json',
      }),
      method: 'POST',
      body: JSON.stringify(businessData),
    })
      .then(res => res.json())
      .then(response => {
        console.log('response: ', response);
      })
      .catch(err => {
        dispatch(saveBusinessError(err));
      });
  };
}

export function saveBusinessError(error) {
  console.log('error: ', error);
  return {
    type: types.SAVE_BUSINESS_ERROR,
  };
}

export function saveBusinessSuccess() {
  return {
    type: types.SAVE_BUSINESS_SUCCESS,
  };
}

export function selectBusinessMarker(business) {
  return {
    type: types.SELECT_BUSINESS_MARKER,
    business,
  };
}
