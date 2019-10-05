import { SET_MODEL, SET_VERSION, SET_COLOR } from './actionTypes';

export const setModel = value => ({
    type: SET_MODEL,
    model: value
  });

  export const setVersion = value => ({
    type: SET_VERSION,
    version: value
  });

  export const setColor = value => ({
    type: SET_COLOR,
    color: value
  });
