import { SET_MODEL, SET_VERSION, SET_COLOR } from '../actions/actionTypes';

const initialState = {
    model: null,
    version: null,
    color: null
  };

  export const carReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_MODEL:
        if(action.model !== null)
          console.log("Salvou na store o modelo de carro selecionado (id = " + action.model.id + ")");
        else
          console.log("Foi removido da store o modelo de carro");
        //alert(JSON.stringify(state.model))
        //alert(JSON.stringify(action.model))
        return {
          ...state,
          model: action.model
        };
      case SET_VERSION:
        if(action.version !== null)
          console.log("Salvou na store a versão selecionada (id = " + action.version.id + ")");
        else
          console.log("Foi removido da store a versão do carro");
        //alert(JSON.stringify(state.version))
        //alert(JSON.stringify(action.version))
        return {
          ...state,
          version: action.version
        };
      case SET_COLOR:
        if(action.color !== null)
          console.log("Salvou na store a cor selecionada (id = " + action.color.id + ")");
        else
          console.log("Foi removido da store a cor do carro");
        //alert(JSON.stringify(state.color))
        //alert(JSON.stringify(action.color))
        return {
          ...state,
          color: action.color
        };
      default:
        return state;
    }
  };