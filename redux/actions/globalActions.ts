import { globalState } from "../constants/globalAction";

export function setLoading(state) {
  return {
    type: globalState.SET_LOADING,
    payload: {
      isLoading: state
    }
  };
}