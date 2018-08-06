import * as types from './actionTypes';

const local_api = 'http://localhost:8000'

export function beginFetch() {
  return {
    type: types.BEGIN_FETCH,
  };
}

export function closeCard() {
  return {
    type: types.CLOSE_CARD
  }
}

export function getBusinesses() {
  return function(dispatch) {
    dispatch(beginFetch());
    fetch(local_api + '/businesses')
      .then(res => res.json())
      .then(response => {
        dispatch(getBusinessesSuccess(response));
      })
      .catch(err => {
        dispatch(getBusinessesError(err));
      })
  }
}

export function getBusinessesError(error) {
  console.error('error: ', error);
  return {
    type: types.GET_BUSINESSES_ERROR
  }
}

export function getBusinessesSuccess(businesses) {
  return {
    type: types.GET_BUSINESSES_SUCCESS,
    businesses,
  }
}

export function selectBusinessMarker(business) {
  return {
    type: types.SELECT_BUSINESS_MARKER,
    business,
  }
}
