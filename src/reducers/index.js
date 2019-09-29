import { modelReducer } from './modelReducer';
//import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  modelState: modelReducer//,
  //otherState: otherReducer
});