import { INIT_DIALOGS, ADD_DIALOG } from './actions';

const initialState = [];

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_DIALOGS:
      return action.payload;
    case ADD_DIALOG:
      return [...state, action.payload];
    default:
      return state;
  }
}
