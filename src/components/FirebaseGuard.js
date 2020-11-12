import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isLoaded, isEmpty } from 'react-redux-firebase'

const FirebaseGuard = ({ children }) => {
  const { auth } = useSelector((state) => state.firebase);
  if (isLoaded(auth) && !isEmpty(auth)) {
    
    console.log('Render children')
    return children;
  } else {
    return <Redirect to="/login" />;
  }
};

FirebaseGuard.propTypes = {
  children: PropTypes.any
};
export default FirebaseGuard;
