import { SET_MODEL, SET_VERSION } from '../actions/actionTypes';

const initialState = {
    model: null,
    version: null
  };

  export const carReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_MODEL:
        console.log("Salvou na store o modelo de carro selecionado (id = " + action.model.id + ")");
        //alert(JSON.stringify(state.model))
        //alert(JSON.stringify(action.model))
        return {
          ...state,
          model: action.model
        };
      case SET_VERSION:
        console.log("Salvou na store a versão selecionada (id = " + action.version.id + ")");
        //alert(JSON.stringify(state.version))
        //alert(JSON.stringify(action.version))
        return {
          ...state,
          version: action.version
        };
      default:
        return state;
    }
  };