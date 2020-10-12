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
import {setAxiosInterceptors} from 'src/utils/axios';

function FirebaseAuth({ children }) {
  const dispatch = useDispatch();
  const firebaseState = useSelector((state) => state.firebase);
  const { auth } = firebaseState
  const [userLoad,setUserLoad] = useState(false)
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        let token = (await user.getIdToken(true))
        setAxiosInterceptors(token)
        await dispatch(setUserData(user.toJSON()));
      } else {
        await dispatch(setUserData(null));
      }
      setUserLoad(true)
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (!isLoaded(auth) || !userLoad) {
    return <SplashScreen />;
  } else {
    return children
  }
}

FirebaseAuth.propTypes = {
  children: PropTypes.any
};

export default FirebaseAuth;
