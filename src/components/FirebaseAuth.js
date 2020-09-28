import React, {
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SplashScreen from 'src/components/SplashScreen';
import { setUserData, logout } from 'src/actions/accountActions';
import authService from 'src/services/authService';
import { isLoaded } from 'react-redux-firebase'

function FirebaseAuth({ children }) {
  const { auth } = useSelector((state) => state.firebase);
  if (!isLoaded(auth)) {
    return <SplashScreen />;
  } else {
    return children
  }
}

FirebaseAuth.propTypes = {
  children: PropTypes.any
};

export default FirebaseAuth;
