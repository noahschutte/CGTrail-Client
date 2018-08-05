import { combineReducers } from 'redux';
import businessesReducer from './businessesReducer';

const rootReducer = combineReducers({
  businesses: businessesReducer,
});

export default rootReducer;
