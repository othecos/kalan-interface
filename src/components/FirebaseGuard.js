import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const FirebaseGuard = ({children }) => {
  const {auth} = useSelector((state) => state.firebaseReducer);
  console.log('[Auth]',auth)
  if (auth.isEmpty) {
    return <Redirect to='/login' />;
  }
  return children;
};

FirebaseGuard.propTypes = {
  children: PropTypes.any
};
export default FirebaseGuard;
