import { combineReducers } from 'redux';
import authReducer from './Auth/reducer';
import { dialogsReducer } from './Dialogs/reducer';
import { messageReducer, fetchMessagesReducer } from './Messages/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dialogs: dialogsReducer,
  messages: messageReducer,
  fetchMessages: fetchMessagesReducer,
});

export default rootReducer;
