import React, {
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SplashScreen from 'src/components/SplashScreen';
import { setUserData, logout } from 'src/actions/accountActions';
import { isLoaded } from 'react-redux-firebase'
import firebase from 'firebase'
import authService from 'src/services/firebaseAuthService';

function FirebaseAuth({ children }) {
  const dispatch = useDispatch();
  const firebaseState = useSelector((state) => state.firebase);
  const { auth } = firebaseState
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await dispatch(setUserData(user.toJSON()));
        let token = (await user.getIdToken())
        authService.setAxiosInterceptors(token)
      } else {
        await dispatch(setUserData(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

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
