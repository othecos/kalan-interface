import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function LandingRoute({ component: Component, render, ...rest }) {
  const account = useSelector((state) => state.account);

  if (!account.user) {
    return <Redirect to="/" />;
  }

  return render ? render({ ...rest }) : <Component {...rest} />;
}

LandingRoute.propTypes = {
  component: PropTypes.any,
  render: PropTypes.func
};

export default LandingRoute;
