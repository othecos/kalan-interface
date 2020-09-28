import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthGuard({ children,redirectTo  }) {
  const account = useSelector((state) => state.account);

  if (!account.user) {
    console.log(redirectTo)
    redirectTo = redirectTo ? redirectTo : '/login'
    return <Redirect to={redirectTo} />;
  }

  return children;
}

AuthGuard.propTypes = {
  children: PropTypes.any
};

export default AuthGuard;
