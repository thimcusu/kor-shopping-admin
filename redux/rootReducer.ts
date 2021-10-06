import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import menuReducer from './reducers/menuReducer';

const rootReducers = combineReducers({
  authReducer,
  menuReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
