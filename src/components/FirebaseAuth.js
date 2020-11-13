import React, {
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SplashScreen from 'src/components/SplashScreen';
import { setUserData, logout } from 'src/actions/accountActions';
import { isLoaded,useFirebase } from 'react-redux-firebase'
import firebase from 'firebase'

import {setAxiosInterceptors} from 'src/utils/axios';
import enhance from 'src/config/firebase/enhance';


function FirebaseAuth({ children,auth}) {
 
  const dispatch = useDispatch();
  
  const [userLoad,setUserLoad] = useState(false)
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      try{
        if (user) {
          let token = (await user.getIdToken(true))
          setAxiosInterceptors(token)
          await dispatch(setUserData(user.toJSON()));
        } else {
          await dispatch(setUserData(null));
        }
        setUserLoad(true)
      }catch(err){
        console.error('Firebase guards',err);
      }
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

export default enhance(FirebaseAuth);
