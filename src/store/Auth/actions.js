import { notification } from 'antd';
import { data } from '../../data';
export const FETCH_AUTH = 'FETCH_AUTH';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAILED = 'FETCH_AUTH_FAILED';
export const FETCH_AUTH_CLEAR = 'FETCH_AUTH_CLEAR';

export const fetchAuthAction = (text, success = false) => {
  return {
    type: FETCH_AUTH,
    payload: { loading: text, success: success },
  };
};

export const fetchAuthSuccess = (text = false) => {
  return {
    type: FETCH_AUTH_SUCCESS,
    payload: { status: text },
  };
};

export const fetchAuthFailed = (text, status = 400) => {
  return {
    type: FETCH_AUTH_FAILED,
    payload: { error: text, status: status },
  };
};

export const fetchAuthClear = () => {
  return {
    type: FETCH_AUTH_CLEAR,
  };
};

export const fetchAuth = (mail, password, loadingText) => async (dispatch) => {
  dispatch(fetchAuthClear());
  dispatch(fetchAuthAction(loadingText));

  if (mail === data['users'][0].email && password === 'Qwerty1!') {
    sessionStorage.setItem('ws-auth-token', 'sesh1234567890');
    sessionStorage.setItem('x-auth-token', 'sesh1234567890');
    setTimeout(() => {
      dispatch(fetchAuthSuccess());
    }, 2000);
  } else {
    dispatch(fetchAuthFailed("User don't confirm mail", 401));
    notification.error({
      message: "User don't confirm mail",
    });
  }
};

export const fetchLogOut = () => async (dispatch) => {
  dispatch(fetchAuthClear());
  sessionStorage.removeItem('x-auth-token');
  sessionStorage.removeItem('ws-auth-token');
}