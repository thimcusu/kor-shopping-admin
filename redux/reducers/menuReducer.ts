import { Action } from '@/types/action';
import { menuState } from '../constants/menuAction';

const initialState = {
  isExpanded: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case menuState.COLLAPSE:
      return {
        ...state,
        isExpanded: false,
      };
    case menuState.EXPANDED:
      return {
        ...state,
        isExpanded: true,
      };
    default:
      return state;
  }
};

export default reducer;
