import { SET_MODEL, SET_VERSION } from './actionTypes';

export const setModel = value => ({
    type: SET_MODEL,
    model: value
  });

  export const setVersion= value => ({
    type: SET_VERSION,
    version: value
  });
