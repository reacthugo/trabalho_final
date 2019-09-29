import { SELECT_MODEL } from './actionTypes';

export const selectModel = value => ({
    type: SELECT_MODEL,
    model: value
  });
