import { Action } from '@/types/action';
import { globalState } from '../constants/globalAction';

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case globalState.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};

export default reducer;
