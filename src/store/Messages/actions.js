import {notification} from "antd";

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
    const chat = localStorage.getItem('chat' + receiver);
    if (!chat) {
      localStorage.setItem('chat' + receiver, []);
    } else dispatch(initMessages(chat));
  } else notification.error({
    message: 'Something went wrong',
  });
}

export const fetchAddMessage = (sender, receiver, message) => async (dispatch) => {
  let token = sessionStorage.getItem('x-auth-token');
  dispatch(fetchMessages());
  if (token) {
    const chat = localStorage.getItem('chat' + receiver);
    localStorage.setItem('chat' + receiver, [...chat, {
      sender: sender,
      receiver: receiver,
      message: message,
    }]);
  } else notification.error({
    message: 'Something went wrong',
  });
}