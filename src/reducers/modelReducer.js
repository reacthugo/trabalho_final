import { ADD_MODEL } from '../actions/actionTypes';

const initialState = {
    model: []
  };

  export const modelReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MODEL:
        console.log("Salvou o modelo de carro selecionado (id = " + action.model.id + ")");
        //alert(JSON.stringify(state.product))
        //alert(JSON.stringify(action.product))
        return {
          ...state,
          model: [...state.model, action.model] 
        };
      default:
        return state;
    }
  };