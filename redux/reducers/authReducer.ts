import { Action } from 'types/action';
import { authConstants } from '../constants/auth';
import { REQUEST, SUCCESS } from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
  messageError: '',
  type: '',
  user: {},
};

const reducer = (state = initialState, action: Action) => {
  const { payload } = action;
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
        user: payload?.response,
      };
    default:
      return state;
  }
};

export default reducer;
