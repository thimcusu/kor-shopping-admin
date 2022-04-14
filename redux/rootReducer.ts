import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import menuReducer from './reducers/menuReducer';
import globalReducer from './reducers/globalReducer';

const rootReducers = combineReducers({
  authReducer,
  menuReducer,
  globalReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
