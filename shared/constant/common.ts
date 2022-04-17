const USER_TYPE = {
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN',
};

const CookieKey = {
  accessToken: 'accessToken',
  currentRoles: 'CurrentRoles',
  previousUrl: 'previousUrl',
  networkError: 'networkError',
};

const ROUTER = {
  Home: '/',
  PageNotFound: '/404',
  Login: '/login',
  Dashboard: '/dashboard',
};

const RouterPath = {
  IssueMeetingURL: '/meeting-url',
  UserManagement: '/users',
  Home: '/dashboard',
  PageNotFound: '/404',
  Login: '/login',
  ReissuePassword: '/reissue-password',
  BusinessManagement: '/companies',
  ContractManagement: '/contracts',
  ResetPassword: '/reset-password',
};

export { ROUTER, USER_TYPE, CookieKey, RouterPath };
