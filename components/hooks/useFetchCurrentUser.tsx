import { getCurrentUser } from '@/redux/actions';
import { RootState } from '@/redux/rootReducer';
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CookiesStorage } from 'shared/config/cookie';

function useFetchCurrentUser() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authReducer, shallowEqual);
  useEffect(() => {
    if (!CookiesStorage.authenticated()) return;
    dispatch(getCurrentUser());
  }, []);
  return {
    loggedIn: JSON.stringify(user) !== "{}",
    user,
  };
}

export default useFetchCurrentUser;