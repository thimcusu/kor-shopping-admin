import { Payload } from 'types/action';
import { REQUEST, authConstants } from '../constants';

export const loginUser = (payload: Payload) => ({
  type: REQUEST(authConstants.LOGIN),
  payload,
});

export const logout = (callback: any) => ({
  type: REQUEST(authConstants.LOGOUT),
  callback,
});
