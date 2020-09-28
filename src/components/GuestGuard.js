import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isLoaded,isEmpty } from 'react-redux-firebase'
function GuestGuard({ children }) {
  const { auth } = useSelector((state) => state.firebase);
  if (isLoaded(auth) && !isEmpty(auth)) {
    return <Redirect to="/app" />;
  }
  return children;
}

GuestGuard.propTypes = {
  children: PropTypes.any
};

export default GuestGuard;
