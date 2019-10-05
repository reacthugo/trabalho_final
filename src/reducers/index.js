import { carReducer } from './carReducer';
//import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  carState: carReducer//,
  //otherState: otherReducer
});