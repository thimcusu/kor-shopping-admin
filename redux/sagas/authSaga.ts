import { put, call, all, takeEvery } from 'redux-saga/effects';
import Api from 'shared/config/api';
import { URL_LOGIN, URL_GET_ME } from 'shared/constant/endpoints';
import { CookiesStorage } from 'shared/config/cookie';
import { Action, ResponseGenerator } from 'types/action';
import { authConstants, REQUEST, SUCCESS, FAILURE } from '../constants';
import { setLoading } from '../actions/globalActions';

function* login(action: Action) {
  const { params, callback } = action.payload || {};
  const dataLogin = { email: params.email, password: params.password };
  const loginApi = Api.post(URL_LOGIN, dataLogin);
  try {
    const response: ResponseGenerator = yield call(() => loginApi);
    if (response?.data) {
      const { user, token } = response.data;
      CookiesStorage.setAccessToken(token);
      yield put({
        type: SUCCESS(authConstants.LOGIN),
        payload: {
          response: {
            email: user?.email,
            userName: user?.userName,
            active: user?.active,
            admin: user?.admin,
          },
        },
      });
      if (callback) {
        callback('/dashboard');
      }
    }
  } catch (error) {
    yield put({
      type: FAILURE(authConstants.LOGIN),
      error: {},
    });
  }
}

function* getMe() {
  yield put(setLoading(true));
  try {
    const response: ResponseGenerator = yield Api.get(URL_GET_ME);
    const { user } = response.data;
    yield put({
      type: SUCCESS(authConstants.LOGIN),
      payload: {
        response: {
          email: user?.email,
          userName: user?.userName,
          active: user?.active,
          admin: user?.admin,
        },
      },
    });
    yield put(setLoading(false));
  } catch (error) {
    yield put({
      type: FAILURE(authConstants.LOGIN),
      error: {},
    });
    yield put(setLoading(false));
  }
}

function* authSaga() {
  yield all([
    takeEvery(REQUEST(authConstants.LOGIN), login), 
    takeEvery(REQUEST(authConstants.GET_ME), getMe)
  ]);
}

export default authSaga;
