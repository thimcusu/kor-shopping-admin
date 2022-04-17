import { useState } from 'react';
import { getCurrentUser } from '@/redux/actions/authActions';
import { RootState } from '@/redux/rootReducer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CookiesStorage } from 'shared/config/cookie';
import Router from 'next/router';
import LoadingPage from '../common/loading/LoadingPage';

const withAuth = (WrappedComponent: any) => {
  const Component = props => {
    const { user, getUser } = props;
    useEffect(() => {
      if (!CookiesStorage.authenticated()) {
        Router.push('/login');
      };
      getUser();
    }, []);

    return <WrappedComponent {...props} />;
  };
  const mapStateToProps = state => ({
    user: state.authReducer.user,
  });

  const mapDispatchToProps = dispatch => {
    return {
      getUser: () => dispatch(getCurrentUser()),
    };
  };
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

export default withAuth;
