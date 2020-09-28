import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function LandingGuard({ children  }) {
  const account = useSelector((state) => state.account);

  if (account.user) {
    return <Redirect to="/app" />;
  }

  return children;
}

LandingGuard.propTypes = {
  children: PropTypes.any
};

export default LandingGuard;
