import { Action } from 'types/action';
import { authConstants } from '../constants/auth';
import { REQUEST, SUCCESS } from '../constants';
import { User } from '@/types/user';

const initialState = {
  isLoading: false,
  isError: false,
  messageError: '',
  type: '',
  user: {},
};

const reducer = (state = initialState, action: Action) => {
  const response: User = action.payload?.response;
  switch (action.type) {
    case REQUEST(authConstants.LOGIN):
      return {
        ...state,
        isLoading: true,
        type: action.type,
        messageError: '',
      };
    case SUCCESS(authConstants.LOGIN):
      return {
        ...state,
        isLoading: false,
        user: response,
      };
    default:
      return state;
  }
};

export default reducer;
