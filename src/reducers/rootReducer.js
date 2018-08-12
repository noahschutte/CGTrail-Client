import { combineReducers } from 'redux';
import businessesReducer from './businessesReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  businesses: businessesReducer,
  users: usersReducer,
});

export default rootReducer;
