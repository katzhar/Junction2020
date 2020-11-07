import {notification} from "antd";

export const INIT_DIALOGS = 'INIT_DIALOGS';
export const ADD_DIALOG = 'ADD_DIALOG';

const initDialogs = (dialogs) => {
  return {
    type: INIT_DIALOGS,
    payload: dialogs,
  }
}

const addDialog = (dialog) => {
  return {
    type: ADD_DIALOG,
    payload: dialog,
  }
}

export const fetchInitDialogs = () => async (dispatch) => {
  const token = sessionStorage.getItem('x-auth-token');
  if (token) {
    const dialogs = localStorage.getItem('dialogs');
    if (!dialogs) {
      localStorage.setItem('dialogs', []);
      dispatch(initDialogs([]));
    } else dispatch(initDialogs(dialogs));
  } else notification.error({
    message: 'User not authorized',
  });
}

export const fetchAddDialog = (dialog) => async (dispatch) => {
  const token = sessionStorage.getItem('x-auth-token');
  if (token) {
    dispatch(addDialog(dialog));
    localStorage.setItem('dialogs', [...localStorage.getItem('dialogs'), dialog]);
  }
}