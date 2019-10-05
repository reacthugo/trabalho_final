import { SET_MODEL, SET_VERSION, SET_COLOR, ADD_OPTIONAL, REMOVE_OPTIONAL } from './actionTypes';

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

  export const addOptional = value => ({
    type: ADD_OPTIONAL,
    optional: value
  });

  export const removeOptional = value => ({
    type: REMOVE_OPTIONAL,
    optional: value
  });