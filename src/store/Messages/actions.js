import {notification} from "antd";
import { data } from '../../data';

export const INIT_MESSAGES = 'INIT_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const NEW_MESSAGE = 'NEW_MESSAGE';

const initMessages = (data) => {
  return {
    type: INIT_MESSAGES,
    payload: data,
  }
}

export const addMessage = (data) => {
  return {
    type: ADD_MESSAGE,
    payload: data,
  }
}

const fetchMessages = () => {
  return {
    type: FETCH_MESSAGE,
  }
}

export const fetchInitMessages = (receiver) => async (dispatch) => {
  let token = sessionStorage.getItem('x-auth-token');
  dispatch(fetchMessages());
  if (token) {
    const messages = JSON.parse(localStorage.getItem(`chat${receiver}`));
    if (!messages) {
      localStorage.setItem('chat' + receiver, JSON.stringify(data['messages'][receiver]));
      dispatch(initMessages(data['messages'][receiver]));
    } else dispatch(initMessages(messages));
  } else notification.error({
    message: 'Something went wrong',
  });
}

export const fetchAddMessage = ({sender, receiver, message}) => async (dispatch) => {
  let token = sessionStorage.getItem('x-auth-token');
  dispatch(fetchMessages());
  if (token) {
    const messages = JSON.parse(localStorage.getItem(`chat${receiver}`));
    localStorage.setItem(`chat${receiver}`, JSON.stringify([...messages, {
      uidSender: sender,
      message: message,
    }]));
    dispatch(addMessage({
      uidSender: sender,
      message: message,
    }));
  } else notification.error({
    message: 'Something went wrong',
  });
}