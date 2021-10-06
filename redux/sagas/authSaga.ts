import { put, call, all, takeEvery } from 'redux-saga/effects';
import Api from 'shared/config/api';
import { URL_LOGIN } from 'shared/constant/endpoints';
import { CookiesStorage } from 'shared/config/cookie';
import { Action, ResponseGenerator } from 'types/action';
import { authConstants, REQUEST, SUCCESS, FAILURE } from '../constants';

function* login(action: Action) {
  const { params, callback } = action.payload || {};
  const dataLogin = { nickname: params.userName, password: params.password };
  const loginApi = Api.post(URL_LOGIN, dataLogin);

  try {
    const response: ResponseGenerator = yield call(() => loginApi);
    if (response?.data?.success) {
      CookiesStorage.setAccessToken(response.data.data.accessToken);
      yield put({
        type: SUCCESS(authConstants.LOGIN),
        payload: {
          response: {
            fullName: 'Welcome',
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

function* authSaga() {
  yield all([takeEvery(REQUEST(authConstants.LOGIN), login)]);
}

export default authSaga;
