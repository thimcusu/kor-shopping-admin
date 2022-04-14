import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import Router from 'next/router';

import { get, merge } from '../utils/lodashAlternative';
import { stringifyParams } from 'shared/utils';
import { CookieKey, ROUTER } from 'shared/constant/common';
import { CookiesStorage } from './cookie';
import { API_URL } from './setting';

const customizer = (objValue: any, srcValue: any, key: string) => {
  if (key === 'Accept-Language') {
    return objValue;
  }
  return null;
};

export const generateToken = () => ({
  Authorization: 'Bearer ' + CookiesStorage.getAccessToken(),
  // todo
});

const defaultOptions = {};

function getApi(path: string, options: any = {}, apiURL?: string) {
  return axios.get(`${apiURL || API_URL}/${path.replace(/^\//, '')}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function postApi(path: string, data: any, options: any = {}) {
  const headerParams = merge(options.headers, generateToken(), customizer);

  return axios.post(`${API_URL}/${path.replace(/^\//, '')}`, data, {
    ...defaultOptions,
    ...options,
    headers: headerParams,
  });
}

function putApi(path: string, data: any, options: any = {}) {
  return axios.put(`${API_URL}/${path.replace(/^\//, '')}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function patchApi(path: string, data: any, options: any = {}) {
  return axios.patch(`${API_URL}/${path.replace(/^\//, '')}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function deleteApi(path: string, options: any = {}) {
  return axios.delete(`${API_URL}/${path.replace(/^\//, '')}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function handleErrorStatus(error: any) {
  const status = error?.status || error?.response?.status || null;
  switch (status) {
    case 401:
      CookiesStorage.clearAccessToken();
      if (get(Router, 'router.route') !== ROUTER.Login) {
        return Router.push(ROUTER.Login);
      }
      return error.response;
    case 404:
      Router.replace(ROUTER.PageNotFound);
      return error;
    case 200:
    case 201:
    case 204:
    case 400:
    case 422:
      return error;
    default:
      CookiesStorage.setCookieData(CookieKey.networkError, status ? `ERR-0${status}` : 'ERR-ANOTHER');
      return error;
  }
}

axios.interceptors.response.use(
  response => {
    let data: any = response?.data;
    if (data) {
      data = camelizeKeys(data);
    }
    return handleErrorStatus({ ...response, data });
  },
  error => {
    const errorResponse = error;
    const errorData = errorResponse?.response?.data || {};
    // const errorCode = errorData?.error?.error_id;
    const errorMessageCode = errorData?.error?.message;
    const errorMessage = errorMessageCode ? errorMessageCode : errorData.message;

    errorResponse.response = {
      ...errorResponse.response,
      data: {
        ...errorData.error,
        message: errorMessage,
        errors: errorData?.error?.errors || [],
      },
    };

    if (error?.response?.status === 401 && get(Router, 'router.route') !== ROUTER.Login) {
      CookiesStorage.clearAccessToken();
      return Router.push(ROUTER.Login);
    }
    return Promise.reject(handleErrorStatus(errorResponse));
  }
);

axios.interceptors.request.use(config => {
  const newConfig = { ...config };
  if (newConfig.headers['Content-Type'] === 'multipart/form-data') return newConfig;
  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }
  return newConfig;
});

axios.defaults.paramsSerializer = params =>
  stringifyParams({
    params: decamelizeKeys({ ...params }),
    option: {
      encode: params?.tags == null || false,
    },
  });

const Api = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
  patch: patchApi,
};

export default Api;
