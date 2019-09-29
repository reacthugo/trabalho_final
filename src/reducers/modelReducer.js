import { SELECT_MODEL } from '../actions/actionTypes';

const initialState = {
    model: null
  };

  export const modelReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_MODEL:
        console.log("Salvou na store o modelo de carro selecionado (id = " + action.model.id + ")");
        //alert(JSON.stringify(state.model))
        //alert(JSON.stringify(action.model))
        return {
          ...state,
          model: action.model
        };
      default:
        return state;
    }
  };